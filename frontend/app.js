/* ---------------------------------------------------------------- */
/* FLOWER BACKGROUND                                                  */
/* ---------------------------------------------------------------- */
function scatterFlowers() {
  const field = document.getElementById('flower-field');
  const colors = ['#ffc8dd', '#bfe3ff', '#d8ccff', '#bfead7', '#ffd4b8'];
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
    // Trôi nhẹ nhàng, ngẫu nhiên, mỗi bông một nhịp riêng để không đều tăm tắp.
    el.style.animationDuration = (9 + Math.random() * 10).toFixed(1) + 's';
    el.style.animationDelay = (-Math.random() * 12).toFixed(1) + 's';
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
  'accounts-view': 'personal', 'expense-view': 'personal',
  'symbols-view': 'tools', 'datediff-view': 'tools', 'eating-view': 'tools',
  'qr-view': 'tools', 'converter-view': 'tools',
  'memory-view': 'games', 'mochi-view': 'games', 'minesweeper-view': 'games'
};

// Which function actually "opens" each view (loads its data, etc.) — used to restore
// the right page after a reload. The Personal views (accounts-view, expense-view)
// go through requirePersonal() so a reload can never bypass the password gate.
var VIEW_OPENERS_ = {
  'accounts-view': function () { requirePersonal(loadAccounts); },
  'converter-view': function () { openConverter(); },
  'symbols-view': loadSymbols,
  'datediff-view': openDateDiff,
  'eating-view': openEating,
  'qr-view': openQrCollection,
  'expense-view': function () { requirePersonal(openExpense); },
  'memory-view': openMemory,
  'mochi-view': openMochi,
  'minesweeper-view': openMinesweeper
};

// Remembers where the person currently is, so reloading the page lands back on the
// same view instead of always resetting to Home.
function saveNavState_(view, section) {
  try {
    localStorage.setItem('henlo_nav', JSON.stringify({ view: view, section: section }));
  } catch (e) { /* localStorage unavailable — silently skip, not critical */ }
}

// Keeps BOTH nav surfaces in sync — the mobile drawer's links and the desktop
// dock's links share the ".app-nav-link" class, so one pass covers both.
function setNavActive(section) {
  document.querySelectorAll('.app-nav-link').forEach(function (el) {
    el.classList.toggle('active', el.dataset.navSection === section);
  });
}

/* ---- Mobile nav drawer (tomato icon top-left → slides along as the drawer
   opens, parking itself top-right once fully open; tapping it there closes
   the drawer again, tomato slides back to top-left) ---- */
function openMobileNavDrawer() {
  document.body.classList.add('mobile-nav-open');
  document.getElementById('mobile-nav-drawer').classList.add('open');
  document.getElementById('mobile-nav-scrim').classList.add('active');
}
function closeMobileNavDrawer() {
  document.body.classList.remove('mobile-nav-open');
  document.getElementById('mobile-nav-drawer').classList.remove('open');
  document.getElementById('mobile-nav-scrim').classList.remove('active');
  closeMobileNavSubmenus();
}
function toggleMobileNavDrawer() {
  var isOpen = document.getElementById('mobile-nav-drawer').classList.contains('open');
  if (isOpen) closeMobileNavDrawer(); else openMobileNavDrawer();
}

/* ---- Tools/Games accordion inside the drawer — tap the big item to reveal
   its small items right there, tap a small item to jump straight into that
   tool/game (no need to land on the Tools/Games grid page first). ---- */
function closeMobileNavSubmenus() {
  document.querySelectorAll('.app-nav-submenu').forEach(function (el) {
    el.classList.remove('open');
    el.style.maxHeight = '0px';
  });
  document.querySelectorAll('.app-nav-group-toggle').forEach(function (btn) {
    btn.classList.remove('expanded');
  });
}
function toggleMobileNavSubmenu(section) {
  var submenu = document.querySelector('.app-nav-submenu[data-submenu="' + section + '"]');
  var toggleBtn = document.querySelector('.app-nav-group-toggle[data-nav-section="' + section + '"]');
  if (!submenu || !toggleBtn) return;
  var wasOpen = submenu.classList.contains('open');
  closeMobileNavSubmenus(); // accordion: only one group open at a time
  if (!wasOpen) {
    submenu.classList.add('open');
    submenu.style.maxHeight = submenu.scrollHeight + 'px';
    toggleBtn.classList.add('expanded');
  }
}

// Which opener function each small drawer item ("data-open") jumps to —
// same functions the old Tools/Games cards and desktop dock already use.
var MOBILE_NAV_OPENERS_ = {
  accounts: function () { requirePersonal(loadAccounts); },
  converter: function () { openConverter(); },
  symbols: loadSymbols,
  datediff: openDateDiff,
  eating: openEating,
  qr: openQrCollection,
  expense: function () { requirePersonal(openExpense); },
  memory: openMemory,
  mochi: openMochi,
  minesweeper: openMinesweeper
};

// Controls which part of the Home tab is visible: 'home' = To Do List section only,
// 'tools' = only the Tools cards, 'games' = only the Games cards. Each is exclusive now.
var currentHomeSection_ = 'home';
function showHomeSection(section) {
  // Personal is never shown without the password having been entered this session.
  if (section === 'personal' && !personalUnlocked) section = 'home';
  currentHomeSection_ = section;
  var parts = {
    home: document.querySelector('.home-section'),
    tools: document.querySelector('.content-section.tools'),
    games: document.querySelector('.content-section.games'),
    personal: document.querySelector('.content-section.personal')
  };
  Object.keys(parts).forEach(function (k) {
    if (parts[k]) parts[k].style.display = (k === section) ? '' : 'none';
  });
  if (section === 'home') {
    loadHomeData();
    expenseLoadHomeWidget();
  }
  setNavActive(section);
  saveNavState_('menu-view', section);
}

function showView(id) {
  document.querySelectorAll('.app-view').forEach(function (v) { v.style.display = 'none'; });
  document.getElementById(id).style.display = 'block';
  if (id === 'menu-view') {
    showHomeSection(currentHomeSection_);
  } else {
    setNavActive(NAV_SECTION_MAP_[id] || 'home');
    saveNavState_(id);
  }

  // The Expense tool's own mobile tab bar lives at the body level now (see
  // index.html comment) so it can actually sit flush with the real screen
  // bottom — show it only while expense-view is the active view.
  var expenseTabbar = document.getElementById('expense-mobile-tabbar');
  if (expenseTabbar) expenseTabbar.classList.toggle('visible', id === 'expense-view');

  syncFixedHeaderOffsets();
}

// There's no fixed top navbar anymore — mobile has a small fixed tomato icon
// top-left instead, desktop has a floating bottom dock. Only the mobile icon
// needs page content to leave it room (so it never sits on top of a section
// title); --navbar-h keeps using whatever existing padding-top: var(--navbar-h)
// rule style.css has for this, it just now means "icon height", not "navbar
// height". Desktop needs no top offset (the dock is fixed at the bottom).
function syncFixedHeaderOffsets() {
  var navH = window.innerWidth <= 760 ? 56 : 0;
  document.documentElement.style.setProperty('--navbar-h', navH + 'px');
}

// Goes to the Home tab showing a specific section ('home' | 'tools' | 'games').
// Since there's no per-view back button anymore, this is the ONLY way to leave any
// tool/game view — so it also doubles as a general "cleanup whatever might still be
// running" step (stopping timers/music/polling), regardless of which view you're
// actually leaving. Harmless no-op for anything that wasn't running.
function goHome(section) {
  stopSymbolsPolling();
  memoryStopTimer();
  if (typeof mochiStopMusic === 'function') mochiStopMusic();
  if (typeof mochiRAF !== 'undefined' && mochiRAF) cancelAnimationFrame(mochiRAF);
  if (typeof mochiState !== 'undefined') mochiState = 'idle';
  if (typeof msStopTimer === 'function') msStopTimer();
  showView('menu-view');
  showHomeSection(section);
}

/* ---------------------------------------------------------------- */
/* ACCOUNTS                                                           */
/* ---------------------------------------------------------------- */
var accountsData = {};
var currentType = null;
var rowUid_ = 0; // shared counter for unique dynamic-field names (used by Symbols' Add rows)
var accPad;

/* ---- Personal password gate ----
   One password for the whole Personal area (Account + Expenses). Asked once per
   page load; the server hands back a signed token (valid ~12h) that gas-bridge
   attaches to every request. Nothing is stored in localStorage, so closing the tab
   or reloading asks again. */
var personalUnlocked = false;
var personalAfterUnlock_ = null;

function requirePersonal(fn) {
  if (personalUnlocked) { fn(); return; }
  openPersonalGate(fn);
}

function openPersonalGate(afterFn) {
  stopSymbolsPolling();
  personalAfterUnlock_ = afterFn || null;
  document.getElementById('accounts-modal').classList.add('active');
  accPad = PassCode('acc-gate-boxes', 'acc-gate-pad', function (code, resetFn) {
    showLoading();
    google.script.run
      .withSuccessHandler(function (r) {
        hideLoading();
        if (r && r.ok) {
          personalUnlocked = true;
          window.__personalToken = r.token;
          accPad.showSuccess('Login successful (๑ᵔ⌔ᵔ๑)');
          setTimeout(function () {
            document.getElementById('accounts-modal').classList.remove('active');
            var fn = personalAfterUnlock_; personalAfterUnlock_ = null;
            if (fn) fn();
          }, 550);
        } else if (r && r.lockedSeconds) {
          var mins = Math.max(1, Math.ceil(r.lockedSeconds / 60));
          accPad.showError('Too many tries. Locked for ' + mins + ' more minute' + (mins === 1 ? '' : 's') + ' ʕ´-ก̀ʔᐝ');
          accPad.errorShake();
        } else {
          var left = r && typeof r.attemptsLeft === 'number' ? ' (' + r.attemptsLeft + ' left)' : '';
          accPad.showError('Incorrect password' + left + ' ʕ´-ก̀ʔᐝ');
          accPad.errorShake();
        }
      })
      .withFailureHandler(function (err) { hideLoading(); accPad.showError('Something went wrong ʕ´-ก̀ʔᐝ'); resetFn(); })
      .personalLogin(code);
  }, 'acc-gate-status');
  // Always start from a clean slate — no digits, no leftover status text.
  accPad.reset();
  accPad.clearStatus();
}

// Token expired / rejected by the server → lock again and go home.
window.addEventListener('personal-unauthorized', function () {
  if (!personalUnlocked) return;
  personalUnlocked = false;
  window.__personalToken = null;
  hideLoading();
  toast('Session expired — please log in again');
  goHome('home');
});

function openAccountsGate() { requirePersonal(loadAccounts); }

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
  types = types.slice().sort(function (a, b) { return String(a).localeCompare(String(b), 'vi', { sensitivity: 'base' }); });
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

/* ---- Add/Edit a single account entry (row-level) ---- */
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
      '<option value="animal">animal</option>' +
      '<option value="medium">medium</option>' +
      '<option value="small">small</option>' +
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
/* SHARED: HTML-escape helper (used by Expense, QR, Home to-do, etc.) */
/* ---------------------------------------------------------------- */
function icdEscape(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------------------------------------------------------------- */
/* EATING TRACKER                                                      */
/* ---------------------------------------------------------------- */
var eatingData = [];
var eatingBusy_ = false;

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
  var yes = 0, tracked = 0;
  eatingData.forEach(function (d) {
    if (d.yakultMarked) tracked++;
    if (d.yakultMarked && d.yakultYes) yes++;
  });
  document.getElementById('eating-stat-yakult').textContent = yes + (yes === 1 ? ' time' : ' times');
  document.getElementById('eating-stat-days').textContent = tracked + ' / 31';
}

function eatingStateOf_(d) {
  if (!d.yakultMarked) return null;
  return d.yakultYes ? 'yes' : 'no';
}

function renderEatingCalendar() {
  var grid = document.getElementById('eating-calendar');
  grid.innerHTML = '';
  eatingData.forEach(function (d) {
    var st = eatingStateOf_(d);
    var cell = document.createElement('div');
    cell.className = 'eating-day-cell' + (st ? ' has-data state-' + st : '');
    cell.innerHTML =
      '<div class="eating-day-num">' + d.day + '</div>' +
      (st === 'yes' ? '<div class="eating-day-icons">🥛</div>' : '') +
      (st === 'no' ? '<div class="eating-day-icons eating-day-no">✕</div>' : '');
    cell.onclick = function () { eatingCycleDay(d.day); };
    grid.appendChild(cell);
  });
}

// Tap a day: unmarked → yes → no → unmarked. Updates instantly, then syncs;
// rolls back with a toast if the server call fails.
function eatingCycleDay(day) {
  if (eatingBusy_) return;
  var entry = eatingData[day - 1];
  if (!entry) return;
  var prev = { yakultMarked: entry.yakultMarked, yakultYes: entry.yakultYes };
  var cur = eatingStateOf_(entry);
  var next = cur === null ? 'yes' : (cur === 'yes' ? 'no' : null);
  entry.yakultMarked = next !== null;
  entry.yakultYes = next === 'yes';
  renderEatingStats();
  renderEatingCalendar();
  eatingBusy_ = true;
  google.script.run
    .withSuccessHandler(function (list) {
      eatingBusy_ = false;
      eatingData = list;
      renderEatingStats();
      renderEatingCalendar();
    })
    .withFailureHandler(function (err) {
      eatingBusy_ = false;
      entry.yakultMarked = prev.yakultMarked;
      entry.yakultYes = prev.yakultYes;
      renderEatingStats();
      renderEatingCalendar();
      toast('Error: ' + err.message);
    })
    .saveEatingDay(day, next);
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
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .resetEatingData();
}

/* ---------------------------------------------------------------- */
/* EXPENSE TRACKER                                                     */
/* ---------------------------------------------------------------- */
var EXPENSE_MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var EXPENSE_COLORS = ['#ffc8dd','#ffb3c6','#ffd4b8','#fff0a8','#d9f0a8','#bfead7','#a8e6df','#bfe3ff','#a9c8ff','#d8ccff','#e8c8f5','#e3c6c6'];

var expenseData = null;            // last payload from getExpenseData
var expensePeriod = null;          // 'YYYY-MM' currently viewed
var expenseActiveTab = 'overview'; // overview | calendar | stats | budget | history | categories
var expenseEditingEntryId = null;  // null = adding new
var expenseSelectedDay = null;     // 'YYYY-MM-DD' picked in Calendar tab
var expensePendingDate = null;     // date the Add-Expense modal will save to
var expenseEditingCategoryId = null;
var expenseEditingCategoryBudgetId = null; // category id being budgeted (new or existing)
var expenseConfirmAction = null;   // fn to run when the generic confirm modal says "Yah"
var expenseStatsRange = 'month';   // '7' | '30' | 'month'
var expenseHistoryFilters = { search: '', categoryId: '', walletId: '', amount: '' };
var expenseEditingIncomeId = null;     // null = adding new income
var expenseSavingsTxKind = 'deposit';  // 'deposit' | 'spend'
var expenseEditingSavingsId = null;    // null = adding a new savings entry
var expenseEditingWalletId = null;     // null = adding a new source
var expenseEditingTransferId = null;   // null = adding a new transfer
var expenseLastWallet = null;          // remembered across sessions (per browser) — default source in pickers
try { expenseLastWallet = Number(localStorage.getItem('henlo_last_wallet')) || null; } catch (e) {}
var expenseCategoryReturnToEntry = false; // true when "+ New category" was pressed inside the Add Expense popup

// Dropdowns / chips: categories always alphabetical (Vietnamese-aware).
function expenseSortCategories(cats) {
  return (cats || []).slice().sort(function (a, b) {
    return String(a.name).localeCompare(String(b.name), 'vi', { sensitivity: 'base' });
  });
}
function expenseNormalize(data) {
  data.categories = expenseSortCategories(data.categories);
  data.wallets = (data.wallets || []).slice().sort(function (a, b) {
    return String(a.name).localeCompare(String(b.name), 'vi', { sensitivity: 'base' });
  });
  data.transfers = data.transfers || [];
  data.unassigned = data.unassigned || { balance: 0, count: 0 };
  return data;
}

/* ---- Sources (wallets) helpers ---- */
function expenseWalletById(id) {
  if (id === null || id === undefined) return null;
  return (expenseData.wallets || []).find(function (w) { return String(w.id) === String(id); }) || null;
}
function expenseWalletName(id) { var w = expenseWalletById(id); return w ? w.name : 'No source'; }
// " · Bank" tag for list rows (only when the person actually uses sources)
function expenseWalletTag(id) {
  if (!expenseData || !(expenseData.wallets || []).length) return '';
  var w = expenseWalletById(id);
  return ' · <span class="expense-wallet-chip">' + (w ? icdEscape(w.name) : 'No source') + '</span>';
}
function expenseRememberWallet(id) {
  if (!id) return;
  expenseLastWallet = Number(id);
  try { localStorage.setItem('henlo_last_wallet', String(id)); } catch (e) {}
}
// Fills a <select> with sources (alphabetical). selectedId: preselect (null = the "none" option).
// noneLabel: when given, a first "none" option is added (value '').
function expenseFillWalletSelect(sel, selectedId, noneLabel) {
  var wallets = expenseData.wallets || [];
  sel.innerHTML = '';
  if (noneLabel || !wallets.length) {
    var o = document.createElement('option'); o.value = ''; o.textContent = noneLabel || 'No sources yet'; sel.appendChild(o);
  }
  wallets.forEach(function (w) {
    var opt = document.createElement('option'); opt.value = w.id; opt.textContent = w.name; sel.appendChild(opt);
  });
  var want = '';
  if (selectedId !== undefined && selectedId !== null) want = String(selectedId);
  else if (selectedId === undefined) {   // new entry: default to last used, else first
    var last = expenseLastWallet && expenseWalletById(expenseLastWallet) ? String(expenseLastWallet) : (wallets[0] ? String(wallets[0].id) : '');
    want = last;
  }
  sel.value = want;
  if (sel.value !== want) sel.value = sel.options.length ? sel.options[0].value : '';
}
function expenseSelValue(sel) { return sel.value ? Number(sel.value) : null; }
function expenseVNDate(dateStr) { return dateStr.slice(8, 10) + '/' + dateStr.slice(5, 7); }
function expenseMonthDefaultDate() {
  // Default date for new income/savings entries: today if viewing the current month, otherwise the 1st of the viewed month.
  return expensePeriod === expenseCurrentPeriod() ? expenseTodayStr() : expensePeriod + '-01';
}
// Remaining = money carried over from earlier months + this month's income
//             − this month's expenses − savings deposits that were deducted.
function expenseAvailable() { return (expenseData.carryIn || 0) + expenseData.income; }
function expenseRemaining() {
  return expenseAvailable() - expenseEntriesTotal(expenseData.entries) - (expenseData.savings ? expenseData.savings.monthDeposits : 0);
}

/* ---- amount inputs: live "." thousands-separator formatting ----
   These fields are type="text" + inputmode="numeric" (not type="number",
   which can't display formatted text like "20.000"). expenseWireEvents()
   wires expenseFormatAmountInputLive to their oninput; everywhere else that
   reads or sets one of these fields goes through the two helpers below so
   the dots never leak into a parsed amount or get lost when pre-filling. */
function expenseFormatAmountInputLive(el) {
  var digits = el.value.replace(/\D/g, '');
  el.value = digits ? formatThousands(Number(digits)) : '';
}
function expenseAmountInputValue(el) {
  var digits = String(el.value || '').replace(/\D/g, '');
  return digits ? Number(digits) : 0;
}
function expenseSetAmountInputValue(el, amount) {
  el.value = amount ? formatThousands(Math.round(amount)) : '';
}

function expenseTodayStr() {
  var d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function expenseCurrentPeriod() { return expenseTodayStr().slice(0, 7); }
function expensePeriodLabel(period) {
  var y = period.slice(0, 4), m = Number(period.slice(5, 7));
  return EXPENSE_MONTH_NAMES[m - 1] + ' ' + y;
}
function expenseLastDay(period) {
  var y = Number(period.slice(0, 4)), m = Number(period.slice(5, 7));
  return new Date(y, m, 0).getDate();
}
function expenseFmt(n) { return formatThousands(Math.round(n)) + 'đ'; }
function expenseShort(n) {
  n = Math.round(n);
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000) return Math.round(n / 1000) + 'K';
  return String(n);
}
function expenseColorFor(categoryId) {
  var c = (expenseData && expenseData.categories || []).find(function (x) { return x.id === categoryId; });
  return c ? c.color : '#ccc';
}
function expenseNameFor(categoryId) {
  var c = (expenseData && expenseData.categories || []).find(function (x) { return x.id === categoryId; });
  return c ? c.name : '(no category)';
}
function expenseEntriesTotal(entries) { return entries.reduce(function (s, e) { return s + e.amount; }, 0); }
function expenseShiftPeriod(period, delta) {
  var y = Number(period.slice(0, 4)), m = Number(period.slice(5, 7));
  m += delta;
  while (m > 12) { m -= 12; y++; }
  while (m < 1) { m += 12; y--; }
  return y + '-' + String(m).padStart(2, '0');
}

/* ---- open / load ---- */
function openExpense() {
  showView('expense-view');
  expenseActiveTab = 'overview';
  // Always open on the real current month: a new month = fresh numbers
  // (income/expenses at 0), while savings carry over. Past months stay
  // reachable with the ‹ › arrows.
  loadExpenseData(expenseCurrentPeriod());
}

function loadExpenseData(period) {
  showLoading();
  google.script.run
    .withSuccessHandler(function (data) {
      hideLoading();
      expenseData = expenseNormalize(data);
      expensePeriod = data.period;
      expenseRenderShell();
      expenseRenderActiveTab();
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .getExpenseData(period);
}

function expenseReload() { loadExpenseData(expensePeriod); }

/* ---- tabs / shell ---- */
function expenseRenderShell() {
  document.querySelectorAll('.expense-tab-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.tab === expenseActiveTab);
  });
  document.querySelectorAll('.expense-mobile-tab-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.tab === expenseActiveTab);
  });
  document.querySelectorAll('.expense-panel').forEach(function (p) {
    p.style.display = (p.dataset.panel === expenseActiveTab) ? '' : 'none';
  });
}

function expenseSwitchTab(tab) {
  expenseActiveTab = tab;
  expenseSelectedDay = null;
  expenseRenderShell();
  expenseRenderActiveTab();
}

function expenseRenderActiveTab() {
  if (expenseActiveTab === 'overview') expenseRenderOverview();
  else if (expenseActiveTab === 'calendar') expenseRenderCalendar();
  else if (expenseActiveTab === 'stats') expenseRenderStats();
  else if (expenseActiveTab === 'budget') expenseRenderBudget();
  else if (expenseActiveTab === 'history') expenseRenderHistory();
  else if (expenseActiveTab === 'categories') expenseRenderCategories();
}

function expensePrevMonth() { loadExpenseData(expenseShiftPeriod(expensePeriod, -1)); }
function expenseNextMonth() { loadExpenseData(expenseShiftPeriod(expensePeriod, 1)); }

/* ---- Overview tab ---- */
function expenseRenderOverview() {
  var totalSpent = expenseEntriesTotal(expenseData.entries);
  var sv = expenseData.savings || { name: '', target: 0, balance: 0, monthDeposits: 0, log: [] };
  var remaining = expenseRemaining();
  var used = totalSpent + sv.monthDeposits;
  var available = expenseAvailable();
  var pct = available > 0 ? Math.min(100, (used / available) * 100) : 0;
  var isCurrentMonth = expensePeriod === expenseCurrentPeriod();
  var daysLeft = isCurrentMonth ? (expenseLastDay(expensePeriod) - new Date().getDate()) : 0;
  var todaySpent = isCurrentMonth ? expenseEntriesTotal(expenseData.entries.filter(function (e) { return e.date === expenseTodayStr(); })) : 0;

  document.getElementById('expense-month-label').textContent = expensePeriodLabel(expensePeriod);
  document.getElementById('expense-overview-subline').textContent =
    isCurrentMonth ? ('Today · spent ' + expenseFmt(todaySpent) + ' so far') : (expenseData.entries.length + ' transactions this month');
  document.getElementById('expense-remaining-value').innerHTML = formatThousands(Math.round(remaining)) + '<small>đ</small>';
  document.getElementById('expense-progress-fill').style.width = pct + '%';
  document.getElementById('expense-progress-meta-left').textContent = 'Spent + saved ' + Math.round(pct) + '% of what you have';
  document.getElementById('expense-progress-meta-right').textContent = isCurrentMonth ? (daysLeft + ' days left') : '';
  document.getElementById('expense-income-value').textContent = expenseFmt(expenseData.income);
  document.getElementById('expense-spent-value').textContent = expenseFmt(totalSpent);
  document.getElementById('expense-spent-count').textContent = expenseData.entries.length + (expenseData.entries.length === 1 ? ' entry' : ' entries');
  document.getElementById('expense-saved-value').textContent = expenseFmt(sv.monthDeposits);

  expenseRenderWallets();
  expenseRenderSavings();
  expenseRenderIncomeList();
}

/* ---- Sources card + transfers ---- */
function expenseRenderWallets() {
  var wallets = expenseData.wallets || [];
  var un = expenseData.unassigned || { balance: 0, count: 0 };
  var totalEl = document.getElementById('expense-wallets-total');
  var total = expenseData.walletTotal || 0;
  totalEl.textContent = (total < 0 ? '−' : '') + expenseFmt(Math.abs(total));
  totalEl.classList.toggle('neg', total < 0);
  document.getElementById('expense-transfer-btn').style.display = wallets.length >= 2 ? '' : 'none';

  var list = document.getElementById('expense-wallets-list');
  list.innerHTML = '';
  if (!wallets.length) {
    list.innerHTML = '<div class="expense-wallet-empty">Add your sources (bank, cash, e-wallet…) to see where your money is.</div>';
  }
  wallets.forEach(function (w) {
    var row = document.createElement('div');
    row.className = 'expense-wallet-row';
    row.innerHTML =
      '<span class="expense-wallet-dot" style="background:' + w.color + '"></span>' +
      '<div class="expense-wallet-name">' + icdEscape(w.name) + '</div>' +
      '<div class="expense-wallet-bal' + (w.balance < 0 ? ' neg' : '') + '">' + (w.balance < 0 ? '−' : '') + expenseFmt(Math.abs(w.balance)) + '</div>' +
      '<button class="acc-edit-icon-btn" title="Edit">✎</button>';
    row.querySelector('button').onclick = function () { expenseOpenWalletModal(w); };
    list.appendChild(row);
  });
  if (wallets.length && un.count > 0) {
    var ur = document.createElement('div');
    ur.className = 'expense-wallet-row unassigned';
    ur.innerHTML =
      '<span class="expense-wallet-dot" style="background:#e2dada"></span>' +
      '<div class="expense-wallet-name">Unassigned<small>' + un.count + ' older entr' + (un.count === 1 ? 'y' : 'ies') + ' without a source — edit them to assign</small></div>' +
      '<div class="expense-wallet-bal' + (un.balance < 0 ? ' neg' : '') + '">' + (un.balance < 0 ? '−' : '') + expenseFmt(Math.abs(un.balance)) + '</div>';
    list.appendChild(ur);
  }

  var tl = document.getElementById('expense-transfers-list');
  tl.innerHTML = '';
  var trs = expenseData.transfers || [];
  if (trs.length) {
    var t = document.createElement('div'); t.className = 'expense-transfers-title'; t.textContent = 'Transfers this month'; tl.appendChild(t);
    trs.forEach(function (tr) {
      var row = document.createElement('div');
      row.className = 'expense-history-row';
      row.innerHTML =
        '<div class="expense-history-row-main">' +
          '<div class="expense-history-row-name">' + icdEscape(expenseWalletName(tr.from)) + ' → ' + icdEscape(expenseWalletName(tr.to)) + '</div>' +
          '<div class="expense-history-row-cat">' + expenseVNDate(tr.date) + (tr.note ? ' · ' + icdEscape(tr.note) : '') + '</div>' +
        '</div>' +
        '<div class="expense-history-row-amt">' + expenseFmt(tr.amount) + '</div>' +
        '<button class="acc-edit-icon-btn" title="Edit">✎</button>';
      row.querySelector('button').onclick = function () { expenseOpenTransferModal(tr); };
      tl.appendChild(row);
    });
  }
}

function expenseOpenWalletModal(w) {
  expenseEditingWalletId = w ? w.id : null;
  document.getElementById('expense-wallet-modal-title').textContent = w ? 'Edit Source' : 'Add Source';
  document.getElementById('expense-wallet-name-input').value = w ? w.name : '';
  expenseSetAmountInputValue(document.getElementById('expense-wallet-opening-input'), w ? w.opening : 0);
  var chosen = w ? w.color : EXPENSE_COLORS[(expenseData.wallets || []).length % EXPENSE_COLORS.length];
  var sw = document.getElementById('expense-wallet-color-swatches');
  sw.innerHTML = '';
  EXPENSE_COLORS.forEach(function (color) {
    var dot = document.createElement('div');
    dot.className = 'expense-swatch' + (color === chosen ? ' selected' : '');
    dot.style.background = color;
    dot.onclick = function () {
      sw.querySelectorAll('.expense-swatch').forEach(function (x) { x.classList.remove('selected'); });
      dot.classList.add('selected');
      sw.dataset.chosen = color;
    };
    sw.appendChild(dot);
  });
  sw.dataset.chosen = chosen;
  document.getElementById('expense-wallet-delete-btn').style.display = w ? 'block' : 'none';
  document.getElementById('expense-wallet-modal').classList.add('active');
}
function expenseSaveWallet() {
  var name = document.getElementById('expense-wallet-name-input').value.trim();
  if (!name) { toast('Enter a name'); return; }
  var color = document.getElementById('expense-wallet-color-swatches').dataset.chosen || EXPENSE_COLORS[0];
  var opening = expenseAmountInputValue(document.getElementById('expense-wallet-opening-input'));
  showLoading();
  var onDone = function (data) { hideLoading(); document.getElementById('expense-wallet-modal').classList.remove('active'); expenseApplyData(data); toast('Saved!'); };
  var run = google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail);
  if (expenseEditingWalletId) run.updateExpenseWallet(expenseEditingWalletId, name, color, opening, expensePeriod);
  else run.addExpenseWallet(name, color, opening, expensePeriod);
}
function expenseDeleteWallet() {
  if (!expenseEditingWalletId) return;
  var id = expenseEditingWalletId;
  document.getElementById('expense-wallet-modal').classList.remove('active');
  expenseConfirm('Delete this source?', function () {
    showLoading();
    google.script.run
      .withSuccessHandler(function (data) { hideLoading(); expenseApplyData(data); })
      .withFailureHandler(expenseFail)
      .deleteExpenseWallet(id, expensePeriod);
  });
}

function expenseOpenTransferModal(tr) {
  expenseEditingTransferId = tr ? tr.id : null;
  document.getElementById('expense-transfer-modal-title').textContent = tr ? 'Edit Transfer' : 'Transfer';
  var fromSel = document.getElementById('expense-transfer-from'), toSel = document.getElementById('expense-transfer-to');
  var first = expenseData.wallets[0], second = expenseData.wallets[1];
  var fromDefault = expenseLastWallet && expenseWalletById(expenseLastWallet) ? expenseLastWallet : (first ? first.id : null);
  expenseFillWalletSelect(fromSel, tr ? tr.from : fromDefault);
  var toDefault = (expenseData.wallets.find(function (w) { return String(w.id) !== String(fromDefault); }) || second || {}).id;
  expenseFillWalletSelect(toSel, tr ? tr.to : toDefault);
  expenseSetAmountInputValue(document.getElementById('expense-transfer-amount'), tr ? tr.amount : 0);
  document.getElementById('expense-transfer-date').value = tr ? tr.date : expenseMonthDefaultDate();
  document.getElementById('expense-transfer-note').value = tr ? tr.note : '';
  document.getElementById('expense-transfer-delete-btn').style.display = tr ? 'block' : 'none';
  document.getElementById('expense-transfer-modal').classList.add('active');
}
function expenseSaveTransfer() {
  var from = expenseSelValue(document.getElementById('expense-transfer-from')), to = expenseSelValue(document.getElementById('expense-transfer-to'));
  if (!from || !to) { toast('Pick two sources'); return; }
  if (from === to) { toast('Pick two different sources'); return; }
  var amount = expenseAmountInputValue(document.getElementById('expense-transfer-amount'));
  if (!amount || amount <= 0) { toast('Enter an amount'); return; }
  var date = document.getElementById('expense-transfer-date').value || expenseMonthDefaultDate();
  var note = document.getElementById('expense-transfer-note').value.trim();
  showLoading();
  var onDone = function (data) { hideLoading(); document.getElementById('expense-transfer-modal').classList.remove('active'); expenseApplyData(data); toast('Saved!'); };
  var run = google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail);
  if (expenseEditingTransferId) run.updateExpenseTransfer(expenseEditingTransferId, from, to, amount, note, date, expensePeriod);
  else run.addExpenseTransfer(from, to, amount, note, date, expensePeriod);
}
function expenseDeleteTransfer() {
  if (!expenseEditingTransferId) return;
  var id = expenseEditingTransferId;
  document.getElementById('expense-transfer-modal').classList.remove('active');
  expenseConfirm('Delete this transfer?', function () {
    showLoading();
    google.script.run
      .withSuccessHandler(function (data) { hideLoading(); expenseApplyData(data); })
      .withFailureHandler(expenseFail)
      .deleteExpenseTransfer(id, expensePeriod);
  });
}

/* ---- Income list (irregular income: one row per payment) ---- */
function expenseRenderIncomeList() {
  var list = document.getElementById('expense-income-list');
  list.innerHTML = '';
  var items = expenseData.incomeEntries || [];
  if (!items.length) {
    list.innerHTML = '<div class="empty-state" style="padding:10px 0;">No income recorded this month</div>';
    return;
  }
  items.forEach(function (it) {
    var row = document.createElement('div');
    row.className = 'expense-history-row';
    row.innerHTML =
      '<div class="expense-history-row-main">' +
        '<div class="expense-history-row-name">' + icdEscape(it.source || 'Income') + '</div>' +
        '<div class="expense-history-row-cat">' + expenseVNDate(it.date) + expenseWalletTag(it.walletId) + '</div>' +
      '</div>' +
      '<div class="expense-history-row-amt expense-income-amt">+' + expenseFmt(it.amount) + '</div>' +
      '<button class="acc-edit-icon-btn expense-inc-edit" title="Edit">✎</button>' +
      '<button class="acc-edit-icon-btn expense-inc-del" title="Delete">🗑</button>';
    row.querySelector('.expense-inc-edit').onclick = function () { expenseOpenIncomeModal(it); };
    row.querySelector('.expense-inc-del').onclick = function () {
      expenseConfirm('Delete this income?', function () {
        google.script.run.withSuccessHandler(expenseApplyData).withFailureHandler(expenseFail).deleteExpenseIncomeEntry(it.id, expensePeriod);
      });
    };
    list.appendChild(row);
  });
}

/* ---- Savings card ---- */
function expenseRenderSavings() {
  var sv = expenseData.savings;
  if (!sv) return;
  document.getElementById('expense-savings-name').textContent = sv.name;
  var pct = sv.target > 0 ? Math.max(0, Math.min(100, (sv.balance / sv.target) * 100)) : 0;
  document.getElementById('expense-savings-fill').style.width = pct + '%';
  document.getElementById('expense-savings-meta-left').textContent = sv.target > 0 ? (Math.round(pct) + '% of ' + expenseFmt(sv.target)) : 'Set a target with Edit';
  document.getElementById('expense-savings-meta-right').textContent = sv.target > 0
    ? (sv.balance >= sv.target ? 'Goal reached ✿' : expenseFmt(sv.target - sv.balance) + ' to go') : '';

  var list = document.getElementById('expense-savings-log');
  list.innerHTML = '';
  (sv.log || []).slice(0, 5).forEach(function (l) {
    var row = document.createElement('div');
    row.className = 'expense-history-row';
    var isDep = l.kind === 'deposit';
    row.innerHTML =
      '<div class="expense-history-row-main">' +
        '<div class="expense-history-row-name">' + (isDep ? 'Deposit' : 'Spent from savings') + (l.note ? ' · ' + icdEscape(l.note) : '') + '</div>' +
        '<div class="expense-history-row-cat">' + expenseVNDate(l.date) + (isDep && !l.deduct ? ' · not deducted' : (l.walletId ? expenseWalletTag(l.walletId) : '')) + '</div>' +
      '</div>' +
      '<div class="expense-history-row-amt ' + (isDep ? 'expense-income-amt' : '') + '">' + (isDep ? '+' : '−') + expenseFmt(l.amount) + '</div>' +
      '<button class="acc-edit-icon-btn expense-sv-edit" title="Edit">✎</button>' +
      '<button class="acc-edit-icon-btn expense-sv-del" title="Delete">🗑</button>';
    row.querySelector('.expense-sv-edit').onclick = function () { expenseOpenSavingsTxModal(l.kind, l); };
    row.querySelector('.expense-sv-del').onclick = function () {
      expenseConfirm('Delete this savings entry?', function () {
        google.script.run.withSuccessHandler(expenseApplyData).withFailureHandler(expenseFail).deleteExpenseSavingsLog(l.id, expensePeriod);
      });
    };
    list.appendChild(row);
  });
}

function expenseOpenSavingsGoalModal() {
  var sv = expenseData.savings;
  document.getElementById('expense-savings-name-input').value = sv ? sv.name : '';
  expenseSetAmountInputValue(document.getElementById('expense-savings-target-input'), sv ? sv.target : 0);
  document.getElementById('expense-savings-goal-modal').classList.add('active');
}
function expenseSaveSavingsGoal() {
  var name = document.getElementById('expense-savings-name-input').value.trim();
  if (!name) { toast('Enter a name'); return; }
  var target = expenseAmountInputValue(document.getElementById('expense-savings-target-input'));
  showLoading();
  google.script.run
    .withSuccessHandler(function (data) { hideLoading(); document.getElementById('expense-savings-goal-modal').classList.remove('active'); expenseApplyData(data); })
    .withFailureHandler(expenseFail)
    .saveExpenseSavingsGoal(name, target, expensePeriod);
}

function expenseOpenSavingsTxModal(kind, item) {
  expenseSavingsTxKind = kind;
  expenseEditingSavingsId = item ? item.id : null;
  document.getElementById('expense-savings-tx-title').textContent =
    (item ? 'Edit ' : '') + (kind === 'deposit' ? (item ? 'deposit' : 'Deposit to savings') : (item ? 'spend' : 'Spend from savings'));
  expenseSetAmountInputValue(document.getElementById('expense-savings-tx-amount'), item ? item.amount : 0);
  document.getElementById('expense-savings-tx-note').value = item ? item.note : '';
  document.getElementById('expense-savings-tx-date').value = item ? item.date : expenseMonthDefaultDate();
  // "Deduct from this month's balance" only makes sense for deposits; default ON for new ones.
  document.getElementById('expense-savings-tx-deduct-row').style.display = kind === 'deposit' ? '' : 'none';
  document.getElementById('expense-savings-tx-deduct').checked = item ? item.deduct !== false : true;
  document.getElementById('expense-savings-tx-wallet-caption').textContent = kind === 'deposit' ? 'Take from source' : 'Return to source';
  expenseFillWalletSelect(document.getElementById('expense-savings-tx-wallet'), item ? item.walletId : undefined,
    kind === 'deposit' ? 'No source' : 'None (money not returned to a source)');
  expenseSavingsTxToggleWallet();
  document.getElementById('expense-savings-tx-modal').classList.add('active');
}
// A deposit that is NOT deducted is money already in the fund — it doesn't touch any source.
function expenseSavingsTxToggleWallet() {
  var show = expenseSavingsTxKind === 'spend' || document.getElementById('expense-savings-tx-deduct').checked;
  document.getElementById('expense-savings-tx-wallet-row').style.display = show ? '' : 'none';
}
function expenseSaveSavingsTx() {
  var amount = expenseAmountInputValue(document.getElementById('expense-savings-tx-amount'));
  if (!amount || amount <= 0) { toast('Enter an amount'); return; }
  if (!expenseEditingSavingsId && expenseSavingsTxKind === 'spend' && expenseData.savings && amount > expenseData.savings.balance) { toast('Not enough savings'); return; }
  var date = document.getElementById('expense-savings-tx-date').value || expenseMonthDefaultDate();
  var note = document.getElementById('expense-savings-tx-note').value.trim();
  var deduct = document.getElementById('expense-savings-tx-deduct').checked;
  var walletId = (expenseSavingsTxKind === 'spend' || deduct) ? expenseSelValue(document.getElementById('expense-savings-tx-wallet')) : null;
  expenseRememberWallet(walletId);
  showLoading();
  var onDone = function (data) { hideLoading(); document.getElementById('expense-savings-tx-modal').classList.remove('active'); expenseApplyData(data); toast('Saved!'); };
  var run = google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail);
  if (expenseEditingSavingsId) run.updateExpenseSavingsLog(expenseEditingSavingsId, amount, note, date, deduct, expensePeriod, walletId);
  else run.addExpenseSavingsLog(expenseSavingsTxKind, amount, note, date, expensePeriod, deduct, walletId);
}

/* ---- Calendar tab ---- */
function expenseRenderCalendar() {
  document.getElementById('expense-cal-month-label').textContent = expensePeriodLabel(expensePeriod);
  var grid = document.getElementById('expense-cal-grid');
  grid.innerHTML = '';
  ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].forEach(function (d) {
    var h = document.createElement('div');
    h.className = 'expense-cal-head';
    h.textContent = d;
    grid.appendChild(h);
  });

  var y = Number(expensePeriod.slice(0, 4)), m = Number(expensePeriod.slice(5, 7));
  var firstWeekday = (new Date(y, m - 1, 1).getDay() + 6) % 7; // 0=Mon
  var daysInMonth = expenseLastDay(expensePeriod);
  var totalsByDay = {};
  expenseData.entries.forEach(function (e) {
    totalsByDay[e.date] = (totalsByDay[e.date] || 0) + e.amount;
  });

  for (var i = 0; i < firstWeekday; i++) {
    var blank = document.createElement('div');
    blank.className = 'expense-cal-cell empty';
    grid.appendChild(blank);
  }
  for (var day = 1; day <= daysInMonth; day++) {
    var dateStr = expensePeriod + '-' + String(day).padStart(2, '0');
    var cell = document.createElement('div');
    cell.className = 'expense-cal-cell' + (totalsByDay[dateStr] ? ' has-spend' : '') + (dateStr === expenseSelectedDay ? ' selected' : '') + (dateStr === expenseTodayStr() ? ' is-today' : '');
    cell.innerHTML = '<span class="expense-cal-day">' + day + '</span>' + (totalsByDay[dateStr] ? '<span class="expense-cal-amt">' + expenseShort(totalsByDay[dateStr]) + '</span>' : '');
    cell.onclick = function (ds) { return function () { expenseOpenDay(ds); }; }(dateStr);
    grid.appendChild(cell);
  }

  var monthTotal = expenseEntriesTotal(expenseData.entries);
  var daysWithSpend = Object.keys(totalsByDay).length;
  document.getElementById('expense-cal-total').textContent = expenseFmt(monthTotal);
  document.getElementById('expense-cal-days-count').textContent = daysWithSpend + (daysWithSpend === 1 ? ' day' : ' days') + ' with spending';

  expenseRenderDayDetail();
}

function expenseOpenDay(dateStr) {
  expenseSelectedDay = (expenseSelectedDay === dateStr) ? null : dateStr;
  expenseRenderCalendar();
}

function expenseRenderDayDetail() {
  var panel = document.getElementById('expense-day-detail');
  if (!expenseSelectedDay) { panel.style.display = 'none'; return; }
  panel.style.display = '';
  var dayEntries = expenseData.entries.filter(function (e) { return e.date === expenseSelectedDay; });
  var d = new Date(expenseSelectedDay + 'T00:00:00');
  var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];
  document.getElementById('expense-day-title').textContent = weekday + ', ' + expenseSelectedDay.slice(8,10) + '/' + expenseSelectedDay.slice(5,7) + '/' + expenseSelectedDay.slice(0,4);
  document.getElementById('expense-day-total').textContent = expenseFmt(expenseEntriesTotal(dayEntries));
  var list = document.getElementById('expense-day-list');
  list.innerHTML = '';
  dayEntries.forEach(function (e) {
    var row = document.createElement('div');
    row.className = 'expense-day-row';
    row.innerHTML =
      '<span class="expense-dot" style="background:' + expenseColorFor(e.categoryId) + '"></span>' +
      '<div class="expense-day-row-main"><div class="expense-day-row-name">' + icdEscape(e.note || expenseNameFor(e.categoryId)) + '</div>' +
      '<div class="expense-day-row-cat">' + icdEscape(expenseNameFor(e.categoryId)) + '</div></div>' +
      '<div class="expense-day-row-amt">' + expenseFmt(e.amount) + '</div>';
    row.onclick = function (entry) { return function () { expenseOpenEntryModal(entry); }; }(e);
    list.appendChild(row);
  });
  document.getElementById('expense-day-add-btn').onclick = function () { expenseOpenEntryModal(null, expenseSelectedDay); };
}

/* ---- Stats tab ---- */
function expenseSetStatsRange(range) {
  expenseStatsRange = range;
  expenseRenderStats();
}

function expenseRenderStats() {
  document.getElementById('expense-stats-month-label').textContent = expensePeriodLabel(expensePeriod);
  var totalSpent = expenseEntriesTotal(expenseData.entries);
  var isCurrentMonth = expensePeriod === expenseCurrentPeriod();
  var elapsedDays = isCurrentMonth ? new Date().getDate() : expenseLastDay(expensePeriod);

  document.getElementById('expense-stats-total').textContent = expenseFmt(totalSpent);
  document.getElementById('expense-stats-income').textContent = expenseFmt(expenseData.income);
  document.getElementById('expense-stats-remaining').textContent = expenseFmt(expenseRemaining());
  document.getElementById('expense-stats-count').textContent = expenseData.entries.length;
  document.getElementById('expense-stats-avg').textContent = expenseFmt(elapsedDays ? totalSpent / elapsedDays : 0);

  var byCat = {};
  expenseData.entries.forEach(function (e) { byCat[e.categoryId] = (byCat[e.categoryId] || 0) + e.amount; });
  var rows = Object.keys(byCat).map(function (cid) { return { categoryId: Number(cid), amount: byCat[cid] }; });
  rows.sort(function (a, b) { return b.amount - a.amount; });

  var wrap = document.getElementById('expense-stats-by-category');
  wrap.innerHTML = '';
  if (!rows.length) {
    wrap.innerHTML = '<div class="empty-state"><span class="empty-icon">✿</span>No expenses yet this month</div>';
  }
  rows.forEach(function (r) {
    var pct = totalSpent ? Math.round((r.amount / totalSpent) * 100) : 0;
    var row = document.createElement('div');
    row.className = 'expense-stat-row';
    row.innerHTML =
      '<span class="expense-dot" style="background:' + expenseColorFor(r.categoryId) + '"></span>' +
      '<span class="expense-stat-name">' + icdEscape(expenseNameFor(r.categoryId)) + '</span>' +
      '<div class="expense-stat-bar"><div class="expense-stat-bar-fill" style="width:' + pct + '%;background:' + expenseColorFor(r.categoryId) + '"></div></div>' +
      '<span class="expense-stat-pct">' + pct + '%</span>' +
      '<span class="expense-stat-amt">' + expenseFmt(r.amount) + '</span>';
    wrap.appendChild(row);
  });

  document.querySelectorAll('.expense-range-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.range === expenseStatsRange); });
  expenseDrawTrendChart();
}

function expenseDrawTrendChart() {
  var canvas = document.getElementById('expense-trend-canvas');
  if (!canvas) return;
  var rect = canvas.getBoundingClientRect();
  var dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  var w = rect.width, h = rect.height;
  ctx.clearRect(0, 0, w, h);

  var daysInMonth = expenseLastDay(expensePeriod);
  var totalsByDay = {};
  expenseData.entries.forEach(function (e) { totalsByDay[e.date] = (totalsByDay[e.date] || 0) + e.amount; });

  var n = expenseStatsRange === '7' ? 7 : (expenseStatsRange === '30' ? 30 : daysInMonth);
  n = Math.min(n, daysInMonth);
  var points = [];
  for (var day = daysInMonth - n + 1; day <= daysInMonth; day++) {
    if (day < 1) continue;
    var ds = expensePeriod + '-' + String(day).padStart(2, '0');
    points.push({ day: day, value: totalsByDay[ds] || 0 });
  }

  var max = Math.max.apply(null, points.map(function (p) { return p.value; }).concat([1]));
  max = Math.ceil(max / 100000) * 100000 || 100000;
  var padL = 48, padB = 22, padT = 10, padR = 10;
  var plotW = w - padL - padR, plotH = h - padT - padB;

  ctx.strokeStyle = 'rgba(154,143,138,0.25)';
  ctx.fillStyle = '#9a8f8a';
  ctx.font = '11px Nunito, sans-serif';
  [0, 0.5, 1].forEach(function (f) {
    var y = padT + plotH * (1 - f);
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke();
    ctx.fillText(expenseShort(max * f), 4, y + 4);
  });

  if (points.length > 1) {
    var stepX = plotW / (points.length - 1);
    ctx.beginPath();
    points.forEach(function (p, i) {
      var x = padL + i * stepX, y = padT + plotH * (1 - p.value / max);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.lineTo(padL + (points.length - 1) * stepX, padT + plotH);
    ctx.lineTo(padL, padT + plotH);
    ctx.closePath();
    ctx.fillStyle = 'rgba(232,137,159,0.18)';
    ctx.fill();

    ctx.beginPath();
    points.forEach(function (p, i) {
      var x = padL + i * stepX, y = padT + plotH * (1 - p.value / max);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#e8899f';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

/* ---- Budget tab ---- */
function expenseRenderBudget() {
  document.getElementById('expense-budget-month-label').textContent = expensePeriodLabel(expensePeriod);
  var totalSpent = expenseEntriesTotal(expenseData.entries);
  var pct = expenseData.budgetOverall > 0 ? Math.min(100, (totalSpent / expenseData.budgetOverall) * 100) : 0;
  var remaining = expenseData.budgetOverall - totalSpent;

  document.getElementById('expense-budget-overall-value').textContent = expenseFmt(expenseData.budgetOverall);
  document.getElementById('expense-budget-repeat-badge').style.display = (expenseData.budgetOverall > 0 && expenseData.budgetOverallRepeat) ? '' : 'none';
  document.getElementById('expense-budget-progress-fill').style.width = pct + '%';
  document.getElementById('expense-budget-used-pct').textContent = 'Used · ' + Math.round(pct) + '%';
  document.getElementById('expense-budget-remaining').textContent = expenseFmt(Math.max(0, remaining));

  var hintEl = document.getElementById('expense-budget-hint');
  var isCurrentMonth = expensePeriod === expenseCurrentPeriod();
  if (expenseData.budgetOverall > 0 && isCurrentMonth) {
    var daysLeft = Math.max(1, expenseLastDay(expensePeriod) - new Date().getDate() + 1);
    if (pct >= 100) { hintEl.textContent = "You've gone over budget this month."; hintEl.className = 'expense-hint over'; }
    else if (pct >= 90) { hintEl.textContent = "Almost at your limit — maybe slow down a little."; hintEl.className = 'expense-hint warn'; }
    else { hintEl.textContent = daysLeft + ' days left, about ' + expenseFmt(remaining / daysLeft) + '/day keeps you comfortable.'; hintEl.className = 'expense-hint'; }
    hintEl.style.display = '';
  } else { hintEl.style.display = 'none'; }

  var byCat = {};
  expenseData.entries.forEach(function (e) { byCat[e.categoryId] = (byCat[e.categoryId] || 0) + e.amount; });

  var wrap = document.getElementById('expense-budget-by-category');
  wrap.innerHTML = '';
  expenseData.categoryBudgets.slice().sort(function (x, y) {
    return expenseNameFor(x.categoryId).localeCompare(expenseNameFor(y.categoryId), 'vi', { sensitivity: 'base' });
  }).forEach(function (b) {
    var spent = byCat[b.categoryId] || 0;
    var p = b.amount > 0 ? Math.min(100, (spent / b.amount) * 100) : 0;
    var row = document.createElement('div');
    row.className = 'expense-budget-cat-card';
    row.innerHTML =
      '<div class="expense-budget-cat-top">' +
        '<div class="expense-budget-cat-name"><span class="expense-dot" style="background:' + expenseColorFor(b.categoryId) + '"></span>' + icdEscape(expenseNameFor(b.categoryId)) + (b.repeat ? ' <span class="expense-repeat-badge" title="Repeats every month">↻</span>' : '') + '</div>' +
        '<div class="expense-budget-cat-nums">' + formatThousands(spent) + ' / ' + formatThousands(b.amount) + 'đ</div>' +
        '<button class="acc-edit-icon-btn expense-edit-cat-budget" title="Edit">✎</button>' +
        '<button class="acc-edit-icon-btn expense-del-cat-budget" title="Remove limit">🗑</button>' +
      '</div>' +
      '<div class="expense-progress-track"><div class="expense-progress-fill-sm" style="width:' + p + '%;background:' + (p >= 100 ? '#e8899f' : expenseColorFor(b.categoryId)) + '"></div></div>' +
      '<div class="expense-budget-cat-remain">' + (p >= 100 ? 'Over budget' : expenseFmt(b.amount - spent) + ' left') + '</div>';
    row.querySelector('.expense-edit-cat-budget').onclick = function () { expenseOpenCategoryBudgetModal(b.categoryId, b.amount, b.repeat); };
    row.querySelector('.expense-del-cat-budget').onclick = function () { expenseConfirm('Remove the budget limit for "' + expenseNameFor(b.categoryId) + '"?', function () {
      google.script.run.withSuccessHandler(expenseApplyData).withFailureHandler(expenseFail).deleteExpenseCategoryBudget(expensePeriod, b.categoryId);
    }); };
    wrap.appendChild(row);
  });

  var addWrap = document.getElementById('expense-budget-add-row');
  var budgeted = expenseData.categoryBudgets.map(function (b) { return b.categoryId; });
  var available = expenseData.categories.filter(function (c) { return budgeted.indexOf(c.id) === -1; });
  addWrap.innerHTML = '';
  if (available.length) {
    var btn = document.createElement('button');
    btn.className = 'pill-btn expense-add-cat-budget-btn';
    btn.textContent = '+ Add category budget';
    btn.onclick = function () { expenseOpenCategoryBudgetModal(null, 0); };
    addWrap.appendChild(btn);
  }
}

function expenseOpenCategoryBudgetModal(categoryId, amount, repeat) {
  expenseEditingCategoryBudgetId = categoryId;
  document.getElementById('expense-cat-budget-repeat-checkbox').checked = !!repeat;
  var sel = document.getElementById('expense-cat-budget-select');
  var budgeted = expenseData.categoryBudgets.map(function (b) { return b.categoryId; });
  if (categoryId === null) {
    sel.style.display = '';
    sel.innerHTML = '';
    expenseData.categories.filter(function (c) { return budgeted.indexOf(c.id) === -1; }).forEach(function (c) {
      var opt = document.createElement('option'); opt.value = c.id; opt.textContent = c.name; sel.appendChild(opt);
    });
  } else {
    sel.style.display = 'none';
  }
  document.getElementById('expense-cat-budget-label').textContent = categoryId ? expenseNameFor(categoryId) : '';
  document.getElementById('expense-cat-budget-label').style.display = categoryId ? '' : 'none';
  expenseSetAmountInputValue(document.getElementById('expense-cat-budget-amount'), amount);
  document.getElementById('expense-category-budget-modal').classList.add('active');
}

function expenseSaveCategoryBudget() {
  var categoryId = expenseEditingCategoryBudgetId;
  if (categoryId === null) {
    var sel = document.getElementById('expense-cat-budget-select');
    if (!sel.value) { toast('Pick a category'); return; }
    categoryId = Number(sel.value);
  }
  var amount = expenseAmountInputValue(document.getElementById('expense-cat-budget-amount'));
  if (!amount || amount <= 0) { toast('Enter a budget amount'); return; }
  showLoading();
  google.script.run
    .withSuccessHandler(function (data) { hideLoading(); document.getElementById('expense-category-budget-modal').classList.remove('active'); expenseApplyData(data); })
    .withFailureHandler(expenseFail)
    .setExpenseCategoryBudget(expensePeriod, categoryId, amount, document.getElementById('expense-cat-budget-repeat-checkbox').checked);
}

function expenseOpenOverallBudgetModal() {
  expenseSetAmountInputValue(document.getElementById('expense-budget-amount-input'), expenseData.budgetOverall);
  document.getElementById('expense-budget-repeat-checkbox').checked = !!expenseData.budgetOverallRepeat;
  document.getElementById('expense-budget-modal').classList.add('active');
}
function expenseSaveOverallBudget() {
  var amount = expenseAmountInputValue(document.getElementById('expense-budget-amount-input'));
  showLoading();
  google.script.run
    .withSuccessHandler(function (data) { hideLoading(); document.getElementById('expense-budget-modal').classList.remove('active'); expenseApplyData(data); })
    .withFailureHandler(expenseFail)
    .setExpenseBudgetOverall(expensePeriod, amount, document.getElementById('expense-budget-repeat-checkbox').checked);
}

/* ---- Income (one row per payment: amount + source + date) ---- */
function expenseOpenIncomeModal(item) {
  expenseEditingIncomeId = item ? item.id : null;
  document.getElementById('expense-income-modal-title').textContent = item ? 'Edit Income' : 'Add Income';
  expenseSetAmountInputValue(document.getElementById('expense-income-amount-input'), item ? item.amount : 0);
  document.getElementById('expense-income-source-input').value = item ? item.source : '';
  document.getElementById('expense-income-date-input').value = item ? item.date : expenseMonthDefaultDate();
  var incSel = document.getElementById('expense-income-wallet');
  expenseFillWalletSelect(incSel, item ? item.walletId : undefined, (item && item.walletId == null && (expenseData.wallets || []).length) ? 'No source (unassigned)' : null);
  document.getElementById('expense-income-modal').classList.add('active');
}
function expenseSaveIncome() {
  var amount = expenseAmountInputValue(document.getElementById('expense-income-amount-input'));
  if (!amount || amount <= 0) { toast('Enter an amount'); return; }
  var source = document.getElementById('expense-income-source-input').value.trim();
  var date = document.getElementById('expense-income-date-input').value || expenseMonthDefaultDate();
  var walletId = expenseSelValue(document.getElementById('expense-income-wallet'));
  expenseRememberWallet(walletId);
  showLoading();
  var onDone = function (data) { hideLoading(); document.getElementById('expense-income-modal').classList.remove('active'); expenseApplyData(data); toast('Saved!'); };
  if (expenseEditingIncomeId) {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail).updateExpenseIncomeEntry(expenseEditingIncomeId, amount, source, date, expensePeriod, walletId);
  } else {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail).addExpenseIncomeEntry(amount, source, date, walletId);
  }
}

/* ---- History tab ---- */
function expenseRenderHistory() {
  document.getElementById('expense-history-month-label').textContent = expensePeriodLabel(expensePeriod);
  var catSel = document.getElementById('expense-history-category-filter');
  var catSig = expenseData.categories.map(function (c) { return c.id + ':' + c.name; }).join('|');
  if (catSel.dataset.built !== catSig) {
    catSel.innerHTML = '<option value="">All categories</option>';
    expenseData.categories.forEach(function (c) {
      var opt = document.createElement('option'); opt.value = c.id; opt.textContent = c.name; catSel.appendChild(opt);
    });
    catSel.value = expenseHistoryFilters.categoryId || '';
    catSel.dataset.built = catSig;
  }

  var walSel = document.getElementById('expense-history-wallet-filter');
  var walSig = (expenseData.wallets || []).map(function (w) { return w.id + ':' + w.name; }).join('|');
  walSel.style.display = (expenseData.wallets || []).length ? '' : 'none';
  if (walSel.dataset.built !== walSig) {
    walSel.innerHTML = '<option value="">All sources</option>';
    (expenseData.wallets || []).forEach(function (w) {
      var opt = document.createElement('option'); opt.value = w.id; opt.textContent = w.name; walSel.appendChild(opt);
    });
    var optNone = document.createElement('option'); optNone.value = 'none'; optNone.textContent = 'No source'; walSel.appendChild(optNone);
    walSel.value = expenseHistoryFilters.walletId || '';
    if (walSel.value !== (expenseHistoryFilters.walletId || '')) { walSel.value = ''; expenseHistoryFilters.walletId = ''; }
    walSel.dataset.built = walSig;
  }

  var q = expenseHistoryFilters.search.toLowerCase();
  var filtered = expenseData.entries.filter(function (e) {
    if (expenseHistoryFilters.walletId === 'none' && e.walletId != null) return false;
    if (expenseHistoryFilters.walletId && expenseHistoryFilters.walletId !== 'none' && String(e.walletId) !== String(expenseHistoryFilters.walletId)) return false;
    if (q && icdEscape(e.note).toLowerCase().indexOf(q) === -1 && expenseNameFor(e.categoryId).toLowerCase().indexOf(q) === -1) return false;
    if (expenseHistoryFilters.categoryId && String(e.categoryId) !== String(expenseHistoryFilters.categoryId)) return false;
    if (expenseHistoryFilters.amount === 'lt100') return e.amount < 100000;
    if (expenseHistoryFilters.amount === '100to500') return e.amount >= 100000 && e.amount <= 500000;
    if (expenseHistoryFilters.amount === 'gt500') return e.amount > 500000;
    return true;
  });

  var byDate = {};
  var order = [];
  filtered.forEach(function (e) {
    if (!byDate[e.date]) { byDate[e.date] = []; order.push(e.date); }
    byDate[e.date].push(e);
  });

  var list = document.getElementById('expense-history-list');
  list.innerHTML = '';
  if (!order.length) {
    list.innerHTML = '<div class="empty-state"><span class="empty-icon">✿</span>No matching expenses</div>';
    return;
  }
  order.forEach(function (date) {
    var head = document.createElement('div');
    head.className = 'expense-history-date-head';
    var d = new Date(date + 'T00:00:00');
    var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];
    head.innerHTML = '<span>' + weekday + ', ' + date.slice(8,10) + '/' + date.slice(5,7) + '</span><span>' + expenseFmt(expenseEntriesTotal(byDate[date])) + '</span>';
    list.appendChild(head);

    byDate[date].forEach(function (e) {
      var row = document.createElement('div');
      row.className = 'expense-history-row';
      row.innerHTML =
        '<div class="expense-history-row-main">' +
          '<div class="expense-history-row-name">' + icdEscape(e.note || expenseNameFor(e.categoryId)) + '</div>' +
          '<div class="expense-history-row-cat"><span class="expense-dot" style="background:' + expenseColorFor(e.categoryId) + '"></span>' + icdEscape(expenseNameFor(e.categoryId)) + expenseWalletTag(e.walletId) + '</div>' +
        '</div>' +
        '<div class="expense-history-row-amt">' + expenseFmt(e.amount) + '</div>' +
        '<button class="acc-edit-icon-btn expense-hist-edit" title="Edit">✎</button>' +
        '<button class="acc-edit-icon-btn expense-hist-del" title="Delete">🗑</button>';
      row.querySelector('.expense-hist-edit').onclick = function () { expenseOpenEntryModal(e); };
      row.querySelector('.expense-hist-del').onclick = function () {
        expenseConfirm('Delete this expense?', function () {
          google.script.run.withSuccessHandler(expenseApplyData).withFailureHandler(expenseFail).deleteExpenseEntry(e.id, expensePeriod);
        });
      };
      list.appendChild(row);
    });
  });
}

/* ---- Categories tab ---- */
function expenseRenderCategories() {
  var usage = {};
  expenseData.entries.forEach(function (e) { usage[e.categoryId] = (usage[e.categoryId] || 0) + 1; });

  var list = document.getElementById('expense-category-list');
  list.innerHTML = '';
  if (!expenseData.categories.length) {
    list.innerHTML = '<div class="empty-state"><span class="empty-icon">✿</span>No categories yet — add your first one below</div>';
  }
  expenseData.categories.forEach(function (c) {
    var row = document.createElement('div');
    row.className = 'expense-category-row';
    row.innerHTML =
      '<span class="expense-dot lg" style="background:' + c.color + '"></span>' +
      '<span class="expense-category-row-name">' + icdEscape(c.name) + '</span>' +
      '<span class="expense-category-row-usage">' + (usage[c.id] ? (usage[c.id] + (usage[c.id] === 1 ? ' entry' : ' entries') + ' this month') : 'Unused') + '</span>' +
      '<button class="acc-edit-icon-btn expense-cat-edit" title="Edit">✎</button>' +
      '<button class="acc-edit-icon-btn expense-cat-del" title="Delete">🗑</button>';
    row.querySelector('.expense-cat-edit').onclick = function () { expenseOpenCategoryModal(c); };
    row.querySelector('.expense-cat-del').onclick = function () {
      expenseConfirm('Delete category "' + c.name + '"?', function () {
        google.script.run
          .withSuccessHandler(function (cats) { expenseData.categories = expenseSortCategories(cats); expenseRenderCategories(); toast('Deleted'); })
          .withFailureHandler(function () { toast("Can't delete — this category still has expenses"); })
          .deleteExpenseCategory(c.id);
      });
    };
    list.appendChild(row);
  });
}

function expenseOpenCategoryModal(cat) {
  expenseEditingCategoryId = cat ? cat.id : null;
  document.getElementById('expense-category-modal-title').textContent = cat ? 'Edit Category' : 'Add Category';
  document.getElementById('expense-category-name-input').value = cat ? cat.name : '';
  var chosen = cat ? cat.color : EXPENSE_COLORS[0];
  var sw = document.getElementById('expense-category-color-swatches');
  sw.innerHTML = '';
  EXPENSE_COLORS.forEach(function (color) {
    var dot = document.createElement('div');
    dot.className = 'expense-swatch' + (color === chosen ? ' selected' : '');
    dot.style.background = color;
    dot.onclick = function () {
      sw.querySelectorAll('.expense-swatch').forEach(function (s) { s.classList.remove('selected'); });
      dot.classList.add('selected');
      sw.dataset.chosen = color;
    };
    sw.appendChild(dot);
  });
  sw.dataset.chosen = chosen;
  document.getElementById('expense-category-modal').classList.add('active');
}

function expenseSaveCategory() {
  var name = document.getElementById('expense-category-name-input').value.trim();
  if (!name) { toast('Enter a category name'); return; }
  var color = document.getElementById('expense-category-color-swatches').dataset.chosen || EXPENSE_COLORS[0];
  showLoading();
  var idsBefore = expenseData.categories.map(function (c) { return c.id; });
  var onDone = function (cats) {
    hideLoading();
    expenseData.categories = expenseSortCategories(cats);
    document.getElementById('expense-category-modal').classList.remove('active');
    expenseRenderCategories();
    if (expenseCategoryReturnToEntry) {
      // "+ New category" was picked inside the Add Expense popup: refresh its dropdown and pick the new one.
      expenseCategoryReturnToEntry = false;
      var created = expenseData.categories.find(function (c) { return idsBefore.indexOf(c.id) === -1; });
      expenseRenderEntryCategorySelect(created ? created.id : null);
    }
    toast('Saved!');
  };
  if (expenseEditingCategoryId) {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail).updateExpenseCategory(expenseEditingCategoryId, name, color);
  } else {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail).addExpenseCategory(name, color);
  }
}

/* ---- Add / Edit expense entry modal ---- */
function expenseOpenEntryModal(entry, presetDate) {
  expenseEditingEntryId = entry ? entry.id : null;
  document.getElementById('expense-entry-modal-title').textContent = entry ? 'Edit Expense' : 'Add Expense';
  expenseSetAmountInputValue(document.getElementById('expense-amount-input'), entry ? entry.amount : 0);

  expenseRenderEntryCategorySelect(entry ? entry.categoryId : null);

  expenseFillWalletSelect(document.getElementById('expense-entry-wallet'), entry ? entry.walletId : undefined,
    (entry && entry.walletId == null && (expenseData.wallets || []).length) ? 'No source (unassigned)' : null);
  expensePendingDate = entry ? entry.date : (presetDate || expenseTodayStr());
  expenseUpdateDateButtons();
  document.getElementById('expense-note-input').value = entry ? entry.note : '';
  document.getElementById('expense-entry-save-btn').textContent = entry ? 'Save Changes' : 'Add Expense';
  document.getElementById('expense-entry-modal').classList.add('active');
}

// Category dropdown inside the Add Expense popup (alphabetical). Starts on a
// "— Pick a category —" placeholder so the choice is always deliberate; the last
// option "+ New category" opens the Category modal right where you need it.
var EXPENSE_NEW_CATEGORY_OPT = '__new__';
function expenseRenderEntryCategorySelect(selectedId) {
  var sel = document.getElementById('expense-entry-category');
  sel.innerHTML = '';
  var ph = document.createElement('option'); ph.value = ''; ph.textContent = '— Pick a category —'; sel.appendChild(ph);
  expenseData.categories.forEach(function (c) {
    var opt = document.createElement('option'); opt.value = c.id; opt.textContent = c.name; sel.appendChild(opt);
  });
  var add = document.createElement('option'); add.value = EXPENSE_NEW_CATEGORY_OPT; add.textContent = '+ New category'; sel.appendChild(add);
  var want = selectedId ? String(selectedId) : '';
  sel.value = want;
  if (sel.value !== want) sel.value = '';
  sel.dataset.prev = sel.value;
}
function expenseOnEntryCategoryChange() {
  var sel = document.getElementById('expense-entry-category');
  if (sel.value === EXPENSE_NEW_CATEGORY_OPT) {
    sel.value = sel.dataset.prev || '';   // stays on the old pick if the Category modal is cancelled
    expenseCategoryReturnToEntry = true;
    expenseOpenCategoryModal(null);
    return;
  }
  sel.dataset.prev = sel.value;
}

function expenseSetQuickAmount(v) {
  var input = document.getElementById('expense-amount-input');
  expenseSetAmountInputValue(input, expenseAmountInputValue(input) + v);
}

function expensePickCustomDate(value) {
  if (!value) return;
  expensePendingDate = value;
  expenseUpdateDateButtons();
}
function expenseUpdateDateButtons() {
  document.getElementById('expense-date-custom-input').value = expensePendingDate;
  var d = new Date(expensePendingDate + 'T00:00:00');
  var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];
  document.getElementById('expense-date-display').textContent = weekday + ', ' + expensePendingDate.slice(8,10) + '/' + expensePendingDate.slice(5,7) + '/' + expensePendingDate.slice(0,4);
}

function expenseSaveEntry() {
  var amount = expenseAmountInputValue(document.getElementById('expense-amount-input'));
  if (!amount || amount <= 0) { toast('Enter an amount'); return; }
  var categoryId = Number(document.getElementById('expense-entry-category').value);
  if (!categoryId) { toast('Pick a category'); return; }
  var note = document.getElementById('expense-note-input').value.trim();
  var date = expensePendingDate;
  var walletId = expenseSelValue(document.getElementById('expense-entry-wallet'));
  expenseRememberWallet(walletId);

  showLoading();
  var onDone = function (data) {
    hideLoading();
    document.getElementById('expense-entry-modal').classList.remove('active');
    expenseApplyData(data);
    toast('Saved!');
  };
  if (expenseEditingEntryId) {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail).updateExpenseEntry(expenseEditingEntryId, amount, categoryId, note, date, expensePeriod, walletId);
  } else {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(expenseFail).addExpenseEntry(amount, categoryId, note, date, walletId);
  }
}

/* ---- shared helpers ---- */
function expenseApplyData(data) {
  // addExpenseEntry may return data for a DIFFERENT period (if a custom date
  // was picked outside the currently viewed month) — follow it either way.
  expenseData = expenseNormalize(data);
  expensePeriod = data.period;
  expenseRenderShell();
  expenseRenderActiveTab();
}
function expenseFail(err) { hideLoading(); toast('Error: ' + err.message); }

function expenseConfirm(message, onYes) {
  document.getElementById('expense-confirm-message').textContent = message;
  expenseConfirmAction = onYes;
  document.getElementById('expense-confirm-modal').classList.add('active');
}

/* ---- Home widget ---- */
function expenseLoadHomeWidget() {
  var el = document.getElementById('home-expense-widget-value');
  if (!el) return;
  google.script.run
    .withSuccessHandler(function (r) { el.textContent = formatThousands(Math.round(r.total)) + 'đ'; })
    .withFailureHandler(function () { el.textContent = '—'; })
    .getExpenseTodayTotal();
}
function expenseOpenFromHomeWidget() { requirePersonal(openExpense); }

/* ---- static event wiring (called once, from DOMContentLoaded) ---- */
function expenseWireEvents() {
  document.querySelectorAll('.expense-amount-field').forEach(function (el) {
    el.oninput = function () { expenseFormatAmountInputLive(el); };
  });
  document.querySelectorAll('.expense-tab-btn, .expense-mobile-tab-btn').forEach(function (b) {
    b.onclick = function () { expenseSwitchTab(b.dataset.tab); };
  });
  document.querySelectorAll('.expense-month-prev').forEach(function (b) { b.onclick = expensePrevMonth; });
  document.querySelectorAll('.expense-month-next').forEach(function (b) { b.onclick = expenseNextMonth; });
  document.querySelectorAll('.expense-range-btn').forEach(function (b) {
    b.onclick = function () { expenseSetStatsRange(b.dataset.range); };
  });
  document.querySelectorAll('.expense-quick-amt-btn').forEach(function (b) {
    b.onclick = function () { expenseSetQuickAmount(Number(b.dataset.amount)); };
  });

  document.getElementById('open-expense').onclick = function () { requirePersonal(openExpense); };
  document.getElementById('home-expense-widget').onclick = expenseOpenFromHomeWidget;

  document.getElementById('expense-income-add-link').onclick = function () { expenseOpenIncomeModal(null); };
  document.getElementById('expense-income-add-btn').onclick = function () { expenseOpenIncomeModal(null); };
  document.getElementById('expense-savings-edit-link').onclick = expenseOpenSavingsGoalModal;
  document.getElementById('expense-savings-deposit-btn').onclick = function () { expenseOpenSavingsTxModal('deposit'); };
  document.getElementById('expense-savings-spend-btn').onclick = function () { expenseOpenSavingsTxModal('spend'); };
  document.getElementById('expense-savings-goal-close').onclick = function () { document.getElementById('expense-savings-goal-modal').classList.remove('active'); };
  document.getElementById('expense-savings-goal-cancel').onclick = function () { document.getElementById('expense-savings-goal-modal').classList.remove('active'); };
  document.getElementById('expense-savings-goal-save').onclick = expenseSaveSavingsGoal;
  document.getElementById('expense-savings-tx-close').onclick = function () { document.getElementById('expense-savings-tx-modal').classList.remove('active'); };
  document.getElementById('expense-savings-tx-cancel').onclick = function () { document.getElementById('expense-savings-tx-modal').classList.remove('active'); };
  document.getElementById('expense-savings-tx-save').onclick = expenseSaveSavingsTx;
  document.getElementById('expense-overview-add-btn').onclick = function () { expenseOpenEntryModal(null); };
  document.getElementById('expense-view-stats-link').onclick = function () { expenseSwitchTab('stats'); };
  document.getElementById('expense-day-close-btn').onclick = function () { expenseOpenDay(expenseSelectedDay); };
  document.getElementById('expense-budget-edit-btn').onclick = expenseOpenOverallBudgetModal;
  document.getElementById('expense-new-category-btn').onclick = function () { expenseOpenCategoryModal(null); };
  document.getElementById('expense-mobile-add-btn').onclick = function () { expenseOpenEntryModal(null); };

  document.getElementById('expense-entry-category').onchange = expenseOnEntryCategoryChange;
  document.getElementById('expense-date-custom-input').onchange = function () { expensePickCustomDate(this.value); };
  document.getElementById('expense-date-custom-input').oninput = function () { expensePickCustomDate(this.value); };

  document.getElementById('expense-entry-modal-close').onclick = function () { document.getElementById('expense-entry-modal').classList.remove('active'); };
  document.getElementById('expense-entry-cancel-btn').onclick = function () { document.getElementById('expense-entry-modal').classList.remove('active'); };
  document.getElementById('expense-entry-save-btn').onclick = expenseSaveEntry;

  document.getElementById('expense-income-modal-close').onclick = function () { document.getElementById('expense-income-modal').classList.remove('active'); };
  document.getElementById('expense-income-cancel-btn').onclick = function () { document.getElementById('expense-income-modal').classList.remove('active'); };
  document.getElementById('expense-income-save-btn').onclick = expenseSaveIncome;

  document.getElementById('expense-budget-modal-close').onclick = function () { document.getElementById('expense-budget-modal').classList.remove('active'); };
  document.getElementById('expense-budget-cancel-btn').onclick = function () { document.getElementById('expense-budget-modal').classList.remove('active'); };
  document.getElementById('expense-budget-save-btn').onclick = expenseSaveOverallBudget;

  document.getElementById('expense-catbudget-modal-close').onclick = function () { document.getElementById('expense-category-budget-modal').classList.remove('active'); };
  document.getElementById('expense-catbudget-cancel-btn').onclick = function () { document.getElementById('expense-category-budget-modal').classList.remove('active'); };
  document.getElementById('expense-catbudget-save-btn').onclick = expenseSaveCategoryBudget;

  document.getElementById('expense-category-modal-close').onclick = function () { expenseCategoryReturnToEntry = false; document.getElementById('expense-category-modal').classList.remove('active'); };
  document.getElementById('expense-category-cancel-btn').onclick = function () { expenseCategoryReturnToEntry = false; document.getElementById('expense-category-modal').classList.remove('active'); };
  document.getElementById('expense-category-save-btn').onclick = expenseSaveCategory;

  document.getElementById('expense-confirm-cancel-btn').onclick = function () { document.getElementById('expense-confirm-modal').classList.remove('active'); };
  document.getElementById('expense-confirm-yes-btn').onclick = function () {
    document.getElementById('expense-confirm-modal').classList.remove('active');
    if (expenseConfirmAction) expenseConfirmAction();
  };

  document.getElementById('expense-history-search').oninput = function () {
    expenseHistoryFilters.search = this.value;
    expenseRenderHistory();
  };
  document.getElementById('expense-history-category-filter').onchange = function () {
    expenseHistoryFilters.categoryId = this.value;
    expenseRenderHistory();
  };
  document.getElementById('expense-history-wallet-filter').onchange = function () {
    expenseHistoryFilters.walletId = this.value;
    expenseRenderHistory();
  };
  document.getElementById('expense-wallet-add-btn').onclick = function () { expenseOpenWalletModal(null); };
  document.getElementById('expense-transfer-btn').onclick = function () { expenseOpenTransferModal(null); };
  document.getElementById('expense-wallet-modal-close').onclick = function () { document.getElementById('expense-wallet-modal').classList.remove('active'); };
  document.getElementById('expense-wallet-cancel-btn').onclick = function () { document.getElementById('expense-wallet-modal').classList.remove('active'); };
  document.getElementById('expense-wallet-save-btn').onclick = expenseSaveWallet;
  document.getElementById('expense-wallet-delete-btn').onclick = expenseDeleteWallet;
  document.getElementById('expense-transfer-modal-close').onclick = function () { document.getElementById('expense-transfer-modal').classList.remove('active'); };
  document.getElementById('expense-transfer-cancel-btn').onclick = function () { document.getElementById('expense-transfer-modal').classList.remove('active'); };
  document.getElementById('expense-transfer-save-btn').onclick = expenseSaveTransfer;
  document.getElementById('expense-transfer-delete-btn').onclick = expenseDeleteTransfer;
  document.getElementById('expense-savings-tx-deduct').onchange = expenseSavingsTxToggleWallet;
  document.getElementById('expense-history-amount-filter').onchange = function () {
    expenseHistoryFilters.amount = this.value;
    expenseRenderHistory();
  };
}

// If the app stays open past midnight on the 1st: when it comes back to the
// foreground while viewing "the old current month", jump to the new month.
document.addEventListener('visibilitychange', function () {
  if (document.hidden || !expenseData) return;
  var view = document.getElementById('expense-view');
  if (!view || view.style.display === 'none') return;
  if (expenseData.currentPeriod && expenseData.currentPeriod !== expenseCurrentPeriod() && expensePeriod === expenseData.currentPeriod) {
    loadExpenseData(expenseCurrentPeriod());
  }
});

/* ---------------------------------------------------------------- */
/* HOME — TO DO LIST                                                   */
/* ---------------------------------------------------------------- */
var homeData = [];          // [{ row, checked, todolist, deadline }]
var homeEditingRow = null;  // null = không có dòng nào đang sửa | 'new' = dòng vừa Add chưa lưu | <rowNumber> = đang sửa dòng đó

function loadHomeData() {
  google.script.run
    .withSuccessHandler(function (list) {
      homeData = list;
      homeEditingRow = null;
      renderHomeList();
    })
    .withFailureHandler(function (err) { toast('Error: ' + err.message); })
    .getHomeData();
}

// 'yyyy-MM-dd' (giá trị input date) -> 'dd/mm/yyyy' để hiển thị.
function homeFormatDeadline(dateStr) {
  if (!dateStr) return '';
  var parts = String(dateStr).split('-');
  if (parts.length !== 3) return dateStr;
  return parts[2] + '/' + parts[1] + '/' + parts[0];
}

function homeOpenAdd() {
  if (homeEditingRow !== null) { toast('Lưu dòng đang sửa trước đã ✿'); return; }
  homeData.unshift({ row: null, checked: false, todolist: '', deadline: '' });
  homeEditingRow = 'new';
  renderHomeList();
  var input = document.querySelector('.todo-item.editing .todo-content-input');
  if (input) input.focus();
}

function homeOpenEdit(item) {
  if (homeEditingRow !== null) { toast('Lưu dòng đang sửa trước đã ✿'); return; }
  homeEditingRow = item.row;
  renderHomeList();
  var input = document.querySelector('.todo-item.editing .todo-content-input');
  if (input) input.focus();
}

// Huỷ chỉnh sửa: nếu là dòng Add mới chưa lưu thì bỏ hẳn dòng đó, nếu là dòng có sẵn thì chỉ đóng ô nhập.
function homeCancelEdit() {
  if (homeEditingRow === 'new') homeData.shift();
  homeEditingRow = null;
  renderHomeList();
}

function homeToggleCheck(item) {
  var next = !item.checked;
  item.checked = next; // optimistic — animation gạch ngang chạy ngay, không cần chờ server
  renderHomeList();
  google.script.run
    .withSuccessHandler(function (list) { homeData = list; })
    .withFailureHandler(function (err) {
      item.checked = !next;
      renderHomeList();
      toast('Error: ' + err.message);
    })
    .toggleHomeCheck(item.row, next);
}

var homeSaving_ = false;

function homeSaveItem(item) {
  if (homeSaving_) return; // đang có 1 lượt lưu chạy rồi -> bỏ qua lượt gọi thêm
  var editingEl = document.querySelector('.todo-item.editing');
  if (!editingEl) return;
  var content = editingEl.querySelector('.todo-content-input').value.trim();
  var deadline = editingEl.querySelector('.todo-deadline-input').value;
  if (!content) { toast('Nhập nội dung việc cần làm đã ✿'); return; }

  homeSaving_ = true;

  var onDone = function (list) {
    hideLoading();
    homeSaving_ = false;
    homeData = list;
    homeEditingRow = null;
    renderHomeList();
  };
  var onFail = function (err) {
    hideLoading();
    homeSaving_ = false;
    toast('Error: ' + err.message);
  };

  showLoading();
  if (item.row === null) {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).addHomeItem(content, deadline);
  } else {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).updateHomeItem(item.row, content, deadline);
  }
}

function homeConfirmReset() {
  document.getElementById('home-reset-modal').classList.remove('active');
  google.script.run
    .withSuccessHandler(function (list) {
      homeData = list;
      homeEditingRow = null;
      renderHomeList();
    })
    .withFailureHandler(function (err) { toast('Error: ' + err.message); })
    .resetHomeData();
}

function renderHomeList() {
  var container = document.getElementById('home-todo-list');
  if (!container) return;
  container.innerHTML = '';

  if (homeData.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="empty-icon">✿</span>Chưa có việc nào cả, thêm mới thôi!</div>';
    return;
  }

  homeData.forEach(function (item) {
    var isEditing = homeEditingRow !== null &&
      ((homeEditingRow === 'new' && item.row === null) || homeEditingRow === item.row);

    var el = document.createElement('div');
    el.className = 'todo-item' + (item.checked ? ' checked' : '') + (isEditing ? ' editing' : '');

    if (isEditing) {
      el.innerHTML =
        '<div class="todo-edit-row">' +
          '<input type="text" class="todo-content-input" placeholder="Nhập việc cần làm..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' +
          '<input type="date" class="todo-deadline-input">' +
          '<button class="todo-cancel-btn" title="Huỷ">✕</button>' +
          '<button class="todo-save-btn pill-btn">Save</button>' +
        '</div>';
      var contentInput = el.querySelector('.todo-content-input');
      var deadlineInput = el.querySelector('.todo-deadline-input');
      contentInput.value = item.todolist || '';
      deadlineInput.value = item.deadline || '';
      contentInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') homeSaveItem(item); });
      el.querySelector('.todo-save-btn').onclick = function () { homeSaveItem(item); };
      el.querySelector('.todo-cancel-btn').onclick = homeCancelEdit;
    } else {
      el.innerHTML =
        '<div class="todo-check' + (item.checked ? ' checked' : '') + '" title="Đánh dấu hoàn thành"></div>' +
        '<span class="todo-content-text">' + icdEscape(item.todolist || '(chưa có nội dung)') + '</span>' +
        (item.deadline ? '<span class="todo-deadline">' + homeFormatDeadline(item.deadline) + '</span>' : '') +
        '<button class="todo-edit-btn acc-edit-icon-btn" title="Edit">✎</button>';
      el.querySelector('.todo-check').onclick = function () { homeToggleCheck(item); };
      el.querySelector('.todo-edit-btn').onclick = function () { homeOpenEdit(item); };
    }

    container.appendChild(el);
  });
}

/* ---------------------------------------------------------------- */
/* MINESWEEPER                                                        */
/* ---------------------------------------------------------------- */
var MS_CONFIG = {
  easy:   { cols: 9,  rows: 9,  mines: 5,  safe: true },
  normal: { cols: 16, rows: 16, mines: 20, safe: true },
  hard:   { cols: 16, rows: 20, mines: 50, safe: false }
};

var msDifficulty = 'easy';
var msRows = 0, msCols = 0, msMineCount = 0, msSafeFirstClick = true;
var msBoard = [];       // [row][col] = { mine, revealed, flagged, adjacent }
var msCellEls = [];     // [row][col] = DOM element, built once per game
var msMinesPlaced = false;
var msMode = 'open';    // 'open' | 'flag' — for the mobile OPEN/FLAG toggle
var msState = 'idle';   // idle | playing | won | lost
var msFlagCount = 0;
var msRevealedSafeCount = 0;
var msTotalSafeCells = 0;
var msTimerInterval = null;
var msTimerStarted = false;
var msStartTime = null;
var msElapsedSeconds = 0;
var msScoreSaved = false;

function openMinesweeper() {
  showView('minesweeper-view');
  msShowStartScreen();
}

function msShowStartScreen() {
  msStopTimer();
  msState = 'idle';
  document.getElementById('ms-start-screen').style.display = 'flex';
  document.getElementById('ms-game-wrap').style.display = 'none';
  msLoadBestTime();
}

function msSelectDifficulty(diff) {
  msDifficulty = diff;
  document.querySelectorAll('.ms-diff-btn').forEach(function (b) {
    b.classList.toggle('selected', b.dataset.difficulty === diff);
  });
  msLoadBestTime();
}

function msLoadBestTime() {
  var el = document.getElementById('ms-best-time-value');
  el.textContent = '--:--';
  google.script.run
    .withSuccessHandler(function (list) {
      el.textContent = (list && list.length) ? msFormatTime(list[0].time) : 'No record';
    })
    .withFailureHandler(function () { el.textContent = '--:--'; })
    .getMinesweeperLeaderboard(msDifficulty);
}

function msFormatTime(totalSeconds) {
  var m = Math.floor(totalSeconds / 60);
  var s = totalSeconds % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

function msSetMode(mode) {
  msMode = mode;
  document.getElementById('ms-mode-open').classList.toggle('selected', mode === 'open');
  document.getElementById('ms-mode-flag').classList.toggle('selected', mode === 'flag');
}

function msStartGame() {
  document.getElementById('ms-win-modal').classList.remove('active');
  document.getElementById('ms-lose-modal').classList.remove('active');
  document.getElementById('ms-start-screen').style.display = 'none';
  document.getElementById('ms-game-wrap').style.display = 'block';

  var cfg = MS_CONFIG[msDifficulty];
  msRows = cfg.rows; msCols = cfg.cols; msMineCount = cfg.mines; msSafeFirstClick = cfg.safe;
  msMinesPlaced = false;
  msTimerStarted = false;
  msFlagCount = 0;
  msRevealedSafeCount = 0;
  msTotalSafeCells = msRows * msCols - msMineCount;
  msScoreSaved = false;
  msState = 'playing';
  msSetMode('open');
  msStopTimer();

  msBoard = [];
  for (var r = 0; r < msRows; r++) {
    var row = [];
    for (var c = 0; c < msCols; c++) row.push({ mine: false, revealed: false, flagged: false, adjacent: 0 });
    msBoard.push(row);
  }

  // Hard mode has no safe first click — place mines right away (no exclusion zone).
  if (!msSafeFirstClick) {
    msPlaceMines(-1, -1);
    msMinesPlaced = true;
  }

  document.getElementById('ms-mines-left').textContent = msMineCount;
  document.getElementById('ms-timer').textContent = '00:00';
  msElapsedSeconds = 0;

  msRenderBoard();
}

function msRenderBoard() {
  var boardEl = document.getElementById('ms-board');
  boardEl.innerHTML = '';
  boardEl.style.gridTemplateColumns = 'repeat(' + msCols + ', 1fr)';
  msCellEls = [];
  for (var r = 0; r < msRows; r++) {
    var rowEls = [];
    for (var c = 0; c < msCols; c++) {
      var cell = document.createElement('div');
      cell.className = 'ms-cell';
      cell.onclick = (function (rr, cc) { return function () { msHandleCellClick(rr, cc); }; })(r, c);
      cell.oncontextmenu = (function (rr, cc) { return function (e) { e.preventDefault(); msToggleFlag(rr, cc); }; })(r, c);
      boardEl.appendChild(cell);
      rowEls.push(cell);
    }
    msCellEls.push(rowEls);
  }
}

function msHandleCellClick(r, c) {
  if (msState !== 'playing') return;
  if (msMode === 'flag') msToggleFlag(r, c);
  else msOpenCell(r, c);
}

function msToggleFlag(r, c) {
  if (msState !== 'playing') return;
  var cell = msBoard[r][c];
  if (cell.revealed) return;
  cell.flagged = !cell.flagged;
  msFlagCount += cell.flagged ? 1 : -1;
  document.getElementById('ms-mines-left').textContent = msMineCount - msFlagCount;
  msRenderCell(r, c);
  msPlaySfx(cell.flagged ? 'flag' : 'unflag');
}

function msOpenCell(r, c) {
  var cell = msBoard[r][c];
  if (cell.revealed || cell.flagged) return;

  if (!msTimerStarted) { msTimerStarted = true; msStartTimer(); }
  if (!msMinesPlaced) { msPlaceMines(r, c); msMinesPlaced = true; }

  cell = msBoard[r][c];
  if (cell.mine) {
    msPlaySfx('lose');
    msRevealAllMines();
    msGameOver(false);
    return;
  }

  msPlaySfx('dig');
  msFloodReveal(r, c);

  if (msRevealedSafeCount >= msTotalSafeCells) msGameOver(true);
}

// Places mines anywhere except (optionally) a 3x3 zone centered on the first click,
// so Easy/Normal's very first move can never be an instant loss. Then computes each
// safe cell's adjacent-mine count.
function msPlaceMines(excludeR, excludeC) {
  var cells = [];
  for (var r = 0; r < msRows; r++) {
    for (var c = 0; c < msCols; c++) {
      var inSafeZone = msSafeFirstClick && excludeR >= 0 &&
        Math.abs(r - excludeR) <= 1 && Math.abs(c - excludeC) <= 1;
      if (!inSafeZone) cells.push([r, c]);
    }
  }
  for (var i = cells.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = cells[i]; cells[i] = cells[j]; cells[j] = tmp;
  }
  cells.slice(0, msMineCount).forEach(function (pos) { msBoard[pos[0]][pos[1]].mine = true; });

  for (var r2 = 0; r2 < msRows; r2++) {
    for (var c2 = 0; c2 < msCols; c2++) {
      if (msBoard[r2][c2].mine) continue;
      var count = 0;
      for (var dr = -1; dr <= 1; dr++) {
        for (var dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          var nr = r2 + dr, nc = c2 + dc;
          if (nr >= 0 && nr < msRows && nc >= 0 && nc < msCols && msBoard[nr][nc].mine) count++;
        }
      }
      msBoard[r2][c2].adjacent = count;
    }
  }
}

// Reveals the clicked cell and, if it's a 0, ripples outward to reveal the whole
// connected empty region — one "layer" (BFS depth) at a time with a small delay,
// so a big open area animates in like a gentle ripple instead of popping instantly.
function msFloodReveal(startR, startC) {
  var visited = {};
  var layers = [];
  var queue = [[startR, startC, 0]];
  visited[startR + '_' + startC] = true;

  while (queue.length) {
    var item = queue.shift();
    var r = item[0], c = item[1], depth = item[2];
    if (!layers[depth]) layers[depth] = [];
    layers[depth].push([r, c]);

    if (msBoard[r][c].adjacent === 0) {
      for (var dr = -1; dr <= 1; dr++) {
        for (var dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          var nr = r + dr, nc = c + dc;
          if (nr < 0 || nr >= msRows || nc < 0 || nc >= msCols) continue;
          var key = nr + '_' + nc;
          if (visited[key]) continue;
          var ncell = msBoard[nr][nc];
          if (ncell.mine || ncell.flagged || ncell.revealed) continue;
          visited[key] = true;
          queue.push([nr, nc, depth + 1]);
        }
      }
    }
  }

  layers.forEach(function (layerCells, depth) {
    setTimeout(function () {
      layerCells.forEach(function (pos) {
        var r = pos[0], c = pos[1];
        var cell = msBoard[r][c];
        if (cell.revealed) return;
        cell.revealed = true;
        msRevealedSafeCount++;
        msRenderCell(r, c);
      });
    }, depth * 35);
  });
}

function msRevealAllMines() {
  for (var r = 0; r < msRows; r++) {
    for (var c = 0; c < msCols; c++) {
      if (msBoard[r][c].mine) {
        msBoard[r][c].revealed = true;
        msRenderCell(r, c);
      }
    }
  }
}

function msRenderCell(r, c) {
  var cell = msBoard[r][c];
  var el = msCellEls[r][c];
  el.className = 'ms-cell';
  el.textContent = '';
  if (cell.revealed) {
    el.classList.add('revealed');
    if (cell.mine) {
      el.classList.add('mine');
      el.textContent = '💩';
    } else if (cell.adjacent > 0) {
      el.textContent = cell.adjacent;
      el.classList.add('ms-num-' + cell.adjacent);
    }
  } else if (cell.flagged) {
    el.classList.add('flagged');
    el.textContent = '🌷';
  }
}

function msStartTimer() {
  msStartTime = Date.now();
  clearInterval(msTimerInterval);
  msTimerInterval = setInterval(function () {
    msElapsedSeconds = Math.floor((Date.now() - msStartTime) / 1000);
    document.getElementById('ms-timer').textContent = msFormatTime(msElapsedSeconds);
  }, 1000);
}

function msStopTimer() {
  clearInterval(msTimerInterval);
  msTimerInterval = null;
}

function msGameOver(won) {
  msState = won ? 'won' : 'lost';
  msStopTimer();
  if (won) {
    msPlaySfx('win');
    document.getElementById('ms-win-time').textContent = msFormatTime(msElapsedSeconds);
    document.getElementById('ms-player-name').value = '';
    msScoreSaved = false;
    document.getElementById('ms-win-modal').classList.add('active');
    msLoadLeaderboardInto('ms-win-leaderboard-body');
  } else {
    setTimeout(function () {
      document.getElementById('ms-lose-modal').classList.add('active');
    }, 400);
  }
}

function msLoadLeaderboardInto(bodyId) {
  google.script.run
    .withSuccessHandler(function (list) { msRenderLeaderboard(list, bodyId); })
    .withFailureHandler(function (err) { toast('Error: ' + err.message); })
    .getMinesweeperLeaderboard(msDifficulty);
}

function msRenderLeaderboard(list, bodyId) {
  var body = document.getElementById(bodyId);
  body.innerHTML = '';
  if (!list || list.length === 0) {
    body.innerHTML = '<tr><td colspan="3" style="text-align:center;opacity:.6;">No scores yet ✿</td></tr>';
    return;
  }
  list.forEach(function (item, i) {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + (i + 1) + '</td><td>' + item.name + '</td><td>' + msFormatTime(item.time) + '</td>';
    body.appendChild(tr);
  });
}

function msSaveScore() {
  if (msScoreSaved) { toast('Already saved this round'); return; }
  var name = document.getElementById('ms-player-name').value.trim();
  if (!name) { toast('Enter your name first'); return; }
  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      msScoreSaved = true;
      msRenderLeaderboard(list, 'ms-win-leaderboard-body');
      toast('Saved!');
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .submitMinesweeperScore(msDifficulty, name, msElapsedSeconds);
}

/* -- Web Audio SFX (same lazy-context pattern as Memory Match / Mochi Fly) -- */
var msAudioCtx = null;
function msEnsureAudio() {
  if (!msAudioCtx) {
    try { msAudioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* no-op */ }
  }
  if (msAudioCtx && msAudioCtx.state === 'suspended') msAudioCtx.resume();
}
function msPlaySfx(type) {
  msEnsureAudio();
  if (!msAudioCtx) return;
  var ctx = msAudioCtx, now = ctx.currentTime;

  if (type === 'dig') {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle'; o.frequency.value = 480;
    o.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.12, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    o.start(now); o.stop(now + 0.1);
  } else if (type === 'flag') {
    var o2 = ctx.createOscillator(), g2 = ctx.createGain();
    o2.type = 'sine';
    o2.frequency.setValueAtTime(700, now);
    o2.frequency.exponentialRampToValueAtTime(1000, now + 0.08);
    o2.connect(g2); g2.connect(ctx.destination);
    g2.gain.setValueAtTime(0.0001, now);
    g2.gain.exponentialRampToValueAtTime(0.13, now + 0.01);
    g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
    o2.start(now); o2.stop(now + 0.12);
  } else if (type === 'unflag') {
    var o3 = ctx.createOscillator(), g3 = ctx.createGain();
    o3.type = 'sine';
    o3.frequency.setValueAtTime(600, now);
    o3.frequency.exponentialRampToValueAtTime(400, now + 0.08);
    o3.connect(g3); g3.connect(ctx.destination);
    g3.gain.setValueAtTime(0.0001, now);
    g3.gain.exponentialRampToValueAtTime(0.1, now + 0.01);
    g3.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
    o3.start(now); o3.stop(now + 0.12);
  } else if (type === 'win') {
    [523, 659, 784, 1047].forEach(function (f, i) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'triangle'; o.frequency.value = f;
      o.connect(g); g.connect(ctx.destination);
      var t = now + i * 0.1;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.13, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
      o.start(t); o.stop(t + 0.16);
    });
  } else if (type === 'lose') {
    var o4 = ctx.createOscillator(), g4 = ctx.createGain();
    o4.type = 'square';
    o4.frequency.setValueAtTime(220, now);
    o4.frequency.exponentialRampToValueAtTime(80, now + 0.3);
    o4.connect(g4); g4.connect(ctx.destination);
    g4.gain.setValueAtTime(0.0001, now);
    g4.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
    g4.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    o4.start(now); o4.stop(now + 0.37);
  }
}

/* ---------------------------------------------------------------- */
/* QR COLLECTION                                                       */
/* ---------------------------------------------------------------- */
var qrData = [];        // [{ row, name, link, note }]
var qrEditingId = null; // null when Add modal is open, otherwise the row being edited
var qrDeletingId = null;
var topToastTimer = null;

function openQrCollection() {
  showView('qr-view');
  loadQrData();
}

function loadQrData() {
  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      qrData = list;
      renderQrList();
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .getQrData();
}

function renderQrList() {
  var container = document.getElementById('qr-list');
  container.innerHTML = '';

  if (qrData.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="empty-icon">⌘</span>No QR codes yet</div>';
    return;
  }

  // Always display sorted A→Z by name, numbered to match that order —
  // independent of whatever order the server happened to return them in.
  var sorted = qrData.slice().sort(function (a, b) {
    return String(a.name).localeCompare(String(b.name), undefined, { sensitivity: 'base' });
  });

  sorted.forEach(function (item, idx) {
    var card = document.createElement('div');
    card.className = 'qr-card';
    card.innerHTML =
      '<div class="qr-canvas-wrap">' +
        '<button class="qr-delete-btn" title="Delete">✕</button>' +
        '<div class="qr-canvas-holder"></div>' +
      '</div>' +
      '<div class="qr-meta-row">' +
        '<span class="qr-index">#' + (idx + 1) + '</span>' +
        '<div class="qr-actions">' +
          '<button class="qr-download-btn" title="Download">' +
            '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
              '<path d="M12 3V15M12 15L7 10M12 15L17 10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
              '<path d="M4 17V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>' +
          '</button>' +
          '<button class="qr-edit-btn" title="Edit">✎</button>' +
        '</div>' +
      '</div>' +
      '<div class="qr-name">' + icdEscape(item.name) + '</div>' +
      (item.note ? '<div class="qr-note">' + icdEscape(item.note) + '</div>' : '');

    var holder = card.querySelector('.qr-canvas-holder');
    var canvasWrap = card.querySelector('.qr-canvas-wrap');
    qrRenderCanvas(holder, item.link, item.embedLogo !== false);

    canvasWrap.onclick = function () { window.open(item.link, '_blank'); };
    card.querySelector('.qr-name').onclick = function () { window.open(item.link, '_blank'); };
    card.querySelector('.qr-download-btn').onclick = function (e) {
      e.stopPropagation();
      var canvas = holder.querySelector('canvas');
      qrDownload(canvas, idx + 1);
    };
    card.querySelector('.qr-edit-btn').onclick = function (e) {
      e.stopPropagation();
      openQrForm(item);
    };
    card.querySelector('.qr-delete-btn').onclick = function (e) {
      e.stopPropagation();
      qrDeletingId = item.row;
      document.getElementById('qr-delete-modal').classList.add('active');
    };

    container.appendChild(card);
  });
}

// Draws the QR code for `link` inside `container` (a plain <div>) — the library
// creates its own <canvas> in there. Rendered at 480×480 internally (well above
// the ~110px it actually displays at) purely so the downloaded PNG stays crisp
// when viewed full-size or printed — CSS still scales it to fit the card either way.
// If embedLogo is true, stamps the tomato logo in the center with a thin white
// ring around it (just enough so it doesn't sit flush against the QR's dark
// modules) — QR codes have enough built-in redundancy (error correction level H)
// to survive a small logo covering their middle and still scan correctly.
function qrRenderCanvas(container, link, embedLogo) {
  container.innerHTML = '';
  new QRCode(container, {
    text: link || '',
    width: 480,
    height: 480,
    colorDark: '#5a4a4a',
    colorLight: '#fffaea',
    correctLevel: QRCode.CorrectLevel.H
  });

  var canvas = container.querySelector('canvas');
  if (!canvas) return; // extremely old browser fallback (table-based) — no logo overlay possible

  // The qrcode.js library quietly swaps the canvas for a static snapshot <img>
  // shortly after drawing (for old-Android compatibility) — that swap runs
  // asynchronously right after creation. Force the canvas to stay the visible
  // element so whatever we draw (or don't draw) on it actually shows.
  function fixVisibility() {
    canvas.style.display = 'block';
    var snapshotImg = container.querySelector('img');
    if (snapshotImg) snapshotImg.style.display = 'none';
  }

  if (embedLogo) {
    var ctx = canvas.getContext('2d');
    var logo = new Image();
    logo.onload = function () {
      var size = canvas.width * 0.22;
      var x = (canvas.width - size) / 2;
      var y = (canvas.height - size) / 2;
      // A hairline quiet zone (~3px at this resolution), sharp corners — just enough
      // so the QR's dark modules don't touch the icon directly. Deliberately NOT a
      // padded, rounded tile — that reads as a sticker slapped on top instead of an
      // icon set into the code.
      var ring = canvas.width * 0.006;
      ctx.fillStyle = '#fffaea';
      ctx.fillRect(x - ring, y - ring, size + ring * 2, size + ring * 2);
      ctx.drawImage(logo, x, y, size, size);
      fixVisibility();
    };
    logo.onerror = fixVisibility;
    logo.src = 'images/favicon.png';
  } else {
    setTimeout(fixVisibility, 0);
  }
}

function qrDownload(canvas, fileNumber) {
  try {
    var a = document.createElement('a');
    a.download = String(fileNumber) + '.png';
    a.href = canvas.toDataURL('image/png');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showTopToast('Saved to your downloads ✓');
  } catch (e) {
    toast("Couldn't download");
  }
}

// A separate top-of-screen toast used only for this — the regular toast()
// stays at the bottom for everything else in the app.
function showTopToast(msg) {
  var t = document.getElementById('top-toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(topToastTimer);
  topToastTimer = setTimeout(function () { t.classList.remove('show'); }, 2000);
}

function openQrForm(item) {
  qrEditingId = item ? item.row : null;
  document.getElementById('qr-modal-title').textContent = item ? 'Edit QR' : 'Add QR';
  document.getElementById('qr-field-name').value = item ? item.name : '';
  document.getElementById('qr-field-link').value = item ? item.link : '';
  document.getElementById('qr-field-note').value = item ? item.note : '';
  document.getElementById('qr-field-embed-logo').checked = item ? item.embedLogo !== false : true;
  document.getElementById('qr-modal').classList.add('active');
}

function saveQrEntry() {
  var name = document.getElementById('qr-field-name').value.trim();
  var link = document.getElementById('qr-field-link').value.trim();
  var note = document.getElementById('qr-field-note').value.trim();
  var embedLogo = document.getElementById('qr-field-embed-logo').checked;
  if (!name || !link) { toast('Enter both Name and Link'); return; }

  showLoading();
  var onDone = function (list) {
    hideLoading();
    qrData = list;
    document.getElementById('qr-modal').classList.remove('active');
    renderQrList();
    toast('Saved!');
  };
  var onFail = function (err) { hideLoading(); toast('Error: ' + err.message); };

  if (qrEditingId) {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).updateQrRow(qrEditingId, name, link, note, embedLogo);
  } else {
    google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).addQrRow(name, link, note, embedLogo);
  }
}

function confirmQrDelete() {
  document.getElementById('qr-delete-modal').classList.remove('active');
  if (qrDeletingId == null) return;
  var rowToDelete = qrDeletingId;
  qrDeletingId = null;
  showLoading();
  google.script.run
    .withSuccessHandler(function (list) {
      hideLoading();
      qrData = list;
      renderQrList();
    })
    .withFailureHandler(function (err) { hideLoading(); toast('Error: ' + err.message); })
    .deleteQrRow(rowToDelete);
}

/* ---------------------------------------------------------------- */
/* INIT                                                               */
/* ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  scatterFlowers();
  syncFixedHeaderOffsets();

  // Restore whichever view the person was on before reloading (if any, and if it's
  // safe to restore — Accounts is skipped since it's password-gated).
  var savedNav = null;
  try { savedNav = JSON.parse(localStorage.getItem('henlo_nav') || 'null'); } catch (e) { savedNav = null; }
  if (savedNav && savedNav.view && savedNav.view !== 'menu-view' && typeof VIEW_OPENERS_[savedNav.view] === 'function') {
    if (savedNav.view === 'accounts-view' || savedNav.view === 'expense-view') {
      // Personal views: land on Home first, then ask for the password.
      showView('menu-view');
      showHomeSection('home');
    }
    VIEW_OPENERS_[savedNav.view]();
  } else {
    showView('menu-view');
    showHomeSection((savedNav && savedNav.section) || 'home');
  }

  window.addEventListener('resize', syncFixedHeaderOffsets);

  // Plain nav links (desktop dock's Home/Tools/Games, and the mobile
  // drawer's Home) just navigate straight away. The mobile drawer's
  // Tools/Games are ".app-nav-group-toggle" instead — handled separately
  // below, since tapping them opens an in-drawer accordion rather than
  // navigating immediately.
  document.querySelectorAll('.app-nav-link:not(.app-nav-group-toggle)').forEach(function (btn) {
    btn.onclick = function () {
      var sec = btn.dataset.navSection;
      closeMobileNavDrawer();
      if (sec === 'personal') requirePersonal(function () { goHome('personal'); });
      else goHome(sec);
    };
  });
  document.querySelectorAll('.app-nav-group-toggle').forEach(function (btn) {
    btn.onclick = function () { toggleMobileNavSubmenu(btn.dataset.navSection); };
  });
  document.querySelectorAll('.app-nav-sublink').forEach(function (btn) {
    btn.onclick = function () {
      var opener = MOBILE_NAV_OPENERS_[btn.dataset.open];
      closeMobileNavDrawer();
      if (opener) opener();
    };
  });

  document.getElementById('mobile-nav-toggle').onclick = toggleMobileNavDrawer;
  document.getElementById('mobile-nav-scrim').onclick = closeMobileNavDrawer;

  document.getElementById('open-accounts').onclick = openAccountsGate;
  document.getElementById('open-converter').onclick = function () { openConverter(); };
  document.getElementById('open-symbols').onclick = loadSymbols;
  document.getElementById('open-datediff').onclick = openDateDiff;
  document.getElementById('open-memory').onclick = openMemory;
  document.getElementById('open-mochi').onclick = openMochi;
  document.getElementById('open-minesweeper').onclick = openMinesweeper;
  document.getElementById('open-qr').onclick = openQrCollection;

  document.getElementById('memory-newgame').onclick = memoryNewGame;
  document.getElementById('memory-start-btn').onclick = memoryNewGame;
  document.getElementById('memory-result-newgame').onclick = memoryNewGame;
  document.getElementById('memory-save-score').onclick = memorySaveScore;
  document.getElementById('memory-result-close').onclick = function () { document.getElementById('memory-result-modal').classList.remove('active'); };

  document.getElementById('open-eating').onclick = openEating;
  document.getElementById('eating-reset-btn').onclick = openEatingReset;
  document.getElementById('eating-reset-cancel').onclick = function () { document.getElementById('eating-reset-modal').classList.remove('active'); };
  document.getElementById('eating-reset-close').onclick = function () { document.getElementById('eating-reset-modal').classList.remove('active'); };
  document.getElementById('eating-reset-confirm').onclick = confirmEatingReset;

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

  document.getElementById('home-add-btn').onclick = homeOpenAdd;
  document.getElementById('home-reset-btn').onclick = function () { document.getElementById('home-reset-modal').classList.add('active'); };
  document.getElementById('home-reset-nope').onclick = function () { document.getElementById('home-reset-modal').classList.remove('active'); };
  document.getElementById('home-reset-yah').onclick = homeConfirmReset;

  document.querySelectorAll('.ms-diff-btn').forEach(function (btn) {
    btn.onclick = function () { msSelectDifficulty(btn.dataset.difficulty); };
  });
  document.getElementById('ms-start-btn').onclick = msStartGame;
  document.getElementById('ms-newgame-btn').onclick = msStartGame;
  document.getElementById('ms-mode-open').onclick = function () { msSetMode('open'); };
  document.getElementById('ms-mode-flag').onclick = function () { msSetMode('flag'); };
  document.getElementById('ms-save-score').onclick = msSaveScore;
  document.getElementById('ms-win-newgame').onclick = msStartGame;
  document.getElementById('ms-win-close').onclick = function () {
    document.getElementById('ms-win-modal').classList.remove('active');
    msShowStartScreen();
  };
  document.getElementById('ms-lose-tryagain').onclick = function () {
    document.getElementById('ms-lose-modal').classList.remove('active');
    msStartGame();
  };

  document.getElementById('qr-add-btn').onclick = function () { openQrForm(null); };
  document.getElementById('qr-modal-close').onclick = function () { document.getElementById('qr-modal').classList.remove('active'); };
  document.getElementById('qr-save-btn').onclick = saveQrEntry;
  document.getElementById('qr-delete-mistake').onclick = function () {
    qrDeletingId = null;
    document.getElementById('qr-delete-modal').classList.remove('active');
  };
  document.getElementById('qr-delete-yah').onclick = confirmQrDelete;

  expenseWireEvents();
});
