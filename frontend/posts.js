/* ------------------------------------------------------------------
 * posts.js — Work › (a job with "Has Posts", e.g. KOC) › Posts.
 * Saved posts (caption + Shopee links) to publish bit by bit on the Facebook page:
 * Calendar (next 14 days of posting times), Drafts, Posted; Copy → paste on
 * Facebook → "Posted". Clicks are tracked on Shopee's own dashboard.
 * Server: getPostsData / savePost / deletePost / markPostPosted / repostPost /
 * savePostSlots / autoSchedulePosts (functions/api.js). Uses app.js + work.js helpers.
 * ------------------------------------------------------------------ */
var postsData = null;              // { posts, slots:{weekday,weekend}, now:{date,time} }
var postsTab = 'plan';
var postsEditingId = null;
var postsEditingStatus_ = null;
var POSTS_DAYS_AHEAD = 14;
var POSTS_DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function postsShow() {
  if (!postsData) { postsLoad(); return; }
  postsRender();
}
function postsLoad() {
  showLoading();
  google.script.run
    .withSuccessHandler(function (d) { hideLoading(); postsApply(d); })
    .withFailureHandler(postsFail_)
    .getPostsData();
}
function postsFail_(err) {
  hideLoading();
  var msg = (err && err.message) || String(err);
  if (/posts|app_settings|does not exist|42P01/.test(msg)) toast('Posts isn\'t set up yet — run supabase/posts_calendar.sql in Supabase');
  else toast('Error: ' + msg);
}
function postsRun_(fn) {
  showLoading();
  return google.script.run
    .withSuccessHandler(function (d) { hideLoading(); postsApply(d); })
    .withFailureHandler(postsFail_)[fn];
}
function postsApply(d) { postsData = d; if (workTab === 'posts') postsRender(); }

/* ---------- helpers ---------- */
function postsMine_() {
  return (postsData ? postsData.posts : []).filter(function (p) { return !workJob || String(p.groupId) === workJob; });
}
function postsIso_(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function postsSlotsFor_(dateStr) {
  var wd = new Date(dateStr + 'T00:00:00').getDay();
  return (wd === 0 || wd === 6) ? postsData.slots.weekend : postsData.slots.weekday;
}
// Shopee sale days: double days (1/1 … 12/12), mid-month 15th, payday 25th.
function postsIsSaleDay(dateStr) {
  var m = Number(dateStr.slice(5, 7)), d = Number(dateStr.slice(8, 10));
  return m === d || d === 15 || d === 25;
}
function postsTitle_(p) { return p.product || (p.caption || '').split('\n')[0] || 'Post'; }
function postsIsMissed_(p) {
  var now = postsData.now;
  return p.status === 'scheduled' && p.date && (p.date < now.date || (p.date === now.date && p.time && p.time < now.time));
}
function postsCopy(p) {
  var text = (p.caption || '').trim();
  if (p.links.length) text += (text ? '\n\n' : '') + p.links.join('\n');
  copyText(text);
}

/* ---------- render ---------- */
function postsRender() {
  document.querySelectorAll('.posts-subtab').forEach(function (b) { b.classList.toggle('active', b.dataset.ptab === postsTab); });
  document.getElementById('posts-auto-btn').style.display = postsTab === 'posted' ? 'none' : '';
  var mine = postsMine_();
  // summary: this week's posted · drafts waiting · missed slots
  var now = postsData.now, t = new Date(now.date + 'T00:00:00');
  var mon = new Date(t); mon.setDate(t.getDate() - ((t.getDay() + 6) % 7));
  var weekStart = postsIso_(mon);
  var postedWeek = mine.filter(function (p) { return p.status === 'posted' && p.date >= weekStart; }).length;
  var drafts = mine.filter(function (p) { return p.status === 'draft'; }).length;
  var missed = mine.filter(postsIsMissed_).length;
  document.getElementById('posts-summary').innerHTML =
    '<span><b>' + postedWeek + '</b> posted this week</span><span><b>' + drafts + '</b> drafts</span>' +
    (missed ? '<span class="over"><b>' + missed + '</b> missed</span>' : '');
  var body = document.getElementById('posts-body');
  body.innerHTML = '';
  if (postsTab === 'plan') postsRenderPlan_(body, mine);
  else if (postsTab === 'drafts') postsRenderList_(body, mine.filter(function (p) { return p.status === 'draft'; }).sort(function (a, b) { return a.id - b.id; }), 'No drafts');
  else postsRenderList_(body, mine.filter(function (p) { return p.status === 'posted'; })
    .sort(function (a, b) { return String(b.postedAt || '').localeCompare(String(a.postedAt || '')); }).slice(0, 100), 'Nothing posted yet');
  staggerIn(body.children);
}

function postsRow_(p, timeLabel) {
  var row = document.createElement('div');
  row.className = 'post-row st-' + p.status + (postsIsMissed_(p) ? ' missed' : '');
  var sub = [];
  if (p.tag) sub.push('<span class="work-chip">' + icdEscape(p.tag) + '</span>');
  if (p.links.length) sub.push('<span class="work-meta">🔗 ' + p.links.length + '</span>');
  if (p.note) sub.push('<span class="work-meta">' + icdEscape(p.note) + '</span>');
  if (p.status === 'posted' && p.postedAt) {
    var d = new Date(p.postedAt);
    sub.push('<span class="work-meta">✓ ' + String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + '</span>');
  }
  row.innerHTML =
    (timeLabel ? '<span class="post-time">' + timeLabel + '</span>' : '') +
    '<div class="post-main"><div class="post-title">' + icdEscape(postsTitle_(p)) + '</div>' +
      (sub.length ? '<div class="work-task-meta">' + sub.join('') + '</div>' : '') + '</div>' +
    '<button type="button" class="post-btn post-copy">Copy</button>' +
    (p.status === 'posted'
      ? '<button type="button" class="post-btn post-again">Again</button>'
      : '<button type="button" class="post-btn post-done">Posted</button>');
  row.querySelector('.post-copy').onclick = function (e) { e.stopPropagation(); postsCopy(p); };
  var done = row.querySelector('.post-done');
  if (done) done.onclick = function (e) {
    e.stopPropagation();
    var r = e.currentTarget.getBoundingClientRect();
    confetti(r.left + r.width / 2, r.top + r.height / 2, 24);
    postsRun_('markPostPosted')(p.id);
  };
  var again = row.querySelector('.post-again');
  if (again) again.onclick = function (e) { e.stopPropagation(); postsRun_('repostPost')(p.id); toast('Copied to drafts'); };
  row.onclick = function () { postsOpen(p); };
  return row;
}

function postsRenderList_(body, list, emptyText) {
  if (!list.length) { body.innerHTML = '<div class="empty-state"><span class="empty-icon">✿</span>' + emptyText + '</div>'; return; }
  list.forEach(function (p) { body.appendChild(postsRow_(p, '')); });
}

// Next 14 days: every posting time, filled with the post scheduled there or left free
// (tap a free slot to write a post for it). Missed (past, not posted) ones on top.
function postsRenderPlan_(body, mine) {
  var now = postsData.now;
  var missed = mine.filter(postsIsMissed_).sort(function (a, b) { return (a.date + a.time).localeCompare(b.date + b.time); });
  if (missed.length) {
    var mh = document.createElement('div');
    mh.className = 'post-day-head over';
    mh.textContent = 'Missed';
    body.appendChild(mh);
    missed.forEach(function (p) { body.appendChild(postsRow_(p, p.date.slice(8, 10) + '/' + p.date.slice(5, 7) + ' ' + (p.time || ''))); });
  }
  var byKey = {};
  mine.forEach(function (p) {
    if (p.status === 'draft' || !p.date) return;
    (byKey[p.date] = byKey[p.date] || []).push(p);
  });
  var d = new Date(now.date + 'T00:00:00');
  for (var i = 0; i < POSTS_DAYS_AHEAD; i++, d.setDate(d.getDate() + 1)) {
    var ds = postsIso_(d);
    var head = document.createElement('div');
    head.className = 'post-day-head' + (postsIsSaleDay(ds) ? ' sale' : '') + (i === 0 ? ' today' : '');
    head.innerHTML = (i === 0 ? 'Today · ' : '') + POSTS_DOW[d.getDay()] + ' ' + ds.slice(8, 10) + '/' + ds.slice(5, 7) +
      (postsIsSaleDay(ds) ? ' <span class="post-sale">Sale</span>' : '');
    body.appendChild(head);
    var dayPosts = (byKey[ds] || []).slice().sort(function (a, b) { return String(a.time).localeCompare(String(b.time)); });
    var times = postsSlotsFor_(ds).slice();
    dayPosts.forEach(function (p) { if (p.time && times.indexOf(p.time) === -1) times.push(p.time); });
    times.sort();
    var usedIds = {};
    times.forEach(function (tm) {
      var here = dayPosts.filter(function (p) { return p.time === tm && !usedIds[p.id]; });
      if (here.length) {
        here.forEach(function (p) { usedIds[p.id] = true; if (!postsIsMissed_(p)) body.appendChild(postsRow_(p, tm)); });
      } else if (!(i === 0 && tm <= now.time)) {
        var free = document.createElement('div');
        free.className = 'post-row post-free';
        free.innerHTML = '<span class="post-time">' + tm + '</span><div class="post-main"><div class="post-title">+ free</div></div>';
        free.onclick = (function (dateStr, time) { return function () { postsOpen(null, dateStr, time); }; })(ds, tm);
        body.appendChild(free);
      }
    });
    dayPosts.filter(function (p) { return !p.time && !usedIds[p.id]; }).forEach(function (p) { body.appendChild(postsRow_(p, '—')); });
  }
}

/* ---------- post popup ---------- */
function postsOpen(p, date, time) {
  postsEditingId = p ? p.id : null;
  postsEditingStatus_ = p ? p.status : null;
  document.getElementById('post-modal-title').textContent = p ? 'Edit post' : 'New post';
  document.getElementById('post-product').value = p ? p.product : '';
  document.getElementById('post-tag').value = p ? p.tag : '';
  document.getElementById('post-caption').value = p ? p.caption : '';
  document.getElementById('post-links').value = p ? p.links.join('\n') : '';
  document.getElementById('post-note').value = p ? p.note : '';
  document.getElementById('post-date').value = p ? p.date : (date || '');
  document.getElementById('post-time').value = p ? p.time : (time || '');
  document.getElementById('post-tag-suggest').innerHTML = '';
  document.getElementById('post-delete').style.display = p ? '' : 'none';
  document.getElementById('post-modal').classList.add('active');
}
function postsClose_() { document.getElementById('post-modal').classList.remove('active'); }
function postsTagSuggest_() {
  var input = document.getElementById('post-tag');
  var box = document.getElementById('post-tag-suggest');
  var q = input.value.trim().toLowerCase();
  box.innerHTML = '';
  if (!q) return;
  var seen = {};
  postsData.posts.forEach(function (p) {
    var k = (p.tag || '').toLowerCase();
    if (!k || seen[k] || k === q || k.indexOf(q) === -1) return;
    seen[k] = true;
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = p.tag;
    b.onclick = function () { input.value = p.tag; box.innerHTML = ''; };
    box.appendChild(b);
  });
}
function postsSave() {
  var date = document.getElementById('post-date').value;
  var time = document.getElementById('post-time').value;
  var status = postsEditingStatus_ === 'posted' ? 'posted' : (date ? 'scheduled' : 'draft');
  var post = {
    id: postsEditingId,
    groupId: workJob ? Number(workJob) : null,
    product: document.getElementById('post-product').value,
    tag: document.getElementById('post-tag').value,
    caption: document.getElementById('post-caption').value,
    links: document.getElementById('post-links').value.split(/\s+/),
    note: document.getElementById('post-note').value,
    status: status, date: date, time: time
  };
  if (postsEditingId) {
    var old = postsData.posts.find(function (x) { return x.id === postsEditingId; });
    if (old) post.groupId = old.groupId;
  }
  if (!post.caption.trim() && !post.product.trim() && !post.links.join('').trim()) { toast('Write something first'); return; }
  postsClose_();
  postsRun_('savePost')(post);
}

/* ---------- posting-time popup ---------- */
function postsOpenSlots() {
  document.getElementById('post-slots-weekday').value = postsData.slots.weekday.join(', ');
  document.getElementById('post-slots-weekend').value = postsData.slots.weekend.join(', ');
  document.getElementById('post-slots-modal').classList.add('active');
}
function postsParseTimes_(s) {
  return String(s || '').split(/[,\s]+/).map(function (x) {
    var m = x.match(/^(\d{1,2})[:h.]?(\d{2})?$/);
    if (!m) return null;
    var h = Number(m[1]), mi = Number(m[2] || 0);
    if (h > 23 || mi > 59) return null;
    return String(h).padStart(2, '0') + ':' + String(mi).padStart(2, '0');
  }).filter(Boolean);
}
function postsSaveSlots() {
  var slots = {
    weekday: postsParseTimes_(document.getElementById('post-slots-weekday').value),
    weekend: postsParseTimes_(document.getElementById('post-slots-weekend').value)
  };
  document.getElementById('post-slots-modal').classList.remove('active');
  postsRun_('savePostSlots')(slots);
}

/* ---------- wiring ---------- */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.posts-subtab').forEach(function (b) {
    b.onclick = function () { postsTab = b.dataset.ptab; postsRender(); animIn(document.getElementById('posts-body')); };
  });
  document.getElementById('posts-add-btn').onclick = function () { postsOpen(null); };
  document.getElementById('posts-auto-btn').onclick = function () {
    var n = postsMine_().filter(function (p) { return p.status === 'draft'; }).length;
    if (!n) { toast('No drafts to schedule'); return; }
    postsRun_('autoSchedulePosts')(workJob ? Number(workJob) : null);
    postsTab = 'plan';
  };
  document.getElementById('posts-slots-btn').onclick = postsOpenSlots;
  document.getElementById('post-close').onclick = postsClose_;
  document.getElementById('post-cancel').onclick = postsClose_;
  document.getElementById('post-save').onclick = postsSave;
  document.getElementById('post-delete').onclick = function () {
    var id = postsEditingId;
    expenseConfirm('Delete this post?', function () { postsClose_(); postsRun_('deletePost')(id); });
  };
  document.getElementById('post-tag').oninput = postsTagSuggest_;
  document.getElementById('post-slots-close').onclick = function () { document.getElementById('post-slots-modal').classList.remove('active'); };
  document.getElementById('post-slots-cancel').onclick = function () { document.getElementById('post-slots-modal').classList.remove('active'); };
  document.getElementById('post-slots-save').onclick = postsSaveSlots;
});
