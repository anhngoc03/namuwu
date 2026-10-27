/* ------------------------------------------------------------------
 * work.js — Personal › Work: tasks with groups, priority, status, due date,
 * checklist, fee, repeat and a start/stop timer; List / Board / Stats / Groups
 * tabs sharing one set of filters; a "Do first" pick; and the Work block on Home.
 * Server side: functions/api.js (getWorkData, saveWorkTask, …). Tables: supabase/work.sql.
 * Uses helpers from app.js: google.script.run, showView, showLoading/hideLoading,
 * toast, requirePersonal, personalUnlocked, icdEscape, expenseConfirm,
 * expenseAmountInputValue / expenseSetAmountInputValue, confetti, buzz.
 * ------------------------------------------------------------------ */
var workData = { groups: [], tasks: [], today: '', now: '' };
var workClockSkew_ = 0;              // server time − device time (ms), for live timers
var workTab = 'list';
var workEditingId = null;
var workDraftSubs_ = [];
var workDraftPriority_ = 'medium';
var workEditingGroupId = null;
var workTicker_ = null;
// Selected job (a work group): '' = all. Everything below the job chips — Do first,
// List, Board, Stats, Posts — shows only that job. Remembered on this device.
var workJob = '';
try { workJob = localStorage.getItem('henlo_work_job') || ''; } catch (e) {}

var WORK_STATUS_LABEL = { todo: 'To do', doing: 'Doing', paused: 'Paused', done: 'Done' };
var WORK_STATUS_ORDER = ['todo', 'doing', 'paused', 'done'];
var WORK_PRIO_LABEL = { high: 'High', medium: 'Medium', low: 'Low' };
var WORK_PRIO_RANK = { high: 3, medium: 2, low: 1 };

/* ---------- loading ---------- */
function openWork() {
  showView('work-view');
  workLoad();
}
function workLoad() {
  showLoading();
  google.script.run
    .withSuccessHandler(function (d) { hideLoading(); workApply(d); })
    .withFailureHandler(workFail_)
    .getWorkData();
}
function workFail_(err) {
  hideLoading();
  var msg = (err && err.message) || String(err);
  if (/work_tasks|work_groups|does not exist|42P01/.test(msg)) toast('Work isn\'t set up yet — run supabase/work.sql in Supabase');
  else toast('Error: ' + msg);
}
function workRun_(fn) {     // google.script.run with the standard handlers
  showLoading();
  return google.script.run
    .withSuccessHandler(function (d) { hideLoading(); workApply(d); })
    .withFailureHandler(workFail_)[fn];
}
function workApply(d) {
  workData = d || workData;
  if (workData.now) workClockSkew_ = Date.parse(workData.now) - Date.now();
  if (workJob && !workJobGroup()) workSetJob_('');
  workRenderJobs_();
  workRenderAll();
  if (document.getElementById('work-groups-modal').classList.contains('active')) workRenderGroups();
}
function workJobGroup() { return workData.groups.find(function (g) { return String(g.id) === String(workJob); }) || null; }
function workSetJob_(id) {
  workJob = id ? String(id) : '';
  try { localStorage.setItem('henlo_work_job', workJob); } catch (e) {}
}
function workJobTasks() {
  return workJob ? workData.tasks.filter(function (t) { return String(t.groupId) === workJob; }) : workData.tasks;
}
// chips: All · each job · ⚙ (manage jobs)
function workRenderJobs_() {
  var box = document.getElementById('work-jobs');
  box.innerHTML = '';
  var chip = function (label, id) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'work-job' + (String(id) === workJob ? ' active' : '');
    b.textContent = label;
    b.onclick = function () { workSetJob_(id); workRenderJobs_(); workRenderAll(); };
    box.appendChild(b);
  };
  chip('All', '');
  workData.groups.forEach(function (g) { chip(g.name, g.id); });
  var gear = document.createElement('button');
  gear.type = 'button';
  gear.className = 'work-job work-job-gear';
  gear.title = 'Jobs';
  gear.textContent = '⚙';
  gear.onclick = function () { workRenderGroups(); document.getElementById('work-groups-modal').classList.add('active'); };
  box.appendChild(gear);
  var g = workJobGroup();
  var hasPosts = !!(g && g.hasPosts);
  document.getElementById('work-tab-posts').style.display = hasPosts ? '' : 'none';
  if (!hasPosts && workTab === 'posts') workSetTab('list');
}

/* ---------- small helpers ---------- */
function workToday_() { return workData.today || expenseTodayStr(); }
function workGroupName(id) {
  var g = workData.groups.find(function (x) { return x.id === id; });
  return g ? g.name : '';
}
function workIsOverdue(t) { return t.status !== 'done' && t.due && t.due < workToday_(); }
function workElapsed(t) {     // seconds, including a running timer
  var s = t.timeSpent || 0;
  if (t.timerStartedAt) s += Math.max(0, (Date.now() + workClockSkew_ - Date.parse(t.timerStartedAt)) / 1000);
  return Math.floor(s);
}
function workFmtTime(sec) {
  var h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
  return h ? h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') : m + ':' + String(s).padStart(2, '0');
}
function workFmtDue(d) { return d ? d.slice(8, 10) + '/' + d.slice(5, 7) : ''; }
function workDateOf_(t) { return t.due || String(t.createdAt || '').slice(0, 10); }

// "Do first": overdue → nearest due → higher priority; Doing nudged up a little.
// Paused and Done are left out.
function workDoFirst(tasks, n) {
  var today = workToday_();
  return tasks.filter(function (t) { return t.status === 'todo' || t.status === 'doing'; })
    .slice().sort(function (a, b) {
      var ao = a.due && a.due < today ? 0 : 1, bo = b.due && b.due < today ? 0 : 1;
      if (ao !== bo) return ao - bo;
      var ad = a.due || '9999-99-99', bd = b.due || '9999-99-99';
      if (ad !== bd) return ad < bd ? -1 : 1;
      var ap = WORK_PRIO_RANK[a.priority] + (a.status === 'doing' ? 0.5 : 0);
      var bp = WORK_PRIO_RANK[b.priority] + (b.status === 'doing' ? 0.5 : 0);
      return bp - ap;
    }).slice(0, n || 3);
}

/* ---------- filters ---------- */
function workFilters_() {
  return {
    q: document.getElementById('work-f-search').value.trim().toLowerCase(),
    status: document.getElementById('work-f-status').value,
    priority: document.getElementById('work-f-priority').value,
    period: document.getElementById('work-f-period').value,
    from: document.getElementById('work-f-from').value,
    to: document.getElementById('work-f-to').value
  };
}
function workPeriodRange_(f) {
  var t = new Date(workToday_() + 'T00:00:00');
  var iso = function (d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  if (f.period === 'week') {
    var mon = new Date(t); mon.setDate(t.getDate() - ((t.getDay() + 6) % 7));
    var sun = new Date(mon); sun.setDate(mon.getDate() + 6);
    return [iso(mon), iso(sun)];
  }
  if (f.period === 'month') {
    return [iso(new Date(t.getFullYear(), t.getMonth(), 1)), iso(new Date(t.getFullYear(), t.getMonth() + 1, 0))];
  }
  if (f.period === 'custom') return [f.from || '0000-00-00', f.to || '9999-99-99'];
  return null;
}
function workFiltered(ignoreStatus) {
  var f = workFilters_(), range = workPeriodRange_(f);
  return workJobTasks().filter(function (t) {
    if (f.q && t.title.toLowerCase().indexOf(f.q) === -1 && (t.note || '').toLowerCase().indexOf(f.q) === -1) return false;
    if (!ignoreStatus && f.status) {
      if (f.status === 'open' ? t.status === 'done' : t.status !== f.status) return false;
    }
    if (f.priority && t.priority !== f.priority) return false;
    if (range) { var d = workDateOf_(t); if (d < range[0] || d > range[1]) return false; }
    return true;
  });
}

/* ---------- render ---------- */
function workRenderAll() {
  var onPosts = workTab === 'posts';
  document.getElementById('work-first').style.display = onPosts ? 'none' : '';
  if (!onPosts) workRenderFirst();
  document.getElementById('work-filters').style.display = onPosts ? 'none' : '';
  if (workTab === 'list') workRenderList();
  else if (workTab === 'board') workRenderBoard();
  else if (workTab === 'stats') workRenderStats();
  else if (onPosts && typeof postsShow === 'function') postsShow();
  workEnsureTicker_();
}
function workSetTab(tab) {
  workTab = tab;
  document.querySelectorAll('.work-tab').forEach(function (b) { b.classList.toggle('active', b.dataset.wtab === tab); });
  document.querySelectorAll('.work-panel').forEach(function (p) {
    p.style.display = p.dataset.wpanel === tab ? '' : 'none';
    if (p.dataset.wpanel === tab) animIn(p);
  });
  // Board shows every status as a column → its status filter would only hide columns.
  document.getElementById('work-f-status').style.display = tab === 'board' ? 'none' : '';
  workRenderAll();
}

function workRenderFirst() {
  var box = document.getElementById('work-first');
  var list = document.getElementById('work-first-list');
  var picks = workDoFirst(workJobTasks(), 3);
  box.style.display = picks.length ? '' : 'none';
  list.innerHTML = '';
  picks.forEach(function (t, i) {
    var row = document.createElement('div');
    row.className = 'work-first-row prio-' + t.priority;
    row.innerHTML = '<span class="work-first-n">' + (i + 1) + '</span>' +
      '<span class="work-first-name">' + icdEscape(t.title) + '</span>' +
      (t.due ? '<span class="work-due' + (workIsOverdue(t) ? ' over' : '') + '">' + workFmtDue(t.due) + '</span>' : '');
    row.onclick = function () { workOpenTask(t); };
    list.appendChild(row);
  });
}

function workTaskRow_(t, compact) {
  var row = document.createElement('div');
  row.className = 'work-task prio-' + t.priority + (t.status === 'done' ? ' done' : '') + (compact ? ' compact' : '');
  row.dataset.id = t.id;
  var subsDone = t.subtasks.filter(function (x) { return x.done; }).length;
  var meta = [];
  if (t.groupId) meta.push('<span class="work-chip">' + icdEscape(workGroupName(t.groupId)) + '</span>');
  if (t.due) meta.push('<span class="work-due' + (workIsOverdue(t) ? ' over' : '') + '">' + workFmtDue(t.due) + (t.repeat ? ' ↻' : '') + '</span>');
  if (t.subtasks.length) meta.push('<span class="work-meta">☑ ' + subsDone + '/' + t.subtasks.length + '</span>');
  if (t.fee) meta.push('<span class="work-meta money">' + formatThousands(Math.round(t.fee)) + 'đ</span>');
  var running = !!t.timerStartedAt;
  row.innerHTML =
    '<button type="button" class="work-status st-' + t.status + '" title="Change status">' + WORK_STATUS_LABEL[t.status] + '</button>' +
    '<div class="work-task-main"><div class="work-task-title">' + icdEscape(t.title) + '</div>' +
      (meta.length ? '<div class="work-task-meta">' + meta.join('') + '</div>' : '') + '</div>' +
    (t.status === 'done' ? (t.timeSpent ? '<span class="work-time">' + workFmtTime(t.timeSpent) + '</span>' : '')
      : '<button type="button" class="work-timer' + (running ? ' running' : '') + '" title="' + (running ? 'Stop' : 'Start') + ' timer">' +
          (running ? '⏸' : '▶') + '<span' + (running ? ' data-timer="' + t.id + '"' : '') + '>' + (running || t.timeSpent ? workFmtTime(workElapsed(t)) : '') + '</span></button>');
  // status: To do → Doing → Done → To do (Paused is set from the task itself)
  row.querySelector('.work-status').onclick = function (e) {
    e.stopPropagation();
    var next = t.status === 'todo' ? 'doing' : t.status === 'doing' ? 'done' : t.status === 'paused' ? 'doing' : 'todo';
    workSetStatus(t, next, e.currentTarget);
  };
  var tb = row.querySelector('.work-timer');
  if (tb) tb.onclick = function (e) {
    e.stopPropagation();
    workRun_(running ? 'stopWorkTimer' : 'startWorkTimer')(t.id);
  };
  row.onclick = function () { workOpenTask(t); };
  return row;
}
function workSetStatus(t, status, fromEl) {
  if (status === 'done') {
    var r = fromEl ? fromEl.getBoundingClientRect() : null;
    confetti(r ? r.left + r.width / 2 : null, r ? r.top + r.height / 2 : null, 34);
  } else buzz(8);
  workRun_('setWorkTaskStatus')(t.id, status);
}

function workRenderList() {
  var wrap = document.getElementById('work-list');
  var tasks = workFiltered(false);
  // open tasks in "do first" order, then done ones (newest first)
  var open = tasks.filter(function (t) { return t.status !== 'done'; });
  var ordered = workDoFirst(open, open.length).concat(open.filter(function (t) { return t.status === 'paused'; }));
  var done = tasks.filter(function (t) { return t.status === 'done'; })
    .sort(function (a, b) { return String(b.doneAt || '').localeCompare(String(a.doneAt || '')); });
  wrap.innerHTML = '';
  if (!tasks.length) { wrap.innerHTML = '<div class="empty-state"><span class="empty-icon">✿</span>No tasks</div>'; return; }
  ordered.concat(done).forEach(function (t) { wrap.appendChild(workTaskRow_(t, false)); });
  staggerIn(wrap.children);
}

function workRenderBoard() {
  var board = document.getElementById('work-board');
  var tasks = workFiltered(true);
  board.innerHTML = '';
  WORK_STATUS_ORDER.forEach(function (st, idx) {
    var col = document.createElement('div');
    col.className = 'work-col';
    col.dataset.status = st;
    var items = tasks.filter(function (t) { return t.status === st; });
    items = st === 'done' ? items.sort(function (a, b) { return String(b.doneAt || '').localeCompare(String(a.doneAt || '')); })
                          : workDoFirst(items.map(function (t) { return Object.assign({}, t, { status: 'todo' }); }), items.length)
                              .map(function (c) { return items.find(function (t) { return t.id === c.id; }); });
    col.innerHTML = '<div class="work-col-head st-' + st + '">' + WORK_STATUS_LABEL[st] + ' <span>' + items.length + '</span></div>';
    var body = document.createElement('div');
    body.className = 'work-col-body';
    items.forEach(function (t) {
      var card = workTaskRow_(t, true);
      card.draggable = true;
      card.ondragstart = function (e) { e.dataTransfer.setData('text/plain', String(t.id)); card.classList.add('dragging'); };
      card.ondragend = function () { card.classList.remove('dragging'); };
      // phones can't drag: arrows move a card to the previous / next column
      var nav = document.createElement('div');
      nav.className = 'work-card-move';
      if (idx > 0) nav.insertAdjacentHTML('beforeend', '<button type="button" data-to="' + WORK_STATUS_ORDER[idx - 1] + '">‹</button>');
      if (idx < 3) nav.insertAdjacentHTML('beforeend', '<button type="button" data-to="' + WORK_STATUS_ORDER[idx + 1] + '">›</button>');
      nav.querySelectorAll('button').forEach(function (b) {
        b.onclick = function (e) { e.stopPropagation(); workSetStatus(t, b.dataset.to, b); };
      });
      card.appendChild(nav);
      body.appendChild(card);
    });
    staggerIn(body.children);
    col.ondragover = function (e) { e.preventDefault(); col.classList.add('drop'); };
    col.ondragleave = function () { col.classList.remove('drop'); };
    col.ondrop = function (e) {
      e.preventDefault(); col.classList.remove('drop');
      var t = workData.tasks.find(function (x) { return String(x.id) === e.dataTransfer.getData('text/plain'); });
      if (t && t.status !== st) workSetStatus(t, st, col);
    };
    col.appendChild(body);
    board.appendChild(col);
  });
}

function workRenderStats() {
  var box = document.getElementById('work-stats');
  var tasks = workFiltered(false);
  var n = tasks.length;
  var by = { todo: 0, doing: 0, paused: 0, done: 0 };
  tasks.forEach(function (t) { by[t.status]++; });
  var overdue = tasks.filter(workIsOverdue).length;
  var withDue = tasks.filter(function (t) { return t.status === 'done' && t.due; });
  var onTime = withDue.filter(function (t) { return String(t.doneAt || '').slice(0, 10) <= t.due; }).length;
  var pct = function (a, b) { return b ? Math.round(a / b * 100) : 0; };
  var html = '<div class="work-stat-top">' +
      '<div><b>' + n + '</b><span>tasks</span></div>' +
      '<div><b>' + pct(by.done, n) + '%</b><span>done</span></div>' +
      '<div class="' + (overdue ? 'over' : '') + '"><b>' + overdue + '</b><span>overdue</span></div>' +
      (withDue.length ? '<div><b>' + pct(onTime, withDue.length) + '%</b><span>on time</span></div>' : '') +
    '</div>';
  WORK_STATUS_ORDER.forEach(function (st) {
    html += '<div class="work-stat-row"><span class="work-stat-name">' + WORK_STATUS_LABEL[st] + '</span>' +
      '<div class="work-stat-bar"><div class="work-stat-fill st-' + st + '" style="width:0" data-w="' + pct(by[st], n) + '"></div></div>' +
      '<span class="work-stat-num">' + by[st] + '</span></div>';
  });
  box.innerHTML = html;
  // bars grow from 0 to their value
  requestAnimationFrame(function () { requestAnimationFrame(function () {
    box.querySelectorAll('.work-stat-fill').forEach(function (f) { f.style.width = f.dataset.w + '%'; });
  }); });
}

function workRenderGroups() {
  var box = document.getElementById('work-groups');
  box.innerHTML = '';
  if (!workData.groups.length) { box.innerHTML = '<div class="empty-state">No jobs yet</div>'; return; }
  workData.groups.forEach(function (g) {
    var count = workData.tasks.filter(function (t) { return t.groupId === g.id && t.status !== 'done'; }).length;
    var row = document.createElement('div');
    row.className = 'expense-category-row';
    row.innerHTML = '<span class="expense-category-row-name">' + icdEscape(g.name) + (g.hasPosts ? ' <span class="work-chip">Posts</span>' : '') + '</span>' +
      '<span class="expense-category-row-usage">' + count + '</span>' +
      '<button class="acc-edit-icon-btn" title="Rename">✎</button><button class="acc-edit-icon-btn" title="Delete">🗑</button>';
    var bs = row.querySelectorAll('button');
    bs[0].onclick = function () { workOpenGroup(g); };
    bs[1].onclick = function () {
      expenseConfirm('Delete "' + g.name + '"? Its tasks stay, without a job.', function () { workRun_('deleteWorkGroup')(g.id); });
    };
    box.appendChild(row);
  });
}


/* live timer text (only while a timer runs and Work is on screen) */
function workEnsureTicker_() {
  var running = workData.tasks.some(function (t) { return t.timerStartedAt; });
  if (running && !workTicker_) {
    workTicker_ = setInterval(function () {
      if (document.getElementById('work-view').style.display !== 'block') return;
      document.querySelectorAll('[data-timer]').forEach(function (el) {
        var t = workData.tasks.find(function (x) { return String(x.id) === el.dataset.timer; });
        if (t) el.textContent = workFmtTime(workElapsed(t));
      });
      var tl = document.getElementById('work-t-time');
      if (tl && tl.dataset.timer) {
        var tt = workData.tasks.find(function (x) { return String(x.id) === tl.dataset.timer; });
        if (tt) tl.textContent = '⏱ ' + workFmtTime(workElapsed(tt));
      }
    }, 1000);
  } else if (!running && workTicker_) { clearInterval(workTicker_); workTicker_ = null; }
}

/* ---------- task popup ---------- */
function workOpenTask(t) {
  workEditingId = t ? t.id : null;
  document.getElementById('work-task-modal-title').textContent = t ? 'Edit task' : 'New task';
  document.getElementById('work-t-title').value = t ? t.title : '';
  document.getElementById('work-t-status').value = t ? t.status : 'todo';
  var gs = document.getElementById('work-t-group');
  gs.innerHTML = '<option value="">—</option>' + workData.groups.map(function (g) {
    return '<option value="' + g.id + '">' + icdEscape(g.name) + '</option>';
  }).join('') + '<option value="__new__">+ New job</option>';
  gs.value = t && t.groupId ? String(t.groupId) : workJob;
  gs.dataset.prev = gs.value;
  document.getElementById('work-t-due').value = t ? t.due : '';
  document.getElementById('work-t-repeat').value = t ? t.repeat : '';
  document.getElementById('work-t-note').value = t ? t.note : '';
  expenseSetAmountInputValue(document.getElementById('work-t-fee'), t && t.fee ? t.fee : 0);
  workDraftSubs_ = t ? t.subtasks.map(function (x) { return { text: x.text, done: x.done }; }) : [];
  workDraftPriority_ = t ? t.priority : 'medium';
  workRenderPrioPick_();
  workRenderSubs_();
  var tl = document.getElementById('work-t-time');
  tl.dataset.timer = t && t.timerStartedAt ? t.id : '';
  tl.textContent = t && (t.timeSpent || t.timerStartedAt) ? '⏱ ' + workFmtTime(workElapsed(t)) : '';
  document.getElementById('work-task-delete').style.display = t ? '' : 'none';
  document.getElementById('work-t-suggest').innerHTML = '';
  document.getElementById('work-task-modal').classList.add('active');
  if (!t) setTimeout(function () { document.getElementById('work-t-title').focus(); }, 60);
}
function workCloseTask_() { document.getElementById('work-task-modal').classList.remove('active'); }
function workRenderPrioPick_() {
  document.querySelectorAll('#work-t-priority button').forEach(function (b) {
    b.classList.toggle('active', b.dataset.p === workDraftPriority_);
  });
}
function workRenderSubs_() {
  var box = document.getElementById('work-t-subs');
  box.innerHTML = '';
  workDraftSubs_.forEach(function (x, i) {
    var row = document.createElement('div');
    row.className = 'work-sub' + (x.done ? ' done' : '');
    row.innerHTML = '<span class="work-sub-check"></span><span class="work-sub-text">' + icdEscape(x.text) + '</span><button type="button" class="work-sub-del">✕</button>';
    var tick = function () {
      x.done = !x.done; workRenderSubs_();
      if (x.done) animIn(document.querySelectorAll('#work-t-subs .work-sub-check')[i], 'anim-pop');
    };
    row.querySelector('.work-sub-check').onclick = tick;
    row.querySelector('.work-sub-text').onclick = tick;
    row.querySelector('.work-sub-del').onclick = function () { workDraftSubs_.splice(i, 1); workRenderSubs_(); };
    box.appendChild(row);
  });
}
// Titles typed before show up under the box as you type; tap one to use it.
function workSuggest_() {
  var input = document.getElementById('work-t-title');
  var box = document.getElementById('work-t-suggest');
  var q = input.value.trim().toLowerCase();
  box.innerHTML = '';
  if (!q) return;
  var seen = {}, out = [];
  workData.tasks.forEach(function (t) {
    var k = t.title.toLowerCase();
    if (seen[k] || k === q || k.indexOf(q) === -1) return;
    seen[k] = true; out.push(t);
  });
  out.slice(0, 6).forEach(function (t) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = t.title;
    b.onclick = function () {
      input.value = t.title;
      box.innerHTML = '';
      // reuse the group / priority it had last time if those are still untouched
      var gs = document.getElementById('work-t-group');
      if (!gs.value && t.groupId) { gs.value = String(t.groupId); gs.dataset.prev = gs.value; }
      if (!workEditingId) { workDraftPriority_ = t.priority; workRenderPrioPick_(); }
    };
    box.appendChild(b);
  });
}
function workSaveTask() {
  var title = document.getElementById('work-t-title').value.trim();
  if (!title) { toast('Enter a task'); return; }
  var pending = document.getElementById('work-t-sub-input').value.trim();
  if (pending) { workDraftSubs_.push({ text: pending, done: false }); document.getElementById('work-t-sub-input').value = ''; }
  var g = document.getElementById('work-t-group').value;
  var task = {
    id: workEditingId,
    title: title,
    groupId: g && g !== '__new__' ? Number(g) : null,
    status: document.getElementById('work-t-status').value,
    priority: workDraftPriority_,
    due: document.getElementById('work-t-due').value,
    repeat: document.getElementById('work-t-repeat').value,
    note: document.getElementById('work-t-note').value,
    fee: expenseAmountInputValue(document.getElementById('work-t-fee')) || null,
    subtasks: workDraftSubs_
  };
  var wasDone = workEditingId && (workData.tasks.find(function (t) { return t.id === workEditingId; }) || {}).status === 'done';
  if (task.status === 'done' && !wasDone) confetti(null, null, 50);
  workCloseTask_();
  workRun_('saveWorkTask')(task);
}

/* ---------- group popup ---------- */
function workOpenGroup(g) {
  workEditingGroupId = g ? g.id : null;
  document.getElementById('work-group-modal-title').textContent = g ? 'Edit job' : 'New job';
  document.getElementById('work-group-name').value = g ? g.name : '';
  document.getElementById('work-group-posts').checked = !!(g && g.hasPosts);
  document.getElementById('work-group-modal').classList.add('active');
  setTimeout(function () { document.getElementById('work-group-name').focus(); }, 60);
}
function workSaveGroup() {
  var name = document.getElementById('work-group-name').value.trim();
  if (!name) { toast('Enter a name'); return; }
  var fromTask = document.getElementById('work-task-modal').classList.contains('active');
  document.getElementById('work-group-modal').classList.remove('active');
  showLoading();
  google.script.run
    .withSuccessHandler(function (d) {
      hideLoading();
      var before = workData.groups.map(function (x) { return x.id; });
      workApply(d);
      if (fromTask) {      // came from "+ New group" in the task popup → pick it there
        var created = workData.groups.find(function (x) { return before.indexOf(x.id) === -1; });
        var gs = document.getElementById('work-t-group');
        var keep = created ? String(created.id) : gs.dataset.prev;
        gs.innerHTML = '<option value="">—</option>' + workData.groups.map(function (x) {
          return '<option value="' + x.id + '">' + icdEscape(x.name) + '</option>';
        }).join('') + '<option value="__new__">+ New job</option>';
        gs.value = keep || ''; gs.dataset.prev = gs.value;
      }
    })
    .withFailureHandler(workFail_)
    .saveWorkGroup(workEditingGroupId, name, document.getElementById('work-group-posts').checked);
}

/* ---------- Home block ----------
   Before the password: only numbers (overdue · doing · to do). After unlocking:
   the same numbers + the 3 "Do first" tasks. Hidden when there's nothing open. */
function workLoadHomeBlock() {
  var el = document.getElementById('home-work');
  if (!el) return;
  var show = function (s, picks) {
    if (!s || (!s.overdue && !s.doing && !s.todo)) { el.style.display = 'none'; return; }
    var parts = [];
    if (s.overdue) parts.push('<b class="over">' + s.overdue + ' overdue</b>');
    if (s.doing) parts.push(s.doing + ' doing');
    if (s.todo) parts.push(s.todo + ' to do');
    document.getElementById('home-work-nums').innerHTML = parts.join(' · ');
    document.getElementById('home-work-list').innerHTML = (picks || []).map(function (t) {
      return '<div class="home-work-row prio-' + t.priority + '"><span>' + icdEscape(t.title) + '</span>' +
        (t.due ? '<span class="work-due' + (workIsOverdue(t) ? ' over' : '') + '">' + workFmtDue(t.due) + '</span>' : '') + '</div>';
    }).join('');
    el.style.display = '';
  };
  if (personalUnlocked) {
    google.script.run
      .withSuccessHandler(function (d) {
        workData = d; if (d.now) workClockSkew_ = Date.parse(d.now) - Date.now();
        var today = d.today;
        var open = d.tasks.filter(function (t) { return t.status === 'todo' || t.status === 'doing'; });
        show({
          overdue: open.filter(function (t) { return t.due && t.due < today; }).length,
          doing: open.filter(function (t) { return t.status === 'doing'; }).length,
          todo: open.filter(function (t) { return t.status === 'todo'; }).length
        }, workDoFirst(d.tasks, 3));
      })
      .withFailureHandler(function () { el.style.display = 'none'; })
      .getWorkData();
  } else {
    google.script.run
      .withSuccessHandler(function (s) { show(s && s.ready ? s : null, null); })
      .withFailureHandler(function () { el.style.display = 'none'; })
      .getWorkHomeSummary();
  }
}

/* ---------- wiring ---------- */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('work-add-btn').onclick = function () { workOpenTask(null); };
  document.querySelectorAll('.work-tab').forEach(function (b) { b.onclick = function () { workSetTab(b.dataset.wtab); }; });
  ['work-f-search', 'work-f-status', 'work-f-priority', 'work-f-from', 'work-f-to'].forEach(function (id) {
    var el = document.getElementById(id);
    el.oninput = el.onchange = function () { workRenderAll(); };
  });
  document.getElementById('work-f-period').onchange = function () {
    document.getElementById('work-f-range').style.display = this.value === 'custom' ? '' : 'none';
    workRenderAll();
  };
  document.getElementById('work-group-add-btn').onclick = function () { workOpenGroup(null); };
  document.getElementById('work-groups-close').onclick = function () { document.getElementById('work-groups-modal').classList.remove('active'); };

  document.getElementById('work-task-close').onclick = workCloseTask_;
  document.getElementById('work-task-cancel').onclick = workCloseTask_;
  document.getElementById('work-task-save').onclick = workSaveTask;
  document.getElementById('work-task-delete').onclick = function () {
    var id = workEditingId;
    expenseConfirm('Delete this task?', function () { workCloseTask_(); workRun_('deleteWorkTask')(id); });
  };
  document.getElementById('work-t-title').oninput = workSuggest_;
  document.querySelectorAll('#work-t-priority button').forEach(function (b) {
    b.onclick = function () { workDraftPriority_ = b.dataset.p; workRenderPrioPick_(); };
  });
  document.getElementById('work-t-group').onchange = function () {
    if (this.value === '__new__') { this.value = this.dataset.prev || ''; workOpenGroup(null); return; }
    this.dataset.prev = this.value;
  };
  document.getElementById('work-t-sub-input').onkeydown = function (e) {
    if (e.key !== 'Enter') return;
    e.preventDefault(); e.stopPropagation();
    var v = this.value.trim();
    if (!v) return;
    workDraftSubs_.push({ text: v, done: false });
    this.value = '';
    workRenderSubs_();
  };

  document.getElementById('work-group-close').onclick = function () { document.getElementById('work-group-modal').classList.remove('active'); };
  document.getElementById('work-group-cancel').onclick = function () { document.getElementById('work-group-modal').classList.remove('active'); };
  document.getElementById('work-group-save').onclick = workSaveGroup;

  document.getElementById('home-work').onclick = function () { requirePersonal(openWork); };
});
