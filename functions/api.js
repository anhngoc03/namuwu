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

/* ---------------------------- AUTH ---------------------------- */

async function checkPassword(env, [menu, pass]) {
  const rows = await sb(env, `pass?menu=eq.${encodeURIComponent(menu)}&select=pass`);
  if (!rows || !rows.length) return false;
  return String(rows[0].pass || '').trim() === String(pass || '').trim();
}

/* -------------------------- ACCOUNTS --------------------------- */

async function getAccountsData(env) {
  const rows = await sb(env, 'accounts?select=id,type,of,account,password,note&order=id.asc');
  const result = {};
  rows.forEach((r) => {
    const type = String(r.type || '').trim();
    if (!type) return;
    if (!result[type]) result[type] = [];
    result[type].push({
      row: r.id,
      of: r.of || '',
      account: r.account || '',
      password: r.password || '',
      note: r.note || ''
    });
  });
  return result;
}

async function addAccountRow(env, [type, of, account, password, note]) {
  await sb(env, 'accounts', {
    method: 'POST',
    body: JSON.stringify([{ type, of, account, password, note }])
  });
  return getAccountsData(env);
}

async function updateAccountRow(env, [rowNumber, type, of, account, password, note]) {
  await sb(env, `accounts?id=eq.${rowNumber}`, {
    method: 'PATCH',
    body: JSON.stringify({ type, of, account, password, note })
  });
  return getAccountsData(env);
}

async function saveAccountType(env, [oldType, newType, rows]) {
  await sb(env, `accounts?type=eq.${encodeURIComponent(oldType)}`, { method: 'DELETE' });
  if (rows && rows.length) {
    const payload = rows.map((r) => ({
      type: newType,
      of: r.of || '',
      account: r.account || '',
      password: r.password || '',
      note: r.note || ''
    }));
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

/* --------------------------- SAVING ------------------------------ */

async function getSavingData(env) {
  const rows = await sb(env, 'saving?select=day&saved=eq.true&order=day.asc');
  return rows.map((r) => r.day);
}

async function saveSavingDays(env, [days]) {
  if (days && days.length) {
    const list = days.join(',');
    await sb(env, `saving?day=in.(${list})`, {
      method: 'PATCH',
      body: JSON.stringify({ saved: true }),
      prefer: 'return=minimal'
    });
  }
  return getSavingData(env);
}

async function resetSaving(env) {
  await sb(env, 'saving?day=gt.0', {
    method: 'PATCH',
    body: JSON.stringify({ saved: false }),
    prefer: 'return=minimal'
  });
  return getSavingData(env);
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

/* ------------------------------ ICD LOOKUP -------------------------------- */

async function getIcdData(env) {
  const rows = await sb(env, 'icd?select=id,icd,name,note&order=id.asc');
  return rows.map((r) => ({ row: r.id, icd: r.icd, name: r.name, note: r.note }));
}

async function addIcdRow(env, [icd, name, note]) {
  await sb(env, 'icd', { method: 'POST', body: JSON.stringify([{ icd, name, note }]) });
  return getIcdData(env);
}

async function updateIcdRow(env, [rowNumber, icd, name, note]) {
  await sb(env, `icd?id=eq.${rowNumber}`, { method: 'PATCH', body: JSON.stringify({ icd, name, note }) });
  return getIcdData(env);
}

/* --------------------------- EATING TRACKER ------------------------------ */

async function getEatingData(env) {
  const rows = await sb(env, 'eating?select=day,yakult,bubble_tea,eating_out,sum&order=day.asc');
  return rows.map((r) => ({
    day: r.day,
    yakultMarked: r.yakult !== null,
    yakultYes: r.yakult === true,
    bubbleTea: Number(r.bubble_tea) || 0,
    eatingOut: Number(r.eating_out) || 0,
    sum: Number(r.sum) || 0
  }));
}

async function saveEatingDay(env, [day, yakultYes, bubbleTea, eatingOut]) {
  const b = Number(bubbleTea) || 0;
  const e = Number(eatingOut) || 0;
  await sb(env, `eating?day=eq.${Number(day)}`, {
    method: 'PATCH',
    body: JSON.stringify({ yakult: !!yakultYes, bubble_tea: b, eating_out: e, sum: b + e })
  });
  return getEatingData(env);
}

async function resetEatingData(env) {
  await sb(env, 'eating?day=gt.0', {
    method: 'PATCH',
    body: JSON.stringify({ yakult: null, bubble_tea: 0, eating_out: 0, sum: 0 }),
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
// Bảng qr_codes: id | name | link | note. Không cần cột ảnh — QR được tự
// sinh từ "link" ngay trên trình duyệt (client-side), không cần Storage.

async function getQrData(env) {
  const rows = await sb(env, 'qr_codes?select=id,name,link,note&order=name.asc');
  return rows.map((r) => ({ row: r.id, name: r.name, link: r.link, note: r.note || '' }));
}

async function addQrRow(env, [name, link, note]) {
  await sb(env, 'qr_codes', { method: 'POST', body: JSON.stringify([{ name, link, note }]) });
  return getQrData(env);
}

async function updateQrRow(env, [rowNumber, name, link, note]) {
  await sb(env, `qr_codes?id=eq.${rowNumber}`, { method: 'PATCH', body: JSON.stringify({ name, link, note }) });
  return getQrData(env);
}

async function deleteQrRow(env, [rowNumber]) {
  await sb(env, `qr_codes?id=eq.${rowNumber}`, { method: 'DELETE', prefer: 'return=minimal' });
  return getQrData(env);
}

/* --------------------------- HOME TO DO LIST ------------------------------ */

async function getHomeData(env) {
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
    body: JSON.stringify({ check: !!checked }),
    prefer: 'return=minimal'
  });
  return getHomeData(env);
}

async function resetHomeData(env) {
  await sb(env, 'home_todos?id=gt.0', { method: 'DELETE', prefer: 'return=minimal' });
  return [];
}

/* ============================================================
 *  API ROUTER
 * ============================================================ */

const ACTIONS = {
  checkPassword,
  getAccountsData,
  addAccountRow,
  updateAccountRow,
  saveAccountType,
  getSymbolsData,
  addSymbol,
  addSymbolsBatch,
  getSavingData,
  saveSavingDays,
  resetSaving,
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
  getIcdData,
  addIcdRow,
  updateIcdRow,
  getEatingData,
  saveEatingDay,
  resetEatingData,
  getHomeData,
  addHomeItem,
  updateHomeItem,
  toggleHomeCheck,
  resetHomeData
};

async function handle(env, action, args) {
  const fn = ACTIONS[action];
  if (typeof fn !== 'function') {
    throw new Error('Action không hợp lệ: ' + action);
  }
  // Các hàm không cần tham số (getAccountsData, getSymbolsData, ...) vẫn nhận
  // được mảng args rỗng [] một cách an toàn vì chỉ những hàm cần mới destructure nó.
  const result = fn.length > 1 ? await fn(env, args || []) : await fn(env);
  return result === undefined ? null : result;
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const data = await handle(context.env, body.action, body.args);
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
    const args = url.searchParams.get('args') ? JSON.parse(url.searchParams.get('args')) : [];
    const data = await handle(context.env, action, args);
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
