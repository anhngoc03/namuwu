/**
 * foodart.js — little 16×16 pixel-art dishes for the Love house menu book (and the 3D table).
 * Everything is drawn here in code; no pictures are downloaded and no AI is called.
 * window.FoodArt = { cats, list, byKey(key), draw(canvas, key, scale) }
 */
(function () {
  'use strict';
  var CATS = [
    { id: 'noodle', name: 'Noodles & soup', color: '#ffd7a8' },
    { id: 'rice', name: 'Rice', color: '#fff0b8' },
    { id: 'street', name: 'Street food', color: '#ffc9c9' },
    { id: 'jk', name: 'Japanese & Korean', color: '#d9ccff' },
    { id: 'west', name: 'Western', color: '#c9e7ff' },
    { id: 'sweet', name: 'Desserts', color: '#ffd1e6' },
    { id: 'drink', name: 'Drinks', color: '#c8f0dc' }
  ];
  // [key, name, category, template, params]
  var LIST = [
    ['pho', 'Phở bò', 'noodle', 'bowl', { soup: '#f3d9a8', noodle: '#fffaf0', top: ['#b5654a', '#b5654a', '#7fc46a'] }],
    ['bun-cha', 'Bún chả', 'noodle', 'bowl', { soup: '#eaa65e', top: ['#8a5233', '#8a5233', '#a86a40', '#7fc46a'] }],
    ['bun-bo', 'Bún bò Huế', 'noodle', 'bowl', { soup: '#e2703f', noodle: '#fffaf0', top: ['#9a4a35', '#f5e6c8', '#7fc46a'] }],
    ['mi-quang', 'Mì Quảng', 'noodle', 'bowl', { soup: '#f2c463', noodle: '#ffe27a', top: ['#e86a5a', '#f5d0a0', '#7fc46a'] }],
    ['hu-tieu', 'Hủ tiếu', 'noodle', 'bowl', { soup: '#f4e6c6', noodle: '#ffffff', top: ['#f08f7a', '#c96f4a', '#7fc46a'] }],
    ['banh-canh', 'Bánh canh', 'noodle', 'bowl', { soup: '#f0c894', noodle: '#fff4dc', top: ['#e8865a', '#ffffff', '#7fc46a'] }],
    ['bun-rieu', 'Bún riêu', 'noodle', 'bowl', { soup: '#ef8a5a', noodle: '#fffaf0', top: ['#d4703f', '#f6c35a', '#7fc46a'] }],
    ['lau', 'Lẩu', 'noodle', 'pot', { soup: '#e8603f', top: ['#7fc46a', '#f6c35a', '#ffb3a3', '#ffffff'] }],
    ['com-tam', 'Cơm tấm', 'rice', 'plate', { rice: '#ffffff', main: '#b5653a', egg: true, veg: '#7fc46a' }],
    ['com-ga', 'Cơm gà', 'rice', 'plate', { rice: '#fff1b0', main: '#f2c07a', veg: '#7fc46a' }],
    ['com-rang', 'Cơm rang', 'rice', 'plate', { rice: '#f6d36b', dots: ['#7fc46a', '#ff8f7a', '#ffffff'] }],
    ['xoi', 'Xôi', 'rice', 'plate', { rice: '#cfe9a8', main: '#f6d27a', dots: ['#ffffff'] }],
    ['ca-ri', 'Cà ri', 'rice', 'plate', { rice: '#ffffff', sauce: '#f0a23a', dots: ['#ff8f7a', '#7fc46a'] }],
    ['com-bo', 'Cơm bò lúc lắc', 'rice', 'plate', { rice: '#ffffff', main: '#7a3f2c', dots: ['#ff8f7a', '#7fc46a'] }],
    ['banh-mi', 'Bánh mì', 'street', 'bread', {}],
    ['banh-xeo', 'Bánh xèo', 'street', 'xeo', {}],
    ['nem-ran', 'Nem rán', 'street', 'rolls', { roll: '#e3a24f', edge: '#b9752e' }],
    ['goi-cuon', 'Gỏi cuốn', 'street', 'rolls', { roll: '#f4f0e8', edge: '#d8d0c2', fill: ['#ff9f8f', '#7fc46a'] }],
    ['banh-bao', 'Bánh bao', 'street', 'bun', { bun: '#fff8ee' }],
    ['xien', 'Xiên que', 'street', 'skewer', { bits: ['#e8865a', '#f6c35a', '#b5654a', '#7fc46a'] }],
    ['ngo-nuong', 'Ngô nướng', 'street', 'corn', {}],
    ['khoai-lang', 'Khoai lang nướng', 'street', 'potato', {}],
    ['sushi', 'Sushi', 'jk', 'sushi', { fish: '#ff9f80' }],
    ['onigiri', 'Onigiri', 'jk', 'onigiri', {}],
    ['ramen', 'Ramen', 'jk', 'bowl', { soup: '#e9b97a', noodle: '#ffe9a0', top: ['#f5f0e0', '#8a5233', '#7fc46a'], egg: true }],
    ['takoyaki', 'Takoyaki', 'jk', 'balls', { ball: '#d99a4e', sauce: '#7a3f2c' }],
    ['tteok', 'Tteokbokki', 'jk', 'plate', { sauce: '#e8503f', dots: ['#fff0e8', '#fff0e8', '#7fc46a'] }],
    ['kimbap', 'Kimbap', 'jk', 'kimbap', {}],
    ['gyoza', 'Gyoza', 'jk', 'dumpling', {}],
    ['bibimbap', 'Bibimbap', 'jk', 'bowl', { soup: '#ffffff', top: ['#ff8f5a', '#7fc46a', '#b5654a', '#f6d36b'], egg: true }],
    ['pizza', 'Pizza', 'west', 'pizza', {}],
    ['burger', 'Burger', 'west', 'burger', {}],
    ['fries', 'Khoai tây chiên', 'west', 'fries', {}],
    ['ga-ran', 'Gà rán', 'west', 'drumstick', {}],
    ['spaghetti', 'Spaghetti', 'west', 'plate', { rice: '#f6d88a', sauce: '#d9503a', dots: ['#7fc46a'] }],
    ['steak', 'Bít tết', 'west', 'plate', { main: '#7a3f2c', veg: '#7fc46a', dots: ['#f6c35a'] }],
    ['salad', 'Salad', 'west', 'bowl', { soup: '#9ad690', top: ['#ff6f6f', '#fff3a8', '#7fc46a', '#ffffff'] }],
    ['hotdog', 'Hot dog', 'west', 'hotdog', {}],
    ['flan', 'Bánh flan', 'sweet', 'flan', {}],
    ['che', 'Chè', 'sweet', 'glass', { layers: ['#7fc46a', '#f6e0b0', '#c9a06a', '#ffffff'], top: '#ffffff' }],
    ['kem', 'Kem ốc quế', 'sweet', 'cone', { scoop: '#ffb6d0' }],
    ['banh-kem', 'Bánh kem', 'sweet', 'cake', {}],
    ['donut', 'Donut', 'sweet', 'donut', {}],
    ['cookie', 'Bánh quy', 'sweet', 'cookie', {}],
    ['mochi', 'Mochi', 'sweet', 'mochi', {}],
    ['fruit', 'Trái cây', 'sweet', 'plate', { dots: ['#ff6f6f', '#ffd36b', '#9ad690', '#c9a6ff', '#ff6f6f', '#ffd36b'] }],
    ['tra-sua', 'Trà sữa trân châu', 'drink', 'cup', { drink: '#d9b08a', boba: true }],
    ['ca-phe', 'Cà phê sữa đá', 'drink', 'cup', { drink: '#8a5a3a', ice: true }],
    ['matcha', 'Matcha latte', 'drink', 'cup', { drink: '#9ccb7a', cream: true }],
    ['nuoc-cam', 'Nước cam', 'drink', 'cup', { drink: '#ffb347', slice: '#ffd36b' }],
    ['sinh-to', 'Sinh tố dâu', 'drink', 'cup', { drink: '#ff8fb0', cream: true }],
    ['tra-dao', 'Trà đào', 'drink', 'cup', { drink: '#ffc48a', slice: '#ff9f80', ice: true }],
    ['nuoc-dua', 'Nước dừa', 'drink', 'coconut', {}],
    ['tra-nong', 'Trà nóng', 'drink', 'mug', { drink: '#c98a4a' }]
  ];

  /* ---- a tiny pixel painter ---- */
  function P(ctx, s) {
    var f = function (x, y, w, h, c) { if (!c) return; ctx.fillStyle = c; ctx.fillRect(x * s, y * s, w * s, h * s); };
    return {
      px: function (x, y, c) { f(x, y, 1, 1, c); },
      rect: f,
      // filled ellipse, centre (cx, cy), radii (rx, ry), pixel by pixel
      oval: function (cx, cy, rx, ry, c, from, to) { for (var y = 0; y < 16; y++) for (var x = 0; x < 16; x++) { var dx = (x + 0.5 - cx) / rx, dy = (y + 0.5 - cy) / ry; if (dx * dx + dy * dy <= 1 && (from == null || (y >= from && y <= to))) f(x, y, 1, 1, c); } }
    };
  }
  function shade(hex, k) {
    var n = parseInt(hex.slice(1), 16), r = Math.min(255, ((n >> 16) & 255) * k) | 0, g = Math.min(255, ((n >> 8) & 255) * k) | 0, b = Math.min(255, (n & 255) * k) | 0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  var OUT = '#6b4a3a';
  var T = {
    bowl: function (p, o) {
      for (var y = 7; y < 15; y++) { var w = [16, 16, 15, 14, 13, 12, 10, 8][y - 7]; p.rect(8 - w / 2, y, w, 1, y === 7 ? '#f6a9bd' : shade('#ffffff', 1 - (y - 7) * 0.035)); }
      p.rect(5, 14, 6, 1, '#e3d3c6');
      p.oval(8, 6.6, 7.4, 2.6, '#ffffff'); p.oval(8, 6.6, 6.4, 2, o.soup);
      if (o.noodle) { for (var i = 3; i < 13; i += 2) p.rect(i, 6 + (i % 4 ? 0 : 1), 2, 1, o.noodle); }
      (o.top || []).forEach(function (c, k) { var x = 3 + (k * 3) % 9, y = 5 + (k % 2); p.rect(x, y, 3, 2, c); p.rect(x, y, 3, 1, shade(c, 1.15)); });
      if (o.egg) { p.rect(9, 5, 3, 2, '#ffffff'); p.rect(10, 5, 1, 1, '#ffc23a'); }
      p.px(5, 1, 'rgba(255,255,255,.9)'); p.px(6, 2, 'rgba(255,255,255,.9)'); p.px(10, 2, 'rgba(255,255,255,.9)'); p.px(9, 3, 'rgba(255,255,255,.9)');
    },
    pot: function (p, o) {
      p.oval(8, 7, 7, 2.6, '#9a9aa8'); p.oval(8, 7, 6, 2, o.soup);
      o.top.forEach(function (c, k) { p.rect(4 + k * 2, 6 + (k % 2), 2, 1, c); });
      p.rect(1, 8, 14, 5, '#8a8a98'); p.rect(2, 13, 12, 1, '#74747f'); p.rect(0, 8, 1, 2, '#74747f'); p.rect(15, 8, 1, 2, '#74747f');
      p.px(5, 3, 'rgba(255,255,255,.7)'); p.px(9, 2, 'rgba(255,255,255,.7)'); p.px(7, 4, 'rgba(255,255,255,.7)');
    },
    plate: function (p, o) {
      p.oval(8, 10.5, 7.8, 4.2, '#e8dccf'); p.oval(8, 10, 7.6, 3.9, '#ffffff'); p.oval(8, 10, 6.2, 2.9, '#f6eee6');
      if (o.rice) { p.oval(o.main ? 6 : 8, 8.6, o.main ? 3.6 : 5, 3, o.rice); p.rect(o.main ? 4 : 6, 6, 3, 1, shade(o.rice, 1.06)); }
      if (o.sauce) { p.oval(o.rice ? 10 : 8, 9.5, o.rice ? 3.4 : 5, 2.2, o.sauce); p.px(o.rice ? 9 : 7, 8, shade(o.sauce, 1.2)); }
      if (o.main) { p.rect(8, 6, 5, 4, o.main); p.rect(8, 6, 5, 1, shade(o.main, 1.25)); p.rect(8, 9, 5, 1, shade(o.main, 0.8)); }
      if (o.egg) { p.oval(5, 11, 2.4, 1.6, '#ffffff'); p.rect(5, 10, 1, 1, '#ffc23a'); }
      if (o.veg) { p.rect(11, 11, 2, 1, o.veg); p.rect(12, 10, 2, 1, o.veg); p.px(13, 11, shade(o.veg, 0.8)); }
      (o.dots || []).forEach(function (c, k) { p.rect(4 + (k * 5) % 9, 7 + (k * 3) % 4, 2, 2, c); });
    },
    bread: function (p) {
      for (var x = 1; x < 15; x++) { var top = 6 - (x > 3 && x < 12 ? 1 : 0); p.rect(x, top, 1, 6 - (x < 2 || x > 13 ? 2 : 0), '#e8b46a'); }
      p.rect(3, 8, 10, 2, '#f6e0b8'); p.rect(3, 8, 3, 1, '#ff8f7a'); p.rect(6, 8, 3, 1, '#7fc46a'); p.rect(9, 8, 3, 1, '#b5654a'); p.rect(4, 9, 8, 1, '#ffb3a3');
      [3, 6, 9, 12].forEach(function (x) { p.px(x, 5, '#c98a3e'); });
      p.rect(2, 12, 12, 1, '#c98a3e');
    },
    xeo: function (p) { p.oval(8, 9, 7, 5, '#f6c64a', 4, 12); p.oval(8, 9, 5.5, 3.6, '#ffd96a', 5, 11); p.rect(5, 8, 2, 1, '#ff9f8f'); p.rect(9, 9, 2, 1, '#7fc46a'); p.rect(7, 10, 2, 1, '#ffffff'); p.rect(2, 12, 12, 1, '#d9a23a'); p.rect(3, 13, 3, 1, '#7fc46a'); },
    rolls: function (p, o) {
      p.oval(8, 11, 7.6, 3.6, '#ffffff');
      [[2, 4], [5, 7], [8, 10]].forEach(function (q) {
        p.rect(q[0], q[1], 7, 3, o.roll); p.rect(q[0], q[1], 7, 1, shade(o.roll, 1.15)); p.rect(q[0] + 6, q[1], 1, 3, o.edge);
        if (o.fill) { p.px(q[0] + 2, q[1] + 1, o.fill[0]); p.px(q[0] + 4, q[1] + 1, o.fill[1]); }
      });
    },
    bun: function (p, o) { p.oval(8, 9, 7, 5.6, o.bun); p.oval(7, 7, 4, 2.6, '#ffffff'); p.px(8, 3, '#d8bea4'); p.px(7, 4, '#d8bea4'); p.px(9, 4, '#d8bea4'); p.px(8, 5, '#d8bea4'); p.rect(3, 14, 10, 1, '#e3d3c6'); },
    skewer: function (p, o) { p.rect(1, 8, 14, 1, '#c49674'); o.bits.forEach(function (c, k) { p.rect(3 + k * 3, 6, 2, 5, c); p.rect(3 + k * 3, 6, 2, 1, shade(c, 1.2)); }); },
    corn: function (p) { for (var y = 3; y < 13; y++) for (var x = 6; x < 10; x++) p.px(x, y, (x + y) % 2 ? '#ffd36b' : '#f2b83a'); p.rect(5, 9, 1, 5, '#7fc46a'); p.rect(10, 9, 1, 5, '#7fc46a'); p.rect(7, 13, 2, 2, '#c49674'); for (var k = 4; k < 12; k += 3) p.px(7, k, '#b5753a'); },
    potato: function (p) { p.oval(8, 9, 6.5, 3.5, '#9a4a5a'); p.oval(9, 8, 4, 2, '#f6b35a'); p.px(5, 8, '#6a3a40'); p.px(12, 10, '#6a3a40'); },
    sushi: function (p, o) { [[1, 7], [8, 8]].forEach(function (q) { p.rect(q[0], q[1] + 2, 6, 4, '#ffffff'); p.rect(q[0], q[1], 7, 3, o.fish); p.rect(q[0], q[1], 7, 1, shade(o.fish, 1.15)); p.rect(q[0] + 2, q[1] + 2, 2, 4, '#3a4a3a'); }); p.rect(1, 14, 14, 1, '#d8c8b8'); },
    onigiri: function (p) { for (var y = 3; y < 14; y++) { var w = Math.min(12, (y - 2) * 2); p.rect(8 - w / 2, y, w, 1, '#ffffff'); } p.rect(5, 10, 6, 4, '#3a4a3a'); p.px(6, 7, '#7a6a6a'); p.px(9, 7, '#7a6a6a'); p.rect(7, 8, 2, 1, '#f6a9bd'); },
    balls: function (p, o) { p.oval(8, 11, 7, 3, '#ffffff'); [[4, 9], [8, 8], [12, 9], [6, 11], [10, 11]].forEach(function (q) { p.oval(q[0], q[1], 2, 2, o.ball); p.px(q[0] - 1, q[1] - 1, o.sauce); p.px(q[0], q[1] - 1, '#7fc46a'); }); },
    kimbap: function (p) { [[3, 8], [8, 7], [12, 9]].forEach(function (q) { p.oval(q[0], q[1], 2.6, 2.6, '#2f3a30'); p.oval(q[0], q[1], 1.9, 1.9, '#ffffff'); p.px(q[0], q[1], '#ffd36b'); p.px(q[0] - 1, q[1], '#ff8f5a'); p.px(q[0], q[1] - 1, '#7fc46a'); }); p.rect(1, 13, 14, 1, '#d8c8b8'); },
    dumpling: function (p) { [[4, 9], [11, 9], [8, 6]].forEach(function (q) { p.oval(q[0], q[1], 3.5, 2.2, '#f8ecd8'); p.rect(q[0] - 3, q[1] + 1, 7, 1, '#e3b06a'); [-2, 0, 2].forEach(function (d) { p.px(q[0] + d, q[1] - 2, '#e8d6b8'); }); }); },
    pizza: function (p) { for (var y = 2; y < 15; y++) { var w = Math.max(1, (15 - y)); p.rect(8 - w / 2, y, w, 1, y < 4 ? '#e8b46a' : '#ffd36b'); } p.rect(2, 2, 12, 2, '#d99a4e'); [[6, 6], [9, 7], [7, 10], [8, 8]].forEach(function (q, k) { p.rect(q[0], q[1], 2, 1, k % 2 ? '#e8503f' : '#7fc46a'); }); },
    burger: function (p) { p.oval(8, 5, 6.5, 3, '#e8a54a', 2, 6); [6, 8].forEach(function (x) { p.px(x, 3, '#fff3d6'); }); p.px(10, 4, '#fff3d6'); p.rect(1, 7, 14, 1, '#7fc46a'); p.rect(2, 8, 12, 1, '#ffd36b'); p.rect(2, 9, 12, 2, '#7a3f2c'); p.rect(2, 11, 12, 1, '#e8503f'); p.rect(2, 12, 12, 2, '#e8a54a'); },
    fries: function (p) { [3, 5, 7, 9, 11].forEach(function (x, k) { p.rect(x, 2 + (k % 2) * 2, 2, 8, '#ffd36b'); p.px(x, 2 + (k % 2) * 2, '#f2b83a'); }); p.rect(2, 8, 12, 7, '#e8503f'); p.rect(3, 9, 10, 1, '#ff7a6a'); p.rect(6, 11, 4, 2, '#ffffff'); },
    drumstick: function (p) { p.oval(7, 7, 5, 4.5, '#d99a4e'); p.oval(6, 6, 3, 2.4, '#e8b46a'); p.rect(10, 10, 4, 2, '#fff8ee'); p.rect(13, 9, 2, 1, '#fff8ee'); p.rect(13, 12, 2, 1, '#fff8ee'); },
    hotdog: function (p) { p.oval(8, 9, 7, 3, '#e8b46a'); p.rect(1, 7, 14, 2, '#d9503a'); for (var x = 2; x < 14; x += 3) p.px(x, 6, '#ffd36b'); p.rect(2, 11, 12, 1, '#c98a3e'); },
    flan: function (p) { p.oval(8, 13, 7.6, 2.2, '#ffffff'); for (var y = 3; y < 13; y++) { var w = 8 + (y - 3) * 0.7 | 0; p.rect(8 - w / 2, y, w, 1, y < 5 ? '#8a4a2a' : '#ffd88a'); } p.rect(4, 5, 1, 3, '#8a4a2a'); p.rect(11, 5, 1, 2, '#8a4a2a'); p.px(6, 6, '#fff3c8'); },
    glass: function (p, o) { p.rect(4, 2, 8, 13, '#e8f6ff'); var y = 14; o.layers.forEach(function (c) { p.rect(5, y - 2, 6, 3, c); y -= 3; }); p.rect(5, 2, 6, 1, o.top); p.rect(4, 2, 1, 13, '#c8e4f2'); p.rect(11, 2, 1, 13, '#c8e4f2'); p.rect(9, 0, 1, 4, '#ff8fb0'); },
    cone: function (p, o) { for (var y = 8; y < 16; y++) { var w = Math.max(1, 8 - (y - 8)); p.rect(8 - w / 2, y, w, 1, (y % 2) ? '#e8b46a' : '#d99a4e'); } p.oval(8, 6, 4.5, 4, o.scoop); p.px(8, 2, '#e8503f'); p.px(6, 5, '#ffffff'); },
    cake: function (p) { p.rect(2, 7, 12, 7, '#fff3e0'); p.rect(2, 9, 12, 1, '#ff9fbf'); p.rect(2, 12, 12, 1, '#ff9fbf'); p.rect(2, 5, 12, 2, '#ffffff'); [3, 6, 9, 12].forEach(function (x) { p.px(x, 7, '#ffffff'); }); p.rect(7, 2, 2, 3, '#e8503f'); p.px(8, 1, '#7fc46a'); },
    donut: function (p) { p.oval(8, 8, 6.5, 6, '#e8b46a'); p.oval(8, 7.5, 6, 5.2, '#ff9fbf'); p.oval(8, 8, 2, 2, '#f8f0e6'); [[4, 5, '#ffffff'], [11, 6, '#9fcfff'], [6, 11, '#ffd36b'], [11, 10, '#ffffff']].forEach(function (q) { p.px(q[0], q[1], q[2]); }); },
    cookie: function (p) { p.oval(8, 8, 6.5, 6.5, '#e8b46a'); [[5, 6], [9, 5], [7, 9], [11, 9], [5, 11], [9, 12]].forEach(function (q) { p.px(q[0], q[1], '#6a3a2a'); }); },
    mochi: function (p) { [[5, 9, '#ffd1e6'], [11, 9, '#cdeccd'], [8, 6, '#fff6e0']].forEach(function (q) { p.oval(q[0], q[1], 3.2, 2.8, q[2]); p.px(q[0] - 1, q[1] - 1, '#ffffff'); }); p.rect(2, 13, 12, 1, '#d8c8b8'); },
    cup: function (p, o) {
      p.rect(4, 4, 8, 11, '#f0f8ff'); p.rect(5, 6, 6, 9, o.drink); p.rect(5, 6, 6, 1, shade(o.drink, 1.15));
      if (o.cream) p.rect(5, 5, 6, 2, '#ffffff');
      if (o.boba) [6, 8, 10, 7, 9].forEach(function (x, k) { p.px(x, 13 - (k > 2 ? 1 : 0), '#3a2a2a'); });
      if (o.ice) { p.rect(6, 8, 2, 2, 'rgba(255,255,255,.7)'); p.rect(9, 10, 2, 2, 'rgba(255,255,255,.7)'); }
      if (o.slice) { p.oval(11, 5, 2, 2, o.slice); }
      p.rect(3, 3, 10, 1, '#d8e8f2'); p.rect(9, 0, 1, 4, '#ff8fb0'); p.rect(4, 4, 1, 11, '#d0e6f2'); p.rect(11, 4, 1, 11, '#d0e6f2');
    },
    coconut: function (p) { p.oval(8, 10, 6, 5, '#7fc46a'); p.oval(8, 6.5, 4.5, 1.6, '#fffaf0'); p.rect(9, 1, 1, 6, '#ff8fb0'); p.px(4, 11, '#6aa85a'); p.px(11, 12, '#6aa85a'); },
    mug: function (p, o) { p.rect(3, 6, 9, 8, '#ffffff'); p.rect(4, 7, 7, 2, o.drink); p.rect(12, 8, 2, 4, '#ffffff'); p.rect(13, 9, 1, 2, '#f0e6dc'); p.rect(3, 13, 9, 1, '#e6d8cc'); [5, 8].forEach(function (x) { p.px(x, 4, 'rgba(255,255,255,.8)'); p.px(x + 1, 2, 'rgba(255,255,255,.8)'); }); }
  };
  function byKey(k) { for (var i = 0; i < LIST.length; i++) if (LIST[i][0] === k) return LIST[i]; return null; }
  // drawn at 16×16, given a soft dark outline (so it reads on any background), then scaled up crisply
  function draw(canvas, key, scale) {
    var d = byKey(key), s = scale || 4;
    canvas.width = canvas.height = 16 * s;
    var ctx = canvas.getContext('2d'); ctx.imageSmoothingEnabled = false; ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!d) return canvas;
    var src = document.createElement('canvas'); src.width = src.height = 16;
    var sx = src.getContext('2d'); T[d[3]](P(sx, 1), d[4] || {});
    var img = sx.getImageData(0, 0, 16, 16), a = function (x, y) { return x < 0 || y < 0 || x > 15 || y > 15 ? 0 : img.data[(y * 16 + x) * 4 + 3]; };
    var out = sx.createImageData(16, 16);
    for (var y = 0; y < 16; y++) for (var x = 0; x < 16; x++) {
      var i = (y * 16 + x) * 4;
      if (a(x, y) > 40) { out.data[i] = img.data[i]; out.data[i + 1] = img.data[i + 1]; out.data[i + 2] = img.data[i + 2]; out.data[i + 3] = img.data[i + 3]; }
      else if (a(x - 1, y) > 220 || a(x + 1, y) > 220 || a(x, y - 1) > 220 || a(x, y + 1) > 220) { out.data[i] = 122; out.data[i + 1] = 90; out.data[i + 2] = 82; out.data[i + 3] = 200; }
    }
    var tmp = document.createElement('canvas'); tmp.width = tmp.height = 16; tmp.getContext('2d').putImageData(out, 0, 0);
    ctx.drawImage(tmp, 0, 0, 16 * s, 16 * s);
    return canvas;
  }
  // a data URL, for <img> and CSS backgrounds
  var cache = {};
  function url(key, scale) { var k = key + '@' + (scale || 4); if (!cache[k]) cache[k] = draw(document.createElement('canvas'), key, scale).toDataURL(); return cache[k]; }
  window.FoodArt = {
    cats: CATS,
    list: LIST.map(function (d) { return { key: d[0], name: d[1], cat: d[2] }; }),
    byKey: function (k) { var d = byKey(k); return d ? { key: d[0], name: d[1], cat: d[2] } : null; },
    draw: draw, url: url,
    // the template + colours, for the 3D block models on the Love table
    spec: function (k) { var d = byKey(k); return d ? { tpl: d[3], o: d[4] || {} } : null; }
  };
})();
