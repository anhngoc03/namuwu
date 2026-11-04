/**
 * village.js — Personal › the village (UI side). The 3D scene itself is
 * frontend/village3d.js (built from src/village3d.js, three.js bundled in),
 * loaded the first time Personal opens.
 * ------------------------------------------------------------------
 * Full screen. Top-right: clock + date, 🍅 (tomato favicon) = back to Home (the only way out),
 * ✮⋆˙ = password (again = lock). Locked: only the scene (people, cat, dog, fish,
 * pond) — no text, tapping a house does nothing; you can still turn / zoom.
 * Unlocked: name tags over every house; tapping a house or its tag opens it.
 * Sky follows the real time of day. Villagers walk to the Town Hall when a Work
 * task is due today/tomorrow (or late) and still not done. The Town Hall opens
 * what's due + the AI agent chat (lib/agent.js): the chat lives only in this
 * tab, nothing is saved, attached files are only for Claude to read.
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  /* ---------------- houses: one per feature (same order as the 3D layout) ----------------
     open: name of a global opener (already behind the password), or null = coming soon. */
  var HOUSES = [
    { id: 'work',     label: 'Work',       roof: 'lav',   open: 'openWork' },
    { id: 'money',    label: 'Money',      roof: 'peach', open: 'openExpense' },
    { id: 'calendar', label: 'Calendar',   roof: 'blue',  open: 'openCalendar' },
    { id: 'account',  label: 'Account',    roof: 'mint',  open: 'loadAccounts' },
    { id: 'language', label: 'Languages',  roof: 'pink',  open: 'openStudyLanguage' },
    { id: 'skills',   label: 'Skills',     roof: 'yellow',open: 'openStudySkills' },
    { id: 'law',      label: 'Law',        roof: 'blue',  open: 'openLaw' },
    { id: 'health',   label: 'Food & Gym', roof: 'mint',  open: 'openHealth' },
    { id: 'notes',    label: 'Notes',      roof: 'yellow',open: 'openNotes' },
    { id: 'love',     label: 'Love',       roof: 'pink',  open: 'openLove', heart: true },
    { id: 'goals',    label: 'Goals',      roof: 'lav',   open: 'openGoals' },
    // open to everyone (no password): Tools & Games
    { id: 'daycount', label: 'Day Counter', roof: 'yellow', open: 'openDateDiff',     pub: true, kind: 'tool' },
    { id: 'pdf',      label: 'PDF',         roof: 'blue',   open: 'openConverter',    pub: true, kind: 'tool' },
    { id: 'qr',       label: 'QR',          roof: 'mint',   open: 'openQrCollection', pub: true, kind: 'tool' },
    { id: 'symbols',  label: 'Symbols',     roof: 'lav',    open: 'loadSymbols',      pub: true, kind: 'tool' },
    { id: 'yakult',   label: 'Yakult',      roof: 'peach',  open: 'openEating',       pub: true, kind: 'tool' },
    { id: 'games',    label: 'Game Center', roof: 'pink',   open: 'openGameCenter',   pub: true, kind: 'game', special: 'arcade' },
    { id: 'store',    label: '7-Eleven',    roof: 'mint',   open: 'openStore',        pub: true, kind: 'store', special: 'store' }
  ];
  // Game Center: one building, three games inside
  window.openGameCenter = function () { document.getElementById('game-center-modal').classList.add('active'); };
  // the corner shop is where the villagers eat and shop (nothing to open)

  var root, stage, labelsEl, starBtn, clockEl;
  var scene3d = null, loading = false, shown = false, built = false;
  var urgent = [];
  var tagEls = {};

  function unlocked() { return typeof personalUnlocked !== 'undefined' && personalUnlocked; }

  /* ---------------- 3D scene (lazy) ---------------- */
  var loadWaiters = [];
  function loadScript(cb) {
    if (window.Village3D) { cb(); return; }
    loadWaiters.push(cb);
    if (loading) return;
    loading = true;
    var sc = document.createElement('script');
    sc.src = '/village3d.js?v=26';
    sc.onload = function () { loading = false; var w = loadWaiters; loadWaiters = []; w.forEach(function (f) { f(); }); };
    sc.onerror = function () { loading = false; loadWaiters = []; toast("Couldn't load the village ʕ´-ก̀ʔᐝ"); };
    document.head.appendChild(sc);
  }
  function ensureScene() {
    if (scene3d) return;
    loadScript(function () { if (!scene3d) makeScene(); });
  }
  function makeScene() {
    try {
      scene3d = window.Village3D.create(stage, {
        houses: HOUSES,
        timeMode: timeMode(),
        onPick: function (id) { openHouse(id); },     // houses: ignored while locked (cat, dog, fish always react)
        onCar: function () { if (unlocked()) shopDrive(); }   // the Love couple's car: a drive to the shop and back
      });
    } catch (e) {
      toast('This device can\'t show 3D ʕ´-ก̀ʔᐝ');
      return;
    }
    scene3d.onFrame(placeTags);
    loadNames();
    scene3d.setUrgent(urgent.length);
    pushBusy();
    scene3d.show(shown);
    tickClock();
    renderLabels();
  }

  // phone turned (tall ↔ wide) → rebuild the scene with the matching layout
  function wantLayout() { return innerWidth < innerHeight * 0.9 ? 'port' : 'land'; }
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (!scene3d || !shown || scene3d.layout === wantLayout()) return;
      scene3d.destroy(); scene3d = null; tagEls = {};
      makeScene();
    }, 250);
  });

  /* ---------------- clock + date (next to the 🍅 Home button) ---------------- */
  var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function tickClock() {
    if (!clockEl) return;
    var d = new Date();
    clockEl.innerHTML = '<b>' + two(d.getHours()) + ':' + two(d.getMinutes()) + '</b><span>' +
      DAYS[d.getDay()] + ', ' + MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() + '</span>';
    if (scene3d) root.classList.toggle('village-night', scene3d.night() > 0.5);
  }
  setInterval(function () { if (shown) tickClock(); }, 5000);

  /* ---------------- name tags (only after the password), follow the 3D houses ---------------- */
  // names you give the houses and the people who live there (⚙︎ → Names); anyone sees them
  var villageNames = { houses: {}, people: {}, her: 'namu', him: 'hunf' };
  window.villageNames = function () { return villageNames; };
  function labelOf(h) { return (villageNames.houses && villageNames.houses[h.id]) || h.label; }
  function loadNames() {
    call('getVillageNames').then(function (n) { if (n) villageNames = n; renderLabels(); }).catch(function () {});
  }
  function renderLabels() {
    if (scene3d && scene3d.setNames) scene3d.setNames(villageNames, unlocked());
    if (!labelsEl) return;
    root.classList.toggle('village-unlocked', unlocked());
    tagEls = {};
    var open = unlocked(), html = '';
    // locked: only the houses anyone may use show their names (Tools & Games)
    HOUSES.forEach(function (h) {
      if (!open && !h.pub) return;
      html += '<button type="button" class="village-tag' + (h.open ? '' : ' soon') + (h.pub ? ' pub' : '') + '" data-house="' + h.id + '">' + icdEscape(labelOf(h)) + '</button>';
    });
    if (open) html += '<button type="button" class="village-tag hall' + (urgent.length ? ' alert' : '') + '" data-house="hall">' + icdEscape((villageNames.houses && villageNames.houses.hall) || 'Town Hall') +
      (urgent.length ? ' <b>' + urgent.length + '</b>' : '') + '</button>';
    labelsEl.innerHTML = html;
    labelsEl.querySelectorAll('[data-house]').forEach(function (b) { tagEls[b.dataset.house] = b; });
    placeTags();
  }
  // name tags follow the houses; they stay on screen and nudge up so they never sit on top of each other
  var tagSize = {};
  function placeTags() {
    if (!scene3d) return;
    var W = innerWidth, list = [];
    for (var id in tagEls) {
      var a = scene3d.anchor(id), el = tagEls[id];
      if (!a || !a.visible) { el.style.display = 'none'; continue; }
      el.style.display = '';
      var sz = tagSize[id];
      if (!sz || sz.t !== el.textContent) { sz = tagSize[id] = { w: el.offsetWidth || 60, h: el.offsetHeight || 20, t: el.textContent }; }
      list.push({ el: el, x: a.x, y: a.y, w: sz.w, h: sz.h, hall: id === 'hall' });
    }
    list.sort(function (p, q) { return (q.hall ? 1 : 0) - (p.hall ? 1 : 0) || q.y - p.y; });   // the hall first, then from the front
    var placed = [];
    list.forEach(function (t) {
      t.x = Math.max(t.w / 2 + 4, Math.min(W - t.w / 2 - 4, t.x));
      for (var k = 0; k < 6; k++) {
        var hit = placed.filter(function (o) { return Math.abs(o.x - t.x) < (o.w + t.w) / 2 + 2 && Math.abs(o.y - t.y) < (o.h + t.h) / 2 + 1; })[0];
        if (!hit) break;
        t.y = hit.y - (hit.h + t.h) / 2 - 2;
      }
      placed.push(t);
      t.el.style.transform = 'translate(' + Math.round(t.x) + 'px,' + Math.round(t.y) + 'px) translate(-50%,-100%)';
    });
  }

  function openHouse(id) {
    var h = HOUSES.filter(function (x) { return x.id === id; })[0];
    if (!unlocked() && !(h && h.pub)) return;        // Personal houses wait for the password
    if (id === 'hall') { openHall(); return; }
    if (!h) return;
    if (!h.open || typeof window[h.open] !== 'function') { toast('Coming soon ✿'); return; }
    if (h.id === 'games') { window.openGameCenter(); return; }
    if (entering) return;
    entering = true;
    // walk in: glide to the door, it opens, the fade starts as we go through, then the room + the page
    var fade = document.getElementById('village-fade');
    fade.style.background = roofHex(h.roof);
    var fadeOn = function () { fade.classList.add('on'); };
    var go = function () {
      fadeOn();
      setTimeout(function () {
        entering = false;
        walkingIn = true;
        if (h.pub) window[h.open](); else requirePersonal(window[h.open]);
        walkingIn = false;
        setTimeout(function () { fade.classList.remove('on'); }, 120);
      }, 120);
    };
    if (scene3d) scene3d.enterHouse(id, go, { at: { k: 0.7, fn: fadeOn } }); else go();
  }
  function roofHex(roof) {
    var n = (window.Village3D && Village3D.ROOF[roof]) || 0xf6a9bd;
    return '#' + ('00000' + n.toString(16)).slice(-6);
  }
  var walkingIn = false, lastLeft = null;
  // ‹ from inside a house: fade, then the camera backs out of the doorway and the door closes
  function leaveHouse() {
    var house = room && room.house, fade = document.getElementById('village-fade');
    if (!house) { goHome('personal'); return; }
    var spec = HOUSES.filter(function (x) { return x.id === house; })[0];
    fade.style.background = roofHex(spec ? spec.roof : 'pink');
    fade.classList.add('on');
    setTimeout(function () { goHome('personal'); }, 560);
  }
  var entering = false;

  /* ---------------- inside a house: the room behind a feature page ---------------- */
  var VIEW_HOUSE = { 'work-view': 'work', 'expense-view': 'money', 'calendar-view': 'calendar', 'accounts-view': 'account', 'love-view': 'love', 'notes-view': 'notes', 'goals-view': 'goals', 'health-view': 'health', 'law-view': 'law', 'store-view': 'store',
    'datediff-view': 'daycount', 'converter-view': 'pdf', 'qr-view': 'qr', 'symbols-view': 'symbols', 'eating-view': 'yakult',
    'memory-view': 'games', 'minesweeper-view': 'games', 'mochi-view': 'games' };
  var roomPhotos = [], roomFrame = '';
  // the picture in the Love room's frame (love.js calls this)
  window.villageRoomFrame = function (url) { roomFrame = url || ''; if (room && room.house === 'love' && roomFrame) room.setPhotos([roomFrame]); };
  // the Love room's frames show the latest album photos (love.js calls this)
  window.villageRoomPhotos = function (urls) { roomPhotos = urls || []; if (room && room.setPhotos) room.setPhotos(roomPhotos); };
  var room = null, roomWant = null, roomFood = [];
  // the Love room: back out of the album zoom, the dishes on the table (love.js calls these)
  window.villageRoomBack = function () { if (room && room.back) room.back(); };
  window.villageRoomFood = function (items) { roomFood = items || []; if (room && room.house === 'love' && room.setFood) room.setFood(roomFood); };
  // tap the car: the two of them drive out to the shop, park and go in (the shop opens), and when you
  // come back out they get in and drive round the village, home. What they buy goes on their table.
  var shopResume = null, shopForLove = false;
  function shopDrive() {
    var ok = scene3d && scene3d.drive(function () { shopForLove = false; toast('Home again ♡'); }, {
      onShop: function (resume) { shopResume = resume; shopForLove = true; openHouse('store'); }
    });
    if (!ok) toast('The car is out already');
  }
  window.villageShopForLove = function () { return shopForLove; };
  function currentCorner(house) {
    if (house === 'work') return typeof workTab !== 'undefined' ? workTab : 'list';
    if (house === 'money') return typeof expenseActiveTab !== 'undefined' ? expenseActiveTab : 'overview';
    return 'main';
  }
  function villageRoom(viewId) {
    var house = viewId === 'study-view' ? (window.studyHouse === 'skills' ? 'skills' : 'language') : (VIEW_HOUSE[viewId] || null);
    roomWant = house;
    var el = document.getElementById('room-bg');
    document.body.classList.toggle('room-on', !!house);
    document.body.classList.toggle('love-room', house === 'love');     // the album and the frame in this room can be tapped
    document.body.classList.toggle('store-room', house === 'store');
    if (!house) { if (room) { lastLeft = room.house; room.destroy(); room = null; } el.classList.remove('on'); return; }
    if (room && room.house === house) { el.classList.add('on'); room.setCorner(currentCorner(house)); return; }
    if (room) { room.destroy(); room = null; }
    var make = function () {
      if (roomWant !== house || room) return;
      var idx = -1;
      HOUSES.forEach(function (h, i) { if (h.id === house) idx = i; });
      var spec = HOUSES[idx];
      try {
        room = Village3D.room(el, {
          house: house, kind: spec.kind, roof: Village3D.ROOF[spec.roof], look: Village3D.lookAs ? Village3D.lookAs(Village3D.LOOKS[idx], (villageNames.genders || {})[house]) : Village3D.LOOKS[idx],
          looks: house === 'love' ? [Village3D.LOVE.her, Village3D.LOVE.him] : null,
          guests: house === 'store' && shopForLove ? [Village3D.LOVE.her, Village3D.LOVE.him] : null,
          corner: currentCorner(house), timeMode: timeMode(), walkIn: walkingIn, names: { her: villageNames.her || 'namu', him: villageNames.him || 'hunf' },
          onPick: house === 'love' ? function (what, at) { if (typeof loveRoomPick === 'function') loveRoomPick(what, at); } : null
        });
        if (house === 'love' && roomFrame) room.setPhotos([roomFrame]);
        if (house === 'love' && room.setFood) room.setFood(roomFood);
        el.classList.add('on');
      } catch (e) { /* no WebGL: plain page */ }
    };
    if (window.Village3D) make(); else loadScript(make);
  }
  window.villageRoom = villageRoom;
  // an empty list on the page → the sleepy cats lie on the rug
  setInterval(function () {
    if (!document.body.classList.contains('room-on')) return;
    var empty = Array.prototype.some.call(document.querySelectorAll('#app-screen .empty-state'), function (e) { return e.offsetParent !== null; });
    document.body.classList.toggle('room-empty', empty);
  }, 400);
  // tabs inside a page = turning to another corner of the room
  [['workSetTab', 'work'], ['expenseSwitchTab', 'money']].forEach(function (w) {
    var orig = window[w[0]];
    if (typeof orig !== 'function') return;
    window[w[0]] = function (tab) {
      var r = orig.apply(this, arguments);
      if (room && room.house === w[1]) room.setCorner(tab);
      return r;
    };
  });

  // ✿ Summary: today's summary from the Town Hall AI (re-used if it was made today)
  function hallSummary() {
    if (chat.busy) return;
    chat.busy = true; renderChat();
    var today = new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10);
    call('getDigest').then(function (d) { return d && d.at === today && !d.weekly ? d : call('makeDigestNow', false); })
      .then(function (d) { chat.view.push({ who: 'bot', text: '✿ ' + ((d && d.text) || 'Nothing to sum up yet') }); })
      .catch(function (e) { chat.view.push({ who: 'bot', err: true, text: (e && e.message) || 'Could not make the summary' }); })
      .then(function () { chat.busy = false; renderChat(); });
  }
  function openHall() {
    var sb0 = document.getElementById('village-hall-sum');
    if (sb0 && !sb0.onclick) sb0.onclick = hallSummary;
    renderDue();
    renderChat();
    document.getElementById('village-hall-modal').classList.add('active');
    setTimeout(function () { var t = document.getElementById('hall-text'); if (t && window.innerWidth > 760) t.focus(); }, 80);
  }
  function renderDue() {
    var box = document.getElementById('village-hall-list');
    document.getElementById('hall-due').classList.toggle('empty', !urgent.length);
    box.innerHTML = urgent.map(function (t) {
      var late = t.eff < t.today;
      return '<div class="home-work-row prio-' + t.priority + '"><span>' + icdEscape(t.title) + '</span>' +
        '<span class="work-due' + (late ? ' over' : '') + '">' + (late ? 'late · ' : '') + workFmtDue(t.eff) + '</span></div>';
    }).join('');
  }

  /* ---------------- Town Hall chat (AI agent, lib/agent.js) ----------------
     The conversation (in API form, so Claude keeps its context) lives only here.
     Files are read in the browser and sent with that one message — never stored. */
  var chat = { messages: [], view: [], files: [], busy: false };
  var MAX_FILE = 15 * 1024 * 1024;

  function md(text) {        // tiny, safe formatting: escape, then **bold**, `code`, links, new lines
    var h = icdEscape(text);
    h = h.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>');
    h = h.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
    return h.replace(/\n/g, '<br>');
  }
  function renderChat() {
    var el = document.getElementById('hall-chat');
    if (!chat.view.length && !chat.busy) {
      el.innerHTML = '<div class="hall-hello">ʕ•ᴥ•ʔ</div>';
    } else {
      el.innerHTML = chat.view.map(function (m) {
        if (m.who === 'act') return '<div class="hall-act">✓ ' + icdEscape(m.text) + '</div>';
        var files = (m.files || []).map(function (n) { return '<span class="hall-file-chip">' + icdEscape(n) + '</span>'; }).join('');
        return '<div class="hall-msg ' + m.who + (m.err ? ' err' : '') + '">' + (files ? '<div>' + files + '</div>' : '') + md(m.text) + '</div>';
      }).join('') + (chat.busy ? '<div class="hall-msg bot typing"><span></span><span></span><span></span></div>' : '');
    }
    el.scrollTop = el.scrollHeight;
    document.getElementById('hall-files').innerHTML = chat.files.map(function (f, i) {
      return '<span class="hall-file-chip">' + icdEscape(f.name) + ' <button type="button" data-rm="' + i + '">✕</button></span>';
    }).join('');
    document.getElementById('hall-send').disabled = chat.busy;
  }
  function readFile(file) {
    return new Promise(function (res, rej) {
      if (file.size > MAX_FILE) { rej(new Error(file.name + ' is over 15MB')); return; }
      var r = new FileReader();
      r.onload = function () { res({ name: file.name, type: file.type || 'text/plain', data: String(r.result).split(',')[1] || '' }); };
      r.onerror = function () { rej(new Error("Can't read " + file.name)); };
      r.readAsDataURL(file);
    });
  }
  function sendChat() {
    if (chat.busy || !unlocked()) return;
    var ta = document.getElementById('hall-text');
    var text = ta.value.trim();
    if (!text && !chat.files.length) return;
    var files = chat.files; chat.files = [];
    chat.view.push({ who: 'me', text: text, files: files.map(function (f) { return f.name; }) });
    chat.busy = true; ta.value = ''; autoGrow();
    renderChat();
    google.script.run
      .withSuccessHandler(function (d) {
        chat.busy = false;
        chat.messages = d.messages || chat.messages;
        (d.actions || []).forEach(function (a) { chat.view.push({ who: 'act', text: a }); });
        chat.view.push({ who: 'bot', text: d.reply || '…' });
        renderChat();
        if (d.actions && d.actions.length) loadUrgent();      // data changed → the village reacts
      })
      .withFailureHandler(function (err) {
        chat.busy = false;
        chat.view.push({ who: 'bot', err: true, text: (err && err.message) || 'Something went wrong' });
        renderChat();
      })
      .agentChat(chat.messages, text, files);
  }
  function autoGrow() {
    var ta = document.getElementById('hall-text');
    ta.style.height = 'auto';
    ta.style.height = Math.min(140, ta.scrollHeight) + 'px';
  }
  function forgetChat() { chat = { messages: [], view: [], files: [], busy: false }; }
  function wireChat() {
    var ta = document.getElementById('hall-text'), fi = document.getElementById('hall-file');
    ta.addEventListener('input', autoGrow);
    ta.addEventListener('keydown', function (e) {
      // desktop: Enter sends, Shift+Enter = new line. Phones: the button sends.
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing && window.innerWidth > 760) { e.preventDefault(); sendChat(); }
    });
    document.getElementById('hall-send').onclick = sendChat;
    document.getElementById('hall-attach').onclick = function () { fi.click(); };
    fi.onchange = function () {
      var list = Array.prototype.slice.call(fi.files || []);
      fi.value = '';
      Promise.all(list.map(readFile)).then(function (got) {
        chat.files = chat.files.concat(got).slice(0, 10); renderChat();
      }).catch(function (e) { toast(e.message); });
    };
    document.getElementById('hall-files').addEventListener('click', function (e) {
      var b = e.target.closest('[data-rm]');
      if (b) { chat.files.splice(Number(b.dataset.rm), 1); renderChat(); }
    });
  }

  /* ---------------- what's due (Work) ---------------- */
  function addDays(d, n) {
    var t = new Date(d + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() + n);
    return t.toISOString().slice(0, 10);
  }
  function loadUrgent() {
    if (!unlocked() || typeof workEffDue_ !== 'function') { setUrgent([]); return; }
    google.script.run
      .withSuccessHandler(function (d) {
        if (!d || !d.tasks) { setUrgent([]); return; }
        var soon = addDays(d.today, 1);
        var list = d.tasks.filter(function (t) { return t.status !== 'done'; })
          .map(function (t) { return { title: t.title, priority: t.priority, eff: workEffDue_(t), today: d.today }; })
          .filter(function (t) { return t.eff && t.eff <= soon; })
          .sort(function (a, b) { return a.eff < b.eff ? -1 : a.eff > b.eff ? 1 : 0; });
        setUrgent(list);
        // Work house: still busy while anything is in Doing, due today or late
        busyMap.work = d.tasks.filter(function (t) {
          if (t.status === 'done') return false;
          var e = workEffDue_(t);
          return t.status === 'doing' || (e && e <= d.today);
        }).length;
        pushBusy();
      })
      .withFailureHandler(function () { setUrgent([]); })
      .getWorkData();
    // Calendar house: busy on days with reminders / work / important notes
    google.script.run
      .withSuccessHandler(function (c) {
        var today = c && c.today;
        busyMap.calendar = !c ? 0 : c.notes.filter(function (n) { return n.day === today && /remind|work|important/.test(n.kind); }).length;
        pushBusy();
      })
      .withFailureHandler(function () {})
      .getCalendarNotes(new Date().getFullYear());
  }
  var busyMap = {};
  function pushBusy() { if (scene3d) scene3d.setBusy(unlocked() ? busyMap : {}); }
  // keep it fresh while the village is open
  setInterval(function () { if (shown && unlocked() && !document.hidden) loadUrgent(); }, 5 * 60 * 1000);
  function setUrgent(list) {
    urgent = list || [];
    if (scene3d) scene3d.setUrgent(urgent.length);
    renderLabels();
  }

  /* ---------------- ◐ / ☼ / ☾ : village sky follows the clock, or stays day / night ---------------- */
  var TIME_ICONS = { auto: '◐', day: '☼', night: '☾' };
  function timeMode() {
    try { var m = localStorage.getItem('village_time'); if (TIME_ICONS[m]) return m; } catch (e) {}
    return 'auto';
  }
  function showTimeMode() { document.getElementById('village-theme').textContent = TIME_ICONS[timeMode()]; }
  function cycleTimeMode() {
    var next = { auto: 'day', day: 'night', night: 'auto' }[timeMode()];
    try { localStorage.setItem('village_time', next); } catch (e) {}
    showTimeMode();
    if (scene3d) scene3d.setTimeMode(next);
    if (room) room.setTimeMode(next);
    tickClock();
    toast({ auto: 'Sky follows the clock ◐', day: 'Always day ☼', night: 'Always night ☾' }[next]);
  }

  /* ---------------- ⚙ settings: reminders + this device's notifications ---------------- */
  function call(name) {                       // google.script.run as a Promise
    var args = Array.prototype.slice.call(arguments, 1);
    return new Promise(function (res, rej) {
      var r = google.script.run.withSuccessHandler(res).withFailureHandler(function (e) { rej(new Error((e && e.message) || 'Error')); });
      r[name].apply(r, args);
    });
  }
  var pushOK = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  var isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  function keyBytes(b64) {
    var s = b64.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '=';
    var bin = atob(s), out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function deviceLabel() {
    var ua = navigator.userAgent;
    var dev = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) ? 'iPad' : /Android/.test(ua) ? 'Android' : /Mac/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : 'Device';
    var br = /Edg\//.test(ua) ? 'Edge' : /Chrome\//.test(ua) ? 'Chrome' : /Firefox\//.test(ua) ? 'Firefox' : /Safari\//.test(ua) ? 'Safari' : '';
    return dev + (br ? ' · ' + br : '');
  }
  function currentSub() {
    if (!pushOK) return Promise.resolve(null);
    return navigator.serviceWorker.getRegistration('/').then(function (reg) { return reg ? reg.pushManager.getSubscription() : null; });
  }
  function renderPush() {
    var st = document.getElementById('set-push-status'), btn = document.getElementById('set-push-toggle'),
      test = document.getElementById('set-push-test'), hint = document.getElementById('set-push-hint');
    hint.textContent = '';
    if (!pushOK) {
      st.textContent = 'Not available here'; btn.style.display = 'none'; test.style.display = 'none';
      hint.textContent = isIOS && !standalone
        ? 'On iPhone: open this site in Safari → Share → Add to Home Screen, open it from the new icon, then turn this on.'
        : 'This browser can\'t show notifications.';
      return Promise.resolve();
    }
    btn.style.display = ''; test.style.display = '';
    return currentSub().then(function (sub) {
      var on = !!sub && Notification.permission === 'granted';
      st.textContent = on ? 'On' : (Notification.permission === 'denied' ? 'Blocked' : 'Off');
      btn.textContent = on ? 'Turn off' : 'Turn on';
      btn.dataset.on = on ? '1' : '';
      test.disabled = !on;
      if (Notification.permission === 'denied') hint.textContent = 'Notifications are blocked for this site — allow them in the browser / phone settings, then try again.';
    });
  }
  function pushOn() {
    return Notification.requestPermission().then(function (perm) {
      if (perm !== 'granted') throw new Error('Permission not given');
      return navigator.serviceWorker.register('/sw.js', { scope: '/' });
    }).then(function () { return navigator.serviceWorker.ready; })
      .then(function (reg) {
        return call('getPushKey').then(function (key) {
          return reg.pushManager.getSubscription().then(function (old) {
            return old || reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(key) });
          });
        });
      })
      .then(function (sub) { return call('savePushSubscription', sub.toJSON(), deviceLabel()); });
  }
  function pushOff() {
    return currentSub().then(function (sub) {
      if (!sub) return;
      var ep = sub.endpoint;
      return sub.unsubscribe().then(function () { return call('deletePushSubscription', ep); });
    });
  }
  function fillSettings(r) {
    var $ = function (id) { return document.getElementById(id); };
    $('set-morning-on').checked = r.morning.on; $('set-morning-time').value = r.morning.time;
    $('set-evening-on').checked = r.evening.on; $('set-evening-time').value = r.evening.time;
    $('set-before-on').checked = r.before.on; $('set-before-time').value = r.before.time;
    var sel = $('set-before-days');
    if (!sel.querySelector('option[value="' + r.before.days + '"]')) sel.insertAdjacentHTML('beforeend', '<option value="' + r.before.days + '">' + r.before.days + ' days before</option>');
    sel.value = String(r.before.days);
    $('set-src-work').checked = r.sources.work; $('set-src-calendar').checked = r.sources.calendar; $('set-src-todo').checked = r.sources.todo;
    $('set-src-study').checked = r.sources.study !== false; $('set-src-goals').checked = r.sources.goals !== false;
    var dg = r.digest || { on: false, time: '21:00', weekly: true };
    $('set-digest-on').checked = !!dg.on; $('set-digest-time').value = dg.time; $('set-digest-weekly').value = dg.weekly ? '1' : '0';
    $('set-private').checked = !!r.private;
  }
  function readSettings() {
    var $ = function (id) { return document.getElementById(id); };
    return {
      morning: { on: $('set-morning-on').checked, time: $('set-morning-time').value },
      evening: { on: $('set-evening-on').checked, time: $('set-evening-time').value },
      before: { on: $('set-before-on').checked, days: Number($('set-before-days').value), time: $('set-before-time').value },
      sources: { work: $('set-src-work').checked, calendar: $('set-src-calendar').checked, todo: $('set-src-todo').checked, study: $('set-src-study').checked, goals: $('set-src-goals').checked },
      digest: { on: $('set-digest-on').checked, time: $('set-digest-time').value, weekly: $('set-digest-weekly').value === '1' },
      private: $('set-private').checked
    };
  }
  var driveOn = false;
  function renderDrive() {
    var st = document.getElementById('set-drive-status'), btn = document.getElementById('set-drive-btn'), hint = document.getElementById('set-drive-hint');
    st.textContent = '…'; hint.textContent = '';
    return call('getDriveStatus').then(function (d) {
      driveOn = d.connected;
      if (!d.configured) {
        st.textContent = 'Not set up'; btn.style.display = 'none';
        hint.textContent = 'Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET on Cloudflare first (see docs/PLAN.md).';
        return;
      }
      btn.style.display = '';
      st.textContent = d.connected ? 'Connected' + (d.folderName ? ' · ' + d.folderName : '') : 'Not connected';
      btn.textContent = d.connected ? 'Disconnect' : 'Connect';
      if (d.error) hint.textContent = d.error;
    }).catch(function (e) { st.textContent = 'Error'; hint.textContent = e.message; });
  }
  // page colours (the pages inside the houses): follow the phone, or always light / dark
  function pageTheme() { try { var t = localStorage.getItem('henlo_theme'); return t === 'dark' || t === 'light' ? t : 'auto'; } catch (e) { return 'auto'; } }
  function setPageTheme(t) {
    try { if (t === 'auto') localStorage.removeItem('henlo_theme'); else localStorage.setItem('henlo_theme', t); } catch (e) {}
    if (t === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', t);
  }
  function openNames() {
    var list = document.getElementById('names-list');
    var row = function (id, label, owner) {
      return '<div class="nm-row"><div class="nm-house"><small>' + icdEscape(label) + '</small><input type="text" maxlength="24" data-nh="' + id + '" placeholder="' + icdEscape(label) + '" value="' + icdEscape((villageNames.houses || {})[id] || '') + '"></div>' + owner + '</div>';
    };
    var gOf = function (id) { return (villageNames.genders || {})[id] || (scene3d && scene3d.genderOf ? scene3d.genderOf(id) : '') || 'm'; };
    var who = function (id) {
      var g = gOf(id);
      return '<div class="nm-who"><small>Lives here</small><div class="nm-pg"><input type="text" maxlength="24" data-np="' + id + '" placeholder="Name" value="' + icdEscape((villageNames.people || {})[id] || '') + '">' +
        '<select data-ng="' + id + '" aria-label="Boy or girl"><option value="m"' + (g === 'm' ? ' selected' : '') + '>Boy</option><option value="f"' + (g === 'f' ? ' selected' : '') + '>Girl</option></select></div></div>';
    };
    var html = row('hall', 'Town Hall', '<div class="nm-who"><small>&nbsp;</small><span class="nm-none">the Hall team</span></div>');
    HOUSES.forEach(function (h) {
      html += row(h.id, h.label, h.id === 'love'
        ? '<div class="nm-who two"><small>Live here</small><input type="text" maxlength="24" id="nm-her" placeholder="her" value="' + icdEscape(villageNames.her || 'namu') + '"><input type="text" maxlength="24" id="nm-him" placeholder="him" value="' + icdEscape(villageNames.him || 'hunf') + '"></div>'
        : who(h.id));
    });
    list.innerHTML = html;
    document.getElementById('names-modal').classList.add('active');
  }
  function saveNames() {
    var n = { houses: {}, people: {}, her: document.getElementById('nm-her').value, him: document.getElementById('nm-him').value };
    document.querySelectorAll('#names-list [data-nh]').forEach(function (i) { if (i.value.trim()) n.houses[i.dataset.nh] = i.value.trim(); });
    document.querySelectorAll('#names-list [data-np]').forEach(function (i) { if (i.value.trim()) n.people[i.dataset.np] = i.value.trim(); });
    n.genders = {};
    document.querySelectorAll('#names-list [data-ng]').forEach(function (i) { n.genders[i.dataset.ng] = i.value; });
    call('saveVillageNames', n).then(function (v) { villageNames = v; renderLabels(); document.getElementById('names-modal').classList.remove('active'); toast('Names saved ✿'); })
      .catch(function (e) { toast((e && e.message) || 'Could not save'); });
  }
  function openSettings() {
    if (!unlocked()) return;
    var th = pageTheme();
    document.querySelectorAll('input[name=set-theme]').forEach(function (r) { r.checked = r.value === th; });
    document.getElementById('village-settings-modal').classList.add('active');
    renderPush();
    renderDrive();
    call('getReminderSettings').then(fillSettings).catch(function (e) { toast(e.message); });
  }
  function wireSettings() {
    document.getElementById('village-gear').onclick = openSettings;
    document.getElementById('set-names').onclick = function () { document.getElementById('village-settings-modal').classList.remove('active'); openNames(); };
    document.getElementById('names-close').onclick = function () { document.getElementById('names-modal').classList.remove('active'); };
    document.getElementById('names-save').onclick = saveNames;
    document.getElementById('village-theme').onclick = cycleTimeMode;
    document.getElementById('set-close').onclick = function () { document.getElementById('village-settings-modal').classList.remove('active'); };
    document.getElementById('set-save').onclick = function () {
      showLoading();
      call('saveReminderSettings', readSettings()).then(function (r) {
        hideLoading(); fillSettings(r); toast('Saved ✿');
        document.getElementById('village-settings-modal').classList.remove('active');
      }).catch(function (e) { hideLoading(); toast(e.message); });
    };
    document.getElementById('set-push-toggle').onclick = function () {
      var btn = this, wasOn = !!btn.dataset.on;
      btn.disabled = true;
      (wasOn ? pushOff() : pushOn()).then(function () {
        toast(wasOn ? 'Notifications off on this device' : 'Notifications on ✿');
      }).catch(function (e) { toast(e.message || 'Couldn\'t turn it on'); })
        .then(function () { btn.disabled = false; renderPush(); });
    };
    document.getElementById('set-push-test').onclick = function () {
      call('sendTestPush').then(function (r) { toast(r.sent ? 'Sent ✿ (' + r.sent + ' device' + (r.sent === 1 ? '' : 's') + ')' : 'No device has notifications on'); })
        .catch(function (e) { toast(e.message); });
    };
    document.querySelectorAll('input[name=set-theme]').forEach(function (r) { r.onchange = function () { setPageTheme(r.value); }; });
    document.getElementById('set-drive-btn').onclick = function () {
      if (driveOn) {
        if (!confirm('Disconnect Google Drive? Photos stay in Drive; the album can\'t show them until you connect again.')) return;
        call('disconnectGoogleDrive').then(renderDrive).catch(function (e) { toast(e.message); });
        return;
      }
      call('googleAuthUrl').then(function (u) { location.href = u; }).catch(function (e) { toast(e.message); });
    };
    showTimeMode();
    // back from Google's sign-in page
    var m = /[?&]drive=(\w+)/.exec(location.search);
    if (m) {
      toast({ ok: 'Google Drive connected ♡', denied: 'Google Drive was not connected', expired: 'That took too long — try Connect again',
        norefresh: 'Google didn\'t give long-term access — remove the app at myaccount.google.com/permissions, then Connect again' }[m[1]] || 'Google Drive: ' + m[1]);
      try { history.replaceState(null, '', location.pathname); } catch (e) {}
    }
  }

  /* ---------------- public ---------------- */
  function closeHall() { document.getElementById('village-hall-modal').classList.remove('active'); }

  function build() {
    root = document.getElementById('village');
    if (!root) return false;
    stage = document.getElementById('village-stage');
    labelsEl = document.getElementById('village-labels');
    starBtn = document.getElementById('village-star');
    clockEl = document.getElementById('village-clock');

    starBtn.onclick = function (e) {
      e.stopPropagation();
      if (unlocked()) { lockPersonal(); villageRefresh(); return; }
      openPersonalGate(function () { villageRefresh(); });
    };
    document.getElementById('personal-back').onclick = leaveHouse;
    labelsEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-house]');
      if (b) openHouse(b.dataset.house);
    });
    document.getElementById('village-hall-close').onclick = closeHall;
    document.getElementById('village-hall-work').onclick = function () { closeHall(); requirePersonal(openWork); };
    wireChat();
    wireSettings();
    document.getElementById('gc-close').onclick = function () { document.getElementById('game-center-modal').classList.remove('active'); };
    document.querySelectorAll('.gc-game').forEach(function (b) {
      b.onclick = function () {
        document.getElementById('game-center-modal').classList.remove('active');
        var fn = window[b.dataset.game], h = HOUSES.filter(function (x) { return x.id === 'games'; })[0];
        if (typeof fn !== 'function') return;
        // walk in through the Game Center's door, then start the game
        var fade = document.getElementById('village-fade');
        fade.style.background = roofHex(h.roof);
        var go = function () {
          fade.classList.add('on');
          setTimeout(function () { walkingIn = true; fn(); walkingIn = false; setTimeout(function () { fade.classList.remove('on'); }, 120); }, 120);
        };
        if (scene3d && shown) scene3d.enterHouse('games', go, { at: { k: 0.7, fn: function () { fade.classList.add('on'); } } }); else go();
      };
    });
    // locked again (button, idle timer, expired session) → forget the chat
    window.addEventListener('personal-unauthorized', forgetChat);
    built = true;
    return true;
  }

  // Shows / hides the full-screen village. Called by app.js whenever the page changes.
  function villageShow(on) {
    if (!built && !build()) return;
    shown = !!on;
    document.body.classList.toggle('village-mode', shown);
    if (scene3d) scene3d.show(shown);
    if (!shown) return;
    var fade = document.getElementById('village-fade');
    if (lastLeft && scene3d) {
      var wasShop = lastLeft === 'store';
      scene3d.exitHouse(lastLeft, function () {            // out of the shop: back in the car, on with the drive
        if (wasShop && shopResume) { var r = shopResume; shopResume = null; setTimeout(r, 400); }
      });
    }
    lastLeft = null;
    setTimeout(function () { fade.classList.remove('on'); }, 200);   // the camera is in the doorway by then
    ensureScene();
    villageRefresh();
  }
  // After lock / unlock (and on show): labels, what's due, clock.
  function villageRefresh() {
    if (!built && !build()) return;
    if (!unlocked()) { forgetChat(); closeHall(); document.getElementById('village-settings-modal').classList.remove('active'); }
    if (!shown) return;
    tickClock();
    renderLabels();
    if (unlocked()) loadUrgent(); else { setUrgent([]); busyMap = {}; pushBusy(); }
  }

  window.villageShow = villageShow;
  window.villageRefresh = villageRefresh;
})();
