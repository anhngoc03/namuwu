/**
 * functions/api.js
 * ------------------------------------------------------------------
 * Cloudflare Pages Function — THAY THẾ cho Code.gs (Apps Script Web App).
 * Route: POST /api  (vì file này nằm ở functions/api.js)
 *
 * Nhận cùng format request mà gas-bridge.js đang gửi:
 *   { action: 'tenHam', args: [ ... ] }
 * Trả về JSON cùng format cũ:
 *   { ok: true,  data: <kết quả> }
 *   { ok: false, error: '<thông báo lỗi>' }
 *
 * Dữ liệu lưu ở Supabase (Postgres), gọi qua REST API (PostgREST) bằng
 * SERVICE ROLE KEY lấy từ biến môi trường (Settings → Environment variables
 * trên Cloudflare Pages) — KHÔNG hardcode key trong code.
 * ------------------------------------------------------------------
 */

import { makeVapidKeys, sendPush } from '../lib/push.js';
import * as drive from '../lib/drive.js';

// ---------- Helper gọi Supabase REST (PostgREST) ----------
async function sb(env, path, options = {}) {
  const url = `${env.SUPABASE_URL}/rest/v1/${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      apikey: env.SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: options.prefer || 'return=representation',
      ...(options.headers || {})
    }
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase ${res.status}: ${text || res.statusText}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

/* ---------------------------- AUTH (PERSONAL) ---------------------------- */
// Personal = Account + Expense. Mật khẩu 4 số lưu ở bảng `pass` (menu = 'DS_personal',
// tạm fallback 'DS_accounts' nếu chưa đổi tên) — KHÔNG lưu dạng chữ thường nữa mà lưu
// "hmac1$<salt>$<hash>" (HMAC-SHA256 với khoá suy ra từ PERSONAL_SECRET). Mật khẩu cũ
// dạng chữ thường vẫn đăng nhập được, và được tự đổi sang dạng hash ở lần đăng nhập đúng đầu tiên.
// Đăng nhập đúng → server cấp TOKEN có chữ ký HMAC (hạn 2 giờ). Mọi action của Account
// và Expense đều bị từ chối nếu không kèm token hợp lệ → gọi thẳng /api cũng không lấy được.
// Sai 5 lần liên tiếp → khoá đăng nhập 15 phút (đếm ở bảng personal_auth).
//
// ⚠ PERSONAL_SECRET giờ còn là chìa khoá giải mã mật khẩu trong Account (xem SECRETS bên dưới).
//   ĐỪNG đổi / xoá biến này trên Cloudflare — đổi là không mở được dữ liệu đã mã hoá.

const PERSONAL_TOKEN_TTL_MS = 2 * 3600 * 1000;
const PERSONAL_MAX_FAILS = 5;
const PERSONAL_LOCK_MS = 15 * 60 * 1000;
const ACCOUNT_ACTIONS_ = ['getAccountsData', 'addAccountRow', 'updateAccountRow', 'saveAccountType'];

function isPersonalAction_(action) {
  if (ACCOUNT_ACTIONS_.indexOf(action) !== -1) return true;
  // Mọi action Expense đều cần token, trừ ô tóm tắt "Today's spending" ở Home (giữ công khai theo yêu cầu).
  if (/Work/.test(action)) return action !== 'getWorkHomeSummary';   // Home chỉ được xem con số
  if (/Post|Calendar/.test(action)) return true;
  if (action === 'saveHomeProfile') return true;
  if (action === 'saveVillageNames') return true;      // anyone sees the names, only you change them
  if (/Push|Reminder/.test(action)) return action !== 'runReminders';
  if (/Study/.test(action)) return true;
  if (/Library/.test(action)) return true;            // the documents you imported + searching them
  if (/^(getNotesData|saveNote|deleteNote)$/.test(action) || /Goal|Health|Law/.test(action)) return true;   // Notes, Goals, Food & Gym, Law                // Languages / Skills: roadmaps, lessons, tests
  if (/Love|Drive|google/.test(action)) return true;   // Love album + Google Drive link   // settings + this device; the timer itself is public        // anyone sees the Home photo/name, only you change it
  return /Expense/.test(action) && action !== 'getExpenseTodayTotal';
}

async function personalSign_(env, text) {
  if (!env.PERSONAL_SECRET) throw new Error('PERSONAL_SECRET is not set on the server');
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(env.PERSONAL_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(text)));
  let bin = '';
  for (let i = 0; i < sig.length; i++) bin += String.fromCharCode(sig[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/* ---- SECRETS: keys derived from PERSONAL_SECRET (HKDF), one per purpose ---- */
const KEY_CACHE_ = {};
function b64u_(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function unb64u_(str) {
  const bin = atob(String(str).replace(/-/g, '+').replace(/_/g, '/'));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
async function derivedKey_(env, purpose, algo, usages) {
  if (!env.PERSONAL_SECRET) throw new Error('PERSONAL_SECRET is not set on the server');
  const id = purpose + '|' + env.PERSONAL_SECRET.length;
  if (KEY_CACHE_[id]) return KEY_CACHE_[id];
  const enc = new TextEncoder();
  const base = await crypto.subtle.importKey('raw', enc.encode(env.PERSONAL_SECRET), 'HKDF', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    { name: 'HKDF', hash: 'SHA-256', salt: enc.encode('namuwu.v1'), info: enc.encode(purpose) },
    base, algo, false, usages);
  KEY_CACHE_[id] = key;
  return key;
}

// Account fields at rest: "enc:v1:<iv>.<ciphertext>" (AES-256-GCM). Plain values (old rows)
// pass through untouched and get encrypted the next time Account data is read.
const ENC_PREFIX_ = 'enc:v1:';
async function encryptField_(env, plain) {
  plain = plain == null ? '' : String(plain);
  if (!plain || plain.indexOf(ENC_PREFIX_) === 0) return plain;
  const key = await derivedKey_(env, 'accounts-aes', { name: 'AES-GCM', length: 256 }, ['encrypt', 'decrypt']);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(plain)));
  return ENC_PREFIX_ + b64u_(iv) + '.' + b64u_(ct);
}
async function decryptField_(env, value) {
  value = value == null ? '' : String(value);
  if (value.indexOf(ENC_PREFIX_) !== 0) return value;
  const key = await derivedKey_(env, 'accounts-aes', { name: 'AES-GCM', length: 256 }, ['encrypt', 'decrypt']);
  const parts = value.slice(ENC_PREFIX_.length).split('.');
  try {
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64u_(parts[0]) }, key, unb64u_(parts[1]));
    return new TextDecoder().decode(pt);
  } catch (e) {
    // Never hand back blanks the UI could save over the real data.
    throw new Error("Can't decrypt Account data — was PERSONAL_SECRET changed?");
  }
}

// Personal password (PIN) at rest: "hmac1$<salt>$<mac>". Keyed with the server secret, so
// even a leaked database can't be brute-forced offline (a 4-digit PIN alone could be).
async function pinHash_(env, pin, salt) {
  const key = await derivedKey_(env, 'personal-pin', { name: 'HMAC', hash: 'SHA-256', length: 256 }, ['sign']);
  const mac = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(salt + ':' + pin)));
  return 'hmac1$' + salt + '$' + b64u_(mac);
}
function sameText_(a, b) {
  a = String(a); b = String(b);
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0;
}
async function pinMatches_(env, stored, pin) {
  stored = String(stored || '').trim(); pin = String(pin || '').trim();
  if (!stored || !pin) return false;
  if (stored.indexOf('hmac1$') === 0) return sameText_(await pinHash_(env, pin, stored.split('$')[1]), stored);
  return sameText_(stored, pin);   // old plain-text row
}

async function personalMakeToken_(env) {
  const exp = String(Date.now() + PERSONAL_TOKEN_TTL_MS);
  return exp + '.' + await personalSign_(env, 'personal.' + exp);
}

async function personalVerifyToken_(env, token) {
  if (!token || typeof token !== 'string') return false;
  const dot = token.indexOf('.');
  if (dot < 1) return false;
  const exp = token.slice(0, dot), sig = token.slice(dot + 1);
  if (!/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  const expect = await personalSign_(env, 'personal.' + exp);
  if (sig.length !== expect.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expect.charCodeAt(i);
  return diff === 0;
}

// Luôn trả object (không throw khi sai mật khẩu) để frontend hiện thông báo đúng:
//   { ok:true, token } | { ok:false, attemptsLeft } | { ok:false, lockedSeconds }
async function personalLogin(env, [code]) {
  await personalSign_(env, 'check'); // báo lỗi rõ ràng nếu thiếu PERSONAL_SECRET
  let rows = await sb(env, 'personal_auth?id=eq.1&select=fails,locked_until');
  if (!rows.length) {
    await sb(env, 'personal_auth', { method: 'POST', body: JSON.stringify([{ id: 1, fails: 0, locked_until: null }]), prefer: 'return=minimal' });
    rows = [{ fails: 0, locked_until: null }];
  }
  const now = Date.now();
  const lockedUntil = rows[0].locked_until ? Date.parse(rows[0].locked_until) : 0;
  if (lockedUntil > now) return { ok: false, lockedSeconds: Math.ceil((lockedUntil - now) / 1000) };

  let menu = 'DS_personal';
  let pr = await sb(env, 'pass?menu=eq.DS_personal&select=pass');
  if (!pr.length) { menu = 'DS_accounts'; pr = await sb(env, 'pass?menu=eq.DS_accounts&select=pass'); }
  const stored = pr.length ? String(pr[0].pass || '').trim() : '';
  const good = await pinMatches_(env, stored, code);

  if (good) {
    await sb(env, 'personal_auth?id=eq.1', { method: 'PATCH', body: JSON.stringify({ fails: 0, locked_until: null }), prefer: 'return=minimal' });
    if (stored.indexOf('hmac1$') !== 0) {
      // first login since the upgrade: replace the plain-text PIN with its hash
      const salt = b64u_(crypto.getRandomValues(new Uint8Array(16)));
      await sb(env, 'pass?menu=eq.' + menu, { method: 'PATCH', body: JSON.stringify({ pass: await pinHash_(env, String(code).trim(), salt) }), prefer: 'return=minimal' });
    }
    return { ok: true, token: await personalMakeToken_(env) };
  }
  const fails = (Number(rows[0].fails) || 0) + 1;
  if (fails >= PERSONAL_MAX_FAILS) {
    await sb(env, 'personal_auth?id=eq.1', {
      method: 'PATCH', body: JSON.stringify({ fails: 0, locked_until: new Date(now + PERSONAL_LOCK_MS).toISOString() }), prefer: 'return=minimal'
    });
    return { ok: false, lockedSeconds: Math.ceil(PERSONAL_LOCK_MS / 1000) };
  }
  await sb(env, 'personal_auth?id=eq.1', { method: 'PATCH', body: JSON.stringify({ fails: fails }), prefer: 'return=minimal' });
  return { ok: false, attemptsLeft: PERSONAL_MAX_FAILS - fails };
}

/* -------------------------- ACCOUNTS --------------------------- */

// account / password / note are stored encrypted (encryptField_); type + "of" stay readable
// because they're used for grouping and sorting.
const ACCOUNT_SECRET_FIELDS_ = ['account', 'password', 'note'];
async function encryptAccountFields_(env, row) {
  const out = Object.assign({}, row);
  for (const f of ACCOUNT_SECRET_FIELDS_) out[f] = await encryptField_(env, row[f] || '');
  return out;
}

async function getAccountsData(env) {
  const rows = await sb(env, 'accounts?select=id,type,of,account,password,note&order=id.asc');
  const result = {};
  for (const r of rows) {
    // old plain rows → encrypt them in place now
    if (ACCOUNT_SECRET_FIELDS_.some((f) => r[f] && String(r[f]).indexOf(ENC_PREFIX_) !== 0)) {
      const patch = {};
      for (const f of ACCOUNT_SECRET_FIELDS_) patch[f] = await encryptField_(env, r[f] || '');
      await sb(env, `accounts?id=eq.${Number(r.id)}`, { method: 'PATCH', body: JSON.stringify(patch), prefer: 'return=minimal' });
    }
    const type = String(r.type || '').trim();
    if (!type) continue;
    if (!result[type]) result[type] = [];
    result[type].push({
      row: r.id,
      of: r.of || '',
      account: await decryptField_(env, r.account),
      password: await decryptField_(env, r.password),
      note: await decryptField_(env, r.note)
    });
  }
  return result;
}

async function addAccountRow(env, [type, of, account, password, note]) {
  await sb(env, 'accounts', {
    method: 'POST',
    body: JSON.stringify([await encryptAccountFields_(env, { type, of, account, password, note })])
  });
  return getAccountsData(env);
}

async function updateAccountRow(env, [rowNumber, type, of, account, password, note]) {
  await sb(env, `accounts?id=eq.${Number(rowNumber)}`, {
    method: 'PATCH',
    body: JSON.stringify(await encryptAccountFields_(env, { type, of, account, password, note }))
  });
  return getAccountsData(env);
}

async function saveAccountType(env, [oldType, newType, rows]) {
  await sb(env, `accounts?type=eq.${encodeURIComponent(oldType)}`, { method: 'DELETE' });
  if (rows && rows.length) {
    const payload = [];
    for (const r of rows) {
      payload.push(await encryptAccountFields_(env, {
        type: newType,
        of: r.of || '',
        account: r.account || '',
        password: r.password || '',
        note: r.note || ''
      }));
    }
    await sb(env, 'accounts', { method: 'POST', body: JSON.stringify(payload) });
  }
  return getAccountsData(env);
}

/* --------------------------- SYMBOLS ---------------------------- */

async function getSymbolsData(env) {
  const [small, animal, medium] = await Promise.all([
    sb(env, 'symbols?select=type,value&type=eq.small&order=id.asc'),
    sb(env, 'symbols?select=type,value&type=eq.animal&order=id.asc'),
    sb(env, 'symbols?select=type,value&type=eq.medium&order=id.asc')
  ]);
  return [...small, ...animal, ...medium].map((r) => ({ value: r.value, type: r.type }));
}

async function addSymbol(env, [type, value]) {
  await sb(env, 'symbols', { method: 'POST', body: JSON.stringify([{ type, value }]) });
  return getSymbolsData(env);
}

async function addSymbolsBatch(env, [items]) {
  if (items && items.length) {
    const payload = items.map((it) => ({ type: it.type, value: it.value }));
    await sb(env, 'symbols', { method: 'POST', body: JSON.stringify(payload) });
  }
  return getSymbolsData(env);
}

/* ------------------------ MEMORY MATCH LEADERBOARD ---------------------- */

async function getLeaderboard(env) {
  const rows = await sb(env, 'game_leaderboard?select=name,time,moves&order=time.asc,moves.asc&limit=5');
  return rows;
}

async function submitScore(env, [name, timeSeconds, moves]) {
  await sb(env, 'game_leaderboard', {
    method: 'POST',
    body: JSON.stringify([{ name: String(name || '').trim() || 'Anonymous', time: Number(timeSeconds), moves: Number(moves) }])
  });
  const all = await sb(env, 'game_leaderboard?select=id,name,time,moves&order=time.asc,moves.asc');
  const top5 = all.slice(0, 5);
  const rest = all.slice(5);
  if (rest.length) {
    const ids = rest.map((r) => r.id).join(',');
    await sb(env, `game_leaderboard?id=in.(${ids})`, { method: 'DELETE', prefer: 'return=minimal' });
  }
  return top5.map(({ name, time, moves }) => ({ name, time, moves }));
}

/* ------------------------- MOCHI FLY LEADERBOARD ------------------------- */

async function getMochiLeaderboard(env) {
  return sb(env, 'mochi_leaderboard?select=name,score&order=score.desc&limit=5');
}

async function submitMochiScore(env, [name, score]) {
  await sb(env, 'mochi_leaderboard', {
    method: 'POST',
    body: JSON.stringify([{ name: String(name || '').trim() || 'Anonymous', score: Number(score) }])
  });
  const all = await sb(env, 'mochi_leaderboard?select=id,name,score&order=score.desc');
  const top5 = all.slice(0, 5);
  const rest = all.slice(5);
  if (rest.length) {
    const ids = rest.map((r) => r.id).join(',');
    await sb(env, `mochi_leaderboard?id=in.(${ids})`, { method: 'DELETE', prefer: 'return=minimal' });
  }
  return top5.map(({ name, score }) => ({ name, score }));
}

/* --------------------------- EATING TRACKER ------------------------------ */

async function getEatingData(env) {
  const rows = await sb(env, 'eating?select=day,yakult&order=day.asc');
  return rows.map((r) => ({
    day: r.day,
    yakultMarked: r.yakult !== null,
    yakultYes: r.yakult === true
  }));
}

// state: 'yes' | 'no' | null (chưa ghi). Bấm ô ngày trên frontend xoay vòng: chưa ghi → yes → no → chưa ghi.
async function saveEatingDay(env, [day, state]) {
  const val = state === 'yes' ? true : state === 'no' ? false : null;
  await sb(env, `eating?day=eq.${Number(day)}`, {
    method: 'PATCH',
    body: JSON.stringify({ yakult: val }),
    prefer: 'return=minimal'
  });
  return getEatingData(env);
}

async function resetEatingData(env) {
  await sb(env, 'eating?day=gt.0', {
    method: 'PATCH',
    body: JSON.stringify({ yakult: null }),
    prefer: 'return=minimal'
  });
  return getEatingData(env);
}

/* --------------------------- MINESWEEPER LEADERBOARD ------------------------------ */
// Bảng minesweeper_leaderboard: id | difficulty ('easy'/'normal'/'hard') | name | time.
// Top 5 riêng theo từng difficulty, xếp theo thời gian nhanh nhất.

async function getMinesweeperLeaderboard(env, [difficulty]) {
  const rows = await sb(
    env,
    `minesweeper_leaderboard?select=name,time&difficulty=eq.${encodeURIComponent(difficulty)}&order=time.asc&limit=5`
  );
  return rows;
}

async function submitMinesweeperScore(env, [difficulty, name, time]) {
  await sb(env, 'minesweeper_leaderboard', {
    method: 'POST',
    body: JSON.stringify([{ difficulty, name: String(name || '').trim() || 'Anonymous', time: Number(time) }])
  });
  const all = await sb(
    env,
    `minesweeper_leaderboard?select=id,name,time&difficulty=eq.${encodeURIComponent(difficulty)}&order=time.asc`
  );
  const top5 = all.slice(0, 5);
  const rest = all.slice(5);
  if (rest.length) {
    const ids = rest.map((r) => r.id).join(',');
    await sb(env, `minesweeper_leaderboard?id=in.(${ids})`, { method: 'DELETE', prefer: 'return=minimal' });
  }
  return top5.map(({ name, time }) => ({ name, time }));
}

/* --------------------------- QR COLLECTION ------------------------------ */
// Bảng qr_codes: id | name | link | note | embed_logo. Không cần cột ảnh — QR
// được tự sinh từ "link" ngay trên trình duyệt (client-side), không cần Storage.
// embed_logo: có chèn logo favicon vào giữa mã QR hay không (tuỳ người dùng chọn).

async function getQrData(env) {
  const rows = await sb(env, 'qr_codes?select=id,name,link,note,embed_logo&order=name.asc');
  return rows.map((r) => ({
    row: r.id,
    name: r.name,
    link: r.link,
    note: r.note || '',
    embedLogo: r.embed_logo !== false
  }));
}

async function addQrRow(env, [name, link, note, embedLogo]) {
  await sb(env, 'qr_codes', {
    method: 'POST',
    body: JSON.stringify([{ name, link, note, embed_logo: embedLogo !== false }])
  });
  return getQrData(env);
}

async function updateQrRow(env, [rowNumber, name, link, note, embedLogo]) {
  await sb(env, `qr_codes?id=eq.${rowNumber}`, {
    method: 'PATCH',
    body: JSON.stringify({ name, link, note, embed_logo: embedLogo !== false })
  });
  return getQrData(env);
}

async function deleteQrRow(env, [rowNumber]) {
  await sb(env, `qr_codes?id=eq.${rowNumber}`, { method: 'DELETE', prefer: 'return=minimal' });
  return getQrData(env);
}

/* --------------------------- HOME TO DO LIST ------------------------------ */

async function deleteStaleCompletedHomeItems(env) {
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  await sb(env, `home_todos?check=eq.true&completed_at=lt.${twoHoursAgo}`, {
    method: 'DELETE',
    prefer: 'return=minimal'
  });
}

async function getHomeData(env) {
  await deleteStaleCompletedHomeItems(env);
  const rows = await sb(env, 'home_todos?select=id,check,todolist,deadline&order=id.desc');
  return rows.map((r) => ({
    row: r.id,
    checked: r.check === true,
    todolist: r.todolist || '',
    deadline: r.deadline || ''
  }));
}

async function addHomeItem(env, [todolist, deadline]) {
  await sb(env, 'home_todos', {
    method: 'POST',
    body: JSON.stringify([{ check: false, todolist: todolist || '', deadline: deadline || null }])
  });
  return getHomeData(env);
}

async function updateHomeItem(env, [rowNumber, todolist, deadline]) {
  await sb(env, `home_todos?id=eq.${rowNumber}`, {
    method: 'PATCH',
    body: JSON.stringify({ todolist: todolist || '', deadline: deadline || null })
  });
  return getHomeData(env);
}

async function toggleHomeCheck(env, [rowNumber, checked]) {
  await sb(env, `home_todos?id=eq.${rowNumber}`, {
    method: 'PATCH',
    body: JSON.stringify({
      check: !!checked,
      completed_at: checked ? new Date().toISOString() : null
    }),
    prefer: 'return=minimal'
  });
  return getHomeData(env);
}

async function resetHomeData(env) {
  await sb(env, 'home_todos?id=gt.0', { method: 'DELETE', prefer: 'return=minimal' });
  return [];
}

/* --------------------------- EXPENSE TRACKER ------------------------------ */

function expenseTodayStr_() {
  // Cloudflare chạy UTC → quy về giờ Việt Nam (UTC+7) để "hôm nay"/"tháng này" đúng với người dùng.
  var d = new Date(Date.now() + 7 * 3600 * 1000);
  return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0');
}
function expenseCurrentPeriod_() {
  return expenseTodayStr_().slice(0, 7);
}
function expensePrevPeriodStart_(period) {
  var y = Number(period.slice(0, 4)), m = Number(period.slice(5, 7));
  m -= 1; if (m < 1) { m = 12; y -= 1; }
  return y + '-' + String(m).padStart(2, '0') + '-01';
}
function expenseNextPeriodStart_(period) {
  var y = Number(period.slice(0, 4)), m = Number(period.slice(5, 7));
  m += 1; if (m > 12) { m = 1; y += 1; }
  return y + '-' + String(m).padStart(2, '0') + '-01';
}

// Budget đánh dấu "Repeat every month": khi mở ĐÚNG tháng hiện tại mà tháng này
// chưa có budget, tự copy từ tháng gần nhất trước đó — NHƯNG chỉ khi bản ghi
// gần nhất đó đang bật repeat (tắt repeat ở tháng nào thì dừng từ đó).
/* ---- Budget chuyển tháng (rollover) ----
   Từ BUDGET_CARRY_START_ trở đi, MỌI budget category đều mang phần dư (+) / lố (−) của
   tháng trước sang tháng sau, cộng dồn mãi (có thể ÂM).
   - Bật "Repeat every month": budget đặt (amount) tự theo sang các tháng sau.
   - Không bật: sang tháng sau budget đặt về 0 — chỉ còn phần dư/lố mang sang
     (category vẫn hiện nếu phần đó khác 0), cho tới khi đặt budget mới.
   Tháng không mở app (chưa có dòng) được coi như đã lặp lại budget Repeat gần nhất.
   Budget tổng (Monthly) = tổng budget hiệu lực các category.
   unbudgetedDebt: tổng tiền tiêu ở category KHÔNG có budget trong các tháng trước
   (số âm) — dùng cho "được tiêu hôm nay" ở Home để phần đó cũng được mang sang. */
const BUDGET_CARRY_START_ = '2026-10';
function expensePeriodAdd_(period, n) {
  var y = Number(period.slice(0, 4)), m = Number(period.slice(5, 7)) - 1 + n;
  y += Math.floor(m / 12); m = ((m % 12) + 12) % 12;
  return y + '-' + String(m + 1).padStart(2, '0');
}
async function expenseBudgetsFor_(env, period) {
  var rows = await sb(env, 'expense_category_budget?period=lte.' + period + '&select=period,category_id,amount,repeat_monthly&order=period.asc');
  if (period < BUDGET_CARRY_START_) {          // before rollover existed: just what was set
    var plain = rows.filter(function (r) { return r.period === period; }).map(function (r) {
      var a = Number(r.amount);
      return { categoryId: r.category_id, amount: a, repeat: r.repeat_monthly === true, carry: 0, effective: a, hasRow: true };
    });
    return { cats: plain, overall: plain.reduce(function (t, c) { return t + c.effective; }, 0), unbudgetedDebt: 0 };
  }
  var spent = {};                              // spent[month][categoryId], months START..period-1
  if (period > BUDGET_CARRY_START_) {
    var ent = await sb(env, 'expense_entries?entry_date=gte.' + BUDGET_CARRY_START_ + '-01&entry_date=lt.' + period + '-01&select=amount,category_id,entry_date&limit=20000');
    ent.forEach(function (e) {
      var k = String(e.entry_date).slice(0, 7);
      (spent[k] = spent[k] || {})[e.category_id] = (spent[k][e.category_id] || 0) + Number(e.amount);
    });
  }
  var byCat = {};
  rows.forEach(function (r) { (byCat[r.category_id] = byCat[r.category_id] || []).push(r); });
  var state = {};                              // per category: { last, carry }
  Object.keys(byCat).forEach(function (cid) {
    var last = null;
    byCat[cid].forEach(function (r) { if (r.period < BUDGET_CARRY_START_) last = r; });
    state[cid] = { last: last, carry: 0 };
  });
  var unbudgetedDebt = 0, cats = [];
  for (var m = BUDGET_CARRY_START_; m <= period; m = expensePeriodAdd_(m, 1)) {
    var inMonth = {};
    Object.keys(byCat).forEach(function (cid) {
      var st = state[cid];
      var actual = byCat[cid].find(function (x) { return x.period === m; });
      var row = actual || (st.last && st.last.repeat_monthly === true ? { amount: st.last.amount, repeat_monthly: true } : null);
      var amount = row ? Number(row.amount) : 0;
      var effective = amount + st.carry;
      if (!actual && !row && st.carry === 0) { st.last = null; return; }   // nothing set, nothing owed
      inMonth[cid] = true;
      if (m === period) {
        cats.push({ categoryId: Number(cid), amount: amount, repeat: !!(row && row.repeat_monthly === true),
                    carry: st.carry, effective: effective, hasRow: !!actual });
      } else {
        st.carry = effective - ((spent[m] && spent[m][cid]) || 0);
      }
      st.last = row ? (actual || row) : null;
    });
    if (m < period) {
      Object.keys(spent[m] || {}).forEach(function (cid) { if (!inMonth[cid]) unbudgetedDebt -= spent[m][cid]; });
    }
  }
  var overall = cats.reduce(function (t, c) { return t + c.effective; }, 0);
  return { cats: cats, overall: overall, unbudgetedDebt: unbudgetedDebt };
}

async function expenseMaterializeBudgets_(env, period) {
  if (period !== expenseCurrentPeriod_()) return;

  // (Budget tổng không còn lưu riêng — nó là tổng budget các category, xem expenseBudgetsFor_.)

  // Budget từng category
  var curCat = await sb(env, 'expense_category_budget?period=eq.' + period + '&select=category_id');
  var have = {};
  curCat.forEach(function (r) { have[r.category_id] = true; });
  var older = await sb(env, 'expense_category_budget?period=lt.' + period + '&select=category_id,amount,repeat_monthly,period&order=period.desc');
  var latest = {};
  older.forEach(function (r) { if (!latest[r.category_id]) latest[r.category_id] = r; });
  var toInsert = [];
  Object.keys(latest).forEach(function (cid) {
    var r = latest[cid];
    if (have[cid] || r.repeat_monthly !== true) return;
    toInsert.push({ period: period, category_id: r.category_id, amount: r.amount, repeat_monthly: true });
  });
  if (toInsert.length) {
    await sb(env, 'expense_category_budget', {
      method: 'POST',
      body: JSON.stringify(toInsert),
      headers: { Prefer: 'resolution=ignore-duplicates,return=minimal' }
    });
  }
}

// Tổng cột `amount` của các dòng THEO NGÀY < start (phân trang 1000 dòng/lần để không bị cắt).
async function expenseSumBefore_(env, table, dateCol, start, extra) {
  var total = 0, offset = 0, page = 1000;
  for (;;) {
    var rows = await sb(env, table + '?' + dateCol + '=lt.' + start + (extra || '') + '&select=amount&order=id.asc&limit=' + page + '&offset=' + offset);
    rows.forEach(function (r) { total += Number(r.amount); });
    if (rows.length < page) break;
    offset += page;
  }
  return total;
}

// Tiền thừa mang sang: thu − chi − tiền nạp tiết kiệm (có trừ) + tiền rút tiết kiệm về nguồn
// của TẤT CẢ các tháng trước tháng đang xem.
// Tính động → sửa/xoá khoản ở tháng cũ thì các tháng sau tự cập nhật. Âm thì mang số âm sang.
async function expenseCarryIn_(env, period) {
  var start = period + '-01';
  var inc = await expenseSumBefore_(env, 'expense_income_entries', 'entry_date', start, '');
  var exp = await expenseSumBefore_(env, 'expense_entries', 'entry_date', start, '');
  var dep = await expenseSumBefore_(env, 'expense_savings_log', 'entry_date', start, '&kind=eq.deposit&deduct=eq.true');
  var wd = await expenseSumBefore_(env, 'expense_savings_log', 'entry_date', start, '&kind=eq.spend&wallet_id=not.is.null');
  return inc - exp - dep + wd;
}

async function expenseGetSavings_(env, period) {
  var goalRows = await sb(env, 'expense_savings?id=eq.1&select=name,target');
  var goal = goalRows.length ? goalRows[0] : { name: 'Billionaire ✮⋆˙', target: 0 };
  var logs = await sb(env, 'expense_savings_log?select=id,kind,amount,note,entry_date,deduct,wallet_id&order=entry_date.desc,id.desc');
  var balance = 0, monthDeposits = 0, monthWithdrawals = 0;
  var periodStart = period + '-01', nextStart = expenseNextPeriodStart_(period);
  logs.forEach(function (l) {
    var a = Number(l.amount);
    balance += l.kind === 'deposit' ? a : -a;
    var inMonth = l.entry_date >= periodStart && l.entry_date < nextStart;
    if (l.kind === 'deposit' && l.deduct !== false && inMonth) monthDeposits += a;
    if (l.kind === 'spend' && l.wallet_id !== null && inMonth) monthWithdrawals += a;
  });
  return {
    name: goal.name,
    target: Number(goal.target) || 0,
    balance: balance,                 // tiết kiệm KHÔNG reset theo tháng
    monthDeposits: monthDeposits,     // phần nạp CÓ TRỪ trong tháng đang xem → trừ vào Remaining
    monthWithdrawals: monthWithdrawals, // phần rút VỀ NGUỒN trong tháng đang xem → cộng vào Remaining (không tính là Income)
    log: logs.slice(0, 100).map(function (l) {
      return { id: l.id, kind: l.kind, amount: Number(l.amount), note: l.note || '', date: l.entry_date, deduct: l.deduct !== false, walletId: l.wallet_id };
    })
  };
}

/* ---- Nguồn tiền (wallets) ---- */

// Đọc hết các dòng của 1 bảng (phân trang 1000 dòng/lần) — chỉ lấy các cột cần.
async function expenseFetchAll_(env, table, select) {
  var out = [], offset = 0, page = 1000;
  for (;;) {
    var rows = await sb(env, table + '?select=' + select + '&order=id.asc&limit=' + page + '&offset=' + offset);
    out = out.concat(rows);
    if (rows.length < page) break;
    offset += page;
  }
  return out;
}

// Số dư mỗi nguồn (cộng dồn mọi tháng):
//   ban đầu + income − chi tiêu − nạp quỹ (có trừ) + rút quỹ ± chuyển tiền.
// Nạp quỹ KHÔNG trừ (deduct=false) là tiền có sẵn trong quỹ → không đụng nguồn nào.
// "Chưa phân loại" = income/chi tiêu cũ chưa gán nguồn; vẫn tính vào Tổng.
async function expenseWallets_(env) {
  var wallets = await sb(env, 'expense_wallets?select=id,name,color,opening&order=id.asc');
  var bal = {};
  wallets.forEach(function (w) { bal[w.id] = Number(w.opening) || 0; });
  var un = { balance: 0, count: 0 };
  function add(wid, amt) { if (wid !== null && wid !== undefined && bal[wid] !== undefined) bal[wid] += amt; }

  (await expenseFetchAll_(env, 'expense_income_entries', 'wallet_id,amount')).forEach(function (r) {
    var a = Number(r.amount);
    if (r.wallet_id === null) { un.balance += a; un.count++; } else add(r.wallet_id, a);
  });
  (await expenseFetchAll_(env, 'expense_entries', 'wallet_id,amount')).forEach(function (r) {
    var a = Number(r.amount);
    if (r.wallet_id === null) { un.balance -= a; un.count++; } else add(r.wallet_id, -a);
  });
  (await expenseFetchAll_(env, 'expense_savings_log', 'wallet_id,kind,amount,deduct')).forEach(function (r) {
    var a = Number(r.amount);
    if (r.wallet_id === null) return;
    if (r.kind === 'deposit') { if (r.deduct !== false) add(r.wallet_id, -a); }
    else add(r.wallet_id, a);
  });
  (await expenseFetchAll_(env, 'expense_transfers', 'from_wallet,to_wallet,amount')).forEach(function (r) {
    var a = Number(r.amount);
    add(r.from_wallet, -a); add(r.to_wallet, a);
  });
  var total = un.balance;
  var list = wallets.map(function (w) {
    total += bal[w.id];
    return { id: w.id, name: w.name, color: w.color, opening: Number(w.opening) || 0, balance: bal[w.id] };
  });
  return { wallets: list, total: total, unassigned: un };
}

function expenseWalletIdOrNull_(v) {
  return (v === undefined || v === null || v === '' || Number(v) === 0) ? null : Number(v);
}

// Gộp toàn bộ dữ liệu 1 tháng cần cho Overview/Calendar/Stats/Budget/History
// vào 1 lần gọi — frontend tự lọc/tổng hợp từ đây, backend chỉ trả data thô.
async function getExpenseData(env, [period]) {
  period = period || expenseCurrentPeriod_();
  await expenseMaterializeBudgets_(env, period);

  var periodStart = period + '-01';
  var nextPeriod = expenseNextPeriodStart_(period);

  var categories = await sb(env, 'expense_categories?select=id,name,color&order=name.asc');
  var entries = await sb(env, 'expense_entries?entry_date=gte.' + periodStart + '&entry_date=lt.' + nextPeriod + '&select=id,amount,category_id,note,entry_date,wallet_id&order=entry_date.desc,id.desc');
  var incomeRows = await sb(env, 'expense_income_entries?entry_date=gte.' + periodStart + '&entry_date=lt.' + nextPeriod + '&select=id,amount,source,entry_date,wallet_id&order=entry_date.desc,id.desc');
  var transferRows = await sb(env, 'expense_transfers?entry_date=gte.' + periodStart + '&entry_date=lt.' + nextPeriod + '&select=id,from_wallet,to_wallet,amount,note,entry_date&order=entry_date.desc,id.desc');
  var walletInfo = await expenseWallets_(env);
  var budgets = await expenseBudgetsFor_(env, period);
  var savings = await expenseGetSavings_(env, period);
  var carryIn = await expenseCarryIn_(env, period);
  // Tháng trước (chỉ số tiền + ngày) → Insights so sánh "cùng kỳ tháng trước".
  var prevRows = await sb(env, 'expense_entries?entry_date=gte.' + expensePrevPeriodStart_(period) + '&entry_date=lt.' + periodStart + '&select=amount,entry_date&limit=5000');

  var incomeEntries = incomeRows.map(function (r) {
    return { id: r.id, amount: Number(r.amount), source: r.source || '', date: r.entry_date, walletId: r.wallet_id };
  });
  return {
    period: period,
    currentPeriod: expenseCurrentPeriod_(),
    categories: categories.map(function (c) { return { id: c.id, name: c.name, color: c.color }; }),
    entries: entries.map(function (e) {
      return { id: e.id, amount: Number(e.amount), categoryId: e.category_id, note: e.note || '', date: e.entry_date, walletId: e.wallet_id };
    }),
    wallets: walletInfo.wallets,
    walletTotal: walletInfo.total,
    unassigned: walletInfo.unassigned,
    transfers: transferRows.map(function (t) {
      return { id: t.id, from: t.from_wallet, to: t.to_wallet, amount: Number(t.amount), note: t.note || '', date: t.entry_date };
    }),
    incomeEntries: incomeEntries,
    income: incomeEntries.reduce(function (s, r) { return s + r.amount; }, 0),
    carryIn: carryIn,
    budgetOverall: budgets.overall,                 // = tổng budget hiệu lực các category
    categoryBudgets: budgets.cats,                  // { categoryId, amount (đặt), carry, effective, repeat }
    savings: savings,
    prevEntries: prevRows.map(function (r) { return { amount: Number(r.amount), date: r.entry_date }; })
  };
}

/* ---- Expenses (không còn lặp theo tháng — chỉ budget mới lặp) ---- */

async function addExpenseEntry(env, [amount, categoryId, note, date, walletId]) {
  await sb(env, 'expense_entries', {
    method: 'POST',
    body: JSON.stringify([{ amount: amount, category_id: categoryId, note: note || '', entry_date: date, repeat_monthly: false, recurring_key: null, wallet_id: expenseWalletIdOrNull_(walletId) }])
  });
  return getExpenseData(env, [String(date).slice(0, 7)]);
}

async function updateExpenseEntry(env, [id, amount, categoryId, note, date, period, walletId]) {
  var patch = { amount: amount, category_id: categoryId, note: note || '', entry_date: date, repeat_monthly: false };
  if (walletId !== undefined) patch.wallet_id = expenseWalletIdOrNull_(walletId);
  await sb(env, 'expense_entries?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify(patch)
  });
  return getExpenseData(env, [period]);
}

async function deleteExpenseEntry(env, [id, period]) {
  await sb(env, 'expense_entries?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
  return getExpenseData(env, [period]);
}

/* ---- Income: từng khoản có số tiền + nguồn + ngày ---- */

async function addExpenseIncomeEntry(env, [amount, source, date, walletId]) {
  await sb(env, 'expense_income_entries', {
    method: 'POST',
    body: JSON.stringify([{ amount: amount, source: source || '', entry_date: date, wallet_id: expenseWalletIdOrNull_(walletId) }]),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [String(date).slice(0, 7)]);
}

async function updateExpenseIncomeEntry(env, [id, amount, source, date, period, walletId]) {
  var patch = { amount: amount, source: source || '', entry_date: date };
  if (walletId !== undefined) patch.wallet_id = expenseWalletIdOrNull_(walletId);
  await sb(env, 'expense_income_entries?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify(patch),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

async function deleteExpenseIncomeEntry(env, [id, period]) {
  await sb(env, 'expense_income_entries?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
  return getExpenseData(env, [period]);
}

/* ---- Budget (có cờ repeat) ---- */

async function setExpenseCategoryBudget(env, [period, categoryId, amount, repeat]) {
  await sb(env, 'expense_category_budget', {
    method: 'POST',
    body: JSON.stringify([{ period: period, category_id: categoryId, amount: amount, repeat_monthly: !!repeat }]),
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }
  });
  return getExpenseData(env, [period]);
}

// Xoá budget category: tắt luôn repeat của các tháng cũ để nó không tự mọc lại.
async function deleteExpenseCategoryBudget(env, [period, categoryId]) {
  await sb(env, 'expense_category_budget?category_id=eq.' + categoryId, {
    method: 'PATCH', body: JSON.stringify({ repeat_monthly: false }), prefer: 'return=minimal'
  });
  await sb(env, 'expense_category_budget?period=eq.' + period + '&category_id=eq.' + categoryId, { method: 'DELETE', prefer: 'return=minimal' });
  return getExpenseData(env, [period]);
}

/* ---- Savings (1 mục tiêu; số dư KHÔNG reset theo tháng) ---- */

async function saveExpenseSavingsGoal(env, [name, target, period]) {
  await sb(env, 'expense_savings', {
    method: 'POST',
    body: JSON.stringify([{ id: 1, name: name || 'Billionaire ✮⋆˙', target: target || 0 }]),
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }
  });
  return getExpenseData(env, [period]);
}

// kind: 'deposit' (nạp) | 'spend' (tiêu từ tiết kiệm — không tính vào chi tiêu tháng)
// deduct (chỉ cho deposit): true = lấy từ tiền tháng này → trừ vào Remaining; false = tiền có sẵn, không trừ.
async function addExpenseSavingsLog(env, [kind, amount, note, date, period, deduct, walletId]) {
  if (kind !== 'deposit' && kind !== 'spend') throw new Error('Loại giao dịch không hợp lệ');
  if (kind === 'spend') {
    var s = await expenseGetSavings_(env, String(date).slice(0, 7));
    if (Number(amount) > s.balance) throw new Error('Not enough savings (balance ' + s.balance + ')');
  }
  await sb(env, 'expense_savings_log', {
    method: 'POST',
    body: JSON.stringify([{ kind: kind, amount: amount, note: note || '', entry_date: date, deduct: kind === 'deposit' ? deduct !== false : false, wallet_id: expenseWalletIdOrNull_(walletId) }]),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

async function updateExpenseSavingsLog(env, [id, amount, note, date, deduct, period, walletId]) {
  var rows = await sb(env, 'expense_savings_log?id=eq.' + id + '&select=kind');
  if (!rows.length) throw new Error('Entry not found');
  var patch = { amount: amount, note: note || '', entry_date: date, deduct: rows[0].kind === 'deposit' ? deduct !== false : false };
  if (walletId !== undefined) patch.wallet_id = expenseWalletIdOrNull_(walletId);
  await sb(env, 'expense_savings_log?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify(patch),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

async function deleteExpenseSavingsLog(env, [id, period]) {
  await sb(env, 'expense_savings_log?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
  return getExpenseData(env, [period]);
}

/* ---- Nguồn tiền + chuyển tiền ---- */

async function addExpenseWallet(env, [name, color, opening, period]) {
  if (!String(name || '').trim()) throw new Error('Enter a name');
  await sb(env, 'expense_wallets', {
    method: 'POST',
    body: JSON.stringify([{ name: String(name).trim(), color: color || '#bfe3ff', opening: Number(opening) || 0 }]),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

async function updateExpenseWallet(env, [id, name, color, opening, period]) {
  if (!String(name || '').trim()) throw new Error('Enter a name');
  await sb(env, 'expense_wallets?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify({ name: String(name).trim(), color: color || '#bfe3ff', opening: Number(opening) || 0 }),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

// Còn giao dịch/chuyển tiền dùng nguồn này thì Postgres chặn (FK restrict) → báo lỗi dễ hiểu.
async function deleteExpenseWallet(env, [id, period]) {
  try {
    await sb(env, 'expense_wallets?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
  } catch (e) {
    throw new Error('This source still has transactions. Move or delete them first.');
  }
  return getExpenseData(env, [period]);
}

async function addExpenseTransfer(env, [fromId, toId, amount, note, date, period]) {
  if (!fromId || !toId || Number(fromId) === Number(toId)) throw new Error('Pick two different sources');
  if (!(Number(amount) > 0)) throw new Error('Enter an amount');
  await sb(env, 'expense_transfers', {
    method: 'POST',
    body: JSON.stringify([{ from_wallet: Number(fromId), to_wallet: Number(toId), amount: Number(amount), note: note || '', entry_date: date }]),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period || String(date).slice(0, 7)]);
}

async function updateExpenseTransfer(env, [id, fromId, toId, amount, note, date, period]) {
  if (!fromId || !toId || Number(fromId) === Number(toId)) throw new Error('Pick two different sources');
  if (!(Number(amount) > 0)) throw new Error('Enter an amount');
  await sb(env, 'expense_transfers?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify({ from_wallet: Number(fromId), to_wallet: Number(toId), amount: Number(amount), note: note || '', entry_date: date }),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

async function deleteExpenseTransfer(env, [id, period]) {
  await sb(env, 'expense_transfers?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
  return getExpenseData(env, [period]);
}

/* ---- Categories ---- */

async function addExpenseCategory(env, [name, color]) {
  await sb(env, 'expense_categories', { method: 'POST', body: JSON.stringify([{ name: name, color: color }]) });
  return sb(env, 'expense_categories?select=id,name,color&order=name.asc');
}

async function updateExpenseCategory(env, [id, name, color]) {
  await sb(env, 'expense_categories?id=eq.' + id, { method: 'PATCH', body: JSON.stringify({ name: name, color: color }) });
  return sb(env, 'expense_categories?select=id,name,color&order=name.asc');
}

// Nếu danh mục đang có khoản chi dùng tới, Postgres sẽ chặn (FK restrict) —
// bắn lỗi lên để frontend hiện toast, không cho xoá ngầm.
async function deleteExpenseCategory(env, [id]) {
  await sb(env, 'expense_categories?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
  return sb(env, 'expense_categories?select=id,name,color&order=name.asc');
}

// Dùng cho ô tóm tắt nhỏ ở Home — chỉ cần tổng đã chi HÔM NAY, khỏi tải cả tháng.
// Ô "Spent today" ở Home: đã tiêu hôm nay / được tiêu hôm nay.
// Quỹ tiêu hằng ngày của tháng = tổng budget hiệu lực các category KHÔNG Repeat
// (+ phần tiền tiêu ở category không có budget các tháng trước, số âm — xem unbudgetedDebt).
// Mỗi ngày được quỹ ÷ số ngày; dư hay lố dồn sang các ngày sau → được tiêu hôm nay =
// quỹ ÷ số ngày × số ngày đã qua (kể cả hôm nay) − đã tiêu từ đầu tháng tới hết hôm qua.
// "Đã tiêu" = tiêu ở category không Repeat + category chưa có budget (Repeat là khoản cố định).
// Không có budget nào → allowance = null (chỉ hiện số đã tiêu).
async function getExpenseTodayTotal(env) {
  var today = expenseTodayStr_();
  var period = today.slice(0, 7);
  await expenseMaterializeBudgets_(env, period);
  var b = await expenseBudgetsFor_(env, period);
  var rows = await sb(env, 'expense_entries?entry_date=gte.' + period + '-01&entry_date=lte.' + today + '&select=amount,category_id,entry_date&limit=5000');
  var repeatIds = {};
  b.cats.forEach(function (c) { if (c.repeat) repeatIds[c.categoryId] = true; });
  var total = 0, todayD = 0, beforeD = 0;
  rows.forEach(function (r) {
    var a = Number(r.amount);
    if (r.entry_date === today) total += a;
    if (repeatIds[r.category_id]) return;
    if (r.entry_date === today) todayD += a; else beforeD += a;
  });
  if (!b.cats.length) return { date: today, total: total, spent: total, allowance: null };
  var pool = b.cats.reduce(function (t, c) { return c.repeat ? t : t + c.effective; }, 0) + b.unbudgetedDebt;
  var y = Number(period.slice(0, 4)), m = Number(period.slice(5, 7));
  var days = new Date(y, m, 0).getDate(), day = Number(today.slice(8, 10));
  var allowance = pool / days * day - beforeD;
  // perDay: this month's budgets without "repeat monthly", spread evenly over the month
  return { date: today, total: total, spent: todayD, allowance: allowance, perDay: pool / days };
}
// Statistics › Spending trend › Year: what was spent in each month of a year
async function getExpenseYearTrend(env, [year]) {
  var y = Number(year) || Number(expenseTodayStr_().slice(0, 4));
  var rows = await sb(env, 'expense_entries?entry_date=gte.' + y + '-01-01&entry_date=lt.' + (y + 1) + '-01-01&select=amount,entry_date&limit=20000');
  var months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  rows.forEach(function (r) { months[Number(r.entry_date.slice(5, 7)) - 1] += Number(r.amount) || 0; });
  return { year: y, months: months };
}

/* ============================================================
 *  API ROUTER
 * ============================================================ */

/* ============================================================
 *  WORK (Personal) — bảng work_groups + work_tasks (xem supabase/work.sql)
 * ============================================================ */
const WORK_STATUSES_ = ['todo', 'doing', 'paused', 'done'];
const WORK_PRIORITIES_ = ['low', 'medium', 'high'];
const WORK_REPEATS_ = ['daily', 'weekly', 'monthly'];

function workTaskOut_(r) {
  return {
    id: r.id, title: r.title || '', groupId: r.group_id, status: r.status, priority: r.priority,
    due: r.due_date || '', note: r.note || '', fee: r.fee === null || r.fee === undefined ? null : Number(r.fee),
    repeat: r.repeat_every || '', subtasks: Array.isArray(r.subtasks) ? r.subtasks : [],
    timeSpent: Number(r.time_spent) || 0, timerStartedAt: r.timer_started_at || null,
    doneAt: r.done_at || null, createdAt: r.created_at
  };
}
async function getWorkData(env) {
  let groups;
  try { groups = await sb(env, 'work_groups?select=id,name,has_posts&order=name.asc'); }
  catch (e) { groups = await sb(env, 'work_groups?select=id,name&order=name.asc'); }   // posts_calendar.sql not run yet
  groups = groups.map(function (g) { return { id: g.id, name: g.name, hasPosts: g.has_posts === true }; });
  const tasks = await sb(env, 'work_tasks?select=*&order=id.desc&limit=5000');
  return { groups: groups, tasks: tasks.map(workTaskOut_), today: expenseTodayStr_(), now: new Date().toISOString() };
}
// Only the fields a person can edit, cleaned up.
function workTaskIn_(t) {
  t = t || {};
  const title = String(t.title || '').trim().slice(0, 200);
  if (!title) throw new Error('Task needs a title');
  const subs = Array.isArray(t.subtasks) ? t.subtasks.slice(0, 50).map(function (x) {
    const sub = { text: String((x && x.text) || '').trim().slice(0, 200), done: !!(x && x.done) };
    // its Board column; "done" (the tick) wins over it
    sub.st = sub.done ? 'done' : (['todo', 'doing', 'paused'].indexOf(x && x.st) !== -1 ? x.st : 'todo');
    if (x && /^\d{4}-\d{2}-\d{2}$/.test(x.due || '')) sub.due = x.due;   // each item can have its own deadline
    return sub;
  }).filter(function (x) { return x.text; }) : [];
  const fee = t.fee === '' || t.fee === null || t.fee === undefined ? null : Number(t.fee);
  return {
    title: title,
    group_id: t.groupId ? Number(t.groupId) : null,
    status: WORK_STATUSES_.indexOf(t.status) !== -1 ? t.status : 'todo',
    priority: WORK_PRIORITIES_.indexOf(t.priority) !== -1 ? t.priority : 'medium',
    due_date: /^\d{4}-\d{2}-\d{2}$/.test(t.due || '') ? t.due : null,
    note: String(t.note || '').slice(0, 4000),
    fee: isFinite(fee) ? fee : null,
    repeat_every: WORK_REPEATS_.indexOf(t.repeat) !== -1 ? t.repeat : null,
    subtasks: subs
  };
}
function workNextDue_(due, every) {
  const d = new Date((due || expenseTodayStr_()) + 'T00:00:00Z');
  if (every === 'daily') d.setUTCDate(d.getUTCDate() + 1);
  else if (every === 'weekly') d.setUTCDate(d.getUTCDate() + 7);
  else d.setUTCMonth(d.getUTCMonth() + 1);
  return d.toISOString().slice(0, 10);
}
// Moving a task into / out of "done": stamp done_at, stop a running timer, and for a
// repeating task create the next one (same details, next due date, fresh checklist).
async function workApplyStatus_(env, row, status) {
  const patch = { status: status };
  if (status === 'done' && row.status !== 'done') {
    patch.done_at = new Date().toISOString();
    if (row.timer_started_at) {
      patch.time_spent = (Number(row.time_spent) || 0) + Math.max(0, Math.round((Date.now() - Date.parse(row.timer_started_at)) / 1000));
      patch.timer_started_at = null;
    }
    if (row.repeat_every) {
      // checklist deadlines move by as much as the task's own deadline does
      const nextDue = workNextDue_(row.due_date, row.repeat_every);
      const shift = Date.parse(nextDue) - Date.parse(row.due_date || expenseTodayStr_());
      await sb(env, 'work_tasks', { method: 'POST', prefer: 'return=minimal', body: JSON.stringify([{
        title: row.title, group_id: row.group_id, status: 'todo', priority: row.priority,
        due_date: nextDue, note: row.note || '', fee: row.fee,
        repeat_every: row.repeat_every,
        subtasks: (row.subtasks || []).map(function (x) {
          const sub = { text: x.text, done: false, st: 'todo' };
          if (x.due) sub.due = new Date(Date.parse(x.due) + shift).toISOString().slice(0, 10);
          return sub;
        })
      }]) });
    }
  } else if (status !== 'done' && row.status === 'done') {
    patch.done_at = null;
  }
  return patch;
}
async function saveWorkTask(env, [task]) {
  const data = workTaskIn_(task);
  if (task && task.id) {
    const cur = await sb(env, 'work_tasks?id=eq.' + Number(task.id) + '&select=*');
    if (!cur.length) throw new Error('Task not found');
    Object.assign(data, await workApplyStatus_(env, cur[0], data.status));
    await sb(env, 'work_tasks?id=eq.' + Number(task.id), { method: 'PATCH', body: JSON.stringify(data), prefer: 'return=minimal' });
  } else {
    if (data.status === 'done') data.done_at = new Date().toISOString();
    await sb(env, 'work_tasks', { method: 'POST', body: JSON.stringify([data]), prefer: 'return=minimal' });
  }
  return getWorkData(env);
}
async function setWorkTaskStatus(env, [id, status]) {
  if (WORK_STATUSES_.indexOf(status) === -1) throw new Error('Bad status');
  const cur = await sb(env, 'work_tasks?id=eq.' + Number(id) + '&select=*');
  if (!cur.length) throw new Error('Task not found');
  const patch = await workApplyStatus_(env, cur[0], status);
  await sb(env, 'work_tasks?id=eq.' + Number(id), { method: 'PATCH', body: JSON.stringify(patch), prefer: 'return=minimal' });
  return getWorkData(env);
}
// Board moves one checklist item (found by position, checked against its text).
// The task follows its items: all done → task done (repeat etc. as usual); an item
// taken back out of done → task back to Doing; an item started → task Doing.
async function setWorkSubStatus(env, [id, index, text, status]) {
  if (WORK_STATUSES_.indexOf(status) === -1) throw new Error('Bad status');
  const cur = await sb(env, 'work_tasks?id=eq.' + Number(id) + '&select=*');
  if (!cur.length) throw new Error('Task not found');
  const row = cur[0];
  const subs = Array.isArray(row.subtasks) ? row.subtasks.slice() : [];
  let i = Number(index);
  if (!subs[i] || subs[i].text !== text) i = subs.findIndex(function (x) { return x.text === text; });
  if (i < 0) throw new Error('Checklist item not found');
  subs[i] = Object.assign({}, subs[i], { st: status, done: status === 'done' });
  let patch = { subtasks: subs };
  const allDone = subs.every(function (x) { return x.done; });
  let next = null;
  if (allDone && row.status !== 'done') next = 'done';
  else if (!allDone && row.status === 'done') next = 'doing';
  else if (status === 'doing' && row.status !== 'doing' && row.status !== 'done') next = 'doing';
  if (next) patch = Object.assign(await workApplyStatus_(env, row, next), patch);
  await sb(env, 'work_tasks?id=eq.' + Number(id), { method: 'PATCH', body: JSON.stringify(patch), prefer: 'return=minimal' });
  return getWorkData(env);
}
async function deleteWorkTask(env, [id]) {
  await sb(env, 'work_tasks?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' });
  return getWorkData(env);
}
// Timer: one running at a time — starting one stops (and banks) any other.
async function workBankTimers_(env, exceptId) {
  const running = await sb(env, 'work_tasks?timer_started_at=not.is.null&select=id,time_spent,timer_started_at');
  for (const r of running) {
    if (r.id === exceptId) continue;
    const add = Math.max(0, Math.round((Date.now() - Date.parse(r.timer_started_at)) / 1000));
    await sb(env, 'work_tasks?id=eq.' + r.id, { method: 'PATCH', prefer: 'return=minimal',
      body: JSON.stringify({ time_spent: (Number(r.time_spent) || 0) + add, timer_started_at: null }) });
  }
}
async function startWorkTimer(env, [id]) {
  id = Number(id);
  await workBankTimers_(env, id);
  const cur = await sb(env, 'work_tasks?id=eq.' + id + '&select=status,timer_started_at');
  if (!cur.length) throw new Error('Task not found');
  const patch = {};
  if (!cur[0].timer_started_at) patch.timer_started_at = new Date().toISOString();
  if (cur[0].status === 'todo' || cur[0].status === 'paused') patch.status = 'doing';
  if (Object.keys(patch).length) await sb(env, 'work_tasks?id=eq.' + id, { method: 'PATCH', body: JSON.stringify(patch), prefer: 'return=minimal' });
  return getWorkData(env);
}
async function stopWorkTimer(env, [id]) {
  id = Number(id);
  const cur = await sb(env, 'work_tasks?id=eq.' + id + '&select=time_spent,timer_started_at');
  if (cur.length && cur[0].timer_started_at) {
    const add = Math.max(0, Math.round((Date.now() - Date.parse(cur[0].timer_started_at)) / 1000));
    await sb(env, 'work_tasks?id=eq.' + id, { method: 'PATCH', prefer: 'return=minimal',
      body: JSON.stringify({ time_spent: (Number(cur[0].time_spent) || 0) + add, timer_started_at: null }) });
  }
  return getWorkData(env);
}
async function resetWorkTimer(env, [id]) {     // back to 0:00 and stopped
  await sb(env, 'work_tasks?id=eq.' + Number(id), { method: 'PATCH', prefer: 'return=minimal',
    body: JSON.stringify({ time_spent: 0, timer_started_at: null }) });
  return getWorkData(env);
}
async function saveWorkGroup(env, [id, name, hasPosts]) {
  name = String(name || '').trim().slice(0, 60);
  if (!name) throw new Error('Group needs a name');
  const row = { name: name };
  if (hasPosts !== undefined && hasPosts !== null) row.has_posts = !!hasPosts;
  if (id) await sb(env, 'work_groups?id=eq.' + Number(id), { method: 'PATCH', body: JSON.stringify(row), prefer: 'return=minimal' });
  else await sb(env, 'work_groups', { method: 'POST', body: JSON.stringify([row]), prefer: 'return=minimal' });
  return getWorkData(env);
}
async function deleteWorkGroup(env, [id]) {
  await sb(env, 'work_groups?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' });   // tasks keep, group → none
  return getWorkData(env);
}
// Public (Home, before the password): only numbers, never task names.
async function getWorkHomeSummary(env) {
  let rows;
  try { rows = await sb(env, 'work_tasks?status=in.(todo,doing)&select=status,due_date,subtasks'); }
  catch (e) { return { ready: false }; }          // tables not created yet
  const today = expenseTodayStr_();
  // late = the task's deadline or one of its unticked checklist items' deadlines has passed
  const late = function (r) {
    return (r.due_date && r.due_date < today) ||
      (r.subtasks || []).some(function (x) { return !x.done && x.due && x.due < today; });
  };
  return {
    ready: true,
    overdue: rows.filter(late).length,
    doing: rows.filter(function (r) { return r.status === 'doing'; }).length,
    todo: rows.filter(function (r) { return r.status === 'todo'; }).length
  };
}

/* ============================================================
 *  POSTS (bài đăng KOC — thuộc 1 công việc của Work) — supabase/posts_calendar.sql
 *  Giờ đăng (scheduled_date + scheduled_time 'HH:MM') tính theo giờ Việt Nam.
 * ============================================================ */
const POST_SLOTS_DEFAULT_ = { weekday: ['12:00', '20:30'], weekend: ['09:00', '12:00', '20:30'] };
function vnNow_() {                         // { date:'YYYY-MM-DD', time:'HH:MM' } in Vietnam
  const d = new Date(Date.now() + 7 * 3600 * 1000);
  return { date: d.toISOString().slice(0, 10), time: d.toISOString().slice(11, 16) };
}
function postOut_(r) {
  return {
    id: r.id, groupId: r.group_id, product: r.product || '', tag: r.tag || '', caption: r.caption || '',
    links: Array.isArray(r.links) ? r.links : [], note: r.note || '', status: r.status,
    date: r.scheduled_date || '', time: r.scheduled_time || '', postedAt: r.posted_at || null, createdAt: r.created_at
  };
}
async function postSlots_(env) {
  const rows = await sb(env, 'app_settings?key=eq.post_slots&select=value');
  const v = rows.length ? rows[0].value : null;
  const clean = function (a) { return (Array.isArray(a) ? a : []).filter(function (t) { return /^\d{2}:\d{2}$/.test(t); }).sort(); };
  return v ? { weekday: clean(v.weekday), weekend: clean(v.weekend) } : POST_SLOTS_DEFAULT_;
}
async function getPostsData(env) {
  const posts = await sb(env, 'posts?select=*&order=id.desc&limit=5000');
  return { posts: posts.map(postOut_), slots: await postSlots_(env), now: vnNow_() };
}
function postIn_(p) {
  p = p || {};
  const links = (Array.isArray(p.links) ? p.links : String(p.links || '').split(/\s+/))
    .map(function (x) { return String(x).trim(); }).filter(function (x) { return /^https?:\/\//i.test(x); }).slice(0, 20);
  const date = /^\d{4}-\d{2}-\d{2}$/.test(p.date || '') ? p.date : null;
  const time = /^\d{2}:\d{2}$/.test(p.time || '') ? p.time : null;
  let status = ['draft', 'scheduled', 'posted'].indexOf(p.status) !== -1 ? p.status : 'draft';
  if (status === 'scheduled' && !date) status = 'draft';
  return {
    group_id: p.groupId ? Number(p.groupId) : null,
    product: String(p.product || '').trim().slice(0, 200),
    tag: String(p.tag || '').trim().slice(0, 60),
    caption: String(p.caption || '').slice(0, 8000),
    links: links, note: String(p.note || '').slice(0, 2000),
    status: status, scheduled_date: status === 'draft' ? null : date, scheduled_time: status === 'draft' ? null : time
  };
}
async function savePost(env, [post]) {
  const data = postIn_(post);
  if (!data.caption.trim() && !data.product && !data.links.length) throw new Error('Post is empty');
  if (post && post.id) {
    if (data.status !== 'posted') data.posted_at = null;
    await sb(env, 'posts?id=eq.' + Number(post.id), { method: 'PATCH', body: JSON.stringify(data), prefer: 'return=minimal' });
  } else {
    if (data.status === 'posted') data.posted_at = new Date().toISOString();
    await sb(env, 'posts', { method: 'POST', body: JSON.stringify([data]), prefer: 'return=minimal' });
  }
  return getPostsData(env);
}
async function deletePost(env, [id]) {
  await sb(env, 'posts?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' });
  return getPostsData(env);
}
async function markPostPosted(env, [id]) {
  const cur = await sb(env, 'posts?id=eq.' + Number(id) + '&select=scheduled_date,scheduled_time');
  if (!cur.length) throw new Error('Post not found');
  const now = vnNow_();
  await sb(env, 'posts?id=eq.' + Number(id), { method: 'PATCH', prefer: 'return=minimal', body: JSON.stringify({
    status: 'posted', posted_at: new Date().toISOString(),
    scheduled_date: cur[0].scheduled_date || now.date, scheduled_time: cur[0].scheduled_time || now.time
  }) });
  return getPostsData(env);
}
async function repostPost(env, [id]) {      // "post again": copy as a new draft
  const cur = await sb(env, 'posts?id=eq.' + Number(id) + '&select=*');
  if (!cur.length) throw new Error('Post not found');
  const r = cur[0];
  await sb(env, 'posts', { method: 'POST', prefer: 'return=minimal', body: JSON.stringify([{
    group_id: r.group_id, product: r.product, tag: r.tag, caption: r.caption, links: r.links, note: r.note, status: 'draft'
  }]) });
  return getPostsData(env);
}
async function savePostSlots(env, [slots]) {
  const clean = function (a) {
    return Array.from(new Set((Array.isArray(a) ? a : []).filter(function (t) { return /^\d{2}:\d{2}$/.test(t); }))).sort().slice(0, 8);
  };
  const value = { weekday: clean(slots && slots.weekday), weekend: clean(slots && slots.weekend) };
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'post_slots', value: value }]),
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal' } });
  return getPostsData(env);
}
// Drafts (oldest first) go into the next free time slots from now on (Vietnam time).
async function autoSchedulePosts(env, [groupId]) {
  const slots = await postSlots_(env);
  const all = await sb(env, 'posts?select=id,group_id,status,scheduled_date,scheduled_time,created_at&order=id.asc&limit=5000');
  const mine = all.filter(function (r) { return !groupId || r.group_id === Number(groupId); });
  const drafts = mine.filter(function (r) { return r.status === 'draft'; });
  const taken = {};
  mine.forEach(function (r) { if (r.status !== 'draft' && r.scheduled_date) taken[r.scheduled_date + ' ' + r.scheduled_time] = true; });
  const now = vnNow_();
  let day = new Date(now.date + 'T00:00:00Z');
  let i = 0, guard = 0;
  while (i < drafts.length && guard++ < 400) {
    const ds = day.toISOString().slice(0, 10);
    const wd = day.getUTCDay();
    const list = (wd === 0 || wd === 6) ? slots.weekend : slots.weekday;
    for (const t of list) {
      if (i >= drafts.length) break;
      if (ds === now.date && t <= now.time) continue;
      if (taken[ds + ' ' + t]) continue;
      await sb(env, 'posts?id=eq.' + drafts[i].id, { method: 'PATCH', prefer: 'return=minimal',
        body: JSON.stringify({ status: 'scheduled', scheduled_date: ds, scheduled_time: t }) });
      taken[ds + ' ' + t] = true; i++;
    }
    day.setUTCDate(day.getUTCDate() + 1);
  }
  return getPostsData(env);
}

/* ============================================================
 *  CALENDAR (Personal) — ghi chú / đánh dấu theo ngày, nhiều ghi chú mỗi ngày
 * ============================================================ */
const CAL_KINDS_ = ['important', 'him', 'work', 'off', 'remind', 'other'];
const CAL_REPEATS_ = ['', 'monthly', 'yearly'];
// Repeating notes are stored once (on their first day); here they're expanded into
// every occurrence inside the year (day 31 / 29-Feb fall back to the month's last day).
async function getCalendarNotes(env, [year]) {
  year = /^\d{4}$/.test(String(year)) ? String(year) : vnNow_().date.slice(0, 4);
  const y = Number(year), end = year + '-12-31';
  let rows;
  try {
    rows = await sb(env, 'calendar_notes?select=id,day,kind,note,repeat&order=day.asc,id.asc&day=lte.' + end +
      '&or=(day.gte.' + year + '-01-01,repeat.in.(monthly,yearly))');
  } catch (e) {
    if (!/repeat/.test(String(e && e.message))) throw e;   // calendar_more.sql not run yet
    rows = await sb(env, 'calendar_notes?day=gte.' + year + '-01-01&day=lte.' + end + '&select=id,day,kind,note&order=day.asc');
  }
  const pad = function (n) { return String(n).padStart(2, '0'); };
  const lastDay = function (m) { return new Date(Date.UTC(y, m, 0)).getUTCDate(); };
  const notes = [];
  rows.forEach(function (r) {
    const base = { id: r.id, start: r.day, kind: r.kind, note: r.note || '', repeat: r.repeat || '' };
    const d = Number(r.day.slice(8, 10)), mon = Number(r.day.slice(5, 7));
    let days = [];
    if (base.repeat === 'yearly') days = [year + '-' + pad(mon) + '-' + pad(Math.min(d, lastDay(mon)))];
    else if (base.repeat === 'monthly') for (let m = 1; m <= 12; m++) days.push(year + '-' + pad(m) + '-' + pad(Math.min(d, lastDay(m))));
    else days = [r.day];
    days.forEach(function (day) { if (day >= r.day) notes.push(Object.assign({ day: day }, base)); });
  });
  notes.sort(function (a, b) { return a.day < b.day ? -1 : a.day > b.day ? 1 : a.id - b.id; });
  return { year: y, today: vnNow_().date, notes: notes };
}
async function saveCalendarNote(env, [n]) {
  n = n || {};
  if (!/^\d{4}-\d{2}-\d{2}$/.test(n.day || '')) throw new Error('Bad date');
  const row = { day: n.day, kind: CAL_KINDS_.indexOf(n.kind) !== -1 ? n.kind : 'other', note: String(n.note || '').trim().slice(0, 2000) };
  if (!row.note) throw new Error('Write a note');
  // only send "repeat" when it's (or was) used, so plain notes still save before calendar_more.sql is run
  const repeat = CAL_REPEATS_.indexOf(n.repeat) !== -1 ? n.repeat : '';
  if (repeat || n.wasRepeat) row.repeat = repeat;
  if (n.id) await sb(env, 'calendar_notes?id=eq.' + Number(n.id), { method: 'PATCH', body: JSON.stringify(row), prefer: 'return=minimal' });
  else await sb(env, 'calendar_notes', { method: 'POST', body: JSON.stringify([row]), prefer: 'return=minimal' });
  return getCalendarNotes(env, [n.year || n.day.slice(0, 4)]);
}
async function deleteCalendarNote(env, [id, year]) {
  await sb(env, 'calendar_notes?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' });
  return getCalendarNotes(env, [year]);
}

/* ---- Village names: what each house is called and who lives there (app_settings 'village_names') ---- */
async function getVillageNames(env) {
  const rows = await sb(env, 'app_settings?key=eq.village_names&select=value').catch(() => []);
  return (rows[0] && rows[0].value) || { houses: {}, people: {}, her: 'namu', him: 'hunf' };
}
async function saveVillageNames(env, [n]) {
  n = n || {};
  const clean = (o) => { const out = {}; Object.keys(o || {}).slice(0, 60).forEach((k) => { if (/^[a-z]{2,12}$/.test(k)) { const v = String(o[k] || '').trim().slice(0, 24); if (v) out[k] = v; } }); return out; };
  const genders = {}; Object.keys(n.genders || {}).slice(0, 60).forEach((k) => { if (/^[a-z]{2,12}$/.test(k) && (n.genders[k] === 'm' || n.genders[k] === 'f')) genders[k] = n.genders[k]; });
  const extra = {}; Object.keys(n.extra || {}).slice(0, 60).forEach((k) => {      // the second person in a house (max 2)
    const e = n.extra[k]; if (!/^[a-z]{2,12}$/.test(k) || k === 'love' || !e || typeof e !== 'object') return;
    extra[k] = { name: String(e.name || '').trim().slice(0, 24), g: e.g === 'f' ? 'f' : 'm' };
  });
  const value = { houses: clean(n.houses), people: clean(n.people), genders, extra, her: String(n.her || 'namu').trim().slice(0, 24) || 'namu', him: String(n.him || 'hunf').trim().slice(0, 24) || 'hunf' };
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'village_names', value }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return value;
}

/* ---- Home profile (photo + name) — one copy for every device, in app_settings ---- */
async function getHomeProfile(env) {
  let rows;
  try { rows = await sb(env, 'app_settings?key=eq.profile&select=value'); }
  catch (e) { return { set: false, name: '', photo: '' }; }          // table not created yet
  if (!rows.length) return { set: false, name: '', photo: '' };
  const v = rows[0].value || {};
  return { set: true, name: v.name || '', photo: v.photo || '' };
}
async function saveHomeProfile(env, [name, photo]) {
  name = String(name || '').trim().slice(0, 24);
  photo = String(photo || '');
  if (photo && (!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/.test(photo) || photo.length > 300000)) throw new Error('Bad photo');
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'profile', value: { name: name, photo: photo } }]),
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal' } });
  return getHomeProfile(env);
}

const ACTIONS = {
  personalLogin,
  getHomeProfile,
  getVillageNames,
  saveVillageNames,
  saveHomeProfile,
  getPostsData,
  savePost,
  deletePost,
  markPostPosted,
  repostPost,
  savePostSlots,
  autoSchedulePosts,
  getCalendarNotes,
  saveCalendarNote,
  deleteCalendarNote,
  getWorkData,
  saveWorkTask,
  setWorkTaskStatus,
  deleteWorkTask,
  startWorkTimer,
  stopWorkTimer,
  setWorkSubStatus,
  resetWorkTimer,
  saveWorkGroup,
  deleteWorkGroup,
  getWorkHomeSummary,
  getAccountsData,
  addAccountRow,
  updateAccountRow,
  saveAccountType,
  getSymbolsData,
  addSymbol,
  addSymbolsBatch,
  getLeaderboard,
  submitScore,
  getMochiLeaderboard,
  submitMochiScore,
  getMinesweeperLeaderboard,
  submitMinesweeperScore,
  getQrData,
  addQrRow,
  updateQrRow,
  deleteQrRow,
  getEatingData,
  saveEatingDay,
  resetEatingData,
  getHomeData,
  addHomeItem,
  updateHomeItem,
  toggleHomeCheck,
  resetHomeData,
  getExpenseData,
  addExpenseEntry,
  updateExpenseEntry,
  deleteExpenseEntry,
  addExpenseIncomeEntry,
  updateExpenseIncomeEntry,
  deleteExpenseIncomeEntry,
  saveExpenseSavingsGoal,
  addExpenseSavingsLog,
  updateExpenseSavingsLog,
  deleteExpenseSavingsLog,
  setExpenseCategoryBudget,
  deleteExpenseCategoryBudget,
  addExpenseWallet,
  updateExpenseWallet,
  deleteExpenseWallet,
  addExpenseTransfer,
  updateExpenseTransfer,
  deleteExpenseTransfer,
  addExpenseCategory,
  updateExpenseCategory,
  deleteExpenseCategory,
  getExpenseTodayTotal,
  getReminderSettings,
  saveReminderSettings,
  getPushKey,
  savePushSubscription,
  deletePushSubscription,
  getPushDevices,
  sendTestPush,
  runReminders,
  getDriveStatus,
  googleAuthUrl,
  disconnectGoogleDrive,
  getLoveData,
  saveLoveMemory,
  uploadLovePhoto,
  startLovePhotoUpload,
  finishLovePhotoUpload,
  cancelLovePhotoUpload,
  startLoveFrameUpload,
  setLoveFrame,
  saveLoveFood,

  getStudyData,
  getStudyPlan,
  updateStudyPlan,
  deleteStudyPlan,
  openStudyLesson,
  setStudyLessonDone,
  makeStudyTest,
  submitStudyTest,
  deleteStudyTest,
  importStudyPlan,
  markStudyAnswer,
  retakeStudyTest,
  getNotesData, saveNote, deleteNote,
  getGoalsData, saveGoal, deleteGoal, getGoalWishlist, saveGoalWishlist, getExpenseYearBudget, saveExpenseYearBudget, getExpenseYearTrend,
  getHealthData, saveHealthLog, deleteHealthLog, saveHealthProfile,
  getLawDocs, setLawDoc, deleteLawDoc,
  getLibrary, importLibrary, deleteLibraryDoc, getLibraryDoc, searchLibrary,
  deleteLovePhoto,
  deleteLoveMemory
};


/* ============================================================
 *  REMINDERS — push notifications to the phone (supabase/push.sql)
 *  runReminders is called every 5 minutes by Supabase pg_cron. It's public on
 *  purpose (no secret to keep): it only sends what's due by the saved settings,
 *  once per kind per day (push_log), to the devices that turned it on.
 * ============================================================ */
const REMINDER_DEFAULTS_ = {
  morning: { on: true, time: '08:00' },            // today + late
  evening: { on: true, time: '20:00' },            // tomorrow
  before: { on: true, days: 3, time: '09:00' },    // N days ahead
  sources: { work: true, calendar: true, todo: true },
  private: false                                   // true = only "3 things today" on the lock screen
};
function reminderClean_(r) {
  const d = REMINDER_DEFAULTS_, t = (v, f) => (/^([01]\d|2[0-3]):[0-5]\d$/.test(v || '') ? v : f);
  r = r || {};
  const pick = (o, k) => (o && typeof o[k] === 'boolean' ? o[k] : undefined);
  return {
    morning: { on: pick(r.morning, 'on') ?? d.morning.on, time: t(r.morning && r.morning.time, d.morning.time) },
    evening: { on: pick(r.evening, 'on') ?? d.evening.on, time: t(r.evening && r.evening.time, d.evening.time) },
    before: {
      on: pick(r.before, 'on') ?? d.before.on,
      days: Math.max(1, Math.min(14, Math.round(Number(r.before && r.before.days) || d.before.days))),
      time: t(r.before && r.before.time, d.before.time)
    },
    sources: {
      work: pick(r.sources, 'work') ?? true, calendar: pick(r.sources, 'calendar') ?? true, todo: pick(r.sources, 'todo') ?? true,
      study: pick(r.sources, 'study') ?? true, goals: pick(r.sources, 'goals') ?? true
    },
    // an AI summary of your days (off unless turned on: it costs a little each time)
    private: typeof r.private === 'boolean' ? r.private : d.private
  };
}
async function getReminderSettings(env) {
  const rows = await sb(env, 'app_settings?key=eq.reminders&select=value');
  return reminderClean_(rows.length ? rows[0].value : null);
}
async function saveReminderSettings(env, [r]) {
  const value = reminderClean_(r);
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'reminders', value }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return value;
}

// VAPID keys: made once by the server, private half encrypted with PERSONAL_SECRET.
async function pushVapid_(env) {
  const rows = await sb(env, 'app_settings?key=eq.vapid&select=value');
  if (rows.length && rows[0].value && rows[0].value.publicKey) {
    return { publicKey: rows[0].value.publicKey, privateJwk: JSON.parse(await decryptField_(env, rows[0].value.privateJwk)) };
  }
  const k = await makeVapidKeys();
  const value = { publicKey: k.publicKey, privateJwk: await encryptField_(env, JSON.stringify(k.privateJwk)) };
  // ignore-duplicates: if two requests race, the first saved pair wins and we re-read it
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'vapid', value }]), prefer: 'resolution=ignore-duplicates,return=minimal' });
  const again = await sb(env, 'app_settings?key=eq.vapid&select=value');
  return { publicKey: again[0].value.publicKey, privateJwk: JSON.parse(await decryptField_(env, again[0].value.privateJwk)) };
}
const PUSH_SUBJECT_ = 'https://namuwu.pages.dev';

async function getPushKey(env) {
  return (await pushVapid_(env)).publicKey;
}
async function savePushSubscription(env, [sub, label]) {
  sub = sub || {};
  const keys = sub.keys || {};
  if (!/^https:\/\//.test(sub.endpoint || '') || !keys.p256dh || !keys.auth) throw new Error('Bad subscription');
  await sb(env, 'push_subscriptions?on_conflict=endpoint', {
    method: 'POST',
    body: JSON.stringify([{ endpoint: sub.endpoint, p256dh: keys.p256dh, auth: keys.auth, label: String(label || '').slice(0, 120) }]),
    prefer: 'resolution=merge-duplicates,return=minimal'
  });
  return { ok: true };
}
async function deletePushSubscription(env, [endpoint]) {
  await sb(env, 'push_subscriptions?endpoint=eq.' + encodeURIComponent(String(endpoint || '')), { method: 'DELETE', prefer: 'return=minimal' });
  return { ok: true };
}
async function getPushDevices(env) {
  const rows = await sb(env, 'push_subscriptions?select=endpoint,label,created_at&order=created_at.asc');
  return rows.map((r) => ({ endpoint: r.endpoint, label: r.label || '', since: r.created_at }));
}
async function pushToAll_(env, payload) {
  const subs = await sb(env, 'push_subscriptions?select=id,endpoint,p256dh,auth');
  if (!subs.length) return 0;
  const vapid = await pushVapid_(env);
  let sent = 0;
  for (const s of subs) {
    try {
      const st = await sendPush(s, payload, vapid, PUSH_SUBJECT_);
      if (st === 404 || st === 410) await sb(env, 'push_subscriptions?id=eq.' + Number(s.id), { method: 'DELETE', prefer: 'return=minimal' });
      else if (st >= 200 && st < 300) sent++;
    } catch (e) { /* one bad device mustn't stop the others */ }
  }
  return sent;
}
async function sendTestPush(env) {
  const sent = await pushToAll_(env, { title: 'Henlo ✿', body: 'Reminders work on this device (๑ᵔ⌔ᵔ๑)', tag: 'test', url: '/personal' });
  return { sent };
}

// What's on a given day (or late, for "today").
async function reminderItems_(env, day, cfg, includeLate) {
  const items = [];
  if (cfg.sources.work) {
    let rows = [];
    try { rows = await sb(env, 'work_tasks?status=neq.done&select=title,due_date,subtasks'); } catch (e) { rows = []; }
    rows.forEach((r) => {
      let eff = r.due_date || '';
      (r.subtasks || []).forEach((x) => { if (!x.done && x.due && (!eff || x.due < eff)) eff = x.due; });
      if (!eff) return;
      if (eff === day) items.push({ text: r.title });
      else if (includeLate && eff < day) items.push({ text: r.title, late: eff });
    });
  }
  if (cfg.sources.calendar) {
    try {
      const cal = await getCalendarNotes(env, [day.slice(0, 4)]);
      cal.notes.forEach((n) => { if (n.day === day && n.kind !== 'off') items.push({ text: n.note, kind: n.kind }); });
    } catch (e) { /* calendar not set up */ }
  }
  if (cfg.sources.study) {
    let rows = [];
    try { rows = await sb(env, 'study_lessons?done=eq.false&day=lte.' + day + '&select=title,day,study_plans!inner(subject,status)&study_plans.status=eq.active&order=day.asc&limit=20'); } catch (e) { rows = []; }
    rows.forEach((r) => {
      if (r.day === day) items.push({ text: r.title });
      else if (includeLate) items.push({ text: r.title, late: r.day });
    });
  }
  if (cfg.sources.goals) {
    let rows = [];
    try { rows = await sb(env, 'goals?status=eq.active&select=title,deadline,steps'); } catch (e) { rows = []; }
    rows.forEach((g) => {
      if (g.deadline === day) items.push({ text: g.title });
      (g.steps || []).forEach((x) => { if (!x.done && x.due === day) items.push({ text: x.text }); });
    });
  }
  if (cfg.sources.todo) {
    let rows = [];
    try { rows = await sb(env, 'home_todos?check=eq.false&deadline=not.is.null&select=todolist,deadline'); } catch (e) { rows = []; }
    rows.forEach((r) => {
      const d = String(r.deadline).slice(0, 10);
      if (d === day) items.push({ text: r.todolist });
      else if (includeLate && d < day) items.push({ text: r.todolist, late: d });
    });
  }
  return items;
}
function vnAddDays_(day, n) {
  const d = new Date(day + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
function reminderBody_(items, cfg, what) {
  if (cfg.private) return 'You have ' + items.length + ' thing' + (items.length === 1 ? '' : 's') + ' ' + what + ' ✿';
  const lines = items.slice(0, 6).map((it) => '• ' + it.text + (it.late ? ' (late ' + it.late.slice(8, 10) + '/' + it.late.slice(5, 7) + ')' : '') + (it.kind === 'him' ? ' ♡' : ''));
  if (items.length > 6) lines.push('+' + (items.length - 6) + ' more');
  return lines.join('\n');
}
async function runReminders(env) {
  const cfg = await getReminderSettings(env);
  const now = vnNow_();                                          // Vietnam time
  const mins = (t) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));
  const nowM = mins(now.time);
  const jobs = [];
  const due = (slot) => slot.on && nowM >= mins(slot.time) && nowM - mins(slot.time) < 90;   // within 1.5 h of the set time
  if (due(cfg.morning)) jobs.push({ key: 'morning:' + now.date, day: now.date, late: true, title: 'Today', what: 'today', tag: 'morning' });
  if (due(cfg.evening)) jobs.push({ key: 'evening:' + now.date, day: vnAddDays_(now.date, 1), late: false, title: 'Tomorrow', what: 'tomorrow', tag: 'evening' });
  if (due(cfg.before)) {
    const day = vnAddDays_(now.date, cfg.before.days);
    jobs.push({ key: 'before:' + now.date, day, late: false, title: 'In ' + cfg.before.days + ' day' + (cfg.before.days === 1 ? '' : 's') + ' · ' + day.slice(8, 10) + '/' + day.slice(5, 7), what: 'coming up', tag: 'before' });
  }
  const done = [];
  for (const j of jobs) {
    // claim the slot first (primary key) so two runs can't both send it
    try { await sb(env, 'push_log', { method: 'POST', body: JSON.stringify([{ key: j.key }]), prefer: 'return=minimal' }); }
    catch (e) { continue; }                                      // already sent today
    const items = await reminderItems_(env, j.day, cfg, j.late);
    if (!items.length) { done.push({ key: j.key, sent: 0, empty: true }); continue; }
    const sent = await pushToAll_(env, {
      title: j.title + ' · ' + items.length, body: reminderBody_(items, cfg, j.what), tag: j.tag, url: '/personal'
    });
    done.push({ key: j.key, sent });
  }
  // keep the log short
  if (Math.random() < 0.05) await sb(env, 'push_log?sent_at=lt.' + new Date(Date.now() - 40 * 86400000).toISOString(), { method: 'DELETE', prefer: 'return=minimal' }).catch(() => {});
  return { now: now.date + ' ' + now.time, done };
}


/* ============================================================
 *  LOVE — photo album (supabase/love.sql). Text in Supabase, photos in
 *  Google Drive (lib/drive.js), named yymmdd_<province>.<ext>.
 *  Needs GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET on Cloudflare; the refresh
 *  token from "Connect Google Drive" is kept encrypted in app_settings.
 * ============================================================ */
const LOVE_FOLDER_DEFAULT_ = '1fv_aE93vMP3mP31tkIhpdaKV9knYvBjh';
const LOVE_MAX_BYTES_ = 25 * 1024 * 1024;
async function googleSaved_(env) {
  const rows = await sb(env, 'app_settings?key=eq.google&select=value');
  return rows.length ? rows[0].value || {} : {};
}
async function driveToken_(env) {
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) throw new Error('GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET are not set on the server');
  const g = await googleSaved_(env);
  if (!g.refresh) throw new Error('Google Drive is not connected yet — ⚙ → Connect Google Drive');
  return drive.accessToken(env, await decryptField_(env, g.refresh));
}
function loveFolder_(g) { return (g && g.folder) || LOVE_FOLDER_DEFAULT_; }
function googleRedirect_(env) { return (env.__origin || 'https://namuwu.pages.dev') + '/api'; }

async function getDriveStatus(env) {
  const g = await googleSaved_(env);
  const out = { configured: !!(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET), connected: !!g.refresh, folder: loveFolder_(g), folderName: '' };
  if (out.configured && out.connected) {
    try { out.folderName = (await drive.folderInfo(await driveToken_(env), out.folder)).name || ''; }
    catch (e) { out.error = String(e.message || e).slice(0, 200); }
  }
  return out;
}
async function googleAuthUrl(env) {
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) throw new Error('Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET on Cloudflare first');
  const exp = String(Date.now() + 10 * 60 * 1000);
  return drive.authUrl(env, googleRedirect_(env), exp + '.' + await personalSign_(env, 'gstate.' + exp));
}
async function disconnectGoogleDrive(env) {
  const g = await googleSaved_(env);
  delete g.refresh;
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'google', value: g }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return { ok: true };
}
// Google sends the browser back to GET /api?code=…&state=…
async function googleCallback_(env, url) {
  const state = url.searchParams.get('state') || '', code = url.searchParams.get('code') || '';
  const dot = state.indexOf('.');
  const exp = state.slice(0, dot), sig = state.slice(dot + 1);
  if (dot < 1 || !/^\d+$/.test(exp) || Number(exp) < Date.now() || !sameText_(sig, await personalSign_(env, 'gstate.' + exp))) {
    return Response.redirect((env.__origin || '') + '/personal?drive=expired', 302);
  }
  const tok = await drive.exchangeCode(env, code, googleRedirect_(env));
  if (!tok.refresh_token) return Response.redirect((env.__origin || '') + '/personal?drive=norefresh', 302);
  const g = await googleSaved_(env);
  g.refresh = await encryptField_(env, tok.refresh_token);
  g.connectedAt = new Date().toISOString();
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'google', value: g }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return Response.redirect((env.__origin || '') + '/personal?drive=ok', 302);
}

function loveMemoryOut_(m, photos) {
  return {
    id: m.id, day: m.day, province: m.province || '', place: m.place || '', note: m.note || '', tags: m.tags || [],
    photos: photos.filter((p) => p.memory_id === m.id).map((p) => ({ id: p.id, driveId: p.drive_id, name: p.name }))
  };
}
async function getLoveData(env) {
  const [mem, ph] = await Promise.all([
    sb(env, 'love_memories?select=id,day,province,place,note,tags&order=day.desc,id.desc&limit=2000'),
    sb(env, 'love_photos?select=id,memory_id,drive_id,name&drive_id=not.like.pending:*&order=id.asc&limit=10000')
  ]);
  // uploads that never finished (closed tab, lost signal) → forget them after a day
  sb(env, 'love_photos?drive_id=like.pending:*&created_at=lt.' + new Date(Date.now() - 86400000).toISOString(), { method: 'DELETE', prefer: 'return=minimal' }).catch(() => {});
  let him = [];
  try { him = (await sb(env, 'calendar_notes?kind=eq.him&select=day,note,repeat&order=day.asc')).map((r) => ({ day: r.day, note: r.note || '', repeat: r.repeat || '' })); }
  catch (e) { him = []; }
  const g = await googleSaved_(env).catch(() => ({}));
  let food = [];
  try { const fr = await sb(env, 'app_settings?key=eq.love_food&select=value'); food = (fr[0] && fr[0].value && fr[0].value.items) || []; } catch (e) { food = []; }
  return { today: vnNow_().date, memories: mem.map((m) => loveMemoryOut_(m, ph)), him, frame: g.loveFrame || '', food };
}


/* ============================================================
 *  STUDY — Languages + Skills houses (supabase/study.sql) — roadmaps come from imported files, marked here without AI
 *  Claude plans the roadmap, writes lessons on first open, makes exercises /
 *  tests and marks them. Answers stay on the server until a test is handed in.
 * ============================================================ */
const STUDY_HOUSES_ = ['language', 'skills'];
const STUDY_FILE_ = '[file]';
const studyFromFile_ = (p) => String((p && p.notes) || '').startsWith(STUDY_FILE_);
function studyPlanOut_(p, lessons) {
  const ls = lessons || [];
  return {
    id: p.id, house: p.house, subject: p.subject, level: p.level, goal: p.goal, minutesPerDay: p.minutes_per_day,
    daysPerWeek: p.days_per_week, weeks: p.weeks, startDate: p.start_date, notes: String(p.notes || '').replace(STUDY_FILE_, '').trim(), summary: p.summary, status: p.status,
    fromFile: studyFromFile_(p),
    total: ls.length, done: ls.filter((l) => l.done).length,
    next: (ls.filter((l) => !l.done).sort((a, b) => a.seq - b.seq)[0] || null)
  };
}
function studyLessonOut_(l, full) {
  return { id: l.id, planId: l.plan_id, week: l.week, seq: l.seq, day: l.day, title: l.title, goal: l.goal, done: !!l.done, hasContent: !!l.content, content: full ? l.content : undefined };
}
function studyTestOut_(t, reveal) {
  const qs = (t.questions || []).map((q) => (reveal ? q : { type: q.type, q: q.q, options: q.options, points: q.points }));
  return { id: t.id, planId: t.plan_id, lessonId: t.lesson_id, kind: t.kind, title: t.title, questions: qs, answers: t.answers || null,
    results: t.results || null, score: t.score, max: t.max_score, feedback: t.feedback || '', createdAt: t.created_at, submittedAt: t.submitted_at };
}
function studyMissingTable_(e) {
  if (/study_|does not exist|42P01/.test(String(e && e.message))) throw new Error('Run supabase/study.sql in Supabase first');
  throw e;
}
async function studyPlanRow_(env, id) {
  const rows = await sb(env, 'study_plans?id=eq.' + Number(id) + '&select=*');
  if (!rows.length) throw new Error('Roadmap not found');
  return rows[0];
}
async function getStudyData(env, [house]) {
  house = STUDY_HOUSES_.includes(house) ? house : 'language';
  try {
    const plans = await sb(env, 'study_plans?house=eq.' + house + '&select=*&order=created_at.desc');
    const ids = plans.map((p) => p.id);
    const lessons = ids.length ? await sb(env, 'study_lessons?plan_id=in.(' + ids.join(',') + ')&select=id,plan_id,week,seq,day,title,goal,done&order=seq.asc') : [];
    return { today: vnNow_().date, plans: plans.map((p) => studyPlanOut_(p, lessons.filter((l) => l.plan_id === p.id))) };
  } catch (e) { studyMissingTable_(e); }
}
async function getStudyPlan(env, [id]) {
  const p = await studyPlanRow_(env, id);
  const [lessons, tests] = await Promise.all([
    sb(env, 'study_lessons?plan_id=eq.' + p.id + '&select=id,plan_id,week,seq,day,title,goal,done,content&order=seq.asc'),
    sb(env, 'study_tests?plan_id=eq.' + p.id + '&select=*&order=created_at.desc&limit=200')
  ]);
  return { today: vnNow_().date, plan: studyPlanOut_(p, lessons), lessons: lessons.map((l) => studyLessonOut_(l, false)), tests: tests.map((t) => studyTestOut_(t, !!t.submitted_at)) };
}
// spread the lessons over the weeks: N lessons a week, on evenly spaced days
function studyDays_(start, lessons, perWeek) {
  const d0 = new Date(start + 'T00:00:00Z'), gap = Math.max(1, Math.floor(7 / perWeek));
  const byWeek = {};
  return lessons.map((l) => {
    const k = byWeek[l.week] = (byWeek[l.week] || 0) + 1;
    const d = new Date(d0.getTime() + ((l.week - 1) * 7 + (k - 1) * gap) * 86400000);
    return Object.assign({}, l, { day: d.toISOString().slice(0, 10) });
  });
}
async function updateStudyPlan(env, [id, patch]) {
  const p = patch || {}, body = {};
  if (['active', 'paused', 'done'].includes(p.status)) body.status = p.status;
  if (typeof p.notes === 'string') body.notes = p.notes.slice(0, 1000);
  if (Object.keys(body).length) await sb(env, 'study_plans?id=eq.' + Number(id), { method: 'PATCH', body: JSON.stringify(body), prefer: 'return=minimal' });
  return getStudyPlan(env, [id]);
}
async function deleteStudyPlan(env, [id]) {
  const p = await studyPlanRow_(env, id);
  await sb(env, 'study_plans?id=eq.' + p.id, { method: 'DELETE', prefer: 'return=minimal' });
  return getStudyData(env, [p.house]);
}
async function openStudyLesson(env, [id]) {
  const rows = await sb(env, 'study_lessons?id=eq.' + Number(id) + '&select=*');
  if (!rows.length) throw new Error('Lesson not found');
  return studyLessonOut_(rows[0], true);                // lessons come written in the imported file
}
async function setStudyLessonDone(env, [id, done]) {
  await sb(env, 'study_lessons?id=eq.' + Number(id), { method: 'PATCH', body: JSON.stringify({ done: !!done, done_at: done ? new Date().toISOString() : null }), prefer: 'return=minimal' });
  return { ok: true };
}
// "Review mistakes": a new test made of the questions you got wrong before (no AI — the
// exercises and tests themselves come with the imported file)
async function makeStudyTest(env, [planId]) {
  const p = await studyPlanRow_(env, planId);
  const done = await sb(env, 'study_tests?plan_id=eq.' + p.id + '&submitted_at=not.is.null&select=questions,results&order=submitted_at.desc&limit=40');
  const qs = [], seen = new Set();
  done.forEach((t) => (t.results || []).forEach((r, i) => { const q = t.questions[i]; if (r && r.correct === false && q && !seen.has(q.q)) { seen.add(q.q); qs.push(q); } }));
  if (!qs.length) throw new Error('No mistakes to review yet ♡');
  const pick = qs.slice(0, 20);
  const [row] = await sb(env, 'study_tests', { method: 'POST', body: JSON.stringify([{ plan_id: p.id, kind: 'review', title: 'Review · ' + pick.length + ' you missed', questions: pick, max_score: pick.reduce((a, q) => a + (Number(q.points) || 1), 0) }]) });
  return studyTestOut_(row, false);
}
async function submitStudyTest(env, [id, answers]) {
  const rows = await sb(env, 'study_tests?id=eq.' + Number(id) + '&select=*');
  if (!rows.length) throw new Error('Test not found');
  const t = rows[0];
  if (t.submitted_at) return studyTestOut_(t, true);
  const p = await studyPlanRow_(env, t.plan_id);
  const ans = (Array.isArray(answers) ? answers : []).slice(0, t.questions.length).map((a) => String(a == null ? '' : a).slice(0, 4000));
  while (ans.length < t.questions.length) ans.push('');
  const g = studyGradeLocal_(t.questions, ans);
  const [row] = await sb(env, 'study_tests?id=eq.' + t.id, { method: 'PATCH', body: JSON.stringify({ answers: ans, results: g.results, score: g.score, max_score: g.max, feedback: g.feedback, submitted_at: new Date().toISOString() }) });
  // an exercise done well ticks its lesson off
  if (t.kind === 'exercise' && t.lesson_id && g.max && g.score / g.max >= 0.7) await setStudyLessonDone(env, [t.lesson_id, true]);
  return studyTestOut_(row, true);
}
// marking without the AI: multiple choice and short answers by matching (answer or any "accept"),
// written answers are left for you to check against the model answer (correct: null)
function studyNorm_(v) { return String(v == null ? '' : v).normalize('NFKC').toLowerCase().replace(/[\s　]+/g, ' ').replace(/[.,!?;:"'“”‘’。、！？「」()（）\[\]]/g, '').trim(); }
function studyGradeLocal_(questions, answers) {
  const results = questions.map((q, i) => {
    const a = studyNorm_(answers[i]), pts = Number(q.points) || 1;
    if (!a) return { correct: false, score: 0, comment: 'No answer' };
    if (q.type === 'write') return { correct: null, score: 0, comment: '' };
    const ok = [q.answer].concat(q.accept || []).some((x) => studyNorm_(x) === a);
    return { correct: ok, score: ok ? pts : 0, comment: '' };
  });
  const score = results.reduce((s, r) => s + r.score, 0), max = questions.reduce((s, q) => s + (Number(q.points) || 1), 0);
  const selfs = results.filter((r) => r.correct === null).length;
  return { results, score, max, feedback: selfs ? 'Check your written answer' + (selfs > 1 ? 's' : '') + ' against the model answer and mark ✓ / ✗ ✿' : '' };
}
// you mark a written answer yourself (file plans), or fix a mark you disagree with
async function markStudyAnswer(env, [id, i, correct]) {
  const rows = await sb(env, 'study_tests?id=eq.' + Number(id) + '&select=*');
  if (!rows.length) throw new Error('Test not found');
  const t = rows[0], res = (t.results || []).slice(), q = t.questions[Number(i)];
  if (!q || !res[Number(i)]) throw new Error('No such question');
  res[Number(i)] = Object.assign({}, res[Number(i)], { correct: !!correct, score: correct ? (Number(q.points) || 1) : 0 });
  const score = res.reduce((s, r) => s + (r.score || 0), 0);
  const [row] = await sb(env, 'study_tests?id=eq.' + t.id, { method: 'PATCH', body: JSON.stringify({ results: res, score }) });
  if (t.kind === 'exercise' && t.lesson_id && t.max_score && score / t.max_score >= 0.7) await setStudyLessonDone(env, [t.lesson_id, true]);
  return studyTestOut_(row, true);
}
// do it again: a fresh copy with the same questions (no AI)
async function retakeStudyTest(env, [id]) {
  const rows = await sb(env, 'study_tests?id=eq.' + Number(id) + '&select=*');
  if (!rows.length) throw new Error('Test not found');
  const t = rows[0];
  const [row] = await sb(env, 'study_tests', { method: 'POST', body: JSON.stringify([{ plan_id: t.plan_id, lesson_id: t.lesson_id, kind: t.kind, title: t.title.replace(/ · again( \d+)?$/, '') + ' · again', questions: t.questions, max_score: t.max_score }]) });
  return studyTestOut_(row, false);
}
// a whole roadmap from a file (docs/study-format.md): lessons with their content, exercises, tests + answers
function studyQuestions_(list) {
  return (Array.isArray(list) ? list : []).slice(0, 60).map((q) => {
    const type = ['mcq', 'short', 'write'].includes(q && q.type) ? q.type : 'short';
    const options = type === 'mcq' ? (Array.isArray(q.options) ? q.options : []).map((o) => str_(o, 500)).slice(0, 8) : [];
    let answer = str_(q && q.answer, 3000);
    if (type === 'mcq' && /^\d+$/.test(answer) && options[Number(answer)]) answer = options[Number(answer)];   // an index is fine too
    if (type === 'mcq' && !options.includes(answer)) { const m = options.find((o) => studyNorm_(o) === studyNorm_(answer)); if (m) answer = m; }
    return { type, q: str_(q && q.q, 3000), options, answer, accept: (Array.isArray(q && q.accept) ? q.accept : []).map((x) => str_(x, 500)).slice(0, 10),
      explain: str_(q && q.explain, 2000), points: Math.max(1, Math.min(10, Number(q && q.points) || (type === 'write' ? 3 : 1))) };
  }).filter((q) => q.q && (q.type !== 'mcq' || (q.options.length >= 2 && q.options.includes(q.answer))));
}
async function importStudyPlan(env, [file, house]) {
  let f = file;
  if (typeof f === 'string') { try { f = JSON.parse(f); } catch (e) { throw new Error('That file is not valid JSON'); } }
  if (!f || typeof f !== 'object' || !Array.isArray(f.lessons) || !f.lessons.length) throw new Error('The file has no "lessons" — see docs/study-format.md');
  const lessonsIn = f.lessons.slice(0, 300);
  const weeks = Math.max(1, Math.min(52, Number(f.weeks) || Math.max(1, ...lessonsIn.map((l) => Number(l.week) || 1))));
  const plan = {
    house: STUDY_HOUSES_.includes(f.house) ? f.house : (STUDY_HOUSES_.includes(house) ? house : 'language'),
    subject: str_(f.subject || f.title, 120).trim() || 'My roadmap', level: str_(f.level, 300), goal: str_(f.goal, 600),
    minutes_per_day: Math.max(5, Math.min(480, Number(f.minutesPerDay) || 30)), days_per_week: Math.max(1, Math.min(7, Number(f.daysPerWeek) || 5)),
    weeks, start_date: day_(f.startDate) || vnNow_().date, summary: str_(f.summary, 3000), notes: (STUDY_FILE_ + ' ' + str_(f.notes, 900)).trim()
  };
  await sb(env, 'study_plans?select=id&limit=1').catch(studyMissingTable_);
  const ls = lessonsIn.map((l, i) => ({ week: Math.max(1, Math.min(weeks, Number(l.week) || 1)), seq: i + 1, title: str_(l.title, 200).trim() || 'Lesson ' + (i + 1), goal: str_(l.goal, 400), content: str_(l.content, 40000), day: day_(l.day), ex: l.exercise }));
  const dated = studyDays_(plan.start_date, ls, plan.days_per_week);
  const [row] = await sb(env, 'study_plans', { method: 'POST', body: JSON.stringify([plan]) });
  const made = await sb(env, 'study_lessons', { method: 'POST', body: JSON.stringify(dated.map((l, i) => ({ plan_id: row.id, week: l.week, seq: l.seq, day: ls[i].day || l.day, title: l.title, goal: l.goal, content: l.content }))) });
  const bySeq = {}; made.forEach((m) => { bySeq[m.seq] = m.id; });
  const tests = [];
  ls.forEach((l) => { const qs = l.ex && studyQuestions_(l.ex.questions || l.ex); if (qs && qs.length) tests.push({ plan_id: row.id, lesson_id: bySeq[l.seq], kind: 'exercise', title: 'Exercise · ' + (str_(l.ex.title, 150) || l.title), questions: qs }); });
  (Array.isArray(f.tests) ? f.tests : []).slice(0, 60).forEach((t, k) => {
    const qs = studyQuestions_(t && t.questions); if (!qs.length) return;
    const wk = Number(t.week) || 0;
    tests.push({ plan_id: row.id, lesson_id: null, kind: 'test', title: (wk ? 'Week ' + wk + ' · ' : 'Final · ') + (str_(t.title, 150) || 'Test ' + (k + 1)), questions: qs });
  });
  tests.forEach((t) => { t.max_score = t.questions.reduce((s, q) => s + q.points, 0); });
  if (tests.length) await sb(env, 'study_tests', { method: 'POST', body: JSON.stringify(tests), prefer: 'return=minimal' });
  return getStudyPlan(env, [row.id]);
}
async function deleteStudyTest(env, [id]) {
  await sb(env, 'study_tests?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' });
  return { ok: true };
}


/* ============================================================
 *  NOTES · GOALS · FOOD & GYM · LAW (supabase/houses.sql) — no AI
 * ============================================================ */
function housesMissing_(e) {
  if (/notes|goals|health_logs|law_docs|does not exist|42P01/.test(String(e && e.message))) throw new Error('Run supabase/houses.sql in Supabase first');
  throw e;
}
const str_ = (v, n) => String(v == null ? '' : v).slice(0, n);
const day_ = (v) => (/^\d{4}-\d{2}-\d{2}$/.test(String(v || '')) ? v : null);

/* ---- Notes: by field ---- */
function noteOut_(r) { return { id: r.id, field: r.field, title: r.title, body: r.body, pinned: r.pinned, updatedAt: r.updated_at, createdAt: r.created_at }; }
async function getNotesData(env) {
  try { return { notes: (await sb(env, 'notes?select=*&order=pinned.desc,updated_at.desc&limit=2000')).map(noteOut_) }; }
  catch (e) { housesMissing_(e); }
}
async function saveNote(env, [n]) {
  n = n || {};
  const row = { field: str_(n.field, 60).trim() || 'General', title: str_(n.title, 200).trim(), body: str_(n.body, 60000), pinned: !!n.pinned, updated_at: new Date().toISOString() };
  if (!row.title && !row.body.trim()) throw new Error('The note is empty');
  if (n.id) await sb(env, 'notes?id=eq.' + Number(n.id), { method: 'PATCH', body: JSON.stringify(row), prefer: 'return=minimal' });
  else await sb(env, 'notes', { method: 'POST', body: JSON.stringify([row]), prefer: 'return=minimal' }).catch(housesMissing_);
  return getNotesData(env);
}
async function deleteNote(env, [id]) { await sb(env, 'notes?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' }); return getNotesData(env); }

/* ---- Goals: by year, with cost + steps ---- */
function goalOut_(r) {
  const steps = Array.isArray(r.steps) ? r.steps : [];
  return { id: r.id, year: r.year, title: r.title, area: r.area, why: r.why, deadline: r.deadline, target: Number(r.target_amount) || 0, saved: Number(r.saved_amount) || 0,
    status: r.status, steps, createdAt: r.created_at };
}
/* ---- Expense › yearly budget ("ᯓ★"): what each thing costs a month; the year is ×12 (app_settings 'year_budget') ---- */
async function getExpenseYearBudget(env) {
  const rows = await sb(env, 'app_settings?key=eq.year_budget&select=value').catch(() => []);
  return { items: ((rows[0] && rows[0].value && rows[0].value.items) || []) };
}
async function saveExpenseYearBudget(env, [items]) {
  const clean = (Array.isArray(items) ? items : []).slice(0, 200).map((it, i) => ({
    id: String((it && it.id) || Date.now().toString(36) + i).slice(0, 24),
    name: String((it && it.name) || '').trim().slice(0, 120),
    monthly: Math.max(0, Math.round(Number(it && it.monthly) || 0))
  })).filter((it) => it.name || it.monthly);
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'year_budget', value: { items: clean } }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return { items: clean };
}
/* ---- Goals › wishlist: things you want and what they cost (app_settings key 'wishlist', no new table) ---- */
async function getGoalWishlist(env) {
  const rows = await sb(env, 'app_settings?key=eq.wishlist&select=value').catch(() => []);
  return { items: ((rows[0] && rows[0].value && rows[0].value.items) || []) };
}
async function saveGoalWishlist(env, [items]) {
  const clean = (Array.isArray(items) ? items : []).slice(0, 300).map((it, i) => ({
    id: String((it && it.id) || Date.now().toString(36) + i).slice(0, 24),
    name: String((it && it.name) || '').trim().slice(0, 120),
    price: Math.max(0, Math.round(Number(it && it.price) || 0)),
    done: !!(it && it.done),
    doneAt: it && it.done ? String(it.doneAt || vnNow_().date).slice(0, 10) : ''
  })).filter((it) => it.name);
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'wishlist', value: { items: clean } }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return { items: clean };
}
async function getGoalsData(env, [year]) {
  const y = Number(year) || Number(vnNow_().date.slice(0, 4));
  try {
    const rows = await sb(env, 'goals?year=eq.' + y + '&select=*&order=status.asc,deadline.asc.nullslast,id.asc');
    const years = (await sb(env, 'goals?select=year')).map((r) => r.year);
    return { today: vnNow_().date, year: y, years: Array.from(new Set(years.concat([y, Number(vnNow_().date.slice(0, 4))]))).sort(), goals: rows.map(goalOut_) };
  } catch (e) { housesMissing_(e); }
}
function goalRow_(g) {
  return {
    year: Math.max(2000, Math.min(2100, Number(g.year) || Number(vnNow_().date.slice(0, 4)))),
    title: str_(g.title, 200).trim(), area: str_(g.area, 60).trim(), why: str_(g.why, 1000), deadline: day_(g.deadline),
    target_amount: Math.max(0, Number(g.target) || 0), saved_amount: Math.max(0, Number(g.saved) || 0),
    status: ['active', 'done', 'dropped'].includes(g.status) ? g.status : 'active',
    steps: (Array.isArray(g.steps) ? g.steps : []).slice(0, 30).map((x) => ({ text: str_(x && x.text, 300).trim(), done: !!(x && x.done), due: day_(x && x.due) || '' })).filter((x) => x.text)
  };
}
async function saveGoal(env, [g]) {
  g = g || {};
  const row = goalRow_(g);
  if (!row.title) throw new Error('Give the goal a name');
  if (g.id) await sb(env, 'goals?id=eq.' + Number(g.id), { method: 'PATCH', body: JSON.stringify(row), prefer: 'return=minimal' });
  else await sb(env, 'goals', { method: 'POST', body: JSON.stringify([row]), prefer: 'return=minimal' }).catch(housesMissing_);
  return getGoalsData(env, [row.year]);
}
async function deleteGoal(env, [id, year]) { await sb(env, 'goals?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' }); return getGoalsData(env, [year]); }

/* ---- Food & Gym ---- */
function healthOut_(r) { return { id: r.id, day: r.day, kind: r.kind, title: r.title, kcal: r.kcal, minutes: r.minutes, value: r.value == null ? null : Number(r.value), note: r.note }; }
async function healthProfile_(env) {
  const rows = await sb(env, 'app_settings?key=eq.health&select=value').catch(() => []);
  return (rows[0] && rows[0].value) || {};
}
async function getHealthData(env, [from, to]) {
  const today = vnNow_().date, f = day_(from) || vnAddDays_(today, -27), t = day_(to) || today;
  try {
    const rows = await sb(env, 'health_logs?day=gte.' + f + '&day=lte.' + t + '&select=*&order=day.asc,id.asc&limit=3000');
    const last = await sb(env, 'health_logs?kind=eq.weight&select=day,value&order=day.desc&limit=1');
    return { today, from: f, to: t, logs: rows.map(healthOut_), profile: await healthProfile_(env), lastWeight: last[0] ? Number(last[0].value) : null };
  } catch (e) { housesMissing_(e); }
}
async function saveHealthLog(env, [l, range]) {
  l = l || {};
  const kind = ['meal', 'workout', 'weight', 'water'].includes(l.kind) ? l.kind : 'meal';
  const num = (v, a, b) => (v === '' || v == null || isNaN(Number(v)) ? null : Math.max(a, Math.min(b, Number(v))));
  const row = { day: day_(l.day) || vnNow_().date, kind, title: str_(l.title, 200).trim(), kcal: num(l.kcal, 0, 9999) == null ? null : Math.round(num(l.kcal, 0, 9999)),
    minutes: num(l.minutes, 0, 1440) == null ? null : Math.round(num(l.minutes, 0, 1440)), value: num(l.value, 0, 20000), note: str_(l.note, 500) };
  if ((kind === 'meal' || kind === 'workout') && !row.title) throw new Error('What was it?');
  if ((kind === 'weight' || kind === 'water') && row.value == null) throw new Error('Type a number');
  if (l.id) await sb(env, 'health_logs?id=eq.' + Number(l.id), { method: 'PATCH', body: JSON.stringify(row), prefer: 'return=minimal' });
  else await sb(env, 'health_logs', { method: 'POST', body: JSON.stringify([row]), prefer: 'return=minimal' }).catch(housesMissing_);
  return getHealthData(env, range || []);
}
async function deleteHealthLog(env, [id, range]) { await sb(env, 'health_logs?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' }); return getHealthData(env, range || []); }
async function saveHealthProfile(env, [p]) {
  const cur = await healthProfile_(env), n = (v) => (v === '' || v == null || isNaN(Number(v)) ? null : Number(v));
  const value = Object.assign({}, cur, {
    height: n(p && p.height), weight: n(p && p.weight), goalWeight: n(p && p.goalWeight), kcalTarget: n(p && p.kcalTarget),
    goal: str_(p && p.goal, 300), notes: str_(p && p.notes, 600)
  });
  if (p && typeof p.plan === 'string') { value.plan = p.plan.slice(0, 30000); value.planAt = p.plan.trim() ? vnNow_().date : ''; }
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'health', value }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return value;
}

/* ---- Law: new documents (vbpl.vn, baochinhphu.vn, thuvienphapluat.vn) ---- */
function lawOut_(r) { return { id: r.id, number: r.number, title: r.title, kind: r.kind, issuer: r.issuer, issued: r.issued, effective: r.effective, status: r.status, field: r.field, url: r.url, summary: r.summary, read: r.is_read, starred: r.starred, foundAt: r.found_at }; }
async function getLawDocs(env) {
  try {
    const rows = await sb(env, 'law_docs?select=*&order=found_at.desc,issued.desc.nullslast&limit=1000');
    const rows2 = await sb(env, 'app_settings?key=eq.law&select=value').catch(() => []);
    return { docs: rows.map(lawOut_), lastCheck: (rows2[0] && rows2[0].value && rows2[0].value.lastCheck) || null };
  } catch (e) { housesMissing_(e); }
}
async function setLawDoc(env, [id, patch]) {
  const body = {};
  if (patch && typeof patch.read === 'boolean') body.is_read = patch.read;
  if (patch && typeof patch.starred === 'boolean') body.starred = patch.starred;
  if (Object.keys(body).length) await sb(env, 'law_docs?id=eq.' + Number(id), { method: 'PATCH', body: JSON.stringify(body), prefer: 'return=minimal' });
  return { ok: true };
}
async function deleteLawDoc(env, [id]) { await sb(env, 'law_docs?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' }); return getLawDocs(env); }

/* ---- Library: documents handed over as a `namuwu-library/1` file (supabase/library.sql), searched
   with Postgres full-text — no AI, no cost. Text is kept as written; `plain` is the same text in lower case
   without Vietnamese accents, character for character, so a match in `plain` points at the same spot in `body`. ---- */
const noAccent_ = (c) => c.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
function plainOf_(text) { return Array.from(text).map((c) => { const n = noAccent_(c); return n.length === 1 ? n : (n[0] || ' '); }).join(''); }
function libMissing_(e) {
  if (/library_|does not exist|42P01/.test(String(e && e.message))) throw new Error('Run supabase/library.sql in Supabase first');
  throw e;
}
// long sections are cut at paragraph breaks into pieces of about 1500 characters (same heading)
function libPieces_(heading, text) {
  const out = [], paras = text.split(/\n{2,}|\n(?=\s*[-•*]|\s*\d+[.)])/);
  let cur = '';
  paras.forEach((p) => {
    if (cur && (cur.length + p.length) > 1500) { out.push(cur.trim()); cur = ''; }
    while (p.length > 2400) { out.push(p.slice(0, 1500).trim()); p = p.slice(1500); }
    cur += (cur ? '\n\n' : '') + p;
  });
  if (cur.trim()) out.push(cur.trim());
  return out.map((body) => ({ heading, body }));
}
async function getLibrary(env) {
  const docs = await sb(env, 'library_docs?select=id,title,kind,source,meta,sections,created_at&order=created_at.desc&limit=500').catch(libMissing_);
  return { docs };
}
async function importLibrary(env, [file]) {
  if (!file || file.format !== 'namuwu-library/1' || !Array.isArray(file.docs)) throw new Error('This is not a namuwu-library/1 file');
  let added = 0, sections = 0, laws = 0;
  for (const d of file.docs.slice(0, 200)) {
    const title = str_(d && d.title, 300).trim(); if (!title) continue;
    const kind = ['law', 'study', 'note', 'other'].includes(d.kind) ? d.kind : 'other';
    const meta = d.meta && typeof d.meta === 'object' ? d.meta : {};
    const secs = (Array.isArray(d.sections) ? d.sections : [{ heading: '', text: String(d.text || '') }])
      .flatMap((x) => libPieces_(str_(x && x.heading, 300).trim(), String((x && x.text) || '').normalize('NFC').trim()))
      .filter((x) => x.body);
    if (!secs.length) continue;
    // the same document again replaces the old copy
    await sb(env, 'library_docs?title=eq.' + encodeURIComponent(title), { method: 'DELETE', prefer: 'return=minimal' }).catch(libMissing_);
    const [doc] = await sb(env, 'library_docs', { method: 'POST', body: JSON.stringify([{ title, kind, source: str_(d.source, 300), meta, sections: secs.length }]) });
    for (let i = 0; i < secs.length; i += 200) {
      const rows = secs.slice(i, i + 200).map((x, k) => ({ doc_id: doc.id, idx: i + k, heading: x.heading, body: x.body, plain: plainOf_(x.heading + '\n' + x.body) }));
      await sb(env, 'library_chunks', { method: 'POST', body: JSON.stringify(rows), prefer: 'return=minimal' });
    }
    added++; sections += secs.length;
    // a law also goes on the Law house's list (number, dates, status)
    if (kind === 'law' && meta.number) {
      await sb(env, 'law_docs?on_conflict=number', { method: 'POST', prefer: 'resolution=merge-duplicates,return=minimal', body: JSON.stringify([{
        number: str_(meta.number, 60), title, kind: str_(meta.type, 60), issuer: str_(meta.issuer, 200), issued: day_(meta.issued), effective: day_(meta.effective),
        status: str_(meta.status, 60), field: ['health', 'law'].includes(meta.field) ? meta.field : 'other', url: str_(meta.url, 500), summary: str_(meta.summary, 2000) }]) }).then(() => laws++).catch(() => {});
    }
  }
  return Object.assign(await getLibrary(env), { added, sections, laws });
}
async function deleteLibraryDoc(env, [id]) { await sb(env, 'library_docs?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' }); return getLibrary(env); }
async function getLibraryDoc(env, [id]) {
  const [doc] = await sb(env, 'library_docs?id=eq.' + Number(id) + '&select=id,title,kind,source,meta');
  if (!doc) throw new Error('Not found');
  doc.sections = await sb(env, 'library_chunks?doc_id=eq.' + doc.id + '&select=idx,heading,body&order=idx.asc&limit=5000');
  return doc;
}
// search: every word must be there (accents and capitals don't matter); best matches first, with a snippet
async function searchLibrary(env, [q, kind]) {
  const plain = plainOf_(String(q || '').normalize('NFC')).replace(/[^a-z0-9/.\-\s]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 200);
  if (!plain) return { results: [] };
  const terms = Array.from(new Set(plain.split(' ').filter(Boolean)));
  const sel = 'select=id,doc_id,idx,heading,body,plain,library_docs!inner(title,kind)' + (['law', 'study', 'note', 'other'].includes(kind) ? '&library_docs.kind=eq.' + kind : '');
  let rows = await sb(env, 'library_chunks?' + sel + '&tsv=wfts(simple).' + encodeURIComponent(plain) + '&limit=200').catch(libMissing_);
  if (!rows.length) {                                   // numbers like 15/2023/QH15, or part of a word: plain text match
    const like = terms.map((t) => 'plain=ilike.*' + encodeURIComponent(t.replace(/[*%,()]/g, '')) + '*').join('&');
    rows = await sb(env, 'library_chunks?' + sel + '&' + like + '&limit=200').catch(libMissing_);
  }
  const scored = rows.map((r) => {
    let score = r.plain.includes(plain) ? 10 : 0, first = -1;
    terms.forEach((t) => { let i = r.plain.indexOf(t), n = 0; if (i >= 0 && (first < 0 || i < first)) first = i; while (i >= 0 && n < 20) { n++; i = r.plain.indexOf(t, i + t.length); } score += n; });
    if (plainOf_(r.heading).includes(plain)) score += 5;
    // the snippet: about 300 characters around the first match (the text starts with "heading\n")
    const text = r.heading + '\n' + r.body, at = Math.max(0, first), a = Math.max(0, at - 120), b = Math.min(text.length, at + 220);
    return { id: r.id, docId: r.doc_id, idx: r.idx, title: r.library_docs.title, kind: r.library_docs.kind, heading: r.heading, score,
      snippet: (a > 0 ? '…' : '') + text.slice(a, b).replace(/\s+/g, ' ').trim() + (b < text.length ? '…' : ''), body: r.body };
  }).sort((x, y) => y.score - x.score).slice(0, 25);
  return { results: scored, terms };
}

/* ---- Love: food they "order" — shows on the table at their meals (up to 4 dishes) ---- */
async function saveLoveFood(env, [items]) {
  const clean = (Array.isArray(items) ? items : []).slice(0, 4).map((it) => ({
    name: String((it && it.name) || '').trim().slice(0, 60),
    key: /^[a-z0-9-]{2,30}$/.test(String((it && it.key) || '')) ? String(it.key) : '',      // a dish from the menu book (pixel art)
    img: loveFoodImgOk_(String((it && it.img) || '')) ? String(it.img) : ''
  })).filter((it) => it.name);
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'love_food', value: { items: clean } }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return { food: clean };
}
function loveFoodImgOk_(u) {
  return /^https:\/\/upload\.wikimedia\.org\/[^\s"'<>]+$/.test(u) || (/^data:image\/svg\+xml;base64,[A-Za-z0-9+\/=]+$/.test(u) && u.length < 60000);
}
async function saveLoveMemory(env, [m]) {
  m = m || {};
  if (!/^\d{4}-\d{2}-\d{2}$/.test(m.day || '')) throw new Error('Pick a date');
  const row = {
    day: m.day, province: String(m.province || '').trim().slice(0, 80), place: String(m.place || '').trim().slice(0, 200),
    note: String(m.note || '').slice(0, 5000),
    tags: (Array.isArray(m.tags) ? m.tags : []).map((t) => String(t).trim().slice(0, 30)).filter(Boolean).slice(0, 12)
  };
  let id = Number(m.id) || 0;
  if (id) await sb(env, 'love_memories?id=eq.' + id, { method: 'PATCH', body: JSON.stringify(row), prefer: 'return=minimal' });
  else id = (await sb(env, 'love_memories', { method: 'POST', body: JSON.stringify([row]) }))[0].id;
  return { id };
}
function loveFileName_(day, province) {
  const clean = String(province || '').replace(/[\\/:*?"<>|#%]+/g, ' ').replace(/\s+/g, ' ').trim();
  return day.slice(2, 4) + day.slice(5, 7) + day.slice(8, 10) + (clean ? '_' + clean : '');
}
const LOVE_EXT_ = { 'image/jpeg': 'jpg', 'image/jpg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/heic': 'heic', 'image/heif': 'heif', 'image/gif': 'gif' };
async function uploadLovePhoto(env, [memoryId, file]) {
  file = file || {};
  const mime = String(file.type || 'image/jpeg').toLowerCase();
  if (!/^image\//.test(mime)) throw new Error('Only photos can go in the album');
  const data = String(file.data || '');
  if (data.length * 0.75 > LOVE_MAX_BYTES_) throw new Error('Photo is over 25MB');
  const mem = await sb(env, 'love_memories?id=eq.' + Number(memoryId) + '&select=id,day,province');
  if (!mem.length) throw new Error('Memory not found');
  const name = await loveFreeName_(env, mem[0], mime, file.name);
  const bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
  const token = await driveToken_(env);
  const up = await drive.uploadFile(token, loveFolder_(await googleSaved_(env)), name, mime, bytes);
  const row = (await sb(env, 'love_photos', { method: 'POST', body: JSON.stringify([{ memory_id: mem[0].id, drive_id: up.id, name, mime }]) }))[0];
  return { id: row.id, driveId: up.id, name };
}
// same day + place more than once → _2, _3 …
async function loveFreeName_(env, mem, mime, original) {
  const base = loveFileName_(mem.day, mem.province);
  const same = await sb(env, 'love_photos?name=like.' + encodeURIComponent(base.replace(/[%_]/g, (c) => '\\' + c)) + '*&select=name');
  const taken = new Set(same.map((r) => r.name.replace(/\.[^.]+$/, '')));
  let name = base, n = 1;
  while (taken.has(name)) name = base + '_' + (++n);
  return name + '.' + (LOVE_EXT_[mime] || (String(original || '').split('.').pop() || 'jpg').toLowerCase());
}
// Fast path: the browser sends the ORIGINAL photo straight to Google Drive.
// 1) startLovePhotoUpload → keeps the file name + gives a one-time upload link
// 2) the browser PUTs the file to that link
// 3) finishLovePhotoUpload → checks the file landed in the album folder, saves it
async function startLovePhotoUpload(env, [memoryId, file]) {
  file = file || {};
  const mime = String(file.type || 'image/jpeg').toLowerCase();
  if (!/^image\//.test(mime)) throw new Error('Only photos can go in the album');
  const mem = await sb(env, 'love_memories?id=eq.' + Number(memoryId) + '&select=id,day,province');
  if (!mem.length) throw new Error('Memory not found');
  const name = await loveFreeName_(env, mem[0], mime, file.name);
  const pendingId = 'pending:' + crypto.randomUUID();
  const row = (await sb(env, 'love_photos', { method: 'POST', body: JSON.stringify([{ memory_id: mem[0].id, drive_id: pendingId, name, mime }]) }))[0];
  try {
    const url = await drive.startUpload(await driveToken_(env), loveFolder_(await googleSaved_(env)), name, mime, Number(file.size) || 0, env.__origin);
    return { photoId: row.id, uploadUrl: url, name };
  } catch (e) {
    await sb(env, 'love_photos?id=eq.' + row.id, { method: 'DELETE', prefer: 'return=minimal' });
    throw e;
  }
}
async function finishLovePhotoUpload(env, [photoId, driveId]) {
  const rows = await sb(env, 'love_photos?id=eq.' + Number(photoId) + '&select=id,drive_id,name');
  if (!rows.length || rows[0].drive_id.indexOf('pending:') !== 0) throw new Error('Upload not found');
  const g = await googleSaved_(env);
  const info = await drive.fileInfo(await driveToken_(env), String(driveId || ''));
  if (!info || info.trashed || !(info.parents || []).includes(loveFolder_(g))) throw new Error('That file is not in the album folder');
  await sb(env, 'love_photos?id=eq.' + Number(photoId), { method: 'PATCH', body: JSON.stringify({ drive_id: info.id }), prefer: 'return=minimal' });
  return { id: Number(photoId), driveId: info.id, name: rows[0].name };
}
// The picture in the frame on the Love room's wall: one photo, also kept in Drive.
async function startLoveFrameUpload(env, [file]) {
  file = file || {};
  const mime = String(file.type || 'image/jpeg').toLowerCase();
  if (!/^image\//.test(mime)) throw new Error('Only photos can go in the frame');
  const d = vnNow_().date;
  const name = 'frame_' + d.slice(2, 4) + d.slice(5, 7) + d.slice(8, 10) + '.' + (LOVE_EXT_[mime] || 'jpg');
  const url = await drive.startUpload(await driveToken_(env), loveFolder_(await googleSaved_(env)), name, mime, Number(file.size) || 0, env.__origin);
  return { uploadUrl: url, name };
}
async function setLoveFrame(env, [driveId]) {
  const g = await googleSaved_(env);
  const info = await drive.fileInfo(await driveToken_(env), String(driveId || ''));
  if (!info || info.trashed || !(info.parents || []).includes(loveFolder_(g))) throw new Error('That file is not in the album folder');
  g.loveFrame = info.id;
  await sb(env, 'app_settings', { method: 'POST', body: JSON.stringify([{ key: 'google', value: g }]), prefer: 'resolution=merge-duplicates,return=minimal' });
  return { driveId: info.id };
}
async function cancelLovePhotoUpload(env, [photoId]) {
  await sb(env, 'love_photos?id=eq.' + Number(photoId) + '&drive_id=like.pending:*', { method: 'DELETE', prefer: 'return=minimal' });
  return { ok: true };
}
async function deleteLovePhoto(env, [id]) {
  const rows = await sb(env, 'love_photos?id=eq.' + Number(id) + '&select=drive_id');
  if (rows.length) {
    try { await drive.trashFile(await driveToken_(env), rows[0].drive_id); } catch (e) { /* already gone in Drive */ }
    await sb(env, 'love_photos?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' });
  }
  return { ok: true };
}
// Deleting a memory moves its photos to the Drive bin (recoverable for 30 days there).
async function deleteLoveMemory(env, [id]) {
  const rows = await sb(env, 'love_photos?memory_id=eq.' + Number(id) + '&select=drive_id');
  if (rows.length) {
    const token = await driveToken_(env);
    for (const r of rows) { try { await drive.trashFile(token, r.drive_id); } catch (e) { /* ignore */ } }
  }
  await sb(env, 'love_memories?id=eq.' + Number(id), { method: 'DELETE', prefer: 'return=minimal' });
  return { ok: true };
}
// <img src="/api?photo=<driveId>&s=600&t=<personal token>"> — only with a valid Personal token
async function serveLovePhoto_(env, url) {
  if (!(await personalVerifyToken_(env, url.searchParams.get('t')))) return new Response('Unauthorized', { status: 401 });
  const id = url.searchParams.get('photo') || '';
  let known = await sb(env, 'love_photos?drive_id=eq.' + encodeURIComponent(id) + '&select=mime');
  if (!known.length && id && id === ((await googleSaved_(env)).loveFrame || '')) known = [{ mime: 'image/jpeg' }];   // the wall frame
  if (!known.length) return new Response('Not found', { status: 404 });
  const size = Math.max(0, Math.min(2000, Number(url.searchParams.get('s')) || 0));
  const res = await drive.fetchImage(await driveToken_(env), id, size);
  return new Response(res.body, { headers: {
    'Content-Type': res.headers.get('Content-Type') || known[0].mime || 'image/jpeg',
    'Cache-Control': 'private, max-age=86400'
  } });
}

// Town Hall chat — the agent works through the same functions the app uses.

async function handle(env, action, args, token) {
  const fn = ACTIONS[action];
  if (typeof fn !== 'function') {
    throw new Error('Action không hợp lệ: ' + action);
  }
  // Account + Expense chỉ dùng được khi kèm token Personal hợp lệ.
  if (isPersonalAction_(action) && !(await personalVerifyToken_(env, token))) {
    throw new Error('Unauthorized');
  }
  // Các hàm không cần tham số (getAccountsData, getSymbolsData, ...) vẫn nhận
  // được mảng args rỗng [] một cách an toàn vì chỉ những hàm cần mới destructure nó.
  const result = fn.length > 1 ? await fn(env, args || []) : await fn(env);
  return result === undefined ? null : result;
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const env = Object.assign({}, context.env, { __origin: new URL(context.request.url).origin });
    const data = await handle(env, body.action, body.args, body.token);
    return new Response(JSON.stringify({ ok: true, data }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message || String(err) }), {
      status: 200, // vẫn trả 200 để gas-bridge.js (đọc payload.ok) xử lý lỗi đúng như cũ
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Hỗ trợ test nhanh qua trình duyệt: /api?action=getSymbolsData&args=[]
export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const env = Object.assign({}, context.env, { __origin: url.origin });
    if (url.searchParams.get('photo')) return await serveLovePhoto_(env, url);              // Love album images
    if (url.searchParams.get('code') && url.searchParams.get('state')) return await googleCallback_(env, url);   // back from Google
    if (url.searchParams.get('state') && url.searchParams.get('error')) return Response.redirect(url.origin + '/personal?drive=denied', 302);
    const action = url.searchParams.get('action');
    // GET is only for quick public reads; anything Personal or that writes must use POST.
    if (!/^get/.test(action || '') || isPersonalAction_(action)) throw new Error('Use POST for this action');
    const args = url.searchParams.get('args') ? JSON.parse(url.searchParams.get('args')) : [];
    const data = await handle(context.env, action, args, null);
    return new Response(JSON.stringify({ ok: true, data }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message || String(err) }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
