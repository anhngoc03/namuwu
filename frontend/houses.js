/**
 * houses.js — Personal › Notes, Goals, Food & Gym, Law.
 * Uses the small helpers from study.js (studyCall, studyEsc, studyMd, studyWait).
 * Server: functions/api.js; tables in supabase/houses.sql; AI bits in lib/houses.js.
 */
function hsMoney(n) { return (typeof formatThousands === 'function' ? formatThousands(Math.round(n || 0)) : String(Math.round(n || 0))) + ' ₫'; }
function hsDay(d) { return d ? new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''; }
function hsModal(id, on) { document.getElementById(id).classList.toggle('active', on !== false); }
function hsErr(box) { return function (e) { if (box) box.innerHTML = '<div class="st-empty">' + studyEsc(e.message) + '</div>'; else toast(e.message); }; }

/* ======================= NOTES ======================= */
var notesState = { notes: [], field: '', q: '', edit: null, undo: null };
function openNotes() {
  showView('notes-view');
  var box = document.getElementById('notes-main');
  studyWait(box, 'Opening your notes…');
  studyCall('getNotesData').then(function (d) { notesState.notes = d.notes || []; notesRender(); }).catch(hsErr(box));
}
function notesFields() {
  var f = {}; notesState.notes.forEach(function (n) { f[n.field] = (f[n.field] || 0) + 1; });
  return Object.keys(f).sort().map(function (k) { return { name: k, n: f[k] }; });
}
function notesRender() {
  var fields = notesFields(), q = notesState.q.toLowerCase();
  document.getElementById('notes-fields').innerHTML = '<button type="button" class="hs-chip' + (!notesState.field ? ' on' : '') + '" data-nf="">All · ' + notesState.notes.length + '</button>' +
    fields.map(function (f) { return '<button type="button" class="hs-chip' + (notesState.field === f.name ? ' on' : '') + '" data-nf="' + studyEsc(f.name) + '">' + studyEsc(f.name) + ' · ' + f.n + '</button>'; }).join('');
  document.getElementById('note-fields-list').innerHTML = fields.map(function (f) { return '<option value="' + studyEsc(f.name) + '">'; }).join('');
  var list = notesState.notes.filter(function (n) {
    return (!notesState.field || n.field === notesState.field) && (!q || (n.title + ' ' + n.body + ' ' + n.field).toLowerCase().indexOf(q) >= 0);
  });
  var box = document.getElementById('notes-main');
  if (!notesState.notes.length) { box.innerHTML = '<div class="st-empty"><b>No notes yet</b><span>Keep notes by field — work, Japanese, recipes, ideas… The AI can tidy a messy note for you.</span><button type="button" class="pill-btn" data-nn="1">+ Note</button></div>'; return; }
  if (!list.length) { box.innerHTML = '<div class="st-empty">Nothing matches “' + studyEsc(notesState.q) + '”</div>'; return; }
  box.innerHTML = '<div class="hs-grid">' + list.map(function (n) {
    var snip = n.body.replace(/[#*\-]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
    return '<button type="button" class="hs-note" data-note="' + n.id + '">' + (n.pinned ? '<i class="hs-pin">Pinned</i>' : '') +
      '<small>' + studyEsc(n.field) + '</small><b>' + studyEsc(n.title || snip.slice(0, 40) || 'Untitled') + '</b><span>' + studyEsc(snip) + '</span>' +
      '<em>' + hsDay(String(n.updatedAt || '').slice(0, 10)) + '</em></button>';
  }).join('') + '</div>';
}
function noteOpen(n) {
  notesState.edit = n ? Object.assign({}, n) : { id: null, field: notesState.field || '', title: '', body: '', pinned: false };
  notesState.undo = null;
  var e = notesState.edit;
  document.getElementById('note-field').value = e.field; document.getElementById('note-title').value = e.title;
  document.getElementById('note-body').value = e.body; document.getElementById('note-pin').checked = !!e.pinned;
  document.getElementById('note-del').hidden = !e.id; document.getElementById('note-undo').hidden = true;
  noteMode(e.id ? 'read' : 'edit');
  hsModal('note-modal');
}
function noteMode(m) {
  var read = m === 'read', e = notesState.edit;
  document.getElementById('note-read').hidden = !read; document.getElementById('note-form').hidden = read;
  document.getElementById('note-edit').hidden = !read; document.getElementById('note-save').hidden = read; document.getElementById('note-tidy').hidden = read;
  document.getElementById('note-head').textContent = read ? (e.title || 'Note') : (e.id ? 'Edit note' : 'New note');
  if (read) document.getElementById('note-read').innerHTML = '<small class="hs-badge">' + studyEsc(e.field) + '</small>' + studyMd(e.body);
}
function noteRead() { var v = function (id) { return document.getElementById(id).value; }; return { id: notesState.edit.id, field: v('note-field'), title: v('note-title'), body: v('note-body'), pinned: document.getElementById('note-pin').checked }; }
function noteSave() {
  var n = noteRead();
  studyCall('saveNote', n).then(function (d) { notesState.notes = d.notes || []; notesRender(); hsModal('note-modal', false); toast('Saved ✿'); }).catch(hsErr());
}
function noteTidy() {
  var n = noteRead(), btn = document.getElementById('note-tidy');
  if (!n.body.trim()) { toast('Write something first'); return; }
  btn.disabled = true; btn.textContent = 'Tidying…';
  studyCall('tidyNote', n).then(function (r) {
    notesState.undo = { title: n.title, body: n.body };
    document.getElementById('note-title').value = r.title; document.getElementById('note-body').value = r.body;
    document.getElementById('note-undo').hidden = false; toast('Tidied — check it, then Save');
  }).catch(hsErr()).then(function () { btn.disabled = false; btn.textContent = 'Tidy up'; });
}

/* ======================= GOALS ======================= */
var goalsState = { year: 0, years: [], goals: [], today: '', edit: null };
function openGoals() {
  showView('goals-view');
  goalsLoad(goalsState.year || new Date().getFullYear());
}
function goalsLoad(y) {
  var box = document.getElementById('goals-main');
  studyWait(box, 'Opening your goals…');
  studyCall('getGoalsData', y).then(function (d) { goalsState.year = d.year; goalsState.years = d.years; goalsState.goals = d.goals || []; goalsState.today = d.today; goalsRender(); }).catch(hsErr(box));
}
/* ---- Goals › Wishlist: what I want and what it costs, cheapest first; tick it when it's mine ---- */
var wishState = { items: [], tab: 'goals', loaded: false };
function goalsTab(t) {
  wishState.tab = t;
  document.querySelectorAll('#goals-tabs [data-gtab]').forEach(function (b) { b.classList.toggle('on', b.dataset.gtab === t); });
  var show = function (id, on) { document.getElementById(id).style.display = on ? '' : 'none'; };
  show('goals-main', t === 'goals'); show('wish-main', t === 'wish'); show('goals-new', t === 'goals'); show('goals-year', t === 'goals');
  if (t === 'wish') {
    if (wishState.loaded) wishRender();
    else { studyWait(document.getElementById('wish-list'), 'Opening your wishlist…');
      studyCall('getGoalWishlist').then(function (d) { wishState.items = d.items || []; wishState.loaded = true; wishRender(); }).catch(hsErr(document.getElementById('wish-list'))); }
  }
}
function wishMoney(n) { return n ? formatThousands(n) + 'đ' : '—'; }
function wishRender() {
  var box = document.getElementById('wish-list'), byPrice = function (a, b) { return a.price - b.price || a.name.localeCompare(b.name); };
  var todo = wishState.items.filter(function (i) { return !i.done; }).sort(byPrice), got = wishState.items.filter(function (i) { return i.done; }).sort(byPrice);
  if (!wishState.items.length) { box.innerHTML = '<div class="st-empty"><b>Nothing on the wishlist yet</b><span>Add something you want and what it costs — the cheapest comes first.</span></div>'; return; }
  var line = function (i) {
    return '<div class="wl-item' + (i.done ? ' done' : '') + '"><label><input type="checkbox" data-wt="' + i.id + '"' + (i.done ? ' checked' : '') + '><span class="wl-name">' + studyEsc(i.name) + '</span></label>' +
      '<b class="wl-price">' + wishMoney(i.price) + '</b><button type="button" class="wl-del" data-wd="' + i.id + '" aria-label="Remove">✕</button></div>';
  };
  var sum = todo.reduce(function (a, i) { return a + i.price; }, 0);
  box.innerHTML = '<div class="st-card wl-card">' + (todo.length ? todo.map(line).join('') : '<p class="wl-none">Everything here is yours already ♡</p>') +
    '<div class="wl-sum"><span>Still to save</span><b>' + wishMoney(sum) + '</b></div></div>' +
    (got.length ? '<h3 class="wl-h">Got it · ' + got.length + '</h3><div class="st-card wl-card">' + got.map(line).join('') + '</div>' : '');
}
function wishSave() {
  return studyCall('saveGoalWishlist', wishState.items).then(function (d) { wishState.items = d.items || []; wishRender(); }).catch(hsErr());
}
function wishWire() {
  var $ = function (id) { return document.getElementById(id); };
  $('goals-tabs').onclick = function (e) { var b = e.target.closest('[data-gtab]'); if (b) goalsTab(b.dataset.gtab); };
  $('wish-price').oninput = function () { var d = this.value.replace(/\D/g, ''); this.value = d ? formatThousands(Number(d)) : ''; };
  $('wish-form').onsubmit = function (e) {
    e.preventDefault();
    var name = $('wish-name').value.trim(); if (!name) return;
    wishState.items.push({ id: Date.now().toString(36), name: name, price: Number($('wish-price').value.replace(/\D/g, '')) || 0, done: false });
    $('wish-name').value = ''; $('wish-price').value = ''; wishRender(); wishSave(); $('wish-name').focus();
  };
  $('wish-list').onchange = function (e) {
    var c = e.target.closest('[data-wt]'); if (!c) return;
    wishState.items.forEach(function (i) { if (i.id === c.dataset.wt) { i.done = c.checked; i.doneAt = ''; } });
    wishRender(); wishSave();
    if (c.checked) toast('Yay, it’s yours ✿');
  };
  $('wish-list').onclick = function (e) {
    var d = e.target.closest('[data-wd]'); if (!d) return;
    var it = wishState.items.filter(function (i) { return i.id === d.dataset.wd; })[0];
    if (!it || !confirm('Remove “' + it.name + '” from the wishlist?')) return;
    wishState.items = wishState.items.filter(function (i) { return i !== it; }); wishRender(); wishSave();
  };
}
function goalPct(g) {
  if (g.status === 'done') return 100;
  var st = g.steps.length ? g.steps.filter(function (s) { return s.done; }).length / g.steps.length : null;
  var mo = g.target ? Math.min(1, g.saved / g.target) : null;
  var v = st != null && mo != null ? (st + mo) / 2 : st != null ? st : mo != null ? mo : 0;
  return Math.round(v * 100);
}
function goalsRender() {
  var sel = document.getElementById('goals-year');
  sel.innerHTML = goalsState.years.map(function (y) { return '<option' + (y === goalsState.year ? ' selected' : '') + '>' + y + '</option>'; }).join('');
  var gs = goalsState.goals, box = document.getElementById('goals-main'), today = goalsState.today;
  if (!gs.length) { box.innerHTML = '<div class="st-empty"><b>No goals for ' + goalsState.year + ' yet</b><span>Write down what you want this year, how much it costs, and the steps to get there.</span><button type="button" class="pill-btn" data-ng="1">+ Goal</button></div>'; return; }
  var act = gs.filter(function (g) { return g.status === 'active'; }), done = gs.filter(function (g) { return g.status === 'done'; });
  var target = gs.filter(function (g) { return g.status !== 'dropped'; }).reduce(function (s, g) { return s + g.target; }, 0);
  var saved = gs.filter(function (g) { return g.status !== 'dropped'; }).reduce(function (s, g) { return s + Math.min(g.saved, g.target || g.saved); }, 0);
  var html = '<div class="st-card hs-sum"><div><b>' + done.length + ' / ' + (act.length + done.length) + '</b><small>goals done</small></div>' +
    '<div><b>' + hsMoney(saved) + '</b><small>of ' + hsMoney(target) + ' saved</small></div>' +
    '<div class="st-bar big"><i style="width:' + (target ? Math.round(saved / target * 100) : 0) + '%"></i></div></div>';
  html += gs.map(function (g) {
    var pc = goalPct(g), next = g.steps.filter(function (s) { return !s.done; })[0];
    var late = g.status === 'active' && g.deadline && g.deadline < today;
    return '<button type="button" class="st-plan hs-goal ' + g.status + '" data-goal="' + g.id + '">' +
      '<div class="st-plan-top"><b>' + studyEsc(g.title) + '</b>' + (g.area ? '<em>' + studyEsc(g.area) + '</em>' : '') + (g.status !== 'active' ? '<em>' + g.status + '</em>' : '') + '</div>' +
      '<div class="st-bar"><i style="width:' + pc + '%"></i></div>' +
      '<div class="st-plan-meta"><span>' + pc + '%' + (g.steps.length ? ' · ' + g.steps.filter(function (s) { return s.done; }).length + '/' + g.steps.length + ' steps' : '') + '</span>' +
      '<span' + (late ? ' class="st-late"' : '') + '>' + (g.deadline ? (late ? 'late · ' : 'by ') + hsDay(g.deadline) : '') + '</span></div>' +
      (g.target ? '<div class="st-next">Saved ' + hsMoney(g.saved) + ' / ' + hsMoney(g.target) + '</div>' : '') +
      (next && g.status === 'active' ? '<div class="st-next">Next: <b>' + studyEsc(next.text) + '</b>' + (next.due ? ' · ' + hsDay(next.due) : '') + '</div>' : '') + '</button>';
  }).join('');
  box.innerHTML = html;
}
function goalOpen(g) {
  goalsState.edit = g ? JSON.parse(JSON.stringify(g)) : { id: null, year: goalsState.year, title: '', area: '', why: '', deadline: '', target: 0, saved: 0, status: 'active', steps: [] };
  var e = goalsState.edit, $ = function (id) { return document.getElementById(id); };
  $('goal-head').textContent = e.id ? 'Goal' : 'New goal';
  $('goal-title').value = e.title; $('goal-area').value = e.area; $('goal-why').value = e.why; $('goal-deadline').value = e.deadline || '';
  $('goal-target').value = e.target ? Number(e.target).toLocaleString('en-US') : ''; $('goal-saved').value = e.saved ? Number(e.saved).toLocaleString('en-US') : ''; $('goal-status').value = e.status;
  $('goal-del').hidden = !e.id;
  goalSteps();
  hsModal('goal-modal');
}
function goalSteps() {
  var e = goalsState.edit;
  document.getElementById('goal-steps').innerHTML = e.steps.map(function (s, i) {
    return '<div class="hs-step' + (s.done ? ' done' : '') + '"><button type="button" class="st-check" data-gs="tick" data-i="' + i + '">' + (s.done ? '✓' : '') + '</button>' +
      '<input type="text" value="' + studyEsc(s.text) + '" data-gs="text" data-i="' + i + '"><input type="date" value="' + (s.due || '') + '" data-gs="due" data-i="' + i + '">' +
      '<button type="button" class="hs-x" data-gs="del" data-i="' + i + '">✕</button></div>';
  }).join('') || '<div class="st-none">No steps yet — add one</div>';
}
function goalRead() {
  var e = goalsState.edit, $ = function (id) { return document.getElementById(id).value; };
  return { id: e.id, year: e.year, title: $('goal-title'), area: $('goal-area'), why: $('goal-why'), deadline: $('goal-deadline'),
    target: Number(String($('goal-target')).replace(/[^\d]/g, '')) || 0, saved: Number(String($('goal-saved')).replace(/[^\d]/g, '')) || 0, status: $('goal-status'), steps: e.steps };
}

/* ======================= FOOD & GYM ======================= */
var hlState = { day: '', today: '', logs: [], profile: {}, lastWeight: null, from: '', to: '' };
function openHealth() {
  showView('health-view');
  hlLoad();
}
function hlLoad() {
  var box = document.getElementById('health-main');
  studyWait(box, 'Opening your diary…');
  studyCall('getHealthData').then(hlSet).catch(hsErr(box));
}
function hlSet(d) {
  hlState.logs = d.logs || []; hlState.profile = d.profile || {}; hlState.lastWeight = d.lastWeight; hlState.today = d.today; hlState.from = d.from; hlState.to = d.to;
  if (!hlState.day) hlState.day = d.today;
  hlRender();
}
function hlAddDays(day, n) { var x = new Date(day + 'T00:00:00Z'); x.setUTCDate(x.getUTCDate() + n); return x.toISOString().slice(0, 10); }
function hlRender() {
  var day = hlState.day, p = hlState.profile, logs = hlState.logs.filter(function (l) { return l.day === day; });
  var meals = logs.filter(function (l) { return l.kind === 'meal'; }), wos = logs.filter(function (l) { return l.kind === 'workout'; });
  var eat = meals.reduce(function (s, l) { return s + (l.kcal || 0); }, 0), burn = wos.reduce(function (s, l) { return s + (l.kcal || 0); }, 0);
  var mins = wos.reduce(function (s, l) { return s + (l.minutes || 0); }, 0);
  var water = logs.filter(function (l) { return l.kind === 'water'; }).reduce(function (s, l) { return s + (l.value || 0); }, 0);
  var wt = logs.filter(function (l) { return l.kind === 'weight'; }).slice(-1)[0];
  var target = p.kcalTarget || 0;
  var lbl = day === hlState.today ? 'Today' : hsDay(day);
  var row = function (l) {
    var icon = '<i class="hs-dot ' + l.kind + '"></i>';
    var right = l.kind === 'meal' ? (l.kcal != null ? l.kcal + ' kcal' : '') : l.kind === 'workout' ? [(l.minutes ? l.minutes + ' min' : ''), (l.kcal ? '−' + l.kcal + ' kcal' : '')].filter(Boolean).join(' · ') : l.kind === 'weight' ? l.value + ' kg' : l.value + ' ml';
    return '<div class="hs-log"><span>' + icon + '</span><b>' + studyEsc(l.title || (l.kind === 'weight' ? 'Weight' : 'Water')) + '</b><em>' + right + '</em><button type="button" class="hs-x" data-hl="del" data-id="' + l.id + '">✕</button></div>';
  };
  // the last 7 days, little bars
  var days = []; for (var k = 6; k >= 0; k--) days.push(hlAddDays(day, -k));
  var dk = days.map(function (d) { var ls = hlState.logs.filter(function (l) { return l.day === d; });
    return { d: d, eat: ls.filter(function (l) { return l.kind === 'meal'; }).reduce(function (s, l) { return s + (l.kcal || 0); }, 0), min: ls.filter(function (l) { return l.kind === 'workout'; }).reduce(function (s, l) { return s + (l.minutes || 0); }, 0) }; });
  var maxE = Math.max(target || 0, 1, Math.max.apply(null, dk.map(function (x) { return x.eat; }))), maxM = Math.max(30, Math.max.apply(null, dk.map(function (x) { return x.min; })));
  var weights = hlState.logs.filter(function (l) { return l.kind === 'weight'; });
  var html = '<div class="st-card hs-day"><div class="hs-daynav"><button type="button" data-hl="prev">‹</button><b>' + lbl + '</b><button type="button" data-hl="next"' + (day >= hlState.today ? ' disabled' : '') + '>›</button></div>' +
    '<div class="hs-rings">' +
    '<div><b>' + eat + '</b><small>kcal eaten' + (target ? ' / ' + target : '') + '</small>' + (target ? '<div class="st-bar"><i style="width:' + Math.min(100, Math.round(eat / target * 100)) + '%"></i></div>' : '') + '</div>' +
    '<div><b>' + mins + '</b><small>min moved' + (burn ? ' · −' + burn + ' kcal' : '') + '</small></div>' +
    '<div><b>' + (wt ? wt.value : (hlState.lastWeight || '–')) + '</b><small>kg' + (p.goalWeight ? ' · goal ' + p.goalWeight : '') + '</small></div>' +
    '<div><b>' + (water / 1000).toFixed(1) + '</b><small>L water</small></div></div>' +
    '<div class="hs-add"><button type="button" data-hl="add" data-k="meal">Meal</button><button type="button" data-hl="add" data-k="workout">Workout</button><button type="button" data-hl="add" data-k="weight">Weight</button><button type="button" data-hl="water">Water +250 ml</button></div>' +
    (logs.length ? logs.map(row).join('') : '<div class="st-none">Nothing logged ' + (day === hlState.today ? 'yet today' : 'this day') + '</div>') + '</div>';
  html += '<div class="st-card"><div class="st-week-h"><b>Last 7 days</b><span></span></div><div class="hs-bars">' + dk.map(function (x) {
    return '<div class="hs-bar' + (x.d === day ? ' on' : '') + '" data-hl="day" data-d="' + x.d + '"><div class="hs-bar-in"><i class="e" style="height:' + Math.round(x.eat / maxE * 100) + '%"></i><i class="m" style="height:' + Math.round(x.min / maxM * 100) + '%"></i></div><small>' + new Date(x.d + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'narrow' }) + '</small></div>';
  }).join('') + '</div><div class="hs-legend"><span><i class="e"></i>kcal eaten</span><span><i class="m"></i>minutes moved</span>' +
    (weights.length > 1 ? '<span>Weight ' + weights[0].value + ' → ' + weights[weights.length - 1].value + ' kg (4 weeks)</span>' : '') + '</div></div>';
  html += '<div class="st-card"><div class="st-week-h"><b>My plan</b><span>' + (p.planAt ? 'made ' + hsDay(p.planAt) : '') + '</span><button type="button" class="st-chip" data-hl="profile">⚙︎ Me</button></div>' +
    (p.plan ? '<div class="st-body hs-plan">' + studyMd(p.plan) + '</div>' : '<div class="st-none">Fill in “Me” (height, weight, goal), then let the AI plan a week of meals and workouts</div>') +
    '<div class="st-acts"><button type="button" class="pill-btn" data-hl="plan">' + (p.plan ? 'New plan for this week' : 'Plan my week') + '</button></div></div>';
  document.getElementById('health-main').innerHTML = html;
}
function hlAdd(kind) {
  var $ = function (id) { return document.getElementById(id); };
  $('hl-head').textContent = { meal: 'Meal', workout: 'Workout', weight: 'Weight' }[kind];
  $('hl-modal').dataset.kind = kind;
  $('hl-title-wrap').hidden = kind === 'weight'; $('hl-min-wrap').hidden = kind !== 'workout'; $('hl-kcal-wrap').hidden = kind === 'weight'; $('hl-val-wrap').hidden = kind !== 'weight';
  $('hl-title').value = ''; $('hl-min').value = ''; $('hl-kcal').value = ''; $('hl-val').value = kind === 'weight' && hlState.lastWeight ? hlState.lastWeight : ''; $('hl-note').textContent = '';
  $('hl-title').placeholder = kind === 'meal' ? 'e.g. phở bò, 1 bát' : 'e.g. chạy bộ, yoga, gym tay';
  hsModal('hl-modal');
  setTimeout(function () { (kind === 'weight' ? $('hl-val') : $('hl-title')).focus(); }, 200);
}
function hlSave() {
  var $ = function (id) { return document.getElementById(id).value; }, kind = document.getElementById('hl-modal').dataset.kind;
  var l = { kind: kind, day: hlState.day, title: $('hl-title'), kcal: $('hl-kcal'), minutes: $('hl-min'), value: $('hl-val') };
  studyCall('saveHealthLog', l, [hlState.from, hlState.to]).then(function (d) { hlSet(d); hsModal('hl-modal', false); }).catch(hsErr());
}

/* ======================= LAW ======================= */
var lawState = { docs: [], filter: 'all', q: '', lastCheck: null, busy: false };
function openLaw() {
  showView('law-view');
  var box = document.getElementById('law-main');
  studyWait(box, 'Opening the law library…');
  studyCall('getLawDocs').then(function (d) { lawState.docs = d.docs || []; lawState.lastCheck = d.lastCheck; lawRender(); }).catch(hsErr(box));
}
function lawRender() {
  var f = lawState.filter, q = lawState.q.toLowerCase();
  var cnt = function (fn) { return lawState.docs.filter(fn).length; };
  var filters = [['all', 'All', function () { return true; }], ['health', 'Health', function (d) { return d.field === 'health'; }], ['law', 'Laws & codes', function (d) { return d.field === 'law'; }],
    ['unread', 'Unread', function (d) { return !d.read; }], ['star', 'Starred', function (d) { return d.starred; }]];
  document.getElementById('law-filters').innerHTML = filters.map(function (x) { return '<button type="button" class="hs-chip' + (f === x[0] ? ' on' : '') + '" data-lf="' + x[0] + '">' + x[1] + ' · ' + cnt(x[2]) + '</button>'; }).join('');
  document.getElementById('law-last').textContent = lawState.lastCheck ? 'Last checked ' + hsDay(lawState.lastCheck) : 'Not checked yet';
  var fn = filters.filter(function (x) { return x[0] === f; })[0][2];
  var list = lawState.docs.filter(fn).filter(function (d) { return !q || (d.number + ' ' + d.title + ' ' + d.summary + ' ' + d.issuer).toLowerCase().indexOf(q) >= 0; });
  var box = document.getElementById('law-main');
  if (!lawState.docs.length) { box.innerHTML = '<div class="st-empty"><b>No documents yet</b><span>Tap “Check for new documents”: the AI searches vbpl.vn, baochinhphu.vn and thuvienphapluat.vn and keeps a short summary of each new one (health first, plus all laws and codes).</span></div>'; return; }
  if (!list.length) { box.innerHTML = '<div class="st-empty">Nothing here</div>'; return; }
  box.innerHTML = list.map(function (d) {
    var st = String(d.status || '').toLowerCase(), cls = /hết hiệu lực/.test(st) ? 'low' : /chưa/.test(st) ? 'ok' : st ? 'good' : 'todo';
    return '<div class="st-card hs-law' + (d.read ? ' read' : '') + '" data-law="' + d.id + '">' +
      '<div class="hs-law-top"><small>' + studyEsc(d.kind) + ' · ' + studyEsc(d.number) + '</small><button type="button" class="hs-star' + (d.starred ? ' on' : '') + '" data-la="star" data-id="' + d.id + '">' + (d.starred ? '★' : '☆') + '</button></div>' +
      '<b>' + studyEsc(d.title) + '</b>' +
      '<div class="hs-law-meta">' + (d.issuer ? '<span>' + studyEsc(d.issuer) + '</span>' : '') + (d.issued ? '<span>Issued ' + hsDay(d.issued) + '</span>' : '') + (d.effective ? '<span>In force ' + hsDay(d.effective) + '</span>' : '') +
      (d.status ? '<em class="' + cls + '">' + studyEsc(d.status) + '</em>' : '') + '</div>' +
      (d.summary ? '<p>' + studyEsc(d.summary) + '</p>' : '') +
      '<div class="hs-law-acts">' + (d.url ? '<a href="' + studyEsc(d.url) + '" target="_blank" rel="noopener noreferrer" data-la="open" data-id="' + d.id + '">Open source ↗</a>' : '') +
      '<button type="button" data-la="read" data-id="' + d.id + '">' + (d.read ? 'Mark unread' : '✓ Read') + '</button><button type="button" data-la="del" data-id="' + d.id + '">Remove</button></div></div>';
  }).join('');
}
function lawCheck() {
  if (lawState.busy) return;
  var scope = document.getElementById('law-scope').value, btn = document.getElementById('law-check');
  lawState.busy = true; btn.disabled = true; btn.textContent = 'Searching… (1–2 min)';
  studyCall('checkLawUpdates', scope).then(function (d) {
    lawState.docs = d.docs || []; lawState.lastCheck = d.lastCheck; lawState.filter = d.added ? 'unread' : lawState.filter; lawRender();
    toast(d.added ? d.added + ' new document' + (d.added > 1 ? 's' : '') + ' ✿' : 'Nothing new since last time');
  }).catch(hsErr()).then(function () { lawState.busy = false; btn.disabled = false; btn.textContent = 'Check for new documents'; });
}
function lawSet(id, patch) {
  var d = lawState.docs.filter(function (x) { return x.id === id; })[0]; if (!d) return;
  if ('read' in patch) d.read = patch.read; if ('starred' in patch) d.starred = patch.starred;
  lawRender(); studyCall('setLawDoc', id, patch).catch(hsErr());
}

/* ======================= wiring ======================= */
function housesWire() {
  var $ = function (id) { return document.getElementById(id); };
  // notes
  $('notes-new').onclick = function () { noteOpen(null); };
  $('notes-q').oninput = function () { notesState.q = this.value; notesRender(); };
  $('notes-fields').onclick = function (e) { var b = e.target.closest('[data-nf]'); if (!b) return; notesState.field = b.dataset.nf; notesRender(); };
  $('notes-main').onclick = function (e) {
    if (e.target.closest('[data-nn]')) { noteOpen(null); return; }
    var b = e.target.closest('[data-note]'); if (!b) return;
    noteOpen(notesState.notes.filter(function (n) { return n.id === Number(b.dataset.note); })[0]);
  };
  $('note-close').onclick = function () { hsModal('note-modal', false); };
  $('note-edit').onclick = function () { noteMode('edit'); };
  $('note-save').onclick = noteSave; $('note-tidy').onclick = noteTidy;
  $('note-undo').onclick = function () { var u = notesState.undo; if (!u) return; $('note-title').value = u.title; $('note-body').value = u.body; this.hidden = true; };
  $('note-del').onclick = function () { var id = notesState.edit.id; if (!id || !confirm('Delete this note?')) return; studyCall('deleteNote', id).then(function (d) { notesState.notes = d.notes || []; notesRender(); hsModal('note-modal', false); }).catch(hsErr()); };
  // goals
  wishWire();
  $('goals-new').onclick = function () { goalOpen(null); };
  $('goals-year').onchange = function () { goalsLoad(Number(this.value)); };
  $('goals-main').onclick = function (e) {
    if (e.target.closest('[data-ng]')) { goalOpen(null); return; }
    var b = e.target.closest('[data-goal]'); if (!b) return;
    goalOpen(goalsState.goals.filter(function (g) { return g.id === Number(b.dataset.goal); })[0]);
  };
  $('goal-close').onclick = function () { hsModal('goal-modal', false); };
  $('goal-steps').addEventListener('click', function (e) {
    var b = e.target.closest('[data-gs]'); if (!b) return; var i = Number(b.dataset.i), st = goalsState.edit.steps;
    if (b.dataset.gs === 'tick') { st[i].done = !st[i].done; goalSteps(); } else if (b.dataset.gs === 'del') { st.splice(i, 1); goalSteps(); }
  });
  $('goal-steps').addEventListener('input', function (e) {
    var b = e.target.closest('[data-gs]'); if (!b) return; var s = goalsState.edit.steps[Number(b.dataset.i)];
    if (b.dataset.gs === 'text') s.text = b.value; else if (b.dataset.gs === 'due') s.due = b.value;
  });
  $('goal-add-step').onclick = function () { goalsState.edit.steps.push({ text: '', done: false, due: '' }); goalSteps(); var ins = $('goal-steps').querySelectorAll('input[data-gs="text"]'); if (ins.length) ins[ins.length - 1].focus(); };
  $('goal-save').onclick = function () { studyCall('saveGoal', goalRead()).then(function (d) { goalsState.year = d.year; goalsState.years = d.years; goalsState.goals = d.goals; goalsRender(); hsModal('goal-modal', false); toast('Saved ✿'); }).catch(hsErr()); };
  $('goal-del').onclick = function () { var e = goalsState.edit; if (!e.id || !confirm('Delete this goal?')) return; studyCall('deleteGoal', e.id, goalsState.year).then(function (d) { goalsState.goals = d.goals; goalsRender(); hsModal('goal-modal', false); }).catch(hsErr()); };
  ['goal-target', 'goal-saved'].forEach(function (id) { $(id).addEventListener('input', function () { var n = this.value.replace(/[^\d]/g, ''); this.value = n ? Number(n).toLocaleString('en-US') : ''; }); });
  // food & gym
  $('health-main').onclick = function (e) {
    var b = e.target.closest('[data-hl]'); if (!b) return; var k = b.dataset.hl;
    if (k === 'prev') { hlState.day = hlAddDays(hlState.day, -1); if (hlState.day < hlState.from) { hlState.from = hlAddDays(hlState.day, -27); studyCall('getHealthData', hlState.from, hlState.to).then(hlSet).catch(hsErr()); } else hlRender(); }
    else if (k === 'next') { if (hlState.day < hlState.today) { hlState.day = hlAddDays(hlState.day, 1); hlRender(); } }
    else if (k === 'day') { hlState.day = b.dataset.d; hlRender(); }
    else if (k === 'add') hlAdd(b.dataset.k);
    else if (k === 'water') studyCall('saveHealthLog', { kind: 'water', day: hlState.day, value: 250, title: 'Water' }, [hlState.from, hlState.to]).then(function (d) { hlSet(d); toast('+250 ml water'); }).catch(hsErr());
    else if (k === 'del') studyCall('deleteHealthLog', Number(b.dataset.id), [hlState.from, hlState.to]).then(hlSet).catch(hsErr());
    else if (k === 'profile') { var p = hlState.profile; $('hp-height').value = p.height || ''; $('hp-weight').value = p.weight || hlState.lastWeight || ''; $('hp-goalw').value = p.goalWeight || ''; $('hp-kcal').value = p.kcalTarget || ''; $('hp-goal').value = p.goal || ''; $('hp-notes').value = p.notes || ''; hsModal('hp-modal'); }
    else if (k === 'plan') {
      b.disabled = true; b.textContent = 'Planning… (about a minute)';
      studyCall('makeHealthPlan').then(function (p) { hlState.profile = p; hlRender(); toast('Your week is planned ✿'); }).catch(function (e2) { toast(e2.message); b.disabled = false; b.textContent = 'Plan my week'; });
    }
  };
  $('hl-close').onclick = function () { hsModal('hl-modal', false); };
  $('hl-save').onclick = hlSave;
  $('hp-close').onclick = function () { hsModal('hp-modal', false); };
  $('hp-save').onclick = function () {
    var v = function (id) { return $(id).value; };
    studyCall('saveHealthProfile', { height: v('hp-height'), weight: v('hp-weight'), goalWeight: v('hp-goalw'), kcalTarget: v('hp-kcal'), goal: v('hp-goal'), notes: v('hp-notes') })
      .then(function (p) { hlState.profile = p; hlRender(); hsModal('hp-modal', false); toast('Saved ✿'); }).catch(hsErr());
  };
  // law
  $('law-check').onclick = lawCheck;
  $('law-q').oninput = function () { lawState.q = this.value; lawRender(); };
  $('law-filters').onclick = function (e) { var b = e.target.closest('[data-lf]'); if (!b) return; lawState.filter = b.dataset.lf; lawRender(); };
  $('law-main').addEventListener('click', function (e) {
    var b = e.target.closest('[data-la]'); if (!b) return; var id = Number(b.dataset.id), d = lawState.docs.filter(function (x) { return x.id === id; })[0]; if (!d) return;
    if (b.dataset.la === 'star') lawSet(id, { starred: !d.starred });
    else if (b.dataset.la === 'read') lawSet(id, { read: !d.read });
    else if (b.dataset.la === 'open') { if (!d.read) lawSet(id, { read: true }); }
    else if (b.dataset.la === 'del' && confirm('Remove this document from the list?')) studyCall('deleteLawDoc', id).then(function (r) { lawState.docs = r.docs || []; lawRender(); }).catch(hsErr());
  });
}
document.addEventListener('DOMContentLoaded', housesWire);
