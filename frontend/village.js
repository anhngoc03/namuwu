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
    { id: 'language', label: 'Languages',  roof: 'pink',  open: null },
    { id: 'skills',   label: 'Skills',     roof: 'yellow',open: null },
    { id: 'law',      label: 'Law',        roof: 'blue',  open: null },
    { id: 'health',   label: 'Food & Gym', roof: 'mint',  open: null },
    { id: 'notes',    label: 'Notes',      roof: 'yellow',open: null },
    { id: 'love',     label: 'Love',       roof: 'pink',  open: 'openLove', heart: true },
    { id: 'goals',    label: 'Goals',      roof: 'lav',   open: null }
  ];

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
    sc.src = '/village3d.js?v=8';
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
        onPick: function (id) { openHouse(id); }      // houses: ignored while locked (cat, dog, fish always react)
      });
    } catch (e) {
      toast('This device can\'t show 3D ʕ´-ก̀ʔᐝ');
      return;
    }
    scene3d.onFrame(placeTags);
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
  function renderLabels() {
    if (!labelsEl) return;
    root.classList.toggle('village-unlocked', unlocked());
    tagEls = {};
    if (!unlocked()) { labelsEl.innerHTML = ''; return; }
    var html = '';
    HOUSES.forEach(function (h) {
      html += '<button type="button" class="village-tag' + (h.open ? '' : ' soon') + '" data-house="' + h.id + '">' + h.label + '</button>';
    });
    html += '<button type="button" class="village-tag hall' + (urgent.length ? ' alert' : '') + '" data-house="hall">Town Hall' +
      (urgent.length ? ' <b>' + urgent.length + '</b>' : '') + '</button>';
    labelsEl.innerHTML = html;
    labelsEl.querySelectorAll('[data-house]').forEach(function (b) { tagEls[b.dataset.house] = b; });
    placeTags();
  }
  function placeTags() {
    if (!scene3d) return;
    for (var id in tagEls) {
      var a = scene3d.anchor(id), el = tagEls[id];
      if (!a || !a.visible) { el.style.display = 'none'; continue; }
      el.style.display = '';
      el.style.transform = 'translate(' + Math.round(a.x) + 'px,' + Math.round(a.y) + 'px) translate(-50%,-100%)';
    }
  }

  function openHouse(id) {
    if (!unlocked()) return;
    if (id === 'hall') { openHall(); return; }
    var h = HOUSES.filter(function (x) { return x.id === id; })[0];
    if (!h) return;
    if (!h.open || typeof window[h.open] !== 'function') { toast('Coming soon ✿'); return; }
    if (entering) return;
    entering = true;
    // walk in: camera to the door, door opens, fade, then the room + the page
    var fade = document.getElementById('village-fade');
    fade.style.background = '#' + ('00000' + ((window.Village3D && Village3D.ROOF[h.roof]) || 0xf6a9bd).toString(16)).slice(-6);
    var go = function () {
      fade.classList.add('on');
      setTimeout(function () {
        entering = false;
        requirePersonal(window[h.open]);
        setTimeout(function () { fade.classList.remove('on'); }, 380);
      }, 260);
    };
    if (scene3d) scene3d.enterHouse(id, go); else go();
  }
  var entering = false;

  /* ---------------- inside a house: the room behind a feature page ---------------- */
  var VIEW_HOUSE = { 'work-view': 'work', 'expense-view': 'money', 'calendar-view': 'calendar', 'accounts-view': 'account', 'love-view': 'love' };
  var roomPhotos = [];
  // the Love room's frames show the latest album photos (love.js calls this)
  window.villageRoomPhotos = function (urls) { roomPhotos = urls || []; if (room && room.setPhotos) room.setPhotos(roomPhotos); };
  var room = null, roomWant = null;
  function currentCorner(house) {
    if (house === 'work') return typeof workTab !== 'undefined' ? workTab : 'list';
    if (house === 'money') return typeof expenseActiveTab !== 'undefined' ? expenseActiveTab : 'overview';
    return 'main';
  }
  function villageRoom(viewId) {
    var house = VIEW_HOUSE[viewId] || null;
    roomWant = house;
    var el = document.getElementById('room-bg');
    if (!house) { if (room) { room.destroy(); room = null; } el.classList.remove('on'); return; }
    if (room && room.house === house) { el.classList.add('on'); room.setCorner(currentCorner(house)); return; }
    if (room) { room.destroy(); room = null; }
    var make = function () {
      if (roomWant !== house || room) return;
      var idx = -1;
      HOUSES.forEach(function (h, i) { if (h.id === house) idx = i; });
      var spec = HOUSES[idx];
      try {
        room = Village3D.room(el, {
          house: house, roof: Village3D.ROOF[spec.roof], look: Village3D.LOOKS[idx],
          looks: house === 'love' ? [Village3D.LOVE.her, Village3D.LOVE.him] : null,
          corner: currentCorner(house), timeMode: timeMode()
        });
        if (house === 'love' && roomPhotos.length) room.setPhotos(roomPhotos);
        el.classList.add('on');
      } catch (e) { /* no WebGL: plain page */ }
    };
    if (window.Village3D) make(); else loadScript(make);
  }
  window.villageRoom = villageRoom;
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

  function openHall() {
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
    $('set-private').checked = !!r.private;
  }
  function readSettings() {
    var $ = function (id) { return document.getElementById(id); };
    return {
      morning: { on: $('set-morning-on').checked, time: $('set-morning-time').value },
      evening: { on: $('set-evening-on').checked, time: $('set-evening-time').value },
      before: { on: $('set-before-on').checked, days: Number($('set-before-days').value), time: $('set-before-time').value },
      sources: { work: $('set-src-work').checked, calendar: $('set-src-calendar').checked, todo: $('set-src-todo').checked },
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
  function openSettings() {
    if (!unlocked()) return;
    document.getElementById('village-settings-modal').classList.add('active');
    renderPush();
    renderDrive();
    call('getReminderSettings').then(fillSettings).catch(function (e) { toast(e.message); });
  }
  function wireSettings() {
    document.getElementById('village-gear').onclick = openSettings;
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
    document.getElementById('village-home').onclick = function () { goHome('home'); };
    document.getElementById('personal-back').onclick = function () { goHome('personal'); };
    document.getElementById('personal-home').onclick = function () { goHome('home'); };
    labelsEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-house]');
      if (b) openHouse(b.dataset.house);
    });
    document.getElementById('village-hall-close').onclick = closeHall;
    document.getElementById('village-hall-work').onclick = function () { closeHall(); requirePersonal(openWork); };
    wireChat();
    wireSettings();
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
