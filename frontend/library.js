/**
 * library.js — Town Hall › Search files. The documents you handed over (a `namuwu-library/1` file,
 * see docs/library-format.md) are imported once; searching them is a plain database search on the
 * server (functions/api.js → searchLibrary): no AI, no cost. Tap a result to read that part in full.
 */
(function () {
  'use strict';
  var KINDS = [['', 'All'], ['law', 'Laws'], ['study', 'Study'], ['note', 'Notes'], ['other', 'Other']];
  var st = { kind: '', docs: [], loaded: false, last: null };
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  // the same "no accents, lower case, one character for one character" as the server, to mark the matches
  var plainChar = function (c) { var n = c.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase(); return n.length === 1 ? n : (n[0] || ' '); };
  function mark(text, terms) {
    var chars = Array.from(String(text || '')), plain = chars.map(plainChar).join(''), on = new Array(chars.length).fill(false);
    (terms || []).forEach(function (t) { if (!t) return; var i = plain.indexOf(t); while (i >= 0) { for (var k = i; k < i + t.length; k++) on[k] = true; i = plain.indexOf(t, i + t.length); } });
    var out = '', open = false;
    chars.forEach(function (c, i) { if (on[i] && !open) { out += '<mark>'; open = true; } if (!on[i] && open) { out += '</mark>'; open = false; } out += esc(c); });
    return out + (open ? '</mark>' : '');
  }
  function call(name) { return studyCall.apply(null, arguments); }
  function kindName(k) { for (var i = 0; i < KINDS.length; i++) if (KINDS[i][0] === k) return KINDS[i][1]; return 'Other'; }

  // the Town Hall opened: the library is right there (the documents load the first time)
  window.libraryShow = function () { if (!st.loaded) loadDocs(); };
  function loadDocs() {
    $('lib-docs').innerHTML = '<p class="lib-note">Opening the library…</p>';
    call('getLibrary').then(function (d) { st.docs = d.docs || []; st.loaded = true; renderDocs(); })
      .catch(function (e) { $('lib-docs').innerHTML = '<p class="lib-note">' + esc(e.message) + '</p>'; });
  }
  function renderKinds() {
    $('lib-kinds').innerHTML = KINDS.map(function (k) { return '<button type="button" class="hs-chip' + (st.kind === k[0] ? ' on' : '') + '" data-lk="' + k[0] + '">' + k[1] + '</button>'; }).join('');
  }
  function renderDocs() {
    $('lib-count').textContent = st.docs.length ? st.docs.length + ' document' + (st.docs.length > 1 ? 's' : '') : '';
    $('lib-docs').innerHTML = st.docs.length ? st.docs.map(function (d) {
      return '<div class="lib-doc-row"><button type="button" class="lib-open" data-ld="' + d.id + '"><b>' + esc(d.title) + '</b><small>' + kindName(d.kind) + ' · ' + d.sections + ' parts' + (d.meta && d.meta.number ? ' · ' + esc(d.meta.number) : '') + '</small></button>' +
        '<button type="button" class="lib-del" data-ldel="' + d.id + '" aria-label="Remove">✕</button></div>';
    }).join('') : '<p class="lib-note">Nothing here yet. Send the documents to Claude in the chat, get back a <code>namuwu-library/1</code> file, then tap <b>Import file</b>.</p>';
  }
  function search() {
    var q = $('lib-q').value.trim(); if (!q) return;
    $('lib-results').innerHTML = '<p class="lib-note">Searching…</p>';
    call('searchLibrary', q, st.kind).then(function (d) {
      st.last = d;
      var rs = d.results || [];
      $('lib-results').innerHTML = rs.length ? rs.map(function (r, i) {
        return '<button type="button" class="lib-hit" data-lh="' + i + '"><span class="lib-hit-doc">' + esc(r.title) + (r.heading ? ' · <b>' + mark(r.heading, d.terms) + '</b>' : '') + '</span>' +
          '<span class="lib-hit-text">' + mark(r.snippet, d.terms) + '</span></button>';
      }).join('') : '<p class="lib-note">Nothing found for “' + esc(q) + '”. Try fewer or other words.</p>';
    }).catch(function (e) { $('lib-results').innerHTML = '<p class="lib-note">' + esc(e.message) + '</p>'; });
  }
  // read a whole document, scrolled to one part (with the search words marked)
  function openDoc(id, idx, terms) {
    $('lib-doc-title').textContent = '…'; $('lib-doc-body').innerHTML = '<p class="lib-note">Opening…</p>';
    $('lib-doc-modal').classList.add('active');
    call('getLibraryDoc', id).then(function (d) {
      $('lib-doc-title').textContent = d.title;
      $('lib-doc-body').innerHTML = d.sections.map(function (s) {
        return '<section class="lib-sec' + (s.idx === idx ? ' here' : '') + '" data-i="' + s.idx + '">' + (s.heading ? '<h4>' + mark(s.heading, terms) + '</h4>' : '') +
          '<p>' + mark(s.body, terms).replace(/\n/g, '<br>') + '</p></section>';
      }).join('');
      var here = $('lib-doc-body').querySelector('.lib-sec.here'); if (here) here.scrollIntoView({ block: 'start' });
    }).catch(function (e) { $('lib-doc-body').innerHTML = '<p class="lib-note">' + esc(e.message) + '</p>'; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!$('lib-pane')) return;
    renderKinds();
    $('lib-form').onsubmit = function (e) { e.preventDefault(); search(); };
    $('lib-kinds').onclick = function (e) { var b = e.target.closest('[data-lk]'); if (!b) return; st.kind = b.dataset.lk; renderKinds(); if ($('lib-q').value.trim()) search(); };
    $('lib-results').onclick = function (e) {
      var b = e.target.closest('[data-lh]'); if (!b || !st.last) return;
      var r = st.last.results[Number(b.dataset.lh)]; openDoc(r.docId, r.idx, st.last.terms);
    };
    $('lib-docs').onclick = function (e) {
      var o = e.target.closest('[data-ld]'), d = e.target.closest('[data-ldel]');
      if (o) openDoc(Number(o.dataset.ld), -1, []);
      if (d) {
        var doc = st.docs.filter(function (x) { return x.id === Number(d.dataset.ldel); })[0];
        if (!doc || !confirm('Remove “' + doc.title + '” from the library?')) return;
        call('deleteLibraryDoc', doc.id).then(function (r) { st.docs = r.docs || []; renderDocs(); }).catch(function (er) { toast(er.message); });
      }
    };
    $('lib-import').onclick = function () { $('lib-file').click(); };
    $('lib-file').onchange = function () {
      var f = this.files[0]; this.value = ''; if (!f) return;
      f.text().then(function (t) {
        var j; try { j = JSON.parse(t); } catch (er) { throw new Error('That file is not valid JSON'); }
        toast('Importing ' + f.name + '…');
        return call('importLibrary', j);
      }).then(function (r) {
        st.docs = r.docs || []; renderDocs();
        toast('Added ' + r.added + ' document' + (r.added === 1 ? '' : 's') + ' (' + r.sections + ' parts)' + (r.laws ? ' · ' + r.laws + ' on the Law list' : ''));
      }).catch(function (er) { toast(er.message); });
    };
    $('lib-doc-close').onclick = function () { $('lib-doc-modal').classList.remove('active'); };
  });
})();
