/* ---------------------------------------------------------------- */
/* LOGIN IMAGE FALLBACK CHAIN                                         */
/* ---------------------------------------------------------------- */
function imgFallback(img) {
  if (img.dataset.fallback1) {
    img.src = img.dataset.fallback1;
    img.removeAttribute('data-fallback1');
  } else if (img.dataset.fallback2) {
    img.src = img.dataset.fallback2;
    img.removeAttribute('data-fallback2');
  } else {
    img.style.display = 'none';
  }
}

/* ---------------------------------------------------------------- */
/* FLOWER BACKGROUND                                                  */
/* ---------------------------------------------------------------- */
function scatterFlowers() {
  const field = document.getElementById('flower-field');
  const colors = ['#ffb6c1', '#b0e0e6', '#dde874'];
  const count = window.innerWidth < 760 ? 18 : 34;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'bg-flower';
    el.textContent = '✿';
    el.style.top = Math.random() * 100 + '%';
    el.style.left = Math.random() * 100 + '%';
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.fontSize = (16 + Math.random() * 26) + 'px';
    el.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
    el.style.opacity = (0.18 + Math.random() * 0.3).toFixed(2);
    field.appendChild(el);
  }
}

/* ---------------------------------------------------------------- */
/* GENERIC PASSCODE (4-digit) COMPONENT                               */
/* ---------------------------------------------------------------- */
// Builds a 4-box + numpad passcode inside given container ids,
// calling onComplete(code) once 4 digits are entered.
// statusId (optional) points to an element used to show success/error text.
function PassCode(boxesId, padId, onComplete, statusId) {
  const boxesEl = document.getElementById(boxesId);
  const padEl = document.getElementById(padId);
  const statusEl = statusId ? document.getElementById(statusId) : null;
  let digits = [];

  function render() {
    const boxes = boxesEl.querySelectorAll('.pw-box');
    boxes.forEach(function (b, i) {
      b.classList.toggle('filled', i < digits.length);
    });
  }

  function clearStatus() {
    if (statusEl) { statusEl.textContent = ''; statusEl.className = 'pw-status'; }
  }

  function reset() {
    digits = [];
    render();
  }

  function pressDigit(d) {
    if (digits.length >= 4) return;
    clearStatus();
    digits.push(d);
    render();
    if (digits.length === 4) {
      const code = digits.join('');
      onComplete(code, function () { reset(); });
    }
  }

  function pressDelete() {
    if (digits.length === 0) return;
    digits.pop();
    render();
  }

  function showSuccess(msg) {
    if (statusEl) { statusEl.textContent = msg; statusEl.className = 'pw-status success'; }
  }

  function showError(msg) {
    if (statusEl) { statusEl.textContent = msg; statusEl.className = 'pw-status error'; }
  }

  function errorShake() {
    boxesEl.classList.add('shake');
    boxesEl.querySelectorAll('.pw-box').forEach(function (b) { b.classList.add('shake-error'); });
    setTimeout(function () {
      boxesEl.classList.remove('shake');
      boxesEl.querySelectorAll('.pw-box').forEach(function (b) { b.classList.remove('shake-error'); });
      reset();
    }, 420);
  }

  // Build numpad: 1-9 in a 3x3 grid, then an empty cell, 0, and a delete button.
  padEl.innerHTML = '';
  var order = [1,2,3,4,5,6,7,8,9];
  order.forEach(function (n) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = n;
    btn.addEventListener('click', function () { pressDigit(String(n)); });
    padEl.appendChild(btn);
  });
  const spacer = document.createElement('div');
  padEl.appendChild(spacer);
  const zeroBtn = document.createElement('button');
  zeroBtn.type = 'button';
  zeroBtn.textContent = '0';
  zeroBtn.addEventListener('click', function () { pressDigit('0'); });
  padEl.appendChild(zeroBtn);
  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'num-delete';
  delBtn.innerHTML = '⌫';
  delBtn.addEventListener('click', pressDelete);
  padEl.appendChild(delBtn);

  return { reset: reset, errorShake: errorShake, showSuccess: showSuccess, showError: showError, clearStatus: clearStatus };
}

/* ---------------------------------------------------------------- */
/* LOADING OVERLAY                                                    */
/* ---------------------------------------------------------------- */
function showLoading() { document.getElementById('loading-overlay').classList.add('active'); }
function hideLoading() { document.getElementById('loading-overlay').classList.remove('active'); }

/* ---------------------------------------------------------------- */
/* TOAST                                                              */
/* ---------------------------------------------------------------- */
function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1600);
}

function copyText(text) {
  navigator.clipboard.writeText(String(text)).then(function () {
    toast('Copied!');
  }).catch(function () {
    toast("Couldn't copy");
  });
}

// Formats a number with "." as the thousands separator, e.g. 3000 -> "3.000"
function formatThousands(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/* ---------------------------------------------------------------- */
/* SCREEN NAVIGATION                                                  */
/* ---------------------------------------------------------------- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function (s) { s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
}

// Maps each app-view to the navbar section it belongs to, purely for highlighting the active nav link.
var NAV_SECTION_MAP_ = {
  'menu-view': 'home',
  'accounts-view': 'tools', 'symbols-view': 'tools', 'saving-view': 'tools',
  'datediff-view': 'tools', 'icd-view': 'tools', 'eating-view': 'tools',
  'memory-view': 'games', 'mochi-view': 'games'
};
function setNavActive(section) {
  document.querySelectorAll('.navbar-link').forEach(function (el) {
    el.classList.toggle('active', el.dataset.navSection === section);
  });
}

// Controls which part of the Home tab is visible: 'home' = hero only (nothing else),
// 'tools' = only the Tools cards, 'games' = only the Games cards.
var currentHomeSection_ = 'home';
function showHomeSection(section) {
  currentHomeSection_ = section;
  var hero = document.querySelector('.home-hero');
  var tools = document.querySelector('.content-section.tools');
  var games = document.querySelector('.content-section.games');
  if (section === 'home') {
    if (hero) hero.style.display = '';
    if (tools) tools.style.display = '';
    if (games) games.style.display = '';
  } else if (section === 'tools') {
    if (hero) hero.style.display = 'none';
    if (tools) tools.style.display = '';
    if (games) games.style.display = 'none';
  } else if (section === 'games') {
    if (hero) hero.style.display = 'none';
    if (tools) tools.style.display = 'none';
    if (games) games.style.display = '';
  }
  setNavActive(section);
}

// Which back-button belongs to each view — only that one gets shown, inside the navbar.
var BACK_BTN_MAP_ = {
  'accounts-view': 'accounts-back', 'symbols-view': 'symbols-back', 'saving-view': 'saving-back',
  'datediff-view': 'datediff-back', 'icd-view': 'icd-back', 'eating-view': 'eating-back',
  'memory-view': 'memory-back', 'mochi-view': 'mochi-back'
};

function showView(id) {
  document.querySelectorAll('.app-view').forEach(function (v) { v.style.display = 'none'; });
  document.getElementById(id).style.display = 'block';
  if (id === 'menu-view') {
    showHomeSection(currentHomeSection_);
  } else {
    setNavActive(NAV_SECTION_MAP_[id] || 'home');
  }

  document.querySelectorAll('.back-btn').forEach(function (b) { b.style.display = 'none'; });
  var backId = BACK_BTN_MAP_[id];
  if (backId) {
    var backEl = document.getElementById(backId);
    if (backEl) backEl.style.display = '';
  }

  syncFixedHeaderOffsets();
}

// Measures the ACTUAL rendered navbar height and sets it as a CSS var — no more
// guessing pixel constants, so the fixed navbar can never overlap page content below it.
function syncFixedHeaderOffsets() {
  var navbar = document.querySelector('.navbar');
  var navH = navbar ? navbar.getBoundingClientRect().height : 0;
  document.documentElement.style.setProperty('--navbar-h', navH + 'px');
}

// Goes to the Home tab showing a specific section ('home' | 'tools' | 'games').
function goHome(section) {
  showView('menu-view');
  showHomeSection(section);
}

/* ---------------------------------------------------------------- */
/* LOGIN                                                              */
/* ---------------------------------------------------------------- */
var loginPad;
function initLogin() {
  loginPad = PassCode('login-boxes', 'login-pad', function (code, resetFn) {
    showLoading();
    google.script.run
      .withSuccessHandler(function (ok) {
        hideLoading();
        if (ok) {
          loginPad.showSuccess('Login successful (๑ᵔ⌔ᵔ๑)');
          setTimeout(function () { showScreen('app-screen'); syncFixedHeaderOffsets(); }, 550);
        } else {
          loginPad.showError('Incorrect password ʕ´-ก̀ʔᐝ');
          loginPad.errorShake();
        }
      })
      .withFailureHandler(function (err) {
        hideLoading();
        loginPad.showError('Something went wrong ʕ´-ก̀ʔᐝ');
        resetFn();
      })
      .checkPassword('General', code);
  }, 'login-status');
}

/* ---------------------------------------------------------------- */
/* ACCOUNTS                                                           */
/* ---------------------------------------------------------------- */
var accountsData = {};
var currentType = null;
var rowUid_ = 0; // shared counter for unique dynamic-field names (used by Symbols' Add rows)
var accPad;

function openAccountsGate() {
  stopSymbolsPolling();
  document.getElementById('accounts-modal').classList.add('active');
  accPad = PassCode('acc-gate-boxes', 'acc-gate-pad', function (code, resetFn) {
    showLoading();
    google.script.run
      .withSuccessHandler(function (ok) {
        hideLoading();
        if (ok) {
          accPad.showSuccess('Login successful (๑ᵔ⌔ᵔ๑)');
          setTimeout(function () {
            document.getElementById('accounts-modal').classList.remove('active');
            loadAccounts();
          }, 550);
        } else {
          accPad.showError('Incorrect password ʕ´-ก̀ʔᐝ');
          accPad.errorShake();
        }
      })
      .withFailureHandler(function (err) { hideLoading(); accPad.showError('Something went wrong ʕ´-ก̀ʔᐝ'); resetFn(); })
      .checkPassword('DS_accounts', code);
  }, 'acc-gate-status');
  // Always start from a clean slate — no digits, no leftover status text.
  accPad.reset();
  accPad.clearStatus();
}

function loadAccounts() {
  showView('accounts-view');
  showLoading();
  google.script.run
    .withSuccessHandler(function (data) {
      hideLoading();
      accountsData = data;
      var types = Object.keys(data);
      currentType = types[0] || null;
      renderTypeSelect(types);
      renderAccountsList();
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .getAccountsData();
}

function renderTypeSelect(types) {
  var sel = document.getElementById('type-select');
  sel.innerHTML = '';
  types.forEach(function (t) {
    var opt = document.createElement('option');
    opt.value = t; opt.textContent = t;
    sel.appendChild(opt);
  });
  sel.value = currentType;
  sel.onchange = function () {
    currentType = sel.value;
    renderAccountsList();
  };
}

function renderAccountsList() {
  var list = document.getElementById('accounts-list');
  list.innerHTML = '';
  var rows = accountsData[currentType] || [];
  if (rows.length === 0) {
    list.innerHTML = '<div class="empty-state"><span class="empty-icon">✿</span>No data for this type yet</div>';
  }
  rows.forEach(function (r) {
    var card = document.createElement('div');
    card.className = 'acc-card';

    var top = document.createElement('div');
    top.className = 'acc-card-top';

    var of = document.createElement('div');
    of.className = 'acc-of';
    of.textContent = r.of || '(không tên)';
    top.appendChild(of);

    var editBtn = document.createElement('button');
    editBtn.className = 'acc-edit-icon-btn';
    editBtn.title = 'Edit';
    editBtn.textContent = '✎';
    editBtn.onclick = function () { openAccountEntryModal(r); };
    top.appendChild(editBtn);

    card.appendChild(top);

    var row = document.createElement('div');
    row.className = 'acc-row';

    var accBtn = document.createElement('button');
    accBtn.className = 'copy-chip';
    accBtn.textContent = 'Account: ' + (r.account || '—');
    accBtn.onclick = function () { copyText(r.account); };
    row.appendChild(accBtn);

    var pwBtn = document.createElement('button');
    pwBtn.className = 'copy-chip pw-chip';
    pwBtn.textContent = 'Password: ••••';
    pwBtn.onclick = function () { copyText(r.password); };
    row.appendChild(pwBtn);

    card.appendChild(row);

    if (r.note) {
      var note = document.createElement('div');
      note.className = 'acc-note';
      var isLink = /^https?:\/\//i.test(String(r.note).trim());
      if (isLink) {
        var a = document.createElement('a');
        a.href = r.note; a.textContent = r.note; a.target = '_blank';
        note.appendChild(a);
      } else {
        note.textContent = r.note;
      }
      card.appendChild(note);
    }

    list.appendChild(card);
  });
}

/* ---- Add/Edit a single account entry (row-level, like ICD) ---- */
var accountEditingRow = null;

function openAccountEntryModal(entry) {
  accountEditingRow = entry ? entry.row : null;
  document.getElementById('account-modal-title').textContent = entry ? 'Edit Account' : 'Add Account';
  document.getElementById('account-field-type').value = currentType || '';
  document.getElementById('account-field-of').value = entry ? entry.of : '';
  document.getElementById('account-field-account').value = entry ? entry.account : '';
  document.getElementById('account-field-password').value = entry ? entry.password : '';
  document.getElementById('account-field-note').value = entry ? entry.note : '';
  document.getElementById('edit-modal').classList.add('active');
}

function saveAccountEntry() {
  var type = document.getElementById('account-field-type').value.trim();
  var of = document.getElementById('account-field-of').value.trim();
  var account = document.getElementById('account-field-account').value.trim();
  var password = document.getElementById('account-field-password').value.trim();
  var note = document.getElementById('account-field-note').value.trim();
  if (!type || !of) { toast('Enter both Type and Of'); return; }

  showLoading();
  var onDone = function (data) {
    hideLoading();
    accountsData = data;
    currentType = type;
    renderTypeSelect(Object.keys(data));
    renderAccountsList();
    document.getElementById('edit-modal').classList.remove('active');
    toast('Saved!');
  };
  var onFail = function (err) { hideLoading(); toast('Error: ' + err.message); };

  if (accountEditingRow) {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).updateAccountRow(accountEditingRow, type, of, account, password, note);
  } else {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).addAccountRow(type, of, account, password, note);
  }
}

/* ---------------------------------------------------------------- */
/* SYMBOLS                                                            */
/* ---------------------------------------------------------------- */
var symbolsPollTimer = null;

function renderSymbols(list) {
  var smallGrid = document.getElementById('symbols-small-grid');
  var animalGrid = document.getElementById('symbols-animal-grid');
  var mediumGrid = document.getElementById('symbols-medium-grid');
  smallGrid.innerHTML = '';
  animalGrid.innerHTML = '';
  mediumGrid.innerHTML = '';

  list.forEach(function (item) {
    var cell = document.createElement('div');
    cell.className = 'symbol-cell';
    cell.textContent = item.value;
    cell.title = 'Click to copy';
    cell.onclick = function () { copyText(item.value); };

    if (item.type === 'small') {
      smallGrid.appendChild(cell);
    } else if (item.type === 'animal') {
      animalGrid.appendChild(cell);
    } else {
      mediumGrid.appendChild(cell);
    }
  });
}

function fetchSymbols(silent, onDone) {
  google.script.run
    .withSuccessHandler(function (list) { renderSymbols(list); if (onDone) onDone(); })
    .withFailureHandler(function (err) { if (!silent) toast('Error: ' + err.message); if (onDone) onDone(); })
    .getSymbolsData();
}

function startSymbolsPolling() {
  stopSymbolsPolling();
  // Keep the grid in sync with edits made directly on the Google Sheet.
  symbolsPollTimer = setInterval(function () { fetchSymbols(true); }, 4000);
}

function stopSymbolsPolling() {
  if (symbolsPollTimer) {
    clearInterval(symbolsPollTimer);
    symbolsPollTimer = null;
  }
}

function loadSymbols() {
  showView('symbols-view');
  showLoading();
  fetchSymbols(false, hideLoading);
  startSymbolsPolling();
}

function openAddSymbol() {
  var wrap = document.getElementById('symbol-add-rows');
  wrap.innerHTML = '';
  addSymbolRow();
  document.getElementById('symbol-add-modal').classList.add('active');
}
function addSymbolRow() {
  var uid = 'sr' + (rowUid_++);
  var wrap = document.getElementById('symbol-add-rows');
  var row = document.createElement('div');
  row.className = 'symbol-add-row';
  row.innerHTML =
    '<select class="s-type">' +
      '<option value="small">small</option>' +
      '<option value="animal">animal</option>' +
      '<option value="medium">medium</option>' +
    '</select>' +
    '<input type="text" class="s-value" name="' + uid + '-value" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Detail">';
  wrap.appendChild(row);
}
function saveSymbols() {
  var items = [];
  document.querySelectorAll('#symbol-add-rows .symbol-add-row').forEach(function (row) {
    var type = row.querySelector('.s-type').value;
    var value = row.querySelector('.s-value').value.trim();
    if (value) items.push({ type: type, value: value });
  });
  if (items.length === 0) { toast('Nothing entered yet'); return; }
  showLoading();
  google.script.run
    .withSuccessHandler(function () {
      document.getElementById('symbol-add-modal').classList.remove('active');
      toast('Saved!');
      fetchSymbols(false, hideLoading);
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .addSymbolsBatch(items);
}

/* ---------------------------------------------------------------- */
/* SAVING                                                             */
/* ---------------------------------------------------------------- */
var savingDayCells = {};   // day number -> cell element
var savingSavedDays = [];  // committed (persisted) days, from server
var savingPendingDays = []; // clicked-but-not-yet-saved days, this session only (max 5)
var savingGridBuilt = false;

function buildSavingGrid() {
  if (savingGridBuilt) return;
  var grid = document.getElementById('saving-days-grid');
  grid.innerHTML = '';
  for (var d = 1; d <= 366; d++) {
    (function (day) {
      var cell = document.createElement('div');
      cell.className = 'saving-day-cell';
      cell.textContent = day;
      cell.onclick = function () { savingPickDay(day); };
      grid.appendChild(cell);
      savingDayCells[day] = cell;
    })(d);
  }
  savingGridBuilt = true;
}

function savingPickDay(day) {
  var cell = savingDayCells[day];
  if (!cell || cell.classList.contains('saved')) return;

  var idx = savingPendingDays.indexOf(day);
  if (idx !== -1) {
    // Already picked — tapping again deselects it.
    savingPendingDays.splice(idx, 1);
    cell.classList.remove('pending');
  } else {
    // No cap — you can pick as many as you like.
    savingPendingDays.push(day);
    cell.classList.add('pending');
  }
  savingRenderPicksTable();
}

function savingRenderPicksTable() {
  // The 5-cell table only ever shows/sums the first 5 picks (in selection order),
  // even if more than 5 days are currently picked.
  var firstFive = savingPendingDays.slice(0, 5);
  for (var i = 0; i < 5; i++) {
    var slot = document.getElementById('saving-pick-' + i);
    slot.textContent = (i < firstFive.length) ? firstFive[i] : '';
  }
  var sum = firstFive.reduce(function (a, b) { return a + b; }, 0);
  document.getElementById('saving-pick-sum').textContent = formatThousands(sum);
}

function savingClearPending() {
  savingPendingDays.forEach(function (day) {
    var cell = savingDayCells[day];
    if (cell) cell.classList.remove('pending');
  });
  savingPendingDays = [];
  savingRenderPicksTable();
}

function savingRenderTotal() {
  var sum = savingSavedDays.reduce(function (a, b) { return a + b; }, 0);
  document.getElementById('saving-total-box').textContent = formatThousands(sum);
}

function savingApplySavedState() {
  Object.keys(savingDayCells).forEach(function (day) {
    savingDayCells[day].classList.remove('saved', 'pending');
  });
  savingSavedDays.forEach(function (day) {
    var cell = savingDayCells[day];
    if (cell) cell.classList.add('saved');
  });
  savingRenderTotal();
}

function openSaving() {
  buildSavingGrid();
  showView('saving-view');
  savingPendingDays = [];
  savingRenderPicksTable();
  document.getElementById('saving-random-number').textContent = '--';
  showLoading();
  google.script.run
    .withSuccessHandler(function (days) {
      hideLoading();
      savingSavedDays = days;
      savingApplySavedState();
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .getSavingData();
}

function savingRandomize() {
  var available = [];
  for (var d = 1; d <= 366; d++) {
    if (savingSavedDays.indexOf(d) === -1 && savingPendingDays.indexOf(d) === -1) {
      available.push(d);
    }
  }
  if (available.length === 0) { toast('All 366 days are already picked! ✿'); return; }

  var n = available[Math.floor(Math.random() * available.length)];
  var el = document.getElementById('saving-random-number');
  el.textContent = n;
  el.classList.remove('pop');
  void el.offsetWidth; // restart animation
  el.classList.add('pop');
}

function savingSave() {
  if (savingPendingDays.length === 0) { toast('Pick at least one day first'); return; }
  var toSave = savingPendingDays.slice();
  showLoading();
  google.script.run
    .withSuccessHandler(function (days) {
      hideLoading();
      savingSavedDays = days;
      savingPendingDays = [];
      savingRenderPicksTable();
      savingApplySavedState();
      toast('Saved!');
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .saveSavingDays(toSave);
}

function savingReset() {
  showLoading();
  google.script.run
    .withSuccessHandler(function (days) {
      hideLoading();
      savingSavedDays = days;
      savingPendingDays = [];
      savingRenderPicksTable();
      savingApplySavedState();
      document.getElementById('saving-random-number').textContent = '--';
      toast('Reset!');
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .resetSaving();
}

/* ---------------------------------------------------------------- */
/* DAY COUNT                                                          */
/* ---------------------------------------------------------------- */
var LOVE_DAY_START = '2026-05-09';

function openDateDiff() {
  showView('datediff-view');
  renderLoveDay();
  datediffCalc();
}

function renderLoveDay() {
  var start = new Date(LOVE_DAY_START + 'T00:00:00Z');
  var now = new Date();
  var todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  // +1 so the start date itself counts as Day 1.
  var count = Math.floor((todayUTC - start) / 86400000) + 1;
  document.getElementById('loveday-line').textContent = 'Love day: ' + formatThousands(count);
}

function datediffCalc() {
  var startVal = document.getElementById('datediff-start').value;
  var endVal = document.getElementById('datediff-end').value;
  var out = document.getElementById('datediff-days');
  var ymdOut = document.getElementById('datediff-ymd');
  if (!startVal || !endVal) {
    out.textContent = '0';
    if (ymdOut) ymdOut.textContent = '';
    return;
  }

  // Parse as UTC midnight so partial-day/timezone drift never skews the count.
  var start = new Date(startVal + 'T00:00:00Z');
  var end = new Date(endVal + 'T00:00:00Z');
  var diff = Math.round(Math.abs(end - start) / 86400000);
  out.textContent = formatThousands(diff);

  if (ymdOut) ymdOut.textContent = datediffYMD(start, end);
}

// Calendar-aware breakdown into years / months / days (handles either date order).
function datediffYMD(dateA, dateB) {
  var early = dateA <= dateB ? dateA : dateB;
  var late = dateA <= dateB ? dateB : dateA;

  var years = late.getUTCFullYear() - early.getUTCFullYear();
  var months = late.getUTCMonth() - early.getUTCMonth();
  var days = late.getUTCDate() - early.getUTCDate();

  if (days < 0) {
    var prevMonthLastDay = new Date(Date.UTC(late.getUTCFullYear(), late.getUTCMonth(), 0)).getUTCDate();
    days += prevMonthLastDay;
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  var parts = [];
  parts.push(years + (years === 1 ? ' year' : ' years'));
  parts.push(months + (months === 1 ? ' month' : ' months'));
  parts.push(days + (days === 1 ? ' day' : ' days'));
  return parts.join(', ');
}

function datediffSwap() {
  var startEl = document.getElementById('datediff-start');
  var endEl = document.getElementById('datediff-end');
  var tmp = startEl.value;
  startEl.value = endEl.value;
  endEl.value = tmp;
  datediffCalc();
}

/* ---------------------------------------------------------------- */
/* MEMORY MATCH                                                       */
/* ---------------------------------------------------------------- */
var MEMORY_EMOJIS = ['🌷', '🐰', '🍰', '💗', '🎀', '🌙', '🍓', '🦋', '🧁', '⭐'];
var memoryDeck = [];
var memoryCardEls = [];
var memoryFlipped = [];
var memoryMatched = [];
var memoryMoves = 0;
var memoryLocked = false;
var memoryTimerInterval = null;
var memoryStartTime = null;
var memoryElapsedSeconds = 0;
var memoryScoreSaved = false;
var memoryCombo = 0;
var memoryBestTime = null;

/* -- Web Audio SFX engine (shares the browser's audio context lazily created on first sound) -- */
var memoryAudioCtx = null;
function memoryEnsureAudio() {
  if (!memoryAudioCtx) {
    try { memoryAudioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* no-op */ }
  }
  if (memoryAudioCtx && memoryAudioCtx.state === 'suspended') memoryAudioCtx.resume();
}
function memoryTone_(ctx, now, freq, dur, waveType, peak, delay) {
  var t = now + (delay || 0);
  var o = ctx.createOscillator(), g = ctx.createGain();
  o.type = waveType; o.frequency.value = freq;
  o.connect(g); g.connect(ctx.destination);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.start(t); o.stop(t + dur + 0.02);
}
function memoryPlaySfx(type) {
  memoryEnsureAudio();
  if (!memoryAudioCtx) return;
  var ctx = memoryAudioCtx, now = ctx.currentTime;

  if (type === 'flip') {
    memoryTone_(ctx, now, 540, 0.06, 'triangle', 0.10);
  } else if (type === 'match') {
    memoryTone_(ctx, now, 880, 0.1, 'sine', 0.14);
    memoryTone_(ctx, now, 1320, 0.12, 'sine', 0.10, 0.06);
  } else if (type === 'wrong') {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(320, now);
    o.frequency.exponentialRampToValueAtTime(220, now + 0.14);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.12, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    o.connect(g); g.connect(ctx.destination);
    o.start(now); o.stop(now + 0.18);
  } else if (type === 'close') {
    var wo = ctx.createOscillator(), wg = ctx.createGain();
    wo.type = 'sawtooth';
    wo.frequency.setValueAtTime(280, now);
    wo.frequency.exponentialRampToValueAtTime(150, now + 0.14);
    wg.gain.setValueAtTime(0.0001, now);
    wg.gain.exponentialRampToValueAtTime(0.06, now + 0.02);
    wg.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    wo.connect(wg); wg.connect(ctx.destination);
    wo.start(now); wo.stop(now + 0.18);
  } else if (type === 'combo') {
    memoryTone_(ctx, now, 1300, 0.14, 'sine', 0.16);
  } else if (type === 'complete') {
    [523, 659, 784, 1047].forEach(function (f, i) { memoryTone_(ctx, now, f, 0.14, 'triangle', 0.13, i * 0.1); });
  } else if (type === 'newRecord') {
    [660, 880, 1108, 1320, 1568].forEach(function (f, i) { memoryTone_(ctx, now, f, 0.16, 'sine', 0.15, i * 0.08); });
  } else if (type === 'click') {
    memoryTone_(ctx, now, 600, 0.035, 'square', 0.06);
  } else if (type === 'start') {
    var so = ctx.createOscillator(), sg = ctx.createGain();
    so.type = 'sawtooth';
    so.frequency.setValueAtTime(220, now);
    so.frequency.exponentialRampToValueAtTime(560, now + 0.2);
    sg.gain.setValueAtTime(0.0001, now);
    sg.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
    sg.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
    so.connect(sg); sg.connect(ctx.destination);
    so.start(now); so.stop(now + 0.26);
    memoryTone_(ctx, now, 700, 0.08, 'triangle', 0.12, 0.22);
  }
}

function openMemory() {
  showView('memory-view');
  memoryShowStartScreen();
}

function memoryShowStartScreen() {
  memoryStopTimer();
  document.getElementById('memory-start-screen').style.display = 'flex';
  document.getElementById('memory-stats').style.display = 'none';
  document.getElementById('memory-grid').style.display = 'none';
}

function memoryFormatTime(totalSeconds) {
  var m = Math.floor(totalSeconds / 60);
  var s = totalSeconds % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

function memoryStartTimer() {
  memoryStartTime = Date.now();
  memoryElapsedSeconds = 0;
  document.getElementById('memory-timer').textContent = '00:00';
  clearInterval(memoryTimerInterval);
  memoryTimerInterval = setInterval(function () {
    memoryElapsedSeconds = Math.floor((Date.now() - memoryStartTime) / 1000);
    document.getElementById('memory-timer').textContent = memoryFormatTime(memoryElapsedSeconds);
  }, 1000);
}

function memoryStopTimer() {
  clearInterval(memoryTimerInterval);
  memoryTimerInterval = null;
}

// Called by the Start button (first entry) and by "New Game" (mid-play restart) —
// both actually begin a fresh, timed round.
function memoryNewGame() {
  document.getElementById('memory-result-modal').classList.remove('active');
  document.getElementById('memory-start-screen').style.display = 'none';
  document.getElementById('memory-stats').style.display = 'flex';
  document.getElementById('memory-grid').style.display = 'grid';

  memoryDeck = shuffleArray(MEMORY_EMOJIS.concat(MEMORY_EMOJIS));
  memoryFlipped = [];
  memoryMatched = [];
  memoryMoves = 0;
  memoryLocked = false;
  memoryScoreSaved = false;
  memoryCombo = 0;
  document.getElementById('memory-moves').textContent = '0';
  document.getElementById('memory-matches').textContent = '0';
  document.getElementById('memory-player-name').value = '';
  renderMemoryGrid();
  memoryStartTimer();
  memoryPlaySfx('start');

  // fetch the current best time (for a live "new record" check when this round finishes)
  google.script.run
    .withSuccessHandler(function (list) { memoryBestTime = list.length ? list[0].time : null; })
    .withFailureHandler(function () { memoryBestTime = null; })
    .getLeaderboard();
}

function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

function renderMemoryGrid() {
  var grid = document.getElementById('memory-grid');
  grid.innerHTML = '';
  memoryCardEls = [];
  memoryDeck.forEach(function (emoji, idx) {
    var card = document.createElement('div');
    card.className = 'memory-card';
    card.innerHTML =
      '<div class="memory-card-inner">' +
        '<div class="memory-card-face memory-card-back">✿</div>' +
        '<div class="memory-card-face memory-card-front">' + emoji + '</div>' +
      '</div>';
    card.onclick = function () { memoryFlip(idx); };
    grid.appendChild(card);
    memoryCardEls.push(card);
  });
}

function memoryFlip(idx) {
  if (memoryLocked) return;
  if (memoryFlipped.indexOf(idx) !== -1) return;
  if (memoryMatched.indexOf(idx) !== -1) return;
  if (memoryFlipped.length >= 2) return;

  memoryCardEls[idx].classList.add('flipped');
  memoryFlipped.push(idx);
  memoryPlaySfx('flip');

  if (memoryFlipped.length === 2) {
    memoryMoves++;
    document.getElementById('memory-moves').textContent = memoryMoves;
    memoryLocked = true;

    var i1 = memoryFlipped[0], i2 = memoryFlipped[1];
    var isMatch = memoryDeck[i1] === memoryDeck[i2];

    if (isMatch) {
      memoryCombo++;
      memoryPlaySfx(memoryCombo >= 2 ? 'combo' : 'match');
      setTimeout(function () {
        memoryMatched.push(i1, i2);
        memoryCardEls[i1].classList.add('matched');
        memoryCardEls[i2].classList.add('matched');
        document.getElementById('memory-matches').textContent = memoryMatched.length / 2;
        memoryFlipped = [];
        memoryLocked = false;
        if (memoryMatched.length === memoryDeck.length) {
          memoryOnWin();
        }
      }, 450);
    } else {
      memoryCombo = 0;
      memoryPlaySfx('wrong');
      setTimeout(function () {
        memoryCardEls[i1].classList.remove('flipped');
        memoryCardEls[i2].classList.remove('flipped');
        memoryFlipped = [];
        memoryLocked = false;
        memoryPlaySfx('close');
      }, 800);
    }
  }
}

function memoryOnWin() {
  memoryStopTimer();
  memoryPlaySfx('complete');
  var isRecord = memoryBestTime === null || memoryElapsedSeconds < memoryBestTime;
  if (isRecord) setTimeout(function () { memoryPlaySfx('newRecord'); }, 260);
  document.getElementById('memory-result-time').textContent = memoryFormatTime(memoryElapsedSeconds);
  document.getElementById('memory-result-modal').classList.add('active');
  memoryLoadLeaderboard();
}

function memoryRenderLeaderboard(list) {
  var body = document.getElementById('memory-leaderboard-body');
  body.innerHTML = '';
  if (list.length === 0) {
    body.innerHTML = '<tr><td colspan="4" style="text-align:center;opacity:.6;">No scores yet ✿</td></tr>';
    return;
  }
  list.forEach(function (item, i) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + (i + 1) + '</td>' +
      '<td>' + item.name + '</td>' +
      '<td>' + memoryFormatTime(item.time) + '</td>' +
      '<td>' + item.moves + '</td>';
    body.appendChild(tr);
  });
}

function memoryLoadLeaderboard() {
  google.script.run
    .withSuccessHandler(memoryRenderLeaderboard)
    .withFailureHandler(function (err) { toast('Error: ' + err.message); })
    .getLeaderboard();
}

function memorySaveScore() {
  if (memoryScoreSaved) { toast('Already saved this round'); return; }
  var name = document.getElementById('memory-player-name').value.trim();
  if (!name) { toast('Enter your name first'); return; }
  memoryPlaySfx('click');
  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      memoryScoreSaved = true;
      memoryRenderLeaderboard(list);
      toast('Saved!');
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .submitScore(name, memoryElapsedSeconds, memoryMoves);
}

/* ---------------------------------------------------------------- */
/* MOCHI FLY                                                           */
/* ---------------------------------------------------------------- */
// Palette from the reference boards: Watermelon/Canary/Limeade/Emerald/Royal Blue
// + Cherry Blossom Pink/Fawn/Maize/Sky Blue/Olivine
var mochiColors = { pink: '#E36D9B', yellow: '#FFF183', teal: '#10B183' };
var mochiColor = 'pink';
var mochiThemes = ['strawberry', 'icecream', 'cloud'];
var mochiThemeColor = { strawberry: '#FAA4B5', icecream: '#F8B77C', cloud: '#82BA88' };
// Background gradients per phase (top, bottom), blended smoothly between them at draw time.
var mochiBgPhases = [
  { top: '#70C1E1', bottom: '#E7DD6A' }, // day
  { top: '#F8B77C', bottom: '#FAA4B5' }, // sunset
  { top: '#2B4789', bottom: '#16213F' }  // night
];
var mochiBgPos = 0; // continuously eased position, wraps every 3 units (one full day/sunset/night cycle)

var mochiCanvas, mochiCtx;
var mochiState = 'idle'; // idle | playing | paused | gameover
var mochiBird = { x: 0, y: 0, vy: 0, r: 16, sx: 1, sy: 1 };
var mochiParallaxOffset = 0;
var mochiGravity = 0.5, mochiFlapPower = -8.5;
var mochiPipeWidth = 60, mochiPipeGap = 165, mochiPipeSpeed = 2.6, mochiSpawnDistance = 220;
var mochiPipes = [];
var mochiDistanceSinceSpawn = 0;
var mochiScore = 0;
var mochiBest = 0;
var mochiScoreSaved = false;
var mochiRAF = null;
var mochiLastFrameTime = 0;

var mochiMusicOn = true;
var mochiAudioCtx = null;
var mochiMusicTimer = null;
var mochiMusicNotes = [261.6, 293.7, 329.6, 392.0, 440.0];

function openMochi() {
  showView('mochi-view');
  mochiShowStartScreen();
}

function mochiShowStartScreen() {
  mochiState = 'idle';
  document.getElementById('mochi-start-screen').style.display = 'flex';
  document.getElementById('mochi-game-wrap').style.display = 'none';
  mochiLoadLeaderboardInto('mochi-leaderboard-body');
}

function mochiLoadLeaderboardInto(bodyId) {
  google.script.run
    .withSuccessHandler(function (list) {
      mochiRenderLeaderboard(list, bodyId);
      mochiBest = list.length ? list[0].score : 0;
      var bestEl = document.getElementById('mochi-best');
      if (bestEl) bestEl.textContent = mochiBest;
    })
    .withFailureHandler(function (err) { toast('Error: ' + err.message); })
    .getMochiLeaderboard();
}

function mochiRenderLeaderboard(list, bodyId) {
  var body = document.getElementById(bodyId);
  body.innerHTML = '';
  if (list.length === 0) {
    body.innerHTML = '<tr><td colspan="3" style="text-align:center;opacity:.6;">No scores yet ✿</td></tr>';
    return;
  }
  list.forEach(function (item, i) {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + (i + 1) + '</td><td>' + item.name + '</td><td>' + item.score + '</td>';
    body.appendChild(tr);
  });
}

function mochiInitCanvas() {
  mochiCanvas = document.getElementById('mochi-canvas');
  mochiCtx = mochiCanvas.getContext('2d');
  mochiResizeCanvas();
  if (!mochiCanvas.dataset.wired) {
    mochiCanvas.dataset.wired = '1';
    mochiCanvas.addEventListener('pointerdown', function (e) { e.preventDefault(); mochiFlap(); });
    window.addEventListener('resize', mochiResizeCanvas);
  }
}

function mochiResizeCanvas() {
  if (!mochiCanvas) return;
  var rect = mochiCanvas.getBoundingClientRect();
  mochiCanvas.width = rect.width;
  mochiCanvas.height = rect.height;
}

function mochiStartGame() {
  document.getElementById('mochi-start-screen').style.display = 'none';
  document.getElementById('mochi-game-wrap').style.display = 'block';
  mochiInitCanvas();
  mochiResetState();
  mochiState = 'playing';
  mochiLastFrameTime = 0;
  mochiPlaySfx('whoosh');
  mochiStartMusic();
  mochiRAF = requestAnimationFrame(mochiLoop);
}

function mochiResetState() {
  var w = mochiCanvas.width, h = mochiCanvas.height;
  mochiBird.r = Math.max(14, h * 0.035);
  mochiBird.x = w * 0.28;
  mochiBird.y = h / 2;
  mochiBird.vy = 0;
  mochiBird.sx = 1;
  mochiBird.sy = 1;
  mochiParallaxOffset = 0;
  mochiBgPos = 0;

  mochiPipeWidth = Math.max(50, w * 0.16);
  mochiPipeGap = Math.max(140, h * 0.3);
  mochiPipeSpeed = Math.max(2, w * 0.006);
  mochiGravity = h * 0.0011;
  mochiFlapPower = -h * 0.0155;
  mochiSpawnDistance = w * 0.55;

  mochiPipes = [];
  mochiDistanceSinceSpawn = 0;
  mochiScore = 0;
  document.getElementById('mochi-score').textContent = '0';
  document.getElementById('mochi-best').textContent = mochiBest;
}

function mochiFlap() {
  if (mochiState !== 'playing') return;
  mochiBird.vy = mochiFlapPower;
  mochiBird.sy = 1.16;
  mochiBird.sx = 0.87;
  mochiPlaySfx('pop');
}

// requestAnimationFrame passes a high-res timestamp; we use it to scale every
// per-frame change by real elapsed time, so the game runs at the same speed
// regardless of a device's actual refresh rate (60Hz vs 90/120Hz phones, etc).
function mochiLoop(timestamp) {
  if (mochiState !== 'playing') return;
  if (!mochiLastFrameTime) mochiLastFrameTime = timestamp;
  var dtSeconds = (timestamp - mochiLastFrameTime) / 1000;
  mochiLastFrameTime = timestamp;
  dtSeconds = Math.min(dtSeconds, 0.05); // clamp huge gaps (tab switch, lag spike)
  var dt = dtSeconds * 60; // 1.0 == exactly one 60fps frame's worth of time

  mochiUpdate(dt);
  mochiDraw();
  mochiRAF = requestAnimationFrame(mochiLoop);
}

function mochiUpdate(dt) {
  mochiBird.vy += mochiGravity * dt;
  mochiBird.y += mochiBird.vy * dt;
  mochiBird.sy += (1 - mochiBird.sy) * Math.min(1, 0.25 * dt);
  mochiBird.sx += (1 - mochiBird.sx) * Math.min(1, 0.25 * dt);
  mochiParallaxOffset += mochiPipeSpeed * 0.3 * dt;
  mochiBgPos += (mochiScore / 10 - mochiBgPos) * Math.min(1, 0.03 * dt);

  mochiDistanceSinceSpawn += mochiPipeSpeed * dt;
  if (mochiDistanceSinceSpawn >= mochiSpawnDistance) {
    mochiDistanceSinceSpawn = 0;
    mochiSpawnPipe();
  }

  for (var i = mochiPipes.length - 1; i >= 0; i--) {
    var p = mochiPipes[i];
    p.x -= mochiPipeSpeed * dt;

    if (!p.passed && p.x + mochiPipeWidth < mochiBird.x - mochiBird.r) {
      p.passed = true;
      mochiScore++;
      document.getElementById('mochi-score').textContent = mochiScore;
      mochiPlaySfx('ding');
    }

    mochiCheckStrawberry(p);
    if (mochiCollides(p)) { mochiGameOver(); return; }
    if (p.x + mochiPipeWidth < -10) mochiPipes.splice(i, 1);
  }

  if (mochiBird.y + mochiBird.r > mochiCanvas.height || mochiBird.y - mochiBird.r < 0) {
    mochiGameOver();
  }
}

function mochiSpawnPipe() {
  var margin = mochiCanvas.height * 0.08;
  var h = mochiCanvas.height;
  var theme = mochiThemes[Math.floor(Math.random() * mochiThemes.length)];

  // Rare double-gap pipe with a bonus strawberry hiding in one of the two gaps.
  var doubleGap = mochiPipeGap * 0.82;
  var middleMin = Math.max(28, h * 0.05);
  var usable = h - margin * 2 - doubleGap * 2 - middleMin;

  if (Math.random() < 0.12 && usable > 0) {
    var gapY1 = margin + Math.random() * usable;
    var middleThickness = middleMin + Math.random() * (usable - (gapY1 - margin));
    var gapY2 = gapY1 + doubleGap + middleThickness;
    if (gapY2 + doubleGap > h - margin) gapY2 = h - margin - doubleGap;

    var segments = [
      { y0: 0, y1: gapY1 },
      { y0: gapY1 + doubleGap, y1: gapY2 },
      { y0: gapY2 + doubleGap, y1: h }
    ];
    var strawberryInFirstGap = Math.random() < 0.5;
    var strawberryY = strawberryInFirstGap ? gapY1 + doubleGap / 2 : gapY2 + doubleGap / 2;

    mochiPipes.push({
      x: mochiCanvas.width, passed: false, theme: theme,
      segments: segments,
      strawberry: { y: strawberryY, collected: false }
    });
  } else {
    var gapY = margin + Math.random() * (h - margin * 2 - mochiPipeGap);
    mochiPipes.push({
      x: mochiCanvas.width, passed: false, theme: theme,
      segments: [{ y0: 0, y1: gapY }, { y0: gapY + mochiPipeGap, y1: h }],
      strawberry: null
    });
  }
}

function mochiCollides(p) {
  var bx = mochiBird.x, by = mochiBird.y, br = mochiBird.r;
  if (bx + br < p.x || bx - br > p.x + mochiPipeWidth) return false;
  for (var i = 0; i < p.segments.length; i++) {
    var s = p.segments[i];
    if (by - br < s.y1 && by + br > s.y0) return true;
  }
  return false;
}

function mochiCheckStrawberry(p) {
  if (!p.strawberry || p.strawberry.collected) return;
  var dx = mochiBird.x - (p.x + mochiPipeWidth / 2);
  var dy = mochiBird.y - p.strawberry.y;
  var pickupR = mochiPipeWidth * 0.35 + mochiBird.r * 0.6;
  if (dx * dx + dy * dy < pickupR * pickupR) {
    p.strawberry.collected = true;
    mochiScore += 2;
    document.getElementById('mochi-score').textContent = mochiScore;
    mochiPlaySfx('ding');
  }
}

function mochiRoundRect(ctx, x, y, w, h, r) {
  if (h <= 0) return;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function mochiHexToRgb_(hex) {
  var n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function mochiLerpColor_(hexA, hexB, t) {
  var a = mochiHexToRgb_(hexA), b = mochiHexToRgb_(hexB);
  var r = Math.round(a.r + (b.r - a.r) * t);
  var g = Math.round(a.g + (b.g - a.g) * t);
  var bl = Math.round(a.b + (b.b - a.b) * t);
  return 'rgb(' + r + ',' + g + ',' + bl + ')';
}

function mochiDrawBackground(ctx, w, h) {
  var wrapped = mochiBgPos % 3;
  if (wrapped < 0) wrapped += 3;
  var phaseIndex = Math.floor(wrapped);
  var nextIndex = (phaseIndex + 1) % 3;
  var t = wrapped - phaseIndex;

  var from = mochiBgPhases[phaseIndex], to = mochiBgPhases[nextIndex];
  var topColor = mochiLerpColor_(from.top, to.top, t);
  var bottomColor = mochiLerpColor_(from.bottom, to.bottom, t);

  var grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, topColor);
  grad.addColorStop(1, bottomColor);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // stars fade in/out smoothly as the night phase approaches/recedes
  var nightAmount = phaseIndex === 2 ? (1 - t) : (nextIndex === 2 ? t : 0);
  if (nightAmount > 0.02) {
    ctx.fillStyle = 'rgba(255,255,255,' + (0.8 * nightAmount) + ')';
    for (var i = 0; i < 20; i++) {
      var sx = (i * 53) % w;
      var sy = (i * 97) % (h * 0.6);
      ctx.beginPath(); ctx.arc(sx, sy, 1.5, 0, Math.PI * 2); ctx.fill();
    }
  }
  mochiDrawParallax(ctx, w, h, nightAmount);
}

// Soft drifting blobs behind the pipes, scrolling slower than the foreground for a parallax feel.
function mochiDrawParallax(ctx, w, h, nightAmount) {
  var count = 5;
  var span = w * 1.4;
  var alpha = 0.45 - nightAmount * 0.33; // dimmer during the night phase
  ctx.save();
  ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';
  for (var i = 0; i < count; i++) {
    var raw = (i * (span / count)) - (mochiParallaxOffset % span);
    var x = ((raw % span) + span) % span - span * 0.1;
    var y = h * (0.12 + (i % 3) * 0.1);
    var r = 16 + (i % 3) * 9;
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * 0.62, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function mochiDrawPipe(ctx, p, h) {
  ctx.fillStyle = mochiThemeColor[p.theme];
  p.segments.forEach(function (s) {
    mochiRoundRect(ctx, p.x, s.y0, mochiPipeWidth, s.y1 - s.y0, 12);
    ctx.fill();
  });

  if (p.strawberry && !p.strawberry.collected) {
    var bob = Math.sin(Date.now() / 300 + p.x * 0.02) * 3;
    ctx.font = Math.max(16, mochiPipeWidth * 0.5) + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🍓', p.x + mochiPipeWidth / 2, p.strawberry.y + bob);
    ctx.textBaseline = 'alphabetic';
  }
}

function mochiDrawBird(ctx) {
  var b = mochiBird;
  ctx.save();
  ctx.translate(b.x, b.y);
  var angle = Math.max(-0.4, Math.min(0.9, b.vy * 0.05));
  ctx.rotate(angle);
  ctx.scale(b.sx, b.sy);
  ctx.fillStyle = mochiColors[mochiColor];
  ctx.beginPath(); ctx.arc(0, 0, b.r, 0, Math.PI * 2); ctx.fill();
  // rim outline (white + dark) so the mochi always reads clearly against any background phase
  ctx.lineWidth = Math.max(2, b.r * 0.14);
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.stroke();
  ctx.lineWidth = Math.max(1, b.r * 0.05);
  ctx.strokeStyle = 'rgba(90,74,74,0.55)';
  ctx.stroke();
  ctx.restore();
}

function mochiDraw() {
  var ctx = mochiCtx, w = mochiCanvas.width, h = mochiCanvas.height;
  mochiDrawBackground(ctx, w, h);
  mochiPipes.forEach(function (p) { mochiDrawPipe(ctx, p, h); });
  mochiDrawBird(ctx);
}

function mochiGameOver() {
  mochiState = 'gameover';
  cancelAnimationFrame(mochiRAF);
  mochiStopMusic();
  mochiPlaySfx('bonk');

  var isRecord = mochiScore > mochiBest;
  document.getElementById('mochi-result-score').textContent = mochiScore;
  document.getElementById('mochi-newrecord').style.display = isRecord ? 'block' : 'none';
  if (isRecord) {
    mochiPlaySfx('sparkle');
    mochiBest = mochiScore;
    document.getElementById('mochi-best').textContent = mochiBest;
  }
  document.getElementById('mochi-player-name').value = '';
  mochiScoreSaved = false;
  document.getElementById('mochi-result-modal').classList.add('active');
  mochiLoadLeaderboardInto('mochi-result-leaderboard-body');
}

function mochiSaveScore() {
  if (mochiScoreSaved) { toast('Already saved this round'); return; }
  var name = document.getElementById('mochi-player-name').value.trim();
  if (!name) { toast('Enter your name first'); return; }
  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      mochiScoreSaved = true;
      mochiRenderLeaderboard(list, 'mochi-result-leaderboard-body');
      toast('Saved!');
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .submitMochiScore(name, mochiScore);
}

function mochiPause() {
  if (mochiState !== 'playing') return;
  mochiState = 'paused';
  cancelAnimationFrame(mochiRAF);
  mochiStopMusic();
  document.getElementById('mochi-pause-overlay').style.display = 'flex';
}

function mochiResume() {
  if (mochiState !== 'paused') return;
  mochiState = 'playing';
  mochiLastFrameTime = 0;
  document.getElementById('mochi-pause-overlay').style.display = 'none';
  mochiStartMusic();
  mochiRAF = requestAnimationFrame(mochiLoop);
}

function mochiToggleMusic() {
  mochiMusicOn = !mochiMusicOn;
  document.getElementById('mochi-music-btn').textContent = mochiMusicOn ? '♫' : '♪̶';
  if (mochiMusicOn && mochiState === 'playing') mochiStartMusic();
  else mochiStopMusic();
}

/* -- Web Audio SFX + gentle generative lo-fi loop (no external audio files needed) -- */
function mochiEnsureAudio() {
  if (!mochiAudioCtx) {
    try { mochiAudioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* no-op */ }
  }
  if (mochiAudioCtx && mochiAudioCtx.state === 'suspended') mochiAudioCtx.resume();
}

function mochiPlaySfx(type) {
  mochiEnsureAudio();
  if (!mochiAudioCtx) return;
  var ctx = mochiAudioCtx, now = ctx.currentTime;

  if (type === 'whoosh') {
    var wo = ctx.createOscillator(), wg = ctx.createGain();
    wo.type = 'sawtooth';
    wo.frequency.setValueAtTime(200, now);
    wo.frequency.exponentialRampToValueAtTime(600, now + 0.25);
    wg.gain.setValueAtTime(0.001, now);
    wg.gain.exponentialRampToValueAtTime(0.15, now + 0.05);
    wg.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    wo.connect(wg); wg.connect(ctx.destination);
    wo.start(now); wo.stop(now + 0.32);
    return;
  }
  if (type === 'sparkle') {
    [660, 880, 1108, 1320].forEach(function (f, i) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = f;
      o.connect(g); g.connect(ctx.destination);
      var t = now + i * 0.08;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.15, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
      o.start(t); o.stop(t + 0.22);
    });
    return;
  }

  var freq = 440, dur = 0.12, waveType = 'sine', peak = 0.18;
  if (type === 'pop') { freq = 520; dur = 0.08; waveType = 'triangle'; }
  else if (type === 'ding') { freq = 880; dur = 0.18; waveType = 'sine'; }
  else if (type === 'bonk') { freq = 110; dur = 0.25; waveType = 'square'; peak = 0.22; }

  var osc = ctx.createOscillator(), gain = ctx.createGain();
  osc.type = waveType; osc.frequency.value = freq;
  osc.connect(gain); gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(peak, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  osc.start(now); osc.stop(now + dur + 0.02);
}

function mochiPlayMusicNote() {
  if (!mochiAudioCtx || !mochiMusicOn) return;
  var ctx = mochiAudioCtx, now = ctx.currentTime;
  var freq = mochiMusicNotes[Math.floor(Math.random() * mochiMusicNotes.length)] / 2;
  var o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sine'; o.frequency.value = freq;
  o.connect(g); g.connect(ctx.destination);
  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(0.05, now + 0.4);
  g.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);
  o.start(now); o.stop(now + 1.5);
}

function mochiStartMusic() {
  if (!mochiMusicOn) return;
  mochiEnsureAudio();
  if (!mochiAudioCtx) return;
  mochiStopMusic();
  mochiPlayMusicNote();
  mochiMusicTimer = setInterval(mochiPlayMusicNote, 1600);
}

function mochiStopMusic() {
  clearInterval(mochiMusicTimer);
  mochiMusicTimer = null;
}

/* ---------------------------------------------------------------- */
/* ICD LOOKUP                                                         */
/* ---------------------------------------------------------------- */
var icdData = [];
var icdEditingRow = null; // null => adding a new entry; otherwise the sheet row being edited

function icdEscape(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Wraps the first matching occurrence of `query` inside `text` in a <mark>, HTML-escaped safely.
function icdHighlight(text, query) {
  var raw = String(text == null ? '' : text);
  if (!query) return icdEscape(raw);
  var idx = raw.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return icdEscape(raw);
  var before = icdEscape(raw.slice(0, idx));
  var match = icdEscape(raw.slice(idx, idx + query.length));
  var after = icdEscape(raw.slice(idx + query.length));
  return before + '<mark class="icd-highlight">' + match + '</mark>' + after;
}

function openIcd() {
  showView('icd-view');
  document.getElementById('icd-search').value = '';
  renderIcdList(); // shows the "start typing" prompt immediately
  loadIcdData();   // quietly loads data in the background so filtering is instant once they type
}

function loadIcdData() {
  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      icdData = list;
      renderIcdList();
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .getIcdData();
}

function renderIcdList() {
  var query = document.getElementById('icd-search').value.trim().toLowerCase();
  var countEl = document.getElementById('icd-result-count');
  var list = document.getElementById('icd-list');

  // Empty search box → show everything (sorted A→Z by ICD code) instead of asking to type first.
  var filtered = query
    ? icdData.filter(function (item) {
        return String(item.icd).toLowerCase().indexOf(query) !== -1 ||
               String(item.name).toLowerCase().indexOf(query) !== -1;
      })
    : icdData.slice();

  filtered.sort(function (a, b) {
    return String(a.icd).localeCompare(String(b.icd), undefined, { sensitivity: 'base' });
  });

  if (filtered.length === 0) {
    countEl.textContent = '';
    list.innerHTML =
      '<div class="empty-state"><span class="empty-icon">✿</span>No matching diagnosis found' +
      '<br><span style="font-size:13px;opacity:.8;">Try a different ICD code or name.</span></div>';
    return;
  }

  countEl.textContent = filtered.length + (filtered.length === 1 ? ' result' : ' results');
  list.innerHTML = '';
  filtered.forEach(function (item) {
    var card = document.createElement('div');
    card.className = 'icd-card';
    card.innerHTML =
      '<div class="icd-card-top">' +
        '<button class="icd-code-btn" title="Click to copy">' + icdHighlight(item.icd, query) + ' <span class="icd-copy-icon">⧉</span></button>' +
        '<button class="icd-edit-icon-btn" title="Edit">✎</button>' +
      '</div>' +
      '<div class="icd-name">' + icdHighlight(item.name, query) + '</div>' +
      (item.note ? '<div class="icd-note">' + icdEscape(item.note) + '</div>' : '');
    card.querySelector('.icd-code-btn').onclick = function () { icdCopyCode(item.icd); };
    card.querySelector('.icd-edit-icon-btn').onclick = function () { openIcdForm(item); };
    list.appendChild(card);
  });
}

function icdCopyCode(code) {
  navigator.clipboard.writeText(String(code)).then(function () {
    toast('Copied ' + code + ' ✓');
  }).catch(function () {
    toast("Couldn't copy");
  });
}

function openIcdForm(item) {
  icdEditingRow = item ? item.row : null;
  document.getElementById('icd-modal-title').textContent = item ? 'Edit ICD Entry' : 'Add ICD Entry';
  document.getElementById('icd-field-code').value = item ? item.icd : '';
  document.getElementById('icd-field-name').value = item ? item.name : '';
  document.getElementById('icd-field-note').value = item ? item.note : '';
  document.getElementById('icd-modal').classList.add('active');
}

function saveIcdEntry() {
  var code = document.getElementById('icd-field-code').value.trim();
  var name = document.getElementById('icd-field-name').value.trim();
  var note = document.getElementById('icd-field-note').value.trim();
  if (!code || !name) { toast('Enter both ICD code and Name'); return; }

  showLoading();
  var onDone = function (list) {
    hideLoading();
    icdData = list;
    document.getElementById('icd-modal').classList.remove('active');
    renderIcdList();
    toast('Saved!');
  };
  var onFail = function (err) { hideLoading(); toast('Error: ' + err.message); };

  if (icdEditingRow) {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).updateIcdRow(icdEditingRow, code, name, note);
  } else {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).addIcdRow(code, name, note);
  }
}

/* ---------------------------------------------------------------- */
/* EATING TRACKER                                                      */
/* ---------------------------------------------------------------- */
var eatingData = [];
var eatingEditingDay = null;
var eatingYakultSelection = false;

function openEating() {
  showView('eating-view');
  loadEatingData();
}

function loadEatingData() {
  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      eatingData = list;
      renderEatingStats();
      renderEatingCalendar();
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .getEatingData();
}

function renderEatingStats() {
  var yakultTimes = 0;
  var bubbleTimes = 0, bubbleTotal = 0;
  var outTimes = 0, outTotal = 0;
  var totalSpent = 0, daysTracked = 0;

  eatingData.forEach(function (d) {
    if (d.yakultMarked) {
      daysTracked++;
      if (d.yakultYes) yakultTimes++;
    }
    if (d.bubbleTea > 0) { bubbleTimes++; bubbleTotal += d.bubbleTea; }
    if (d.eatingOut > 0) { outTimes++; outTotal += d.eatingOut; }
    totalSpent += d.sum;
  });

  document.getElementById('eating-stat-yakult').textContent =
    yakultTimes + (yakultTimes === 1 ? ' time' : ' times');
  document.getElementById('eating-stat-bubble').textContent =
    bubbleTimes + (bubbleTimes === 1 ? ' time — ' : ' times — ') + formatThousands(bubbleTotal);
  document.getElementById('eating-stat-out').textContent =
    outTimes + (outTimes === 1 ? ' time — ' : ' times — ') + formatThousands(outTotal);
  document.getElementById('eating-stat-total').textContent = formatThousands(totalSpent);
  document.getElementById('eating-stat-days').textContent = daysTracked + ' / 31';
}

function renderEatingCalendar() {
  var grid = document.getElementById('eating-calendar');
  grid.innerHTML = '';
  eatingData.forEach(function (d) {
    var hasData = d.yakultMarked || d.bubbleTea > 0 || d.eatingOut > 0;
    var cell = document.createElement('div');
    cell.className = 'eating-day-cell' + (hasData ? ' has-data' : '');

    var icons = '';
    if (d.yakultYes) icons += '🥛';
    if (d.bubbleTea > 0) icons += '🧋';
    if (d.eatingOut > 0) icons += '🍱';

    cell.innerHTML =
      '<div class="eating-day-num">' + d.day + '</div>' +
      (icons ? '<div class="eating-day-icons">' + icons + '</div>' : '') +
      (hasData ? '<div class="eating-day-sum">' + formatThousands(d.sum) + '</div>' : '');
    cell.onclick = function () { openEatingModal(d.day); };
    grid.appendChild(cell);
  });
}

function selectEatingYakult(val) {
  eatingYakultSelection = val;
  document.getElementById('eating-yakult-yes').classList.toggle('selected', val === true);
  document.getElementById('eating-yakult-no').classList.toggle('selected', val === false);
}

// Strips everything but digits and re-formats the field's own value with "." separators live.
function eatingFormatFieldLive(el) {
  var digits = el.value.replace(/[^\d]/g, '');
  el.value = digits ? formatThousands(Number(digits)) : '';
}

function eatingParseAmount(id) {
  var raw = document.getElementById(id).value.replace(/\./g, '');
  return Number(raw) || 0;
}

function openEatingModal(day) {
  eatingEditingDay = day;
  var entry = eatingData[day - 1];
  document.getElementById('eating-modal-title').textContent = 'Day ' + day;
  selectEatingYakult(entry.yakultMarked ? entry.yakultYes : false);
  document.getElementById('eating-field-bubble').value = entry.bubbleTea ? formatThousands(entry.bubbleTea) : '';
  document.getElementById('eating-field-out').value = entry.eatingOut ? formatThousands(entry.eatingOut) : '';
  updateEatingDailyTotalPreview();
  document.getElementById('eating-modal').classList.add('active');
}

function updateEatingDailyTotalPreview() {
  var b = eatingParseAmount('eating-field-bubble');
  var o = eatingParseAmount('eating-field-out');
  document.getElementById('eating-daily-total').textContent = formatThousands(b + o);
}

function saveEatingDayEntry() {
  var b = eatingParseAmount('eating-field-bubble');
  var o = eatingParseAmount('eating-field-out');

  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      eatingData = list;
      renderEatingStats();
      renderEatingCalendar();
      document.getElementById('eating-modal').classList.remove('active');
      toast('Saved successfully');
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .saveEatingDay(eatingEditingDay, eatingYakultSelection, b, o);
}

function openEatingReset() {
  document.getElementById('eating-reset-modal').classList.add('active');
}

function confirmEatingReset() {
  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      eatingData = list;
      renderEatingStats();
      renderEatingCalendar();
      document.getElementById('eating-reset-modal').classList.remove('active');
      toast('Data has been reset');
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .resetEatingData();
}

/* ---------------------------------------------------------------- */
/* INIT                                                               */
/* ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  scatterFlowers();
  initLogin();
  showScreen('login-screen');
  window.addEventListener('resize', syncFixedHeaderOffsets);

  document.getElementById('nav-home').onclick = function () { goHome('home'); };
  document.getElementById('nav-tools').onclick = function () { goHome('tools'); };
  document.getElementById('nav-games').onclick = function () { goHome('games'); };

  document.getElementById('open-accounts').onclick = openAccountsGate;
  document.getElementById('open-symbols').onclick = loadSymbols;
  document.getElementById('open-saving').onclick = openSaving;
  document.getElementById('open-datediff').onclick = openDateDiff;
  document.getElementById('open-memory').onclick = openMemory;
  document.getElementById('open-mochi').onclick = openMochi;
  document.getElementById('open-icd').onclick = openIcd;

  document.getElementById('accounts-back').onclick = function () { stopSymbolsPolling(); goHome('tools'); };
  document.getElementById('symbols-back').onclick = function () { stopSymbolsPolling(); goHome('tools'); };
  document.getElementById('saving-back').onclick = function () { goHome('tools'); };
  document.getElementById('datediff-back').onclick = function () { goHome('tools'); };
  document.getElementById('memory-back').onclick = function () { memoryStopTimer(); goHome('games'); };
  document.getElementById('memory-newgame').onclick = memoryNewGame;
  document.getElementById('memory-start-btn').onclick = memoryNewGame;
  document.getElementById('memory-result-newgame').onclick = memoryNewGame;
  document.getElementById('memory-save-score').onclick = memorySaveScore;
  document.getElementById('memory-result-close').onclick = function () { document.getElementById('memory-result-modal').classList.remove('active'); };

  document.getElementById('icd-back').onclick = function () { goHome('tools'); };
  document.getElementById('icd-add-btn').onclick = function () { openIcdForm(null); };
  document.getElementById('icd-search').oninput = renderIcdList;
  document.getElementById('icd-save-btn').onclick = saveIcdEntry;
  document.getElementById('icd-modal-close').onclick = function () { document.getElementById('icd-modal').classList.remove('active'); };

  document.getElementById('open-eating').onclick = openEating;
  document.getElementById('eating-back').onclick = function () { goHome('tools'); };
  document.getElementById('eating-reset-btn').onclick = openEatingReset;
  document.getElementById('eating-reset-cancel').onclick = function () { document.getElementById('eating-reset-modal').classList.remove('active'); };
  document.getElementById('eating-reset-close').onclick = function () { document.getElementById('eating-reset-modal').classList.remove('active'); };
  document.getElementById('eating-reset-confirm').onclick = confirmEatingReset;
  document.getElementById('eating-modal-cancel').onclick = function () { document.getElementById('eating-modal').classList.remove('active'); };
  document.getElementById('eating-modal-close').onclick = function () { document.getElementById('eating-modal').classList.remove('active'); };
  document.getElementById('eating-modal-save').onclick = saveEatingDayEntry;
  document.getElementById('eating-yakult-yes').onclick = function () { selectEatingYakult(true); };
  document.getElementById('eating-yakult-no').onclick = function () { selectEatingYakult(false); };
  document.getElementById('eating-field-bubble').oninput = function () { eatingFormatFieldLive(this); updateEatingDailyTotalPreview(); };
  document.getElementById('eating-field-out').oninput = function () { eatingFormatFieldLive(this); updateEatingDailyTotalPreview(); };

  document.getElementById('mochi-back').onclick = function () {
    mochiStopMusic();
    cancelAnimationFrame(mochiRAF);
    mochiState = 'idle';
    goHome('games');
  };
  document.querySelectorAll('.mochi-color-swatch').forEach(function (btn) {
    btn.onclick = function () {
      document.querySelectorAll('.mochi-color-swatch').forEach(function (b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
      mochiColor = btn.dataset.color;
    };
  });
  document.getElementById('mochi-start-btn').onclick = mochiStartGame;
  document.getElementById('mochi-pause-btn').onclick = mochiPause;
  document.getElementById('mochi-resume-btn').onclick = mochiResume;
  document.getElementById('mochi-music-btn').onclick = mochiToggleMusic;
  document.getElementById('mochi-save-score').onclick = mochiSaveScore;
  document.getElementById('mochi-result-newgame').onclick = function () {
    document.getElementById('mochi-result-modal').classList.remove('active');
    mochiStartGame();
  };
  document.getElementById('mochi-result-close').onclick = function () {
    document.getElementById('mochi-result-modal').classList.remove('active');
    mochiShowStartScreen();
  };
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Space' && mochiState === 'playing') { e.preventDefault(); mochiFlap(); }
  });

  document.getElementById('saving-random-btn').onclick = savingRandomize;
  document.getElementById('saving-clear').onclick = savingClearPending;
  document.getElementById('saving-save').onclick = savingSave;
  document.getElementById('saving-reset').onclick = savingReset;

  document.getElementById('datediff-start').onchange = datediffCalc;
  document.getElementById('datediff-end').onchange = datediffCalc;
  document.getElementById('datediff-swap').onclick = datediffSwap;

  document.getElementById('btn-add-type').onclick = function () { openAccountEntryModal(null); };
  document.getElementById('edit-close').onclick = function () { document.getElementById('edit-modal').classList.remove('active'); };
  document.getElementById('edit-save').onclick = saveAccountEntry;

  document.getElementById('btn-open-add-symbol').onclick = openAddSymbol;
  document.getElementById('symbol-add-close').onclick = function () { document.getElementById('symbol-add-modal').classList.remove('active'); };
  document.getElementById('symbol-add-more').onclick = addSymbolRow;
  document.getElementById('symbol-add-save').onclick = saveSymbols;

  document.getElementById('acc-gate-close').onclick = function () { document.getElementById('accounts-modal').classList.remove('active'); };

  document.getElementById('logout-btn').onclick = function () {
    stopSymbolsPolling();
    memoryStopTimer();
    mochiStopMusic();
    cancelAnimationFrame(mochiRAF);
    mochiState = 'idle';
    accountsData = {};
    currentType = null;
    savingPendingDays.forEach(function (day) {
      var cell = savingDayCells[day];
      if (cell) cell.classList.remove('pending');
    });
    savingPendingDays = [];
    goHome('home');
    if (loginPad) { loginPad.reset(); loginPad.clearStatus(); }
    showScreen('login-screen');
  };
});
