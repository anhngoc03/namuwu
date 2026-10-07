/* ================================================================
   PDF CONVERTER — runs 100% in the browser. Nothing is uploaded or stored.
   Needs lib/pdf-lib.min.js and lib/jszip.min.js (loaded on first use).
   Images -> PDF pages; Word / Excel / PowerPoint are read and drawn page by
   page onto a canvas (approximate layout), then placed into the PDF.
   ================================================================ */
(function () {
  'use strict';

  var S = 2;                 // canvas pixels per PDF point when rendering document pages
  var MAX_IMG_SIDE = 3200;   // downscale giant photos so phones don't run out of memory
  var MAX_PAGES = 300;       // safety stop for huge documents
  var JPEG_Q = 0.9;
  var A4 = { w: 595.28, h: 841.89 };

  /* ---------------- lazy script loading ---------------- */
  var scriptPromises = {};
  function loadScript(src) {
    if (scriptPromises[src]) return scriptPromises[src];
    scriptPromises[src] = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = res;
      s.onerror = function () { delete scriptPromises[src]; rej(new Error('Could not load ' + src + ' — is the lib/ folder uploaded?')); };
      document.head.appendChild(s);
    });
    return scriptPromises[src];
  }
  function needPdfLib() { return window.PDFLib ? Promise.resolve() : loadScript('lib/pdf-lib.min.js'); }
  function needZip() { return window.JSZip ? Promise.resolve() : loadScript('lib/jszip.min.js'); }

  /* ---------------- state ---------------- */
  var files = [];     // {id, file, kind, ext, thumb}
  var results = [];   // {name, blob, url, pages, error}
  var busy = false;
  var uid = 0;

  var IMG_EXT = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'heic', 'heif'];

  function extOf(name) { var m = /\.([^.]+)$/.exec(name || ''); return m ? m[1].toLowerCase() : ''; }
  function baseName(name) { return String(name || 'file').replace(/\.[^.]+$/, ''); }
  function kindOf(file) {
    var e = extOf(file.name);
    if (IMG_EXT.indexOf(e) >= 0 || /^image\//.test(file.type || '')) return 'image';
    if (e === 'docx') return 'docx';
    if (e === 'xlsx') return 'xlsx';
    if (e === 'pptx') return 'pptx';
    return null;
  }
  function human(n) {
    if (n < 1024) return n + ' B';
    if (n < 1048576) return (n / 1024).toFixed(0) + ' KB';
    return (n / 1048576).toFixed(1) + ' MB';
  }
  function $(id) { return document.getElementById(id); }
  function msg(t) { if (typeof toast === 'function') toast(t); }

  /* ---------------- list UI ---------------- */
  function addFiles(fileList) {
    var rejected = [];
    Array.prototype.forEach.call(fileList, function (f) {
      var k = kindOf(f);
      if (!k) { rejected.push(f.name); return; }
      var item = { id: ++uid, file: f, kind: k, ext: extOf(f.name), thumb: null };
      if (k === 'image' && item.ext !== 'heic' && item.ext !== 'heif') {
        try { item.thumb = URL.createObjectURL(f); } catch (e) {}
      }
      files.push(item);
    });
    if (rejected.length) {
      var old = rejected.filter(function (n) { return /\.(doc|xls|ppt)$/i.test(n); });
      msg(old.length ? 'Old .doc/.xls/.ppt are not supported — save as .docx/.xlsx/.pptx first' : 'Unsupported file: ' + rejected[0]);
    }
    renderList();
  }

  function renderList() {
    var list = $('conv-list');
    list.innerHTML = '';
    files.forEach(function (it, idx) {
      var row = document.createElement('div');
      row.className = 'conv-item';
      var th = document.createElement('div');
      th.className = 'conv-thumb conv-thumb-' + it.kind;
      if (it.thumb) { var im = document.createElement('img'); im.src = it.thumb; im.alt = ''; th.appendChild(im); }
      else th.textContent = it.ext.toUpperCase();
      var info = document.createElement('div');
      info.className = 'conv-item-info';
      var nm = document.createElement('div'); nm.className = 'conv-item-name'; nm.textContent = it.file.name;
      var sub = document.createElement('div'); sub.className = 'conv-item-sub';
      sub.textContent = (idx + 1) + ' · ' + human(it.file.size);
      info.appendChild(nm); info.appendChild(sub);
      var acts = document.createElement('div'); acts.className = 'conv-item-acts';
      function btn(label, title, fn, disabled) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'conv-icon-btn'; b.textContent = label; b.title = title;
        b.disabled = !!disabled || busy; b.onclick = function (e) { e.stopPropagation(); fn(); };
        acts.appendChild(b);
      }
      btn('▲', 'Move up', function () { moveFile(it.id, -1); }, idx === 0);
      btn('▼', 'Move down', function () { moveFile(it.id, 1); }, idx === files.length - 1);
      btn('✕', 'Remove', function () { removeFile(it.id); });
      row.appendChild(th); row.appendChild(info); row.appendChild(acts);
      list.appendChild(row);
    });
    $('conv-count').textContent = files.length ? (files.length + (files.length === 1 ? ' file' : ' files')) : 'No files yet';
    $('conv-clear-btn').style.display = files.length ? '' : 'none';
    $('conv-convert-btn').disabled = busy || !files.length;
    updateOptionRows();
  }

  function moveFile(id, dir) {
    var i = files.findIndex(function (f) { return f.id === id; });
    var j = i + dir;
    if (i < 0 || j < 0 || j >= files.length) return;
    var t = files[i]; files[i] = files[j]; files[j] = t;
    renderList();
  }
  function removeFile(id) {
    var i = files.findIndex(function (f) { return f.id === id; });
    if (i < 0) return;
    if (files[i].thumb) URL.revokeObjectURL(files[i].thumb);
    files.splice(i, 1);
    renderList();
  }
  function clearResults() {
    results.forEach(function (r) { if (r.url) URL.revokeObjectURL(r.url); });
    results = [];
    $('conv-results').innerHTML = '';
    $('conv-results-panel').style.display = 'none';
    $('conv-save-all-btn').style.display = 'none';
  }
  function clearAll() {
    if (busy) return;
    files.forEach(function (f) { if (f.thumb) URL.revokeObjectURL(f.thumb); });
    files = [];
    clearResults();
    $('conv-progress').style.display = 'none';
    renderList();
  }

  function updateOptionRows() {
    var hasImg = files.some(function (f) { return f.kind === 'image'; });
    var size = $('conv-opt-size').value;
    $('conv-opt-size').parentNode.style.display = hasImg ? '' : 'none';
    $('conv-row-orient').style.display = (hasImg && size === 'a4') ? '' : 'none';
    $('conv-row-margin').style.display = (hasImg && size === 'a4') ? '' : 'none';
  }

  function setProgress(frac, text) {
    $('conv-progress').style.display = '';
    $('conv-progress-fill').style.width = Math.max(2, Math.min(100, Math.round(frac * 100))) + '%';
    $('conv-progress-text').textContent = text || '';
  }

  /* ---------------- helpers: canvas / images ---------------- */
  function newCanvas(w, h) {
    var c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(w));
    c.height = Math.max(1, Math.round(h));
    return c;
  }
  function canvasToJpeg(canvas) {
    return new Promise(function (res, rej) {
      canvas.toBlob(function (b) {
        if (!b) { rej(new Error('Could not encode a page image (out of memory?)')); return; }
        b.arrayBuffer().then(function (ab) { res(new Uint8Array(ab)); }, rej);
      }, 'image/jpeg', JPEG_Q);
    });
  }
  async function decodeBitmap(blob) {
    try { return await createImageBitmap(blob, { imageOrientation: 'from-image' }); }
    catch (e1) {
      try { return await createImageBitmap(blob); } catch (e2) {
        return await new Promise(function (res, rej) {
          var u = URL.createObjectURL(blob), im = new Image();
          im.onload = function () { URL.revokeObjectURL(u); res(im); };
          im.onerror = function () { URL.revokeObjectURL(u); rej(new Error('decode')); };
          im.src = u;
        });
      }
    }
  }
  function bmpSize(b) { return { w: b.width || b.naturalWidth, h: b.height || b.naturalHeight }; }

  async function imagePages(item) {
    var bmp;
    try { bmp = await decodeBitmap(item.file); }
    catch (e) {
      if (item.ext === 'heic' || item.ext === 'heif') throw new Error('This browser cannot open HEIC photos (Safari can). Convert it to JPG first.');
      throw new Error('Could not read this image');
    }
    var sz = bmpSize(bmp), k = Math.min(1, MAX_IMG_SIDE / Math.max(sz.w, sz.h));
    var c = newCanvas(sz.w * k, sz.h * k), x = c.getContext('2d');
    x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
    x.drawImage(bmp, 0, 0, c.width, c.height);
    if (bmp.close) bmp.close();
    var jpeg = await canvasToJpeg(c);
    return [{ kind: 'image', jpeg: jpeg, w: c.width, h: c.height }];
  }

  /* ---------------- PDF assembly ---------------- */
  async function buildPdf(pages, opts) {
    var pdf = await PDFLib.PDFDocument.create();
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i];
      var img = await pdf.embedJpg(p.jpeg);
      if (p.kind === 'page') {
        var pg = pdf.addPage([p.wPt, p.hPt]);
        pg.drawImage(img, { x: 0, y: 0, width: p.wPt, height: p.hPt });
      } else if (opts.size === 'original') {
        var pw = Math.min(14400, p.w * 0.75), ph = Math.min(14400, p.h * 0.75);
        var pg2 = pdf.addPage([pw, ph]);
        pg2.drawImage(img, { x: 0, y: 0, width: pw, height: ph });
      } else {
        var land = opts.orient === 'landscape' || (opts.orient === 'auto' && p.w > p.h);
        var W = land ? A4.h : A4.w, H = land ? A4.w : A4.h, m = opts.margin;
        var aw = W - 2 * m, ah = H - 2 * m, sc = Math.min(aw / p.w, ah / p.h);
        var dw = p.w * sc, dh = p.h * sc;
        var pg3 = pdf.addPage([W, H]);
        pg3.drawImage(img, { x: (W - dw) / 2, y: (H - dh) / 2, width: dw, height: dh });
      }
    }
    return pdf.save();
  }

  /* shared page-sink used by the document renderers: render one page on a canvas,
     convert it to JPEG straight away and free the canvas (keeps memory small). */
  function PageSink(wPt, hPt) {
    var self = { pages: [], cv: null, ctx: null, w: wPt, h: hPt };
    self.open = function () {
      if (self.pages.length >= MAX_PAGES) throw new Error('Document is too long (limit ' + MAX_PAGES + ' pages)');
      self.cv = newCanvas(wPt * S, hPt * S);
      self.ctx = self.cv.getContext('2d');
      self.ctx.fillStyle = '#fff'; self.ctx.fillRect(0, 0, self.cv.width, self.cv.height);
      self.ctx.scale(S, S);
      return self.ctx;
    };
    self.close = async function () {
      if (!self.cv) return;
      var jpeg = await canvasToJpeg(self.cv);
      self.pages.push({ kind: 'page', jpeg: jpeg, wPt: wPt, hPt: hPt });
      self.cv.width = self.cv.height = 1;
      self.cv = null; self.ctx = null;
    };
    return self;
  }

  /* ---------------- zip + xml helpers ---------------- */
  async function openZip(file) {
    await needZip();
    try { return await JSZip.loadAsync(file); }
    catch (e) { throw new Error('This file looks damaged or is not a valid Office file'); }
  }
  async function zipText(zip, path) {
    var f = zip.file(path);
    return f ? await f.async('string') : null;
  }
  function parseXml(str) {
    if (!str) return null;
    var d = new DOMParser().parseFromString(str, 'application/xml');
    return d.getElementsByTagName('parsererror').length ? null : d.documentElement;
  }
  function kids(el, name) {
    var out = [];
    if (!el) return out;
    for (var c = el.firstElementChild; c; c = c.nextElementSibling) if (c.localName === name) out.push(c);
    return out;
  }
  function kid(el, name) {
    if (!el) return null;
    for (var c = el.firstElementChild; c; c = c.nextElementSibling) if (c.localName === name) return c;
    return null;
  }
  function descs(el, name) { return el ? Array.prototype.slice.call(el.getElementsByTagNameNS('*', name)) : []; }
  function at(el, n) { return el ? el.getAttribute(n) : null; }
  function num(v, d) { var n = parseFloat(v); return isNaN(n) ? d : n; }
  function resolvePath(base, target) {
    if (/^\//.test(target)) return target.slice(1);
    var parts = base.split('/'); parts.pop();
    target.split('/').forEach(function (p) { if (p === '..') parts.pop(); else if (p !== '.') parts.push(p); });
    return parts.join('/');
  }
  async function readRels(zip, partPath) {
    var dir = partPath.substring(0, partPath.lastIndexOf('/') + 1), nm = partPath.substring(partPath.lastIndexOf('/') + 1);
    var root = parseXml(await zipText(zip, dir + '_rels/' + nm + '.rels'));
    var map = {};
    kids(root, 'Relationship').forEach(function (r) {
      var t = r.getAttribute('Target');
      map[r.getAttribute('Id')] = { type: r.getAttribute('Type') || '', path: r.getAttribute('TargetMode') === 'External' ? null : resolvePath(partPath, t) };
    });
    return map;
  }
  var MIME = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', bmp: 'image/bmp', webp: 'image/webp', svg: 'image/svg+xml' };
  async function zipBitmap(zip, path, cache) {
    if (!path) return null;
    if (cache && cache[path] !== undefined) return cache[path];
    var f = zip.file(path), bmp = null;
    if (f) {
      try {
        var bytes = await f.async('uint8array');
        bmp = await createImageBitmap(new Blob([bytes], { type: MIME[extOf(path)] || 'image/png' }));
      } catch (e) { bmp = null; }   // e.g. EMF/WMF — skipped
    }
    if (cache) cache[path] = bmp;
    return bmp;
  }

  /* ================================================================
     TEXT LAYOUT ENGINE (shared by Word and PowerPoint)
     Units are PDF points. Runs: {t:'text',text,f:{family,size,bold,italic},color,ul,st}
     | {t:'img',bmp,w,h} | {t:'br'} | {t:'tab'}
     ================================================================ */
  var mctx = document.createElement('canvas').getContext('2d');
  function fontStr(f) { return (f.italic ? 'italic ' : '') + (f.bold ? 'bold ' : '') + f.size + 'px ' + f.family; }
  function measure(text, f) { mctx.font = fontStr(f); return mctx.measureText(text).width; }
  function familyFor(name) {
    var n = String(name || '').toLowerCase();
    if (!n) return 'Calibri, "Segoe UI", Arial, Helvetica, sans-serif';
    var generic = /mono|courier|consolas|menlo/.test(n) ? 'monospace' : /times|georgia|serif|cambria|garamond|palatino|book/.test(n) && !/sans/.test(n) ? 'serif' : 'sans-serif';
    return '"' + name.replace(/"/g, '') + '", ' + (generic === 'sans-serif' ? 'Calibri, "Segoe UI", Arial, Helvetica, ' : '') + generic;
  }

  function layoutRuns(runs, o) {
    var width = o.width, left = o.indentLeft || 0, first = o.indentFirst || 0;
    var mult = o.lineMult || 1, fixedH = o.lineFixed || 0, defSize = o.defSize || 11;
    var lines = [], cur = null, isFirst = true;
    function startX() { return left + (isFirst ? first : 0); }
    function begin() { cur = { items: [], x: startX(), wrapped: false, maxSize: 0, maxImg: 0, justifiable: false }; }
    function finish(hard) {
      var avail = width - startX();
      var it = cur.items;
      while (it.length && it[it.length - 1].space) it.pop();      // trim trailing spaces
      var endX = it.length ? it[it.length - 1].x + it[it.length - 1].w : startX();
      var lineW = endX - startX();
      var ms = cur.maxSize || defSize;
      var textH = ms * 1.2;
      var h = fixedH ? Math.max(fixedH, cur.maxImg) : Math.max(textH * mult, cur.maxImg ? cur.maxImg + ms * 0.25 : 0);
      var base = h - ms * 0.25 - (fixedH ? 0 : (textH * mult - textH) * 0.0);
      var shift = 0, align = o.align || 'left';
      if (align === 'center') shift = Math.max(0, (avail - lineW) / 2);
      else if (align === 'right') shift = Math.max(0, avail - lineW);
      if (align === 'justify' && !hard && it.length) {
        var spaces = it.filter(function (x) { return x.space; }).length, extra = avail - lineW;
        if (spaces > 0 && extra > 0) {
          var per = extra / spaces, acc = 0;
          it.forEach(function (x) { x.x += acc; if (x.space) { x.w += per; acc += per; } });
        }
      }
      if (shift) it.forEach(function (x) { x.x += shift; });
      lines.push({ items: it, h: h, base: base, lineW: lineW });
      isFirst = false; begin();
    }
    begin();
    runs.forEach(function (r) {
      if (r.t === 'br') { finish(true); return; }
      if (r.t === 'tab') {
        var nx = (Math.floor(cur.x / 36) + 1) * 36;
        if (nx > width) nx = width;
        cur.x = nx; return;
      }
      if (r.t === 'img') {
        if (cur.x + r.w > width && cur.items.length) finish(false);
        cur.items.push({ x: cur.x, w: r.w, h: r.h, bmp: r.bmp });
        cur.x += r.w; cur.maxImg = Math.max(cur.maxImg, r.h);
        return;
      }
      var f = r.f, size = f.size;
      var toks = String(r.text).split(/(\s+)/);
      toks.forEach(function (tk) {
        if (!tk) return;
        var isSp = /^\s+$/.test(tk);
        if (isSp) {
          if (cur.items.length === 0 && (cur.wrapped || !o.keepLeadSpace)) return;
          var sw = measure(' ', f) * tk.length;
          cur.items.push({ x: cur.x, w: sw, text: tk, f: f, color: r.color, ul: r.ul, st: r.st, space: true });
          cur.x += sw; cur.maxSize = Math.max(cur.maxSize, size);
          return;
        }
        var w = measure(tk, f);
        if (cur.x + w > width && cur.items.length && !cur.items.every(function (x) { return x.space; })) { cur.wrapped = true; finish(false); cur.wrapped = true; }
        if (w > width - startX() && width - startX() > 20) {              // very long word: break by characters
          var chunk = '';
          for (var i = 0; i < tk.length; i++) {
            var tryS = chunk + tk[i];
            if (measure(tryS, f) > width - cur.x && chunk) {
              var cw = measure(chunk, f);
              cur.items.push({ x: cur.x, w: cw, text: chunk, f: f, color: r.color, ul: r.ul, st: r.st });
              cur.maxSize = Math.max(cur.maxSize, size); cur.x += cw;
              cur.wrapped = true; finish(false); cur.wrapped = true; chunk = tk[i];
            } else chunk = tryS;
          }
          tk = chunk; w = measure(tk, f);
        }
        if (tk) {
          cur.items.push({ x: cur.x, w: w, text: tk, f: f, color: r.color, ul: r.ul, st: r.st });
          cur.x += w; cur.maxSize = Math.max(cur.maxSize, size);
        }
      });
    });
    // last line (also yields one empty line for an empty paragraph)
    finish(true);
    var height = lines.reduce(function (a, l) { return a + l.h; }, 0);
    return { lines: lines, height: height };
  }

  function drawLine(ctx, line, x0, y0) {
    var base = y0 + line.base;
    line.items.forEach(function (it) {
      if (it.bmp) { try { ctx.drawImage(it.bmp, x0 + it.x, base - it.h, it.w, it.h); } catch (e) {} return; }
      if (!it.text) return;
      var f = it.f, sh = it.shift || 0;
      ctx.font = fontStr(f);
      ctx.fillStyle = it.color || '#000';
      ctx.textBaseline = 'alphabetic';
      if (!it.space) ctx.fillText(it.text, x0 + it.x, base - sh);
      if (it.ul || it.st) {
        ctx.strokeStyle = it.color || '#000'; ctx.lineWidth = Math.max(0.5, f.size / 18);
        ctx.beginPath();
        if (it.ul) { ctx.moveTo(x0 + it.x, base + f.size * 0.1 - sh); ctx.lineTo(x0 + it.x + it.w, base + f.size * 0.1 - sh); }
        if (it.st) { ctx.moveTo(x0 + it.x, base - f.size * 0.3 - sh); ctx.lineTo(x0 + it.x + it.w, base - f.size * 0.3 - sh); }
        ctx.stroke();
      }
    });
  }

  /* ================================================================
     WORD (.docx)
     ================================================================ */
  function onOff(el) { if (!el) return undefined; var v = el.getAttribute('w:val'); return !(v === '0' || v === 'false' || v === 'off'); }
  function hexColor(v) { return v && /^[0-9a-f]{6}$/i.test(v) ? '#' + v : null; }

  function wRPr(el) {
    var o = {};
    if (!el) return o;
    var rf = kid(el, 'rFonts'); if (rf) { var fam = rf.getAttribute('w:ascii') || rf.getAttribute('w:hAnsi') || rf.getAttribute('w:cs') || rf.getAttribute('w:eastAsia'); if (fam) o.family = fam; }
    var sz = kid(el, 'sz'); if (sz) o.size = num(sz.getAttribute('w:val'), 22) / 2;
    var b = kid(el, 'b'); if (b) o.bold = onOff(b);
    var i = kid(el, 'i'); if (i) o.italic = onOff(i);
    var u = kid(el, 'u'); if (u) o.ul = (u.getAttribute('w:val') || 'single') !== 'none';
    var s = kid(el, 'strike'); if (s) o.st = onOff(s);
    var c = kid(el, 'color'); if (c) { var col = c.getAttribute('w:val'); o.color = col === 'auto' ? '#000000' : hexColor(col); }
    var va = kid(el, 'vertAlign'); if (va) o.vert = va.getAttribute('w:val');
    var cp = kid(el, 'caps'); if (cp) o.caps = onOff(cp);
    return o;
  }
  function wPPr(el) {
    var o = {};
    if (!el) return o;
    var jc = kid(el, 'jc'); if (jc) { var v = jc.getAttribute('w:val'); o.jc = v === 'both' || v === 'distribute' ? 'justify' : v === 'center' ? 'center' : (v === 'right' || v === 'end') ? 'right' : 'left'; }
    var sp = kid(el, 'spacing');
    if (sp) {
      if (sp.hasAttribute('w:before')) o.before = num(sp.getAttribute('w:before'), 0) / 20;
      if (sp.hasAttribute('w:after')) o.after = num(sp.getAttribute('w:after'), 0) / 20;
      if (sp.hasAttribute('w:line')) {
        var ln = num(sp.getAttribute('w:line'), 240), rule = sp.getAttribute('w:lineRule') || 'auto';
        if (rule === 'auto') { o.lineMult = ln / 240; o.lineFixed = 0; } else { o.lineFixed = ln / 20; o.lineMult = 1; }
      }
    }
    var ind = kid(el, 'ind');
    if (ind) {
      var l = ind.getAttribute('w:left') || ind.getAttribute('w:start'); if (l !== null) o.left = num(l, 0) / 20;
      if (ind.hasAttribute('w:firstLine')) { o.firstLine = num(ind.getAttribute('w:firstLine'), 0) / 20; o.hanging = 0; }
      if (ind.hasAttribute('w:hanging')) { o.hanging = num(ind.getAttribute('w:hanging'), 0) / 20; o.firstLine = 0; }
    }
    var np = kid(el, 'numPr');
    if (np) { var nid = kid(np, 'numId'), il = kid(np, 'ilvl'); if (nid) o.numId = nid.getAttribute('w:val'); o.ilvl = il ? num(il.getAttribute('w:val'), 0) : 0; }
    if (kid(el, 'pageBreakBefore')) o.pageBreakBefore = onOff(kid(el, 'pageBreakBefore'));
    return o;
  }
  function toRoman(n) { var m = [[1000, 'm'], [900, 'cm'], [500, 'd'], [400, 'cd'], [100, 'c'], [90, 'xc'], [50, 'l'], [40, 'xl'], [10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i']], s = ''; m.forEach(function (p) { while (n >= p[0]) { s += p[1]; n -= p[0]; } }); return s; }
  function fmtNum(n, fmt) {
    if (fmt === 'lowerLetter') return String.fromCharCode(96 + ((n - 1) % 26) + 1);
    if (fmt === 'upperLetter') return String.fromCharCode(64 + ((n - 1) % 26) + 1);
    if (fmt === 'lowerRoman') return toRoman(n);
    if (fmt === 'upperRoman') return toRoman(n).toUpperCase();
    return String(n);
  }

  async function docxPages(file, progress) {
    var zip = await openZip(file);
    var docXml = parseXml(await zipText(zip, 'word/document.xml'));
    if (!docXml) throw new Error('Could not read this Word file');
    var body = kid(docXml, 'body');
    var rels = await readRels(zip, 'word/document.xml');
    var stylesRoot = parseXml(await zipText(zip, 'word/styles.xml'));
    var numRoot = parseXml(await zipText(zip, 'word/numbering.xml'));

    /* styles */
    var styles = {}, defR = {}, defP = {}, defaultParaStyle = null;
    if (stylesRoot) {
      var dd = kid(stylesRoot, 'docDefaults');
      if (dd) { defR = wRPr(kid(kid(dd, 'rPrDefault'), 'rPr')); defP = wPPr(kid(kid(dd, 'pPrDefault'), 'pPr')); }
      kids(stylesRoot, 'style').forEach(function (s) {
        var id = s.getAttribute('w:styleId');
        styles[id] = { id: id, type: s.getAttribute('w:type'), basedOn: at(kid(s, 'basedOn'), 'w:val'), p: wPPr(kid(s, 'pPr')), r: wRPr(kid(s, 'rPr')) };
        if (s.getAttribute('w:type') === 'paragraph' && s.getAttribute('w:default') === '1') defaultParaStyle = id;
      });
    }
    function chain(id) { var out = [], g = 0; while (id && styles[id] && g++ < 20) { out.unshift(styles[id]); id = styles[id].basedOn; } return out; }
    function styleP(id) { var o = {}; chain(id).forEach(function (s) { Object.assign(o, s.p); }); return o; }
    function styleR(id) { var o = {}; chain(id).forEach(function (s) { Object.assign(o, s.r); }); return o; }

    /* numbering */
    var abstract = {}, nums = {}, counters = {};
    if (numRoot) {
      kids(numRoot, 'abstractNum').forEach(function (a) {
        var lv = {};
        kids(a, 'lvl').forEach(function (l) {
          lv[l.getAttribute('w:ilvl')] = {
            fmt: at(kid(l, 'numFmt'), 'w:val') || 'decimal',
            text: at(kid(l, 'lvlText'), 'w:val') || '',
            p: wPPr(kid(l, 'pPr')),
            start: num(at(kid(l, 'start'), 'w:val'), 1)
          };
        });
        abstract[a.getAttribute('w:abstractNumId')] = lv;
      });
      kids(numRoot, 'num').forEach(function (n) { nums[n.getAttribute('w:numId')] = at(kid(n, 'abstractNumId'), 'w:val'); });
    }
    function listLabel(numId, ilvl) {
      var lv = abstract[nums[numId]]; if (!lv || !lv[ilvl]) return null;
      var L = lv[ilvl];
      var c = counters[numId] = counters[numId] || {};
      c[ilvl] = (c[ilvl] === undefined ? L.start : c[ilvl] + 1);
      Object.keys(c).forEach(function (k) { if (+k > ilvl) delete c[k]; });
      if (L.fmt === 'bullet') return { text: ilvl % 3 === 0 ? '•' : ilvl % 3 === 1 ? '◦' : '▪', p: L.p };
      var t = L.text.replace(/%(\d)/g, function (m, d) {
        var lvl = +d - 1, ll = lv[lvl] || L, val = c[lvl] === undefined ? ll.start : c[lvl];
        return fmtNum(val, ll.fmt);
      });
      return { text: t, p: L.p };
    }

    /* page setup */
    var sect = kid(body, 'sectPr');
    var W = 595.28, H = 841.89, mT = 72, mB = 72, mL = 72, mR = 72;
    if (sect) {
      var pgSz = kid(sect, 'pgSz'), pgMar = kid(sect, 'pgMar');
      if (pgSz) { W = num(pgSz.getAttribute('w:w'), 11906) / 20; H = num(pgSz.getAttribute('w:h'), 16838) / 20; }
      if (pgMar) { mT = num(pgMar.getAttribute('w:top'), 1440) / 20; mB = num(pgMar.getAttribute('w:bottom'), 1440) / 20; mL = num(pgMar.getAttribute('w:left'), 1440) / 20; mR = num(pgMar.getAttribute('w:right'), 1440) / 20; }
    }
    var cw = W - mL - mR, bottom = H - mB;
    var sink = PageSink(W, H);
    var ctx = sink.open(), y = mT;
    var imgCache = {};
    var baseR = Object.assign({ size: 11, family: '', bold: false, italic: false, ul: false, st: false, color: '#000000' }, defR);
    var baseP = Object.assign({ jc: 'left', before: 0, after: 0, lineMult: 1, lineFixed: 0, left: 0, firstLine: 0, hanging: 0 }, defP);
    var defParaStyleP = defaultParaStyle ? styleP(defaultParaStyle) : {}, defParaStyleR = defaultParaStyle ? styleR(defaultParaStyle) : {};

    async function newPage() { await sink.close(); ctx = sink.open(); y = mT; }

    /* turn a <w:p> into runs (+ paragraph props) */
    async function paraRuns(p, rBase) {
      var runs = [];
      async function walk(node, inherit) {
        for (var c = node.firstElementChild; c; c = c.nextElementSibling) {
          var n = c.localName;
          if (n === 'r') await doRun(c, inherit);
          else if (n === 'hyperlink' || n === 'ins' || n === 'smartTag' || n === 'sdt' || n === 'sdtContent' || n === 'fldSimple') await walk(c, inherit);
        }
      }
      async function doRun(r, inherit) {
        var rs = kid(r, 'rPr'), rsId = rs && kid(rs, 'rStyle') ? at(kid(rs, 'rStyle'), 'w:val') : null;
        var props = Object.assign({}, inherit, rsId ? styleR(rsId) : {}, wRPr(rs));
        var size = props.size;
        if (props.vert === 'superscript' || props.vert === 'subscript') size = size * 0.65;
        var f = { family: familyFor(props.family), size: size, bold: !!props.bold, italic: !!props.italic };
        var col = props.color || '#000000', ul = !!props.ul, st = !!props.st;
        for (var c = r.firstElementChild; c; c = c.nextElementSibling) {
          var n = c.localName;
          if (n === 't') { var tx = c.textContent; runs.push({ t: 'text', text: props.caps ? tx.toUpperCase() : tx, f: f, color: col, ul: ul, st: st, sup: props.vert === 'superscript', sub: props.vert === 'subscript' }); }
          else if (n === 'tab') runs.push({ t: 'tab' });
          else if (n === 'br' || n === 'cr') { if (c.getAttribute('w:type') === 'page') runs.push({ t: 'pagebreak' }); else runs.push({ t: 'br' }); }
          else if (n === 'noBreakHyphen') runs.push({ t: 'text', text: '-', f: f, color: col });
          else if (n === 'drawing') {
            var ext = descs(c, 'extent')[0], blip = descs(c, 'blip')[0];
            if (ext && blip) {
              var rid = blip.getAttribute('r:embed'), rel = rels[rid];
              var bmp = rel ? await zipBitmap(zip, rel.path, imgCache) : null;
              if (bmp) {
                var iw = num(ext.getAttribute('cx'), 0) / 12700, ih = num(ext.getAttribute('cy'), 0) / 12700;
                if (!iw || !ih) { iw = bmp.width * 0.75; ih = bmp.height * 0.75; }
                runs.push({ t: 'img', bmp: bmp, w: iw, h: ih });
              }
            }
          }
        }
      }
      await walk(p, rBase);
      return runs;
    }

    async function layoutPara(p, width, opts) {
      opts = opts || {};
      var pPr = kid(p, 'pPr');
      var sId = pPr && kid(pPr, 'pStyle') ? at(kid(pPr, 'pStyle'), 'w:val') : defaultParaStyle;
      var pp = Object.assign({}, baseP, defParaStyleP, sId && sId !== defaultParaStyle ? styleP(sId) : {}, wPPr(pPr));
      var rBase = Object.assign({}, baseR, defParaStyleR, sId && sId !== defaultParaStyle ? styleR(sId) : {});
      var rp = pPr ? wRPr(kid(pPr, 'rPr')) : {}; // paragraph-mark props only affect empty paragraph size
      var runs = await paraRuns(p, rBase);
      var left = pp.left, first = pp.firstLine - pp.hanging, label = null;
      if (pp.numId && pp.numId !== '0') {
        var lb = listLabel(pp.numId, pp.ilvl || 0);
        if (lb) {
          var lp = lb.p || {};
          if (pp.left === (defP.left || 0) && lp.left !== undefined) left = lp.left;
          if (lp.hanging !== undefined && !(pPr && kid(pPr, 'ind'))) first = -lp.hanging;
          if (!first || first >= 0) first = -18;
          if (left < -first) left = -first;
          label = lb.text;
        }
      }
      // split on page breaks
      var segs = [[]];
      runs.forEach(function (r) { if (r.t === 'pagebreak') segs.push([]); else segs[segs.length - 1].push(r); });
      var out = segs.map(function (sr, si) {
        // shrink images wider than the text area
        sr.forEach(function (r) { if (r.t === 'img') { var mw = width - Math.max(0, left); if (r.w > mw) { r.h *= mw / r.w; r.w = mw; } } });
        var defSize = (rp.size || rBase.size);
        var lay = layoutRuns(sr, { width: width, align: pp.jc, indentLeft: Math.max(0, left), indentFirst: label ? 0 : first, lineMult: pp.lineMult, lineFixed: pp.lineFixed, defSize: defSize, keepLeadSpace: true });
        if (label && si === 0) {
          var f0 = (sr.find(function (r) { return r.t === 'text'; }) || { f: { family: familyFor(rBase.family), size: rBase.size, bold: false, italic: false }, color: '#000' });
          lay.lines[0].items.unshift({ x: Math.max(0, left + first), w: measure(label, f0.f), text: label, f: f0.f, color: f0.color });
        }
        return lay;
      });
      return { segs: out, before: pp.before, after: pp.after, pageBreakBefore: !!pp.pageBreakBefore };
    }

    async function flowParagraph(p) {
      var lp = await layoutPara(p, cw);
      if (lp.pageBreakBefore && y > mT + 1) await newPage();
      y += lp.before;
      for (var si = 0; si < lp.segs.length; si++) {
        if (si > 0) await newPage();
        var lines = lp.segs[si].lines;
        for (var li = 0; li < lines.length; li++) {
          var ln = lines[li];
          if (y + ln.h > bottom + 0.5 && y > mT + 1) await newPage();
          drawLine(ctx, ln, mL, y);
          y += ln.h;
        }
      }
      y += lp.after;
    }

    async function flowTable(tbl) {
      var grid = kids(kid(tbl, 'tblGrid'), 'gridCol').map(function (g) { return num(g.getAttribute('w:w'), 0) / 20; });
      var rows = kids(tbl, 'tr');
      if (!grid.length) {
        var n = Math.max.apply(null, rows.map(function (r) { return kids(r, 'tc').length; }).concat([1]));
        for (var i = 0; i < n; i++) grid.push(cw / n);
      }
      var total = grid.reduce(function (a, b) { return a + b; }, 0), sc = total > cw ? cw / total : 1;
      grid = grid.map(function (g) { return g * sc; });
      var tblPr = kid(tbl, 'tblPr');
      var bordered = false;
      if (tblPr) {
        var tb = kid(tblPr, 'tblBorders');
        if (tb) bordered = kids(tb, 'top').concat(kids(tb, 'left'), kids(tb, 'insideH')).some(function (b) { var v = b.getAttribute('w:val'); return v && v !== 'nil' && v !== 'none'; });
        var ts = kid(tblPr, 'tblStyle');
        if (ts && /grid|table/i.test(at(ts, 'w:val')) && !/normal/i.test(at(ts, 'w:val'))) bordered = bordered || /grid/i.test(at(ts, 'w:val')) || (!tb && true);
      }
      var padX = 5.4, padY = 3;
      for (var ri = 0; ri < rows.length; ri++) {
        var cells = kids(rows[ri], 'tc'), col = 0, laid = [], rowH = 0;
        for (var ci = 0; ci < cells.length; ci++) {
          var tc = cells[ci], tcPr = kid(tc, 'tcPr');
          var span = tcPr && kid(tcPr, 'gridSpan') ? num(at(kid(tcPr, 'gridSpan'), 'w:val'), 1) : 1;
          var w = 0; for (var k = 0; k < span; k++) w += grid[col + k] || 0;
          var x = 0; for (var k2 = 0; k2 < col; k2++) x += grid[k2] || 0;
          var shd = tcPr && kid(tcPr, 'shd') ? hexColor(at(kid(tcPr, 'shd'), 'w:fill')) : null;
          var cellBorder = tcPr && kid(tcPr, 'tcBorders') ? kids(kid(tcPr, 'tcBorders'), 'top').concat(kids(kid(tcPr, 'tcBorders'), 'left')).some(function (b) { var v = b.getAttribute('w:val'); return v && v !== 'nil' && v !== 'none'; }) : false;
          var vm = tcPr && kid(tcPr, 'vMerge'), contMerge = vm && !vm.getAttribute('w:val');
          var content = [], h = 0;
          if (!contMerge) {
            var ps = kids(tc, 'p').concat(descs(tc, 'tbl').length ? [] : []);
            // nested tables are flattened to their paragraphs
            var all = []; (function collect(node) { for (var c = node.firstElementChild; c; c = c.nextElementSibling) { if (c.localName === 'p') all.push(c); else if (c.localName === 'tbl' || c.localName === 'tr' || c.localName === 'tc') collect(c); } })(tc);
            for (var pi = 0; pi < all.length; pi++) {
              var lp = await layoutPara(all[pi], Math.max(20, w - 2 * padX));
              var seg = lp.segs[0];
              content.push({ lay: seg, y: h + lp.before });
              h += lp.before + seg.height + lp.after;
            }
          }
          laid.push({ x: x, w: w, shd: shd, border: bordered || cellBorder, content: content, h: h + 2 * padY });
          rowH = Math.max(rowH, h + 2 * padY);
          col += span;
        }
        var trh = kid(rows[ri], 'trPr') && kid(kid(rows[ri], 'trPr'), 'trHeight');
        if (trh) rowH = Math.max(rowH, num(at(trh, 'w:val'), 0) / 20);
        if (y + rowH > bottom + 0.5 && y > mT + 1) await newPage();
        laid.forEach(function (c) {
          if (c.shd) { ctx.fillStyle = c.shd; ctx.fillRect(mL + c.x, y, c.w, rowH); }
          c.content.forEach(function (blk) {
            var yy = y + padY + blk.y;
            blk.lay.lines.forEach(function (ln) { drawLine(ctx, ln, mL + c.x + padX, yy); yy += ln.h; });
          });
          if (c.border) { ctx.strokeStyle = '#8a8a8a'; ctx.lineWidth = 0.6; ctx.strokeRect(mL + c.x, y, c.w, rowH); }
        });
        y += rowH;
      }
      y += 6;
    }

    var blocks = Array.prototype.filter.call(body.children, function (c) { return c.localName === 'p' || c.localName === 'tbl'; });
    for (var bi = 0; bi < blocks.length; bi++) {
      if (blocks[bi].localName === 'p') await flowParagraph(blocks[bi]); else await flowTable(blocks[bi]);
      if (bi % 20 === 0) progress(bi / blocks.length);
    }
    await sink.close();
    return sink.pages;
  }

  /* ================================================================
     EXCEL (.xlsx) — each sheet becomes one or more pages (grid + text)
     ================================================================ */
  var BUILTIN_FMT = { 0: 'General', 1: '0', 2: '0.00', 3: '#,##0', 4: '#,##0.00', 9: '0%', 10: '0.00%', 37: '#,##0', 38: '#,##0', 39: '#,##0.00', 40: '#,##0.00' };
  function colIndex(ref) { var m = /^([A-Z]+)/.exec(ref), n = 0; for (var i = 0; i < m[1].length; i++) n = n * 26 + (m[1].charCodeAt(i) - 64); return n - 1; }
  function rowIndex(ref) { return parseInt(/(\d+)$/.exec(ref)[1], 10) - 1; }
  function pad2(n) { return n < 10 ? '0' + n : '' + n; }
  function excelDate(serial, withTime) {
    var ms = Math.round((serial - 25569) * 86400000), d = new Date(ms);
    var s = pad2(d.getUTCDate()) + '/' + pad2(d.getUTCMonth() + 1) + '/' + d.getUTCFullYear();
    if (withTime) s += ' ' + pad2(d.getUTCHours()) + ':' + pad2(d.getUTCMinutes());
    return s;
  }
  function fmtGroup(n, dec, group) {
    var neg = n < 0, a = Math.abs(n).toFixed(dec), parts = a.split('.');
    if (group) parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (neg ? '-' : '') + parts.join('.');
  }
  function formatCell(v, fmtCode, fmtId) {
    var n = parseFloat(v);
    if (isNaN(n)) return String(v);
    var code = fmtCode || BUILTIN_FMT[fmtId];
    if ((fmtId >= 14 && fmtId <= 22) || (fmtId >= 45 && fmtId <= 47)) return excelDate(n, fmtId >= 20 && fmtId !== 14 || fmtId === 22);
    if (!code || code === 'General') {
      if (Math.abs(n) >= 1e11 || (Math.abs(n) < 1e-4 && n !== 0)) return n.toExponential(4).replace(/\.?0+e/, 'e');
      return String(Math.round(n * 1e10) / 1e10);
    }
    var sec = String(code).split(';')[0].replace(/\[[^\]]*\]/g, '').replace(/"/g, '');
    var plain = sec.replace(/"[^"]*"/g, '');
    if (/(^|[^0#.,])(d{1,4}|y{2,4}|h{1,2}:|mmm)|:m|m{1,2}\/|\/m/i.test(plain) && !/^[#0,.\s%$€đ₫]+$/.test(plain)) return excelDate(n, /h/i.test(plain));
    var pct = /%/.test(sec), dec = (/\.([0#]+)/.exec(sec) || [0, ''])[1].length, group = /,/.test(sec.replace(/\.[0#]+/, ''));
    var val = pct ? n * 100 : n;
    var out = fmtGroup(val, dec, group);
    var pre = (/^([^#0.,]*)[#0]/.exec(sec) || [0, ''])[1].replace(/[_*\\]./g, '').replace(/\?/g, '');
    var post = (/[#0]([^#0.,]*)$/.exec(sec) || [0, ''])[1].replace(/[_*\\]./g, '').replace(/%/g, '');
    return pre + out + (pct ? '%' : '') + post;
  }

  async function xlsxPages(file, progress) {
    var zip = await openZip(file);
    var wb = parseXml(await zipText(zip, 'xl/workbook.xml'));
    if (!wb) throw new Error('Could not read this Excel file');
    var wbRels = await readRels(zip, 'xl/workbook.xml');
    var ssRoot = parseXml(await zipText(zip, 'xl/sharedStrings.xml')), shared = [];
    if (ssRoot) kids(ssRoot, 'si').forEach(function (si) { shared.push(descs(si, 't').map(function (t) { return t.textContent; }).join('')); });

    /* styles → xf list */
    var st = parseXml(await zipText(zip, 'xl/styles.xml')), fmts = {}, fonts = [], fills = [], xfs = [];
    if (st) {
      kids(kid(st, 'numFmts'), 'numFmt').forEach(function (n) { fmts[n.getAttribute('numFmtId')] = n.getAttribute('formatCode'); });
      kids(kid(st, 'fonts'), 'font').forEach(function (f) {
        var c = kid(f, 'color'), rgb = c && c.getAttribute('rgb');
        fonts.push({ bold: !!kid(f, 'b'), italic: !!kid(f, 'i'), size: num(at(kid(f, 'sz'), 'val'), 11), name: at(kid(f, 'name'), 'val') || '', color: rgb && rgb.length === 8 ? '#' + rgb.slice(2) : null });
      });
      kids(kid(st, 'fills'), 'fill').forEach(function (f) {
        var pf = kid(f, 'patternFill'), fg = pf && kid(pf, 'fgColor'), rgb = fg && fg.getAttribute('rgb');
        fills.push(pf && pf.getAttribute('patternType') === 'solid' && rgb && rgb.length === 8 ? '#' + rgb.slice(2) : (pf && pf.getAttribute('patternType') === 'solid' && fg && fg.getAttribute('theme') ? themeFill(fg) : null));
      });
      kids(kid(st, 'cellXfs'), 'xf').forEach(function (x) {
        var al = kid(x, 'alignment');
        xfs.push({ fmtId: num(x.getAttribute('numFmtId'), 0), font: fonts[num(x.getAttribute('fontId'), 0)] || fonts[0] || { size: 11 }, fill: fills[num(x.getAttribute('fillId'), 0)] || null, h: al ? al.getAttribute('horizontal') : null, wrap: al ? al.getAttribute('wrapText') === '1' : false });
      });
    }
    function themeFill(fg) { var t = num(fg.getAttribute('theme'), 0), tint = num(fg.getAttribute('tint'), 0); var base = ['#ffffff', '#000000', '#e7e6e6', '#44546a', '#4472c4', '#ed7d31', '#a5a5a5', '#ffc000', '#5b9bd5', '#70ad47'][t] || '#ffffff'; return tintHex(base, tint); }
    function tintHex(hex, tint) {
      var r = parseInt(hex.substr(1, 2), 16), g = parseInt(hex.substr(3, 2), 16), b = parseInt(hex.substr(5, 2), 16);
      function f(c) { return Math.round(tint >= 0 ? c + (255 - c) * tint : c * (1 + tint)); }
      return 'rgb(' + f(r) + ',' + f(g) + ',' + f(b) + ')';
    }

    var sheets = kids(kid(wb, 'sheets'), 'sheet').filter(function (s) { return s.getAttribute('state') !== 'hidden' && s.getAttribute('state') !== 'veryHidden'; });
    var all = [];
    for (var si = 0; si < sheets.length; si++) {
      var sh = sheets[si], rel = wbRels[sh.getAttribute('r:id')];
      if (!rel) continue;
      var root = parseXml(await zipText(zip, rel.path));
      if (!root) continue;
      var pages = await renderSheet(root, sh.getAttribute('name'), shared, xfs, fmts);
      all = all.concat(pages);
      progress((si + 1) / sheets.length);
    }
    if (!all.length) throw new Error('This workbook has no visible data');
    return all;
  }

  async function renderSheet(root, title, shared, xfs, fmts) {
    var cells = {}, maxR = -1, maxC = -1, rowH = {}, hiddenRows = {};
    var data = kid(root, 'sheetData');
    kids(data, 'row').forEach(function (r) {
      var ri = num(r.getAttribute('r'), 0) - 1;
      if (r.getAttribute('hidden') === '1') hiddenRows[ri] = true;
      if (r.getAttribute('ht')) rowH[ri] = num(r.getAttribute('ht'), 15);
      kids(r, 'c').forEach(function (c) {
        var ref = c.getAttribute('r'); if (!ref) return;
        var ci = colIndex(ref), rr = rowIndex(ref), t = c.getAttribute('t'), vEl = kid(c, 'v'), v = vEl ? vEl.textContent : '';
        var xf = xfs[num(c.getAttribute('s'), 0)] || { fmtId: 0, font: { size: 11 }, fill: null };
        var text = '', isNum = false;
        if (t === 's') text = shared[parseInt(v, 10)] || '';
        else if (t === 'inlineStr') text = descs(c, 't').map(function (x) { return x.textContent; }).join('');
        else if (t === 'b') text = v === '1' ? 'TRUE' : 'FALSE';
        else if (t === 'str' || t === 'e') text = v;
        else if (v !== '') { text = formatCell(v, fmts[xf.fmtId], xf.fmtId); isNum = true; }
        if (text === '' && !xf.fill) return;
        cells[rr + ',' + ci] = { text: text, xf: xf, num: isNum };
        if (text !== '') { maxR = Math.max(maxR, rr); maxC = Math.max(maxC, ci); }
        else { maxR = Math.max(maxR, rr); maxC = Math.max(maxC, ci); }
      });
    });
    if (maxR < 0 || maxC < 0) return [];
    // column widths
    var colW = []; for (var c0 = 0; c0 <= maxC; c0++) colW[c0] = 64 * 0.75;
    var hiddenCols = {};
    kids(kid(root, 'cols'), 'col').forEach(function (cc) {
      var mn = num(cc.getAttribute('min'), 1) - 1, mx = Math.min(maxC, num(cc.getAttribute('max'), 1) - 1), w = (num(cc.getAttribute('width'), 8.43) * 7 + 5) * 0.75;
      for (var k = mn; k <= mx; k++) { colW[k] = w; if (cc.getAttribute('hidden') === '1') hiddenCols[k] = true; }
    });
    var merges = {}, mergedSkip = {};
    kids(kid(root, 'mergeCells'), 'mergeCell').forEach(function (m) {
      var p = m.getAttribute('ref').split(':'); if (p.length < 2) return;
      var r1 = rowIndex(p[0]), c1 = colIndex(p[0]), r2 = rowIndex(p[1]), c2 = colIndex(p[1]);
      merges[r1 + ',' + c1] = { r2: r2, c2: c2 };
      for (var a = r1; a <= r2; a++) for (var b = c1; b <= c2; b++) if (a !== r1 || b !== c1) mergedSkip[a + ',' + b] = true;
    });
    var cols = []; for (var ci2 = 0; ci2 <= maxC; ci2++) if (!hiddenCols[ci2]) cols.push(ci2);
    var rowsList = []; for (var ri2 = 0; ri2 <= maxR; ri2++) if (!hiddenRows[ri2]) rowsList.push(ri2);
    if (rowsList.length > 20000) rowsList = rowsList.slice(0, 20000);

    // page geometry
    var totalW = cols.reduce(function (a, c) { return a + colW[c]; }, 0);
    var land = totalW > A4.w - 48;
    var PW = land ? A4.h : A4.w, PH = land ? A4.w : A4.h, M = 24, usableW = PW - 2 * M, headH = 18, usableH = PH - 2 * M - headH;
    var scale = Math.max(0.55, Math.min(1, usableW / totalW));
    // column chunks
    var chunks = [], cur = [], curW = 0;
    cols.forEach(function (c) {
      var w = colW[c] * scale;
      if (cur.length && curW + w > usableW) { chunks.push(cur); cur = []; curW = 0; }
      cur.push(c); curW += w;
    });
    if (cur.length) chunks.push(cur);

    var sink = PageSink(PW, PH), pageNo = 0;
    for (var ch = 0; ch < chunks.length; ch++) {
      var chCols = chunks[ch], chW = chCols.reduce(function (a, c) { return a + colW[c] * scale; }, 0);
      var idx = 0;
      while (idx < rowsList.length) {
        var ctx = sink.open(); pageNo++;
        ctx.fillStyle = '#8a7f7f'; ctx.font = '600 8px "Segoe UI", Arial, sans-serif'; ctx.textBaseline = 'alphabetic';
        ctx.fillText(title + (chunks.length > 1 ? '  (columns part ' + (ch + 1) + '/' + chunks.length + ')' : ''), M, M + 9);
        var y = M + headH, first = idx;
        // rows that fit
        var rowsHere = [], used = 0;
        while (idx < rowsList.length) {
          var rh = (rowH[rowsList[idx]] || 15) * scale;
          if (used + rh > usableH && rowsHere.length) break;
          rowsHere.push({ r: rowsList[idx], h: rh }); used += rh; idx++;
        }
        var xs = [], xx = M; chCols.forEach(function (c) { xs.push(xx); xx += colW[c] * scale; });
        // fills first, then grid, then text
        var yy = y;
        rowsHere.forEach(function (row) {
          chCols.forEach(function (c, k) {
            var cell = cells[row.r + ',' + c];
            if (cell && cell.xf.fill) { ctx.fillStyle = cell.xf.fill; ctx.fillRect(xs[k], yy, colW[c] * scale, row.h); }
          });
          yy += row.h;
        });
        ctx.strokeStyle = '#d4d0d0'; ctx.lineWidth = 0.5;
        ctx.beginPath(); yy = y; ctx.moveTo(M, y);
        ctx.lineTo(M + chW, y);
        rowsHere.forEach(function (row) { yy += row.h; ctx.moveTo(M, yy); ctx.lineTo(M + chW, yy); });
        xs.forEach(function (x) { ctx.moveTo(x, y); ctx.lineTo(x, yy); });
        ctx.moveTo(M + chW, y); ctx.lineTo(M + chW, yy);
        ctx.stroke();
        yy = y;
        rowsHere.forEach(function (row) {
          chCols.forEach(function (c, k) {
            var key = row.r + ',' + c, cell = cells[key];
            if (!cell || cell.text === '' || mergedSkip[key]) return;
            var mg = merges[key], cw2 = colW[c] * scale, chh = row.h;
            if (mg) { cw2 = 0; for (var q = c; q <= mg.c2; q++) if (!hiddenCols[q] && chCols.indexOf(q) >= 0) cw2 += colW[q] * scale; }
            var f = cell.xf.font || { size: 11 }, size = Math.max(4, (f.size || 11) * scale);
            ctx.save();
            ctx.beginPath(); ctx.rect(xs[k] + 0.5, yy + 0.5, cw2 - 1, chh - 1); ctx.clip();
            ctx.font = (f.italic ? 'italic ' : '') + (f.bold ? 'bold ' : '') + size + 'px ' + familyFor(f.name);
            ctx.fillStyle = f.color || '#000000';
            var h = cell.xf.h || (cell.num ? 'right' : 'left'), tx = String(cell.text).replace(/\s*\n\s*/g, ' ');
            var tw = ctx.measureText(tx).width, px = xs[k] + 2 * scale;
            if (h === 'center' || h === 'centerContinuous') px = xs[k] + (cw2 - tw) / 2; else if (h === 'right') px = xs[k] + cw2 - tw - 2 * scale;
            ctx.textBaseline = 'middle';
            ctx.fillText(tx, px, yy + chh / 2 + size * 0.05);
            ctx.restore();
          });
          yy += row.h;
        });
        await sink.close();
      }
    }
    return sink.pages;
  }

  /* ================================================================
     POWERPOINT (.pptx) — each slide becomes one page (same aspect ratio)
     ================================================================ */
  function clamp01(x) { return Math.max(0, Math.min(1, x)); }
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, h = 0, s = 0, d = mx - mn;
    if (d) { s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h /= 6; }
    return [h, s, l];
  }
  function hslToRgb(h, s, l) {
    function f(p, q, t) { if (t < 0) t += 1; if (t > 1) t -= 1; return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p; }
    if (!s) return [l * 255, l * 255, l * 255].map(Math.round);
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
    return [f(p, q, h + 1 / 3), f(p, q, h), f(p, q, h - 1 / 3)].map(function (v) { return Math.round(v * 255); });
  }
  var PRST_COLORS = { black: '#000000', white: '#ffffff', red: '#ff0000', green: '#008000', blue: '#0000ff', yellow: '#ffff00', gray: '#808080', grey: '#808080' };

  async function pptxPages(file, progress) {
    var zip = await openZip(file);
    var pres = parseXml(await zipText(zip, 'ppt/presentation.xml'));
    if (!pres) throw new Error('Could not read this PowerPoint file');
    var presRels = await readRels(zip, 'ppt/presentation.xml');
    var sz = kid(pres, 'sldSz'), SW = num(at(sz, 'cx'), 12192000) / 12700, SH = num(at(sz, 'cy'), 6858000) / 12700;
    var slideIds = kids(kid(pres, 'sldIdLst'), 'sldId').map(function (s) { return presRels[s.getAttribute('r:id')]; }).filter(Boolean);
    if (!slideIds.length) throw new Error('This presentation has no slides');

    /* theme */
    var theme = {};
    var themeRoot = null;
    for (var rid in presRels) if (/theme$/.test(presRels[rid].type)) { themeRoot = parseXml(await zipText(zip, presRels[rid].path)); break; }
    if (themeRoot) {
      var cs = descs(themeRoot, 'clrScheme')[0];
      kids(cs, '*').length; // no-op
      Array.prototype.forEach.call(cs ? cs.children : [], function (c) {
        var ch = c.firstElementChild; if (!ch) return;
        theme[c.localName] = ch.localName === 'sysClr' ? '#' + (ch.getAttribute('lastClr') || '000000') : '#' + ch.getAttribute('val');
      });
    }
    var master0 = null, clrMap = { bg1: 'lt1', tx1: 'dk1', bg2: 'lt2', tx2: 'dk2' };

    function colorFromClr(el) {
      if (!el) return null;
      var base = null, n = el.localName;
      if (n === 'srgbClr') base = '#' + el.getAttribute('val');
      else if (n === 'schemeClr') { var v = el.getAttribute('val'); base = theme[clrMap[v] || v] || (v === 'phClr' ? null : '#000000'); }
      else if (n === 'sysClr') base = '#' + (el.getAttribute('lastClr') || '000000');
      else if (n === 'prstClr') base = PRST_COLORS[el.getAttribute('val')] || '#000000';
      if (!base || !/^#[0-9a-f]{6}$/i.test(base)) return base;
      var r = parseInt(base.substr(1, 2), 16), g = parseInt(base.substr(3, 2), 16), b = parseInt(base.substr(5, 2), 16), alpha = 1;
      Array.prototype.forEach.call(el.children, function (m) {
        var val = num(m.getAttribute('val'), 0) / 100000;
        if (m.localName === 'lumMod' || m.localName === 'lumOff') {
          var hsl = rgbToHsl(r, g, b);
          hsl[2] = clamp01(m.localName === 'lumMod' ? hsl[2] * val : hsl[2] + val);
          var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]); r = rgb[0]; g = rgb[1]; b = rgb[2];
        } else if (m.localName === 'tint') { r = Math.round(r + (255 - r) * (1 - val)); g = Math.round(g + (255 - g) * (1 - val)); b = Math.round(b + (255 - b) * (1 - val)); }
        else if (m.localName === 'shade') { r = Math.round(r * val); g = Math.round(g * val); b = Math.round(b * val); }
        else if (m.localName === 'alpha') alpha = val;
      });
      return alpha < 1 ? 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')' : 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    function fillOf(spPr) {        // returns css color, 'none', or null (not specified)
      if (!spPr) return null;
      if (kid(spPr, 'noFill')) return 'none';
      var sf = kid(spPr, 'solidFill'); if (sf) return colorFromClr(sf.firstElementChild);
      var gf = kid(spPr, 'gradFill'); if (gf) { var gs = descs(gf, 'gs')[0]; return gs ? colorFromClr(gs.firstElementChild) : null; }
      return null;
    }

    /* part loaders with caches */
    var partCache = {};
    async function loadPart(path) {
      if (partCache[path]) return partCache[path];
      var root = parseXml(await zipText(zip, path)), rels = await readRels(zip, path);
      return (partCache[path] = { root: root, rels: rels, path: path });
    }
    var bmpCache = {};

    function relOfType(part, re) { for (var k in part.rels) if (re.test(part.rels[k].type)) return part.rels[k].path; return null; }

    var sink = PageSink(SW, SH);
    var pages = [];
    for (var si = 0; si < slideIds.length; si++) {
      var slide = await loadPart(slideIds[si].path);
      if (!slide.root) continue;
      var layout = await loadPart(relOfType(slide, /slideLayout$/) || '');
      var master = layout.root ? await loadPart(relOfType(layout, /slideMaster$/) || '') : null;
      if (master && master.root) { var cm = kid(master.root, 'clrMap'); if (cm) { clrMap = {}; for (var a = 0; a < cm.attributes.length; a++) clrMap[cm.attributes[a].name] = cm.attributes[a].value; } }
      var ctx = sink.open();

      /* background */
      var bgCol = '#ffffff';
      [slide, layout, master].some(function (pt) {
        if (!pt || !pt.root) return false;
        var bg = kid(kid(pt.root, 'cSld'), 'bg'); if (!bg) return false;
        var bp = kid(bg, 'bgPr'), c = bp ? fillOf(bp) : null;
        if (!c && kid(bg, 'bgRef')) c = colorFromClr(kid(bg, 'bgRef').firstElementChild);
        if (c && c !== 'none') { bgCol = c; return true; }
        return false;
      });
      ctx.fillStyle = bgCol; ctx.fillRect(0, 0, SW, SH);

      var ctxInfo = { zip: zip };
      /* decorative shapes from master / layout, then slide */
      var showMaster = !(layout.root && layout.root.getAttribute('showMasterSp') === '0'), showLayout = !(slide.root.getAttribute('showMasterSp') === '0');
      if (master && master.root && showMaster && showLayout) await drawTree(ctx, kid(kid(master.root, 'cSld'), 'spTree'), master, null, { skipPh: true });
      if (layout.root && showLayout) await drawTree(ctx, kid(kid(layout.root, 'cSld'), 'spTree'), layout, null, { skipPh: true });
      await drawTree(ctx, kid(kid(slide.root, 'cSld'), 'spTree'), slide, { layout: layout, master: master }, {});
      await sink.close();
      progress((si + 1) / slideIds.length);
    }
    return sink.pages;

    /* ---------- drawing ---------- */
    function xfrmOf(spPr) {
      var x = spPr && kid(spPr, 'xfrm'); if (!x) return null;
      var off = kid(x, 'off'), ext = kid(x, 'ext');
      if (!off || !ext) return null;
      return { x: num(at(off, 'x'), 0), y: num(at(off, 'y'), 0), w: num(at(ext, 'cx'), 0), h: num(at(ext, 'cy'), 0), rot: num(x.getAttribute('rot'), 0) / 60000, flipH: x.getAttribute('flipH') === '1', flipV: x.getAttribute('flipV') === '1' };
    }
    function phOf(sp) {
      var nv = kid(sp, 'nvSpPr') || kid(sp, 'nvPicPr') || kid(sp, 'nvGraphicFramePr');
      var ph = nv && kid(kid(nv, 'nvPr'), 'ph');
      return ph ? { type: ph.getAttribute('type') || (ph.getAttribute('idx') ? 'body' : 'body'), idx: ph.getAttribute('idx') } : null;
    }
    function findPh(part, ph) {
      if (!part || !part.root || !ph) return null;
      var tree = kid(kid(part.root, 'cSld'), 'spTree'), found = null;
      Array.prototype.forEach.call(tree ? tree.children : [], function (sp) {
        if (found || sp.localName !== 'sp') return;
        var p = phOf(sp); if (!p) return;
        var norm = function (t) { return t === 'ctrTitle' ? 'title' : t; };
        if ((ph.idx && p.idx === ph.idx) || (!ph.idx && norm(p.type) === norm(ph.type)) || (norm(p.type) === norm(ph.type) && norm(ph.type) !== 'body')) found = sp;
      });
      return found;
    }

    async function drawTree(ctx, tree, part, inh, opt, tf) {
      if (!tree) return;
      tf = tf || { sx: 1, sy: 1, dx: 0, dy: 0 };
      for (var c = tree.firstElementChild; c; c = c.nextElementSibling) {
        var n = c.localName;
        if (n === 'sp' || n === 'cxnSp') { if (opt.skipPh && phOf(c)) continue; await drawSp(ctx, c, part, inh, tf); }
        else if (n === 'pic') await drawPic(ctx, c, part, tf);
        else if (n === 'graphicFrame') await drawFrame(ctx, c, part, tf);
        else if (n === 'grpSp') {
          var gx = xfrmOfGroup(c);
          if (gx) {
            var sx = gx.chw ? gx.w / gx.chw : 1, sy = gx.chh ? gx.h / gx.chh : 1;
            var ntf = { sx: tf.sx * sx, sy: tf.sy * sy, dx: tf.dx + tf.sx * (gx.x - gx.chx * sx), dy: tf.dy + tf.sy * (gx.y - gx.chy * sy) };
            // x' = tf.dx + tf.sx * (gx.x + (x - chx) * sx)
            await drawTree(ctx, c, part, inh, opt, ntf);
          }
        }
      }
    }
    function xfrmOfGroup(g) {
      var x = kid(kid(g, 'grpSpPr'), 'xfrm'); if (!x) return null;
      var off = kid(x, 'off'), ext = kid(x, 'ext'), co = kid(x, 'chOff'), ce = kid(x, 'chExt');
      return { x: num(at(off, 'x'), 0), y: num(at(off, 'y'), 0), w: num(at(ext, 'cx'), 0), h: num(at(ext, 'cy'), 0), chx: num(at(co, 'x'), 0), chy: num(at(co, 'y'), 0), chw: num(at(ce, 'cx'), 0), chh: num(at(ce, 'cy'), 0) };
    }
    function boxPt(xf, tf) { return { x: (tf.dx + tf.sx * xf.x) / 12700, y: (tf.dy + tf.sy * xf.y) / 12700, w: xf.w * tf.sx / 12700, h: xf.h * tf.sy / 12700 }; }

    function withRot(ctx, b, rot, fn) {
      if (!rot) { fn(); return; }
      ctx.save(); ctx.translate(b.x + b.w / 2, b.y + b.h / 2); ctx.rotate(rot * Math.PI / 180); ctx.translate(-(b.x + b.w / 2), -(b.y + b.h / 2));
      fn(); ctx.restore();
    }
    function geomPath(ctx, prst, b) {
      var x = b.x, y = b.y, w = b.w, h = b.h;
      ctx.beginPath();
      if (prst === 'ellipse') ctx.ellipse(x + w / 2, y + h / 2, Math.abs(w / 2), Math.abs(h / 2), 0, 0, Math.PI * 2);
      else if (prst === 'roundRect' || prst === 'round2SameRect' || prst === 'snipRoundRect') {
        var r = Math.min(Math.abs(w), Math.abs(h)) * 0.16;
        ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
      } else if (prst === 'triangle') { ctx.moveTo(x + w / 2, y); ctx.lineTo(x + w, y + h); ctx.lineTo(x, y + h); ctx.closePath(); }
      else if (prst === 'diamond') { ctx.moveTo(x + w / 2, y); ctx.lineTo(x + w, y + h / 2); ctx.lineTo(x + w / 2, y + h); ctx.lineTo(x, y + h / 2); ctx.closePath(); }
      else if (prst === 'line' || prst === 'straightConnector1') { ctx.moveTo(x, y); ctx.lineTo(x + w, y + h); }
      else ctx.rect(x, y, w, h);
    }

    async function drawSp(ctx, sp, part, inh, tf) {
      var spPr = kid(sp, 'spPr'), ph = phOf(sp), xf = xfrmOf(spPr);
      var lPh = null, mPh = null;
      if (ph && inh) { lPh = findPh(inh.layout, ph); mPh = findPh(inh.master, ph); }
      if (!xf) xf = (lPh && xfrmOf(kid(lPh, 'spPr'))) || (mPh && xfrmOf(kid(mPh, 'spPr')));
      if (!xf) return;
      var b = boxPt(xf, tf), n = sp.localName;
      var prst = at(kid(spPr, 'prstGeom'), 'prst') || (n === 'cxnSp' ? 'line' : 'rect');
      var fill = fillOf(spPr), style = kid(sp, 'style');
      if (fill === null && style) { var fr = kid(style, 'fillRef'); if (fr && num(fr.getAttribute('idx'), 0) > 0) fill = colorFromClr(fr.firstElementChild); }
      if (fill === null && ph) {   // inherit fill from placeholder
        fill = (lPh && fillOf(kid(lPh, 'spPr'))) || (mPh && fillOf(kid(mPh, 'spPr'))) || null;
      }
      var ln = spPr && kid(spPr, 'ln'), stroke = null, lw = 0.75;
      if (ln) {
        if (kid(ln, 'noFill')) stroke = 'none';
        else { var lf = kid(ln, 'solidFill'); if (lf) stroke = colorFromClr(lf.firstElementChild); }
        if (ln.getAttribute('w')) lw = num(ln.getAttribute('w'), 9525) / 12700;
      }
      if (stroke === null && style) { var lr = kid(style, 'lnRef'); if (lr && num(lr.getAttribute('idx'), 0) > 0) stroke = colorFromClr(lr.firstElementChild); }
      if (n === 'cxnSp' && !stroke) stroke = '#000000';
      withRot(ctx, b, xf.rot, function () {
        if (prst !== 'line' && prst !== 'straightConnector1') {
          if (fill && fill !== 'none') { geomPath(ctx, prst, b); ctx.fillStyle = fill; ctx.fill(); }
        }
        if (stroke && stroke !== 'none') {
          geomPath(ctx, prst, xf.flipV && (prst === 'line' || prst === 'straightConnector1') ? { x: b.x, y: b.y + b.h, w: b.w, h: -b.h } : b);
          ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke();
        }
      });
      var tb = kid(sp, 'txBody');
      if (tb) await drawText(ctx, tb, b, xf.rot, { ph: ph, lPh: lPh, mPh: mPh, inh: inh, part: part, color: style && kid(kid(style, 'fontRef'), 'schemeClr') ? colorFromClr(kid(kid(style, 'fontRef'), 'schemeClr')) : null });
    }

    async function drawPic(ctx, pic, part, tf) {
      var xf = xfrmOf(kid(pic, 'spPr')); if (!xf) return;
      var blip = descs(pic, 'blip')[0]; if (!blip) return;
      var rel = part.rels[blip.getAttribute('r:embed')];
      var bmp = rel ? await zipBitmap(zip, rel.path, bmpCache) : null;
      if (!bmp) return;
      var b = boxPt(xf, tf), sr = descs(pic, 'srcRect')[0];
      var sx = 0, sy = 0, sw = bmp.width, sh = bmp.height;
      if (sr) { var l = num(sr.getAttribute('l'), 0) / 100000, t = num(sr.getAttribute('t'), 0) / 100000, r = num(sr.getAttribute('r'), 0) / 100000, bt = num(sr.getAttribute('b'), 0) / 100000; sx = bmp.width * l; sy = bmp.height * t; sw = bmp.width * (1 - l - r); sh = bmp.height * (1 - t - bt); }
      withRot(ctx, b, xf.rot, function () { try { ctx.drawImage(bmp, sx, sy, sw, sh, b.x, b.y, b.w, b.h); } catch (e) {} });
    }

    async function drawFrame(ctx, gf, part, tf) {
      var x = kid(gf, 'xfrm'), off = kid(x, 'off'), ext = kid(x, 'ext'), tbl = descs(gf, 'tbl')[0];
      if (!x || !tbl) return;
      var xf = { x: num(at(off, 'x'), 0), y: num(at(off, 'y'), 0), w: num(at(ext, 'cx'), 0), h: num(at(ext, 'cy'), 0) };
      var b = boxPt(xf, tf), gw = kids(kid(tbl, 'tblGrid'), 'gridCol').map(function (g) { return num(g.getAttribute('w'), 0) * tf.sx / 12700; });
      var firstRow = at(kid(tbl, 'tblPr'), 'firstRow') === '1', band = at(kid(tbl, 'tblPr'), 'bandRow') === '1';
      var yy = b.y, rows = kids(tbl, 'tr');
      for (var ri = 0; ri < rows.length; ri++) {
        var rh = num(rows[ri].getAttribute('h'), 370840) * tf.sy / 12700, xx = b.x, cells = kids(rows[ri], 'tc'), col = 0;
        for (var ci = 0; ci < cells.length; ci++) {
          var tc = cells[ci], span = num(tc.getAttribute('gridSpan'), 1), w = 0;
          for (var k = 0; k < span; k++) w += gw[col + k] || 0;
          var tcPr = kid(tc, 'tcPr'), f = fillOf(tcPr), isHead = firstRow && ri === 0;
          if (!f || f === 'none') f = f === 'none' ? null : (isHead ? colorFromClr(parseXml('<a:schemeClr xmlns:a="x" val="accent1"/>')) : (band && ri % 2 === 1 ? 'rgba(180,190,210,0.25)' : null));
          if (f) { ctx.fillStyle = f; ctx.fillRect(xx, yy, w, rh); }
          ctx.strokeStyle = '#a8a8a8'; ctx.lineWidth = 0.5; ctx.strokeRect(xx, yy, w, rh);
          var tb = kid(tc, 'txBody');
          if (tb) await drawText(ctx, tb, { x: xx, y: yy, w: w, h: rh }, 0, { part: part, inh: null, cell: true, headBold: isHead, forceColor: isHead && !fillOf(tcPr) ? '#ffffff' : null });
          xx += w; col += span;
        }
        yy += rh;
      }
    }

    function lvlStyle(listStyleEl, lvl) { return listStyleEl ? kid(listStyleEl, 'lvl' + (lvl + 1) + 'pPr') : null; }
    function pProps(el) {
      var o = {};
      if (!el) return o;
      ['marL', 'indent'].forEach(function (a) { if (el.hasAttribute(a)) o[a] = num(el.getAttribute(a), 0) / 12700; });
      if (el.hasAttribute('algn')) { var v = el.getAttribute('algn'); o.algn = v === 'ctr' ? 'center' : v === 'r' ? 'right' : v === 'just' ? 'justify' : 'left'; }
      if (kid(el, 'buNone')) { o.buNone = true; o.buChar = null; }
      var bc = kid(el, 'buChar'); if (bc) { o.buChar = bc.getAttribute('char'); o.buNone = false; }
      if (kid(el, 'buAutoNum')) { o.buAuto = true; o.buNone = false; }
      var ls = kid(el, 'lnSpc'); if (ls && kid(ls, 'spcPct')) o.lnSpc = num(at(kid(ls, 'spcPct'), 'val'), 100000) / 100000;
      var sb = kid(el, 'spcBef'); if (sb) o.spcBef = kid(sb, 'spcPts') ? num(at(kid(sb, 'spcPts'), 'val'), 0) / 100 : (kid(sb, 'spcPct') ? -num(at(kid(sb, 'spcPct'), 'val'), 0) / 100000 : 0);
      var sa = kid(el, 'spcAft'); if (sa) o.spcAft = kid(sa, 'spcPts') ? num(at(kid(sa, 'spcPts'), 'val'), 0) / 100 : 0;
      var d = kid(el, 'defRPr'); if (d) o.def = rProps(d);
      return o;
    }
    function rProps(el) {
      var o = {};
      if (!el) return o;
      if (el.hasAttribute('sz')) o.size = num(el.getAttribute('sz'), 1800) / 100;
      if (el.hasAttribute('b')) o.bold = el.getAttribute('b') === '1';
      if (el.hasAttribute('i')) o.italic = el.getAttribute('i') === '1';
      if (el.hasAttribute('u')) o.ul = el.getAttribute('u') !== 'none';
      if (el.hasAttribute('strike')) o.st = el.getAttribute('strike') !== 'noStrike';
      var sf = kid(el, 'solidFill'); if (sf) o.color = colorFromClr(sf.firstElementChild);
      var lt = kid(el, 'latin'); if (lt && lt.getAttribute('typeface') && lt.getAttribute('typeface')[0] !== '+') o.family = lt.getAttribute('typeface');
      return o;
    }

    async function drawText(ctx, tb, b, rot, o) {
      var bp = kid(tb, 'bodyPr'), ph = o.ph;
      var lIns = num(at(bp, 'lIns'), 91440) / 12700, tIns = num(at(bp, 'tIns'), 45720) / 12700, rIns = num(at(bp, 'rIns'), 91440) / 12700, bIns = num(at(bp, 'bIns'), 45720) / 12700;
      if (o.cell) { lIns = rIns = 5; tIns = bIns = 3; }
      var anchor = at(bp, 'anchor');
      if (!anchor && o.lPh) anchor = at(kid(o.lPh, 'txBody') && kid(kid(o.lPh, 'txBody'), 'bodyPr'), 'anchor');
      if (!anchor && o.mPh) anchor = at(kid(o.mPh, 'txBody') && kid(kid(o.mPh, 'txBody'), 'bodyPr'), 'anchor');
      anchor = anchor || (ph && /title|ctrTitle/.test(ph.type) ? 'ctr' : 't');
      var fs = 1, na = kid(bp, 'normAutofit'); if (na && na.getAttribute('fontScale')) fs = num(na.getAttribute('fontScale'), 100000) / 100000;
      var wrapNone = at(bp, 'wrap') === 'none';
      var availW = Math.max(10, b.w - lIns - rIns);

      /* list-style chain (low → high priority) */
      var isTitle = ph && /title|ctrTitle/i.test(ph.type);
      var master = o.inh && o.inh.master && o.inh.master.root;
      var tx = master ? kid(master, 'txStyles') : null;
      var chain = [];
      var base = tx ? kid(tx, isTitle ? 'titleStyle' : (ph ? 'bodyStyle' : 'otherStyle')) : null;
      chain.push(base);
      if (o.mPh) chain.push(kid(kid(o.mPh, 'txBody'), 'lstStyle'));
      if (o.lPh) chain.push(kid(kid(o.lPh, 'txBody'), 'lstStyle'));
      chain.push(kid(tb, 'lstStyle'));
      var paras = kids(tb, 'p'), blocks = [], totalH = 0, counters = {};
      for (var pi = 0; pi < paras.length; pi++) {
        var p = paras[pi], ppr = kid(p, 'pPr'), lvl = ppr ? num(ppr.getAttribute('lvl'), 0) : 0;
        var props = {}, defR = {};
        chain.forEach(function (ls) { var lv = pProps(lvlStyle(ls, lvl)); if (lv.def) defR = Object.assign(defR, lv.def); Object.assign(props, lv); });
        var direct = pProps(ppr); if (direct.def) { defR = Object.assign(defR, direct.def); } Object.assign(props, direct);
        var runs = [], endSize = null;
        var rBase = Object.assign({ size: (ph || o.cell) ? (isTitle ? 32 : 18) : 18, bold: false, italic: false, ul: false, st: false, color: o.forceColor || o.color || '#000000', family: '' }, defR);
        if (o.forceColor) rBase.color = o.forceColor;
        if (o.headBold) rBase.bold = true;
        if (!o.forceColor && !defR.color && !o.color) rBase.color = theme[clrMap.tx1] || '#000000';
        for (var rc = p.firstElementChild; rc; rc = rc.nextElementSibling) {
          if (rc.localName === 'r' || rc.localName === 'fld') {
            var rp = Object.assign({}, rBase, rProps(kid(rc, 'rPr')));
            var tEl = kid(rc, 't'); if (!tEl) continue;
            runs.push({ t: 'text', text: tEl.textContent, f: { family: familyFor(rp.family), size: Math.max(2, rp.size * fs), bold: !!rp.bold, italic: !!rp.italic }, color: o.forceColor || rp.color, ul: !!rp.ul, st: !!rp.st });
          } else if (rc.localName === 'br') runs.push({ t: 'br' });
          else if (rc.localName === 'endParaRPr') endSize = rProps(rc).size;
        }
        var mar = props.marL || 0, ind = props.indent || 0, label = null;
        var hasBullet = !props.buNone && (props.buChar || props.buAuto);
        if (hasBullet) {
          if (props.buAuto) { counters[lvl] = (counters[lvl] || 0) + 1; label = counters[lvl] + '.'; }
          else label = (props.buChar === '§' || props.buChar === '•' || props.buChar === '' || props.buChar === 'Ø') ? '•' : props.buChar;
          if (!ind) ind = -18; if (mar < -ind) mar = -ind;
        } else counters[lvl] = 0;
        var lay = layoutRuns(runs, { width: wrapNone ? 5000 : availW, align: props.algn || (isTitle && ph && /ctrTitle/.test(ph.type) ? 'center' : 'left'), indentLeft: mar, indentFirst: label ? 0 : ind, lineMult: props.lnSpc || 1, defSize: (endSize || rBase.size) * fs, keepLeadSpace: true });
        if (label) {
          var f0 = (runs.find(function (r) { return r.t === 'text'; }) || { f: { family: familyFor(rBase.family), size: rBase.size * fs, bold: false, italic: false }, color: rBase.color });
          lay.lines[0].items.unshift({ x: Math.max(0, mar + ind), w: 0, text: label, f: f0.f, color: f0.color });
        }
        var before = props.spcBef ? (props.spcBef > 0 ? props.spcBef : -props.spcBef * (rBase.size * fs)) : 0, after = props.spcAft || 0;
        blocks.push({ lay: lay, before: before, after: after });
        totalH += before + lay.height + after;
      }
      var inner = b.h - tIns - bIns;
      var y0 = b.y + tIns;
      if (anchor === 'ctr') y0 = b.y + tIns + Math.max(0, (inner - totalH) / 2);
      else if (anchor === 'b') y0 = b.y + b.h - bIns - totalH;
      withRot(ctx, b, rot, function () {
        var yy = y0;
        ctx.save();
        if (!o.cell) { /* allow overflow like PowerPoint */ } else { ctx.beginPath(); ctx.rect(b.x, b.y, b.w, b.h); ctx.clip(); }
        blocks.forEach(function (bl) {
          yy += bl.before;
          bl.lay.lines.forEach(function (ln) { drawLine(ctx, ln, b.x + lIns, yy); yy += ln.h; });
          yy += bl.after;
        });
        ctx.restore();
      });
    }
  }

  /* ================================================================
     CONVERT + RESULTS + WIRING
     ================================================================ */
  function filePages(item, progress) {
    if (item.kind === 'image') return imagePages(item);
    if (item.kind === 'docx') return docxPages(item.file, progress);
    if (item.kind === 'xlsx') return xlsxPages(item.file, progress);
    return pptxPages(item.file, progress);
  }
  function readOpts() {
    return { mode: $('conv-opt-mode').value, size: $('conv-opt-size').value, orient: $('conv-opt-orient').value, margin: parseFloat($('conv-opt-margin').value) || 0 };
  }
  function uniqueName(name, used) {
    var base = name.replace(/\.pdf$/i, ''), n = name, i = 2;
    while (used[n.toLowerCase()]) n = base + '-' + (i++) + '.pdf';
    used[n.toLowerCase()] = true;
    return n;
  }

  async function convert() {
    if (busy || !files.length) return;
    busy = true; renderList(); clearResults();
    var opts = readOpts(), outputs = [], used = {}, queue = files.slice();
    try {
      await needPdfLib();
      var allPages = [], failed = [];
      for (var i = 0; i < queue.length; i++) {
        var it = queue[i];
        setProgress(i / queue.length, 'Reading ' + it.file.name + ' (' + (i + 1) + '/' + queue.length + ')');
        await new Promise(function (r) { setTimeout(r, 20); });   // let the UI repaint
        try {
          var pages = await filePages(it, function (fr) { setProgress((i + fr) / queue.length, 'Reading ' + it.file.name + ' (' + (i + 1) + '/' + queue.length + ')'); });
          if (opts.mode === 'merge') allPages = allPages.concat(pages);
          else {
            setProgress((i + 0.95) / queue.length, 'Creating PDF for ' + it.file.name);
            var bytes = await buildPdf(pages, opts);
            outputs.push({ name: uniqueName(baseName(it.file.name) + '.pdf', used), bytes: bytes, pages: pages.length });
          }
        } catch (e) { failed.push({ name: it.file.name, error: e && e.message ? e.message : 'Conversion failed' }); }
      }
      if (opts.mode === 'merge' && allPages.length) {
        setProgress(0.97, 'Creating PDF…');
        var merged = await buildPdf(allPages, opts);
        outputs.push({ name: uniqueName(queue.length === 1 ? baseName(queue[0].file.name) + '.pdf' : 'converted.pdf', used), bytes: merged, pages: allPages.length });
      }
      showResults(outputs, failed);
      setProgress(1, outputs.length ? 'Done' : 'Nothing converted');
    } catch (e) {
      showResults([], [{ name: 'Conversion', error: e && e.message ? e.message : 'Something went wrong' }]);
    }
    busy = false; renderList();
  }

  function showResults(outputs, failed) {
    var box = $('conv-results'); box.innerHTML = '';
    results = outputs.map(function (o) {
      var blob = new Blob([o.bytes], { type: 'application/pdf' });
      return { name: o.name, blob: blob, url: URL.createObjectURL(blob), pages: o.pages };
    });
    results.forEach(function (r) {
      var row = document.createElement('div'); row.className = 'conv-result';
      var info = document.createElement('div'); info.className = 'conv-result-info';
      var nm = document.createElement('div'); nm.className = 'conv-result-name'; nm.textContent = r.name;
      var sub = document.createElement('div'); sub.className = 'conv-result-sub'; sub.textContent = r.pages + (r.pages === 1 ? ' page' : ' pages') + ' · ' + human(r.blob.size);
      info.appendChild(nm); info.appendChild(sub);
      var b = document.createElement('button'); b.type = 'button'; b.className = 'pill-btn conv-save-btn'; b.textContent = 'Save PDF';
      b.onclick = function () { download(r.url, r.name); };
      row.appendChild(info); row.appendChild(b); box.appendChild(row);
    });
    failed.forEach(function (f) {
      var row = document.createElement('div'); row.className = 'conv-result conv-result-fail';
      var info = document.createElement('div'); info.className = 'conv-result-info';
      var nm = document.createElement('div'); nm.className = 'conv-result-name'; nm.textContent = f.name;
      var sub = document.createElement('div'); sub.className = 'conv-result-sub'; sub.textContent = f.error;
      info.appendChild(nm); info.appendChild(sub); row.appendChild(info); box.appendChild(row);
    });
    $('conv-results-panel').style.display = (results.length || failed.length) ? '' : 'none';
    $('conv-save-all-btn').style.display = results.length > 1 ? '' : 'none';
  }

  function download(url, name) {
    var a = document.createElement('a');
    a.href = url; a.download = name; a.style.display = 'none';
    document.body.appendChild(a); a.click();
    setTimeout(function () { document.body.removeChild(a); }, 500);
  }

  async function saveAllZip() {
    if (!results.length) return;
    await needZip();
    var z = new JSZip();
    results.forEach(function (r) { z.file(r.name, r.blob); });
    var blob = await z.generateAsync({ type: 'blob' }), url = URL.createObjectURL(blob);
    download(url, 'pdfs.zip');
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  window.openConverter = function () {
    showView('converter-view');
  };

  function init() {
    var drop = $('conv-drop'), input = $('conv-file-input');
    if (!drop) return;
    drop.onclick = function () { if (!busy) input.click(); };
    drop.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (!busy) input.click(); } };
    input.onchange = function () { if (input.files && input.files.length) addFiles(input.files); input.value = ''; };
    ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('dragover'); }); });
    ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('dragover'); }); });
    drop.addEventListener('drop', function (e) { if (!busy && e.dataTransfer && e.dataTransfer.files.length) addFiles(e.dataTransfer.files); });
    // dropping anywhere on the left column also works
    var left = document.querySelector('.conv-left');
    if (left) {
      left.addEventListener('dragover', function (e) { e.preventDefault(); });
      left.addEventListener('drop', function (e) { e.preventDefault(); if (!busy && e.dataTransfer && e.dataTransfer.files.length) addFiles(e.dataTransfer.files); });
    }
    $('conv-clear-btn').onclick = clearAll;
    $('conv-convert-btn').onclick = convert;
    $('conv-save-all-btn').onclick = saveAllZip;
    $('conv-opt-size').onchange = updateOptionRows;
    renderList();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
