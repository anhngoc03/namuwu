/**
 * village.js — Personal › the little pixel village.
 * ------------------------------------------------------------------
 * Locked: only the picture (people, cat, dog, fish, pond) — no text, tapping
 * the scene does nothing. The tiny ✮⋆˙ button (top-right) opens the password
 * board. Unlocked: every house gets its name and opens its feature; the big
 * house in the middle (Town Hall) is where the villagers walk to when a Work
 * task is due today/tomorrow (or late) and still not done.
 *
 * Everything is drawn on one <canvas> in "logical pixels" (256×160 landscape,
 * 160×256 portrait) and scaled up crisp. No server call while locked.
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  /* ---------------- houses: one per feature ----------------
     open: name of a global opener (already behind the password), or null = coming soon. */
  var HOUSES = [
    { id: 'work',     label: 'Work',       roof: 'lav',   open: 'openWork' },
    { id: 'money',    label: 'Money',      roof: 'peach', open: 'openExpense' },
    { id: 'calendar', label: 'Calendar',   roof: 'blue',  open: 'openCalendar' },
    { id: 'account',  label: 'Account',    roof: 'mint',  open: 'loadAccounts' },
    { id: 'language', label: 'Languages',  roof: 'pink',  open: null },
    { id: 'skills',   label: 'Skills',     roof: 'yellow',open: null },
    { id: 'law',      label: 'Law',        roof: 'blue',  open: null },
    { id: 'health',   label: 'Food & Gym', roof: 'mint',  open: null },
    { id: 'notes',    label: 'Notes',      roof: 'yellow',open: null },
    { id: 'love',     label: 'Love',       roof: 'pink',  open: null, heart: true },
    { id: 'goals',    label: 'Goals',      roof: 'lav',   open: null }
  ];

  var HW = 24, HH = 22;           // small house box
  var GW = 44, GH = 34;           // Town Hall box

  // positions (top-left) per orientation, same order as HOUSES
  var LAYOUTS = {
    land: {
      W: 256, H: 160,
      houses: [[14,10],[50,10],[86,10],[146,10],[182,10],[218,10],[14,62],[218,62],[14,112],[50,112],[86,112]],
      hall: [106, 48],
      pond: { cx: 206, cy: 128, rx: 32, ry: 15 },
      roads: [[8,34,242,5],[8,86,242,5],[8,136,166,5],[126,38,5,100],[42,38,5,100]],
      trees: [[118,8],[64,40],[160,40],[232,40],[60,96],[100,94],[152,96],[166,112],[244,104],[4,150],[120,146],[140,150],[178,92]],
      open: [[30,48],[90,48],[170,48],[235,95],[150,120],[110,128],[70,150],[25,98]]
    },
    port: {
      W: 160, H: 256,
      houses: [[8,10],[48,10],[88,10],[128,10],[8,58],[128,58],[8,110],[128,110],[8,162],[128,162],[8,210]],
      hall: [58, 98],
      pond: { cx: 82, cy: 216, rx: 32, ry: 15 },
      roads: [[4,34,152,5],[35,38,5,212],[120,38,5,170],[78,38,5,60],[40,140,82,5]],
      trees: [[50,48],[70,64],[100,48],[48,86],[104,82],[50,160],[100,156],[64,150],[136,206],[148,236],[44,232],[122,236],[138,90]],
      open: [[60,50],[100,60],[60,150],[100,150],[50,190],[110,190],[30,140],[140,140]]
    }
  };

  /* ---------------- colours (pastel; night version for dark mode) ---------------- */
  var PAL = {
    day: {
      grass: '#c6e6ad', grass2: '#b3db97', grass3: '#d5eec0', road: '#f2e2bf', road2: '#e6d1a6',
      water: '#a9daec', water2: '#8fcbe2', water3: '#dff3fa', sand: '#f3e6c4', lily: '#8ccf8a',
      wall: '#fff6e6', wall2: '#efdcc2', door: '#c49674', win: '#bfe6f2', winF: '#e9d4b8',
      trunk: '#a8805e', leaf: '#96d38f', leaf2: '#7cc077', leaf3: '#b5e3a9', shadow: 'rgba(90,74,74,0.16)',
      flower: ['#ffb6c1', '#fff', '#f9e08a', '#d9c9f0'],
      roof: { pink: ['#f6aabd', '#e48ea4'], peach: ['#f9c6a1', '#eaa97f'], blue: ['#a6d4e6', '#86bfd6'],
              lav: ['#cdb9ee', '#b39ce0'], mint: ['#a9dcc1', '#8cc8a8'], yellow: ['#f5dc8c', '#e5c56a'],
              hall: ['#f19bb0', '#d97a94'] }
    },
    night: {
      grass: '#3e5b4c', grass2: '#365243', grass3: '#476656', road: '#6e6352', road2: '#5f5546',
      water: '#2f4c69', water2: '#27415b', water3: '#4c6d8c', sand: '#6b604f', lily: '#4f7d58',
      wall: '#cfc5b4', wall2: '#b4a994', door: '#7d5f4a', win: '#ffe39a', winF: '#a8977c',
      trunk: '#6d5440', leaf: '#4f7d58', leaf2: '#436c4b', leaf3: '#5d8c66', shadow: 'rgba(0,0,0,0.25)',
      flower: ['#c98b97', '#cfc5b4', '#c7b36a', '#a596c0'],
      roof: { pink: ['#b97a8b', '#9e6474'], peach: ['#bb9274', '#a07a5e'], blue: ['#6f98aa', '#5b8193'],
              lav: ['#9888b5', '#7e6f9c'], mint: ['#709e86', '#5c8670'], yellow: ['#b8a466', '#9c8a51'],
              hall: ['#b9707f', '#9c5a69'] }
    }
  };

  var PEOPLE = [
    { hair: '#5a4040', skin: '#ffd9c2', shirt: '#ffb6c1', pants: '#8a8fb8' },
    { hair: '#3b2f2f', skin: '#f6c9a8', shirt: '#b0e0e6', pants: '#6d6a8a' },
    { hair: '#a8714a', skin: '#ffe0cc', shirt: '#dde874', pants: '#7c8aa8' },
    { hair: '#2e2a36', skin: '#eebd9a', shirt: '#d9c9f0', pants: '#8a7a6a' }
  ];

  /* ---------------- state ---------------- */
  var root, canvas, ctx, bg, labelsEl, starBtn;
  var L = null, mode = '', scale = 1, night = false;
  var people = [], pets = [], fish = [], flies = [];
  var running = false, lastT = 0, acc = 0;
  var urgent = [];            // Work tasks that call everyone to the Town Hall
  var built = false;

  function isNight() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  function P() { return night ? PAL.night : PAL.day; }
  function unlocked() { return typeof personalUnlocked !== 'undefined' && personalUnlocked; }

  // tiny seeded random so trees/flowers stay put between redraws
  function rng(seed) { return function () { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }
  function rnd(a, b) { return a + Math.random() * (b - a); }

  /* ---------------- geometry helpers ---------------- */
  function houseBox(i) { var h = L.houses[i]; return { x: h[0], y: h[1], w: HW, h: HH }; }
  function hallBox() { return { x: L.hall[0], y: L.hall[1], w: GW, h: GH }; }
  function doorOf(b) { return { x: b.x + Math.floor(b.w / 2), y: b.y + b.h + 3 }; }
  function inPond(x, y, pad) {
    var p = L.pond, dx = (x - p.cx) / (p.rx + (pad || 0)), dy = (y - p.cy) / (p.ry + (pad || 0));
    return dx * dx + dy * dy < 1;
  }
  function crossesPond(a, b) {
    for (var t = 0; t <= 1; t += 0.1) if (inPond(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, 4)) return true;
    return false;
  }
  function waypoints() {
    var pts = [];
    for (var i = 0; i < L.houses.length; i++) pts.push(doorOf(houseBox(i)));
    pts.push(doorOf(hallBox()));
    L.open.forEach(function (o) { pts.push({ x: o[0], y: o[1] }); });
    return pts;
  }

  /* ---------------- drawing: static background ---------------- */
  function px(c, x, y, w, h, col) { c.fillStyle = col; c.fillRect(x, y, w, h); }

  function drawEllipse(c, cx, cy, rx, ry, col) {
    c.fillStyle = col;
    for (var y = -ry; y <= ry; y++) {
      var half = Math.round(rx * Math.sqrt(Math.max(0, 1 - (y * y) / (ry * ry))));
      c.fillRect(cx - half, cy + y, half * 2, 1);
    }
  }

  function drawTree(c, x, y) {
    var p = P();
    px(c, x + 1, y + 11, 8, 2, p.shadow);
    px(c, x + 4, y + 8, 2, 4, p.trunk);
    px(c, x + 2, y + 1, 6, 1, p.leaf);
    px(c, x + 1, y + 2, 8, 5, p.leaf);
    px(c, x + 2, y + 7, 6, 2, p.leaf2);
    px(c, x + 1, y + 6, 8, 1, p.leaf2);
    px(c, x + 3, y + 2, 2, 2, p.leaf3);
  }

  function drawHeart(c, x, y, col) {
    px(c, x, y, 2, 1, col); px(c, x + 3, y, 2, 1, col);
    px(c, x, y + 1, 5, 1, col); px(c, x + 1, y + 2, 3, 1, col); px(c, x + 2, y + 3, 1, 1, col);
  }

  function drawHouse(c, b, roofKey, opts) {
    var p = P(), r = p.roof[roofKey], w = b.w, x = b.x, y = b.y;
    var roofH = Math.round(b.h * 0.45), bodyY = y + roofH, bodyH = b.h - roofH;
    px(c, x + 1, y + b.h - 1, w - 2, 3, p.shadow);
    // walls
    px(c, x + 2, bodyY, w - 4, bodyH, p.wall);
    px(c, x + 2, y + b.h - 1, w - 4, 1, p.wall2);
    px(c, x + 2, bodyY, 1, bodyH, p.wall2);
    // roof (gable)
    for (var i = 0; i < roofH; i++) {
      var inset = Math.max(0, Math.round((roofH - 1 - i) * (w / 2 - 2) / roofH));
      px(c, x + inset, y + i, w - inset * 2, 1, i === roofH - 1 ? r[1] : r[0]);
      if (i < roofH - 1) px(c, x + inset, y + i, 1, 1, r[1]);
    }
    if (!opts || !opts.hall) px(c, x + w - 7, y + 1, 3, 4, p.wall2);    // chimney
    // door
    var dw = opts && opts.hall ? 8 : 4, dh = opts && opts.hall ? 9 : 6;
    var dx = x + Math.floor((w - dw) / 2);
    px(c, dx, y + b.h - dh, dw, dh, p.door);
    if (opts && opts.hall) px(c, dx + dw / 2, y + b.h - dh, 1, dh, p.wall2);
    else px(c, dx + 3, y + b.h - 3, 1, 1, p.wall);
    // windows
    var wins = opts && opts.hall ? [x + 5, x + 13, x + w - 17, x + w - 9] : [x + 4, x + w - 8];
    var wy = bodyY + 3;
    wins.forEach(function (wx) {
      px(c, wx - 1, wy - 1, 6, 5, p.winF);
      px(c, wx, wy, 4, 3, p.win);
      if (!night) px(c, wx, wy, 1, 1, '#ffffff');
    });
    if (opts && opts.heart) drawHeart(c, x + Math.floor(w / 2) - 2, y + roofH - 6, night ? '#e79aac' : '#ff7f9e');
    if (opts && opts.hall) {
      // flag on top + little bell window
      px(c, x + w / 2, y - 9, 1, 10, p.trunk);
      px(c, x + w / 2 + 1, y - 9, 6, 4, night ? '#c98b97' : '#ff9bb0');
      px(c, x + w / 2 - 2, y + roofH - 8, 5, 4, p.winF);
      px(c, x + w / 2 - 1, y + roofH - 7, 3, 2, night ? '#ffe39a' : '#f9e08a');
      // steps
      px(c, dx - 2, y + b.h, dw + 4, 2, p.road2);
    } else {
      px(c, dx - 1, y + b.h, dw + 2, 2, p.road2);   // doorstep
    }
  }

  function drawBackground() {
    var p = P();
    bg = document.createElement('canvas');
    bg.width = L.W * scale; bg.height = L.H * scale;
    var c = bg.getContext('2d');
    c.imageSmoothingEnabled = false;
    c.scale(scale, scale);
    var R = rng(7);

    px(c, 0, 0, L.W, L.H, p.grass);
    for (var i = 0; i < L.W * L.H / 40; i++) {
      px(c, Math.floor(R() * L.W), Math.floor(R() * L.H), 1, 1, R() < 0.6 ? p.grass2 : p.grass3);
    }
    // roads
    L.roads.forEach(function (r) {
      px(c, r[0], r[1], r[2], r[3], p.road);
      px(c, r[0], r[1] + r[3] - 1, r[2], 1, p.road2);
    });
    for (var k = 0; k < 60; k++) {
      var rr = L.roads[Math.floor(R() * L.roads.length)];
      px(c, rr[0] + Math.floor(R() * rr[2]), rr[1] + Math.floor(R() * rr[3]), 1, 1, p.road2);
    }
    // pond
    var pd = L.pond;
    drawEllipse(c, pd.cx, pd.cy, pd.rx + 3, pd.ry + 2, p.sand);
    drawEllipse(c, pd.cx, pd.cy, pd.rx, pd.ry, p.water);
    drawEllipse(c, pd.cx + 3, pd.cy + 3, pd.rx - 8, pd.ry - 6, p.water2);
    px(c, pd.cx - 14, pd.cy - 7, 6, 1, p.water3);
    px(c, pd.cx + 8, pd.cy - 4, 4, 1, p.water3);
    px(c, pd.cx - pd.rx + 7, pd.cy + 2, 4, 2, p.lily);
    px(c, pd.cx + pd.rx - 12, pd.cy - 6, 3, 2, p.lily);
    px(c, pd.cx - pd.rx + 8, pd.cy + 1, 1, 1, p.flower[0]);
    // flowers
    for (var f = 0; f < 70; f++) {
      var fx = Math.floor(R() * L.W), fy = Math.floor(R() * L.H);
      if (inPond(fx, fy, 5)) continue;
      px(c, fx, fy, 1, 1, p.flower[Math.floor(R() * p.flower.length)]);
    }
    // houses + trees, back to front
    var things = [];
    for (var h = 0; h < L.houses.length; h++) things.push({ y: L.houses[h][1] + HH, f: drawHouse.bind(null, c, houseBox(h), HOUSES[h].roof, { heart: HOUSES[h].heart }) });
    things.push({ y: L.hall[1] + GH, f: drawHouse.bind(null, c, hallBox(), 'hall', { hall: true }) });
    L.trees.forEach(function (t) { things.push({ y: t[1] + 12, f: drawTree.bind(null, c, t[0], t[1]) }); });
    things.sort(function (a, b) { return a.y - b.y; }).forEach(function (t) { t.f(); });
  }

  /* ---------------- sprites ---------------- */
  function drawPerson(c, m) {
    var x = Math.round(m.x) - 2, y = Math.round(m.y) - 8, s = m.look, step = m.moving ? (Math.floor(m.anim) % 2) : 0;
    px(c, x, y + 8, 5, 1, P().shadow);
    px(c, x + 1, y, 3, 1, s.hair);
    px(c, x, y + 1, 5, 1, s.hair);
    px(c, x, y + 2, 5, 2, s.skin);
    if (m.dir >= 0) px(c, x + 3, y + 2, 1, 1, '#4a3f3f'); else px(c, x + 1, y + 2, 1, 1, '#4a3f3f');
    px(c, x, y + 2, m.dir >= 0 ? 1 : 0, 2, s.hair);
    px(c, x, y + 4, 5, 2, s.shirt);
    px(c, x + 1, y + 6, 1, 2 - step, s.pants);
    px(c, x + 3, y + 6, 1, 1 + step, s.pants);
  }

  function drawCat(c, m) {
    var x = Math.round(m.x) - 3, y = Math.round(m.y) - 4, col = night ? '#c9b29a' : '#f7c58f', dk = night ? '#9c8670' : '#e3a76c';
    var f = m.dir >= 0;
    px(c, x, y + 4, 7, 1, P().shadow);
    px(c, x + 1, y + 1, 5, 2, col);                               // body
    px(c, f ? x + 4 : x, y - 1, 3, 3, col);                       // head
    px(c, f ? x + 4 : x, y - 2, 1, 1, dk); px(c, f ? x + 6 : x + 2, y - 2, 1, 1, dk); // ears
    px(c, f ? x + 5 : x + 1, y, 1, 1, '#4a3f3f');                 // eye
    if (m.sitting) { px(c, f ? x : x + 6, y, 1, 2, dk); }         // tail up
    else {
      var st = Math.floor(m.anim) % 2;
      px(c, f ? x : x + 6, y + 1, 1, 1, dk);
      px(c, x + 1, y + 3, 1, 1 - st, dk); px(c, x + 5, y + 3, 1, st, dk);
      px(c, x + 2, y + 3, 1, st, dk); px(c, x + 4, y + 3, 1, 1 - st, dk);
    }
  }

  function drawDog(c, m) {
    var x = Math.round(m.x) - 4, y = Math.round(m.y) - 5, col = night ? '#d9cfc2' : '#fff4e8', dk = night ? '#8a7560' : '#c49674';
    var f = m.dir >= 0, st = m.moving ? Math.floor(m.anim) % 2 : 0;
    px(c, x, y + 5, 9, 1, P().shadow);
    px(c, x + 1, y + 1, 6, 3, col);
    px(c, f ? x + 5 : x - 1, y - 1, 4, 3, col);
    px(c, f ? x + 5 : x + 2, y - 1, 1, 3, dk);                     // floppy ear
    px(c, f ? x + 7 : x, y, 1, 1, '#4a3f3f');
    px(c, f ? x + 8 : x - 1, y + 1, 1, 1, '#4a3f3f');              // nose
    px(c, f ? x : x + 7, y + (m.moving ? st : 0), 1, 2, dk);       // wagging tail
    px(c, x + 1, y + 4, 1, 1, dk); px(c, x + 6, y + 4, 1, 1, dk);
    px(c, x + 2 + st, y + 4, 1, 1, dk);
  }

  function drawFish(c, f) {
    var x = Math.round(f.x), y = Math.round(f.y), col = night ? '#e0a070' : '#ff9a6b';
    if (f.jump > 0) {
      var h = Math.round(Math.sin(f.jump * Math.PI) * 6);
      px(c, x - 1, y - h, 3, 1, col); px(c, f.dir > 0 ? x - 2 : x + 2, y - h - 1, 1, 1, col);
      if (f.jump > 0.85 || f.jump < 0.15) px(c, x - 2, y + 1, 5, 1, P().water3);
      return;
    }
    px(c, x - 1, y, 3, 1, col);
    px(c, f.dir > 0 ? x - 2 : x + 2, y - (Math.floor(f.anim) % 2), 1, 1, col);
  }

  /* ---------------- actors ---------------- */
  function spawn() {
    var pts = waypoints();
    people = PEOPLE.map(function (look, i) {
      var p0 = pts[(i * 3) % pts.length];
      return { look: look, x: p0.x, y: p0.y, tx: p0.x, ty: p0.y, speed: rnd(9, 13), wait: rnd(0, 2), anim: 0, dir: 1, moving: false };
    });
    var a = pts[pts.length - 2], b = pts[pts.length - 4];
    pets = [
      { kind: 'cat', x: a.x, y: a.y, tx: a.x, ty: a.y, speed: 7, wait: 2, anim: 0, dir: 1, moving: false, sitting: true },
      { kind: 'dog', x: b.x, y: b.y, tx: b.x, ty: b.y, speed: 14, wait: 1, anim: 0, dir: -1, moving: false, buddy: 0 }
    ];
    fish = [0, 1, 2].map(function (i) {
      return { a: rnd(0, 6.28), r: rnd(0.3, 0.7), sp: rnd(0.25, 0.5) * (i % 2 ? 1 : -1), x: 0, y: 0, dir: 1, anim: 0, jump: 0 };
    });
    flies = [];
    for (var i = 0; i < 9; i++) flies.push({ x: rnd(0, L.W), y: rnd(0, L.H), ph: rnd(0, 6.28) });
  }

  function pickTarget(m, i) {
    var pts = waypoints(), from = { x: m.x, y: m.y }, t;
    if (urgent.length && m.look) {
      var d = doorOf(hallBox());
      var spots = [[-8, 2], [8, 2], [-4, 5], [4, 5], [-12, 5], [12, 5]];
      var s = spots[i % spots.length];
      return { x: d.x + s[0], y: d.y + s[1] };
    }
    for (var n = 0; n < 12; n++) {
      t = pts[Math.floor(Math.random() * pts.length)];
      t = { x: t.x + rnd(-3, 3), y: t.y + rnd(-1, 2) };
      if (!inPond(t.x, t.y, 4) && !crossesPond(from, t)) return t;
    }
    return from;
  }

  function moveActor(m, dt, i) {
    var dx = m.tx - m.x, dy = m.ty - m.y, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 0.6) {
      m.moving = false;
      m.wait -= dt;
      if (m.wait <= 0) {
        var t;
        if (m.kind === 'dog' && Math.random() < 0.6) {     // likes to tag along with someone
          var buddy = people[m.buddy % people.length];
          t = { x: buddy.x + (Math.random() < 0.5 ? -7 : 7), y: buddy.y + 1 };
          if (Math.random() < 0.2) m.buddy++;
        } else t = pickTarget(m, i);
        m.tx = Math.max(4, Math.min(L.W - 4, t.x)); m.ty = Math.max(10, Math.min(L.H - 2, t.y));
        m.wait = urgent.length && m.look ? rnd(0.5, 1.5) : rnd(1.5, 5);
        if (m.kind === 'cat') { m.sitting = Math.random() < 0.5; if (m.sitting) { m.tx = m.x; m.ty = m.y; m.wait = rnd(3, 7); } }
      }
      return;
    }
    var step = Math.min(dist, m.speed * dt);
    m.x += dx / dist * step; m.y += dy / dist * step;
    if (Math.abs(dx) > 0.3) m.dir = dx > 0 ? 1 : -1;
    m.moving = true; m.anim += dt * 6;
    if (m.kind === 'cat') m.sitting = false;
  }

  function update(dt) {
    people.forEach(function (m, i) { moveActor(m, dt, i); });
    pets.forEach(function (m, i) { moveActor(m, dt, i); });
    var pd = L.pond;
    fish.forEach(function (f) {
      f.a += f.sp * dt; f.anim += dt * 3;
      var nx = pd.cx + Math.cos(f.a) * (pd.rx - 6) * f.r, ny = pd.cy + Math.sin(f.a) * (pd.ry - 4) * f.r;
      f.dir = nx > f.x ? 1 : -1; f.x = nx; f.y = ny;
      if (f.jump > 0) { f.jump += dt * 1.4; if (f.jump >= 1) f.jump = 0; }
      else if (Math.random() < dt * 0.04) f.jump = 0.01;
    });
    flies.forEach(function (f) { f.ph += dt; f.x += Math.cos(f.ph * 0.7) * dt * 3; f.y += Math.sin(f.ph * 0.9) * dt * 2; });
  }

  function render(time) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(bg, 0, 0);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    fish.forEach(function (f) { if (!f.jump) drawFish(ctx, f); });
    var actors = people.map(function (m) { return { y: m.y, f: function () { drawPerson(ctx, m); } }; })
      .concat(pets.map(function (m) { return { y: m.y, f: function () { (m.kind === 'cat' ? drawCat : drawDog)(ctx, m); } }; }));
    actors.sort(function (a, b) { return a.y - b.y; }).forEach(function (a) { a.f(); });
    fish.forEach(function (f) { if (f.jump) drawFish(ctx, f); });
    // the Town Hall bell glows while something is due
    if (urgent.length && Math.floor(time / 500) % 2) {
      var g = hallBox();
      px(ctx, g.x + g.w / 2 - 1, g.y + Math.round(g.h * 0.45) - 7, 3, 2, '#ff8a8a');
    }
    if (night) {
      flies.forEach(function (f) {
        if (Math.sin(f.ph * 2) > 0.2) px(ctx, Math.round(f.x) % L.W, Math.round(f.y) % L.H, 1, 1, '#fff2a8');
      });
    }
  }

  function loop(t) {
    if (!running) return;
    if (!canvas.offsetParent || document.hidden) { running = false; return; }
    var dt = Math.min(0.1, (t - (lastT || t)) / 1000);
    lastT = t; acc += dt;
    if (acc >= 1 / 30) { update(acc); render(t); acc = 0; }   // ~30 fps is plenty for pixels
    requestAnimationFrame(loop);
  }
  function start() {
    if (running || !canvas) return;
    running = true; lastT = 0;
    requestAnimationFrame(loop);
  }

  /* ---------------- size / theme ---------------- */
  function fit() {
    if (!root || !root.offsetParent) return;
    var wantPort = window.innerWidth < window.innerHeight * 0.9;
    var m = wantPort ? 'port' : 'land';
    var cssW = root.clientWidth;
    var dpr = window.devicePixelRatio || 1;
    var newL = LAYOUTS[m];
    var s = Math.max(1, Math.round(cssW * dpr / newL.W));
    var n = isNight();
    if (m === mode && s === scale && n === night && bg) return;
    var changedLayout = m !== mode;
    mode = m; L = newL; scale = s; night = n;
    root.style.aspectRatio = L.W + ' / ' + L.H;
    root.classList.toggle('village-port', m === 'port');
    canvas.width = L.W * scale; canvas.height = L.H * scale;
    ctx.imageSmoothingEnabled = false;
    drawBackground();
    if (changedLayout || !people.length) spawn();
    renderLabels();
    render(0);
  }

  /* ---------------- labels / taps (only after the password) ---------------- */
  function pct(v, of) { return (v / of * 100).toFixed(3) + '%'; }

  function renderLabels() {
    if (!labelsEl || !L) return;
    root.classList.toggle('village-unlocked', unlocked());
    if (!unlocked()) { labelsEl.innerHTML = ''; return; }
    var html = '';
    HOUSES.forEach(function (h, i) {
      var b = houseBox(i);
      html += '<button type="button" class="village-spot' + (h.open ? '' : ' soon') + '" data-house="' + h.id + '" style="left:' +
        pct(b.x - 2, L.W) + ';top:' + pct(b.y - 1, L.H) + ';width:' + pct(b.w + 4, L.W) + ';height:' + pct(b.h + 4, L.H) + '">' +
        '<span class="village-tag">' + h.label + '</span></button>';
    });
    var g = hallBox();
    html += '<button type="button" class="village-spot hall' + (urgent.length ? ' alert' : '') + '" data-house="hall" style="left:' +
      pct(g.x - 2, L.W) + ';top:' + pct(g.y - 10, L.H) + ';width:' + pct(g.w + 4, L.W) + ';height:' + pct(g.h + 14, L.H) + '">' +
      '<span class="village-tag">Town Hall' + (urgent.length ? ' <b>' + urgent.length + '</b>' : '') + '</span></button>';
    labelsEl.innerHTML = html;
  }

  function openHouse(id) {
    if (!unlocked()) return;
    if (id === 'hall') { openHall(); return; }
    var h = HOUSES.filter(function (x) { return x.id === id; })[0];
    if (!h) return;
    if (!h.open || typeof window[h.open] !== 'function') { toast('Coming soon ✿'); return; }
    requirePersonal(window[h.open]);
  }

  function openHall() {
    var box = document.getElementById('village-hall-list');
    if (!urgent.length) {
      box.innerHTML = '<div class="village-hall-empty">All calm in the village ✿</div>';
    } else {
      box.innerHTML = urgent.map(function (t) {
        var late = t.eff < t.today;
        return '<div class="home-work-row prio-' + t.priority + '"><span>' + icdEscape(t.title) + '</span>' +
          '<span class="work-due' + (late ? ' over' : '') + '">' + (late ? 'late · ' : '') + workFmtDue(t.eff) + '</span></div>';
      }).join('');
    }
    document.getElementById('village-hall-modal').classList.add('active');
  }

  /* ---------------- what's due (Work) ---------------- */
  function addDays(d, n) {
    var t = new Date(d + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() + n);
    return t.toISOString().slice(0, 10);
  }
  function loadUrgent() {
    if (!unlocked() || typeof workEffDue_ !== 'function') { setUrgent([]); return; }
    google.script.run
      .withSuccessHandler(function (d) {
        if (!d || !d.tasks) { setUrgent([]); return; }
        var soon = addDays(d.today, 1);
        var list = d.tasks.filter(function (t) { return t.status !== 'done'; })
          .map(function (t) { return { title: t.title, priority: t.priority, eff: workEffDue_(t), today: d.today }; })
          .filter(function (t) { return t.eff && t.eff <= soon; })
          .sort(function (a, b) { return a.eff < b.eff ? -1 : a.eff > b.eff ? 1 : 0; });
        setUrgent(list);
      })
      .withFailureHandler(function () { setUrgent([]); })
      .getWorkData();
  }
  function setUrgent(list) {
    var was = urgent.length;
    urgent = list || [];
    if (!!was !== !!urgent.length) {
      people.forEach(function (m) { m.wait = 0; m.tx = m.x; m.ty = m.y; });   // re-pick targets now
    }
    renderLabels();
  }

  /* ---------------- public ---------------- */
  function build() {
    root = document.getElementById('village');
    if (!root) return false;
    canvas = document.getElementById('village-canvas');
    ctx = canvas.getContext('2d');
    labelsEl = document.getElementById('village-labels');
    starBtn = document.getElementById('village-star');

    starBtn.onclick = function (e) {
      e.stopPropagation();
      if (unlocked()) { lockPersonal(); villageRefresh(); return; }
      openPersonalGate(function () { villageRefresh(); });
    };
    labelsEl.addEventListener('click', function (e) {
      var b = e.target.closest('.village-spot');
      if (b) openHouse(b.dataset.house);
    });
    document.getElementById('village-hall-close').onclick = function () {
      document.getElementById('village-hall-modal').classList.remove('active');
    };
    document.getElementById('village-hall-work').onclick = function () {
      document.getElementById('village-hall-modal').classList.remove('active');
      requirePersonal(openWork);
    };
    window.addEventListener('resize', function () { fit(); });
    new MutationObserver(function () { fit(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq.addEventListener) mq.addEventListener('change', fit);
    }
    document.addEventListener('visibilitychange', function () { if (!document.hidden && root.offsetParent) start(); });
    built = true;
    return true;
  }

  // Called whenever the Personal section is shown, and after lock / unlock.
  function villageRefresh() {
    if (!built && !build()) return;
    if (!root.offsetParent) return;
    fit();
    renderLabels();
    if (unlocked()) loadUrgent(); else setUrgent([]);
    start();
  }

  window.villageRefresh = villageRefresh;
})();
