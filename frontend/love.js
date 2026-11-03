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
  var q = (document.getElementById('love-search').value || '').trim().toLowerCase();
  var list = loveData.memories.filter(function (m) {
    if (!q) return true;
    return [m.province, m.place, m.note, (m.tags || []).join(' '), loveFmtDay(m.day)].join(' ').toLowerCase().indexOf(q) !== -1;
  });
  // On this day: same day & month in earlier years, and "Him" days from the calendar
  var today = loveData.today || new Date().toISOString().slice(0, 10), md = today.slice(5);
  var otd = loveData.memories.filter(function (m) { return m.day.slice(5) === md && m.day < today; });
  var him = (loveData.him || []).filter(function (h) { return h.day.slice(5) === md && h.day < today && (h.repeat === 'yearly' || true); });
  var otdEl = document.getElementById('love-onthisday');
  if (!otd.length && !him.length) otdEl.innerHTML = '';
  else {
    otdEl.innerHTML = '<div class="love-otd"><div class="love-otd-title">♡ On this day</div>' +
      otd.map(function (m) {
        var y = Number(today.slice(0, 4)) - Number(m.day.slice(0, 4));
        return '<button type="button" class="love-otd-item" data-mem="' + m.id + '">' +
          (m.photos[0] ? '<img src="' + lovePhotoUrl(m.photos[0].driveId, 160) + '" alt="" loading="lazy">' : '<span class="love-otd-dot">♡</span>') +
          '<span><b>' + y + ' year' + (y === 1 ? '' : 's') + ' ago</b> · ' + loveEsc(m.place || m.province || '') + '</span></button>';
      }).join('') +
      him.map(function (h) {
        var y = Number(today.slice(0, 4)) - Number(h.day.slice(0, 4));
        return '<div class="love-otd-item"><span class="love-otd-dot">♡</span><span><b>' + y + ' year' + (y === 1 ? '' : 's') + '</b> · ' + loveEsc(h.note) + '</span></div>';
      }).join('') + '</div>';
  }
  var el = document.getElementById('love-list');
  if (!list.length) {
    el.innerHTML = '<div class="love-empty">' + (q ? 'Nothing found' : 'No memories yet ♡<br><small>Tap “+ Memory” to add the first one</small>') + '</div>';
  } else {
    var html = '', lastMonth = '';
    list.forEach(function (m) {
      var mk = m.day.slice(0, 7);
      if (mk !== lastMonth) {
        lastMonth = mk;
        html += '<div class="love-month">' + LOVE_MONTHS[Number(mk.slice(5, 7)) - 1] + ' ' + mk.slice(0, 4) + '</div>';
      }
      var ph = m.photos.slice(0, 4);
      html += '<button type="button" class="love-card" data-mem="' + m.id + '">' +
        (ph.length ? '<div class="love-cover n' + ph.length + '">' + ph.map(function (p) {
          return '<img src="' + lovePhotoUrl(p.driveId, 480) + '" alt="" loading="lazy">';
        }).join('') + (m.photos.length > 4 ? '<span class="love-more">+' + (m.photos.length - 4) + '</span>' : '') + '</div>' : '') +
        '<div class="love-card-body">' +
        '<div class="love-card-top"><span class="love-date">' + loveFmtDay(m.day) + '</span>' +
        (m.province || m.place ? '<span class="love-place">📍 ' + loveEsc([m.place, m.province].filter(Boolean).join(', ')) + '</span>' : '') + '</div>' +
        (m.note ? '<div class="love-note">' + loveEsc(m.note) + '</div>' : '') +
        ((m.tags || []).length ? '<div class="love-tags">' + m.tags.map(function (t) { return '<span>#' + loveEsc(t) + '</span>'; }).join('') + '</div>' : '') +
        '</div></button>';
    });
    el.innerHTML = html;
  }
  // the photo frames on the wall of the Love room show the latest photos
  if (typeof villageRoomPhotos === 'function') {
    var urls = [];
    loveData.memories.forEach(function (m) { m.photos.forEach(function (p) { if (urls.length < 6) urls.push(lovePhotoUrl(p.driveId, 400)); }); });
    villageRoomPhotos(urls);
  }
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
  loveEditing = mem ? JSON.parse(JSON.stringify(mem)) : { id: 0, day: (loveData.today || new Date().toISOString().slice(0, 10)), province: '', place: '', note: '', tags: [], photos: [] };
  loveNewFiles = [];
  var e = loveEditing;
  document.getElementById('love-edit-title').textContent = e.id ? 'Edit memory' : 'New memory';
  document.getElementById('love-f-day').value = e.day;
  document.getElementById('love-f-province').value = e.province;
  document.getElementById('love-f-place').value = e.place;
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
    place: document.getElementById('love-f-place').value,
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
  document.getElementById('love-search').oninput = loveRender;
  var onCard = function (e) {
    var b = e.target.closest('[data-mem]');
    if (!b) return;
    var m = loveFind(b.dataset.mem);
    if (!m) return;
    if (m.photos.length) loveOpenViewer(m, 0); else loveOpenEditor(m);
  };
  document.getElementById('love-list').addEventListener('click', onCard);
  document.getElementById('love-onthisday').addEventListener('click', onCard);
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
