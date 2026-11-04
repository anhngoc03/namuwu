/**
 * study.js — Personal › Languages / Skills: learning roadmaps made by the AI.
 * A roadmap = lessons spread over weeks. A lesson is written by Claude the first
 * time it's opened; each lesson has an exercise, each week a test, and there's a
 * "review what I got wrong" set. Answers are marked by the server (multiple choice
 * straight away, the rest by Claude) and stay in Supabase (supabase/study.sql).
 * Server: functions/api.js (getStudyData, importStudyPlan, openStudyLesson, …). No AI: roadmaps come from files.
 */
var studyHouse = 'language';
var studyState = { plans: [], plan: null, lessons: [], tests: [], today: '', test: null, busy: false };
var STUDY_HOUSES = {
  language: { title: 'Languages', hint: 'Japanese, English… e.g. “JLPT N3 in 3 months”', sample: 'Tiếng Nhật JLPT N3' },
  skills: { title: 'Skills', hint: 'Anything: Excel, drawing, public speaking, coding…', sample: 'Excel nâng cao cho công việc' }
};

function studyCall(name) {
  var args = Array.prototype.slice.call(arguments, 1);
  return new Promise(function (res, rej) {
    var r = google.script.run.withSuccessHandler(res).withFailureHandler(function (e) { rej(new Error((e && e.message) || 'Error')); });
    r[name].apply(r, args);
  });
}
function studyEsc(s) { return icdEscape(s == null ? '' : String(s)).replace(/"/g, '&quot;'); }
function studyFmtDay(d) { if (!d) return ''; var x = new Date(d + 'T00:00:00'); return x.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }); }
// a tiny, safe markdown: ## headings, - lists, **bold**, line breaks (everything escaped first)
function studyMd(text) {
  var out = [], list = false;
  String(text || '').split(/\r?\n/).forEach(function (line) {
    var t = studyEsc(line).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    if (/^\s*[-*•]\s+/.test(line)) { if (!list) { out.push('<ul>'); list = true; } out.push('<li>' + t.replace(/^\s*[-*•]\s+/, '') + '</li>'); return; }
    if (list) { out.push('</ul>'); list = false; }
    if (/^#{1,6}\s+/.test(line)) out.push('<h4>' + t.replace(/^#{1,6}\s+/, '') + '</h4>');
    else if (/^\s*\d+[.)]\s+/.test(line)) out.push('<p class="st-num">' + t + '</p>');
    else if (line.trim()) out.push('<p>' + t + '</p>');
  });
  if (list) out.push('</ul>');
  return out.join('');
}
function studyWait(el, msg) { el.innerHTML = '<div class="st-wait"><i class="st-dots"><b></b><b></b><b></b></i><span>' + studyEsc(msg) + '</span></div>'; }

/* ---------- open a house ---------- */
function openStudy(house) {
  studyHouse = STUDY_HOUSES[house] ? house : 'language';
  window.studyHouse = studyHouse;
  var h = STUDY_HOUSES[studyHouse];
  document.getElementById('study-title').textContent = h.title;
  showView('study-view');
  studyList();
}
function openStudyLanguage() { openStudy('language'); }
function openStudySkills() { openStudy('skills'); }

function studyList() {
  studyState.plan = null;
  var box = document.getElementById('study-main');
  document.getElementById('study-back').hidden = true;
  studyWait(box, 'Opening your roadmaps…');
  studyCall('getStudyData', studyHouse).then(function (d) {
    studyState.plans = d.plans || []; studyState.today = d.today;
    studyRenderList();
  }).catch(function (e) { box.innerHTML = '<div class="st-empty">' + studyEsc(e.message) + '</div>'; });
}
function studyRenderList() {
  var box = document.getElementById('study-main'), h = STUDY_HOUSES[studyHouse];
  if (!studyState.plans.length) {
    box.innerHTML = '<div class="st-empty"><b>No roadmap yet</b><span>Send your book or documents to Claude in a chat and get back a roadmap file (lessons, exercises and tests with answers), then import it here. Your answers are marked right here.</span>' +
      '<button type="button" class="pill-btn" data-st="import">Import a roadmap file</button></div>';
    return;
  }
  box.innerHTML = studyState.plans.map(function (p) {
    var pc = p.total ? Math.round(p.done / p.total * 100) : 0;
    return '<button type="button" class="st-plan" data-st="plan" data-id="' + p.id + '">' +
      '<div class="st-plan-top"><b>' + studyEsc(p.subject) + '</b>' + (p.status !== 'active' ? '<em>' + studyEsc(p.status) + '</em>' : '') + '</div>' +
      '<div class="st-bar"><i style="width:' + pc + '%"></i></div>' +
      '<div class="st-plan-meta"><span>' + p.done + ' / ' + p.total + ' lessons</span><span>' + p.weeks + ' weeks · ' + p.minutesPerDay + ' min</span></div>' +
      (p.next ? '<div class="st-next">Next: <b>' + studyEsc(p.next.title) + '</b>' + (p.next.day ? ' · ' + studyFmtDay(p.next.day) : '') + '</div>' : '<div class="st-next">All done ♡</div>') +
      '</button>';
  }).join('');
}

/* ---------- one roadmap ---------- */
function studyOpenPlan(id) {
  var box = document.getElementById('study-main');
  document.getElementById('study-back').hidden = false;
  studyWait(box, 'Opening the roadmap…');
  studyCall('getStudyPlan', id).then(studyShowPlan).catch(function (e) { toast(e.message); studyList(); });
}
function studyShowPlan(d) {
  studyState.plan = d.plan; studyState.lessons = d.lessons || []; studyState.tests = d.tests || []; studyState.today = d.today;
  studyRenderPlan();
}
function studyRenderPlan() {
  var p = studyState.plan, box = document.getElementById('study-main'), today = studyState.today;
  var pc = p.total ? Math.round(p.done / p.total * 100) : 0;
  var weeks = {};
  studyState.lessons.forEach(function (l) { (weeks[l.week] = weeks[l.week] || []).push(l); });
  var next = studyState.lessons.filter(function (l) { return !l.done; })[0];
  var late = studyState.lessons.filter(function (l) { return !l.done && l.day && l.day < today; }).length;
  var html = '<div class="st-card st-head">' +
    '<div class="st-head-top"><h3>' + studyEsc(p.subject) + '</h3><button type="button" class="st-more" data-st="menu" aria-label="More">⋯</button></div>' +
    (p.summary ? '<p class="st-sum">' + studyEsc(p.summary) + '</p>' : '') +
    '<div class="st-bar big"><i style="width:' + pc + '%"></i></div>' +
    '<div class="st-plan-meta"><span>' + p.done + ' / ' + p.total + ' lessons · ' + pc + '%</span>' + (late ? '<span class="st-late">' + late + ' behind</span>' : '<span>on track ♡</span>') + '</div>' +
    (next ? '<button type="button" class="st-today" data-st="lesson" data-id="' + next.id + '"><small>' + (next.day && next.day <= today ? 'Today' : 'Next up') + '</small><b>' + studyEsc(next.title) + '</b><span>' + studyEsc(next.goal) + '</span></button>' : '<div class="st-today done"><b>Roadmap finished ✿</b><span>Take the final test or review your mistakes</span></div>') +
    '<div class="st-acts">' + '' + '<button type="button" class="pill-btn secondary" data-st="review">Review mistakes</button></div>' +
    '</div>';
  Object.keys(weeks).sort(function (a, b) { return a - b; }).forEach(function (w) {
    var ls = weeks[w], dn = ls.filter(function (l) { return l.done; }).length;
    var wt = studyState.tests.filter(function (t) { return t.kind === 'test' && t.title.indexOf('Week ' + w + ' · ') === 0; }).slice(-1)[0];
    var chip = wt ? '<button type="button" class="st-chip" data-st="open-test" data-id="' + wt.id + '">Week test</button>' : '';
    html += '<div class="st-card st-week"><div class="st-week-h"><b>Week ' + w + '</b><span>' + dn + '/' + ls.length + '</span>' + chip + '</div>' +
      ls.map(function (l) {
        var cls = l.done ? ' done' : (l.day && l.day < today ? ' late' : (l.day === today ? ' today' : ''));
        return '<div class="st-lesson' + cls + '"><button type="button" class="st-check" data-st="done" data-id="' + l.id + '" aria-label="Done">' + (l.done ? '✓' : '') + '</button>' +
          '<button type="button" class="st-l" data-st="lesson" data-id="' + l.id + '"><b>' + l.seq + '. ' + studyEsc(l.title) + '</b><small>' + studyEsc(studyFmtDay(l.day)) + (l.hasContent ? '' : ' · not written yet') + '</small></button></div>';
      }).join('') + '</div>';
  });
  var tests = studyState.tests;
  html += '<div class="st-card"><div class="st-week-h"><b>Tests & exercises</b><span>' + tests.length + '</span></div>' + (tests.length ? tests.map(function (t) {
    var pend = t.submittedAt && (t.results || []).some(function (r) { return r && r.correct === null; });
    var sc = t.submittedAt ? '<em class="' + (pend ? 'ok' : t.max && t.score / t.max >= 0.8 ? 'good' : t.max && t.score / t.max >= 0.5 ? 'ok' : 'low') + '">' + t.score + ' / ' + t.max + (pend ? ' · check ✎' : '') + '</em>' : '<em class="todo">not done</em>';
    return '<button type="button" class="st-test" data-st="open-test" data-id="' + t.id + '"><span>' + studyEsc(t.title) + '</span>' + sc + '</button>';
  }).join('') : '<div class="st-none">Nothing yet — open a lesson and try its exercise ✿</div>') + '</div>';
  box.innerHTML = html;
}

/* ---------- a lesson ---------- */
function studyOpenLesson(id) {
  var l = studyState.lessons.filter(function (x) { return x.id === id; })[0]; if (!l) return;
  var m = document.getElementById('study-lesson-modal'), body = document.getElementById('st-lesson-body');
  document.getElementById('st-lesson-title').textContent = l.seq + '. ' + l.title;
  document.getElementById('st-lesson-done').textContent = l.done ? '✓ Done' : 'Mark done';
  document.getElementById('st-lesson-done').classList.toggle('secondary', l.done);
  m.dataset.id = id;
  studyWait(body, l.hasContent ? 'Opening…' : 'Your tutor is writing this lesson… (about half a minute)');
  m.classList.add('active');
  studyCall('openStudyLesson', id).then(function (r) {
    if (m.dataset.id !== String(id)) return;
    l.hasContent = true;
    studyState.lessonText = r.content || '';
    body.innerHTML = '<div class="st-goal"><b>Goal</b> ' + studyEsc(l.goal) + '</div>' + studyMd(r.content);
  }).catch(function (e) { body.innerHTML = '<div class="st-empty">' + studyEsc(e.message) + '</div>'; });
}
function studySetDone(id, done) {
  var l = studyState.lessons.filter(function (x) { return x.id === id; })[0]; if (!l) return;
  l.done = done; studyState.plan.done += done ? 1 : -1; studyRenderPlan();
  studyCall('setStudyLessonDone', id, done).catch(function (e) { toast(e.message); });
}

/* ---------- 🔊 read a lesson aloud: Japanese, English and Vietnamese bits each in their own voice ---------- */
function studySpeakStop() { try { speechSynthesis.cancel(); } catch (e) {} var b = document.getElementById('st-lesson-speak'); if (b) b.textContent = 'Listen'; }
function studySpeak(text) {
  if (!('speechSynthesis' in window)) { toast('This browser can’t read aloud'); return; }
  if (speechSynthesis.speaking) { studySpeakStop(); return; }
  var voices = speechSynthesis.getVoices();
  var langOf = function (s) { return /[\u3040-\u30ff\u4e00-\u9faf]/.test(s) ? 'ja-JP' : /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(s) ? 'vi-VN' : 'en-US'; };
  // split each line into runs of the same language (e.g. "勉強(べんきょう) học" → ja + vi)
  var parts = [];
  String(text || '').replace(/\*\*/g, '').replace(/^#+\s*/gm, '').replace(/^\s*[-•]\s*/gm, '').split(/\n+/).forEach(function (line) {
    line.split(/([\u3040-\u30ff\u4e00-\u9faf\u3000-\u303f\uff00-\uffef()（）]+)/).forEach(function (seg) {
      seg = seg.trim(); if (!seg || /^[()（）\s]+$/.test(seg)) return;
      var lang = langOf(seg), last = parts[parts.length - 1];
      if (last && last.lang === lang) last.text += ' ' + seg; else parts.push({ lang: lang, text: seg });
    });
  });
  if (!parts.length) return;
  var btn = document.getElementById('st-lesson-speak'); btn.textContent = 'Stop';
  parts.forEach(function (p, i) {
    var u = new SpeechSynthesisUtterance(p.text.replace(/[()（）]/g, ' '));
    u.lang = p.lang; u.rate = p.lang === 'ja-JP' ? 0.85 : 0.95;
    var v = voices.filter(function (x) { return x.lang && x.lang.replace('_', '-').indexOf(p.lang.slice(0, 2)) === 0; })[0]; if (v) u.voice = v;
    if (i === parts.length - 1) u.onend = function () { btn.textContent = 'Listen'; };
    speechSynthesis.speak(u);
  });
}

/* ---------- exercises & tests ---------- */
function studyMakeTest(opts, label) {
  var m = document.getElementById('study-test-modal'), body = document.getElementById('st-test-body');
  document.getElementById('st-test-title').textContent = label;
  document.getElementById('st-test-submit').hidden = true;
  studyWait(body, 'Getting your questions…');
  m.classList.add('active');
  studyState.test = null;
  studyCall('makeStudyTest', studyState.plan.id, opts).then(function (t) {
    studyState.tests.unshift(t); studyRenderPlan();
    studyShowTest(t);
  }).catch(function (e) { body.innerHTML = '<div class="st-empty">' + studyEsc(e.message) + '</div>'; });
}
function studyShowTest(t) {
  studyState.test = t;
  var m = document.getElementById('study-test-modal'), body = document.getElementById('st-test-body');
  document.getElementById('st-test-title').textContent = t.title;
  var done = !!t.submittedAt;
  document.getElementById('st-test-submit').hidden = done;
  document.getElementById('st-test-again').hidden = !done;
  var html = '';
  if (done) {
    var r = t.max ? t.score / t.max : 0;
    html += '<div class="st-score ' + (r >= 0.8 ? 'good' : r >= 0.5 ? 'ok' : 'low') + '"><b>' + t.score + ' / ' + t.max + '</b><span>' + (r >= 0.8 ? 'Great job ✿' : r >= 0.5 ? 'Nice — a few to look at' : 'Keep going, you’ve got this') + '</span></div>' +
      (t.feedback ? '<div class="st-feedback">' + studyEsc(t.feedback) + '</div>' : '');
  }
  html += t.questions.map(function (q, i) {
    var a = t.answers ? t.answers[i] : '', res = t.results ? t.results[i] : null;
    var head = '<div class="st-q-h"><span>' + (i + 1) + '</span><p>' + studyEsc(q.q).replace(/\n/g, '<br>') + '</p><small>' + q.points + ' pt</small></div>';
    var inp;
    if (q.type === 'mcq') {
      inp = '<div class="st-opts">' + q.options.map(function (o, k) {
        var cls = done ? (o === q.answer ? ' right' : (o === a ? ' wrong' : '')) : '';
        return '<label class="st-opt' + cls + '"><input type="radio" name="stq' + i + '" value="' + studyEsc(o) + '"' + (o === a ? ' checked' : '') + (done ? ' disabled' : '') + '><span>' + studyEsc(o) + '</span></label>';
      }).join('') + '</div>';
    } else if (q.type === 'write') {
      inp = '<textarea class="st-in" data-q="' + i + '" rows="4" placeholder="Write your answer…"' + (done ? ' disabled' : '') + '>' + studyEsc(a || '') + '</textarea>';
    } else {
      inp = '<input class="st-in" data-q="' + i + '" type="text" autocomplete="off" placeholder="Your answer" value="' + studyEsc(a || '') + '"' + (done ? ' disabled' : '') + '>';
    }
    var after = '';
    if (done && res && res.correct === null) {          // written answer: compare with the model answer, mark it yourself
      after = '<div class="st-res self"><b>Check yourself</b><span><i>Model answer:</i> ' + studyEsc(q.answer).replace(/\n/g, '<br>') + '</span>' +
        (q.explain ? '<span class="st-ex"><i>Why:</i> ' + studyEsc(q.explain) + '</span>' : '') +
        '<span class="st-self"><button type="button" data-sm="1" data-i="' + i + '">✓ I got it</button><button type="button" data-sm="0" data-i="' + i + '">✗ Not yet</button></span></div>';
    } else if (done && res) {
      after = '<div class="st-res ' + (res.correct ? 'right' : 'wrong') + '"><b>' + (res.correct ? '✓ Correct' : '✗ ' + res.score + ' / ' + q.points) + '</b>' +
        (res.comment ? '<span>' + studyEsc(res.comment) + '</span>' : '') +
        (q.type !== 'mcq' && !res.correct ? '<span><i>Answer:</i> ' + studyEsc(q.answer) + '</span>' : '') +
        (q.explain ? '<span class="st-ex"><i>Why:</i> ' + studyEsc(q.explain) + '</span>' : '') + '</div>';
    }
    return '<div class="st-q">' + head + inp + after + '</div>';
  }).join('');
  body.innerHTML = html;
  body.scrollTop = 0;
  m.classList.add('active');
}
function studyCollect() {
  var t = studyState.test, body = document.getElementById('st-test-body');
  return t.questions.map(function (q, i) {
    if (q.type === 'mcq') { var c = body.querySelector('input[name="stq' + i + '"]:checked'); return c ? c.value : ''; }
    var el = body.querySelector('.st-in[data-q="' + i + '"]'); return el ? el.value : '';
  });
}
function studySubmit() {
  var t = studyState.test; if (!t || studyState.busy) return;
  var ans = studyCollect();
  var empty = ans.filter(function (a) { return !String(a).trim(); }).length;
  if (empty && !confirm(empty + ' question(s) left empty. Hand it in anyway?')) return;
  studyState.busy = true;
  var btn = document.getElementById('st-test-submit'); btn.disabled = true; btn.textContent = 'Marking…';
  studyCall('submitStudyTest', t.id, ans).then(function (r) {
    studyState.tests = studyState.tests.map(function (x) { return x.id === r.id ? r : x; });
    studyShowTest(r);
    // a good exercise ticks its lesson (the server did the same)
    if (r.kind === 'exercise' && r.lessonId && r.max && r.score / r.max >= 0.7) {
      var l = studyState.lessons.filter(function (x) { return x.id === r.lessonId; })[0];
      if (l && !l.done) { l.done = true; studyState.plan.done++; }
    }
    studyRenderPlan();
  }).catch(function (e) { toast(e.message); }).then(function () { studyState.busy = false; btn.disabled = false; btn.textContent = 'Hand in'; });
}

function studyMenu() {
  var p = studyState.plan; if (!p) return;
  var act = prompt('Type a number:\n1 — ' + (p.status === 'paused' ? 'Resume' : 'Pause') + ' this roadmap\n2 — Mark it finished\n3 — Delete it (lessons + tests)', '');
  if (act === '1') studyCall('updateStudyPlan', p.id, { status: p.status === 'paused' ? 'active' : 'paused' }).then(studyShowPlan).catch(function (e) { toast(e.message); });
  else if (act === '2') studyCall('updateStudyPlan', p.id, { status: 'done' }).then(studyShowPlan).catch(function (e) { toast(e.message); });
  else if (act === '3' && confirm('Delete “' + p.subject + '” with all its lessons and tests?')) studyCall('deleteStudyPlan', p.id).then(function (d) { studyState.plans = d.plans || []; document.getElementById('study-back').hidden = true; studyRenderList(); toast('Deleted'); }).catch(function (e) { toast(e.message); });
}

function studyWire() {
  document.getElementById('study-back').onclick = studyList;
  document.getElementById('study-main').addEventListener('click', function (e) {
    var b = e.target.closest('[data-st]'); if (!b) return;
    var id = Number(b.dataset.id), k = b.dataset.st;
    if (k === 'import') document.getElementById('study-import-file').click();
    else if (k === 'plan') studyOpenPlan(id);
    else if (k === 'lesson') studyOpenLesson(id);
    else if (k === 'done') { var l = studyState.lessons.filter(function (x) { return x.id === id; })[0]; if (l) studySetDone(id, !l.done); }
    else if (k === 'review') studyMakeTest({ kind: 'review' }, 'Review mistakes');
    else if (k === 'open-test') { var t = studyState.tests.filter(function (x) { return x.id === id; })[0]; if (t) studyShowTest(t); }
    else if (k === 'menu') studyMenu();
  });
  document.getElementById('st-lesson-close').onclick = function () { studySpeakStop(); document.getElementById('study-lesson-modal').classList.remove('active'); };
  document.getElementById('st-lesson-speak').onclick = function () { studySpeak(studyState.lessonText); };
  document.getElementById('st-lesson-done').onclick = function () {
    var id = Number(document.getElementById('study-lesson-modal').dataset.id), l = studyState.lessons.filter(function (x) { return x.id === id; })[0];
    if (!l) return; studySetDone(id, !l.done);
    this.textContent = l.done ? '✓ Done' : 'Mark done'; this.classList.toggle('secondary', l.done);
  };
  document.getElementById('st-lesson-ex').onclick = function () {
    var id = Number(document.getElementById('study-lesson-modal').dataset.id), l = studyState.lessons.filter(function (x) { return x.id === id; })[0];
    document.getElementById('study-lesson-modal').classList.remove('active');
    if (!l) return;
    // the exercise came with the file: open the newest copy
    var ex = studyState.tests.filter(function (t) { return t.kind === 'exercise' && t.lessonId === id; });
    var open = ex.filter(function (t) { return !t.submittedAt; })[0] || ex[0];
    if (open) studyShowTest(open); else toast('This lesson has no exercise in the file');
  };
  document.getElementById('st-test-close').onclick = function () { document.getElementById('study-test-modal').classList.remove('active'); };
  document.getElementById('st-test-submit').onclick = studySubmit;
  document.getElementById('st-test-again').onclick = function () {
    var t = studyState.test; if (!t) return;
    studyCall('retakeStudyTest', t.id).then(function (n) { studyState.tests.unshift(n); studyRenderPlan(); studyShowTest(n); }).catch(function (e) { toast(e.message); });
  };
  document.getElementById('st-test-body').addEventListener('click', function (e) {
    var b = e.target.closest('[data-sm]'); if (!b || !studyState.test) return;
    studyCall('markStudyAnswer', studyState.test.id, Number(b.dataset.i), b.dataset.sm === '1').then(function (r) {
      studyState.tests = studyState.tests.map(function (x) { return x.id === r.id ? r : x; });
      if (r.kind === 'exercise' && r.lessonId && r.max && r.score / r.max >= 0.7) { var l = studyState.lessons.filter(function (x) { return x.id === r.lessonId; })[0]; if (l && !l.done) { l.done = true; studyState.plan.done++; } }
      studyShowTest(r); studyRenderPlan();
    }).catch(function (e2) { toast(e2.message); });
  });
  // 📄 Import: a roadmap file (made in a chat with Claude) — lessons, exercises, tests and answers, no AI calls
  document.getElementById('study-import-btn').onclick = function () { document.getElementById('study-import-file').click(); };
  document.getElementById('study-import-file').onchange = function () {
    var f = this.files && this.files[0]; this.value = ''; if (!f) return;
    var rd = new FileReader();
    rd.onload = function () {
      var text = String(rd.result || '').replace(/^\uFEFF/, ''), m = text.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (m) text = m[1];                              // a file copied straight from a chat, with ``` around it
      try { JSON.parse(text); } catch (e) { toast('That file is not valid JSON: ' + e.message); return; }
      toast('Importing…');
      studyCall('importStudyPlan', text, studyHouse).then(function (d) { document.getElementById('study-back').hidden = false; studyShowPlan(d); toast('Imported ✿ ' + d.lessons.length + ' lessons, ' + d.tests.length + ' tests'); })
        .catch(function (e) { toast(e.message); });
    };
    rd.readAsText(f);
  };
}
document.addEventListener('DOMContentLoaded', studyWire);
