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
  if (action === 'saveHomeProfile') return true;        // anyone sees the Home photo/name, only you change it
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
  return { date: today, total: total, spent: todayD, allowance: allowance };
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
  getExpenseTodayTotal
};

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
    const data = await handle(context.env, body.action, body.args, body.token);
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
