/**
 * store.js — the corner shop in the village. A cashier waits behind the till (the 3D room behind the page);
 * on one side "Shelves" opens the goods, the basket in the corner holds what you picked, and paying
 * empties it. The basket is kept on this device (localStorage), nothing is sent anywhere.
 */
(function () {
  'use strict';
  // [key (FoodArt drawing), name, price in đồng, shelf]
  var GOODS = [
    ['onigiri', 'Cơm nắm', 18000, 'food'], ['kimbap', 'Kimbap', 25000, 'food'], ['sushi', 'Sushi', 35000, 'food'],
    ['banh-bao', 'Bánh bao', 20000, 'food'], ['banh-mi', 'Bánh mì', 22000, 'food'], ['hotdog', 'Hot dog', 25000, 'food'],
    ['xien', 'Xiên que', 15000, 'food'], ['ga-ran', 'Gà rán', 30000, 'food'], ['fries', 'Khoai tây chiên', 20000, 'food'],
    ['tra-sua', 'Trà sữa', 28000, 'drink'], ['ca-phe', 'Cà phê sữa đá', 20000, 'drink'], ['matcha', 'Matcha latte', 32000, 'drink'],
    ['nuoc-cam', 'Nước cam', 18000, 'drink'], ['tra-dao', 'Trà đào', 25000, 'drink'], ['sinh-to', 'Sinh tố dâu', 30000, 'drink'],
    ['nuoc-dua', 'Nước dừa', 20000, 'drink'], ['tra-nong', 'Trà nóng', 12000, 'drink'],
    ['donut', 'Donut', 15000, 'sweet'], ['cookie', 'Bánh quy', 10000, 'sweet'], ['mochi', 'Mochi', 18000, 'sweet'],
    ['kem', 'Kem ốc quế', 12000, 'sweet'], ['flan', 'Bánh flan', 10000, 'sweet'], ['banh-kem', 'Bánh kem', 45000, 'sweet']
  ];
  var SHELVES = [['food', 'Snacks & meals'], ['drink', 'Drinks'], ['sweet', 'Sweets']];
  var KEY = 'namuwu_store_cart';
  var cart = load(), shelf = 'food';

  function load() { try { var c = JSON.parse(localStorage.getItem(KEY) || '{}'); return c && typeof c === 'object' ? c : {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function money(n) { return n.toLocaleString('vi-VN') + 'đ'; }
  function byKey(k) { for (var i = 0; i < GOODS.length; i++) if (GOODS[i][0] === k) return GOODS[i]; return null; }
  function pic(k) { return window.FoodArt ? FoodArt.url(k, 4) : ''; }
  function count() { var n = 0; Object.keys(cart).forEach(function (k) { n += cart[k]; }); return n; }
  function total() { var t = 0; Object.keys(cart).forEach(function (k) { var g = byKey(k); if (g) t += g[2] * cart[k]; }); return t; }
  function say(text) {
    var b = document.getElementById('store-say'); if (!b) return;
    b.textContent = text; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
  }
  function badge() {
    var n = count(), el = document.getElementById('store-count');
    el.textContent = n; el.style.display = n ? '' : 'none';
  }

  function renderShelf() {
    document.getElementById('store-tabs').innerHTML = SHELVES.map(function (s) {
      return '<button type="button" data-shelf="' + s[0] + '"' + (s[0] === shelf ? ' class="on"' : '') + '>' + s[1] + '</button>';
    }).join('');
    document.getElementById('store-goods').innerHTML = GOODS.filter(function (g) { return g[3] === shelf; }).map(function (g) {
      var n = cart[g[0]] || 0;
      return '<button type="button" class="store-item' + (n ? ' in' : '') + '" data-add="' + g[0] + '"><img src="' + pic(g[0]) + '" alt=""><b>' + esc(g[1]) + '</b><small>' + money(g[2]) + '</small>' +
        (n ? '<i>' + n + '</i>' : '') + '</button>';
    }).join('');
  }
  function renderCart() {
    var keys = Object.keys(cart).filter(function (k) { return cart[k] > 0 && byKey(k); });
    document.getElementById('store-lines').innerHTML = keys.length ? keys.map(function (k) {
      var g = byKey(k);
      return '<div class="store-line"><img src="' + pic(k) + '" alt=""><div><b>' + esc(g[1]) + '</b><small>' + money(g[2]) + '</small></div>' +
        '<div class="store-qty"><button type="button" data-dec="' + k + '">−</button><span>' + cart[k] + '</span><button type="button" data-inc="' + k + '">+</button></div>' +
        '<b class="store-sum">' + money(g[2] * cart[k]) + '</b></div>';
    }).join('') : '<p class="store-empty">The basket is empty — pick something from the shelves.</p>';
    document.getElementById('store-total').textContent = money(total());
    document.getElementById('store-pay').disabled = !keys.length;
  }
  function add(k, d) {
    var g = byKey(k); if (!g) return;
    cart[k] = Math.max(0, (cart[k] || 0) + d); if (!cart[k]) delete cart[k];
    save(); badge();
    if (d > 0) {
      say(g[1] + '? Good choice!');
      var c = document.getElementById('store-cart-btn'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
    }
  }
  function open(id, on) { document.getElementById(id).classList.toggle('active', on); }

  window.openStore = function () {
    if (typeof showView === 'function') showView('store-view');
    badge(); say(['Hello! Welcome in.', 'Hi there! Need anything?', 'Welcome! Take your time.'][Math.floor(Math.random() * 3)]);
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('store-view')) return;
    badge();
    document.getElementById('store-shelf-btn').onclick = function () { renderShelf(); open('store-shelf-modal', true); };
    document.getElementById('store-cart-btn').onclick = function () { renderCart(); open('store-cart-modal', true); };
    document.getElementById('store-shelf-close').onclick = function () { open('store-shelf-modal', false); };
    document.getElementById('store-cart-close').onclick = function () { open('store-cart-modal', false); };
    document.getElementById('store-to-cart').onclick = function () { open('store-shelf-modal', false); renderCart(); open('store-cart-modal', true); };
    document.getElementById('store-tabs').onclick = function (e) { var b = e.target.closest('[data-shelf]'); if (b) { shelf = b.dataset.shelf; renderShelf(); } };
    document.getElementById('store-goods').onclick = function (e) { var b = e.target.closest('[data-add]'); if (b) { add(b.dataset.add, 1); renderShelf(); } };
    document.getElementById('store-lines').onclick = function (e) {
      var b = e.target.closest('[data-inc],[data-dec]'); if (!b) return;
      add(b.dataset.inc || b.dataset.dec, b.dataset.inc ? 1 : -1); renderCart();
    };
    document.getElementById('store-clear').onclick = function () { cart = {}; save(); badge(); renderCart(); };
    document.getElementById('store-pay').onclick = function () {
      var t = total(); if (!t) return;
      cart = {}; save(); badge(); renderCart(); open('store-cart-modal', false);
      say('That’s ' + money(t) + '. Thank you, come again!');
    };
  });
})();
