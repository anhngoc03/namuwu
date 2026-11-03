/**
 * village.js — Personal › the village (UI side). The 3D scene itself is
 * frontend/village3d.js (built from src/village3d.js, three.js bundled in),
 * loaded the first time Personal opens.
 * ------------------------------------------------------------------
 * Full screen. Top-right: clock + date, 🛖 = back to Home (the only way out),
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
    { id: 'love',     label: 'Love',       roof: 'pink',  open: null, heart: true },
    { id: 'goals',    label: 'Goals',      roof: 'lav',   open: null }
  ];

  var root, stage, labelsEl, starBtn, clockEl;
  var scene3d = null, loading = false, shown = false, built = false;
  var urgent = [];
  var tagEls = {};

  function unlocked() { return typeof personalUnlocked !== 'undefined' && personalUnlocked; }

  /* ---------------- 3D scene (lazy) ---------------- */
  function ensureScene() {
    if (scene3d || loading) return;
    if (window.Village3D) { makeScene(); return; }
    loading = true;
    var sc = document.createElement('script');
    sc.src = '/village3d.js?v=3';
    sc.onload = function () { loading = false; makeScene(); };
    sc.onerror = function () { loading = false; toast("Couldn't load the village ʕ´-ก̀ʔᐝ"); };
    document.head.appendChild(sc);
  }
  function makeScene() {
    try {
      scene3d = window.Village3D.create(stage, {
        houses: HOUSES,
        onPick: function (id) { openHouse(id); }      // ignored while locked
      });
    } catch (e) {
      toast('This device can\'t show 3D ʕ´-ก̀ʔᐝ');
      return;
    }
    scene3d.onFrame(placeTags);
    scene3d.setUrgent(urgent.length);
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

  /* ---------------- clock + date (next to 🛖) ---------------- */
  var DAYS = ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'];
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function tickClock() {
    if (!clockEl) return;
    var d = new Date();
    clockEl.innerHTML = '<b>' + two(d.getHours()) + ':' + two(d.getMinutes()) + '</b><span>' +
      DAYS[d.getDay()] + ' · ' + two(d.getDate()) + '/' + two(d.getMonth() + 1) + '/' + d.getFullYear() + '</span>';
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
    requirePersonal(window[h.open]);
  }

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
      })
      .withFailureHandler(function () { setUrgent([]); })
      .getWorkData();
  }
  function setUrgent(list) {
    urgent = list || [];
    if (scene3d) scene3d.setUrgent(urgent.length);
    renderLabels();
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
    if (!unlocked()) { forgetChat(); closeHall(); }
    if (!shown) return;
    tickClock();
    renderLabels();
    if (unlocked()) loadUrgent(); else setUrgent([]);
  }

  window.villageShow = villageShow;
  window.villageRefresh = villageRefresh;
})();
