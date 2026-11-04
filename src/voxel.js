/**
 * src/voxel.js — the village's own blocky look: 1 block = 1 m, pixel textures drawn here
 * (pastel, 16×16 per tile), a block grid, and a mesher that only builds the faces you can see.
 * Imported by village3d.js (esbuild bundles it).
 */
import * as THREE from 'three';

/* ---------------- pixel textures (drawn in code, 16×16 tiles in one atlas) ---------------- */
const TILE = 16, COLS = 8, ROWS = 6;
function rngT(seed) { return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }
const hex = (n) => '#' + ('00000' + n.toString(16)).slice(-6);
function shade(n, k) {
  const r = Math.min(255, Math.max(0, ((n >> 16) & 255) * k)), g = Math.min(255, Math.max(0, ((n >> 8) & 255) * k)), b = Math.min(255, Math.max(0, (n & 255) * k));
  return 'rgb(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ')';
}
// each tile: (ctx, R) → draws 16×16 at 0,0
const DRAW = {
  noise: (base, spread) => (x, R) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) { x.fillStyle = shade(base, 1 - spread / 2 + R() * spread); x.fillRect(i, j, 1, 1); } },
  grassTop: (x, R) => { DRAW.noise(0xa9dc8e, 0.16)(x, R); for (let k = 0; k < 14; k++) { x.fillStyle = shade(0x8fcc78, 0.95 + R() * 0.1); x.fillRect(R() * 16 | 0, R() * 16 | 0, 1, 1); } },
  grassSide: (x, R) => { DRAW.dirt(x, R); for (let i = 0; i < 16; i++) { const h = 3 + (R() * 2.2 | 0); for (let j = 0; j < h; j++) { x.fillStyle = shade(0xa9dc8e, 0.9 + R() * 0.15); x.fillRect(i, j, 1, 1); } } },
  dirt: (x, R) => { DRAW.noise(0xb88a62, 0.18)(x, R); for (let k = 0; k < 10; k++) { x.fillStyle = shade(0x9a7050, 1); x.fillRect(R() * 16 | 0, R() * 16 | 0, 1, 1); } },
  stone: (x, R) => { DRAW.noise(0xb4b2b8, 0.12)(x, R); for (let k = 0; k < 6; k++) { x.fillStyle = shade(0x9c9aa2, 1); const a = R() * 14 | 0, b = R() * 16 | 0; x.fillRect(a, b, 2 + (R() * 3 | 0), 1); } },
  sand: (x, R) => DRAW.noise(0xf3e2b6, 0.1)(x, R),
  pathTop: (x, R) => { DRAW.noise(0xe9d3a4, 0.14)(x, R); for (let k = 0; k < 12; k++) { x.fillStyle = shade(0xd2b98a, 1); x.fillRect(R() * 16 | 0, R() * 16 | 0, 1, 1); } },
  pathSide: (x, R) => { DRAW.dirt(x, R); x.fillStyle = shade(0xe9d3a4, 1); x.fillRect(0, 0, 16, 2); },
  snowTop: (x, R) => DRAW.noise(0xfbfbff, 0.05)(x, R),
  snowSide: (x, R) => { DRAW.stone(x, R); for (let i = 0; i < 16; i++) { const h = 3 + (R() * 3 | 0); x.fillStyle = shade(0xfbfbff, 0.97 + R() * 0.03); x.fillRect(i, 0, 1, h); } },
  logSide: (x, R) => { for (let i = 0; i < 16; i++) { const c = i % 4 === 0 ? 0x7d5a40 : 0x9a7052; for (let j = 0; j < 16; j++) { x.fillStyle = shade(c, 0.9 + R() * 0.2); x.fillRect(i, j, 1, 1); } } },
  logTop: (x, R) => { DRAW.noise(0xd9b383, 0.08)(x, R); x.strokeStyle = shade(0xb08a60, 1); x.lineWidth = 1; [6, 3].forEach((r) => { x.strokeRect(8 - r + 0.5, 8 - r + 0.5, r * 2 - 1, r * 2 - 1); }); x.strokeStyle = shade(0x8a6a4c, 1); x.strokeRect(0.5, 0.5, 15, 15); },
  leaves: (base) => (x, R) => { DRAW.noise(base, 0.22)(x, R); for (let k = 0; k < 22; k++) { x.fillStyle = shade(base, 0.72); x.fillRect(R() * 16 | 0, R() * 16 | 0, 1, 1); } for (let k = 0; k < 10; k++) { x.fillStyle = shade(base, 1.12); x.fillRect(R() * 16 | 0, R() * 16 | 0, 1, 1); } },
  water: (x, R) => { DRAW.noise(0x6aaee8, 0.08)(x, R); for (let k = 0; k < 7; k++) { x.fillStyle = 'rgba(255,255,255,0.55)'; x.fillRect(R() * 13 | 0, R() * 16 | 0, 2 + (R() * 3 | 0), 1); } },
  birch: (x, R) => { DRAW.noise(0xf4f0e6, 0.06)(x, R); for (let k = 0; k < 8; k++) { x.fillStyle = '#5a5050'; x.fillRect(R() * 14 | 0, R() * 16 | 0, 2 + (R() * 2 | 0), 1); } },
  cobble: (x, R) => { DRAW.noise(0xa8a6ae, 0.1)(x, R); x.fillStyle = shade(0x84828c, 1); for (let j = 0; j < 16; j += 4) { x.fillRect(0, j, 16, 1); for (let i = (j / 4 % 2) * 3; i < 16; i += 6) x.fillRect(i, j, 1, 4); } },
  deep: (x, R) => DRAW.noise(0x8e8a98, 0.16)(x, R),
  clay: (x, R) => { DRAW.noise(0xc59a7a, 0.12)(x, R); for (let j = 3; j < 16; j += 5) { x.fillStyle = shade(0xb3876a, 1); x.fillRect(0, j, 16, 1); } },
  gravel: (x, R) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) { x.fillStyle = shade([0xbdb6ac, 0xa8a196, 0xd2cbc0][R() * 3 | 0], 1); x.fillRect(i, j, 1, 1); } },
  planks: (x, R) => { for (let j = 0; j < 16; j++) { const b = j % 4 === 3; for (let i = 0; i < 16; i++) { x.fillStyle = b ? '#9a7254' : shade(0xd4a878, 0.92 + R() * 0.12); x.fillRect(i, j, 1, 1); } } for (let j = 0; j < 16; j += 4) { x.fillStyle = '#9a7254'; x.fillRect((j * 3) % 16, j, 1, 3); } },
  mossy: (x, R) => { DRAW.cobble(x, R); for (let k = 0; k < 40; k++) { x.fillStyle = shade(0x8fcc78, 0.9 + R() * 0.2); x.fillRect(R() * 16 | 0, R() * 16 | 0, 1, 1); } },
  // greyscale tiles that take a colour from the material (roofs, walls, wool…)
  shingle: (x, R) => { for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) { const row = j >> 2, edge = j % 4 === 3 || (i + row * 4) % 8 === 0; x.fillStyle = shade(0xffffff, edge ? 0.78 : 0.94 + R() * 0.06); x.fillRect(i, j, 1, 1); } },
  plaster: (x, R) => DRAW.noise(0xffffff, 0.07)(x, R),
  plankGrey: (x, R) => { for (let j = 0; j < 16; j++) { const b = j % 4 === 3; for (let i = 0; i < 16; i++) { x.fillStyle = shade(0xffffff, b ? 0.72 : 0.9 + R() * 0.1); x.fillRect(i, j, 1, 1); } } },
  glass: (x, R) => { x.fillStyle = '#d8f1fa'; x.fillRect(0, 0, 16, 16); x.fillStyle = '#ffffff'; x.fillRect(3, 3, 1, 4); x.fillRect(4, 3, 1, 2); x.fillRect(10, 9, 1, 3); x.fillStyle = '#bcd9e6'; x.fillRect(0, 0, 16, 1); x.fillRect(0, 15, 16, 1); x.fillRect(0, 0, 1, 16); x.fillRect(15, 0, 1, 16); x.fillRect(7, 0, 2, 16); x.fillRect(0, 7, 16, 2); },
  bricks: (x, R) => { for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) { const m = j % 4 === 3 || (i + (j >> 2) % 2 * 4) % 8 === 7; x.fillStyle = m ? '#e9e2d6' : shade(0xffffff, 0.86 + R() * 0.08); x.fillRect(i, j, 1, 1); } },
  stoneBrick: (x, R) => { for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) { const m = j % 8 === 7 || (i + (j >> 3) * 8) % 16 === 15; x.fillStyle = m ? '#8c8a94' : shade(0xb6b4bc, 0.9 + R() * 0.12); x.fillRect(i, j, 1, 1); } },
  farmland: (x, R) => { DRAW.noise(0x7a5a40, 0.14)(x, R); for (let j = 1; j < 16; j += 4) { x.fillStyle = '#5e4430'; x.fillRect(0, j, 16, 1); } },
  sprucePlank: (x, R) => { for (let j = 0; j < 16; j++) { const b = j % 4 === 3; for (let i = 0; i < 16; i++) { x.fillStyle = b ? '#5e4430' : shade(0x8a6448, 0.9 + R() * 0.12); x.fillRect(i, j, 1, 1); } } for (let j = 0; j < 16; j += 4) { x.fillStyle = '#5e4430'; x.fillRect((j * 5) % 16, j, 1, 3); } },
  wheat: (x, R) => { for (let i = 1; i < 15; i += 2) { const h = 9 + (R() * 5 | 0); x.fillStyle = '#c9b45a'; x.fillRect(i, 16 - h, 1, h); x.fillStyle = '#f2d36b'; x.fillRect(i, 16 - h, 1, 4); } },
  carrot: (x, R) => { for (let i = 2; i < 14; i += 3) { x.fillStyle = '#6faa5e'; x.fillRect(i, 7, 1, 6); x.fillRect(i + 1, 8, 1, 3); x.fillStyle = '#f2963a'; x.fillRect(i, 13, 2, 3); } },
  sprout: (x, R) => { for (let i = 1; i < 15; i += 3) { x.fillStyle = '#7fc46a'; x.fillRect(i + 1, 10, 1, 6); x.fillRect(i, 10, 3, 1); x.fillRect(i + 2, 12, 1, 1); } },
  // plants (drawn on a clear tile, shown as two crossed quads)
  tuft: (x, R) => { for (let i = 1; i < 15; i += 2) { const h = 5 + (R() * 7 | 0); x.fillStyle = shade(0x8fcc78, 0.85 + R() * 0.25); x.fillRect(i, 16 - h, 1, h); } },
  flower: (c) => (x, R) => { x.fillStyle = '#6faa5e'; x.fillRect(7, 8, 2, 8); x.fillRect(5, 11, 2, 1); x.fillRect(9, 13, 2, 1); x.fillStyle = hex(c); x.fillRect(6, 4, 4, 3); x.fillRect(5, 5, 6, 1); x.fillStyle = '#fff6b0'; x.fillRect(7, 5, 2, 1); },
  reed: (x, R) => { x.fillStyle = '#7cb86f'; for (let i = 3; i < 14; i += 3) x.fillRect(i, 2 + (R() * 4 | 0), 1, 14); x.fillStyle = '#a77a52'; x.fillRect(6, 2, 2, 4); },
  lily: (x, R) => { x.fillStyle = '#84c784'; x.beginPath(); x.arc(8, 8, 6.5, 0.3, Math.PI * 2 - 0.3); x.lineTo(8, 8); x.fill(); x.fillStyle = '#ffb6c1'; x.fillRect(9, 6, 2, 2); }
};
// tile index → painter
export const T = {
  GRASS_TOP: 0, GRASS_SIDE: 1, DIRT: 2, STONE: 3, SAND: 4, PATH_TOP: 5, PATH_SIDE: 6, SNOW_TOP: 7,
  SNOW_SIDE: 8, LOG: 9, LOG_TOP: 10, LEAF_G: 11, LEAF_M: 12, LEAF_L: 13, LEAF_P: 14, WATER: 15,
  BIRCH: 16, COBBLE: 17, DEEP: 18, CLAY: 19, GRAVEL: 20, PLANKS: 21, MOSSY: 22, LEAF_T: 23,
  TUFT: 24, FL_PINK: 25, FL_WHITE: 26, FL_YELLOW: 27, FL_BLUE: 28, FL_LAV: 29, REED: 30, LILY: 31,
  SHINGLE: 32, PLASTER: 33, PLANK_GREY: 34, GLASS: 35, BRICKS: 36, STONE_BRICK: 37, FARMLAND: 38, SPRUCE_PLANK: 39,
  WHEAT: 40, CARROT: 41, SPROUT: 42
};
const PAINT = [DRAW.grassTop, DRAW.grassSide, DRAW.dirt, DRAW.stone, DRAW.sand, DRAW.pathTop, DRAW.pathSide, DRAW.snowTop,
  DRAW.snowSide, DRAW.logSide, DRAW.logTop, DRAW.leaves(0x86cc78), DRAW.leaves(0x7cc9a4), DRAW.leaves(0xaad97c), DRAW.leaves(0xf6b3c8), DRAW.water,
  DRAW.birch, DRAW.cobble, DRAW.deep, DRAW.clay, DRAW.gravel, DRAW.planks, DRAW.mossy, DRAW.leaves(0x6fb391),
  DRAW.tuft, DRAW.flower(0xff9fbf), DRAW.flower(0xffffff), DRAW.flower(0xffe27a), DRAW.flower(0x9fcfff), DRAW.flower(0xd2b8ff), DRAW.reed, DRAW.lily,
  DRAW.shingle, DRAW.plaster, DRAW.plankGrey, DRAW.glass, DRAW.bricks, DRAW.stoneBrick, DRAW.farmland, DRAW.sprucePlank,
  DRAW.wheat, DRAW.carrot, DRAW.sprout];

let atlasTex = null;
export function atlas() {
  if (atlasTex) return atlasTex;
  const cv = document.createElement('canvas'); cv.width = TILE * COLS; cv.height = TILE * ROWS;
  const x = cv.getContext('2d');
  PAINT.forEach((p, i) => { x.save(); x.translate((i % COLS) * TILE, Math.floor(i / COLS) * TILE); x.beginPath(); x.rect(0, 0, TILE, TILE); x.clip(); p(x, rngT(101 + i * 7)); x.restore(); });
  atlasTex = new THREE.CanvasTexture(cv);
  atlasTex.magFilter = THREE.NearestFilter; atlasTex.minFilter = THREE.NearestFilter; atlasTex.generateMipmaps = false; atlasTex.colorSpace = THREE.SRGBColorSpace;
  return atlasTex;
}
// one tile on its own, repeating (for boxes: walls, roofs, logs…)
const tileTexs = new Map();
export function tileTexture(i) {
  if (tileTexs.has(i)) return tileTexs.get(i);
  const cv = document.createElement('canvas'); cv.width = cv.height = TILE;
  PAINT[i](cv.getContext('2d'), rngT(101 + i * 7));
  const t = new THREE.CanvasTexture(cv);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  tileTexs.set(i, t);
  return t;
}
const uvOf = (i) => { const u = (i % COLS) / COLS, v = 1 - (Math.floor(i / COLS) + 1) / ROWS, e = 0.0008; return [u + e, v + e, u + 1 / COLS - e, v + 1 / ROWS - e]; };

/* ---------------- blocks ---------------- */
// id → [top, side, bottom] tiles, kind
export const B = { AIR: 0, GRASS: 1, DIRT: 2, STONE: 3, SAND: 4, PATH: 5, SNOW: 6, LOG: 7, LEAF_G: 8, LEAF_M: 9, LEAF_L: 10, LEAF_P: 11,
  WATER: 12, BIRCH: 13, COBBLE: 14, DEEP: 15, CLAY: 16, GRAVEL: 17, LEAF_T: 18, MOSSY: 19, PLANKS: 20, BRICK: 21, FARM: 22 };
const DEF = [];
DEF[B.GRASS] = [T.GRASS_TOP, T.GRASS_SIDE, T.DIRT]; DEF[B.DIRT] = [T.DIRT, T.DIRT, T.DIRT]; DEF[B.STONE] = [T.STONE, T.STONE, T.STONE];
DEF[B.SAND] = [T.SAND, T.SAND, T.SAND]; DEF[B.PATH] = [T.PATH_TOP, T.PATH_SIDE, T.DIRT]; DEF[B.SNOW] = [T.SNOW_TOP, T.SNOW_SIDE, T.STONE];
DEF[B.LOG] = [T.LOG_TOP, T.LOG, T.LOG_TOP]; DEF[B.BIRCH] = [T.LOG_TOP, T.BIRCH, T.LOG_TOP];
DEF[B.LEAF_G] = [T.LEAF_G, T.LEAF_G, T.LEAF_G]; DEF[B.LEAF_M] = [T.LEAF_M, T.LEAF_M, T.LEAF_M]; DEF[B.LEAF_L] = [T.LEAF_L, T.LEAF_L, T.LEAF_L];
DEF[B.LEAF_P] = [T.LEAF_P, T.LEAF_P, T.LEAF_P]; DEF[B.LEAF_T] = [T.LEAF_T, T.LEAF_T, T.LEAF_T]; DEF[B.WATER] = [T.WATER, T.WATER, T.WATER];
DEF[B.COBBLE] = [T.COBBLE, T.COBBLE, T.COBBLE]; DEF[B.DEEP] = [T.DEEP, T.DEEP, T.DEEP]; DEF[B.CLAY] = [T.CLAY, T.CLAY, T.CLAY];
DEF[B.GRAVEL] = [T.GRAVEL, T.GRAVEL, T.GRAVEL]; DEF[B.BRICK] = [T.STONE_BRICK, T.STONE_BRICK, T.STONE_BRICK]; DEF[B.FARM] = [T.FARMLAND, T.DIRT, T.DIRT]; DEF[B.MOSSY] = [T.MOSSY, T.MOSSY, T.MOSSY]; DEF[B.PLANKS] = [T.PLANKS, T.PLANKS, T.PLANKS];
const isLeaf = (b) => b === B.LEAF_G || b === B.LEAF_M || b === B.LEAF_L || b === B.LEAF_P || b === B.LEAF_T;

export class Grid {
  constructor(x0, y0, z0, sx, sy, sz) { Object.assign(this, { x0, y0, z0, sx, sy, sz }); this.d = new Uint8Array(sx * sy * sz); this.plants = []; this.tint = new Map(); }
  idx(x, y, z) { const i = x - this.x0, j = y - this.y0, k = z - this.z0; if (i < 0 || j < 0 || k < 0 || i >= this.sx || j >= this.sy || k >= this.sz) return -1; return (j * this.sz + k) * this.sx + i; }
  get(x, y, z) { const n = this.idx(x, y, z); return n < 0 ? 0 : this.d[n]; }
  set(x, y, z, b) { const n = this.idx(x, y, z); if (n >= 0) this.d[n] = b; }
  // the highest solid block in a column (its top face is at y + 1), or null
  top(x, z) { for (let y = this.y0 + this.sy - 1; y >= this.y0; y--) { const b = this.get(x, y, z); if (b && b !== B.WATER) return y; } return null; }
  plant(x, y, z, tile, s) { this.plants.push([x, y, z, tile, s || 1]); }
  // the mesh: only faces next to air (water faces only next to air, its top a little lower)
  build(waterTop) {
    const op = { p: [], n: [], u: [], c: [] }, wa = { p: [], n: [], u: [], c: [] };
    const FACES = [
      { d: [1, 0, 0], v: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], s: 1, b: 0.84 }, { d: [-1, 0, 0], v: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]], s: 1, b: 0.84 },
      { d: [0, 1, 0], v: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]], s: 0, b: 1 }, { d: [0, -1, 0], v: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], s: 2, b: 0.62 },
      { d: [0, 0, 1], v: [[1, 0, 1], [1, 1, 1], [0, 1, 1], [0, 0, 1]], s: 1, b: 0.92 }, { d: [0, 0, -1], v: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]], s: 1, b: 0.76 }
    ];
    const wt = waterTop == null ? 0.88 : waterTop;
    for (let j = 0; j < this.sy; j++) for (let k = 0; k < this.sz; k++) for (let i = 0; i < this.sx; i++) {
      const b = this.d[(j * this.sz + k) * this.sx + i]; if (!b) continue;
      const x = this.x0 + i, y = this.y0 + j, z = this.z0 + k, def = DEF[b]; if (!def) continue;
      const tint = this.tint.get((j * this.sz + k) * this.sx + i) || 1;
      FACES.forEach((F) => {
        const nb = this.get(x + F.d[0], y + F.d[1], z + F.d[2]);
        if (b === B.WATER) { if (nb !== B.AIR) return; }
        else if (nb && nb !== B.WATER && !(isLeaf(nb) && !isLeaf(b))) return;     // hidden behind another block
        if (isLeaf(b) && isLeaf(nb)) return;
        const out = b === B.WATER ? wa : op, [u0, v0, u1, v1] = uvOf(def[F.s]);
        // water is a little lower at its surface — but not where more water sits on top (a waterfall stays one sheet)
        const lower = b === B.WATER && this.get(x, y + 1, z) !== B.WATER;
        const quad = F.v.map(([a, c0, e]) => [x + a, y + (lower && c0 === 1 ? wt : c0), z + e]);
        // a soft MC-like light per side (top bright, bottom dark) so blocks read without strong lights
        const br = F.b * tint;
        // under water: the deeper, the bluer and darker (so a lake looks full, not like a pane of glass)
        let cr = br, cg = br, cb = br;
        if (b !== B.WATER && nb === B.WATER) {
          let dep = 0; const wx = x + F.d[0], wz = z + F.d[2];
          for (let yy = y + F.d[1]; this.get(wx, yy, wz) === B.WATER && dep < 6; yy++) dep++;
          const k = Math.max(0.32, 1 - 0.2 * dep);
          cr = br * k * 0.62; cg = br * k * 0.82; cb = br * Math.min(1, k * 1.05);
        }
        const uvq = F.d[1] !== 0 ? [[u0, v0], [u1, v0], [u1, v1], [u0, v1]] : [[u0, v0], [u0, v1], [u1, v1], [u1, v0]];
        [0, 1, 2, 0, 2, 3].forEach((q) => { out.p.push(...quad[q]); out.n.push(...F.d); out.u.push(...uvq[q]); out.c.push(cr, cg, cb); });
      });
    }
    const make = (o) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(o.p, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(o.n, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(o.u, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(o.c, 3)); return g; };
    const tex = atlas();
    const solid = new THREE.Mesh(make(op), new THREE.MeshLambertMaterial({ map: tex, vertexColors: true }));
    solid.castShadow = true; solid.receiveShadow = true; solid.userData.keepBatch = true;
    const water = new THREE.Mesh(make(wa), new THREE.MeshLambertMaterial({ map: tex, vertexColors: true, transparent: true, opacity: 0.84, depthWrite: false }));
    water.receiveShadow = true; water.userData.keepBatch = true; water.renderOrder = 1;
    // plants: two crossed quads each (flowers, grass tufts, reeds)
    const pl = { p: [], n: [], u: [], c: [] };
    this.plants.forEach(([x, y, z, tile, s]) => {
      const [u0, v0, u1, v1] = uvOf(tile), h = 0.9 * s, w = 0.45 * s;
      [[[-w, -w], [w, w]], [[-w, w], [w, -w]]].forEach(([[ax, az], [bx, bz]]) => {
        const q = [[x + ax, y, z + az], [x + bx, y, z + bz], [x + bx, y + h, z + bz], [x + ax, y + h, z + az]], uq = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
        [0, 1, 2, 0, 2, 3].forEach((n) => { pl.p.push(...q[n]); pl.n.push(0, 1, 0); pl.u.push(...uq[n]); pl.c.push(1, 1, 1); });
      });
    });
    const plants = new THREE.Mesh(make(pl), new THREE.MeshLambertMaterial({ map: tex, vertexColors: true, alphaTest: 0.5, side: THREE.DoubleSide }));
    plants.userData.keepBatch = true;
    return { solid, water, plants };
  }
}

/* ---------------- trees, made of blocks ---------------- */
export function tree(g, x, y, z, kind, R) {
  const leaf = { oak: [B.LEAF_G, B.LEAF_L][R() * 2 | 0], birch: B.LEAF_L, mint: B.LEAF_M, cherry: B.LEAF_P, pine: B.LEAF_T }[kind] || B.LEAF_G;
  const log = kind === 'birch' ? B.BIRCH : B.LOG;
  const put = (a, b, c, bl) => { if (!g.get(a, b, c)) g.set(a, b, c, bl); };
  if (kind === 'pine') {
    const h = 6 + (R() * 3 | 0);
    for (let k = 0; k < h; k++) g.set(x, y + k, z, B.LOG);
    let r = 2;
    for (let k = 2; k <= h; k++) {
      const rr = k === h ? 0 : (h - k) % 2 === 0 ? Math.max(1, r - 1) : r;
      for (let a = -rr; a <= rr; a++) for (let c = -rr; c <= rr; c++) if (Math.abs(a) + Math.abs(c) <= rr + (rr > 1 ? 0 : 1) && !(a === 0 && c === 0 && k < h)) put(x + a, y + k, z + c, leaf);
      if (k % 2 === 0 && r > 1 && k > h / 2) r--;
    }
    put(x, y + h, z, leaf); put(x, y + h + 1, z, leaf);
    return;
  }
  const h = (kind === 'birch' ? 5 : 4) + (R() * 2 | 0);
  for (let k = 0; k < h; k++) g.set(x, y + k, z, log);
  for (let k = h - 2; k <= h + 1; k++) {
    const rr = k >= h ? 1 : 2;
    for (let a = -rr; a <= rr; a++) for (let c = -rr; c <= rr; c++) {
      if (rr === 2 && Math.abs(a) === 2 && Math.abs(c) === 2 && R() < 0.75) continue;      // round the corners a bit
      if (k === h + 1 && Math.abs(a) + Math.abs(c) > 1) continue;
      put(x + a, y + k, z + c, leaf);
    }
  }
}

/* ---------------- boxes with a pixel texture repeated once per block ---------------- */
export function blockUV(geo, w, h, d) {
  const uv = geo.attributes.uv, dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) { const n = f * 4 + k; uv.setXY(n, uv.getX(n) * dims[f][0], uv.getY(n) * dims[f][1]); }
  uv.needsUpdate = true;
  return geo;
}
