/**
 * yearbudget.js — Money › the "ᯓ★" button: a yearly budget. Each row is a thing and what it costs a
 * month; the year column is that ×12, worked out as you type. Saved in app_settings (functions/api.js →
 * getExpenseYearBudget / saveExpenseYearBudget); no new table.
 */
(function () {
  'use strict';
  var items = [], loaded = false;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var money = function (n) { return formatThousands(Math.round(n || 0)) + 'đ'; };
  var digits = function (v) { return Number(String(v || '').replace(/\D/g, '')) || 0; };

  function row(it) {
    return '<div class="yb-row" data-id="' + esc(it.id) + '">' +
      '<input type="text" class="yb-name" maxlength="120" placeholder="e.g. Rent, Phone, Netflix" value="' + esc(it.name) + '">' +
      '<input type="text" class="yb-month" inputmode="numeric" placeholder="0" value="' + (it.monthly ? formatThousands(it.monthly) : '') + '">' +
      '<span class="yb-year">' + money(it.monthly * 12) + '</span>' +
      '<button type="button" class="yb-del" aria-label="Remove">✕</button></div>';
  }
  function render() {
    $('yb-rows').innerHTML = (items.length ? items : [{ id: 'n' + Date.now().toString(36), name: '', monthly: 0 }]).map(row).join('');
    totals();
  }
  // read the table back (names + monthly amounts) and update the year column and the totals
  function read() {
    items = Array.prototype.map.call(document.querySelectorAll('#yb-rows .yb-row'), function (r) {
      return { id: r.dataset.id, name: r.querySelector('.yb-name').value.trim(), monthly: digits(r.querySelector('.yb-month').value) };
    });
  }
  function totals() {
    read();
    var m = items.reduce(function (a, it) { return a + it.monthly; }, 0);
    $('yb-tm').textContent = money(m); $('yb-ty').textContent = money(m * 12);
  }
  function open() {
    $('yb-modal').classList.add('active');
    if (loaded) { render(); return; }
    $('yb-rows').innerHTML = '<p class="yb-note">Opening…</p>';
    studyCall('getExpenseYearBudget').then(function (d) { items = d.items || []; loaded = true; render(); })
      .catch(function (e) { $('yb-rows').innerHTML = '<p class="yb-note">' + esc(e.message) + '</p>'; });
  }

  // the button sits at the top right, on the Money page only
  function follow() {
    var orig = window.showView; if (typeof orig !== 'function' || orig.yb) return;
    window.showView = function (id) { var r = orig.apply(this, arguments); $('yb-open').hidden = id !== 'expense-view'; return r; };
    window.showView.yb = true;
  }
  document.addEventListener('DOMContentLoaded', function () {
    if (!$('yb-open')) return;
    follow();
    var ev = $('expense-view'); if (ev && ev.style.display === 'block') $('yb-open').hidden = false;
    $('yb-open').onclick = open;
    $('yb-close').onclick = function () { $('yb-modal').classList.remove('active'); };
    $('yb-add').onclick = function () {
      $('yb-rows').insertAdjacentHTML('beforeend', row({ id: 'n' + Date.now().toString(36), name: '', monthly: 0 }));
      var ins = document.querySelectorAll('#yb-rows .yb-name'); ins[ins.length - 1].focus();
    };
    $('yb-rows').addEventListener('input', function (e) {
      var r = e.target.closest('.yb-row'); if (!r) return;
      if (e.target.classList.contains('yb-month')) {
        var n = digits(e.target.value); e.target.value = n ? formatThousands(n) : '';
        r.querySelector('.yb-year').textContent = money(n * 12);
      }
      totals();
    });
    $('yb-rows').addEventListener('click', function (e) {
      var d = e.target.closest('.yb-del'); if (!d) return;
      d.closest('.yb-row').remove();
      if (!document.querySelector('#yb-rows .yb-row')) render(); else totals();
    });
    $('yb-save').onclick = function () {
      read();
      var btn = this; btn.disabled = true;
      studyCall('saveExpenseYearBudget', items).then(function (d) { items = d.items || []; render(); toast('Saved ✿'); $('yb-modal').classList.remove('active'); })
        .catch(function (e) { toast(e.message); }).then(function () { btn.disabled = false; });
    };
  });
})();
