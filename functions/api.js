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
// tạm fallback 'DS_accounts' nếu chưa đổi tên). Đăng nhập đúng → server cấp TOKEN có
// chữ ký HMAC (hạn 12 giờ, cần biến môi trường PERSONAL_SECRET). Mọi action của Account
// và Expense đều bị từ chối nếu không kèm token hợp lệ → gọi thẳng /api cũng không lấy được.
// Sai 5 lần liên tiếp → khoá đăng nhập 15 phút (đếm ở bảng personal_auth).

const PERSONAL_TOKEN_TTL_MS = 12 * 3600 * 1000;
const PERSONAL_MAX_FAILS = 5;
const PERSONAL_LOCK_MS = 15 * 60 * 1000;
const ACCOUNT_ACTIONS_ = ['getAccountsData', 'addAccountRow', 'updateAccountRow', 'saveAccountType'];

function isPersonalAction_(action) {
  if (ACCOUNT_ACTIONS_.indexOf(action) !== -1) return true;
  // Mọi action Expense đều cần token, trừ ô tóm tắt "Today's spending" ở Home (giữ công khai theo yêu cầu).
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

  let pr = await sb(env, 'pass?menu=eq.DS_personal&select=pass');
  if (!pr.length) pr = await sb(env, 'pass?menu=eq.DS_accounts&select=pass');
  const good = pr.length && String(pr[0].pass || '').trim() === String(code || '').trim();

  if (good) {
    await sb(env, 'personal_auth?id=eq.1', { method: 'PATCH', body: JSON.stringify({ fails: 0, locked_until: null }), prefer: 'return=minimal' });
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
function expenseNextPeriodStart_(period) {
  var y = Number(period.slice(0, 4)), m = Number(period.slice(5, 7));
  m += 1; if (m > 12) { m = 1; y += 1; }
  return y + '-' + String(m).padStart(2, '0') + '-01';
}

// Budget đánh dấu "Repeat every month": khi mở ĐÚNG tháng hiện tại mà tháng này
// chưa có budget, tự copy từ tháng gần nhất trước đó — NHƯNG chỉ khi bản ghi
// gần nhất đó đang bật repeat (tắt repeat ở tháng nào thì dừng từ đó).
async function expenseMaterializeBudgets_(env, period) {
  if (period !== expenseCurrentPeriod_()) return;

  // Budget tổng
  var cur = await sb(env, 'expense_budget?period=eq.' + period + '&select=period');
  if (!cur.length) {
    var prev = await sb(env, 'expense_budget?period=lt.' + period + '&select=period,amount,repeat_monthly&order=period.desc&limit=1');
    if (prev.length && prev[0].repeat_monthly === true) {
      await sb(env, 'expense_budget', {
        method: 'POST',
        body: JSON.stringify([{ period: period, amount: prev[0].amount, repeat_monthly: true }]),
        headers: { Prefer: 'resolution=ignore-duplicates,return=minimal' }
      });
    }
  }

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

// Tiền thừa mang sang: thu − chi − tiền nạp tiết kiệm (có trừ) của TẤT CẢ các tháng trước tháng đang xem.
// Tính động → sửa/xoá khoản ở tháng cũ thì các tháng sau tự cập nhật. Âm thì mang số âm sang.
async function expenseCarryIn_(env, period) {
  var start = period + '-01';
  var inc = await expenseSumBefore_(env, 'expense_income_entries', 'entry_date', start, '');
  var exp = await expenseSumBefore_(env, 'expense_entries', 'entry_date', start, '');
  var dep = await expenseSumBefore_(env, 'expense_savings_log', 'entry_date', start, '&kind=eq.deposit&deduct=eq.true');
  return inc - exp - dep;
}

async function expenseGetSavings_(env, period) {
  var goalRows = await sb(env, 'expense_savings?id=eq.1&select=name,target');
  var goal = goalRows.length ? goalRows[0] : { name: 'Billionaire ✮⋆˙', target: 0 };
  var logs = await sb(env, 'expense_savings_log?select=id,kind,amount,note,entry_date,deduct&order=entry_date.desc,id.desc');
  var balance = 0, monthDeposits = 0;
  var periodStart = period + '-01', nextStart = expenseNextPeriodStart_(period);
  logs.forEach(function (l) {
    var a = Number(l.amount);
    balance += l.kind === 'deposit' ? a : -a;
    if (l.kind === 'deposit' && l.deduct !== false && l.entry_date >= periodStart && l.entry_date < nextStart) monthDeposits += a;
  });
  return {
    name: goal.name,
    target: Number(goal.target) || 0,
    balance: balance,                 // tiết kiệm KHÔNG reset theo tháng
    monthDeposits: monthDeposits,     // phần nạp CÓ TRỪ trong tháng đang xem → trừ vào Remaining
    log: logs.slice(0, 100).map(function (l) {
      return { id: l.id, kind: l.kind, amount: Number(l.amount), note: l.note || '', date: l.entry_date, deduct: l.deduct !== false };
    })
  };
}

// Gộp toàn bộ dữ liệu 1 tháng cần cho Overview/Calendar/Stats/Budget/History
// vào 1 lần gọi — frontend tự lọc/tổng hợp từ đây, backend chỉ trả data thô.
async function getExpenseData(env, [period]) {
  period = period || expenseCurrentPeriod_();
  await expenseMaterializeBudgets_(env, period);

  var periodStart = period + '-01';
  var nextPeriod = expenseNextPeriodStart_(period);

  var categories = await sb(env, 'expense_categories?select=id,name,color&order=name.asc');
  var entries = await sb(env, 'expense_entries?entry_date=gte.' + periodStart + '&entry_date=lt.' + nextPeriod + '&select=id,amount,category_id,note,entry_date&order=entry_date.desc,id.desc');
  var incomeRows = await sb(env, 'expense_income_entries?entry_date=gte.' + periodStart + '&entry_date=lt.' + nextPeriod + '&select=id,amount,source,entry_date&order=entry_date.desc,id.desc');
  var budgetRows = await sb(env, 'expense_budget?period=eq.' + period + '&select=amount,repeat_monthly');
  var catBudgetRows = await sb(env, 'expense_category_budget?period=eq.' + period + '&select=category_id,amount,repeat_monthly');
  var savings = await expenseGetSavings_(env, period);
  var carryIn = await expenseCarryIn_(env, period);

  var incomeEntries = incomeRows.map(function (r) {
    return { id: r.id, amount: Number(r.amount), source: r.source || '', date: r.entry_date };
  });
  return {
    period: period,
    currentPeriod: expenseCurrentPeriod_(),
    categories: categories.map(function (c) { return { id: c.id, name: c.name, color: c.color }; }),
    entries: entries.map(function (e) {
      return { id: e.id, amount: Number(e.amount), categoryId: e.category_id, note: e.note || '', date: e.entry_date };
    }),
    incomeEntries: incomeEntries,
    income: incomeEntries.reduce(function (s, r) { return s + r.amount; }, 0),
    carryIn: carryIn,
    budgetOverall: budgetRows.length ? Number(budgetRows[0].amount) : 0,
    budgetOverallRepeat: budgetRows.length ? budgetRows[0].repeat_monthly === true : false,
    categoryBudgets: catBudgetRows.map(function (r) { return { categoryId: r.category_id, amount: Number(r.amount), repeat: r.repeat_monthly === true }; }),
    savings: savings
  };
}

/* ---- Expenses (không còn lặp theo tháng — chỉ budget mới lặp) ---- */

async function addExpenseEntry(env, [amount, categoryId, note, date]) {
  await sb(env, 'expense_entries', {
    method: 'POST',
    body: JSON.stringify([{ amount: amount, category_id: categoryId, note: note || '', entry_date: date, repeat_monthly: false, recurring_key: null }])
  });
  return getExpenseData(env, [String(date).slice(0, 7)]);
}

async function updateExpenseEntry(env, [id, amount, categoryId, note, date, period]) {
  await sb(env, 'expense_entries?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify({ amount: amount, category_id: categoryId, note: note || '', entry_date: date, repeat_monthly: false })
  });
  return getExpenseData(env, [period]);
}

async function deleteExpenseEntry(env, [id, period]) {
  await sb(env, 'expense_entries?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
  return getExpenseData(env, [period]);
}

/* ---- Income: từng khoản có số tiền + nguồn + ngày ---- */

async function addExpenseIncomeEntry(env, [amount, source, date]) {
  await sb(env, 'expense_income_entries', {
    method: 'POST',
    body: JSON.stringify([{ amount: amount, source: source || '', entry_date: date }]),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [String(date).slice(0, 7)]);
}

async function updateExpenseIncomeEntry(env, [id, amount, source, date, period]) {
  await sb(env, 'expense_income_entries?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify({ amount: amount, source: source || '', entry_date: date }),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

async function deleteExpenseIncomeEntry(env, [id, period]) {
  await sb(env, 'expense_income_entries?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
  return getExpenseData(env, [period]);
}

/* ---- Budget (có cờ repeat) ---- */

async function setExpenseBudgetOverall(env, [period, amount, repeat]) {
  await sb(env, 'expense_budget', {
    method: 'POST',
    body: JSON.stringify([{ period: period, amount: amount, repeat_monthly: !!repeat }]),
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }
  });
  return getExpenseData(env, [period]);
}

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
async function addExpenseSavingsLog(env, [kind, amount, note, date, period, deduct]) {
  if (kind !== 'deposit' && kind !== 'spend') throw new Error('Loại giao dịch không hợp lệ');
  if (kind === 'spend') {
    var s = await expenseGetSavings_(env, String(date).slice(0, 7));
    if (Number(amount) > s.balance) throw new Error('Not enough savings (balance ' + s.balance + ')');
  }
  await sb(env, 'expense_savings_log', {
    method: 'POST',
    body: JSON.stringify([{ kind: kind, amount: amount, note: note || '', entry_date: date, deduct: kind === 'deposit' ? deduct !== false : false }]),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

async function updateExpenseSavingsLog(env, [id, amount, note, date, deduct, period]) {
  var rows = await sb(env, 'expense_savings_log?id=eq.' + id + '&select=kind');
  if (!rows.length) throw new Error('Entry not found');
  await sb(env, 'expense_savings_log?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify({ amount: amount, note: note || '', entry_date: date, deduct: rows[0].kind === 'deposit' ? deduct !== false : false }),
    prefer: 'return=minimal'
  });
  return getExpenseData(env, [period]);
}

async function deleteExpenseSavingsLog(env, [id, period]) {
  await sb(env, 'expense_savings_log?id=eq.' + id, { method: 'DELETE', prefer: 'return=minimal' });
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
async function getExpenseTodayTotal(env) {
  var today = expenseTodayStr_();
  var rows = await sb(env, 'expense_entries?entry_date=eq.' + today + '&select=amount');
  var sum = rows.reduce(function (s, r) { return s + Number(r.amount); }, 0);
  return { date: today, total: sum };
}

/* ============================================================
 *  API ROUTER
 * ============================================================ */

const ACTIONS = {
  personalLogin,
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
  setExpenseBudgetOverall,
  setExpenseCategoryBudget,
  deleteExpenseCategoryBudget,
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
    const args = url.searchParams.get('args') ? JSON.parse(url.searchParams.get('args')) : [];
    const data = await handle(context.env, action, args, url.searchParams.get('token'));
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
