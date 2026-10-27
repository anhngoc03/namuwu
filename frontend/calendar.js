/* ------------------------------------------------------------------
 * calendar.js — Personal › Calendar: notes / marks per day (several per day).
 * Top: every note of the year being viewed, by date. Below: the month grid;
 * tap a day → a sheet with that day's notes and a form to add / edit one.
 * Server: getCalendarNotes(year) / saveCalendarNote / deleteCalendarNote.
 * ------------------------------------------------------------------ */
var calData = { year: 0, today: '', notes: [] };
var calYear = 0, calMonth = 0;              // month being shown (0–11)
var calSheetDay = '';
var calEditingId = null;
var calKind = 'important';
var CAL_KIND_LABEL = { important: 'Important', work: 'Work', off: 'Day off', remind: 'Reminder', other: 'Other' };
var CAL_DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var CAL_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function openCalendar() {
  showView('calendar-view');
  var t = new Date();
  if (!calYear) { calYear = t.getFullYear(); calMonth = t.getMonth(); }
  calLoad(calYear);
}
function calLoad(year) {
  showLoading();
  google.script.run
    .withSuccessHandler(function (d) { hideLoading(); calApply(d); })
    .withFailureHandler(calFail_)
    .getCalendarNotes(year);
}
function calFail_(err) {
  hideLoading();
  var msg = (err && err.message) || String(err);
  if (/calendar_notes|does not exist|42P01/.test(msg)) toast('Calendar isn\'t set up yet — run supabase/posts_calendar.sql in Supabase');
  else toast('Error: ' + msg);
}
function calApply(d) {
  calData = d;
  calRender();
  if (calSheetDay && document.getElementById('cal-day-modal').classList.contains('active')) calRenderSheetNotes_();
}

function calIso_(y, m, d) { return y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0'); }
function calNotesOn_(day) { return calData.notes.filter(function (n) { return n.day === day; }); }
function calDow_(day) { return CAL_DOW[new Date(day + 'T00:00:00').getDay()]; }

function calRender() {
  // list of the whole year
  document.getElementById('cal-list-title').textContent = 'Notes ' + calData.year;
  document.getElementById('cal-list-count').textContent = calData.notes.length || '';
  var list = document.getElementById('cal-list');
  list.innerHTML = '';
  if (!calData.notes.length) list.innerHTML = '<div class="empty-state">No notes yet</div>';
  calData.notes.forEach(function (n) {
    var row = document.createElement('div');
    row.className = 'cal-row' + (n.day < calData.today ? ' past' : '') + (n.day === calData.today ? ' today' : '');
    row.innerHTML = '<i class="cal-dot k-' + n.kind + '"></i>' +
      '<span class="cal-row-date">' + n.day.slice(8, 10) + '/' + n.day.slice(5, 7) + ' · ' + calDow_(n.day) + '</span>' +
      '<span class="cal-row-note">' + icdEscape(n.note) + '</span>';
    row.onclick = function () { calOpenDay(n.day, n); };
    list.appendChild(row);
  });

  // month grid (Monday first)
  document.getElementById('cal-month-label').textContent = CAL_MONTHS[calMonth] + ' ' + calYear;
  var grid = document.getElementById('cal-grid');
  grid.innerHTML = '';
  var first = new Date(calYear, calMonth, 1);
  var lead = (first.getDay() + 6) % 7;
  var days = new Date(calYear, calMonth + 1, 0).getDate();
  for (var i = 0; i < lead; i++) grid.appendChild(document.createElement('span'));
  for (var d = 1; d <= days; d++) {
    var ds = calIso_(calYear, calMonth, d);
    var notes = calNotesOn_(ds);
    var cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'cal-cell' + (ds === calData.today ? ' today' : '') + (notes.length ? ' has' : '');
    var kinds = [];
    notes.forEach(function (n) { if (kinds.indexOf(n.kind) === -1) kinds.push(n.kind); });
    cell.innerHTML = '<span class="cal-num">' + d + '</span><span class="cal-dots">' +
      kinds.slice(0, 4).map(function (k) { return '<i class="cal-dot k-' + k + '"></i>'; }).join('') + '</span>';
    cell.onclick = (function (day) { return function () { calOpenDay(day, null); }; })(ds);
    grid.appendChild(cell);
  }
}
function calShiftMonth(n) {
  var y = calYear, m = calMonth + n;
  if (m < 0) { m = 11; y--; } else if (m > 11) { m = 0; y++; }
  calMonth = m;
  if (y !== calYear) { calYear = y; calLoad(y); } else calRender();
}

/* ---------- day sheet ---------- */
function calOpenDay(day, note) {
  calSheetDay = day;
  var d = new Date(day + 'T00:00:00');
  document.getElementById('cal-day-title').textContent = calDow_(day) + ', ' + day.slice(8, 10) + '/' + day.slice(5, 7) + '/' + d.getFullYear();
  calRenderSheetNotes_();
  calEditNote_(note);
  document.getElementById('cal-day-modal').classList.add('active');
}
function calRenderSheetNotes_() {
  var box = document.getElementById('cal-day-notes');
  box.innerHTML = '';
  calNotesOn_(calSheetDay).forEach(function (n) {
    var row = document.createElement('div');
    row.className = 'cal-sheet-note' + (n.id === calEditingId ? ' editing' : '');
    row.innerHTML = '<i class="cal-dot k-' + n.kind + '"></i><span class="cal-row-note">' + icdEscape(n.note) + '</span>' +
      '<button class="acc-edit-icon-btn" title="Edit">✎</button><button class="acc-edit-icon-btn" title="Delete">🗑</button>';
    var bs = row.querySelectorAll('button');
    bs[0].onclick = function () { calEditNote_(n); calRenderSheetNotes_(); };
    bs[1].onclick = function () {
      expenseConfirm('Delete this note?', function () {
        showLoading();
        if (calEditingId === n.id) calEditNote_(null);
        google.script.run.withSuccessHandler(function (d) { hideLoading(); calApply(d); }).withFailureHandler(calFail_)
          .deleteCalendarNote(n.id, calData.year);
      });
    };
    box.appendChild(row);
  });
}
function calEditNote_(n) {
  calEditingId = n ? n.id : null;
  calKind = n ? n.kind : 'important';
  document.getElementById('cal-note').value = n ? n.note : '';
  document.getElementById('cal-form-caption').textContent = n ? 'Edit note' : (calNotesOn_(calSheetDay).length ? 'Add another' : 'Mark');
  document.getElementById('cal-save').textContent = n ? 'Save' : 'Add';
  calRenderKinds_();
}
function calRenderKinds_() {
  document.querySelectorAll('#cal-kinds button').forEach(function (b) { b.classList.toggle('active', b.dataset.k === calKind); });
}
function calCloseSheet_() { document.getElementById('cal-day-modal').classList.remove('active'); calSheetDay = ''; calEditingId = null; }
function calSave() {
  var note = document.getElementById('cal-note').value.trim();
  if (!note) { toast('Write a note'); return; }
  var payload = { id: calEditingId, day: calSheetDay, kind: calKind, note: note };
  calCloseSheet_();
  showLoading();
  google.script.run
    .withSuccessHandler(function (d) { hideLoading(); calApply(d); })
    .withFailureHandler(calFail_)
    .saveCalendarNote(payload);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('cal-prev').onclick = function () { calShiftMonth(-1); };
  document.getElementById('cal-next').onclick = function () { calShiftMonth(1); };
  document.querySelectorAll('#cal-kinds button').forEach(function (b) {
    b.onclick = function () { calKind = b.dataset.k; calRenderKinds_(); };
  });
  document.getElementById('cal-day-close').onclick = calCloseSheet_;
  document.getElementById('cal-cancel').onclick = calCloseSheet_;
  document.getElementById('cal-save').onclick = calSave;
});
