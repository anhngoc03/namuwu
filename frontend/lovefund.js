/**
 * lovefund.js — Love › Fund. The two of them set a monthly amount (it stays the same for the months
 * after, until changed), write down what they spend (just the amount), and the page spreads what's
 * left evenly over the days left: a day under the mark leaves more for the days after it, a day over
 * leaves less. Last month's left-over / overspend is carried in. Weeks run Monday → Sunday.
 * Server: functions/api.js (getLoveFund, saveLoveFundLevel, add/update/deleteLoveFundSpend).
 */
(function () {
  'use strict';
  var st = { period: null, data: null, sel: null, busy: false };
  var $ = function (id) { return document.getElementById(id); };
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var money = function (n) { var v = Math.round(n || 0); return (v < 0 ? '−' : '') + formatThousands(Math.abs(v)) + 'đ'; };
  var short = function (n) { var v = Math.round((n || 0) / 1000); return (v < 0 ? '−' : '') + formatThousands(Math.abs(v)) + 'k'; };
  var digits = function (v) { return Number(String(v || '').replace(/\D/g, '')) || 0; };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  function call(name) { return lovePromise.apply(null, arguments); }
  function shift(p, d) { var y = Number(p.slice(0, 4)), m = Number(p.slice(5, 7)) + d; while (m > 12) { m -= 12; y++; } while (m < 1) { m += 12; y--; } return y + '-' + pad(m); }

  // the plan for the month: what each day may spend, given what was spent on the days before it
  function plan() {
    var d = st.data, p = d.period, y = Number(p.slice(0, 4)), m = Number(p.slice(5, 7)), n = new Date(y, m, 0).getDate();
    var spent = {}; d.entries.forEach(function (e) { var k = Number(e.day.slice(8, 10)); spent[k] = (spent[k] || 0) + e.amount; });
    // days up to today: what's left ÷ the days left, so a day under/over moves the days after it.
    // days after today: all the same — what's left after today (today counted at its mark, or more if
    // already over) shared evenly. A month still to come is the fund ÷ its days.
    var tp = d.today.slice(0, 7), tk = p < tp ? n : p > tp ? 0 : Number(d.today.slice(8, 10));
    var pool = d.level + d.carry, before = 0, days = [], even = null, total = 0;
    for (var k = 1; k <= n; k++) {
      var s = spent[k] || 0, allow;
      if (k <= tk) allow = (pool - before) / (n - k + 1);
      else { if (even == null) even = (pool - before) / (n - k + 1); allow = even; }
      if (k === tk && k < n) before += Math.max(0, allow - s); // today's mark is kept for today
      days.push({ k: k, date: p + '-' + pad(k), allow: allow, spent: s, dow: (new Date(y, m - 1, k).getDay() + 6) % 7 });
      before += s; total += s;
    }
    return { n: n, days: days, pool: pool, spentAll: total };
  }

  function render() {
    var d = st.data; if (!d) return;
    var p = d.period, P = plan(), today = d.today;
    $('lf-month').textContent = MONTHS[Number(p.slice(5, 7)) - 1] + ' ' + p.slice(0, 4);
    $('lf-level').innerHTML = '<span>Fund this month <b>' + money(d.level) + '</b>' + (d.carry ? ' <em class="' + (d.carry < 0 ? 'neg' : 'pos') + '">' + (d.carry > 0 ? '+ ' : '− ') + money(Math.abs(d.carry)) + ' from before</em>' : '') + '</span>' +
      '<button type="button" class="lf-set" id="lf-set">' + (d.level ? 'Change' : 'Set the fund') + '</button>' +
      '<form class="lf-setform" id="lf-setform" hidden><input type="text" inputmode="numeric" id="lf-setval" placeholder="e.g. 6.000.000" value="' + (d.level ? formatThousands(d.level) : '') + '"><button class="pill-btn" type="submit">Save</button><small>from this month on</small></form>';
    if (!st.sel || st.sel.slice(0, 7) !== p) st.sel = today.slice(0, 7) === p ? today : p + '-01';
    var sel = P.days.filter(function (x) { return x.date === st.sel; })[0] || P.days[0];
    // this week (Mon–Sun, the days of it in this month) and this month
    var wk = P.days.filter(function (x) { return x.k >= sel.k - sel.dow && x.k <= sel.k - sel.dow + 6; });
    var wAllow = wk.reduce(function (a, x) { return a + x.allow; }, 0), wSpent = wk.reduce(function (a, x) { return a + x.spent; }, 0);
    var sum = function (label, allow, spent) {
      var left = allow - spent;
      return '<div class="lf-sum"><small>' + label + '</small><b>' + money(allow) + '</b><span>spent ' + money(spent) + '</span><span class="' + (left < 0 ? 'neg' : 'pos') + '">' + (left < 0 ? 'over ' : 'left ') + money(Math.abs(left)) + '</span></div>';
    };
    $('lf-sums').innerHTML = sum('This week', wAllow, wSpent) + sum('This month', P.pool, P.spentAll);
    // the calendar: Mon–Sun, and at the end of each row what that week may spend in all
    var html = '', row = [];
    var weekCell = function (ws) {
      var a = ws.reduce(function (t, x) { return t + x.allow; }, 0), sp = ws.reduce(function (t, x) { return t + x.spent; }, 0);
      return '<span class="lf-cell lf-wk' + (sp > a + 0.5 ? ' over' : '') + '"><b>' + short(a) + '</b>' + (sp ? '<i>' + short(sp) + '</i>' : '') + '</span>';
    };
    for (var i = 0; i < P.days[0].dow; i++) html += '<span class="lf-cell empty"></span>';
    P.days.forEach(function (x) {
      var cls = 'lf-cell' + (x.date === st.sel ? ' sel' : '') + (x.date === today ? ' today' : '') + (x.spent ? (x.spent > x.allow + 0.5 ? ' over' : ' under') : '') + (x.date > today ? ' later' : '');
      html += '<button type="button" class="' + cls + '" data-day="' + x.date + '"><b>' + x.k + '</b><small>' + short(x.allow) + '</small>' + (x.spent ? '<i>' + short(x.spent) + '</i>' : '') + '</button>';
      row.push(x);
      if (x.dow === 6 || x.k === P.n) {
        for (var j = x.dow; j < 6; j++) html += '<span class="lf-cell empty"></span>';
        html += weekCell(row); row = [];
      }
    });
    $('lf-grid').innerHTML = html;
    // the chosen day
    var list = d.entries.filter(function (e) { return e.day === sel.date; });
    var dl = new Date(sel.date + 'T00:00:00'), left = sel.allow - sel.spent;
    $('lf-day').innerHTML = '<div class="lf-day-title">' + dl.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }) + '</div>' +
      '<div class="lf-day-nums"><div><small>May spend</small><b>' + money(sel.allow) + '</b></div><div><small>Spent</small><b>' + money(sel.spent) + '</b></div>' +
      '<div><small>' + (left < 0 ? 'Over' : 'Left') + '</small><b class="' + (left < 0 ? 'neg' : 'pos') + '">' + money(Math.abs(left)) + '</b></div></div>' +
      '<div class="lf-list">' + (list.length ? list.map(function (e) {
        return '<div class="lf-item"><span>' + money(e.amount) + '</span><button type="button" data-edit="' + e.id + '" aria-label="Change">✎</button><button type="button" data-del="' + e.id + '" aria-label="Remove">✕</button></div>';
      }).join('') : '<p class="lf-none">Nothing spent this day</p>') + '</div>' +
      '<form class="lf-add" id="lf-add"><input type="text" inputmode="numeric" id="lf-amount" placeholder="Amount (đ)" autocomplete="off"><button class="pill-btn" type="submit">+ Spent</button></form>' +
      (d.level || d.carry ? '' : '<p class="lf-none">Set this month’s fund first, then the days fill in.</p>');
  }

  function load(p) {
    st.period = p || st.period;
    $('lf-grid').innerHTML = ''; $('lf-day').innerHTML = '<p class="lf-none">Opening…</p>';
    call('getLoveFund', st.period).then(function (d) { st.data = d; st.period = d.period; render(); })
      .catch(function (e) { $('lf-day').innerHTML = '<p class="lf-none">' + icdEscape(e.message) + '</p>'; });
  }
  function apply(promise) {
    if (st.busy) return; st.busy = true;
    promise.then(function (d) { st.data = d; render(); }).catch(function (e) { toast(e.message); }).then(function () { st.busy = false; });
  }
  window.loveFundOpen = function () {
    var w = $('love-fund'); w.classList.add('on'); requestAnimationFrame(function () { w.classList.add('in'); });
    load(st.period || new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 7));
  };
  function close() { var w = $('love-fund'); w.classList.remove('in'); setTimeout(function () { w.classList.remove('on'); }, 300); }

  document.addEventListener('DOMContentLoaded', function () {
    if (!$('love-fund')) return;
    $('lf-btn').onclick = window.loveFundOpen;
    $('lf-close').onclick = close;
    $('love-fund').addEventListener('click', function (e) { if (e.target === this) close(); });
    $('lf-prev').onclick = function () { load(shift(st.period, -1)); };
    $('lf-next').onclick = function () { load(shift(st.period, 1)); };
    $('lf-grid').onclick = function (e) { var b = e.target.closest('[data-day]'); if (b) { st.sel = b.dataset.day; render(); } };
    var body = $('love-fund');
    body.addEventListener('input', function (e) {
      if (e.target.id === 'lf-amount' || e.target.id === 'lf-setval') { var n = digits(e.target.value); e.target.value = n ? formatThousands(n) : ''; }
    });
    body.addEventListener('click', function (e) {
      if (e.target.id === 'lf-set') { var f = $('lf-setform'); f.hidden = !f.hidden; if (!f.hidden) $('lf-setval').focus(); return; }
      var ed = e.target.closest('[data-edit]'), del = e.target.closest('[data-del]');
      if (ed) {
        var cur = st.data.entries.filter(function (x) { return x.id === Number(ed.dataset.edit); })[0];
        var v = prompt('Amount (đ)', cur ? formatThousands(cur.amount) : ''); if (v == null) return;
        if (digits(v)) apply(call('updateLoveFundSpend', Number(ed.dataset.edit), digits(v), st.period));
      }
      if (del && confirm('Remove this?')) apply(call('deleteLoveFundSpend', Number(del.dataset.del), st.period));
    });
    body.addEventListener('submit', function (e) {
      e.preventDefault();
      if (e.target.id === 'lf-add') { var a = digits($('lf-amount').value); if (!a) { toast('Type an amount'); return; } apply(call('addLoveFundSpend', st.sel, a, st.period)); }
      if (e.target.id === 'lf-setform') { var v = digits($('lf-setval').value); apply(call('saveLoveFundLevel', v, st.period)); }
    });
  });
})();
