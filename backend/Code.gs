/**
 * "Henlo human" — personal web app (BACKEND API ONLY)
 * Backed by Google Sheet: 13-sKgLhvfS2Vx0GO_o4d6xbu0SFX5HNlA4pE6orD0Og
 *
 * KIẾN TRÚC MỚI:
 *   - Frontend  : Cloudflare Pages (HTML/CSS/JS tĩnh, gọi API bằng fetch())
 *   - Backend   : Google Apps Script Web App (file này) — chỉ trả JSON, KHÔNG render HTML nữa
 *   - Database  : Google Sheets (không đổi)
 *
 * Toàn bộ hàm nghiệp vụ bên dưới (checkPassword, getAccountsData, ...) được giữ
 * NGUYÊN VẸN 100% so với bản gốc — chỉ thêm phần "API ROUTER" ở cuối file để
 * doGet/doPost nhận request từ frontend và trả về JSON thay vì render HTML.
 *
 * Sheets used:
 *  - Pass        : Menu | Pass          (rows: "General" -> main login pass, "DS_accounts" -> accounts pass)
 *  - DS_accounts : Types | Of | Account | Password | Note
 *  - Symbols     : small | animal | medium
 */

const SHEET_ID = '13-sKgLhvfS2Vx0GO_o4d6xbu0SFX5HNlA4pE6orD0Og';

// ⚠️ Đổi URL này thành đúng domain Cloudflare Pages của bạn sau khi deploy frontend.
// Dùng '*' trong lúc phát triển/test, nhưng nên giới hạn lại domain thật khi lên production.
const ALLOWED_ORIGIN = '*';

function getSS_() {
  return SpreadsheetApp.openById(SHEET_ID);
}

function getSheet_(name) {
  const sh = getSS_().getSheetByName(name);
  if (!sh) throw new Error('Không tìm thấy sheet: ' + name);
  return sh;
}

/* ---------------------------- AUTH ---------------------------- */

function checkPassword(menu, pass) {
  const sh = getSheet_('Pass');
  const data = sh.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    const rowMenu = String(data[i][0] || '').trim();
    if (rowMenu.toLowerCase() === String(menu).trim().toLowerCase()) {
      return String(data[i][1] || '').trim() === String(pass).trim();
    }
  }
  return false;
}

/* -------------------------- ACCOUNTS --------------------------- */

// Returns { TypeName: [ {row, of, account, password, note}, ... ], ... }
// "row" is the actual sheet row number, used to target that exact row when editing.
function getAccountsData() {
  const sh = getSheet_('DS_accounts');
  const lastRow = sh.getLastRow();
  if (lastRow < 2) return {};
  const data = sh.getRange(2, 1, lastRow - 1, 5).getValues();
  const result = {};
  data.forEach(function (r, i) {
    const type = String(r[0] || '').trim();
    if (!type) return;
    if (!result[type]) result[type] = [];
    result[type].push({
      row: i + 2,
      of: r[1] || '',
      account: r[2] || '',
      password: r[3] || '',
      note: r[4] || ''
    });
  });
  return result;
}

// Add one row to an existing (or new) type
function addAccountRow(type, of, account, password, note) {
  const sh = getSheet_('DS_accounts');
  sh.appendRow([type, of, account, password, note]);
  return getAccountsData();
}

// Overwrites one specific row (identified by its sheet row number). Returns the refreshed full data.
function updateAccountRow(rowNumber, type, of, account, password, note) {
  const sh = getSheet_('DS_accounts');
  sh.getRange(rowNumber, 1, 1, 5).setValues([[type, of, account, password, note]]);
  return getAccountsData();
}

// Replace all rows belonging to oldType with the provided rows (also handles rename to newType)
function saveAccountType(oldType, newType, rows) {
  const sh = getSheet_('DS_accounts');
  const data = sh.getDataRange().getValues();
  for (let i = data.length - 1; i >= 1; i--) {
    if (String(data[i][0] || '').trim() === String(oldType).trim()) {
      sh.deleteRow(i + 1);
    }
  }
  rows.forEach(function (r) {
    sh.appendRow([newType, r.of || '', r.account || '', r.password || '', r.note || '']);
  });
  return getAccountsData();
}

/* --------------------------- SYMBOLS ---------------------------- */

const SYMBOL_COLUMNS_ = ['small', 'animal', 'medium'];

// Returns a flat ordered list of {value, type} following small -> animal -> medium
function getSymbolsData() {
  const sh = getSheet_('Symbols');
  const lastRow = sh.getLastRow();
  const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0]
    .map(function (h) { return String(h).trim().toLowerCase(); });

  const list = [];
  SYMBOL_COLUMNS_.forEach(function (colName) {
    const colIdx = headers.indexOf(colName);
    if (colIdx === -1 || lastRow < 2) return;
    const values = sh.getRange(2, colIdx + 1, lastRow - 1, 1).getValues();
    values.forEach(function (v) {
      const val = v[0];
      if (val !== '' && val !== null && val !== undefined) {
        list.push({ value: String(val), type: colName });
      }
    });
  });
  return list;
}

// Appends value to the first empty cell in the given column (small/animal/medium)
function addSymbol(type, value) {
  const sh = getSheet_('Symbols');
  const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0]
    .map(function (h) { return String(h).trim().toLowerCase(); });
  const colIdx = headers.indexOf(String(type).trim().toLowerCase());
  if (colIdx === -1) throw new Error('Không tìm thấy cột: ' + type);

  const lastRow = sh.getLastRow();
  let targetRow = 2;
  if (lastRow >= 2) {
    const colValues = sh.getRange(2, colIdx + 1, lastRow - 1, 1).getValues();
    let lastFilled = 1; // header row
    for (let i = 0; i < colValues.length; i++) {
      if (colValues[i][0] !== '' && colValues[i][0] !== null) lastFilled = i + 2;
    }
    targetRow = lastFilled + 1;
  }
  sh.getRange(targetRow, colIdx + 1).setValue(value);
  return getSymbolsData();
}

// Batch add many symbols at once: items = [{type, value}, ...]
function addSymbolsBatch(items) {
  let last;
  items.forEach(function (it) {
    last = addSymbol(it.type, it.value);
  });
  return last || getSymbolsData();
}

/* --------------------------- SAVING ------------------------------ */
// Auto-managed sheet "Saving": Day | Saved  (366 rows, Day 1..366).
// Created automatically the first time this feature is used — no manual setup needed.

function ensureSavingSheet_() {
  const ss = getSS_();
  let sh = ss.getSheetByName('Saving');
  if (!sh) {
    sh = ss.insertSheet('Saving');
    sh.getRange(1, 1, 1, 2).setValues([['Day', 'Saved']]);
    const rows = [];
    for (let i = 1; i <= 366; i++) rows.push([i, false]);
    sh.getRange(2, 1, 366, 2).setValues(rows);
  } else if (sh.getLastRow() < 367) {
    // Sheet exists but is missing rows (e.g. freshly created by hand) — fill in the rest.
    const existing = Math.max(0, sh.getLastRow() - 1);
    const rows = [];
    for (let i = existing + 1; i <= 366; i++) rows.push([i, false]);
    if (rows.length) sh.getRange(existing + 2, 1, rows.length, 2).setValues(rows);
  }
  return sh;
}

// Returns the list of day-numbers currently marked as saved.
function getSavingData() {
  const sh = ensureSavingSheet_();
  const data = sh.getRange(2, 1, 366, 2).getValues();
  const saved = [];
  data.forEach(function (r) {
    if (r[1] === true) saved.push(r[0]);
  });
  return saved;
}

// Marks the given day-numbers as saved (adds to whatever is already saved). Returns the updated full saved list.
function saveSavingDays(days) {
  const sh = ensureSavingSheet_();
  const data = sh.getRange(2, 1, 366, 2).getValues();
  days.forEach(function (d) {
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] === d) { data[i][1] = true; break; }
    }
  });
  sh.getRange(2, 1, 366, 2).setValues(data);
  return getSavingData();
}

// Clears every saved day back to the default (unsaved) state.
function resetSaving() {
  const sh = ensureSavingSheet_();
  const data = sh.getRange(2, 1, 366, 2).getValues();
  data.forEach(function (r) { r[1] = false; });
  sh.getRange(2, 1, 366, 2).setValues(data);
  return getSavingData();
}

/* ------------------------ MEMORY MATCH LEADERBOARD ---------------------- */
// Sheet "Game": Name | Time (seconds) | Moves.
// One combined top-5 board — ranked by fastest time first, fewest moves as the tiebreaker.

function ensureGameSheet_() {
  const ss = getSS_();
  let sh = ss.getSheetByName('Game');
  if (!sh) sh = ss.insertSheet('Game');
  const header = sh.getRange(1, 1, 1, 3).getValues()[0];
  if (header[0] !== 'Name' || header[1] !== 'Time' || header[2] !== 'Moves') {
    sh.getRange(1, 1, 1, 3).setValues([['Name', 'Time', 'Moves']]);
  }
  return sh;
}

function readGameRows_(sh) {
  const lastRow = sh.getLastRow();
  if (lastRow < 2) return [];
  const data = sh.getRange(2, 1, lastRow - 1, 3).getValues();
  const list = [];
  data.forEach(function (r) {
    if (r[0] !== '' && r[0] !== null) {
      list.push({ name: String(r[0]), time: Number(r[1]), moves: Number(r[2]) });
    }
  });
  return list;
}

function writeGameRows_(sh, list) {
  const lastRow = sh.getLastRow();
  if (lastRow > 1) sh.getRange(2, 1, lastRow - 1, 3).clearContent();
  if (list.length) {
    const rows = list.map(function (item) { return [item.name, item.time, item.moves]; });
    sh.getRange(2, 1, rows.length, 3).setValues(rows);
  }
}

function sortLeaderboard_(list) {
  return list.slice().sort(function (a, b) {
    if (a.time !== b.time) return a.time - b.time; // fastest time first
    return a.moves - b.moves;                       // then fewest moves
  });
}

// Returns the combined top 5 (fastest time, ties broken by fewest moves).
function getLeaderboard() {
  const sh = ensureGameSheet_();
  return sortLeaderboard_(readGameRows_(sh)).slice(0, 5);
}

// Adds a new score, keeps only the top 5 (by time, then moves), re-sorts. Returns the updated top 5.
function submitScore(name, timeSeconds, moves) {
  const sh = ensureGameSheet_();
  const list = readGameRows_(sh);
  list.push({ name: String(name).trim() || 'Anonymous', time: Number(timeSeconds), moves: Number(moves) });
  const top5 = sortLeaderboard_(list).slice(0, 5);
  writeGameRows_(sh, top5);
  return top5;
}

/* ------------------------- MOCHI FLY LEADERBOARD ------------------------- */
// Sheet "MochiFly": Name | Score. Keeps only the top 5 highest scores.

function ensureMochiSheet_() {
  const ss = getSS_();
  let sh = ss.getSheetByName('MochiFly');
  if (!sh) sh = ss.insertSheet('MochiFly');
  const header = sh.getRange(1, 1, 1, 2).getValues()[0];
  if (header[0] !== 'Name' || header[1] !== 'Score') {
    sh.getRange(1, 1, 1, 2).setValues([['Name', 'Score']]);
  }
  return sh;
}

function readMochiRows_(sh) {
  const lastRow = sh.getLastRow();
  if (lastRow < 2) return [];
  const data = sh.getRange(2, 1, lastRow - 1, 2).getValues();
  const list = [];
  data.forEach(function (r) {
    if (r[0] !== '' && r[0] !== null) {
      list.push({ name: String(r[0]), score: Number(r[1]) });
    }
  });
  return list;
}

function writeMochiRows_(sh, list) {
  const lastRow = sh.getLastRow();
  if (lastRow > 1) sh.getRange(2, 1, lastRow - 1, 2).clearContent();
  if (list.length) {
    const rows = list.map(function (item) { return [item.name, item.score]; });
    sh.getRange(2, 1, rows.length, 2).setValues(rows);
  }
}

// Returns the top 5 highest scores, sorted descending.
function getMochiLeaderboard() {
  const sh = ensureMochiSheet_();
  const list = readMochiRows_(sh);
  list.sort(function (a, b) { return b.score - a.score; });
  return list.slice(0, 5);
}

// Adds a new score, keeps only the top 5 (highest first). Returns the updated top 5.
function submitMochiScore(name, score) {
  const sh = ensureMochiSheet_();
  const list = readMochiRows_(sh);
  list.push({ name: String(name).trim() || 'Anonymous', score: Number(score) });
  list.sort(function (a, b) { return b.score - a.score; });
  const top5 = list.slice(0, 5);
  writeMochiRows_(sh, top5);
  return top5;
}

/* ------------------------------ ICD LOOKUP -------------------------------- */
// Sheet "ICD": ICD | Name | Note. Row-level edit supported via the sheet row number.

function ensureIcdSheet_() {
  const ss = getSS_();
  let sh = ss.getSheetByName('ICD');
  if (!sh) {
    sh = ss.insertSheet('ICD');
    sh.getRange(1, 1, 1, 3).setValues([['ICD', 'Name', 'Note']]);
  }
  return sh;
}

// Returns every row as { row, icd, name, note } — "row" is the actual sheet row number,
// used later to target that exact row when editing.
function getIcdData() {
  const sh = ensureIcdSheet_();
  const lastRow = sh.getLastRow();
  if (lastRow < 2) return [];
  const data = sh.getRange(2, 1, lastRow - 1, 3).getValues();
  const list = [];
  data.forEach(function (r, i) {
    if (r[0] !== '' || r[1] !== '') {
      list.push({ row: i + 2, icd: r[0], name: r[1], note: r[2] });
    }
  });
  return list;
}

// Appends a new entry. Returns the refreshed full list.
function addIcdRow(icd, name, note) {
  const sh = ensureIcdSheet_();
  sh.appendRow([icd, name, note]);
  return getIcdData();
}

// Overwrites one specific row (identified by its sheet row number). Returns the refreshed full list.
function updateIcdRow(rowNumber, icd, name, note) {
  const sh = ensureIcdSheet_();
  sh.getRange(rowNumber, 1, 1, 3).setValues([[icd, name, note]]);
  return getIcdData();
}

/* --------------------------- EATING TRACKER ------------------------------ */
// Sheet "Eating": Day | Yakult | Bubble_tea | Eating_out | Sum  (31 rows, Day 1..31).
// A blank Yakult cell means "not tracked yet" for that day; once saved (even at 0),
// it becomes a real number — this is how we tell "untouched" apart from "logged as free"
// without adding an extra column.

function ensureEatingSheet_() {
  const ss = getSS_();
  let sh = ss.getSheetByName('Eating');
  if (!sh) {
    sh = ss.insertSheet('Eating');
    sh.getRange(1, 1, 1, 5).setValues([['Day', 'Yakult', 'Bubble_tea', 'Eating_out', 'Sum']]);
    const rows = [];
    for (let i = 1; i <= 31; i++) rows.push([i, '', '', '', '']);
    sh.getRange(2, 1, 31, 5).setValues(rows);
  } else if (sh.getLastRow() < 32) {
    const existing = Math.max(0, sh.getLastRow() - 1);
    const rows = [];
    for (let d = existing + 1; d <= 31; d++) rows.push([d, '', '', '', '']);
    if (rows.length) sh.getRange(existing + 2, 1, rows.length, 5).setValues(rows);
  }
  return sh;
}

function numOrZero_(v) {
  return (v === '' || v === null || v === undefined) ? 0 : Number(v);
}

// Returns 31 entries: { day, yakultMarked, yakultYes, bubbleTea, eatingOut, sum }.
// Yakult is a Yes/No flag (stored as 1/0), not a money amount — blank still means "not decided yet".
function getEatingData() {
  const sh = ensureEatingSheet_();
  const data = sh.getRange(2, 1, 31, 5).getValues();
  return data.map(function (r) {
    const yakultMarked = r[1] !== '' && r[1] !== null;
    return {
      day: r[0],
      yakultMarked: yakultMarked,
      yakultYes: yakultMarked ? Number(r[1]) === 1 : false,
      bubbleTea: numOrZero_(r[2]),
      eatingOut: numOrZero_(r[3]),
      sum: numOrZero_(r[4])
    };
  });
}

// Saves one day. yakultYes is a boolean (Yes/No), stored as 1/0.
// Sum only totals Bubble Tea + Eating Out — Yakult isn't money, so it's excluded.
function saveEatingDay(day, yakultYes, bubbleTea, eatingOut) {
  const sh = ensureEatingSheet_();
  const y = yakultYes ? 1 : 0;
  const b = Number(bubbleTea) || 0;
  const e = Number(eatingOut) || 0;
  const sum = b + e;
  sh.getRange(Number(day) + 1, 2, 1, 4).setValues([[y, b, e, sum]]);
  return getEatingData();
}

// Clears all 31 days back to blank/untouched (keeps Day 1..31, keeps sheet structure).
function resetEatingData() {
  const sh = ensureEatingSheet_();
  const rows = [];
  for (let i = 1; i <= 31; i++) rows.push(['', '', '', '']);
  sh.getRange(2, 2, 31, 4).setValues(rows);
  return getEatingData();
}

/* ============================================================
 *  API ROUTER  (PHẦN MỚI — thay thế cho doGet render HTML cũ)
 *  Frontend (Cloudflare Pages) gọi vào đây bằng fetch() dạng:
 *     POST {exec-url}
 *     body: JSON.stringify({ action: 'tenHam', args: [tham_so_1, tham_so_2, ...] })
 *
 *  Response luôn có dạng:
 *     { ok: true,  data: <kết quả trả về của hàm> }
 *     { ok: false, error: '<thông báo lỗi>' }
 * ============================================================ */

// Danh sách "trắng" các hàm được phép gọi từ frontend — ánh xạ tên (string) -> function.
// Ánh xạ tường minh (không dùng eval / global lookup) để đảm bảo an toàn.
function getActionMap_() {
  return {
    // AUTH
    checkPassword: checkPassword,
    // ACCOUNTS
    getAccountsData: getAccountsData,
    addAccountRow: addAccountRow,
    updateAccountRow: updateAccountRow,
    saveAccountType: saveAccountType,
    // SYMBOLS
    getSymbolsData: getSymbolsData,
    addSymbol: addSymbol,
    addSymbolsBatch: addSymbolsBatch,
    // SAVING
    getSavingData: getSavingData,
    saveSavingDays: saveSavingDays,
    resetSaving: resetSaving,
    // MEMORY MATCH LEADERBOARD
    getLeaderboard: getLeaderboard,
    submitScore: submitScore,
    // MOCHI FLY LEADERBOARD
    getMochiLeaderboard: getMochiLeaderboard,
    submitMochiScore: submitMochiScore,
    // ICD LOOKUP
    getIcdData: getIcdData,
    addIcdRow: addIcdRow,
    updateIcdRow: updateIcdRow,
    // EATING TRACKER
    getEatingData: getEatingData,
    saveEatingDay: saveEatingDay,
    resetEatingData: resetEatingData
  };
}

// POST — dùng cho MỌI lời gọi từ frontend (kể cả các hàm chỉ đọc dữ liệu).
// Dùng POST cho tất cả để tránh giới hạn độ dài URL của GET khi tham số là mảng/object lớn
// (ví dụ: saveAccountType với danh sách rows, addSymbolsBatch với danh sách items, ...).
function doPost(e) {
  return handleApiRequest_(e);
}

// GET — hỗ trợ thêm để tiện test nhanh trên trình duyệt:
//   {exec-url}?action=getSymbolsData&args=[]
// (KHÔNG bắt buộc dùng ở frontend chính thức — frontend luôn dùng POST)
function doGet(e) {
  return handleApiRequest_(e);
}

function handleApiRequest_(e) {
  let action = '';
  try {
    let args = [];

    if (e && e.postData && e.postData.contents) {
      // Request dạng POST — body là JSON: { action, args }
      const body = JSON.parse(e.postData.contents);
      action = body.action;
      args = body.args || [];
    } else if (e && e.parameter && e.parameter.action) {
      // Request dạng GET — ?action=...&args=[...]
      action = e.parameter.action;
      args = e.parameter.args ? JSON.parse(e.parameter.args) : [];
    } else {
      throw new Error('Thiếu tham số "action"');
    }

    const actionMap = getActionMap_();
    const fn = actionMap[action];
    if (typeof fn !== 'function') {
      throw new Error('Action không hợp lệ: ' + action);
    }

    const result = fn.apply(null, args);
    return jsonOutput_({ ok: true, data: (result === undefined ? null : result) });
  } catch (err) {
    return jsonOutput_({ ok: false, error: err && err.message ? err.message : String(err) });
  }
}

function jsonOutput_(obj) {
  // ContentService trả JSON — Apps Script Web App tự động cho phép gọi cross-origin (CORS)
  // khi request là "simple request" (POST với Content-Type mặc định text/plain từ fetch()),
  // nên KHÔNG cần/khÔng thể set thêm header Access-Control-Allow-Origin thủ công ở đây.
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
