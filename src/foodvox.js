/**
 * foodvox.js — the menu-book dishes as little 3D block models (16 blocks across), for the Love table.
 * Each FoodArt template ('bowl', 'cup', 'burger'…) is built here from blocks, using the same colours
 * as its pixel drawing. Glass and ice go into a second, see-through mesh so drinks show their layers.
 */
import * as THREE from 'three';

const N = 16;
const hex = (c) => {
  if (typeof c === 'number') return c;
  if (!c) return 0xffffff;
  if (c[0] === '#') return parseInt(c.length === 4 ? c.slice(1).split('').map((h) => h + h).join('') : c.slice(1, 7), 16);
  const m = c.match(/(\d+)\D+(\d+)\D+(\d+)/); return m ? (+m[1] << 16) | (+m[2] << 8) | +m[3] : 0xffffff;
};
const shade = (c, k) => { c = hex(c); const f = (v) => Math.max(0, Math.min(255, Math.round(v * k))); return (f(c >> 16 & 255) << 16) | (f(c >> 8 & 255) << 8) | f(c & 255); };
const hash = (x, y, z) => { let h = (x * 374761393 + y * 668265263 + z * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };

function makeVox() {
  const S = new Map(), G = new Map(), K = (x, y, z) => x + ',' + y + ',' + z;
  const v = {
    S, G,
    put(x, y, z, c, glass) { x = Math.round(x); y = Math.round(y); z = Math.round(z); if (y < 0) return; if (glass && S.has(K(x, y, z))) return; (glass ? G : S).set(K(x, y, z), hex(c)); if (!glass) G.delete(K(x, y, z)); },
    del(x, y, z) { S.delete(K(x, y, z)); G.delete(K(x, y, z)); },
    has(x, y, z) { return S.has(K(x, y, z)); },
    // filled shapes; c may be a colour or a function (x, y, z) → colour
    each(fn) { for (let y = 0; y < 20; y++) for (let z = -2; z < N + 2; z++) for (let x = -2; x < N + 2; x++) fn(x, y, z); },
    fill(test, c, glass) { v.each((x, y, z) => { if (test(x + 0.5, y + 0.5, z + 0.5)) v.put(x, y, z, typeof c === 'function' ? c(x, y, z) : c, glass); }); },
    cuboid(x0, y0, z0, x1, y1, z1, c, glass) { for (let y = y0; y < y1; y++) for (let z = z0; z < z1; z++) for (let x = x0; x < x1; x++) v.put(x, y, z, typeof c === 'function' ? c(x, y, z) : c, glass); },
    // a vertical cylinder (or cone when r0 ≠ r1) from y0 to y1, centre (cx, cz)
    cyl(cx, cz, r0, y0, y1, c, r1, hollow, glass) {
      r1 = r1 == null ? r0 : r1;
      for (let y = y0; y < y1; y++) {
        const r = y1 - y0 <= 1 ? r0 : r0 + (r1 - r0) * (y - y0) / (y1 - y0 - 1);
        for (let z = -2; z < N + 2; z++) for (let x = -2; x < N + 2; x++) {
          const d = Math.hypot(x + 0.5 - cx, z + 0.5 - cz);
          if (d <= r && (!hollow || d > r - hollow)) v.put(x, y, z, typeof c === 'function' ? c(x, y, z) : c, glass);
        }
      }
    },
    ell(cx, cy, cz, rx, ry, rz, c, keep) { v.fill((x, y, z) => { const a = (x - cx) / rx, b = (y - cy) / ry, d = (z - cz) / rz; return a * a + b * b + d * d <= 1 && (!keep || keep(x, y, z)); }, c); },
    // a cylinder lying along x
    log(x0, x1, cy, cz, r, c) { for (let x = x0; x < x1; x++) for (let y = 0; y < 20; y++) for (let z = -2; z < N + 2; z++) if (Math.hypot(y + 0.5 - cy, z + 0.5 - cz) <= r) v.put(x, y, z, typeof c === 'function' ? c(x, y, z) : c); },
    top(x, z) { for (let y = 19; y >= 0; y--) if (v.has(x, y, z)) return y; return -1; },
    // little bits of topping sitting on whatever is underneath
    sprinkle(spots, colors, w, h) {
      spots.forEach(([x, z], k) => {
        const c = colors[k % colors.length]; if (!c) return;
        let y = -1; for (let dz = 0; dz < (h || w || 1); dz++) for (let dx = 0; dx < (w || 1); dx++) y = Math.max(y, v.top(x + dx, z + dz));
        for (let dz = 0; dz < (h || w || 1); dz++) for (let dx = 0; dx < (w || 1); dx++) v.put(x + dx, y + 1, z + dz, c);
      });
    }
  };
  return v;
}

const C = 8;                                     // the middle of the 16 × 16 footprint
const SPOTS = [[4, 5], [9, 4], [6, 9], [10, 9], [3, 8], [8, 11], [11, 6], [5, 12]];

const BUILD = {
  bowl(v, o) {
    v.cyl(C, C, 3.2, 0, 1, 0xe3d3c6);
    v.cyl(C, C, 3.2, 1, 2, 0xffffff);
    v.cyl(C, C, 3.8, 2, 6, o.soup || '#f3d9a8', 6.2);
    v.cyl(C, C, 4.2, 1, 7, (x, y) => (y === 6 ? 0xf6a9bd : shade(0xffffff, 0.93 + y * 0.012)), 7.6, 1.2);
    if (o.noodle) v.fill((x, y, z) => y > 5 && y < 6.9 && Math.hypot(x - C, z - C) < 5.6 && ((Math.floor(x) + Math.floor(z) * 2) % 5 === 0), o.noodle);
    v.sprinkle(SPOTS.slice(0, 6), o.top || [], 2, 2);
    if (o.egg) { v.cuboid(9, 6, 9, 12, 7, 11, 0xffffff); v.put(10, 7, 10, 0xffc23a); }
  },
  pot(v, o) {
    v.cyl(C, C, 6.8, 0, 6, (x, y) => (y === 5 ? 0x9a9aa8 : 0x8a8a98), 6.8, 1.1);
    v.cyl(C, C, 6, 0, 1, 0x74747f);
    v.cyl(C, C, 5.8, 1, 5, o.soup || '#e8603f');
    v.cuboid(0, 4, 7, 1, 5, 9, 0x74747f); v.cuboid(15, 4, 7, 16, 5, 9, 0x74747f);
    v.sprinkle(SPOTS, o.top || [], 2, 1);
  },
  plate(v, o) {
    v.cyl(C, C, 6.4, 0, 1, 0xe8dccf); v.cyl(C, C, 7.8, 1, 2, 0xffffff); v.cyl(C, C, 6.2, 1, 2, 0xf6eee6);
    if (o.rice) v.ell(o.main ? 5.5 : C, 2, C, o.main ? 3.6 : 5, 2.8, o.main ? 4.2 : 4.6, (x, y, z) => shade(o.rice, 0.94 + hash(x, y, z) * 0.1), (x, y) => y >= 2);
    if (o.sauce) v.cyl(o.rice ? 10.5 : C, C, o.rice ? 3.4 : 5.2, 2, 3, o.sauce);
    if (o.main) { v.cuboid(8, 2, 5, 13, 4, 11, o.main); v.cuboid(8, 4, 5, 13, 5, 11, shade(o.main, 1.2)); }
    if (o.egg) { v.cyl(4.5, 11.5, 2.4, 2, 3, 0xffffff); v.put(4, 3, 11, 0xffc23a); }
    if (o.veg) { v.cuboid(11, 2, 11, 14, 3, 13, o.veg); v.put(12, 3, 12, shade(o.veg, 0.8)); }
    v.sprinkle(SPOTS, o.dots || [], 2, 2);
  },
  bread(v) {
    v.ell(C, 2.6, C, 7.2, 2.6, 2.8, 0xe8b46a, (x, y) => y >= 0);
    for (let x = 3; x < 13; x++) for (let y = 3; y < 6; y++) for (let z = 7; z < 9; z++) v.del(x, y, z);
    for (let x = 3; x < 13; x++) { v.put(x, 3, 7, ['#ff8f7a', '#7fc46a', '#b5654a', '#ffb3a3'][(x >> 1) % 4]); v.put(x, 3, 8, x % 2 ? '#7fc46a' : '#f6e0b8'); }
    [3, 6, 9, 12].forEach((x) => { const y = v.top(x, 6); v.put(x, y, 6, 0xc98a3e); });
  },
  xeo(v) {
    v.fill((x, y, z) => y < 3 && z >= C && Math.hypot(x - C, z - C) <= 7.2 - (y > 2 ? 1 : 0), (x, y, z) => (Math.hypot(x - C, z - C) > 6.3 ? 0xd9a23a : y === 2 ? 0xffd96a : 0xf6c64a));
    [[5, '#ff9f8f'], [7, '#7fc46a'], [9, '#ffffff'], [11, '#7fc46a']].forEach(([x, c]) => { v.put(x, 0, 7, c); v.put(x, 1, 7, c); });
  },
  rolls(v, o) {
    v.cyl(C, C, 7.6, 0, 1, 0xffffff);
    [4, 8, 12].forEach((z) => v.log(2, 14, 2.6, z, 1.7, (x, y, zz) => (x === 13 || x === 2 ? hex(o.edge) : o.fill && hash(x, y, zz) > 0.86 ? hex(o.fill[(x + y) % 2]) : shade(o.roll, 0.95 + hash(x, y, zz) * 0.12))));
  },
  bun(v, o) {
    v.ell(C, 0, C, 6.2, 6, 6.2, (x, y, z) => (y > 4 && Math.hypot(x - C, z - C) < 1.8 ? 0xd8bea4 : o.bun), (x, y) => y >= 0);
    v.cyl(C, C, 5, 0, 1, 0xe3d3c6);
  },
  skewer(v, o) {
    v.cuboid(0, 3, 7, 16, 4, 8, 0xc49674);
    (o.bits || []).forEach((c, k) => v.cuboid(2 + k * 3, 1, 5, 4 + k * 3 + (k % 2), 6, 10, (x, y) => (y === 5 ? shade(c, 1.2) : c)));
  },
  corn(v) {
    v.log(2, 13, 2.8, C, 2.4, (x, y, z) => ((x + y + z) % 2 ? 0xffd36b : 0xf2b83a));
    v.cuboid(13, 1, 7, 16, 4, 9, 0xc49674);
    v.cuboid(5, 0, 3, 13, 1, 6, 0x7fc46a); v.cuboid(5, 0, 10, 13, 1, 13, 0x7fc46a); v.cuboid(6, 1, 4, 11, 2, 5, 0x6aa85a);
  },
  potato(v) {
    v.ell(C, 2.4, C, 6.5, 2.6, 3.6, 0x9a4a5a, (x, y) => y >= 0);
    for (let x = 4; x < 13; x++) for (let z = 7; z < 10; z++) { const y = v.top(x, z); v.put(x, y, z, 0xf6b35a); }
    v.put(4, 3, 6, 0x6a3a40); v.put(12, 2, 10, 0x6a3a40);
  },
  sushi(v, o) {
    [[2, 4], [9, 9]].forEach(([x, z]) => {
      v.cuboid(x, 0, z, x + 5, 3, z + 3, (xx, y, zz) => shade(0xffffff, 0.93 + hash(xx, y, zz) * 0.08));
      v.cuboid(x - 1, 3, z, x + 6, 4, z + 3, o.fish || '#ff9f80'); v.cuboid(x, 4, z, x + 5, 5, z + 3, shade(o.fish || '#ff9f80', 1.12));
      v.cuboid(x + 2, 0, z - 1, x + 3, 5, z + 4, 0x3a4a3a); v.cuboid(x + 2, 5, z, x + 3, 6, z + 3, 0x3a4a3a);
    });
  },
  onigiri(v) {
    v.fill((x, y, z) => y < 11 && z > 5 && z < 11 && Math.abs(x - C) <= (11.5 - y) * 0.55, (x, y, z) => shade(0xffffff, 0.94 + hash(x, y, z) * 0.07));
    v.cuboid(5, 0, 5, 11, 4, 12, 0x3a4a3a);
  },
  balls(v, o) {
    v.cyl(C, C, 7.4, 0, 1, 0xffffff);
    [[4, 6], [9, 5], [12, 10], [6, 11], [9, 9]].forEach(([x, z]) => {
      v.ell(x, 2.6, z, 2.3, 2.1, 2.3, o.ball || '#d99a4e', (xx, y) => y >= 1);
      v.put(x, 4, z, o.sauce || '#7a3f2c'); v.put(x - 1, 4, z, o.sauce || '#7a3f2c'); v.put(x, 5, z, 0x7fc46a);
    });
  },
  kimbap(v) {
    v.cyl(C, C, 7.4, 0, 1, 0xffffff);
    [[4, 5], [11, 6], [7, 11]].forEach(([x, z]) => {
      v.cyl(x, z, 2.8, 1, 4, 0x2f3a30); v.cyl(x, z, 2.1, 1, 4, 0xffffff);
      v.put(x, 3, z, 0xffd36b); v.put(x - 1, 3, z, 0xff8f5a); v.put(x, 3, z - 1, 0x7fc46a);
    });
  },
  dumpling(v) {
    [[4, 5], [11, 6], [7, 11]].forEach(([x, z], k) => {
      v.ell(x, 0.5, z, 3.6, 2.6, 2.4, (xx, y) => (y === 0 ? 0xe3b06a : y >= 2 && (xx + k) % 2 ? 0xe8d6b8 : 0xf8ecd8), (xx, y) => y >= 0);
    });
  },
  pizza(v) {
    v.fill((x, y, z) => y < 2 && z > 2 && Math.abs(x - C) <= (15 - z) * 0.55, (x, y) => (y === 1 ? 0xffd36b : 0xe8b46a));
    v.cuboid(1, 0, 1, 15, 3, 3, 0xd99a4e); v.cuboid(2, 3, 1, 14, 4, 3, 0xe8b46a);
    [[6, 5], [9, 6], [7, 9], [8, 12]].forEach(([x, z]) => v.cuboid(x, 2, z, x + 2, 3, z + 2, 0xd9503a));
    [[5, 7], [10, 9], [8, 4]].forEach(([x, z]) => v.put(x, 2, z, 0x7fc46a));
  },
  burger(v) {
    v.cyl(C, C, 6.2, 0, 2, 0xe8a54a);
    v.cyl(C, C, 6.6, 2, 3, 0x7fc46a);
    v.cyl(C, C, 6.4, 3, 5, 0x7a3f2c);
    v.cuboid(2, 5, 2, 14, 6, 14, 0xffd36b);
    v.cyl(C, C, 5.6, 6, 7, 0xe8503f);
    v.ell(C, 7, C, 6.4, 4.6, 6.4, 0xe8a54a, (x, y) => y >= 7);
    [[5, 6], [9, 5], [7, 9], [10, 9], [6, 11]].forEach(([x, z]) => v.put(x, v.top(x, z) + 1, z, 0xfff3d6));
  },
  fries(v) {
    [[4, 6], [6, 8], [8, 6], [10, 8], [5, 9], [9, 9], [7, 7], [11, 6]].forEach(([x, z], k) => v.cuboid(x, 4, z, x + 1, 11 + (k % 3), z + 1, (xx, y) => (y >= 10 + (k % 3) ? 0xf2b83a : 0xffd36b)));
    v.cyl(C, C, 4.6, 0, 9, 0xe8503f, 5.4);
    v.cuboid(6, 3, 12, 10, 6, 13, 0xffffff);
  },
  drumstick(v) {
    v.ell(6, 3.6, C, 4.8, 3.6, 3.8, (x, y) => (y > 5 ? 0xe8b46a : 0xd99a4e), (x, y) => y >= 0);
    v.log(10, 14, 3, C, 1.1, 0xfff8ee);
    v.ell(14.2, 3.4, 7, 1.4, 1.4, 1.4, 0xfff8ee); v.ell(14.2, 3.4, 9, 1.4, 1.4, 1.4, 0xfff8ee);
  },
  hotdog(v) {
    v.ell(C, 2, C, 7.2, 2.4, 3.4, 0xe8b46a, (x, y, z) => y >= 0 && !(y > 2 && Math.abs(z - C) < 1.2));
    v.log(0, 16, 3.2, C, 1.6, 0xd9503a);
    for (let x = 2; x < 14; x++) v.put(x, 5, C - 1 + ((x >> 1) % 2), 0xffd36b);
  },
  flan(v) {
    v.cyl(C, C, 7.4, 0, 1, 0xffffff);
    v.cyl(C, C, 5.4, 1, 7, (x, y) => (y === 6 ? 0x8a4a2a : 0xffd88a), 4.2);
    [[4, 8], [11, 7], [8, 4], [7, 12]].forEach(([x, z]) => { v.put(x, 5, z, 0x8a4a2a); v.put(x, 4, z, 0x8a4a2a); });
  },
  glass(v, o) {
    v.cyl(C, C, 3.6, 0, 13, 0xe8f6ff, 3.6, 0.9, true);
    v.cyl(C, C, 3.6, 0, 1, 0xc8e4f2);
    let y = 1; (o.layers || []).forEach((c) => { v.cyl(C, C, 2.8, y, y + 3, c); y += 3; });
    v.cyl(C, C, 2.8, y, y + 1, o.top || '#ffffff');
    v.cuboid(9, 6, 8, 10, 16, 9, 0xff8fb0);
  },
  cone(v, o) {
    v.cyl(C, C, 0.8, 0, 8, (x, y, z) => ((x + y + z) % 2 ? 0xe8b46a : 0xd99a4e), 3.4);
    v.ell(C, 10.5, C, 4.4, 4, 4.4, o.scoop || '#ffb6d0');
    v.put(C, 15, C, 0xe8503f); v.put(C, 14, C, 0xe8503f);
  },
  cake(v) {
    v.cyl(C, C, 6.2, 0, 6, (x, y, z) => (Math.hypot(x + 0.5 - C, z + 0.5 - C) > 5.3 && (y === 2 || y === 4) ? 0xff9fbf : 0xfff3e0));
    v.cyl(C, C, 6.4, 6, 7, 0xffffff);
    for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2; v.put(C + Math.cos(a) * 5, 7, C + Math.sin(a) * 5, 0xffffff); }
    v.cuboid(7, 7, 7, 9, 9, 9, 0xe8503f); v.put(8, 9, 8, 0x7fc46a);
  },
  donut(v) {
    v.fill((x, y, z) => { const r = Math.hypot(x - C, z - C); return y < 4 && (r - 4.4) ** 2 + (y - 1.6) ** 2 <= 2.9 ** 2; }, (x, y) => (y >= 2 ? 0xff9fbf : 0xe8b46a));
    [[4, 6, 0xffffff], [11, 6, 0x9fcfff], [6, 11, 0xffd36b], [11, 10, 0xffffff], [8, 3, 0x9fcfff]].forEach(([x, z, c]) => v.put(x, v.top(x, z) + 1, z, c));
  },
  cookie(v) {
    v.cyl(C, C, 6.6, 0, 2, (x, y, z) => shade(0xe8b46a, 0.95 + hash(x, y, z) * 0.1));
    v.cyl(C, C, 5, 2, 3, 0xe8b46a);
    [[5, 6], [9, 5], [7, 9], [11, 9], [5, 11], [9, 12]].forEach(([x, z]) => v.put(x, v.top(x, z), z, 0x6a3a2a));
  },
  mochi(v) {
    v.cuboid(1, 0, 3, 15, 1, 13, 0xd8c8b8);
    [[5, 9, 0xffd1e6], [11, 9, 0xcdeccd], [8, 5, 0xfff6e0]].forEach(([x, z, c]) => v.ell(x, 1, z, 3.2, 3, 3.2, c, (xx, y) => y >= 1));
  },
  cup(v, o) {
    v.cyl(C, C, 3.2, 0, 12, 0xf0f8ff, 3.9, 0.9, true);
    v.cyl(C, C, 3.2, 0, 1, 0xd0e6f2);
    v.cyl(C, C, 2.4, 1, 10, o.drink || '#d9b08a', 3);
    if (o.cream) v.cyl(C, C, 3, 10, 12, 0xffffff);
    if (o.boba) [[6, 7], [8, 9], [10, 8], [7, 10], [9, 6]].forEach(([x, z]) => v.put(x, 1, z, 0x3a2a2a));
    if (o.ice) [[6, 7], [9, 9]].forEach(([x, z]) => v.cuboid(x, 9, z, x + 2, 11, z + 2, 0xffffff, true));
    if (o.slice) v.fill((x, y, z) => x > 11 && x < 13 && Math.hypot(y - 11, z - C) < 2.4, (x, y, z) => (Math.hypot(y - 11, z - C) > 1.6 ? 0xffffff : hex(o.slice)));
    v.cyl(C, C, 4.2, 12, 13, 0xd8e8f2, 4.2, 0.9, true);
    v.cuboid(9, 6, 8, 10, 17, 9, 0xff8fb0);
  },
  coconut(v) {
    v.ell(C, 4.6, C, 5.8, 5, 5.8, (x, y, z) => (hash(x, y, z) > 0.85 ? 0x6aa85a : 0x7fc46a), (x, y) => y >= 0 && y < 9);
    v.cyl(C, C, 3.2, 8, 9, 0xfffaf0);
    v.cuboid(9, 8, 8, 10, 14, 9, 0xff8fb0);
  },
  mug(v, o) {
    v.cyl(C - 1, C, 4.2, 0, 9, 0xffffff, 4.2, 1);
    v.cyl(C - 1, C, 4.2, 0, 1, 0xe6d8cc);
    v.cyl(C - 1, C, 3.2, 1, 8, o.drink || '#c98a4a');
    v.cuboid(11, 2, 7, 13, 3, 9, 0xffffff); v.cuboid(11, 6, 7, 13, 7, 9, 0xffffff); v.cuboid(12, 3, 7, 13, 6, 9, 0xffffff);
    [[6, 10], [8, 12], [7, 14]].forEach(([x, y]) => v.put(x, y, C, 0xffffff, true));
  }
};

const FACES = [
  [[1, 0, 0], [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], 0.86],
  [[-1, 0, 0], [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]], 0.86],
  [[0, 1, 0], [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]], 1],
  [[0, -1, 0], [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], 0.6],
  [[0, 0, 1], [[1, 0, 1], [1, 1, 1], [0, 1, 1], [0, 0, 1]], 0.93],
  [[0, 0, -1], [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]], 0.93]
];
function mesh(map, solid, size, matl) {
  const pos = [], nor = [], col = [], idx = [], c = new THREE.Color();
  map.forEach((cv, key) => {
    const [x, y, z] = key.split(',').map(Number);
    const j = 0.94 + hash(x, y, z) * 0.1;
    FACES.forEach(([d, q, sh]) => {
      const nk = (x + d[0]) + ',' + (y + d[1]) + ',' + (z + d[2]);
      if (map.has(nk) || (solid && solid.has(nk))) return;
      c.setHex(cv, THREE.SRGBColorSpace);
      const n = pos.length / 3;
      q.forEach(([a, b, e]) => { pos.push((x + a - C) * size, (y + b) * size, (z + e - C) * size); nor.push(d[0], d[1], d[2]); col.push(c.r * sh * j, c.g * sh * j, c.b * sh * j); });
      idx.push(n, n + 1, n + 2, n, n + 2, n + 3);
    });
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  return new THREE.Mesh(g, matl);
}

const SOLID = new THREE.MeshLambertMaterial({ vertexColors: true });
const GLASS = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.42, depthWrite: false });
const cache = {};
/** a 3D block model of a dish; `size` is the whole footprint in world units */
export function foodModel(tpl, o, size) {
  const k = tpl + JSON.stringify(o || {});
  if (!cache[k]) {
    const v = makeVox();
    (BUILD[tpl] || BUILD.bowl)(v, o || {});
    cache[k] = v;
  }
  const v = cache[k], s = (size || 0.4) / N, grp = new THREE.Group();
  const m1 = mesh(v.S, null, s, SOLID); m1.castShadow = true; grp.add(m1);
  if (v.G.size) { const m2 = mesh(v.G, v.S, s, GLASS); m2.renderOrder = 2; grp.add(m2); }
  return grp;
}
