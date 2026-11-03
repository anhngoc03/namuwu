/**
 * love.js — Personal › Love: the photo album.
 * Each memory: date, province, place, note, tags, photos. Text lives in Supabase,
 * photos in Google Drive (named yymmdd_<province>.jpg by the server).
 * Server: functions/api.js (getLoveData, saveLoveMemory, uploadLovePhoto…).
 */
var loveData = { memories: [], him: [], today: '' };
var loveEditing = null;          // memory being edited (copy) or null
var loveNewFiles = [];           // File objects picked in the editor, not uploaded yet
var loveViewer = { list: [], i: 0, mem: null };

var LOVE_PROVINCES = ['Hà Nội', 'Huế', 'Hải Phòng', 'Đà Nẵng', 'TP. Hồ Chí Minh', 'Cần Thơ', 'Lai Châu', 'Điện Biên', 'Sơn La',
  'Lạng Sơn', 'Quảng Ninh', 'Thanh Hóa', 'Nghệ An', 'Hà Tĩnh', 'Cao Bằng', 'Tuyên Quang', 'Lào Cai', 'Thái Nguyên', 'Phú Thọ',
  'Bắc Ninh', 'Hưng Yên', 'Ninh Bình', 'Quảng Trị', 'Quảng Ngãi', 'Gia Lai', 'Khánh Hòa', 'Lâm Đồng', 'Đắk Lắk', 'Đồng Nai',
  'Tây Ninh', 'Vĩnh Long', 'Đồng Tháp', 'Cà Mau', 'An Giang'];
var LOVE_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function lovePhotoUrl(driveId, size) {
  return '/api?photo=' + encodeURIComponent(driveId) + (size ? '&s=' + size : '') + '&t=' + encodeURIComponent(window.__personalToken || '');
}
function loveEsc(s) { return icdEscape(s).replace(/"/g, '&quot;'); }
function loveFmtDay(d) { return d ? d.slice(8, 10) + '/' + d.slice(5, 7) + '/' + d.slice(0, 4) : ''; }

function openLove() {
  showView('love-view');
  loveLoad();
}
function loveLoad() {
  showLoading();
  google.script.run
    .withSuccessHandler(function (d) { hideLoading(); loveData = d || loveData; loveRender(); })
    .withFailureHandler(function (err) {
      hideLoading();
      var msg = (err && err.message) || String(err);
      if (/love_memories|does not exist|42P01/.test(msg)) toast('Run supabase/love.sql in Supabase first');
      else toast('Error: ' + msg);
    })
    .getLoveData();
}

function loveRender() {
  // the frame on the wall shows the chosen picture
  if (typeof villageRoomFrame === 'function') villageRoomFrame(loveData.frame ? lovePhotoUrl(loveData.frame, 900) : '');
  if (typeof villageRoomFood === 'function') villageRoomFood(loveData.food || []);
  if (document.getElementById('love-book').classList.contains('on')) { lbBuild(); lbShow(); }
  if (document.getElementById('love-tl').classList.contains('on')) ltRender();
}

/* ---------- the album book: cover, then one memory per spread (info on top, photo below) ---------- */
var lb = { pages: [], i: -1, photo: 0, busy: false };   // i = -1 → the cover
function lbFiltered() {
  var y = document.getElementById('lb-year').value, mo = document.getElementById('lb-month').value, pr = document.getElementById('lb-prov').value;
  return loveData.memories.filter(function (m) {
    return (!y || m.day.slice(0, 4) === y) && (!mo || m.day.slice(5, 7) === mo) && (!pr || m.province === pr);
  }).slice().sort(function (a, b) { return a.day < b.day ? -1 : a.day > b.day ? 1 : a.id - b.id; });   // like an album: oldest first
}
function lbFilters() {
  var keep = function (id) { return document.getElementById(id).value; };
  var y = keep('lb-year'), mo = keep('lb-month'), pr = keep('lb-prov');
  var years = {}, provs = {};
  loveData.memories.forEach(function (m) { years[m.day.slice(0, 4)] = 1; if (m.province) provs[m.province] = 1; });
  document.getElementById('lb-year').innerHTML = '<option value="">All years</option>' + Object.keys(years).sort().reverse().map(function (k) { return '<option>' + k + '</option>'; }).join('');
  document.getElementById('lb-month').innerHTML = '<option value="">All months</option>' + LOVE_MONTHS.map(function (n, k) { var v = ('0' + (k + 1)).slice(-2); return '<option value="' + v + '">' + n + '</option>'; }).join('');
  document.getElementById('lb-prov').innerHTML = '<option value="">All provinces</option>' + Object.keys(provs).sort().map(function (k) { return '<option>' + loveEsc(k) + '</option>'; }).join('');
  document.getElementById('lb-year').value = years[y] ? y : ''; document.getElementById('lb-month').value = mo; document.getElementById('lb-prov').value = provs[pr] ? pr : '';
}
function lbBuild() { lbFilters(); lb.pages = lbFiltered(); if (lb.i >= lb.pages.length) lb.i = lb.pages.length - 1; }
// one memory = one page: date, province and note at the top, its photos laid out in frames below
function lbPageHtml(k) {
  var m = lb.pages[k];
  if (k === lb.pages.length) return '<div class="lb-pg lb-end"><div class="lb-end-heart">♡</div><div>' + (lb.pages.length ? 'The end… for now' : 'No memories here yet') + '</div>' +
    '<button type="button" class="pill-btn" data-lb="add">+ Memory</button></div>';
  if (!m) return '<div class="lb-blank"></div>';
  var d = new Date(m.day + 'T00:00:00'), ph = m.photos || [];
  var shown = ph.slice(0, 6), more = ph.length - shown.length;
  var collage = !ph.length ? '<div class="lb-col lb-none">♡<small>no photos</small></div>' :
    '<div class="lb-col n' + shown.length + '">' + shown.map(function (p, j) {
      return '<button type="button" class="lb-cell" data-lb="photo" data-p="' + k + '" data-k="' + j + '"><img src="' + lovePhotoUrl(p.driveId, shown.length === 1 ? 1000 : 600) + '" alt="" loading="lazy">' +
        (j === shown.length - 1 && more > 0 ? '<span class="lb-more">+' + more + '</span>' : '') + '</button>';
    }).join('') + '</div>';
  return '<div class="lb-pg">' +
    '<div class="lb-head"><div class="lb-date">' + m.day.slice(8, 10) + '<small>' + LOVE_MONTHS[d.getMonth()] + ' ' + d.getFullYear() + '</small></div>' +
    '<div class="lb-meta">' + (m.province ? '<div class="lb-prov">📍 ' + loveEsc(m.province) + '</div>' : '') +
    (m.note ? '<div class="lb-note">' + loveEsc(m.note) + '</div>' : '') +
    ((m.tags || []).length ? '<div class="love-tags">' + m.tags.map(function (t) { return '<span>#' + loveEsc(t) + '</span>'; }).join('') + '</div>' : '') + '</div>' +
    '<button type="button" class="lb-edit" data-lb="edit" data-p="' + k + '">✎</button></div>' + collage +
    '<div class="lb-pno">' + (k + 1) + '</div></div>';
}
// two pages open at once. The pages turn over from the left to the right, so spread s
// has page 2s on the right and page 2s+1 on the left; the last page is "The end".
function lbSpreads() { return Math.ceil((lb.pages.length + 1) / 2); }
function lbFit() {
  var s = Math.min((innerWidth - 20) / 600, (innerHeight - 170) / 420, 1.4);
  document.getElementById('lb-stage').style.setProperty('--lbs', Math.max(0.3, s).toFixed(3));
  document.getElementById('lb-book').style.setProperty('--lbs', Math.max(0.3, s).toFixed(3));
}
function lbShow() {
  var book = document.getElementById('lb-book');
  book.classList.toggle('open', lb.i >= 0);
  document.getElementById('lb-day').innerHTML = 'Love day <b>' + (typeof loveDayCount === 'function' ? formatThousands(loveDayCount()) : '') + '</b>';
  if (lb.i >= 0) {
    document.getElementById('lb-right').innerHTML = lbPageHtml(lb.i * 2);
    document.getElementById('lb-left').innerHTML = lbPageHtml(lb.i * 2 + 1);
  }
  document.getElementById('lb-count').textContent = lb.i < 0 ? '' : (lb.i + 1) + ' / ' + lbSpreads();
  document.getElementById('lb-prev').disabled = lb.i < 0;
  document.getElementById('lb-next').disabled = false;
}
function lbTurn(dir) {
  if (lb.busy) return;
  var book = document.getElementById('lb-book');
  if (lb.i < 0) {                                   // the cover swings open to the right
    if (dir < 0) return;
    lb.busy = true; lb.i = 0; lbShow();
    setTimeout(function () { lb.busy = false; }, 820);
    return;
  }
  if (dir > 0 && lb.i >= lbSpreads() - 1) { lbCloseBook(true); return; }   // past the last page: close the album
  if (dir < 0 && lb.i === 0) { lbCloseBook(false); return; }               // back to the cover
  lb.busy = true;
  var leaf = document.getElementById('lb-leaf'), front = document.getElementById('lb-front'), back = document.getElementById('lb-back');
  var L = document.getElementById('lb-left'), Rt = document.getElementById('lb-right'), s0 = lb.i;
  if (dir > 0) {                                    // the left page lifts and turns over onto the right
    front.innerHTML = lbPageHtml(s0 * 2 + 1); back.innerHTML = lbPageHtml(s0 * 2 + 2);
    L.innerHTML = lbPageHtml(s0 * 2 + 3);
    leaf.className = 'lb-leaf on-left go-next';
  } else {                                          // the right page turns back over onto the left
    front.innerHTML = lbPageHtml(s0 * 2); back.innerHTML = lbPageHtml(s0 * 2 - 1);
    Rt.innerHTML = lbPageHtml(s0 * 2 - 2);
    leaf.className = 'lb-leaf on-right go-prev';
  }
  setTimeout(function () { lb.i = s0 + dir; lbShow(); leaf.className = 'lb-leaf'; lb.busy = false; }, 800);
}
// close the book back to its cover; after the last page it then goes away, back into the room
function lbCloseBook(thenLeave) {
  if (lb.busy) return;
  lb.busy = true;
  var book = document.getElementById('lb-book');
  book.classList.add('closing'); lb.i = -1; lbShow();
  setTimeout(function () {
    book.classList.remove('closing'); lb.busy = false;
    if (thenLeave) setTimeout(lbClose, 350);
  }, 850);
}
function lbOpen(atId) {
  lbBuild(); lbFit();
  lb.i = -1; lb.photo = 0;
  if (atId) {
    ['lb-year', 'lb-month', 'lb-prov'].forEach(function (id) { document.getElementById(id).value = ''; });
    lb.pages = lbFiltered();
    lb.i = Math.floor(Math.max(0, lb.pages.findIndex(function (m) { return m.id === atId; })) / 2);
  }
  lbShow();
  var w = document.getElementById('love-book');
  w.classList.add('on'); requestAnimationFrame(function () { w.classList.add('in'); });
}
function lbClose() {
  var w = document.getElementById('love-book');
  if (!w.classList.contains('on')) return;
  w.classList.remove('in');
  setTimeout(function () { w.classList.remove('on'); }, 320);
  if (typeof villageRoomBack === 'function') villageRoomBack();     // the camera zooms back out into the room
}

/* ---------- timeline by year ---------- */
function ltRender() {
  var sel = document.getElementById('lt-year'), cur = String(new Date().getFullYear());
  var years = {}; years[cur] = 1;
  loveData.memories.forEach(function (m) { years[m.day.slice(0, 4)] = 1; });
  var y = sel.value || cur;
  sel.innerHTML = Object.keys(years).sort().reverse().map(function (k) { return '<option>' + k + '</option>'; }).join('');
  sel.value = y;
  var list = loveData.memories.filter(function (m) { return m.day.slice(0, 4) === y; }).slice().sort(function (a, b) { return a.day < b.day ? -1 : 1; });
  var el = document.getElementById('lt-list');
  if (!list.length) { el.innerHTML = '<div class="lt-empty">Nothing in ' + y + ' yet ♡</div>'; return; }
  var html = '', last = '';
  list.forEach(function (m) {
    var mk = m.day.slice(5, 7);
    if (mk !== last) { last = mk; html += '<div class="lt-month">' + LOVE_MONTHS[Number(mk) - 1] + '</div>'; }
    html += '<button type="button" class="lt-item" data-mem="' + m.id + '"><span class="lt-dot"></span>' +
      '<span class="lt-date">' + m.day.slice(8, 10) + '/' + mk + '</span>' +
      '<span class="lt-text"><b>' + loveEsc(m.province || '—') + '</b>' + (m.note ? '<small>' + loveEsc(m.note) + '</small>' : '') + '</span>' +
      (m.photos[0] ? '<img src="' + lovePhotoUrl(m.photos[0].driveId, 160) + '" alt="" loading="lazy">' : '') + '</button>';
  });
  el.innerHTML = html;
}
function ltOpen() { document.getElementById('lt-year').value = ''; ltRender(); var w = document.getElementById('love-tl'); w.classList.add('on'); requestAnimationFrame(function () { w.classList.add('in'); }); }
function ltClose() { var w = document.getElementById('love-tl'); w.classList.remove('in'); setTimeout(function () { w.classList.remove('on'); }, 300); }

/* ---------- tapping things in the Love room ---------- */
window.loveRoomPick = function (what, at) {
  if (what === 'album') lbOpen();
  else if (what === 'frame') document.getElementById('love-frame-file').click();
  else if (what === 'couple-menu') loveBubble(at);
};
// the little chat bubble over their heads: go for a drive, or order food
function loveBubble(at) {
  var b = document.getElementById('love-bubble');
  if (!at) return;
  b.style.left = Math.max(110, Math.min(innerWidth - 110, at.x)) + 'px';
  b.style.top = Math.max(70, at.y) + 'px';
  b.classList.remove('on'); void b.offsetWidth; b.classList.add('on');
  if (navigator.vibrate) try { navigator.vibrate(12); } catch (e) {}
}
function loveBubbleClose() { document.getElementById('love-bubble').classList.remove('on'); }

/* ---------- order food: what's on their table at mealtimes (up to 4 dishes) ---------- */
var loveFood = { picked: [], results: [] };
function loveFoodOpen() {
  loveFood.picked = (loveData.food || []).slice(0, 4);
  loveFood.results = [];
  document.getElementById('love-food-q').value = '';
  document.getElementById('love-food-results').innerHTML = '';
  loveFoodPicked();
  document.getElementById('love-food-modal').classList.add('active');
  setTimeout(function () { document.getElementById('love-food-q').focus(); }, 200);
}
function loveFoodPicked() {
  var el = document.getElementById('love-food-picked');
  document.getElementById('love-food-n').textContent = loveFood.picked.length;
  el.innerHTML = loveFood.picked.length ? loveFood.picked.map(function (f, i) {
    return '<div class="lf-chip"><i' + (f.img ? ' style="background-image:url(\'' + f.img.replace(/'/g, '%27') + '\')">' : '>🍲') + '</i>' + loveEsc(f.name) +
      '<button type="button" data-lfx="' + i + '" aria-label="Remove">✕</button></div>';
  }).join('') : '<div class="lf-empty">Nothing yet — find a dish and tap its picture</div>';
}
function loveFoodTiles() {
  var box = document.getElementById('love-food-results'), q = loveFood.q || '';
  var ai = loveFood.ai;
  var html = '<button type="button" class="lf-pic lf-ai' + (ai && ai.img ? '' : ' busy') + '" data-lfp="ai"' + (ai && ai.img ? '' : ' disabled') + '>' +
    (ai && ai.img ? '<img src="' + ai.img + '" alt="">' : '<i class="lf-spin">✨</i>') +
    '<span>' + (ai && ai.err ? loveEsc(ai.err) : ai && ai.img ? '✨ drawn for you' : 'Drawing…') + '</span></button>';
  html += (loveFood.results || []).map(function (x, i) {
    return '<button type="button" class="lf-pic" data-lfp="' + i + '"><img src="' + loveEsc(x.img) + '" alt="" loading="lazy" referrerpolicy="no-referrer"><span>' + loveEsc(x.alt || q) + '</span></button>';
  }).join('');
  if (loveFood.searching) html += '<div class="lf-wait">Looking for photos of “' + loveEsc(q) + '”…</div>';
  box.innerHTML = html;
}
// Find: Claude draws the dish (always works, any dish), and real photos come from Wikipedia alongside
function loveFoodSearch(q) {
  q = String(q || '').trim(); if (!q) return;
  var run = (loveFood.run || 0) + 1;
  loveFood.run = run; loveFood.q = q; loveFood.ai = null; loveFood.results = []; loveFood.searching = true;
  loveFoodTiles();
  lovePromise('drawLoveFood', q).then(function (r) { if (loveFood.run === run) { loveFood.ai = { img: r.img }; loveFoodTiles(); } })
    .catch(function (e) { if (loveFood.run === run) { loveFood.ai = { err: (e && e.message) || 'Could not draw it' }; loveFoodTiles(); } });
  lovePromise('findLoveFoodImages', q).then(function (r) {
    if (loveFood.run !== run) return;
    loveFood.results = ((r && r.images) || []).map(function (x) { return { title: q, img: x.img, alt: x.title }; });
  }).catch(function () {}).then(function () { if (loveFood.run === run) { loveFood.searching = false; loveFoodTiles(); } });
}
function loveFoodSave() {
  var btn = document.getElementById('love-food-save'); btn.disabled = true;
  lovePromise('saveLoveFood', loveFood.picked).then(function (r) {
    loveData.food = (r && r.food) || [];
    if (typeof villageRoomFood === 'function') villageRoomFood(loveData.food);
    document.getElementById('love-food-modal').classList.remove('active');
    toast(loveData.food.length ? 'Ordered ♡ it’s on the table' : 'Back to bún chả ♡');
  }).catch(function (e) { toast((e && e.message) || 'Could not order'); }).then(function () { btn.disabled = false; });
}
function loveFoodWire() {
  document.getElementById('love-bubble').addEventListener('click', function (e) {
    var b = e.target.closest('[data-lv]'); if (!b) return;
    loveBubbleClose();
    if (b.dataset.lv === 'drive') { if (typeof villageDrive === 'function') villageDrive(); }
    else loveFoodOpen();
  });
  document.addEventListener('pointerdown', function (e) { if (!e.target.closest('#love-bubble')) loveBubbleClose(); }, true);
  document.getElementById('love-food-close').onclick = function () { document.getElementById('love-food-modal').classList.remove('active'); };
  document.getElementById('love-food-form').onsubmit = function (e) { e.preventDefault(); loveFoodSearch(document.getElementById('love-food-q').value); };
  document.getElementById('love-food-results').addEventListener('click', function (e) {
    var b = e.target.closest('[data-lfp]'); if (!b) return;
    if (loveFood.picked.length >= 4) { toast('Up to 4 dishes ♡ remove one first'); return; }
    var x = b.dataset.lfp === 'ai' ? { title: loveFood.q, img: loveFood.ai && loveFood.ai.img } : loveFood.results[Number(b.dataset.lfp)];
    if (!x || !x.img) return;
    loveFood.picked.push({ name: x.title, img: x.img });
    loveFoodPicked();
  });
  document.getElementById('love-food-picked').addEventListener('click', function (e) {
    var b = e.target.closest('[data-lfx]'); if (!b) return;
    loveFood.picked.splice(Number(b.dataset.lfx), 1); loveFoodPicked();
  });
  document.getElementById('love-food-clear').onclick = function () { loveFood.picked = []; loveFoodPicked(); };
  document.getElementById('love-food-save').onclick = loveFoodSave;
}
function loveSetFrame(file) {
  if (!file) return;
  toast('Putting it in the frame…');
  lovePromise('startLoveFrameUpload', { name: file.name, type: file.type || 'image/jpeg', size: file.size })
    .then(function (s) { return fetch(s.uploadUrl, { method: 'PUT', headers: { 'Content-Type': file.type || 'image/jpeg' }, body: file }); })
    .then(function (res) { if (!res.ok) throw new Error('Drive ' + res.status); return res.json(); })
    .then(function (d) { return lovePromise('setLoveFrame', d.id); })
    .then(function (r) { loveData.frame = r.driveId; loveRender(); toast('New picture on the wall ♡'); })
    .catch(function (e) { toast((e && e.message) || 'Couldn\'t change the frame'); });
}

function loveFind(id) { return loveData.memories.filter(function (m) { return m.id === Number(id); })[0]; }

/* ---------- viewer ---------- */
function loveOpenViewer(mem, i) {
  loveViewer = { mem: mem, list: mem.photos, i: i || 0 };
  loveViewerShow();
  document.getElementById('love-view-modal').classList.add('active');
}
function loveViewerShow() {
  var v = loveViewer, m = v.mem, p = v.list[v.i];
  var img = document.getElementById('love-view-img');
  img.style.display = p ? '' : 'none';
  if (p) img.src = lovePhotoUrl(p.driveId, 1600);
  document.getElementById('love-view-count').textContent = v.list.length > 1 ? (v.i + 1) + ' / ' + v.list.length : '';
  document.getElementById('love-view-prev').style.visibility = v.list.length > 1 ? '' : 'hidden';
  document.getElementById('love-view-next').style.visibility = v.list.length > 1 ? '' : 'hidden';
  document.getElementById('love-view-meta').innerHTML =
    '<div class="love-card-top"><span class="love-date">' + loveFmtDay(m.day) + '</span>' +
    (m.province || m.place ? '<span class="love-place">📍 ' + loveEsc([m.place, m.province].filter(Boolean).join(', ')) + '</span>' : '') + '</div>' +
    (m.note ? '<div class="love-note full">' + loveEsc(m.note) + '</div>' : '') +
    ((m.tags || []).length ? '<div class="love-tags">' + m.tags.map(function (t) { return '<span>#' + loveEsc(t) + '</span>'; }).join('') + '</div>' : '') +
    (p ? '<div class="love-file">' + loveEsc(p.name) + '</div>' : '');
}
function loveStep(d) {
  var v = loveViewer;
  if (v.list.length < 2) return;
  v.i = (v.i + d + v.list.length) % v.list.length;
  loveViewerShow();
}

/* ---------- editor ---------- */
function loveOpenEditor(mem) {
  loveEditing = mem ? JSON.parse(JSON.stringify(mem)) : { id: 0, day: (loveData.today || new Date().toISOString().slice(0, 10)), province: '', note: '', tags: [], photos: [] };
  loveNewFiles = [];
  var e = loveEditing;
  document.getElementById('love-edit-title').textContent = e.id ? 'Edit memory' : 'New memory';
  document.getElementById('love-f-day').value = e.day;
  document.getElementById('love-f-province').value = e.province;
  document.getElementById('love-f-note').value = e.note;
  document.getElementById('love-f-tags').value = (e.tags || []).join(', ');
  document.getElementById('love-f-delete').style.display = e.id ? '' : 'none';
  loveRenderPicked();
  document.getElementById('love-view-modal').classList.remove('active');
  document.getElementById('love-edit-modal').classList.add('active');
}
function loveRenderPicked() {
  var box = document.getElementById('love-f-photos');
  var html = (loveEditing.photos || []).map(function (p) {
    return '<span class="love-thumb"><img src="' + lovePhotoUrl(p.driveId, 200) + '" alt=""><button type="button" data-rm-old="' + p.id + '">✕</button></span>';
  }).join('');
  html += loveNewFiles.map(function (f, i) {
    return '<span class="love-thumb new"><img src="' + f.preview + '" alt=""><button type="button" data-rm-new="' + i + '">✕</button></span>';
  }).join('');
  box.innerHTML = html;
}
function loveReadB64(file) {
  return new Promise(function (res, rej) {
    var r = new FileReader();
    r.onload = function () { res(String(r.result).split(',')[1] || ''); };
    r.onerror = function () { rej(new Error("Can't read " + file.name)); };
    r.readAsDataURL(file);
  });
}
function loveSave() {
  var e = loveEditing;
  var m = {
    id: e.id,
    day: document.getElementById('love-f-day').value,
    province: document.getElementById('love-f-province').value,
    place: e.place || '',
    note: document.getElementById('love-f-note').value,
    tags: document.getElementById('love-f-tags').value.split(/[,#]/).map(function (t) { return t.trim(); }).filter(Boolean)
  };
  if (!m.day) { toast('Pick a date'); return; }
  var files = loveNewFiles.map(function (f) { return f.file; });
  showLoading();
  google.script.run
    .withSuccessHandler(function (r) {
      hideLoading();
      document.getElementById('love-edit-modal').classList.remove('active');
      toast(files.length ? 'Saved ♡ — photos are uploading' : 'Saved ♡');
      loveLoad();
      files.forEach(function (f) { loveQueue.push({ memoryId: r.id, file: f }); });
      loveUploadKick();
    })
    .withFailureHandler(function (err) { hideLoading(); toast((err && err.message) || 'Error'); })
    .saveLoveMemory(m);
}

/* ---------- photo uploads: original files, straight to Google Drive, 3 at a time, in the background ---------- */
var loveQueue = [], loveActive = 0, loveDone = 0, loveFailed = 0, loveTotal = 0, loveStartChain = Promise.resolve();
var LOVE_PARALLEL = 3;
function lovePromise(name) {
  var args = Array.prototype.slice.call(arguments, 1);
  return new Promise(function (res, rej) {
    var r = google.script.run.withSuccessHandler(res).withFailureHandler(function (e) { rej(new Error((e && e.message) || 'Error')); });
    r[name].apply(r, args);
  });
}
function loveChip() {
  var el = document.getElementById('love-upload');
  var left = loveQueue.length + loveActive;
  if (!loveTotal) { el.classList.remove('on'); return; }
  el.classList.add('on');
  var pct = Math.round(loveDone / loveTotal * 100);
  el.querySelector('.love-upload-text').textContent = left
    ? '♡ Uploading ' + (loveDone + 1 > loveTotal ? loveTotal : loveDone + 1) + ' / ' + loveTotal
    : (loveFailed ? loveFailed + ' photo' + (loveFailed === 1 ? '' : 's') + ' didn\'t upload' : 'All photos uploaded ♡');
  el.querySelector('.love-upload-bar i').style.width = (left ? pct : 100) + '%';
  if (!left) {
    setTimeout(function () { if (!loveQueue.length && !loveActive) { loveTotal = loveDone = loveFailed = 0; loveChip(); } }, 2600);
    if (document.getElementById('love-view').style.display !== 'none') loveLoad();
  }
}
function loveUploadKick() {
  loveTotal = loveDone + loveFailed + loveActive + loveQueue.length;
  loveChip();
  while (loveActive < LOVE_PARALLEL && loveQueue.length) loveUploadOne(loveQueue.shift());
}
// the old way (through the server, as text) — only if the direct upload is blocked
function loveUploadViaServer(job) {
  return loveReadB64(job.file).then(function (b64) {
    return lovePromise('uploadLovePhoto', job.memoryId, { name: job.file.name, type: job.file.type || 'image/jpeg', data: b64 });
  });
}
function loveUploadOne(job) {
  loveActive++;
  var f = job.file, type = f.type || (/\.heic$/i.test(f.name) ? 'image/heic' : 'image/jpeg');
  // ask for upload links one at a time (keeps file names in order), send the photos side by side
  var start = loveStartChain = loveStartChain.then(function () {
    return lovePromise('startLovePhotoUpload', job.memoryId, { name: f.name, type: type, size: f.size });
  });
  start.catch(function () {});
  start.then(function (s) {
    return fetch(s.uploadUrl, { method: 'PUT', headers: { 'Content-Type': type }, body: f })
      .then(function (res) {
        if (!res.ok) throw new Error('Drive ' + res.status);
        return res.json();
      })
      .then(function (d) { return lovePromise('finishLovePhotoUpload', s.photoId, d.id); })
      .catch(function (err) {
        // blocked / dropped → tidy up, then try the slower way once
        lovePromise('cancelLovePhotoUpload', s.photoId).catch(function () {});
        return loveUploadViaServer(job);
      });
  }).then(function () { loveDone++; }, function (err) { loveFailed++; toast((err && err.message) || 'Upload failed'); })
    .then(function () { loveActive--; loveUploadKick(); });
}
window.addEventListener('beforeunload', function (e) {
  if (loveQueue.length || loveActive) { e.preventDefault(); e.returnValue = ''; }
});

function loveWire() {
  if (!document.getElementById('love-view')) return;
  var dl = document.getElementById('love-provinces');
  dl.innerHTML = LOVE_PROVINCES.map(function (p) { return '<option value="' + p + '">'; }).join('');
  document.getElementById('love-add-btn').onclick = function () { loveOpenEditor(null); };
  loveFoodWire();
  document.getElementById('love-tl-btn').onclick = ltOpen;
  document.getElementById('lt-close').onclick = ltClose;
  document.getElementById('lt-year').onchange = ltRender;
  document.getElementById('lt-list').addEventListener('click', function (e) {
    var b = e.target.closest('[data-mem]'); if (!b) return;
    ltClose(); lbOpen(Number(b.dataset.mem));
  });
  document.getElementById('love-frame-file').onchange = function () { var f = this.files && this.files[0]; this.value = ''; loveSetFrame(f); };
  // the book
  document.getElementById('lb-close').onclick = lbClose;
  document.getElementById('lb-prev').onclick = function () { lbTurn(-1); };
  document.getElementById('lb-next').onclick = function () { lbTurn(1); };
  ['lb-year', 'lb-month', 'lb-prov'].forEach(function (id) { document.getElementById(id).onchange = function () { lb.pages = lbFiltered(); lb.i = lb.i < 0 ? -1 : 0; lbShow(); }; });
  document.getElementById('lb-cover').onclick = function () { lbTurn(1); };
  document.getElementById('lb-spread').addEventListener('click', function (e) {
    if (lb.busy) return;
    var a = e.target.closest('[data-lb]');
    if (a && a.dataset.lb === 'edit') { var m = lb.pages[Number(a.dataset.p)]; if (m) loveOpenEditor(m); return; }
    if (a && a.dataset.lb === 'add') { loveOpenEditor(null); return; }
    if (a && a.dataset.lb === 'photo') { var mm = lb.pages[Number(a.dataset.p)]; if (mm) loveOpenViewer(mm, Number(a.dataset.k) || 0); return; }
    // a tap on the paper turns that page: the left one forward, the right one back
    var pg = e.target.closest('.lb-page');
    if (pg) lbTurn(pg.id === 'lb-left' ? 1 : -1);
  });
  // a tap outside the book puts it away (and the camera zooms back out)
  document.getElementById('love-book').addEventListener('click', function (e) {
    if (e.target === this || e.target.id === 'lb-stage' && !e.target.closest('.lb-book')) lbClose();
  });
  window.addEventListener('resize', function () { if (document.getElementById('love-book').classList.contains('on')) lbFit(); });
  // swipe: finger to the right = next (the pages travel left → right), to the left = back
  var sx = 0, sy = 0, st = document.getElementById('lb-stage');
  st.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  st.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 40) return;
    if (Math.abs(dx) < Math.abs(dy)) return;
    lbTurn(dx > 0 ? 1 : -1);
  });
  document.addEventListener('keydown', function (e) {
    if (!document.getElementById('love-book').classList.contains('on') || document.querySelector('.modal-overlay.active')) return;
    if (e.key === 'ArrowRight') lbTurn(1);
    else if (e.key === 'ArrowLeft') lbTurn(-1);
    else if (e.key === 'Escape') lbClose();
  });
  document.getElementById('love-view-close').onclick = function () { document.getElementById('love-view-modal').classList.remove('active'); };
  document.getElementById('love-view-prev').onclick = function () { loveStep(-1); };
  document.getElementById('love-view-next').onclick = function () { loveStep(1); };
  document.getElementById('love-view-edit').onclick = function () { loveOpenEditor(loveViewer.mem); };
  // swipe left / right on the big photo
  var sx = null, img = document.getElementById('love-view-img');
  img.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  img.addEventListener('touchend', function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) loveStep(dx < 0 ? 1 : -1); sx = null; });
  document.addEventListener('keydown', function (e) {
    if (!document.getElementById('love-view-modal').classList.contains('active')) return;
    if (e.key === 'ArrowLeft') loveStep(-1); else if (e.key === 'ArrowRight') loveStep(1);
  });
  document.getElementById('love-edit-close').onclick = function () { document.getElementById('love-edit-modal').classList.remove('active'); };
  document.getElementById('love-f-add').onclick = function () { document.getElementById('love-f-file').click(); };
  document.getElementById('love-f-file').onchange = function () {
    var fi = this, list = Array.prototype.slice.call(fi.files || []);
    fi.value = '';
    list.forEach(function (f) {
      if (!/^image\//.test(f.type || '') && !/\.(heic|heif|jpe?g|png|webp|gif)$/i.test(f.name)) { toast(f.name + ' is not a photo'); return; }
      loveNewFiles.push({ file: f, preview: URL.createObjectURL(f) });
    });
    loveRenderPicked();
  };
  document.getElementById('love-f-photos').addEventListener('click', function (e) {
    var n = e.target.closest('[data-rm-new]');
    if (n) { loveNewFiles.splice(Number(n.dataset.rmNew), 1); loveRenderPicked(); return; }
    var o = e.target.closest('[data-rm-old]');
    if (o) {
      if (!confirm('Delete this photo? (it goes to the Drive bin)')) return;
      showLoading();
      google.script.run
        .withSuccessHandler(function () {
          hideLoading();
          loveEditing.photos = loveEditing.photos.filter(function (p) { return p.id !== Number(o.dataset.rmOld); });
          loveRenderPicked(); loveLoad();
        })
        .withFailureHandler(function (err) { hideLoading(); toast((err && err.message) || 'Error'); })
        .deleteLovePhoto(Number(o.dataset.rmOld));
    }
  });
  document.getElementById('love-f-save').onclick = loveSave;
  document.getElementById('love-f-delete').onclick = function () {
    if (!loveEditing || !loveEditing.id) return;
    if (!confirm('Delete this memory and move its photos to the Drive bin?')) return;
    showLoading();
    google.script.run
      .withSuccessHandler(function () { hideLoading(); document.getElementById('love-edit-modal').classList.remove('active'); toast('Deleted'); loveLoad(); })
      .withFailureHandler(function (err) { hideLoading(); toast((err && err.message) || 'Error'); })
      .deleteLoveMemory(loveEditing.id);
  };
}
document.addEventListener('DOMContentLoaded', loveWire);
