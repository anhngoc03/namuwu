/**
 * src/village3d.js — the Personal village in 3D (cute voxel style).
 * Built into frontend/village3d.js by `npm run build` (esbuild bundles three.js in,
 * so the page needs no CDN — the site's CSP only allows its own scripts).
 *
 * window.Village3D.create(container, opts) → api
 *   opts.houses   [{ id, roof, heart }]  same order as the layout below
 *   opts.onPick(id)                        a house was tapped (id or 'hall')
 *   api.setUrgent(n)                       n > 0 → villagers (not busy ones) walk to the Town Hall
 *   api.setBusy({ id: n })                 houses with unfinished work keep going, + helpers
 *   api.anchor(id)                         { x, y, visible } screen px for a name tag
 *   api.onFrame(fn)                        called after every rendered frame
 *   api.night()                            0 (day) … 1 (night), from the real clock
 *   api.show(bool) / api.resize()
 *
 * Sky, sun, moon, lamps and windows follow the real local time.
 * Drag = rotate, pinch / wheel = zoom, two fingers / right-drag = move.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/* ---------------- layouts (same plans as the old pixel maps: 1 unit = 4 px) ----------------
   'land' for wide screens, 'port' (tall) for phones held upright. Chosen when the scene
   is created; village.js re-creates the scene when the screen turns. */
const LAYOUTS = {
  // House order = village.js HOUSES: 0–8 Personal, 9 Love (VIP, on the hill), 10 Goals (hill), 11–15 Tools,
  // 16 Game Center, 17 7-Eleven. [x, y] is the top-left of a 24×22 px box (bigger buildings are centred the same way).
  land: {
    W: 320, H: 236,
    houses: [[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],
             [16,150],[52,150],[192,23],[66,24],
             [88,150],[124,150],[16,186],[52,186],[88,186],
             [124,187],[180,152]],
    hall: [134, 38], pond: [264, 206], pondR: [8, 4],
    hill: { x: 160, y: 46, w: 216, h: 74, r: 12, height: 3.2 },
    ramp: { x: 160, from: 83, to: 110.5 },
    lot: { house: 9, x0: 172, y0: 12, x1: 258, y1: 66, car: [226, 54.4], swing: [186, 40] },
    roads: [[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],
            [46,110.5,46,214.5],[160,110.5,160,214.5],
            [64,70,258,70],[160,70,160,110.5]],
    river: [[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],
    mountains: [[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]
  },
  port: {
    W: 200, H: 360,
    houses: [[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],
             [56,134],[132,51],[16,56],
             [88,134],[120,134],[56,186],[88,186],[120,186],
             [60,239],[116,239]],
    hall: [68, 30], pond: [100, 318], pondR: [6.5, 3.6],
    hill: { x: 100, y: 52, w: 184, h: 96, r: 12, height: 3.2 },
    ramp: { x: 100, from: 100, to: 124.5 },
    lot: { house: 9, x0: 110, y0: 40, x1: 186, y1: 90, car: [166, 81.6], swing: [122, 66] },
    roads: [[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],
            [44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],
            [16,94,186,94],[100,94,100,124.5]],
    river: [[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],
    mountains: [[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]
  }
};
let LAY, HOUSE_POS, HALL_POS, POND, ROADS, ISLAND, HILL, RAMP, RIVER, MOUNTAINS, FACE, LOT, SOURCE;
function useLayout(key) {
  LAY = LAYOUTS[key];
  const P = (x, y) => [(x - LAY.W / 2) / 4, (y - LAY.H / 2) / 4];
  HOUSE_POS = LAY.houses.map(([x, y]) => P(x + 12, y + 11));
  HALL_POS = P(LAY.hall[0], LAY.hall[1]);
  const pc = P(LAY.pond[0], LAY.pond[1]);
  POND = { x: pc[0], z: pc[1], rx: LAY.pondR[0], rz: LAY.pondR[1] };
  ROADS = LAY.roads.map(([x1, y1, x2, y2]) => P(x1, y1).concat(P(x2, y2)));
  const hc = P(LAY.hill.x, LAY.hill.y);
  HILL = { x: hc[0], z: hc[1], hw: LAY.hill.w / 8, hd: LAY.hill.h / 8, r: LAY.hill.r / 4, h: LAY.hill.height };
  RAMP = { x: P(LAY.ramp.x, 0)[0], z0: P(0, LAY.ramp.from)[1], z1: P(0, LAY.ramp.to)[1], hw: 1.1 };
  RIVER = LAY.river.map(([x, y]) => { const q = P(x, y); return { x: q[0], z: q[1] }; });
  MOUNTAINS = LAY.mountains.map((m) => m.slice());
  // the river is born at the foot of the nearest mountain (a waterfall runs down its face) and ends in the lake
  { const s0 = RIVER[0];
    let mi = 0, md = 1e9;
    MOUNTAINS.forEach(([x, z], i) => { const d = Math.hypot(x - s0.x, z - s0.z); if (d < md) { md = d; mi = i; } });
    const m = MOUNTAINS[mi], nx = RIVER[1].x - m[0], nz = RIVER[1].z - m[1], nl = Math.hypot(nx, nz) || 1;
    SOURCE = { i: mi, x: m[0], z: m[1], r: m[2], h: m[3], dx: nx / nl, dz: nz / nl };
    RIVER[0] = { x: m[0] + SOURCE.dx * (m[2] - 0.2), z: m[1] + SOURCE.dz * (m[2] - 0.2) };
    const e = RIVER[RIVER.length - 1];
    if (Math.hypot(e.x - POND.x, e.z - POND.z) < 22) RIVER.push({ x: POND.x + (e.x - POND.x) * 0.25, z: POND.z + (e.z - POND.z) * 0.25 });
  }
  FACE = HOUSE_POS.map((_, i) => (LAY.faces && LAY.faces[i]) || 0);
  LOT = null;
  if (LAY.lot) {
    const L = LAY.lot, a0 = P(L.x0, L.y0), a1 = P(L.x1, L.y1);
    LOT = { house: L.house, x0: a0[0], z0: a0[1], x1: a1[0], z1: a1[1], car: P(L.car[0], L.car[1]), swing: P(L.swing[0], L.swing[1]) };
  }
  const a = LAY.W / 8 + 11, b = LAY.H / 8 + 11;
  ISLAND = { a, b, n: 2.6, w: a * 2, d: b * 2 };
}
// the hill: a rounded box. Signed distance (< 0 inside)
function hillSD(x, z) {
  const H = HILL, qx = Math.abs(x - H.x) - (H.hw - H.r), qz = Math.abs(z - H.z) - (H.hd - H.r);
  return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - H.r;
}
const onRamp = (x, z) => Math.abs(x - RAMP.x) < RAMP.hw && z >= RAMP.z0 - 0.4 && z <= RAMP.z1;
// height of the ground (hill top, the ramp, or 0)
function groundY(x, z) {
  if (hillSD(x, z) <= 0) return HILL.h;
  if (onRamp(x, z)) return HILL.h * Math.max(0, Math.min(1, 1 - (z - RAMP.z0) / (RAMP.z1 - RAMP.z0)));
  return 0;
}
// near the cliff edge (nobody walks there, except up the ramp)
const nearCliff = (x, z, pad) => { const d = hillSD(x, z); return d > -0.5 - (pad || 0) && d < 0.9 + (pad || 0) && !onRamp(x, z); };
// distance to the river line
function riverDist(x, z) {
  let best = 1e9;
  for (let i = 1; i < RIVER.length; i++) {
    const a = RIVER[i - 1], b = RIVER[i], dx = b.x - a.x, dz = b.z - a.z, L = dx * dx + dz * dz;
    const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / (L || 1)));
    best = Math.min(best, Math.hypot(x - (a.x + dx * t), z - (a.z + dz * t)));
  }
  return best;
}
const inLot = (x, z, pad) => !!LOT && x > LOT.x0 - (pad || 0) && x < LOT.x1 + (pad || 0) && z > LOT.z0 - (pad || 0) && z < LOT.z1 + (pad || 0);
const ROAD_MAIN = 3.0, ROAD_SIDE = 2.1, ROAD_W = ROAD_MAIN, RH = ROAD_W / 2;   // main streets and side lanes
const onRoadAt = (x, z, pad) => ROADS.some(([x1, z1, x2, z2]) => x >= Math.min(x1, x2) - RH - pad && x <= Math.max(x1, x2) + RH + pad && z >= Math.min(z1, z2) - RH - pad && z <= Math.max(z1, z2) + RH + pad);
// distance from the centre to the shore at angle t
function shoreR(t, scale) {
  const I = ISLAND, c = Math.abs(Math.cos(t)), s = Math.abs(Math.sin(t));
  const r = Math.pow(Math.pow(c / I.a, I.n) + Math.pow(s / I.b, I.n), -1 / I.n);
  return r * (1 + 0.035 * Math.sin(3 * t + 0.7) + 0.025 * Math.sin(5 * t + 2.1) + 0.015 * Math.sin(8 * t)) * (scale || 1);
}
function onIsland(x, z, margin) { return Math.hypot(x, z) < shoreR(Math.atan2(z, x)) - (margin || 0); }
function islandShape(scale, inset) {
  const sh = new THREE.Shape();
  for (let i = 0; i <= 96; i++) {
    const t = i / 96 * Math.PI * 2, r = shoreR(t, scale) - (inset || 0);
    const x = Math.cos(t) * r, y = -Math.sin(t) * r;          // shape y → world −z after the slab's rotation
    if (i === 0) sh.moveTo(x, y); else sh.lineTo(x, y);
  }
  return sh;
}
useLayout('land');

const COL = {
  grass: 0xbfe6a4, grassSide: 0x9fd389, dirt: 0xc9a27e, dirt2: 0xb08a68,
  road: 0xf3e2bd, wall: 0xfff6e8, wall2: 0xf0dcc4, door: 0xc4936f, frame: 0xe9d2b4,
  trunk: 0xa8805e, leaf: [0x9ad690, 0x86cc80, 0xaee0a0], water: 0x8fd3ea, sand: 0xf3e3bd, lily: 0x84c784,
  roof: { pink: 0xf6a9bd, peach: 0xf9c39c, blue: 0x9fcfe4, lav: 0xc9b4ee, mint: 0xa3d9bd, yellow: 0xf5d888, hall: 0xf19bb0 },
  flower: [0xffb6c1, 0xffffff, 0xf9e08a, 0xd9c9f0, 0xffc9a8]
};

/* ---------------- helpers ---------------- */
const mats = new Map();
function mat(color, extra) {
  const key = color + JSON.stringify(extra || {});
  if (!mats.has(key)) mats.set(key, new THREE.MeshLambertMaterial(Object.assign({ color }, extra || {})));
  return mats.get(key);
}
// soft, rounded blocks for everything built (houses, furniture, fences…); people and pets stay pixel blocks (sbox)
const roundGeos = new Map();
function roundGeo(w, h, d) {
  const mn = Math.min(w, h, d);
  if (mn < 0.1) return new THREE.BoxGeometry(w, h, d);
  const key = w.toFixed(3) + ',' + h.toFixed(3) + ',' + d.toFixed(3);
  if (!roundGeos.has(key)) roundGeos.set(key, new RoundedBoxGeometry(w, h, d, 2, Math.min(mn * 0.28, 0.32)));
  return roundGeos.get(key);
}
function box(w, h, d, color, x = 0, y = 0, z = 0, extra) {
  const m = new THREE.Mesh(roundGeo(w, h, d), extra && extra.isMaterial ? extra : mat(color, extra));
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
function sbox(w, h, d, color, x = 0, y = 0, z = 0, extra) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), extra && extra.isMaterial ? extra : mat(color, extra));
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
function rng(seed) { return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }
const rnd = (a, b) => a + Math.random() * (b - a);
const lerp = (a, b, t) => a + (b - a) * t;
const inPond = (x, z, pad = 0) => ((x - POND.x) / (POND.rx + pad)) ** 2 + ((z - POND.z) / (POND.rz + pad)) ** 2 < 1;

function roundedRect(w, d, r) {
  const s = new THREE.Shape(), x = -w / 2, y = -d / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + d - r); s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
  s.lineTo(x + r, y + d); s.quadraticCurveTo(x, y + d, x, y + d - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}
function slab(shape, depth, color, y, round) {
  const g = new THREE.ExtrudeGeometry(shape, round ? { depth: depth - 0.5, bevelEnabled: true, bevelThickness: 0.25, bevelSize: 0.35, bevelSegments: 5, curveSegments: 6 } : { depth, bevelEnabled: false, curveSegments: 6 });
  if (round) g.translate(0, 0, 0.25);
  g.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(g, mat(color));
  m.position.y = y; m.receiveShadow = true;
  return m;
}

/* ---------------- buildings ---------------- */
const PICK_MAT = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
let windowMats = [];         // house windows (lit per house, by who's home)
let lampMats = [];           // street lamps (on at night)
function windowMat() {
  const m = new THREE.MeshLambertMaterial({ color: 0xbfe6f2, emissive: 0xffd27a, emissiveIntensity: 0 });
  windowMats.push(m);
  return m;
}
function gableRoof(w, d, h, color) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 - 0.4, 0); s.lineTo(w / 2 + 0.4, 0); s.lineTo(0, h); s.lineTo(-w / 2 - 0.4, 0);
  const g = new THREE.ExtrudeGeometry(s, { depth: d + 0.5, bevelEnabled: true, bevelThickness: 0.15, bevelSize: 0.14, bevelSegments: 4, curveSegments: 4 });
  g.translate(0, 0, -(d + 0.5) / 2);
  const m = new THREE.Mesh(g, mat(color));
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
function heart(color) {
  const s = new THREE.Shape();
  s.moveTo(0, -0.5);
  s.bezierCurveTo(-0.9, 0.1, -0.5, 0.75, 0, 0.35);
  s.bezierCurveTo(0.5, 0.75, 0.9, 0.1, 0, -0.5);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.18, bevelEnabled: false, curveSegments: 10 });
  return new THREE.Mesh(g, mat(color, { emissive: color, emissiveIntensity: 0.25 }));
}

function makeHouse(spec, hall) {
  const g = new THREE.Group();
  const two = !!(spec && spec.floors === 2);                         // the Love house: two storeys + a balcony
  const w = hall ? 10 : (two ? 6 : 5.2), d = hall ? 7 : (two ? 4.8 : 4.2), h = hall ? 4.6 : (two ? 6.2 : 3.2), rh = hall ? 3.6 : 2.6;   // 1 unit ≈ 1 m
  const winY = two ? 0.3 + 1.95 : 0.3 + h * 0.6;                        // ground-floor windows
  g.add(box(w + 0.6, 0.3, d + 0.6, COL.wall2, 0, 0.15, 0));           // base
  g.add(box(w, h, d, COL.wall, 0, 0.3 + h / 2, 0));                      // walls
  const roof = gableRoof(w, d, rh, hall ? COL.roof.hall : COL.roof[spec.roof]);
  roof.position.y = 0.3 + h; g.add(roof);
  // door + step
  const dw = hall ? 1.9 : 1.05, dh = hall ? 2.8 : 2.15;
  const hinge = new THREE.Group(); hinge.position.set(-dw / 2, 0.3, d / 2 + 0.02); g.add(hinge);
  hinge.add(box(dw, dh, 0.12, COL.door, dw / 2, dh / 2, 0));
  hinge.add(box(0.12, 0.12, 0.08, 0xf9e08a, dw - 0.25, dh / 2, 0.08));
  g.add(box(dw - 0.04, dh - 0.04, 0.05, 0x5a4636, 0, 0.3 + dh / 2, d / 2 - 0.02));   // dark doorway behind it
  g.userData.hinge = hinge;
  g.add(box(dw + 0.8, 0.12, 0.8, COL.road, 0, 0.06, d / 2 + 0.6));
  // windows (front + sides)
  const wm = windowMat();
  g.userData.wm = wm;
  const wx = hall ? [-3.6, -2, 2, 3.6] : [-1.6, 1.6];
  wx.forEach((x) => {
    g.add(box(1.1, 1.1, 0.1, COL.frame, x, winY, d / 2 + 0.01));
    g.add(box(0.85, 0.85, 0.12, 0, x, winY, d / 2 + 0.03, wm));
  });
  [-1, 1].forEach((sx) => g.add(box(0.12, 0.85, 0.85, 0, sx * (w / 2 + 0.01), winY, 0, wm)));
  if (two) {
    const f2 = 0.3 + 3.3;                                                  // first-floor level
    g.add(box(w + 0.12, 0.16, d + 0.12, COL.wall2, 0, f2, 0));            // floor line
    [-1, 1].forEach((sx) => g.add(box(0.12, 0.85, 0.85, 0, sx * (w / 2 + 0.01), f2 + 1.4, 0.6, wm)));
    // balcony with a railing and little pots
    g.add(box(w - 0.6, 0.18, 1.3, 0xf0dcc4, 0, f2 + 0.05, d / 2 + 0.65));
    for (let k = 0; k <= 8; k++) g.add(box(0.06, 0.8, 0.06, 0xffffff, -(w - 0.8) / 2 + k * (w - 0.8) / 8, f2 + 0.5, d / 2 + 1.25));
    g.add(box(w - 0.6, 0.07, 0.08, 0xffffff, 0, f2 + 0.92, d / 2 + 1.25));
    [-1, 1].forEach((sx) => g.add(box(0.07, 0.07, 1.25, 0xffffff, sx * (w - 0.7) / 2, f2 + 0.92, d / 2 + 0.65)));
    [-2.2, -1.75, 1.85, 2.3].forEach((x, k) => {
      g.add(box(0.32, 0.3, 0.32, [0xf9c39c, 0xf6a9bd][k % 2], x, f2 + 0.3, d / 2 + 0.95));
      const lf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.24, 2), mat(COL.leaf[k % 3], {})); lf.position.set(x, f2 + 0.6, d / 2 + 0.95); lf.castShadow = true; g.add(lf);
      g.add(box(0.1, 0.1, 0.1, COL.flower[k % COL.flower.length], x + 0.08, f2 + 0.78, d / 2 + 0.98));
    });
    // a big glass door out to the balcony
    g.add(box(2.3, 2.3, 0.1, 0xffffff, 0, f2 + 1.25, d / 2 + 0.01));
    const glass = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.1, 0.06), new THREE.MeshLambertMaterial({ color: 0xbfe6f2, transparent: true, opacity: 0.55, emissive: 0xffd27a, emissiveIntensity: 0 }));
    glass.position.set(0, f2 + 1.25, d / 2 + 0.05); g.add(glass); windowMats.push(glass.material); g.userData.wm2 = glass.material;
    g.add(box(0.06, 2.1, 0.1, 0xffffff, 0, f2 + 1.25, d / 2 + 0.07));
  }
  if (!hall) {
    const rc = COL.roof[spec.roof] || COL.roof.pink;
    // a little awning over the door, two steps up, shutters by the windows, a mailbox by the path
    const aw = box(dw + 0.9, 0.12, 0.8, rc, 0, 0.3 + dh + 0.32, d / 2 + 0.38); aw.rotation.x = 0.22; g.add(aw);
    [-1, 1].forEach((sx) => g.add(box(0.08, 0.5, 0.08, COL.frame, sx * (dw / 2 + 0.3), 0.3 + dh + 0.05, d / 2 + 0.68)));
    g.add(box(dw + 0.5, 0.14, 0.45, COL.wall2, 0, 0.07, d / 2 + 0.28)); g.add(box(dw + 0.3, 0.14, 0.3, COL.wall2, 0, 0.2, d / 2 + 0.16));
    wx.forEach((x) => [-1, 1].forEach((sx) => g.add(box(0.26, 1.1, 0.07, rc, x + sx * 0.72, winY, d / 2 + 0.04))));
    g.add(box(0.08, 0.95, 0.08, COL.trunk, w / 2 + 0.35, 0.47, d / 2 + 1.35));
    g.add(box(0.36, 0.3, 0.5, rc, w / 2 + 0.35, 1.05, d / 2 + 1.35)); g.add(box(0.06, 0.18, 0.06, 0xff7f7f, w / 2 + 0.55, 1.2, d / 2 + 1.25));
    g.add(box(0.6, 1.4, 0.6, COL.wall2, w / 4, 0.3 + h + rh * 0.55, -d / 5));            // chimney
    g.userData.chimney = new THREE.Vector3(w / 4, 0.3 + h + rh * 0.55 + 1, -d / 5);
    g.add(box(0.8, 0.2, 0.8, 0xe2c9ad, w / 4, 0.3 + h + rh * 0.55 + 0.75, -d / 5));
    // little flower box under the windows
    wx.forEach((x) => {
      g.add(box(1.2, 0.25, 0.35, COL.door, x, winY - 0.75, d / 2 + 0.2));
      [-0.35, 0, 0.35].forEach((o, k) => g.add(box(0.22, 0.22, 0.22, COL.flower[k], x + o, winY - 0.52, d / 2 + 0.22)));
    });
  }
  if (spec && spec.heart) {
    const hm = heart(0xff7f9e); hm.scale.setScalar(0.9);
    hm.material = new THREE.MeshLambertMaterial({ color: 0xff7f9e, emissive: 0xff4f7e, emissiveIntensity: 0.2 });
    hm.position.set(0, 0.3 + h + rh * 0.42, d / 2 + 0.42); g.add(hm); g.userData.heart = hm;
  }
  let bell = null;
  if (hall) {
    // columns, clock-ish round window, flag, bell
    [-1.8, 1.8].forEach((x) => g.add(box(0.35, h, 0.35, COL.wall2, x, 0.3 + h / 2, d / 2 + 0.25)));
    g.add(box(w + 0.4, 0.3, 0.9, COL.wall2, 0, 0.3 + h + 0.05, d / 2 + 0.1));
    const pole = box(0.12, 3, 0.12, COL.trunk, 0, 0.3 + h + rh + 1.4, 0); g.add(pole);
    const flag = box(1.4, 0.8, 0.06, 0xff9bb0, 0.75, 0.3 + h + rh + 2.4, 0); g.add(flag); g.userData.flag = flag;
    const bellMat = new THREE.MeshLambertMaterial({ color: 0xf9e08a, emissive: 0xff6b6b, emissiveIntensity: 0 });
    bell = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.5, 0.6, 10), bellMat);
    bell.position.set(0, 0.3 + h + rh * 0.42, d / 2 + 0.35); g.add(bell);
    g.add(box(1.4, 1.4, 0.1, COL.frame, 0, 0.3 + h + rh * 0.42, d / 2 + 0.25));
  }
  g.userData.top = 0.3 + h + rh + (hall ? 3.2 : 0.6);
  // an invisible box for taps (the visible parts get merged into big batches)
  const pick = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, h + rh + 0.3, d + 0.6), PICK_MAT);
  pick.position.y = (h + rh + 0.3) / 2; g.add(pick); g.userData.pick = pick;
  g.userData.bell = bell;
  g.userData.doorZ = d / 2 + 1.3;
  return g;
}


/* ---------------- special buildings ---------------- */
function signTexture(draw, w, h) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = 4;
  return tx;
}
function finishBuilding(g, w, d, h, wm, cx) {
  cx = cx || 0;
  g.userData.wm = wm;
  g.userData.top = h + 0.9;
  g.userData.size = { cx, hw: w / 2 + 0.4, hd: d / 2 + 0.3 };
  const pick = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, h + 0.3, d + 0.6), PICK_MAT);
  pick.position.set(cx, (h + 0.3) / 2, 0); g.add(pick); g.userData.pick = pick;
  g.userData.doorZ = d / 2 + 1.3;
  return g;
}
function doorOn(g, dw, dh, z, color) {
  const hinge = new THREE.Group(); hinge.position.set(-dw / 2, 0.3, z); g.add(hinge);
  hinge.add(box(dw, dh, 0.1, color, dw / 2, dh / 2, 0));
  hinge.add(box(0.06, 0.5, 0.06, 0xd9dde3, dw - 0.2, dh / 2, 0.07));
  g.add(box(dw - 0.04, dh - 0.04, 0.05, 0x3a3540, 0, 0.3 + dh / 2, z - 0.04));
  g.userData.hinge = hinge;
}
// the VIP house: modern, two floors, glass, a balcony, the garage built in on the right
function makeModern() {
  const g = new THREE.Group(), W = 6.4, D = 5.2, H1 = 3.0, H2 = 2.8;
  const wm = windowMat();
  g.add(box(W + 5.4, 0.25, D + 0.6, 0xe9e4de, 2.3, 0.12, 0));                        // plinth under house + garage
  g.add(box(W, H1, D, 0xfbfaf8, 0, 0.25 + H1 / 2, 0));                               // ground floor, white
  [-2.15, 2.15].forEach((x) => {                                                     // floor-to-ceiling glass either side of the door
    g.add(box(1.7, 2.45, 0.08, 0x3a3540, x, 0.25 + 1.3, D / 2 + 0.01));
    g.add(box(1.55, 2.3, 0.1, 0, x, 0.25 + 1.3, D / 2 + 0.03, wm));
  });
  doorOn(g, 1.15, 2.3, D / 2 + 0.03, 0x8a5a3c);
  g.add(box(W + 0.3, 0.18, D + 0.3, 0x4a4650, 0, 0.25 + H1 + 0.09, 0));              // slab edge
  // upper floor: warm wood, sliding out a little at the front
  const y2 = 0.25 + H1 + 0.18;
  const wood = signTexture((x, w, h) => { for (let i = 0; i < w; i += 4) { x.fillStyle = i % 8 ? '#c99166' : '#bb8358'; x.fillRect(i, 0, 4, h); } }, 64, 16);
  const woodM = new THREE.MeshLambertMaterial({ map: wood });
  const up = new THREE.Mesh(new THREE.BoxGeometry(W - 0.6, H2, D - 0.4), woodM); up.position.set(-0.3, y2 + H2 / 2, -0.4); up.castShadow = true; up.receiveShadow = true; g.add(up);
  g.add(box(W - 0.3, 0.16, D - 0.1, 0x4a4650, -0.3, y2 + H2 + 0.08, -0.4));         // flat roof
  // the big glass door out onto the balcony, glass railing, little pots
  const fz = D / 2 - 0.4 + 0.01 - 0.2;
  g.add(box(2.9, 2.35, 0.08, 0x3a3540, -0.3, y2 + 1.2, fz + 0.02));
  const glass = new THREE.Mesh(new THREE.BoxGeometry(2.7, 2.2, 0.06), new THREE.MeshLambertMaterial({ color: 0xbfe6f2, transparent: true, opacity: 0.6, emissive: 0xffd27a, emissiveIntensity: 0 }));
  glass.position.set(-0.3, y2 + 1.2, fz + 0.06); g.add(glass); windowMats.push(glass.material);
  g.add(box(0.05, 2.2, 0.08, 0x3a3540, -0.3, y2 + 1.2, fz + 0.08));
  g.add(box(W - 0.4, 0.14, 1.5, 0xe9e4de, -0.2, y2 + 0.07, D / 2 + 0.55));            // balcony floor (over the porch)
  const rail = new THREE.Mesh(new THREE.BoxGeometry(W - 0.5, 0.75, 0.04), new THREE.MeshLambertMaterial({ color: 0xd8f1fa, transparent: true, opacity: 0.45 }));
  rail.position.set(-0.2, y2 + 0.52, D / 2 + 1.28); g.add(rail);
  g.add(box(W - 0.5, 0.05, 0.07, 0x3a3540, -0.2, y2 + 0.92, D / 2 + 1.28));
  [-2.5, -1.95, 1.75, 2.3].forEach((x, k) => {
    g.add(box(0.34, 0.32, 0.34, [0xf2f2f2, 0x8a8f99][k % 2], x, y2 + 0.3, D / 2 + 0.95));
    const lf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.26, 2), mat(COL.leaf[k % 3], {})); lf.position.set(x, y2 + 0.62, D / 2 + 0.95); lf.castShadow = true; g.add(lf);
  });
  // a little neon heart on the wood (it blinks when they're home at night)
  const hm = heart(0xff7f9e); hm.scale.setScalar(0.55);
  hm.material = new THREE.MeshLambertMaterial({ color: 0xff7f9e, emissive: 0xff4f7e, emissiveIntensity: 0.25 });
  hm.position.set(-2.2, y2 + 2.05, D / 2 - 0.55); g.add(hm); g.userData.heart = hm;
  // the garage, built on: white box, dark panel door
  const gx = W / 2 + 2.3;
  g.add(box(4.6, 2.9, D, 0xfbfaf8, gx, 0.25 + 1.45, 0));
  g.add(box(4.8, 0.16, D + 0.2, 0x4a4650, gx, 0.25 + 2.98, 0));
  g.add(box(3.7, 2.3, 0.08, 0x55575e, gx, 0.25 + 1.15, D / 2 + 0.02));
  for (let k = 0; k < 6; k++) g.add(box(3.7, 0.03, 0.1, 0x6b6e76, gx, 0.45 + k * 0.38, D / 2 + 0.05));
  g.add(box(0.5, 0.05, 0.05, 0xffffff, gx + 1.4, 2.95, D / 2 + 0.12));                // light strip
  [-1, 1].forEach((sx) => g.add(box(0.12, 0.85, 0.85, 0, sx * (W / 2 + 0.01) - (sx > 0 ? 0 : 0), 0.25 + 1.6, -1.2, wm)));
  g.userData.vip = true;
  return finishBuilding(g, W + 4.6, D, y2 + H2 + 0.2, wm, 2.3);
}
// the Game Center: pastel arcade with a marquee and a big joystick on the roof
function makeArcade() {
  const g = new THREE.Group(), W = 9.2, D = 6.6, H = 3.8, wm = windowMat();
  g.add(box(W + 0.6, 0.25, D + 0.6, 0xe9dcef, 0, 0.12, 0));
  g.add(box(W, H, D, 0xd9c9f0, 0, 0.25 + H / 2, 0));
  g.add(box(W + 0.4, 0.3, D + 0.4, 0xf6a9bd, 0, 0.25 + H + 0.15, 0));
  [-2.8, 2.8].forEach((x) => { g.add(box(2.6, 2.0, 0.1, 0xffffff, x, 1.5, D / 2 + 0.01)); g.add(box(2.4, 1.8, 0.12, 0, x, 1.5, D / 2 + 0.03, wm)); });
  doorOn(g, 1.8, 2.4, D / 2 + 0.03, 0xf19bb0);
  // little stars on the front instead of a sign board
  [[-1.4, 0xfff1a8], [0, 0xffb6c1], [1.4, 0xa6d8e8]].forEach(([x, c]) => { const st = heart(c); st.scale.setScalar(0.45); st.position.set(x, 0.25 + H - 0.55, D / 2 + 0.02); g.add(st); });
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 14), mat(0xf48fb1)); ball.position.set(3.2, 0.25 + H + 2.2, -1.5); ball.castShadow = true; g.add(ball);
  g.add(box(0.18, 1.6, 0.18, 0x3a3540, 3.2, 0.25 + H + 1.2, -1.5));
  g.add(box(1.6, 0.3, 1.6, 0x3a3540, 3.2, 0.25 + H + 0.45, -1.5));
  return finishBuilding(g, W, D, H + 2.4, wm);
}
// the corner shop (7-Eleven style): white box, the three stripes, big windows with shelves inside
function makeStore() {
  const g = new THREE.Group(), W = 9.2, D = 7, H = 3.5, wm = windowMat();
  g.add(box(W + 0.8, 0.22, D + 0.8, 0xdedad4, 0, 0.11, 0));
  g.add(box(W, H, D, 0xfbfaf8, 0, 0.22 + H / 2, 0));
  [[0xf28c28, 0.0], [0x2e9e5b, 0.22], [0xe23b3b, 0.44]].forEach(([c, dy]) => {     // the stripes, all round
    g.add(box(W + 0.06, 0.2, D + 0.06, c, 0, 0.22 + H - 0.55 - dy, 0));
  });
  g.add(box(W + 0.5, 0.25, D + 0.5, 0xf2f2f2, 0, 0.22 + H + 0.12, 0));
  const shelves = signTexture((x, w, h) => {
    x.fillStyle = '#d8f1fa'; x.fillRect(0, 0, w, h);
    const cols = ['#ffb6c1', '#f5d888', '#a3d9bd', '#a6d8e8', '#f9c39c', '#d9c9f0'];
    for (let r = 0; r < 4; r++) { x.fillStyle = '#c9e7f2'; x.fillRect(0, 12 + r * 28, w, 3); for (let c = 0; c < 26; c++) { x.fillStyle = cols[(c + r) % cols.length]; x.fillRect(6 + c * 10, 15 + r * 28, 7, 10 + (c % 3) * 3); } }
  }, 256, 128);
  const shop = new THREE.MeshLambertMaterial({ map: shelves, emissive: 0xfff2cc, emissiveMap: shelves, emissiveIntensity: 0.1 });
  [-2.65, 2.65].forEach((x) => { g.add(box(3.4, 2.0, 0.08, 0xdedad4, x, 1.35, D / 2 + 0.01)); const p = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.85, 0.1), shop); p.position.set(x, 1.35, D / 2 + 0.03); g.add(p); });
  doorOn(g, 1.7, 2.3, D / 2 + 0.03, 0xbfe6f2);
  const logo = signTexture((x, w, h) => {
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#2e9e5b'; x.fillRect(10, 18, 108, 16); x.fillStyle = '#f28c28'; x.fillRect(10, 40, 108, 16);
    x.fillStyle = '#e23b3b'; x.font = 'bold 86px sans-serif'; x.textAlign = 'center'; x.fillText('7', 64, 98);
    x.font = 'bold 20px sans-serif'; x.fillText('ELEVEn', 64, 122);
  }, 128, 128);
  const lg = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 0.14), [mat(0xffffff), mat(0xffffff), mat(0xffffff), mat(0xffffff), new THREE.MeshLambertMaterial({ map: logo }), mat(0xffffff)]);
  lg.position.set(W / 2 - 1.1, 0.22 + H + 1.05, D / 2 - 0.3); lg.castShadow = true; g.add(lg);
  g.add(box(0.12, 0.8, 0.12, 0xdedad4, W / 2 - 1.1, 0.22 + H + 0.35, D / 2 - 0.3));
  [[0xe8564e, -0.5], [0x5d8fd0, 0.45]].forEach(([c, dz]) => {                         // vending machines at the side
    g.add(box(0.8, 1.8, 0.75, c, W / 2 + 0.45, 1.12, D / 2 - 1.2 + dz));
    const panel = box(0.04, 0.9, 0.55, 0, W / 2 + 0.86, 1.4, D / 2 - 1.2 + dz, new THREE.MeshLambertMaterial({ color: 0xfff7d6, emissive: 0xfff2b0, emissiveIntensity: 0.25 })); g.add(panel);
  });
  [-4, -3.2].forEach((x) => g.add(box(0.5, 0.5, 0.5, 0xf28c28, x, 0.47, D / 2 + 0.9)));   // crates of drinks out front
  g.userData.alwaysLit = true;                                                      // open 24/7
  return finishBuilding(g, W, D, H + 1.9, wm);
}
// a boxy luxury SUV, "G-Class-ish", in black with chrome bits
function makeSUV() {
  const g = new THREE.Group(), body = 0x26282d, chrome = 0xd9dde3, glass = 0x4f6375;
  g.add(box(1.9, 1.0, 4.4, body, 0, 0.95, 0));                                     // the box
  g.add(box(1.75, 0.78, 2.7, body, 0, 1.85, -0.35));                               // cabin
  [[-1, 0], [1, 0]].forEach(([sx]) => g.add(box(0.03, 0.55, 2.4, glass, sx * 0.885, 1.9, -0.35)));
  g.add(box(1.6, 0.55, 0.03, glass, 0, 1.9, 1.01)); g.add(box(1.6, 0.55, 0.03, glass, 0, 1.9, -1.71));
  g.add(box(1.92, 0.06, 4.42, chrome, 0, 1.46, 0));                                 // trim line
  g.add(box(1.3, 0.35, 0.05, 0x1b1c20, 0, 1.05, 2.21));                            // grille
  for (let k = -2; k <= 2; k++) g.add(box(0.03, 0.3, 0.06, chrome, k * 0.22, 1.05, 2.22));
  [-1, 1].forEach((sx) => {
    const hl = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.08, 14), mat(0xfff7d6, { emissive: 0xfff2b0, emissiveIntensity: 0.35 }));
    hl.rotation.x = Math.PI / 2; hl.position.set(sx * 0.72, 1.12, 2.22); g.add(hl);
    g.add(box(0.12, 0.12, 0.12, 0xffa64d, sx * 0.95, 1.5, 1.95));                 // indicators on the wings
    g.add(box(0.22, 0.35, 0.05, 0xe05a4f, sx * 0.78, 1.0, -2.22));                 // tail lights
  });
  g.add(box(1.94, 0.18, 0.2, 0x1b1c20, 0, 0.5, 2.25)); g.add(box(1.94, 0.18, 0.2, 0x1b1c20, 0, 0.5, -2.25));   // bumpers
  const spare = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.24, 16), mat(0x1b1c20)); spare.rotation.x = Math.PI / 2; spare.position.set(0, 1.15, -2.35); g.add(spare);
  const sc = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.26, 12), mat(chrome)); sc.rotation.x = Math.PI / 2; sc.position.set(0, 1.15, -2.36); g.add(sc);
  [[-0.95, 1.45], [0.95, 1.45], [-0.95, -1.4], [0.95, -1.4]].forEach(([x, z]) => {
    const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.34, 14), mat(0x1b1c20)); wh.rotation.z = Math.PI / 2; wh.position.set(x, 0.42, z); wh.castShadow = true; g.add(wh);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.36, 10), mat(chrome)); hub.rotation.z = Math.PI / 2; hub.position.set(x, 0.42, z); g.add(hub);
  });
  g.add(box(1.5, 0.05, 2.2, 0x3a3c42, 0, 2.27, -0.35));                            // roof rack
  return g;
}

/* ---------------- the Love lot: fence, garage, driveway and a little sports car ---------------- */
function makeCar() {
  // a soft, rounded rear-engine coupé — "911-ish"
  const g = new THREE.Group(), body = 0xe7eaee, dark = 0x2e2a36, glass = 0x6f86a0;
  g.add(box(1.75, 0.42, 4.1, body, 0, 0.5, 0));                                     // lower body
  [-1, 1].forEach((sx) => {                                                          // round front fenders
    const f = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.3, 14, 1, false, 0, Math.PI), mat(body));
    f.rotation.set(Math.PI / 2, 0, -Math.PI / 2); f.position.set(sx * 0.62, 0.66, 1.25); f.scale.set(1, 1, 0.7); f.castShadow = true; g.add(f);
    const hl = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.06, 14), mat(0xfff7d6, { emissive: 0xfff2b0, emissiveIntensity: 0.3 }));
    hl.rotation.x = Math.PI / 2; hl.position.set(sx * 0.62, 0.78, 1.92); g.add(hl);
    g.add(box(0.3, 0.08, 0.04, 0xe05a4f, sx * 0.55, 0.62, -2.06));                 // tail lights
  });
  const roof = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2), mat(body));
  roof.scale.set(0.82, 0.55, 1.55); roof.position.set(0, 0.7, -0.35); roof.castShadow = true; g.add(roof);
  const win = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2), mat(glass));
  win.scale.set(0.84, 0.47, 1.2); win.position.set(0, 0.72, -0.2); g.add(win);
  g.add(box(1.5, 0.05, 0.25, dark, 0, 0.92, -2.0));                                // little rear wing
  [[-0.82, 1.3], [0.82, 1.3], [-0.82, -1.25], [0.82, -1.25]].forEach(([x, z]) => {
    const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.24, 14), mat(dark)); wh.rotation.z = Math.PI / 2; wh.position.set(x, 0.34, z); wh.castShadow = true; g.add(wh);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.26, 10), mat(0xc9ced6)); hub.rotation.z = Math.PI / 2; hub.position.set(x, 0.34, z); g.add(hub);
  });
  g.add(box(0.5, 0.14, 0.03, 0xffffff, 0, 0.45, 2.06));                            // plate
  return g;
}
function buildLot(world, face) {
  if (!LOT) return { posts: [], blocks: [] };
  const L = LOT, out = { posts: [], blocks: [] };
  const [hx, hz] = HOUSE_POS[L.house], [cx, cz] = L.car;
  const front = face === Math.PI ? L.z0 : L.z1;                                   // the side facing the road
  const gy = groundY(hx, hz);
  // a low white wall with a gate at the path and an opening for the driveway
  const gaps = [[hx - 1.2, hx + 1.2], [cx - 1.6, cx + 1.6]];
  const inGap = (x, z) => Math.abs(z - front) < 0.01 && gaps.some(([a, b]) => x > a && x < b);
  const side = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), n = Math.max(1, Math.round(len / 1.0));
    for (let k = 0; k < n; k++) {
      const x = lerp(x0, x1, (k + 0.5) / n), z = lerp(z0, z1, (k + 0.5) / n);
      if (inGap(x, z)) continue;
      const seg = box(len / n + 0.02, 0.55, 0.22, 0xf4f1ec, x, gy + 0.27, z); seg.rotation.y = Math.atan2(x1 - x0, z1 - z0) + Math.PI / 2; world.add(seg);
      const hedge = box(len / n, 0.32, 0.3, 0x86c27e, x, gy + 0.68, z); hedge.rotation.y = seg.rotation.y; world.add(hedge);
      out.posts.push({ x, z, r: 0.45 });
    }
  };
  side(L.x0, L.z0, L.x1, L.z0); side(L.x1, L.z0, L.x1, L.z1); side(L.x1, L.z1, L.x0, L.z1); side(L.x0, L.z1, L.x0, L.z0);
  // the built-in garage is part of the house (for walking it's in the way)
  out.blocks.push({ x: hx + 5.5, z: hz, hw: 2.5, hd: 2.8 });
  // driveway out to the road + the SUV on it, nose to the road
  const dz0 = Math.min(front, cz) - 1.5, dz1 = Math.max(front, cz) + 0.5;
  world.add(box(3.4, 0.05, Math.abs(dz1 - dz0) + 1.5, 0xd7d2cb, cx, gy + 0.025, (dz0 + dz1) / 2 - 0.5));
  const car = makeSUV(); car.position.set(cx, gy, cz); car.rotation.y = face; world.add(car);
  out.blocks.push({ x: cx, z: cz, hw: 1.2, hd: 2.4 });
  out.car = car; out.exit = { x: cx, z: front + (face === Math.PI ? -1.6 : 1.6) };
  // stepping stones from the gate to the door
  world.add(box(1.3, 0.05, Math.abs(hz - front), 0xeadfcf, hx, gy + 0.03, (hz + front) / 2));
  return out;
}

const CHERRY = [0xf9b9cf, 0xf6a5c0, 0xfcd3e1];
// trees in a few kinds so the island doesn't look copy-pasted: round (layers of leaf puffs), pine, tall, cherry
const LEAF_PAIRS = [[0x86cc80, 0xaee0a0], [0x6fbf8f, 0x9ad9b0], [0x8fbf6a, 0xb8dc8c], [0x9ad690, 0xc5e8a5], [0x7cc9a4, 0xa8e0c4]];
const leafGeo = new THREE.SphereGeometry(1, 11, 8);
function makeTree(r, kind) {
  if (kind === true) kind = 'cherry';
  if (!kind) { const x = r(); kind = x < 0.5 ? 'round' : x < 0.75 ? 'tall' : 'pine'; }
  const g = new THREE.Group(), s = 1.15 + r() * 0.55, pair = kind === 'cherry' ? [0xf6a5c0, 0xfcd3e1] : LEAF_PAIRS[Math.floor(r() * LEAF_PAIRS.length)];
  const bark = kind === 'cherry' ? 0x9a6f5a : 0x8f6448;
  const puff = (x, y, z, rad, c, sy) => { const m = new THREE.Mesh(leafGeo, mat(c)); m.scale.set(rad, rad * (sy || 0.86), rad); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; g.add(m); };
  const trunkH = (kind === 'tall' ? 2.0 : kind === 'pine' ? 0.8 : 1.5) * s;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * s, 0.34 * s, trunkH, 10), mat(bark)); trunk.position.y = trunkH / 2; trunk.castShadow = true; g.add(trunk);
  for (let k = 0; k < 3; k++) {                                   // roots flaring out at the foot
    const a = k / 3 * Math.PI * 2 + r(), root = new THREE.Mesh(leafGeo, mat(bark));
    root.scale.set(0.26 * s, 0.14 * s, 0.16 * s); root.position.set(Math.cos(a) * 0.3 * s, 0.06, Math.sin(a) * 0.3 * s); root.rotation.y = -a; g.add(root);
  }
  if (kind === 'pine') {                                          // three soft, droopy tiers
    [[1.25, 1.3, 0.7], [0.98, 1.15, 1.55], [0.68, 1.0, 2.3]].forEach(([w, h, y], k) => {
      const prof = [new THREE.Vector2(0.001, h), new THREE.Vector2(w * 0.3, h * 0.82), new THREE.Vector2(w * 0.85, h * 0.25), new THREE.Vector2(w, h * 0.06), new THREE.Vector2(w * 0.8, 0), new THREE.Vector2(0.001, 0.02)];
      const tier = new THREE.Mesh(new THREE.LatheGeometry(prof, 16), mat(k % 2 ? pair[1] : pair[0])); tier.scale.setScalar(s); tier.position.y = y * s; tier.castShadow = true; tier.receiveShadow = true; g.add(tier);
    });
  } else if (kind === 'tall') {
    puff(0, trunkH + 1.0 * s, 0, 0.95 * s, pair[0], 1.45);
    puff(0.35 * s, trunkH + 1.5 * s, 0.2 * s, 0.62 * s, pair[1], 1.1);
    puff(-0.3 * s, trunkH + 0.6 * s, -0.2 * s, 0.6 * s, pair[0], 1.0);
  } else {                                                        // round: a ring of puffs, a core, lighter puffs on top
    const top = trunkH + 0.55 * s, n = 7;
    puff(0, top + 0.2 * s, 0, 1.05 * s, pair[0], 0.82);
    for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 2 + r() * 0.3; puff(Math.cos(a) * 0.8 * s, top - 0.05 * s + r() * 0.2 * s, Math.sin(a) * 0.8 * s, (0.5 + r() * 0.12) * s, pair[0]); }
    for (let k = 0; k < 4; k++) { const a = k / 4 * Math.PI * 2 + r(); puff(Math.cos(a) * 0.42 * s, top + 0.72 * s, Math.sin(a) * 0.42 * s, (0.46 + r() * 0.1) * s, pair[1]); }
    puff(0, top + 1.05 * s, 0, 0.42 * s, pair[1]);
    if (kind === 'cherry') {
      const pc = new THREE.Mesh(new THREE.CircleGeometry(1.4 * s, 16), mat(0xfbd3e0)); pc.rotation.x = -Math.PI / 2; pc.position.y = 0.02; pc.receiveShadow = true; g.add(pc);
    }
  }
  g.rotation.y = r() * 6.28;
  g.userData.kind = kind;
  return g;
}
// a soft round bush, sometimes with little flowers on it
function makeBush(r, flowers) {
  const g = new THREE.Group(), pair = LEAF_PAIRS[Math.floor(r() * LEAF_PAIRS.length)], s = 0.55 + r() * 0.45;
  [[0, 0.45, 0, 0.62], [0.45, 0.33, 0.12, 0.45], [-0.4, 0.32, -0.08, 0.44], [0.05, 0.3, 0.42, 0.4]].forEach(([x, y, z, rad], k) => {
    const m = new THREE.Mesh(leafGeo, mat(k ? pair[0] : pair[1])); m.scale.set(rad * s, rad * s * 0.85, rad * s); m.position.set(x * s, y * s, z * s); m.castShadow = true; g.add(m);
  });
  if (flowers) {
    const fc = [0xffffff, 0xfff1a8, 0xffc6dd][Math.floor(r() * 3)];
    for (let k = 0; k < 7; k++) { const a = r() * 6.28, f = new THREE.Mesh(leafGeo, mat(fc)); f.scale.setScalar(0.08 * s); f.position.set(Math.cos(a) * 0.45 * s, (0.62 + r() * 0.18) * s, Math.sin(a) * 0.45 * s); g.add(f); }
  }
  g.rotation.y = r() * 6.28;
  return g;
}

// the underside of a floating island: earthy rock that tapers to a point, with ridges running down it
// rad(t) = the edge radius at angle t; rings = [[y, radius factor], …]
const CLIFF_COLS = [0xc08a5e, 0xae7a55, 0x9c6d4f, 0x8b6450, 0x7a5c52, 0x6d5652];
function buildCliff(rad, rings, tipY, seed, n) {
  const R = rng(seed || 7), N = n || 120;
  const col = Array.from({ length: N }, () => R()), ridge = (i) => (col[(i + N - 1) % N] + 2 * col[i] + col[(i + 1) % N]) / 4 - 0.5;
  const P = rings.map(([y, f], k) => {
    const row = [];
    for (let i = 0; i < N; i++) {
      const t = i / N * Math.PI * 2, j = k === 0 ? 0 : ridge(i) * 0.2 * (0.6 + k * 0.15) + (R() - 0.5) * 0.04;
      const rr = rad(t) * f * (1 + j);
      row.push(new THREE.Vector3(Math.cos(t) * rr, y + (k ? (R() - 0.5) * 0.5 : 0), -Math.sin(t) * rr));
    }
    return row;
  });
  const tip = new THREE.Vector3(0, tipY, 0), pos = [], cols = [], c = new THREE.Color(), e1 = new THREE.Vector3(), e2 = new THREE.Vector3(), nn = new THREE.Vector3();
  const tri = (a, b, d, k) => {
    e1.subVectors(b, a); e2.subVectors(d, a); nn.crossVectors(e1, e2);
    const out = (a.x + b.x + d.x) * nn.x + (a.z + b.z + d.z) * nn.z;
    const vs = out >= 0 ? [a, b, d] : [a, d, b];
    c.set(CLIFF_COLS[Math.min(CLIFF_COLS.length - 1, k)]).offsetHSL(0, 0, (R() - 0.5) * 0.06);
    vs.forEach((v) => { pos.push(v.x, v.y, v.z); cols.push(c.r, c.g, c.b); });
  };
  for (let k = 0; k < P.length - 1; k++) for (let i = 0; i < N; i++) {
    const a = P[k][i], b = P[k][(i + 1) % N], d = P[k + 1][(i + 1) % N], e = P[k + 1][i];
    tri(a, b, d, k); tri(a, d, e, k);
  }
  const L = P[P.length - 1];
  for (let i = 0; i < N; i++) tri(L[i], L[(i + 1) % N], tip, P.length);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true }));
  m.receiveShadow = true; m.userData.keepBatch = true;
  return m;
}
// a small floating islet: grass cap, rock below, and what grows on it
function makeIslet(rad, seed, deco) {
  const g = new THREE.Group(), R = rng(seed);
  const sh = new THREE.Shape();
  for (let i = 0; i <= 40; i++) { const t = i / 40 * Math.PI * 2, rr = rad * (1 + 0.05 * Math.sin(3 * t + seed)); if (i) sh.lineTo(Math.cos(t) * rr, -Math.sin(t) * rr); else sh.moveTo(Math.cos(t) * rr, -Math.sin(t) * rr); }
  const cap = new THREE.ExtrudeGeometry(sh, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.2, bevelSegments: 4, curveSegments: 4 });
  cap.rotateX(-Math.PI / 2); cap.translate(0, -0.4, 0);
  const capM = new THREE.Mesh(cap, mat(COL.grass)); capM.receiveShadow = true; g.add(capM);
  const D = rad * 1.5;
  g.add(buildCliff((t) => rad * (1 + 0.05 * Math.sin(3 * t + seed)), [[-0.45, 1], [-0.45 - 0.22 * D, 0.93], [-0.45 - 0.5 * D, 0.72], [-0.45 - 0.78 * D, 0.42], [-0.45 - 0.95 * D, 0.18]], -0.45 - 1.2 * D, seed, 40));
  deco(g, R);
  return mergeByMaterial(g);
}
// fold a group's meshes into one mesh per material (fewer draw calls); vertex-coloured ones stay as they are
function mergeByMaterial(g) {
  g.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(g.matrixWorld).invert(), buckets = new Map(), drop = [];
  g.traverse((o) => {
    if (!o.isMesh || o.userData.keepBatch || Array.isArray(o.material) || o.material.transparent) return;
    let geo = o.geometry.clone();
    Object.keys(geo.attributes).forEach((k) => { if (k !== 'position' && k !== 'normal' && k !== 'uv') geo.deleteAttribute(k); });
    if (!geo.attributes.uv) { geo.dispose(); return; }
    if (geo.index) geo = geo.toNonIndexed();
    geo.clearGroups(); geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    if (!buckets.has(o.material)) buckets.set(o.material, []);
    buckets.get(o.material).push(geo); drop.push(o);
  });
  drop.forEach((o) => o.parent.remove(o));
  buckets.forEach((geos, m) => { const merged = mergeGeometries(geos, false); geos.forEach((x) => x.dispose()); if (!merged) return; const mesh = new THREE.Mesh(merged, m); mesh.castShadow = true; mesh.receiveShadow = true; g.add(mesh); });
  return g;
}
function makeLamp() {
  const g = new THREE.Group();
  g.add(box(0.16, 2.2, 0.16, 0x8c7a6b, 0, 1.1, 0));
  const glass = new THREE.MeshLambertMaterial({ color: 0xfff4cf, emissive: 0xffd27a, emissiveIntensity: 0 });
  lampMats.push(glass);
  g.add(box(0.5, 0.5, 0.5, 0, 0, 2.45, 0, glass));
  g.add(box(0.62, 0.12, 0.62, 0x8c7a6b, 0, 2.76, 0));
  return g;
}

/* ---------------- animals & people ---------------- */
/* A character is built from many little boxes; for drawing, the boxes that move
   together (the head, each arm, each leg, the body) are merged into one mesh with
   vertex colours. Same look, ~6 draw calls per person instead of ~25. */
const RIG_MAT = new THREE.MeshLambertMaterial({ vertexColors: true });
function bakeRig(root, skip) {
  const nodes = [];
  root.traverse((n) => { if (!n.isMesh) nodes.push(n); });
  nodes.forEach((node) => {
    const meshes = node.children.filter((c) => c.isMesh && !(skip && skip.includes(c)) && !c.material.transparent && !c.material.map);
    if (meshes.length < 2) return;
    const geos = meshes.map((m) => {
      let g = m.geometry.clone();
      Object.keys(g.attributes).forEach((k) => { if (k !== 'position' && k !== 'normal') g.deleteAttribute(k); });
      if (g.index) g = g.toNonIndexed();
      g.clearGroups();
      m.updateMatrix(); g.applyMatrix4(m.matrix);
      const c = m.material.color, n = g.attributes.position.count, col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      return g;
    });
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (!merged) return;
    meshes.forEach((m) => node.remove(m));
    const mesh = new THREE.Mesh(merged, RIG_MAT); mesh.castShadow = true; mesh.receiveShadow = true;
    node.add(mesh);
  });
}
function limb(w, h, d, color, x, y, z) {   // pivot at the top
  const p = new THREE.Group(); p.position.set(x, y, z);
  const m = box(w, h, d, color, 0, -h / 2, 0); p.add(m);
  return p;
}
const LOOKS = [
  { hair: 0x5a4040, skin: 0xffdcc6, shirt: 0xb9a6e8, pants: 0x6d6a8a, style: 'short' },               // Work
  { hair: 0x3b2f2f, skin: 0xf3c8a6, shirt: 0xf9c39c, pants: 0x7c8aa8, style: 'bun' },                  // Money
  { hair: 0xa8714a, skin: 0xffe2d0, shirt: 0xa6d8e8, pants: 0x8a7a6a, style: 'cap', cap: 0x86bfd6 },   // Calendar
  { hair: 0x2e2a36, skin: 0xedbd9a, shirt: 0xa3d9bd, pants: 0x5f6a7a, style: 'short' },               // Account
  { hair: 0x1f1b24, skin: 0xffdcc6, shirt: 0xffb6c1, pants: 0x8a8fb8, style: 'twin' },                 // Languages
  { hair: 0x8a5a3c, skin: 0xf6cfb0, shirt: 0xf5d888, pants: 0x6d6a8a, style: 'cap', cap: 0xf19bb0 },  // Skills
  { hair: 0x4a3a3a, skin: 0xe9b894, shirt: 0x8fb3d9, pants: 0x4f4a5a, style: 'short', glasses: true },// Law
  { hair: 0xc98b5a, skin: 0xffe2d0, shirt: 0x9ad690, pants: 0x7c8aa8, style: 'long' },                 // Food & Gym
  { hair: 0x3b2f2f, skin: 0xf3c8a6, shirt: 0xfff1a8, pants: 0x8a7a6a, style: 'bun', glasses: true },  // Notes
  null,                                                                                               // Love: the couple
  { hair: 0x5a4040, skin: 0xedbd9a, shirt: 0xd9c9f0, pants: 0x6d6a8a, style: 'long' },                 // Goals
  { hair: 0x2e2a36, skin: 0xffdcc6, shirt: 0xf5d888, pants: 0x7c8aa8, style: 'bun' },                  // Day Counter
  { hair: 0x8a5a3c, skin: 0xf3c8a6, shirt: 0x9fcfe4, pants: 0x5f6a7a, style: 'short', glasses: true }, // PDF
  { hair: 0x3b2f2f, skin: 0xe9b894, shirt: 0xa3d9bd, pants: 0x6d6a8a, style: 'cap', cap: 0xa3d9bd },  // QR
  { hair: 0xc98b5a, skin: 0xffe2d0, shirt: 0xcdb9ee, pants: 0x8a8fb8, style: 'twin' },                 // Symbols
  { hair: 0x241e22, skin: 0xf6cfb0, shirt: 0xf9c39c, pants: 0x7c8aa8, style: 'short' },               // Yakult
  { hair: 0x5a4040, skin: 0xffdcc6, shirt: 0xffb6c1, pants: 0x6d6a8a, style: 'long' },                 // Memory
  { hair: 0x1f1b24, skin: 0xedbd9a, shirt: 0x8cc8a8, pants: 0x4f4a5a, style: 'cap', cap: 0xf6a9bd },  // Minesweeper
  { hair: 0xa8714a, skin: 0xffe2d0, shirt: 0xf5d888, pants: 0x8a7a6a, style: 'bun' }                   // Mochi Fly
];
const LOVE_LOOKS = {
  her: { hair: 0x3b2a2a, skin: 0xffdcc6, shirt: 0xffb6c1, pants: 0xffb6c1, style: 'long', dress: 0xf6a9bd },
  him: { hair: 0x241e22, skin: 0xf0c4a0, shirt: 0x9fcfe4, pants: 0x5f6a8a, style: 'short' }
};
const HELPER_LOOKS = [
  { hair: 0x3b2f2f, skin: 0xf3c8a6, shirt: 0xf5b97a, pants: 0x6b7fa8, style: 'cap', cap: 0xf5d888 },
  { hair: 0x8a5a3c, skin: 0xffe2d0, shirt: 0xf5b97a, pants: 0x6b7fa8, style: 'cap', cap: 0xf5d888 },
  { hair: 0x241e22, skin: 0xe9b894, shirt: 0xf5b97a, pants: 0x6b7fa8, style: 'cap', cap: 0xf5d888 }
];
/* ---- Minecraft-style people: a 64×64 pixel "skin" per person, painted in a canvas and
   wrapped onto the boxes with the classic skin layout (head 8×8×8, body 8×12×4, arms
   and legs 4×12×4). 32 px tall = 1.75 m. ---- */
const PX = 1.75 / 32;            // metres per skin pixel
const HIP = 12 * PX;             // hip height (for sitting)
function hexCss(n, k) {          // colour → css, k = brightness factor
  const c = new THREE.Color(n);
  if (k) { c.r = Math.min(1, c.r * k); c.g = Math.min(1, c.g * k); c.b = Math.min(1, c.b * k); }
  return '#' + c.getHexString();
}
function paintSkin(look, sleeping) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const x = cv.getContext('2d');
  let seed = (look.hair ^ look.shirt ^ look.skin) >>> 0;
  const rr = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  // fill a rect with a colour and a little pixel noise (that Minecraft texture feel)
  const fill = (x0, y0, w, h, col, noise) => {
    for (let yy = 0; yy < h; yy++) for (let xx = 0; xx < w; xx++) {
      x.fillStyle = hexCss(col, 1 + ((rr() - 0.5) * (noise == null ? 0.1 : noise)));
      x.fillRect(x0 + xx, y0 + yy, 1, 1);
    }
  };
  const dot = (px, py, col) => { x.fillStyle = typeof col === 'string' ? col : hexCss(col); x.fillRect(px, py, 1, 1); };
  const shoe = 0x5b4636, sk = look.skin, hair = look.hair, shirt = look.shirt, pants = look.pants;
  const long = look.style === 'long' || look.style === 'twin' || look.dress;
  // ---- head (u0 v0): top 8,0 · bottom 16,0 · right 0,8 · front 8,8 · left 16,8 · back 24,8
  fill(0, 0, 32, 16, sk, 0.06);
  fill(8, 0, 8, 8, hair);                               // top of the head
  fill(24, 8, 8, long ? 8 : 6, hair);                   // back
  [0, 16].forEach((u) => { fill(u, 8, 8, long ? 7 : 4, hair); fill(u + (u ? 6 : 0), 12, 2, long ? 4 : 2, hair); });   // sides
  // face
  fill(8, 8, 8, 2, hair);                               // fringe
  dot(8, 10, hair); dot(15, 10, hair); dot(9, 10, hair);
  if (look.style === 'cap') { fill(8, 0, 8, 8, look.cap); fill(8, 8, 8, 2, look.cap); fill(0, 8, 8, 2, look.cap); fill(16, 8, 8, 2, look.cap); fill(24, 8, 8, 2, look.cap); }
  [[9, 12], [13, 12]].forEach(([ex, ey]) => {
    if (sleeping) { dot(ex, ey + 1, '#3a2e33'); dot(ex + 1, ey + 1, '#3a2e33'); return; }     // eyes closed
    dot(ex, ey, '#ffffff'); dot(ex + 1, ey, '#3a2e33'); dot(ex, ey + 1, '#ffffff'); dot(ex + 1, ey + 1, '#3a2e33');
  });
  dot(9, 14, '#ffa3b5'); dot(14, 14, '#ffa3b5');        // blush
  dot(11, 14, hexCss(sk, 0.78)); dot(12, 14, hexCss(sk, 0.78));   // nose shadow
  dot(11, 15, '#c9707c'); dot(12, 15, '#c9707c');       // mouth
  if (look.glasses) { [9, 13].forEach((gx) => { ['#6b5a4e'].forEach((c) => { dot(gx - 1, 12, c); dot(gx + 2, 12, c); dot(gx - 1, 13, c); dot(gx + 2, 13, c); }); }); dot(11, 12, '#6b5a4e'); dot(12, 12, '#6b5a4e'); }
  // ---- body (u16 v16): top 20,16 · bottom 28,16 · right 16,20 · front 20,20 · left 28,20 · back 32,20
  fill(16, 16, 24, 16, shirt);
  fill(20, 16, 8, 4, shirt, 0.05);
  fill(23, 20, 2, 1, sk);                               // little neckline
  if (look.dress) { fill(16, 26, 24, 6, look.dress); fill(20, 25, 8, 1, hexCss(look.dress, 0.9) && look.dress); }
  else fill(16, 30, 24, 2, hexCss(pants, 0.85) && pants, 0.05);   // belt line
  fill(20, 22, 8, 1, shirt, 0.25);                      // a bit of fold
  // ---- arms: right (u40 v16) · left (u32 v48): sleeve, then skin, hands
  [[40, 16], [32, 48]].forEach(([u, v]) => {
    fill(u, v, 16, 16, shirt);
    fill(u, v + 4 + 5, 16, 7, sk, 0.06);                 // forearm (short sleeves)
    fill(u + 4, v, 4, 4, shirt);                         // shoulder top
    fill(u + 8, v, 4, 4, sk);                            // hand bottom
  });
  // ---- legs: right (u0 v16) · left (u16 v48): trousers (or dress), shoes
  [[0, 16], [16, 48]].forEach(([u, v]) => {
    fill(u, v, 16, 16, look.dress ? sk : pants);
    if (look.dress) fill(u, v + 4, 16, 3, look.dress);
    fill(u, v + 4 + 10, 16, 2, shoe, 0.05);
    fill(u + 8, v, 4, 4, shoe);                          // soles
  });
  const tx = new THREE.CanvasTexture(cv);
  tx.magFilter = THREE.NearestFilter; tx.minFilter = THREE.NearestFilter; tx.generateMipmaps = false;
  tx.colorSpace = THREE.SRGBColorSpace;
  return tx;
}
// a box (pixel size pw×ph×pd) whose faces read the skin at (u, v) in the standard layout
function skinBox(pw, ph, pd, u, v) {
  const g = new THREE.BoxGeometry(pw * PX, ph * PX, pd * PX);
  const S = 64, rect = (x0, y0, w, h, flip) => {
    const u0 = x0 / S, u1 = (x0 + w) / S, vt = 1 - y0 / S, vb = 1 - (y0 + h) / S;
    return flip ? [u1, vt, u0, vt, u1, vb, u0, vb] : [u0, vt, u1, vt, u0, vb, u1, vb];
  };
  // BoxGeometry face order: +x (their left), −x (their right), +y, −y, +z (front), −z (back)
  const faces = [
    rect(u + pd + pw, v + pd, pd, ph), rect(u, v + pd, pd, ph),
    rect(u + pd, v, pw, pd), rect(u + pd + pw, v, pw, pd, true),
    rect(u + pd, v + pd, pw, ph), rect(u + 2 * pd + pw, v + pd, pw, ph)
  ];
  const uv = g.attributes.uv;
  faces.forEach((f, fi) => { for (let k = 0; k < 4; k++) uv.setXY(fi * 4 + k, f[k * 2], f[k * 2 + 1]); });
  uv.needsUpdate = true;
  return g;
}
function makePerson(look) {
  const g = new THREE.Group(), parts = {};
  const m = new THREE.MeshLambertMaterial({ map: paintSkin(look) });
  parts.mat = m; parts.look = look;
  const part = (geo, x, y, z) => { const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); me.castShadow = true; me.receiveShadow = true; return me; };
  const pivot = (x, y, z, mesh) => { const p = new THREE.Group(); p.position.set(x, y, z); p.add(mesh); return p; };
  // legs hang from the hips, arms from the shoulders, the head sits on the neck
  parts.legR = pivot(-2 * PX, 12 * PX, 0, part(skinBox(4, 12, 4, 0, 16), 0, -6 * PX, 0)); g.add(parts.legR);
  parts.legL = pivot(2 * PX, 12 * PX, 0, part(skinBox(4, 12, 4, 16, 48), 0, -6 * PX, 0)); g.add(parts.legL);
  parts.body = part(skinBox(8, 12, 4, 16, 16), 0, 18 * PX, 0); g.add(parts.body);
  parts.armR = pivot(-6 * PX, 23.5 * PX, 0, part(skinBox(4, 12, 4, 40, 16), 0, -5.5 * PX, 0)); g.add(parts.armR);
  parts.armL = pivot(6 * PX, 23.5 * PX, 0, part(skinBox(4, 12, 4, 32, 48), 0, -5.5 * PX, 0)); g.add(parts.armL);
  const head = new THREE.Group(); head.position.y = 24 * PX; g.add(head); parts.head = head;
  head.add(part(skinBox(8, 8, 8, 0, 0), 0, 4 * PX, 0));
  // little extras in plain blocks
  const blockOf = (c, w, h, d, x, y, z) => { const b = sbox(w * PX, h * PX, d * PX, c, x * PX, y * PX, z * PX); head.add(b); };
  if (look.style === 'bun') blockOf(look.hair, 3, 3, 3, 0, 9.3, -2);
  if (look.style === 'twin') { blockOf(look.hair, 2, 4, 2, -4.6, 3.5, -1.5); blockOf(look.hair, 2, 4, 2, 4.6, 3.5, -1.5); }
  if (look.style === 'cap') blockOf(look.cap, 8, 1, 3, 0, 6.5, 5);
  if (look.style === 'long') blockOf(look.hair, 8, 5, 1, 0, -1.5, -4.5);
  if (look.dress) { const sk = sbox(9 * PX, 4 * PX, 5 * PX, look.dress, 0, 12.5 * PX, 0); g.add(sk); }
  return { g, parts };
}
function makeCat() {
  const g = new THREE.Group(), parts = {};
  const c = 0xf7c18a, dk = 0xe09d5e, wh = 0xfff3e6;
  g.add(sbox(0.46, 0.4, 0.8, c, 0, 0.5, 0));
  [-0.12, 0.1].forEach((z) => g.add(sbox(0.48, 0.06, 0.12, dk, 0, 0.71, z)));      // stripes
  g.add(sbox(0.36, 0.2, 0.5, wh, 0, 0.34, 0.05));
  parts.legs = [[-0.14, 0.28], [0.14, 0.28], [-0.14, -0.28], [0.14, -0.28]].map(([x, z]) => { const l = limb(0.13, 0.32, 0.13, c, x, 0.34, z); g.add(l); return l; });
  const head = new THREE.Group(); head.position.set(0, 0.78, 0.48); g.add(head); parts.head = head;
  head.add(sbox(0.5, 0.42, 0.42, c, 0, 0, 0));
  head.add(sbox(0.3, 0.16, 0.06, wh, 0, -0.1, 0.21));
  [-0.15, 0.15].forEach((x) => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.2, 4), mat(dk)); ear.position.set(x, 0.29, -0.02); ear.rotation.y = Math.PI / 4; head.add(ear);
    const eye = sbox(0.08, 0.1, 0.03, 0x3d3030, x * 0.8, 0.04, 0.215); head.add(eye); (parts.eyes = parts.eyes || []).push(eye);
  });
  head.add(sbox(0.07, 0.05, 0.03, 0xff9db0, 0, -0.04, 0.23));
  const tail = new THREE.Group(); tail.position.set(0, 0.62, -0.38); g.add(tail); parts.tail = tail;
  const t1 = sbox(0.1, 0.1, 0.4, c, 0, 0.05, -0.18); tail.add(t1);
  const t2 = new THREE.Group(); t2.position.set(0, 0.05, -0.36); tail.add(t2); t2.add(sbox(0.1, 0.4, 0.1, dk, 0, 0.18, 0));
  tail.rotation.x = 0.5;
  g.scale.setScalar(0.6);      // cat ≈ 0.45 m
  bakeRig(g, parts.eyes);
  return { g, parts };
}
function makeDog() {
  const g = new THREE.Group(), parts = {};
  const c = 0xfff4e6, br = 0xc9966f;
  g.add(sbox(0.56, 0.5, 0.95, c, 0, 0.62, 0));
  g.add(sbox(0.58, 0.3, 0.4, br, 0, 0.76, -0.15));          // brown patch
  parts.legs = [[-0.17, 0.33], [0.17, 0.33], [-0.17, -0.33], [0.17, -0.33]].map(([x, z]) => { const l = limb(0.16, 0.4, 0.16, c, x, 0.42, z); g.add(l); return l; });
  const head = new THREE.Group(); head.position.set(0, 0.98, 0.55); g.add(head); parts.head = head;
  head.add(sbox(0.56, 0.52, 0.5, c, 0, 0, 0));
  head.add(sbox(0.3, 0.24, 0.26, c, 0, -0.1, 0.34));
  head.add(sbox(0.13, 0.1, 0.06, 0x3d3030, 0, -0.02, 0.48));
  head.add(sbox(0.1, 0.12, 0.06, 0xff8fa3, 0.05, -0.24, 0.42));
  [-0.3, 0.3].forEach((x) => {
    const e = limb(0.12, 0.42, 0.26, br, x, 0.2, -0.02); e.rotation.z = x > 0 ? -0.15 : 0.15; head.add(e);
    const eye = sbox(0.08, 0.11, 0.03, 0x3d3030, x * 0.45, 0.08, 0.26); head.add(eye); (parts.eyes = parts.eyes || []).push(eye);
  });
  const tail = limb(0.12, 0.42, 0.12, br, 0, 0.82, -0.47); tail.rotation.x = -0.9; g.add(tail); parts.tail = tail;
  g.scale.setScalar(0.62);     // dog ≈ 0.75 m
  bakeRig(g, parts.eyes);
  return { g, parts };
}
function makeFish(i) {
  const g = new THREE.Group();
  const c = [0xff9a6b, 0xffffff, 0xffb347][i % 3];
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), mat(c)); body.scale.set(0.7, 0.6, 1.4); g.add(body);
  if (i % 3 === 1) { const sp = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(0xff7f50)); sp.position.set(0, 0.1, 0.05); sp.scale.set(1, 0.6, 1.4); g.add(sp); }
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.35, 4), mat(c === 0xffffff ? 0xff9a6b : c)); tail.rotation.x = Math.PI / 2; tail.position.z = -0.5; g.add(tail);
  g.userData.tail = tail;
  return g;
}
function makeButterfly(color) {
  const g = new THREE.Group();
  const wm = new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide });
  const wing = () => { const m = new THREE.Mesh(new THREE.PlaneGeometry(0.32, 0.26), wm); m.position.x = 0.17; const p = new THREE.Group(); p.add(m); return p; };
  const l = wing(), r = wing(); r.scale.x = -1; g.add(l, r);
  g.userData.l = l; g.userData.r = r;
  return g;
}

// a big old tree in the yard with the swing hanging from its long branch
function makeSwing() {
  const g = new THREE.Group(), bark = 0x9a6f5a, rope = 0xeadfcb, BY = 3.5;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.62, BY + 1.4, 16), mat(bark)); trunk.position.set(-2.0, (BY + 1.4) / 2, -0.2); trunk.castShadow = true; g.add(trunk);
  [[-0.5, 0.3], [0.45, -0.25], [0, 0.5]].forEach(([dx, dz]) => {        // roots
    const r = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 8), mat(bark)); r.scale.set(1.3, 0.45, 0.8); r.position.set(-2.0 + dx, 0.1, -0.2 + dz); g.add(r);
  });
  // the branch reaching out over the swing
  const br = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.26, 3.1, 12), mat(bark)); br.rotation.z = Math.PI / 2 - 0.12; br.position.set(-0.5, BY + 0.05, 0); br.castShadow = true; g.add(br);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), mat(bark)); tip.position.set(1.05, BY - 0.15, 0); g.add(tip);
  // a soft, round pink canopy (above and behind, so the swing stays in view)
  [[-2.0, BY + 2.4, -0.4, 1.8], [-0.7, BY + 1.6, -0.7, 1.25], [-3.0, BY + 1.5, -0.3, 1.1], [-1.8, BY + 3.4, -0.6, 1.15], [0.4, BY + 1.2, -0.5, 0.8], [-2.5, BY + 1.3, 0.7, 0.95]]
    .forEach(([x, y, z, r], i) => { const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 2), mat(CHERRY[i % 3])); m.position.set(x, y, z); m.castShadow = true; g.add(m); });
  const pc = new THREE.Mesh(new THREE.CircleGeometry(2.0, 20), mat(0xfbd3e0)); pc.rotation.x = -Math.PI / 2; pc.position.set(-1.6, 0.02, -0.2); pc.receiveShadow = true; g.add(pc);
  const pivot = new THREE.Group(); pivot.position.set(0, BY - 0.12, 0); g.add(pivot);
  const len = BY - 0.12 - 0.56;
  [-0.72, 0.72].forEach((x) => pivot.add(box(0.04, len, 0.04, rope, x, -len / 2, 0)));
  const seat = box(1.65, 0.1, 0.5, 0xf6a9bd, 0, -len, 0); pivot.add(seat);
  g.userData.pivot = pivot; g.userData.seat = seat;
  return g;
}
// a plain floating word (no frame): soft colour with a white outline so it reads on anything
function labelSprite(text, color, h) {
  const fs = 64, c = document.createElement('canvas'), x0 = c.getContext('2d');
  x0.font = '800 ' + fs + 'px Nunito, sans-serif';
  const w = Math.ceil(x0.measureText(text).width) + 40;
  c.width = w; c.height = fs + 36;
  const x = c.getContext('2d');
  x.font = '800 ' + fs + 'px Nunito, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineJoin = 'round';
  x.lineWidth = 14; x.strokeStyle = 'rgba(255,255,255,0.95)'; x.strokeText(text, w / 2, c.height / 2);
  x.fillStyle = color; x.fillText(text, w / 2, c.height / 2);
  const tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tx, transparent: true, depthWrite: false, depthTest: false }));
  sp.scale.set(h * w / c.height, h, 1); sp.renderOrder = 5;
  return sp;
}
function textSprite(text, color, w, h) {
  const c = document.createElement('canvas'); c.width = 128; c.height = 64;
  const x = c.getContext('2d');
  x.font = 'bold 48px sans-serif'; x.fillStyle = color; x.textAlign = 'center'; x.fillText(text, 64, 50);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
  sp.scale.set(w, h, 1); sp.visible = false;
  return sp;
}


/* ---------------- terrain extras: the hill, mountains, the river, bridges, the park ---------------- */
function inPark(x, z) {
  const e = Math.hypot((x - POND.x) / (POND.rx + 4.4), (z - POND.z) / (POND.rz + 4.4));
  return e < 1 && !inPond(x, z, 0.4);
}
function buildHill(world) {
  const H = HILL, sh = new THREE.Shape(), r = H.r, x0 = -H.hw + 0.6, x1 = H.hw - 0.6, y0 = -H.hd + 0.6, y1 = H.hd - 0.6, rr = Math.max(0.5, r - 0.6);
  sh.moveTo(x0 + rr, y0); sh.lineTo(x1 - rr, y0); sh.quadraticCurveTo(x1, y0, x1, y0 + rr);
  sh.lineTo(x1, y1 - rr); sh.quadraticCurveTo(x1, y1, x1 - rr, y1); sh.lineTo(x0 + rr, y1);
  sh.quadraticCurveTo(x0, y1, x0, y1 - rr); sh.lineTo(x0, y0 + rr); sh.quadraticCurveTo(x0, y0, x0 + rr, y0);
  const geo = new THREE.ExtrudeGeometry(sh, { depth: H.h - 0.8, bevelEnabled: true, bevelThickness: 0.4, bevelSize: 0.6, bevelSegments: 2, curveSegments: 8 });
  geo.rotateX(-Math.PI / 2); geo.translate(H.x, 0.4, H.z);
  const hill = new THREE.Mesh(geo, [mat(COL.grass), mat(0xc4a88a, {})]);
  hill.castShadow = true; hill.receiveShadow = true; world.add(hill);
  // a darker band of rock half way up, and boulders around the foot
  const band = new THREE.ExtrudeGeometry(sh, { depth: H.h * 0.42, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.75, bevelSegments: 1, curveSegments: 8 });
  band.rotateX(-Math.PI / 2); band.translate(H.x, 0.2, H.z);
  const bm = new THREE.Mesh(band, mat(0xa98f78, {})); bm.receiveShadow = true; world.add(bm);
  const R = rng(17);
  for (let i = 0; i < 46; i++) {
    const t = R() * Math.PI * 2, px = H.x + Math.cos(t) * (H.hw + 0.4), pz = H.z + Math.sin(t) * (H.hd + 0.4);
    const ex = H.x + Math.max(-H.hw, Math.min(H.hw, px - H.x)), ez = H.z + Math.max(-H.hd, Math.min(H.hd, pz - H.z));
    if (onRamp(ex, ez + 0.8) || Math.abs(ex - RAMP.x) < 2.2 && ez > H.z) continue;
    const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(0.35 + R() * 0.6, 2), mat([0xb7a38f, 0xa39280, 0xc9b8a6][i % 3], {}));
    rock.position.set(ex, 0.2 + R() * 0.3, ez); rock.rotation.set(R() * 3, R() * 3, R() * 3); rock.castShadow = true; world.add(rock);
  }
  // the ramp up (with steps and a railing)
  const dz = RAMP.z1 - RAMP.z0, L = Math.hypot(dz, H.h), ang = Math.atan2(H.h, dz);
  const ramp = new THREE.Group(); ramp.position.set(RAMP.x, H.h / 2, (RAMP.z0 + RAMP.z1) / 2); ramp.rotation.x = ang; world.add(ramp);
  ramp.add(box(2.2, 0.3, L + 0.4, 0xe6cfa3, 0, -0.12, 0));
  for (let k = 0; k < L / 0.45; k++) ramp.add(box(2.2, 0.06, 0.08, 0xd2b88f, 0, 0.05, -L / 2 + 0.2 + k * 0.45));
  [-1.15, 1.15].forEach((sx) => {
    ramp.add(box(0.08, 0.08, L, 0xc49674, sx, 0.75, 0));
    for (let k = 0; k <= 5; k++) ramp.add(box(0.1, 0.8, 0.1, 0xb08a68, sx, 0.38, -L / 2 + k * L / 5));
  });
}
// a soft mountain: wide at the foot, a rounded top (radius at height y)
function mtnR(r, h, y) { const t = Math.min(1, Math.max(0, y / h)); return r * Math.pow(1 - Math.pow(t, 1.7), 0.62); }
function mtnGeo(r, h, from) {
  const pts = [];
  for (let k = 0; k <= 24; k++) { const y = (from || 0) + (h - (from || 0)) * k / 24; pts.push(new THREE.Vector2(Math.max(0.001, mtnR(r, h, y)), y)); }
  return new THREE.LatheGeometry(pts, 36);
}
function buildMountains(world) {
  MOUNTAINS.forEach(([x, z, r, h], i) => {
    const m = new THREE.Mesh(mtnGeo(r, h), mat([0xa9c7b6, 0x9fbccb, 0xb3cdb9][i % 3], {}));
    m.position.set(x, -0.2, z); m.castShadow = true; m.receiveShadow = true; world.add(m);
    const cap = new THREE.Mesh(mtnGeo(r * 1.03, h * 1.005, h * 0.7), mat(0xffffff, {}));
    cap.position.set(x, -0.2, z); world.add(cap);
    // a smaller rounded foothill beside it (not on the side the water comes down)
    const sa = Math.atan2(SOURCE && SOURCE.i === i ? -SOURCE.dz : 0.25, SOURCE && SOURCE.i === i ? -SOURCE.dx : 1) + 0.9;
    const fh = new THREE.Mesh(mtnGeo(r * 0.6, h * 0.5), mat(0xb9dba5, {}));
    fh.position.set(x + Math.cos(sa) * r * 0.75, -0.2, z + Math.sin(sa) * r * 0.75); fh.castShadow = true; fh.receiveShadow = true; world.add(fh);
  });
}
function buildRiver(world) {
  const curve = new THREE.CatmullRomCurve3(RIVER.map((p) => new THREE.Vector3(p.x, 0, p.z)));
  const N = 90, pts = curve.getSpacedPoints(N);
  const ribbon = (w, y, material) => {
    const pos = [], idx = [];
    pts.forEach((p, i) => {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(N, i + 1)], dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1;
      const ww = w * (0.55 + 0.45 * Math.min(1, i / (N * 0.45)));            // a narrow stream at the source, wider downstream
      const nx = -dz / l * ww / 2, nz = dx / l * ww / 2;
      pos.push(p.x + nx, y, p.z + nz, p.x - nx, y, p.z - nz);
      if (i) { const k = i * 2; idx.push(k - 2, k, k - 1, k - 1, k, k + 1); }   // facing up
    });
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    const m = new THREE.Mesh(g, material); m.receiveShadow = true; world.add(m); return m;
  };
  ribbon(3.8, 0.012, mat(COL.sand));
  const water = ribbon(2.4, 0.045, new THREE.MeshLambertMaterial({ color: 0x8fd3ea, emissive: 0x3a8fb0, emissiveIntensity: 0.12 }));
  water.userData.keepBatch = true;
  // little glints drifting downstream
  const glints = [];
  for (let i = 0; i < 26; i++) {
    const gm = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.12), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false }));
    gm.rotation.x = -Math.PI / 2; world.add(gm);
    glints.push({ m: gm, t: Math.random(), side: (Math.random() - 0.5) * 1.4, sp: 0.018 + Math.random() * 0.012 });
  }
  // the waterfall runs down the face of the mountain, into a little pool where the stream begins
  const src = pts[0], S = SOURCE;
  const cv = document.createElement('canvas'); cv.width = 32; cv.height = 128;
  const cx = cv.getContext('2d');
  const gr = cx.createLinearGradient(0, 0, 32, 0); gr.addColorStop(0, 'rgba(191,232,247,0)'); gr.addColorStop(0.2, '#bfe8f7'); gr.addColorStop(0.8, '#bfe8f7'); gr.addColorStop(1, 'rgba(191,232,247,0)');
  cx.fillStyle = gr; cx.fillRect(0, 0, 32, 128);
  cx.lineCap = 'round';
  for (let k = 0; k < 26; k++) { cx.strokeStyle = 'rgba(255,255,255,' + (0.45 + Math.random() * 0.5) + ')'; cx.lineWidth = 1.5 + Math.random() * 2; const x = 6 + Math.random() * 20, y = Math.random() * 128; cx.beginPath(); cx.moveTo(x, y); cx.lineTo(x, y + 8 + Math.random() * 14); cx.stroke(); }
  const ftex = new THREE.CanvasTexture(cv); ftex.wrapS = ftex.wrapT = THREE.RepeatWrapping; ftex.repeat.set(1, 2);
  { const top = S.h * 0.66, n = 20, pos = [], uv = [], idx = [], w = 1.35;
    const sx = -S.dz, sz = S.dx;                                     // sideways across the fall
    for (let k = 0; k <= n; k++) {
      const y = top * (1 - k / n), rr = mtnR(S.r, S.h, y + 0.2) + 0.08;
      const px = S.x + S.dx * rr, pz = S.z + S.dz * rr, yy = y - 0.2 + 0.05;
      const ww = w * (0.7 + 0.3 * k / n);
      pos.push(px - sx * ww / 2, yy, pz - sz * ww / 2, px + sx * ww / 2, yy, pz + sz * ww / 2);
      uv.push(0, 1 - k / n, 1, 1 - k / n);
      if (k) { const q = k * 2; idx.push(q - 2, q - 1, q, q - 1, q + 1, q); }
    }
    const g0 = new THREE.BufferGeometry(); g0.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g0.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g0.setIndex(idx);
    const fall = new THREE.Mesh(g0, new THREE.MeshBasicMaterial({ map: ftex, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false }));
    fall.renderOrder = 2; world.add(fall);
    // a little spring at the top where the water comes out
    const spring = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 10), new THREE.MeshLambertMaterial({ color: 0xbfe8f7, emissive: 0x3a8fb0, emissiveIntensity: 0.1 }));
    const rt = mtnR(S.r, S.h, top + 0.2); spring.scale.set(1.0, 0.3, 0.55); spring.position.set(S.x + S.dx * (rt - 0.2), top - 0.12, S.z + S.dz * (rt - 0.2)); world.add(spring);
  }
  const pool = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.06, 28), new THREE.MeshLambertMaterial({ color: 0x9fdcef, emissive: 0x3a8fb0, emissiveIntensity: 0.12 }));
  pool.position.set(src.x + S.dx * 0.6, 0.05, src.z + S.dz * 0.6); world.add(pool);
  const poolRim = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.22, 10, 28), mat(0xd8d0e8)); poolRim.rotation.x = Math.PI / 2; poolRim.position.copy(pool.position); poolRim.position.y = 0.06; poolRim.scale.set(1, 1, 0.6); world.add(poolRim);
  const foam = [];
  for (let k = 0; k < 7; k++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 })); f.position.set(src.x + -S.dz * (k - 3) * 0.22, 0.15, src.z + S.dx * (k - 3) * 0.22); world.add(f); foam.push(f); }
  // the banks: pebbles along both sides and a few clumps of reeds (not where a road crosses)
  { const R4 = rng(41), M = 140, pg = new THREE.SphereGeometry(1, 8, 6);
    const peb = new THREE.InstancedMesh(pg, mat(0xd9d0c2), M), dm = new THREE.Object3D(); let k = 0;
    const reedsG = []; 
    for (let i = 0; i < 300 && k < M; i++) {
      const t = R4(), p = curve.getPointAt(t), q = curve.getTangentAt(t), side = R4() < 0.5 ? -1 : 1, w = 1.85 + R4() * 0.5 * (0.6 + t);
      const x = p.x - q.z * side * w, z = p.z + q.x * side * w;
      if (onRoadAt(x, z, 0.6) || !onIsland(x, z, 0.8) || inPond(x, z, 0.5)) continue;
      const sc = 0.12 + R4() * 0.16; dm.position.set(x, 0.03, z); dm.scale.set(sc * 1.3, sc * 0.55, sc); dm.rotation.y = R4() * 3; dm.updateMatrix(); peb.setMatrixAt(k++, dm.matrix);
      if (R4() < 0.08) reedsG.push([x, z]);
    }
    peb.count = k; peb.receiveShadow = true; world.add(peb); dm.scale.set(1, 1, 1);
    reedsG.forEach(([x, z]) => { for (let j = 0; j < 4; j++) world.add(box(0.06, 0.7 + R4() * 0.4, 0.06, j % 2 ? 0x7cb86f : 0x8fcc7c, x + (R4() - 0.5) * 0.4, 0.4, z + (R4() - 0.5) * 0.4)); });
  }
  // bridges wherever the river meets a road
  const bridges = [];
  ROADS.forEach(([x1, z1, x2, z2]) => {
    const v = x1 === x2;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const inside = v ? Math.abs(p.x - x1) < 0.95 && p.z >= Math.min(z1, z2) - 0.9 && p.z <= Math.max(z1, z2) + 0.9
                       : Math.abs(p.z - z1) < 0.95 && p.x >= Math.min(x1, x2) - 0.9 && p.x <= Math.max(x1, x2) + 0.9;
      if (!inside || bridges.some((b) => Math.hypot(b.x - p.x, b.z - p.z) < 3)) continue;
      bridges.push({ x: v ? x1 : p.x, z: v ? p.z : z1, rot: v ? 0 : Math.PI / 2 });
    }
  });
  bridges.forEach((b) => world.add(makeBridge(b.x, b.z, b.rot, 2.2)));
  return { curve, glints, ftex, foam, bridges, src };
}
function makeBridge(x, z, rot, width) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot;
  for (let k = 0; k < 9; k++) {                       // planks along the arch
    const t = (k - 4) / 4, y = 0.12 + (1 - t * t) * 0.32;
    g.add(box(width, 0.1, 0.5, k % 2 ? 0xc98a6a : 0xbd7d5e, 0, y, t * 2.1));
  }
  // red rails on an arch, little cream caps on the posts
  [-1, 1].forEach((sx) => {
    for (let k = 0; k < 5; k++) {
      const t = (k - 2) / 2, y = 0.12 + (1 - t * t) * 0.32, px = sx * (width / 2 + 0.05);
      g.add(box(0.14, 0.75, 0.14, 0xe2574f, px, y + 0.37, t * 2));
      if (k === 0 || k === 4) g.add(box(0.2, 0.12, 0.2, 0xf6e7c8, px, y + 0.8, t * 2));
    }
    for (let k = 0; k < 4; k++) {                 // the top rail follows the arch, in pieces
      const t0 = (k - 2) / 2, t1 = (k - 1) / 2, y0 = 0.12 + (1 - t0 * t0) * 0.32 + 0.72, y1 = 0.12 + (1 - t1 * t1) * 0.32 + 0.72;
      const len = Math.hypot(2 * (t1 - t0), y1 - y0) + 0.06, rl = box(0.1, 0.1, len, 0xe2574f, sx * (width / 2 + 0.05), (y0 + y1) / 2, (t0 + t1));
      rl.rotation.x = -Math.atan2(y1 - y0, 2 * (t1 - t0)); g.add(rl);
    }
  });
  return g;
}
function buildPark(world, R) {
  const P = POND, ax = P.rx + 2.6, az = P.rz + 2.6, segs = 80, pos = [], idx = [];
  const out = { benches: [], ducks: [], posts: [] };
  for (let i = 0; i <= segs; i++) {                   // the path around the lake
    const t = i / segs * Math.PI * 2, c = Math.cos(t), s2 = Math.sin(t);
    const ix = P.x + c * (ax - 0.75), iz = P.z + s2 * (az - 0.75), ox = P.x + c * (ax + 0.75), oz = P.z + s2 * (az + 0.75);
    pos.push(ix, 0.025, iz, ox, 0.025, oz);
    if (i) { const k = i * 2; idx.push(k - 2, k, k - 1, k - 1, k, k + 1); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  const path = new THREE.Mesh(g, mat(0xeedcb8)); path.receiveShadow = true; world.add(path);
  // a footbridge where the river comes in
  for (let i = 0; i < segs; i++) {
    const t = i / segs * Math.PI * 2, x = P.x + Math.cos(t) * ax, z = P.z + Math.sin(t) * az;
    if (riverDist(x, z) < 0.6) { world.add(makeBridge(x, z, -t + Math.PI / 2 + Math.PI / 2, 1.5)); break; }
  }
  // benches facing the water, flower beds, a couple of lamps
  [0.6, 2.2, 3.6, 5.0].forEach((t, k) => {
    const x = P.x + Math.cos(t) * (ax + 1.6), z = P.z + Math.sin(t) * (az + 1.6);
    if (riverDist(x, z) < 2.2 || !onIsland(x, z, 1.5)) return;
    const b = new THREE.Group(); b.position.set(x, 0, z); b.rotation.y = Math.atan2(P.x - x, P.z - z);
    b.add(box(1.5, 0.08, 0.45, 0xc49674, 0, 0.45, 0)); b.add(box(1.5, 0.4, 0.07, 0xc49674, 0, 0.7, -0.22));
    [-0.65, 0.65].forEach((sx) => { b.add(box(0.08, 0.45, 0.4, 0x8c7a6b, sx, 0.22, 0)); });
    world.add(b); out.posts.push({ x, z, r: 0.9 });
  });
  for (let k = 0; k < 7; k++) {
    const t = k / 7 * Math.PI * 2 + 0.3, x = P.x + Math.cos(t) * (ax + 3.1), z = P.z + Math.sin(t) * (az + 3.1);
    if (riverDist(x, z) < 2.4 || !onIsland(x, z, 1.8)) continue;
    const bed = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.95, 0.18, 9), mat(0x9b7656)); bed.position.set(x, 0.09, z); bed.scale.z = 0.7; world.add(bed);
    for (let f = 0; f < 9; f++) {
      const fx = x + (R() - 0.5) * 1.3, fz = z + (R() - 0.5) * 0.9;
      world.add(box(0.06, 0.3, 0.06, 0x7cb86f, fx, 0.32, fz));
      world.add(box(0.2, 0.18, 0.2, COL.flower[(k + f) % COL.flower.length], fx, 0.52, fz));
    }
    out.posts.push({ x, z, r: 1 });
  }
  // two ducks paddling around
  for (let d = 0; d < 2; d++) {
    const duck = new THREE.Group();
    duck.add(box(0.5, 0.3, 0.7, 0xffffff, 0, 0.18, 0));
    duck.add(box(0.32, 0.3, 0.3, d ? 0xffffff : 0x6fa86a, 0, 0.45, 0.32));
    duck.add(box(0.18, 0.08, 0.16, 0xf5a34b, 0, 0.42, 0.53));
    [-0.12, 0.12].forEach((x) => duck.add(box(0.05, 0.06, 0.03, 0x2e2a36, x, 0.5, 0.47)));
    duck.add(box(0.2, 0.12, 0.2, 0xeeeeee, 0, 0.32, -0.38));
    duck.scale.setScalar(0.8); world.add(duck);
    out.ducks.push({ g: duck, a: d * 2.5, sp: d ? -0.12 : 0.09 });
  }
  return out;
}

/* ---------------- road graph (people walk on paths, not through houses) ---------------- */
function buildGraph(doors) {
  const nodes = [], edges = [];
  const key = (x, z) => x.toFixed(2) + ',' + z.toFixed(2);
  const idx = new Map();
  const node = (x, z) => { const k = key(x, z); if (!idx.has(k)) { idx.set(k, nodes.length); nodes.push({ x, z }); edges.push([]); } return idx.get(k); };
  const link = (a, b) => { if (a === b) return; const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].z - nodes[b].z); edges[a].push([b, d]); edges[b].push([a, d]); };
  const onRoad = ROADS.map(() => []);
  ROADS.forEach((r, i) => { onRoad[i].push([r[0], r[1]], [r[2], r[3]]); });
  // intersections
  ROADS.forEach((a, i) => ROADS.forEach((b, j) => {
    if (i >= j) return;
    const av = a[0] === a[2], bv = b[0] === b[2];
    if (av === bv) return;
    const v = av ? a : b, h = av ? b : a;
    const x = v[0], z = h[1];
    if (x >= Math.min(h[0], h[2]) - 0.01 && x <= Math.max(h[0], h[2]) + 0.01 && z >= Math.min(v[1], v[3]) - 0.01 && z <= Math.max(v[1], v[3]) + 0.01) {
      onRoad[i].push([x, z]); onRoad[j].push([x, z]);
    }
  }));
  // each door → nearest point on a road
  const doorNodes = doors.map((d) => {
    let best = null;
    ROADS.forEach((r, i) => {
      const v = r[0] === r[2];
      const x = v ? r[0] : Math.max(Math.min(r[0], r[2]), Math.min(Math.max(r[0], r[2]), d.x));
      const z = v ? Math.max(Math.min(r[1], r[3]), Math.min(Math.max(r[1], r[3]), d.z)) : r[1];
      const dist = Math.hypot(x - d.x, z - d.z);
      if (!best || dist < best.dist) best = { i, x, z, dist };
    });
    onRoad[best.i].push([best.x, best.z]);
    const dn = node(d.x, d.z);
    link(dn, node(best.x, best.z));
    return dn;
  });
  onRoad.forEach((pts, i) => {
    const v = ROADS[i][0] === ROADS[i][2];
    pts.sort((a, b) => (v ? a[1] - b[1] : a[0] - b[0]));
    for (let k = 1; k < pts.length; k++) link(node(pts[k - 1][0], pts[k - 1][1]), node(pts[k][0], pts[k][1]));
  });
  function path(from, to) {          // Dijkstra, tiny graph
    const dist = nodes.map(() => Infinity), prev = nodes.map(() => -1), done = nodes.map(() => false);
    dist[from] = 0;
    for (;;) {
      let u = -1;
      for (let i = 0; i < nodes.length; i++) if (!done[i] && (u < 0 || dist[i] < dist[u])) u = i;
      if (u < 0 || dist[u] === Infinity || u === to) break;
      done[u] = true;
      edges[u].forEach(([v, w]) => { if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; prev[v] = u; } });
    }
    const out = [];
    for (let u = to; u >= 0; u = prev[u]) out.unshift(nodes[u]);
    return out.length && out[0] === nodes[from] ? out : [nodes[to]];
  }
  function nearest(x, z) {
    let b = 0, bd = Infinity;
    nodes.forEach((n, i) => { const d = Math.hypot(n.x - x, n.z - z); if (d < bd) { bd = d; b = i; } });
    return b;
  }
  return { nodes, doorNodes, path, nearest };
}

/* ---------------- day / night from the real clock ---------------- */
const SKY = [   // hour, sky, sun colour, sun power, ambient power, night 0..1
  [0, 0x4a50a0, 0xc0c6ff, 0.8, 1.35, 1],
  [5, 0x4f56a6, 0xc0c6ff, 0.8, 1.35, 1],
  [6, 0xf8cdb6, 0xffc9a0, 1.3, 1.1, 0.4],
  [7.5, 0xbfe3f5, 0xfff4e6, 2.3, 1.55, 0],
  [16.5, 0xbfe3f5, 0xfff4e6, 2.3, 1.55, 0],
  [18, 0xf7c0b4, 0xffbe96, 1.3, 1.1, 0.4],
  [19.2, 0x5057a6, 0xc0c6ff, 0.8, 1.35, 1],
  [24, 0x4a50a0, 0xc0c6ff, 0.8, 1.35, 1]
];
function skyAt(h) {
  let i = 0; while (i < SKY.length - 2 && SKY[i + 1][0] <= h) i++;
  const a = SKY[i], b = SKY[i + 1], t = (h - a[0]) / (b[0] - a[0] || 1);
  const ca = new THREE.Color(a[1]), cb = new THREE.Color(b[1]);
  const sa = new THREE.Color(a[2]), sb = new THREE.Color(b[2]);
  return { sky: ca.lerp(cb, t), sun: sa.lerp(sb, t), power: lerp(a[3], b[3], t), amb: lerp(a[4], b[4], t), night: lerp(a[5], b[5], t) };
}

/* ================================================================ */
function create(container, opts) {
  opts = opts || {};
  const layoutKey = (container.clientWidth || innerWidth) < (container.clientHeight || innerHeight) * 0.9 ? 'port' : 'land';
  useLayout(layoutKey);
  windowMats = []; lampMats = [];
  let hourOverride = (() => { const m = /[?&]hour=([\d.]+)/.exec(location.search); return m ? Number(m[1]) : null; })();
  if (hourOverride == null && opts.timeMode === 'day') hourOverride = 11;
  if (hourOverride == null && opts.timeMode === 'night') hourOverride = 22;
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.className = 'village-3d';
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xbfe3f5, 320, 760);
  const camera = new THREE.PerspectiveCamera(26, 1, 0.5, 1400);   // a narrow lens: close to isometric, little distortion
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minDistance = 18; controls.maxDistance = 520;
  controls.minPolarAngle = 0.15; controls.maxPolarAngle = 1.32;
  controls.target.set(0, 0, 1.5);
  controls.screenSpacePanning = false;          // move along the ground
  controls.rotateSpeed = 0.7;
  controls.panSpeed = 1.1;
  controls.keyPanSpeed = 22;
  // phones, like a map app: one finger moves the map. Two fingers: pinch = zoom, twist = turn,
  // move = pan — and both fingers sliding up/down together tilts the view (top-down ↔ side).
  // OrbitControls only ever sees one finger; the two-finger gesture is handled here.
  controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };
  { const el = renderer.domElement, tp = new Map();
    let g2 = null, fake = false;
    const off = new THREE.Vector3(), sph = new THREE.Spherical(), right = new THREE.Vector3(), fwd = new THREE.Vector3();
    const two = () => { const v = Array.from(tp.values()); return { a: v[0], b: v[1], mx: (v[0].x + v[1].x) / 2, my: (v[0].y + v[1].y) / 2, d: Math.hypot(v[1].x - v[0].x, v[1].y - v[0].y), ang: Math.atan2(v[1].y - v[0].y, v[1].x - v[0].x) }; };
    el.addEventListener('pointerdown', (e) => {
      if (fake || e.pointerType !== 'touch') return;
      // the first finger of a new touch: nothing else can be down, so forget any finger we lost track of
      // (a lift that happened over a label or outside the canvas) — otherwise one finger reads as a pinch
      if (e.isPrimary) { tp.clear(); g2 = null; }
      tp.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (tp.size === 2) {
        e.stopImmediatePropagation();                  // OrbitControls never learns about the second finger…
        const first = Array.from(tp.entries()).find(([id]) => id !== e.pointerId);
        if (first) {                                   // …and lets go of the first one
          fake = true;
          try { el.dispatchEvent(new PointerEvent('pointerup', { pointerId: first[0], pointerType: 'touch', isPrimary: true, clientX: first[1].x, clientY: first[1].y, bubbles: true })); } catch (er) {}
          fake = false;
        }
        const t = two(); g2 = { last: t, moved: 0, mode: '', y0a: t.a.y, y0b: t.b.y, x0: t.mx, d0: t.d };
      } else if (tp.size > 2) e.stopImmediatePropagation();
    }, { capture: true });
    el.addEventListener('pointermove', (e) => {
      if (fake || e.pointerType !== 'touch' || !tp.has(e.pointerId)) return;
      tp.get(e.pointerId).x = e.clientX; tp.get(e.pointerId).y = e.clientY;
      if (!g2 || tp.size < 2) return;
      e.stopImmediatePropagation();
      if (!controls.enabled) return;
      const t = two(), L = g2.last;
      g2.moved += Math.hypot(t.mx - L.mx, t.my - L.my) + Math.abs(t.d - L.d);
      if (!g2.mode && g2.moved > 22) {                 // decide once per gesture: tilt, or zoom/turn/pan
        const dya = t.a.y - g2.y0a, dyb = t.b.y - g2.y0b, dy = (dya + dyb) / 2;
        const parallel = dya * dyb > 0 && Math.min(Math.abs(dya), Math.abs(dyb)) > 0.3 * Math.max(Math.abs(dya), Math.abs(dyb));
        g2.mode = parallel && Math.abs(t.mx - g2.x0) < Math.abs(dy) * 0.7 && Math.abs(t.d - g2.d0) < Math.max(24, Math.abs(dy) * 0.6) ? 'tilt' : 'free';
      }
      off.copy(camera.position).sub(controls.target);
      if (g2.mode === 'tilt') {
        sph.setFromVector3(off);
        sph.phi = Math.max(controls.minPolarAngle, Math.min(controls.maxPolarAngle, sph.phi - (t.my - L.my) * 0.006));
        off.setFromSpherical(sph); camera.position.copy(controls.target).add(off);
      } else if (g2.mode === 'free') {
        let da = t.ang - L.ang; if (da > Math.PI) da -= Math.PI * 2; if (da < -Math.PI) da += Math.PI * 2;
        off.applyAxisAngle(THREE.Object3D.DEFAULT_UP, da);                                   // twist = turn
        const len = Math.max(controls.minDistance, Math.min(controls.maxDistance, off.length() * (L.d / Math.max(1, t.d))));
        off.setLength(len);                                                                   // pinch = zoom
        camera.position.copy(controls.target).add(off);
        camera.getWorldDirection(fwd); fwd.y = 0; fwd.normalize(); right.crossVectors(fwd, camera.up).normalize();
        const k = 2 * len * Math.tan(camera.fov * Math.PI / 360) / (el.clientHeight || innerHeight);
        panOffset.copy(right).multiplyScalar(-(t.mx - L.mx) * k).addScaledVector(fwd, (t.my - L.my) * k * 1.4);   // move = pan
        controls.target.add(panOffset); camera.position.add(panOffset);
      }
      g2.last = t;
      controls.update();
    }, { capture: true });
    const lift = (e) => {
      if (fake || e.pointerType !== 'touch') return;
      if (g2 && tp.has(e.pointerId)) e.stopImmediatePropagation();
      tp.delete(e.pointerId);
      if (tp.size < 2) g2 = null;
    };
    el.addEventListener('pointerup', lift, { capture: true });
    el.addEventListener('pointercancel', lift, { capture: true });
    const gone = (e) => { if (e.pointerType === 'touch' && e.target !== el) { tp.delete(e.pointerId); if (tp.size < 2) g2 = null; } };
    window.addEventListener('pointerup', gone, true); window.addEventListener('pointercancel', gone, true);
  }
  renderer.domElement.tabIndex = 0;              // arrow keys move the view once the village is clicked
  renderer.domElement.style.outline = 'none';
  controls.listenToKeyEvents(renderer.domElement);
  // Trackpad: two-finger scroll moves the view, pinch zooms. Mouse wheel still zooms.
  const panOffset = new THREE.Vector3(), camRight = new THREE.Vector3(), camFwd = new THREE.Vector3();
  function panBy(dx, dz) {
    camera.getWorldDirection(camFwd); camFwd.y = 0; camFwd.normalize();
    camRight.crossVectors(camFwd, camera.up).normalize();
    const k = camera.position.distanceTo(controls.target) * 0.0016;
    panOffset.copy(camRight).multiplyScalar(dx * k).addScaledVector(camFwd, -dz * k);
    controls.target.add(panOffset); camera.position.add(panOffset);
  }
  renderer.domElement.addEventListener('wheel', (e) => {
    const trackpad = !e.ctrlKey && e.deltaMode === 0 && (Math.abs(e.deltaX) > 0.01 || Math.abs(e.deltaY) < 40);
    if (!trackpad) return;                         // OrbitControls zooms (mouse wheel / pinch)
    e.preventDefault(); e.stopImmediatePropagation();
    panBy(e.deltaX, e.deltaY);
  }, { capture: true, passive: false });
  function clampTarget() {                       // never lose the island
    const t = controls.target, lx = ISLAND.w / 2, lz = ISLAND.d / 2;
    const cx = Math.max(-lx, Math.min(lx, t.x)), cz = Math.max(-lz, Math.min(lz, t.z));
    if (cx !== t.x || cz !== t.z || t.y !== 0) {
      panOffset.set(cx - t.x, -t.y, cz - t.z); t.add(panOffset); camera.position.add(panOffset);
    }
  }
  controls.addEventListener('change', clampTarget);

  /* lights */
  const hemi = new THREE.HemisphereLight(0xffffff, 0xb7d7a0, 1); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1.5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -ISLAND.a - 6, right: ISLAND.a + 6, top: ISLAND.b + 10, bottom: -ISLAND.b - 10, near: 1, far: 260 });   // covers the whole island
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.03;
  scene.add(sun); scene.add(sun.target);
  const lampLights = [];

  /* sky dome: deeper colour overhead, softer towards the horizon */
  const skyMat = new THREE.ShaderMaterial({
    uniforms: { top: { value: new THREE.Color(0x8ec5ea) }, bottom: { value: new THREE.Color(0xd8eef8) } },
    vertexShader: 'varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }',
    side: THREE.BackSide, depthWrite: false, fog: false
  });
  const skyDome = new THREE.Mesh(new THREE.SphereGeometry(480, 24, 14), skyMat); skyDome.renderOrder = -1; scene.add(skyDome);

  /* sky things: sun / moon discs, stars, clouds */
  const sunDisc = new THREE.Mesh(new THREE.SphereGeometry(4, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffe9a8, fog: false }));
  const moonDisc = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 12), new THREE.MeshBasicMaterial({ color: 0xf4f1ff, fog: false }));
  scene.add(sunDisc, moonDisc);
  const starGeo = new THREE.BufferGeometry(), sp = [];
  for (let i = 0; i < 700; i++) {
    const th = Math.random() * Math.PI * 2, ph = Math.random() * 1.55;
    sp.push(Math.cos(th) * Math.sin(ph) * 450, Math.cos(ph) * 450 + 20, Math.sin(th) * Math.sin(ph) * 450);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false }));
  scene.add(stars);
  const clouds = [];
  for (let i = 0; i < 6; i++) {
    const c = new THREE.Group();
    const cm = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.92 });
    for (let k = 0; k < 4; k++) { const s = new THREE.Mesh(new THREE.SphereGeometry(rnd(1.6, 2.6), 10, 8), cm); s.position.set(k * 2 - 3, rnd(-0.4, 0.6), rnd(-0.8, 0.8)); s.scale.y = 0.7; c.add(s); }
    c.position.set(rnd(-90, 90), rnd(34, 46), rnd(-90, -40));
    c.userData.speed = rnd(0.6, 1.4); c.userData.mat = cm;
    clouds.push(c); scene.add(c);
  }

  // a ring of soft clouds drifting round the island, just under its edge
  const lowClouds = new THREE.Group(); lowClouds.mat = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, fog: false });
  for (let i = 0; i < 11; i++) {
    const t = i / 11 * Math.PI * 2 + rnd(-0.15, 0.15), r = shoreR(t) + rnd(1, 7), parts = [];
    for (let k = 0; k < 5; k++) { const g0 = new THREE.SphereGeometry(rnd(1.6, 2.8), 9, 7); g0.scale(1, 0.62, 1); g0.translate(k * 2.1 - 4.2, rnd(-0.3, 0.6), rnd(-1, 1)); parts.push(g0); }
    const c = new THREE.Mesh(mergeGeometries(parts, false), lowClouds.mat); parts.forEach((g0) => g0.dispose());
    c.position.set(Math.cos(t) * r, rnd(-9, -3), -Math.sin(t) * r); c.rotation.y = t + Math.PI / 2; c.scale.setScalar(rnd(0.9, 1.5));
    lowClouds.add(c);
  }
  scene.add(lowClouds);
  // four little floating islets, placed on purpose: two mid-sized ones low at the sides,
  // two small ones higher up at the back and the front corner — each with its own little scene
  const islets = [];
  { const spots = [
      { t: Math.PI * 0.97, gap: 9, r: 4.2, y: -3.2, deco: (g, R) => {                // a small grove
        [[-1.2, -0.6, 'round'], [1.1, -1.0, 'pine'], [0.2, 1.3, 'tall']].forEach(([x, z, k]) => { const tr = makeTree(R, k); tr.scale.setScalar(0.62); tr.position.set(x, 0, z); g.add(tr); });
        [[1.6, 1.1], [-1.9, 1.2]].forEach(([x, z], k) => { const b0 = makeBush(R, k === 0); b0.position.set(x, 0, z); g.add(b0); });
      } },
      { t: 0.06, gap: 10, r: 3.8, y: -2.4, deco: (g, R) => {                        // a flower meadow with a bench
        for (let k = 0; k < 26; k++) { const a0 = R() * 6.28, d = Math.sqrt(R()) * 3, f = new THREE.Mesh(leafGeo, mat(COL.flower[k % COL.flower.length])); f.scale.setScalar(0.13); f.position.set(Math.cos(a0) * d, 0.1, Math.sin(a0) * d); g.add(f); }
        g.add(box(1.5, 0.12, 0.45, 0xc49674, 0, 0.5, -0.6)); g.add(box(1.5, 0.45, 0.1, 0xc49674, 0, 0.8, -0.82));
        [-0.6, 0.6].forEach((x) => g.add(box(0.1, 0.5, 0.4, 0xa8805e, x, 0.25, -0.6)));
        const b0 = makeBush(R, true); b0.position.set(-1.8, 0, -1.2); g.add(b0);
      } },
      { t: Math.PI * 0.62, gap: 7, r: 2.4, y: 4.5, deco: (g, R) => {                 // one tall pine, way up high
        const tr = makeTree(R, 'pine'); tr.scale.setScalar(0.8); g.add(tr);
        const rock = new THREE.Mesh(leafGeo, mat(0xd8d0c4)); rock.scale.set(0.45, 0.3, 0.38); rock.position.set(1.1, 0.12, 0.6); g.add(rock);
      } },
      { t: -Math.PI * 0.3, gap: 8, r: 2.2, y: 2.2, deco: (g, R) => {                // mushrooms and a rock
        [[0, 0, 0.5, 0xff8f9a], [0.7, 0.4, 0.32, 0xffc06b], [-0.6, 0.5, 0.26, 0xff8f9a]].forEach(([x, z, sz, c]) => {
          g.add(box(sz * 0.4, sz * 1.1, sz * 0.4, 0xfff6e8, x, sz * 0.55, z));
          const capM = new THREE.Mesh(new THREE.SphereGeometry(sz, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(c)); capM.position.set(x, sz * 1.05, z); g.add(capM);
        });
        const b0 = makeBush(R, false); b0.position.set(-0.9, 0, -0.6); g.add(b0);
      } }
    ];
    spots.forEach((sp, i) => {
      const g0 = makeIslet(sp.r, 31 + i * 7, sp.deco), rr = shoreR(sp.t) + sp.r + sp.gap;
      g0.position.set(Math.cos(sp.t) * rr, sp.y, -Math.sin(sp.t) * rr);
      g0.userData.y0 = sp.y; g0.userData.ph = i * 1.7;
      scene.add(g0); islets.push(g0);
    });
  }
  // bigger cute pastel stars that twinkle at night, and now and then a shooting star
  const starTex = (() => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 64; const x = cv.getContext('2d');
    const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,0.85)'); gr.addColorStop(0.3, 'rgba(255,255,255,0.22)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    x.fillStyle = '#ffffff'; x.beginPath();
    for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? 8 : 20; x.lineTo(32 + Math.cos(a) * rr, 32 + Math.sin(a) * rr); }
    x.closePath(); x.fill();
    const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; return tx;
  })();
  const twinkleTex = (() => {                       // a four-point sparkle, for the water
    const cv = document.createElement('canvas'); cv.width = cv.height = 32; const x = cv.getContext('2d');
    x.fillStyle = '#ffffff'; x.beginPath();
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2, rr = i % 2 ? 2.5 : 15; x.lineTo(16 + Math.cos(a) * rr, 16 + Math.sin(a) * rr); }
    x.closePath(); x.fill();
    const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; return tx;
  })();
  const bigStars = [0, 1, 2].map((k) => {
    const pos = [], col = [], pc = new THREE.Color(), cols = [0xfff1a8, 0xffc4dc, 0xd9ccff, 0xc4ecff];
    for (let i = 0; i < 34; i++) {
      const th = Math.random() * Math.PI * 2, ph = 0.15 + Math.random() * 1.2;
      pos.push(Math.cos(th) * Math.sin(ph) * 440, Math.cos(ph) * 440 + 20, Math.sin(th) * Math.sin(ph) * 440);
      pc.set(cols[(i + k) % 4]); col.push(pc.r, pc.g, pc.b);
    }
    const g0 = new THREE.BufferGeometry(); g0.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g0.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    const pts = new THREE.Points(g0, new THREE.PointsMaterial({ size: 11 + k * 3, map: starTex, vertexColors: true, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false }));
    pts.userData = { base: 0, ph: k * 2.1 }; scene.add(pts); return pts;
  });
  const shooting = new THREE.Sprite(new THREE.SpriteMaterial({ map: (() => {
    const cv = document.createElement('canvas'); cv.width = 128; cv.height = 16; const x = cv.getContext('2d');
    const gr = x.createLinearGradient(0, 0, 128, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(255,248,220,1)');
    x.fillStyle = gr; x.beginPath(); x.moveTo(0, 8); x.lineTo(120, 4); x.arc(120, 8, 4, -Math.PI / 2, Math.PI / 2); x.closePath(); x.fill();
    return new THREE.CanvasTexture(cv);
  })(), transparent: true, opacity: 0, depthWrite: false, fog: false }));
  shooting.scale.set(36, 4.5, 1); scene.add(shooting);
  const shot = { t: -1, wait: 6, from: new THREE.Vector3(), dir: new THREE.Vector3() };

  /* island */
  const world = new THREE.Group(); scene.add(world);
  world.add(slab(islandShape(1, 0.35), 0.6, COL.grass, -0.6, true));   // ground top = y 0, a soft rounded edge
  // underneath: earthy rock with ridges running down to a point, roots poking out under the grass,
  // a few hanging rocks and small glowing crystals (a little magic)
  const cliff = buildCliff((t) => shoreR(t) - 0.15, [[-0.5, 1], [-1.9, 0.985], [-4.4, 0.93], [-7.6, 0.8], [-11.2, 0.6], [-14.4, 0.37], [-17.2, 0.15]], -19.8, 11, 140);
  world.add(cliff);
  { const R2 = rng(12);
    for (let i = 0; i < 20; i++) {                         // roots hanging over the edge
      const t = (i + R2() * 0.7) / 20 * Math.PI * 2, r0 = shoreR(t) - 0.2, ux = Math.cos(t), uz = -Math.sin(t), drop = 1.6 + R2() * 2.2;
      const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(ux * (r0 - 0.3), -0.7, uz * (r0 - 0.3)), new THREE.Vector3(ux * (r0 + 0.25), -1.3, uz * (r0 + 0.25)), new THREE.Vector3(ux * (r0 + 0.1 - R2() * 0.3), -0.9 - drop * 0.7, uz * (r0 + 0.1)), new THREE.Vector3(ux * (r0 - 0.2), -1 - drop, uz * (r0 - 0.2))]);
      world.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.05 + R2() * 0.05, 5), mat(0x8a5f43)));
    }
    for (let i = 0; i < 7; i++) {                          // hanging rocks under the middle
      const a0 = R2() * 6.28, d = R2() * 0.4, rr = shoreR(a0) * d, h = 1.6 + R2() * 2.4;
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.6 + R2() * 0.9, h, 6), new THREE.MeshLambertMaterial({ color: CLIFF_COLS[4 + (i % 2)], flatShading: true }));
      c.rotation.x = Math.PI; c.rotation.y = R2() * 3; c.position.set(Math.cos(a0) * rr, -15 - R2() * 2 - h / 2 + (1 - d) * 3, -Math.sin(a0) * rr); world.add(c);
    }
    const crystal = new THREE.OctahedronGeometry(1, 0);
    [-0.35, 0.25, 0.9, 1.6, 2.3, 3.6].forEach((t0, k) => {   // mostly on the side facing the camera
      const t = -Math.PI / 2 + t0 * 0.55, rr = shoreR(t) * 0.86, y = -4.2 - (k % 3) * 1.2;
      const cm = new THREE.MeshLambertMaterial({ color: [0xbfe3ff, 0xffc6dd, 0xd9ccff][k % 3], emissive: [0x6fb3ff, 0xff8fbf, 0xa98bff][k % 3], emissiveIntensity: 0.35, flatShading: true });
      for (let j = 0; j < 3; j++) {
        const m = new THREE.Mesh(crystal, cm); m.scale.set(0.22 + j * 0.05, 0.6 + R2() * 0.4, 0.22 + j * 0.05);
        m.position.set(Math.cos(t) * (rr + 0.25) + (j - 1) * 0.3, y + (j === 1 ? 0.2 : 0), -Math.sin(t) * (rr + 0.25)); m.rotation.set((R2() - 0.5) * 0.8, R2() * 3, (j - 1) * 0.5);
        world.add(m);
      }
    });
  }
  // grass rim lip
  const rim = slab(islandShape(1, -0.25), 0.3, COL.grassSide, -0.75); world.add(rim);

  // roads
  ROADS.forEach(([x1, z1, x2, z2]) => {
    const v = x1 === x2, len = v ? Math.abs(z2 - z1) : Math.abs(x2 - x1);
    const mx = (x1 + x2) / 2, mz = (z1 + z2) / 2;
    if (v && Math.abs(mx - RAMP.x) < 0.2 && Math.min(z1, z2) < RAMP.z1 && Math.max(z1, z2) > RAMP.z0 && groundY(mx, mz) > 0) return;   // the ramp
    // main streets (the long ones) are wider with a kerb on each side; lanes are narrower
    const main = len >= 40, W = main ? ROAD_MAIN : ROAD_SIDE, y = groundY(mx, mz);
    const m = box(v ? W : len + W, 0.06, v ? len + W : W, main ? 0xf1dfb6 : COL.road, mx, y + 0.03, mz);
    m.castShadow = false; world.add(m);
    if (main) [-1, 1].forEach((sd) => {
      const k = box(v ? 0.22 : len + W, 0.1, v ? len + W : 0.22, 0xe0c99c, mx + (v ? sd * (W / 2 - 0.05) : 0), y + 0.05, mz + (v ? 0 : sd * (W / 2 - 0.05)));
      k.castShadow = false; world.add(k);
    });
  });
  buildHill(world);
  buildMountains(world);
  const river = buildRiver(world);
  // stepping stones on the roads
  const R = rng(5);
  const stoneGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.05, 14);
  const stones = new THREE.InstancedMesh(stoneGeo, mat(0xe6cfa3), 140);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 140; i++) {
    const r = ROADS[Math.floor(R() * ROADS.length)], t = R();
    const v = r[0] === r[2];
    const sx = lerp(r[0], r[2], t) + (v ? (R() - 0.5) * 1.8 : 0), sz = lerp(r[1], r[3], t) + (v ? 0 : (R() - 0.5) * 1.8);
    dummy.position.set(sx, groundY(sx, sz) + 0.07, sz);
    dummy.rotation.y = R() * 0.6; dummy.updateMatrix(); stones.setMatrixAt(i, dummy.matrix);
  }
  stones.receiveShadow = true; world.add(stones);

  // pond: sand rim, water, lilies
  const sand = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.06, 40), mat(COL.sand));
  sand.scale.set(POND.rx + 1.2, 1, POND.rz + 1.2); sand.position.set(POND.x, 0.03, POND.z); sand.receiveShadow = true; world.add(sand);
  const bed = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.1, 40), mat(0x6fb6cf));
  bed.scale.set(POND.rx, 1, POND.rz); bed.position.set(POND.x, 0.05, POND.z); world.add(bed);
  const waterMat = new THREE.MeshLambertMaterial({ color: COL.water, transparent: true, opacity: 0.72 });
  const water = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.08, 40), waterMat);
  water.scale.set(POND.rx - 0.15, 1, POND.rz - 0.15); water.position.set(POND.x, 0.2, POND.z); world.add(water);
  [[-4.5, 1], [3.5, -1.6], [5.2, 1.2]].forEach(([dx, dz]) => {
    const l = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.05, 12), mat(COL.lily)); l.position.set(POND.x + dx, 0.25, POND.z + dz); world.add(l);
  });
  const lotus = box(0.25, 0.2, 0.25, 0xffb6c1, POND.x - 4.5, 0.35, POND.z + 1); world.add(lotus);
  // a little fountain in the middle of the lake: a stone basin, a bowl on a stem, a jet that falls back in
  const fountain = (() => {
    const f = new THREE.Group(); f.position.set(POND.x, 0, POND.z); f.scale.setScalar(Math.min(1, POND.rz / 4)); world.add(f);
    const stone = mat(0xeee6dc), stone2 = mat(0xd9cfc2);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.45, 0.45, 28), stone); base.position.y = 0.2; f.add(base);
    const rimT = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.12, 8, 28), stone2); rimT.rotation.x = Math.PI / 2; rimT.position.y = 0.44; f.add(rimT);
    const inner = new THREE.Mesh(new THREE.CylinderGeometry(1.18, 1.18, 0.05, 28), new THREE.MeshLambertMaterial({ color: 0x9fdcef, emissive: 0x3a8fb0, emissiveIntensity: 0.12 })); inner.position.y = 0.43; f.add(inner);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 1.0, 14), stone); stem.position.y = 0.9; f.add(stem);
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), stone2); bowl.position.y = 1.45; f.add(bowl);
    const jetM = new THREE.MeshBasicMaterial({ color: 0xdff4ff, transparent: true, opacity: 0.8, depthWrite: false });
    const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.1, 0.9, 10), jetM); jet.position.y = 1.85; f.add(jet);
    const drops = [];
    for (let k = 0; k < 14; k++) { const d0 = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), jetM); f.add(d0); drops.push({ m: d0, a: k / 14 * Math.PI * 2, t: k / 14 }); }
    f.userData.keep = true;
    return { g: f, jet, drops, rimR: 1.3 };
  })();
  // reeds
  for (let i = 0; i < 10; i++) {
    const a = R() * Math.PI * 2, x = POND.x + Math.cos(a) * (POND.rx + 0.6), z = POND.z + Math.sin(a) * (POND.rz + 0.6);
    world.add(box(0.08, 1, 0.08, 0x7cb86f, x, 0.45, z));
  }

  const park = buildPark(world, R);
  // soft patches of lighter and darker grass so the ground isn't one flat colour
  { const pg = new THREE.CircleGeometry(1, 24); pg.rotateX(-Math.PI / 2);
    const patches = new THREE.InstancedMesh(pg, new THREE.MeshLambertMaterial({ color: 0xffffff }), 70), pc = new THREE.Color();
    const greens = [0xb2dd95, 0xcaeab0, 0xa9d68c, 0xd2eeb8];
    let k = 0;
    for (let n = 0; n < 900 && k < 70; n++) {
      const x = (R() - 0.5) * ISLAND.w, z = (R() - 0.5) * ISLAND.d;
      if (!onIsland(x, z, 4) || nearCliff(x, z, 1.5) || riverDist(x, z) < 3 || inPond(x, z, 2) || onRamp(x, z)) continue;
      dummy.position.set(x, groundY(x, z) + 0.008, z); dummy.rotation.set(0, R() * 6, 0); const sc = 1.6 + R() * 2.6; dummy.scale.set(sc, 1, sc * (0.6 + R() * 0.5));
      dummy.updateMatrix(); patches.setMatrixAt(k, dummy.matrix); patches.setColorAt(k, pc.set(greens[k % greens.length])); k++;
    }
    patches.count = k; patches.receiveShadow = true; world.add(patches); dummy.scale.set(1, 1, 1); }
  // flowers + grass tufts (instanced)
  const fGeo = new THREE.SphereGeometry(0.13, 10, 8), tGeo = new THREE.ConeGeometry(0.07, 0.38, 6);
  const free = (x, z) => onIsland(x, z, 2.2) && !inPond(x, z, 1.5) && !inLot(x, z, 0.8) && !nearCliff(x, z, 0.6) && riverDist(x, z) > 2.4 && !inPark(x, z) && !onRamp(x, z) &&
    !ROADS.some(([x1, z1, x2, z2]) => x >= Math.min(x1, x2) - RH - 0.3 && x <= Math.max(x1, x2) + RH + 0.3 && z >= Math.min(z1, z2) - RH - 0.3 && z <= Math.max(z1, z2) + RH + 0.3) &&
    !HOUSE_POS.some(([hx, hz]) => Math.abs(x - hx) < 3.6 && Math.abs(z - hz) < 3.8) &&
    !(Math.abs(x - HALL_POS[0]) < 6 && Math.abs(z - HALL_POS[1]) < 5.4);
  COL.flower.forEach((c, ci) => {
    const n = 60, im = new THREE.InstancedMesh(fGeo, mat(c), n);
    let k = 0;
    while (k < n) {
      const x = (R() - 0.5) * (ISLAND.w - 6), z = (R() - 0.5) * (ISLAND.d - 6);
      if (!free(x, z)) continue;
      dummy.position.set(x, groundY(x, z) + 0.11, z); dummy.rotation.y = R(); dummy.updateMatrix(); im.setMatrixAt(k++, dummy.matrix);
    }
    world.add(im);
  });
  const tufts = new THREE.InstancedMesh(tGeo, mat(0x8fcc7c), 420);
  for (let k = 0; k < 420;) {
    const x = (R() - 0.5) * (ISLAND.w - 4), z = (R() - 0.5) * (ISLAND.d - 4);
    if (!free(x, z)) continue;
    dummy.position.set(x, groundY(x, z) + 0.17, z); dummy.rotation.set(R() * 0.3, R() * 3, R() * 0.3); dummy.updateMatrix(); tufts.setMatrixAt(k++, dummy.matrix);
  }
  world.add(tufts);

  // trees, fences, lamps
  // keep the yard around the Love house clear for the swing
  const loveIdx = (opts.houses || []).findIndex((hh) => hh.id === 'love');
  const loveYard = (x, z) => {
    if (LOT) return inLot(x, z, 1.2);
    if (loveIdx < 0 || !HOUSE_POS[loveIdx]) return false;
    const [lx, lz] = HOUSE_POS[loveIdx];
    return (Math.abs(x - lx) < 7 && z > lz + 2.5 && z < lz + 12) || (Math.abs(z - lz) < 3.5 && Math.abs(x - lx) < 8.5) || (Math.abs(x - lx) < 3.5 && z < lz && z > lz - 8);
  };
  // trees grow in clusters (round, tall, pine, now and then a cherry) on soft grassy mounds along the shore,
  // with bushes around them; inside the village only a few smaller trees, where there's room
  const treeAt = [];
  const mounds = [];
  const moundY = (x, z) => { let y = 0; mounds.forEach((m) => { const d = Math.hypot(x - m.x, z - m.z) / m.r; if (d < 1) y = Math.max(y, m.h * Math.sqrt(1 - d * d) - 0.06); }); return y; };
  const plant = (x, z, kind, scale) => {
    if (!free(x, z) || loveYard(x, z) || treeAt.some(([a, b]) => Math.hypot(a - x, b - z) < 2.6)) return false;
    const t = makeTree(R, kind || (R() < 0.12 ? 'cherry' : undefined)); if (scale) t.scale.setScalar(scale);
    t.position.set(x, groundY(x, z) + moundY(x, z), z); t.userData.post = 1.1; world.add(t); treeAt.push([x, z]);
    return true;
  };
  const moundOK = (x, z, r) => [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r]].every(([dx, dz]) => free(x + dx, z + dz) && !loveYard(x + dx, z + dz));
  { const nC = 21;
    for (let i = 0; i < nC; i++) {
      const t = (i + 0.5 + (R() - 0.5) * 0.35) / nC * Math.PI * 2, rr = shoreR(t) - 5.5 - R() * 2;
      const cx = Math.cos(t) * rr, cz = Math.sin(t) * rr, mr = 3.2 + R() * 1.4;
      if (moundOK(cx, cz, mr * 0.8)) {                    // a soft grassy hump under the cluster
        const m = new THREE.Mesh(leafGeo, mat(0xc6e9ad)); m.scale.set(mr, 0.55, mr * (0.8 + R() * 0.3)); m.position.set(cx, groundY(cx, cz) - 0.05, cz); m.receiveShadow = true; m.userData.post = mr * 0.85; world.add(m);
        mounds.push({ x: cx, z: cz, r: mr, h: 0.5 });
      }
      let n = 3 + Math.floor(R() * 3);
      for (let k = 0; k < n * 3 && treeAt.length < 400; k++) { const a0 = R() * 6.28, d = R() * 3.2; if (plant(cx + Math.cos(a0) * d, cz + Math.sin(a0) * d, undefined, 0.95 + R() * 0.4) && --n === 0) break; }
      for (let k = 0; k < 3; k++) {                       // bushes round the edge of the cluster
        const a0 = R() * 6.28, d = 2.4 + R() * 1.6, x = cx + Math.cos(a0) * d, z = cz + Math.sin(a0) * d;
        if (!free(x, z) || loveYard(x, z) || treeAt.some(([a, b]) => Math.hypot(a - x, b - z) < 1.5)) continue;
        const b0 = makeBush(R, R() < 0.45); b0.position.set(x, groundY(x, z) + moundY(x, z), z); world.add(b0);
      }
    }
  }
  for (let k = 0, got = 0; k < 600 && got < 12; k++) {
    if (plant((R() - 0.5) * ISLAND.w, (R() - 0.5) * ISLAND.d, R() < 0.5 ? 'round' : 'tall', 0.7 + R() * 0.15)) got++;
  }
  // round bushes (some with pink flowers) and pastel rocks in the gaps
  { const bush = new THREE.IcosahedronGeometry(0.7, 2), rock = new THREE.IcosahedronGeometry(0.55, 2);
    const kinds = [[bush, mat(0x93cf86, {}), 16], [bush, mat(0xa8dca0, {}), 12], [rock, mat(0xddd5c8, {}), 16], [rock, mat(0xc9bfae, {}), 10]];
    kinds.forEach(([geo, m, n]) => {
      const im = new THREE.InstancedMesh(geo, m, n); let k = 0;
      for (let tries = 0; tries < 3000 && k < n; tries++) {
        const near = R() < 0.6 && treeAt.length, base = near ? treeAt[Math.floor(R() * treeAt.length)] : null;
        const x = base ? base[0] + (R() - 0.5) * 5 : (R() - 0.5) * (ISLAND.w - 6), z = base ? base[1] + (R() - 0.5) * 5 : (R() - 0.5) * (ISLAND.d - 6);
        if (!free(x, z) || loveYard(x, z) || treeAt.some(([a, b]) => Math.hypot(a - x, b - z) < 1.3)) continue;
        const sc = 0.7 + R() * 0.8;
        dummy.position.set(x, groundY(x, z) + 0.3 * sc, z); dummy.rotation.set(R(), R() * 6, R()); dummy.scale.set(sc * 1.2, sc * 0.8, sc);
        dummy.updateMatrix(); im.setMatrixAt(k++, dummy.matrix);
      }
      im.count = k; im.castShadow = true; im.receiveShadow = true; world.add(im);
    });
    dummy.scale.set(1, 1, 1); dummy.rotation.set(0, 0, 0); }
  // sparkles on the lake and the river (three sets, twinkling in turn)
  const sparkles = [0, 1, 2].map((k) => {
    const pos = [];
    for (let i = 0; i < 9; i++) { const a = Math.random() * 6.283, rr = Math.sqrt(Math.random()) * 0.85; pos.push(POND.x + Math.cos(a) * POND.rx * rr, 0.42, POND.z + Math.sin(a) * POND.rz * rr); }
    for (let i = 0; i < 7; i++) { const p = river.curve.getPointAt(Math.random()); pos.push(p.x + (Math.random() - 0.5) * 1.4, 0.3, p.z + (Math.random() - 0.5) * 1.4); }
    const g0 = new THREE.BufferGeometry(); g0.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const pts = new THREE.Points(g0, new THREE.PointsMaterial({ size: 0.9, map: twinkleTex, color: [0xffffff, 0xfff3b8, 0xffd6ea][k], transparent: true, opacity: 0, depthWrite: false }));
    pts.userData = { base: 0.6, ph: k * 2.1 }; world.add(pts); return pts;
  });
  // street lamps beside the roads (the first three really light up at night)
  const lampSpots = [];
  ROADS.forEach(([x1, z1, x2, z2]) => [0.3, 0.72].forEach((t) => {
    const v = x1 === x2, x = lerp(x1, x2, t) + (v ? RH + 0.6 : 0), z = lerp(z1, z2, t) + (v ? 0 : RH + 0.6);
    if (HOUSE_POS.some(([hx, hz]) => Math.abs(x - hx) < 3.6 && Math.abs(z - hz) < 4.2)) return;
    if (Math.abs(x - HALL_POS[0]) < 6.2 && Math.abs(z - HALL_POS[1]) < 6) return;
    if (inPond(x, z, 1.5) || loveYard(x, z) || !onIsland(x, z, 2) || nearCliff(x, z, 0.5) || riverDist(x, z) < 2 || onRamp(x, z) || inPark(x, z)) return;
    lampSpots.push([x, z]);
  }));
  lampSpots.slice(0, 7).forEach(([x, z], k) => {
    const l = makeLamp(); l.position.set(x, groundY(x, z), z); l.userData.post = 0.3; world.add(l);
    if (k % 2 === 0 && lampLights.length < 3) {
      const pl = new THREE.PointLight(0xffc977, 0, 12, 1.6); pl.position.set(x, groundY(x, z) + 2.7, z); world.add(pl); lampLights.push(pl);
    }
  });

  // houses
  const houseObjs = [], doors = [];
  (opts.houses || []).forEach((spec, i) => {
    if (!HOUSE_POS[i]) return;
    const h = spec.id === 'love' ? makeModern()
      : spec.special === 'arcade' ? makeArcade()
      : spec.special === 'store' ? makeStore()
      : makeHouse(spec, false);
    h.position.set(HOUSE_POS[i][0], groundY(HOUSE_POS[i][0], HOUSE_POS[i][1]), HOUSE_POS[i][1]);
    h.rotation.y = FACE[i] || 0; h.userData.face = FACE[i] || 0;
    h.userData.id = spec.id; world.add(h); houseObjs.push(h);
    const f = h.userData.face;
    doors.push({ x: HOUSE_POS[i][0] + Math.sin(f) * h.userData.doorZ, z: HOUSE_POS[i][1] + Math.cos(f) * h.userData.doorZ });
  });
  const lot = buildLot(world, LOT ? FACE[LOT.house] || 0 : 0);
  const hall = makeHouse(null, true); hall.position.set(HALL_POS[0], groundY(HALL_POS[0], HALL_POS[1]), HALL_POS[1]); hall.userData.id = 'hall'; world.add(hall); houseObjs.push(hall);
  const hallDoor = { x: HALL_POS[0], z: HALL_POS[1] + hall.userData.doorZ };
  doors.push(hallDoor);
  const graph = buildGraph(doors);
  const hallNode = graph.doorNodes[graph.doorNodes.length - 1];

  /* actors */
  /* Everything that never moves is drawn in a few big batches (one per material) —
     19 houses would otherwise be thousands of separate draw calls on a phone. */
  (function batchStatic() {
    world.updateMatrixWorld(true);
    const keep = new Set();
    const hold = (o) => { if (o) o.traverse((c) => keep.add(c)); };
    hold(water);
    park.ducks.forEach((d) => hold(d.g));
    houseObjs.forEach((h) => { hold(h.userData.hinge); hold(h.userData.flag); hold(h.userData.bell); });
    hold(lot.car); hold(fountain.jet); fountain.drops.forEach((d0) => hold(d0.m));
    const buckets = new Map(), drop = [];
    world.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh || keep.has(o) || o.userData.keepBatch || Array.isArray(o.material) || o.material.transparent) return;
      let geo = o.geometry.clone();
      Object.keys(geo.attributes).forEach((k) => { if (k !== 'position' && k !== 'normal' && k !== 'uv') geo.deleteAttribute(k); });
      if (!geo.attributes.uv) return;
      if (geo.index) geo = geo.toNonIndexed();
      geo.clearGroups();
      geo.applyMatrix4(o.matrixWorld);
      if (!buckets.has(o.material)) buckets.set(o.material, []);
      buckets.get(o.material).push(geo);
      drop.push(o);
    });
    drop.forEach((o) => o.parent.remove(o));
    buckets.forEach((geos, m) => {
      const merged = mergeGeometries(geos, false);
      geos.forEach((g) => g.dispose());
      if (!merged) return;
      const mesh = new THREE.Mesh(merged, m);
      mesh.castShadow = true; mesh.receiveShadow = true;
      world.add(mesh);
    });
  })();

  /* residents: one per house, a couple in Love, helpers come when a house has a lot to do */
  const people = [];
  const couple = { her: null, him: null, home: null, kiss: 0 };
  const homeDoor = (i) => graph.nodes[graph.doorNodes[i]];
  let busy = {};                                   // house index → how much unfinished work
  const busyAt = (i) => busy[i] || 0;
  function addPerson(look, home, extra) {
    const p = makePerson(look); world.add(p.g);
    const n = homeDoor(home);
    p.g.position.set(n.x + rnd(-0.6, 0.6), 0, n.z + rnd(0, 0.4));
    Object.assign(p, { kind: 'person', i: people.length, home, path: [], speed: rnd(1.35, 1.75), wait: rnd(0, 3), t: rnd(0, 6), v: 0, goal: '', inside: false }, extra || {});
    people.push(p);
    return p;
  }
  (opts.houses || []).forEach((spec, i) => {
    if (i >= HOUSE_POS.length) return;
    if (spec.id === 'love') {
      couple.home = i;
      couple.her = addPerson(LOVE_LOOKS.her, i, { love: 'her' });
      couple.him = addPerson(LOVE_LOOKS.him, i, { love: 'him' });
    } else addPerson(LOOKS[i] || LOOKS[i % 9] || LOOKS[0], i);
  });
  const cat = Object.assign(makeCat(), { kind: 'cat', path: [], speed: 1.1, wait: 2, t: 0, sit: true });
  const dog = Object.assign(makeDog(), { kind: 'dog', path: [], speed: 2.2, wait: 1, t: 0, buddy: 0 });
  { const a = graph.nodes[graph.doorNodes[2]], b = graph.nodes[graph.doorNodes[graph.doorNodes.length - 1]];
    cat.g.position.set(a.x + 1.5, 0, a.z + 0.6); dog.g.position.set(b.x + 3, 0, b.z + 0.8); }
  world.add(cat.g, dog.g);
  const fish = [0, 1, 2, 3].map((i) => { const f = makeFish(i); world.add(f); return { g: f, a: rnd(0, 6.28), r: rnd(0.62, 0.92), sp: rnd(0.25, 0.5) * (i % 2 ? 1 : -1), jump: 0, jx: 0, jz: 0 }; });
  function zzzSprite() {
    const c = document.createElement('canvas'); c.width = 128; c.height = 64;
    const x = c.getContext('2d');
    x.font = 'bold 34px sans-serif'; x.fillStyle = '#7a6a9a';
    x.fillText('z', 18, 52); x.font = 'bold 26px sans-serif'; x.fillText('z', 52, 36); x.font = 'bold 20px sans-serif'; x.fillText('z', 82, 22);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
    sp.scale.set(1.1, 0.55, 1); sp.visible = false; world.add(sp);
    return sp;
  }
  cat.zzz = zzzSprite(); dog.zzz = zzzSprite();
  const kissHeart = textSprite('♥', '#ff6f91', 0.9, 0.45); world.add(kissHeart);
  const tmpV = new THREE.Vector3();
  let helperClock = 0;
  const food = [];
  const foodGeo = new THREE.SphereGeometry(0.09, 6, 5);
  function feed(x, z) {
    for (let i = 0; i < 7; i++) {
      const a = Math.random() * 6.28, r = Math.random() * 0.8;
      const px = x + Math.cos(a) * r, pz = z + Math.sin(a) * r * 0.7;
      if (!inPond(px, pz, -0.8)) continue;
      const m = new THREE.Mesh(foodGeo, mat(i % 2 ? 0xc98b5a : 0xe0a96d));
      m.position.set(px, 1.6 + Math.random() * 0.6, pz); world.add(m);
      food.push({ m, vy: 0, life: 25 });
    }
  }
  const splashes = [];
  function splash(x, z, size) {
    const r = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.25, 18), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, side: THREE.DoubleSide }));
    r.rotation.x = -Math.PI / 2; r.position.set(x, 0.245, z); r.userData.size = size; world.add(r); splashes.push(r);
  }
  const ripple = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.45, 20), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, side: THREE.DoubleSide }));
  ripple.rotation.x = -Math.PI / 2; world.add(ripple);
  const flies = [0xffb6c1, 0xd9c9f0, 0xf9e08a, 0xb0e0e6].map((c, i) => { const b = makeButterfly(c); world.add(b); return { g: b, ph: i * 1.7, cx: rnd(-25, 25), cz: rnd(-15, 15) }; });
  const fireGeo = new THREE.BufferGeometry(), fp = [];
  for (let i = 0; i < 40; i++) fp.push(rnd(-30, 30), rnd(1, 3), rnd(-20, 20));
  fireGeo.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3));
  const fireflies = new THREE.Points(fireGeo, new THREE.PointsMaterial({ color: 0xfff2a0, size: 0.35, transparent: true, opacity: 0 }));
  world.add(fireflies);

  let urgent = 0;
  /* ---- daily life by the REAL clock (the ◐☼☾ button only changes the picture) ---- */
  function realHour() { const d = new Date(); return d.getHours() + d.getMinutes() / 60; }
  function routine(h) {
    if (h >= 23 || h < 6.5) return 'sleep';
    if (h < 7) return 'morning';
    if (h < 11.5) return 'work';                     // 7:00 – 11:30
    if (h < 13) return 'lunch';                      // 11:30 – 13:00
    if (h < 16.5) return 'work';                     // 13:00 – 16:30
    if (h < 21) return 'evening';
    return 'home';                                   // 21–23: indoors, lights on
  }
  function gatherSpot(i) {                           // rows in front of the Town Hall
    const k = i % 18, row = Math.floor(k / 6), col = k % 6;
    return { x: hallDoor.x + (col - 2.5) * 1.2 + (row % 2) * 0.6, z: hallDoor.z + 1.3 + row * 1.1 };
  }
  function goTo(p, goal, why) {
    p.goal = why;
    p.path = routeTo(p, goal);
    if (!p.path.length) {
      const a = graph.nearest(p.g.position.x, p.g.position.z), b = graph.nearest(goal.x, goal.z);
      p.path = graph.path(a, b).concat([goal]);
    }
  }
  // just in front of the door (houses can face any way)
  function doorStep(i) { const n = homeDoor(i), f = FACE[i] || 0; return { x: n.x - Math.sin(f) * 0.9, z: n.z - Math.cos(f) * 0.9, f }; }
  function comeOut(p) {
    const d = doorStep(p.home);
    p.inside = false; p.g.visible = true;
    p.g.position.set(d.x + rnd(-0.3, 0.3), 0, d.z); p.g.rotation.set(0, d.f, 0);
  }
  function goInside(p, stay) { const d = doorStep(p.home); goTo(p, { x: d.x, z: d.z }, 'in'); p.stay = stay; }
  const storeIdx = houseObjs.findIndex((h) => h.userData.alwaysLit);
  let workSpots = null, pondSpots = null;
  function spotsReady() {
    if (workSpots) return;
    workSpots = HOUSE_POS.map((_, i) => {
      const n = homeDoor(i);
      return [[-1.7, -0.5], [1.7, -0.5], [-0.9, 0.2], [0.9, 0.2]].map(([dx, dz]) => ({ x: n.x + dx, z: n.z + dz })).filter((q) => !blocked(q.x, q.z, 0.15));
    });
    pondSpots = [];
    for (let a = 0; a < 18; a++) {
      const q = { x: POND.x + Math.cos(a / 18 * 6.283) * (POND.rx + 2.2), z: POND.z + Math.sin(a / 18 * 6.283) * (POND.rz + 1.9) };
      if (!blocked(q.x, q.z, 0.2)) pondSpots.push(q);
    }
  }
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  function workSpot(p) { spotsReady(); const w = workSpots[p.home]; return w.length ? pick(w) : homeDoor(p.home); }
  function strollSpot(p, r) {
    spotsReady();
    const x = Math.random();
    if (r === 'lunch' && storeIdx >= 0 && x < 0.6) {        // lunch at the 7-Eleven, then a stroll
      const n = homeDoor(storeIdx); return { x: n.x + rnd(-2.6, 2.6), z: n.z + rnd(0, 0.8) };
    }
    if (r === 'lunch' && x < 0.75) return gatherSpot(Math.floor(rnd(0, 18)));
    if (x < 0.4 && pondSpots.length) return pick(pondSpots);
    if (x < 0.85) { const n = homeDoor(Math.floor(rnd(0, HOUSE_POS.length))); return { x: n.x + rnd(-1, 1), z: n.z + rnd(0, 0.5) }; }   // visiting
    return gatherSpot(Math.floor(rnd(0, 18)));
  }
  function decide(p) {
    if (p.love === 'him') return;                    // he goes wherever she goes
    const r = routine(realHour());
    if (p.love === 'her') return decideCouple(p, r);
    const hard = busyAt(p.home) > 0;
    if (p.helper && busyAt(p.home) < p.helper) {     // job done → go back home through the Town Hall
      if (p.inside) comeOut(p);
      goTo(p, { x: hallDoor.x, z: hallDoor.z }, 'leave'); return;
    }
    if (urgent && !hard && r !== 'sleep' && r !== 'home' && !p.helper) {
      if (p.inside) comeOut(p);
      if (p.goal !== 'hall' || p.path.length) goTo(p, gatherSpot(p.i), 'hall');
      p.wait = rnd(3, 6); return;
    }
    if (hard || r === 'work') {                      // in and out of the house, busy at the door
      if (p.inside) { comeOut(p); goTo(p, workSpot(p), 'work'); return; }
      if (p.goal === 'work') { goInside(p, rnd(3, hard ? 6 : 10)); return; }
      goTo(p, workSpot(p), 'work'); return;
    }
    if (r === 'sleep' || r === 'home') {
      if (p.inside) { p.wait = rnd(20, 40); return; }
      goInside(p, rnd(20, 40)); return;
    }
    if (p.inside) comeOut(p);                        // morning / lunch / evening: out and about
    else if (Math.random() < 0.15) { goInside(p, rnd(5, 12)); return; }
    goTo(p, strollSpot(p, r), 'stroll'); p.wait = rnd(2, 6);
  }
  function decideCouple(her, r) {
    const him = couple.him;
    if (r === 'sleep' || r === 'home' || realHour() >= 20.5) {   // evenings at home together
      standUp();
      if (her.inside) { her.wait = rnd(30, 60); return; }
      goInside(her, rnd(30, 60)); return;
    }
    if (her.inside) { comeOut(her); comeOut(him); him.g.position.x += 0.7; }
    if (her.sitting) { standUp(); goTo(her, strollSpot(her, r), 'stroll'); her.wait = rnd(2, 5); return; }
    if (swing && Math.random() < 0.55) { goTo(her, swing.userData.front, 'swing'); return; }
    goTo(her, strollSpot(her, r), 'stroll'); her.wait = rnd(2, 5);
  }
  function standUp() {
    [couple.her, couple.him].forEach((q) => {
      if (!q || !q.sitting) return;
      q.sitting = false;
      q.g.position.set(swing.userData.front.x + (q.love === 'her' ? -0.4 : 0.4), 0, swing.userData.front.z);
      q.g.rotation.set(0, swing.rotation.y, 0);
    });
  }
  function arrive(p) {                               // reached the end of a walk
    if (p.goal === 'in') { p.inside = true; p.g.visible = false; p.wait = p.stay || 10; }
    else if (p.goal === 'work') p.wait = rnd(6, 12);
    else if (p.goal === 'swing') { p.sitting = true; p.wait = rnd(15, 30); }
    else if (p.goal === 'leave') { world.remove(p.g); people.splice(people.indexOf(p), 1); }
  }
  // the boyfriend walks at her side (or follows her in / onto the swing)
  function followHer(him, dt) {
    const her = couple.her;
    if (her.inside) {
      if (him.inside) return false;
      const n = doorStep(him.home), dx = n.x - him.g.position.x, dz = n.z - him.g.position.z, d = Math.hypot(dx, dz);
      if (d < 0.15) { him.inside = true; him.g.visible = false; return false; }
      const st = Math.min(d, her.speed * 1.2 * dt); him.g.position.x += dx / d * st; him.g.position.z += dz / d * st;
      him.g.rotation.y = Math.atan2(dx, dz); him.v = her.speed;
      return true;
    }
    if (him.inside) { comeOut(him); him.g.position.x += 0.7; }
    if (her.sitting) { him.sitting = true; return false; }
    him.sitting = false;
    const yaw = her.g.rotation.y, tx = her.g.position.x - Math.cos(yaw) * 0.72, tz = her.g.position.z + Math.sin(yaw) * 0.72;
    const dx = tx - him.g.position.x, dz = tz - him.g.position.z, d = Math.hypot(dx, dz);
    if (d < 0.05) { him.v = 0; let df = yaw - him.g.rotation.y; df = Math.atan2(Math.sin(df), Math.cos(df)); him.g.rotation.y += df * Math.min(1, dt * 6); return false; }
    const want = Math.min(her.speed * 1.35, d * 4);
    him.v = (him.v || 0) + (want - (him.v || 0)) * Math.min(1, dt * 5);
    const st = Math.min(d, him.v * dt);
    him.g.position.x += dx / d * st; him.g.position.z += dz / d * st;
    const face = d > 0.35 ? Math.atan2(dx, dz) : yaw;
    let df = face - him.g.rotation.y; df = Math.atan2(Math.sin(df), Math.cos(df)); him.g.rotation.y += df * Math.min(1, dt * 7);
    return him.v > 0.15;
  }
  // start of the day: whoever should be asleep / at home already is
  { const r0 = routine(realHour());
    if (r0 === 'sleep' || r0 === 'home') people.forEach((p) => { p.inside = true; p.g.visible = false; p.wait = rnd(5, 30); }); }
  /* things nobody walks through: houses, the hall, trees, lamps, the pond */
  const blocks = houseObjs.filter((h) => h.userData.id !== 'hall').map((h) => {
    const s = h.userData.size, f = h.userData.face || 0, side = Math.abs(Math.sin(f)) > 0.5;
    if (!s) return { x: h.position.x, z: h.position.z, hw: 3.3, hd: 2.6 };
    const ox = Math.cos(f) * s.cx, oz = -Math.sin(f) * s.cx;
    return { x: h.position.x + ox, z: h.position.z + oz, hw: side ? s.hd : s.hw, hd: side ? s.hw : s.hd };
  }).concat([{ x: HALL_POS[0], z: HALL_POS[1], hw: 5.8, hd: 4.1 }]);
  const posts = [];
  world.children.forEach((o) => { if (o.userData.post) posts.push({ x: o.position.x, z: o.position.z, r: o.userData.post }); });
  park.posts.forEach((q) => posts.push(q));
  function blocked(x, z, pad) {
    pad = pad || 0.5;
    if (!onIsland(x, z, 2.5)) return true;
    if (nearCliff(x, z, 0)) return true;
    if (riverDist(x, z) < 1.8 && !river.bridges.some((b) => Math.hypot(b.x - x, b.z - z) < 2.4)) return true;
    if (inPond(x, z, 0.9 + pad)) return true;
    if (blocks.some((b) => Math.abs(x - b.x) < b.hw + pad && Math.abs(z - b.z) < b.hd + pad)) return true;
    return posts.some((p) => Math.hypot(x - p.x, z - p.z) < p.r + pad * 0.6);
  }
  function clearLine(a, b) {
    const n = Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / 0.4);
    for (let i = 1; i <= n; i++) { const t = i / n; if (blocked(lerp(a.x, b.x, t), lerp(a.z, b.z, t), 0.45)) return false; }
    return true;
  }
  // the Love couple's swing: beside their house, on grass, not on a road
  const onRoad = (x, z, pad) => ROADS.some(([x1, z1, x2, z2]) => x >= Math.min(x1, x2) - RH - pad && x <= Math.max(x1, x2) + RH + pad && z >= Math.min(z1, z2) - RH - pad && z <= Math.max(z1, z2) + RH + pad);
  let swing = null;
  lot.blocks.forEach((b) => blocks.push(b));
  lot.posts.forEach((q) => posts.push(q));
  if (couple.home != null && LOT && LOT.house === couple.home) {
    const [sx, sz] = LOT.swing, f = FACE[couple.home] || 0;
    swing = makeSwing(); swing.position.set(sx, groundY(sx, sz), sz); swing.rotation.y = f; world.add(swing);
    swing.userData.front = { x: sx + Math.sin(f) * 1.25, z: sz + Math.cos(f) * 1.25 };
    blocks.push({ x: sx, z: sz, hw: 1.55, hd: 1.55 });
    blocks.push({ x: sx - Math.cos(f) * 2.0, z: sz + Math.sin(f) * 2.0, hw: 0.8, hd: 0.8 });   // the trunk
  } else if (couple.home != null) {
    const [hx, hz] = HOUSE_POS[couple.home];
    // in front of the door first (across the path), then beside the house
    const tries = [[0, 7.2], [0, 6.4], [-2.2, 7.2], [2.2, 7.2], [0, 8.4], [4.6, 0.8], [-4.6, 0.8], [0, -5.2]];
    const hard = (x, z) => !onIsland(x, z, 2.5) || inPond(x, z, 1) ||
      blocks.some((b) => Math.abs(x - b.x) < b.hw + 0.1 && Math.abs(z - b.z) < b.hd + 0.1) || onRoad(x, z, 0);
    for (const [dx, dz] of tries) {
      const x = hx + dx, z = hz + dz;
      const ok = [[-1.6, -0.9], [1.6, -0.9], [-1.6, 0.9], [1.6, 0.9], [0, 0], [0, 1.6], [-0.5, 1.6], [0.5, 1.6]].every(([a, b]) => !hard(x + a, z + b));
      if (!ok) continue;
      // a tree or lamp in the way makes room
      world.children.slice().forEach((o) => {
        if (o.userData.post && Math.abs(o.position.x - x) < 2.6 && Math.abs(o.position.z - z) < 2.2) {
          world.remove(o);
          const k = posts.findIndex((q) => q.x === o.position.x && q.z === o.position.z); if (k >= 0) posts.splice(k, 1);
        }
      });
      swing = makeSwing(); swing.position.set(x, groundY(x, z), z); world.add(swing);
      swing.userData.front = { x, z: z + 1.25 };
      blocks.push({ x, z, hw: 1.55, hd: 0.75 });
      break;
    }
  }
  // chimney smoke from houses that still have work to do
  const puffs = [], puffGeo = new THREE.SphereGeometry(0.28, 8, 6);
  function puff(h) {
    const m = new THREE.Mesh(puffGeo, new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.75, depthWrite: false }));
    const c = h.userData.chimney;
    m.position.set(h.position.x + c.x + rnd(-0.1, 0.1), c.y, h.position.z + c.z + rnd(-0.1, 0.1));
    world.add(m); puffs.push({ m, life: 0 });
  }
  // helpers: a lot of work → people come over from the Town Hall to help
  const HELP_AT = [3, 6, 10];                        // unfinished items for +1, +2, +3 helpers
  function manageHelpers() {
    HOUSE_POS.forEach((_, i) => {
      if (i === couple.home) return;
      const want = HELP_AT.filter((t) => busyAt(i) >= t).length;
      const have = people.filter((p) => p.helper && p.home === i && p.goal !== 'leave');
      for (let k = have.length; k < want; k++) {
        const p = addPerson(HELPER_LOOKS[k % HELPER_LOOKS.length], i, { helper: HELP_AT[k] });
        p.g.position.set(hallDoor.x + rnd(-1, 1), 0, hallDoor.z + rnd(0, 0.6));
        goTo(p, workSpot(p), 'work');
      }
    });
  }
  // straight line when it's clear, otherwise along the roads
  function routeTo(m, goal) {
    const from = { x: m.g.position.x, z: m.g.position.z };
    if (clearLine(from, goal)) return [goal];
    const a = graph.nearest(from.x, from.z), b = graph.nearest(goal.x, goal.z);
    const pts = graph.path(a, b);
    if (!clearLine(from, pts[0])) return [];
    const last = pts[pts.length - 1];
    if (clearLine(last, goal)) pts.push(goal);
    return pts;
  }
  function planPet(m) {
    if (m.kind === 'dog' && Math.random() < 0.65) {
      let bp = people[m.buddy % people.length];
      for (let k = 0; k < people.length && (!bp.g.visible || bp.sitting); k++) bp = people[++m.buddy % people.length];
      const b = bp.g.position;
      const g = { x: b.x + rnd(-1.5, 1.5), z: b.z + rnd(0.8, 1.6) };
      if (Math.random() < 0.15) m.buddy++;
      if (!blocked(g.x, g.z)) { m.path = routeTo(m, g); if (m.path.length) return; }
    }
    for (let n = 0; n < 30; n++) {
      const g = { x: m.g.position.x + rnd(-9, 9), z: m.g.position.z + rnd(-7, 7) };
      if (blocked(g.x, g.z, 0.8)) continue;
      if (clearLine(m.g.position, g)) { m.path = [g]; return; }
    }
    // stuck somewhere tight → walk to a road
    const n = graph.nodes[graph.nearest(m.g.position.x, m.g.position.z)];
    m.path = [{ x: n.x, z: n.z }];
  }
  function step(m, dt) {
    const pos = m.g.position;
    if (m.sleep > 0) { m.v = 0; return false; }
    if (!m.path.length) {
      m.v = 0;
      m.wait -= dt;
      if (m.wait <= 0) {
        if (m.kind === 'person') { m.wait = rnd(1.5, 4); decide(m); return false; }
        planPet(m);
        m.wait = rnd(2, 6);
        if (m.kind === 'cat') { m.sit = Math.random() < 0.45; if (m.sit) m.path = []; }
      }
      return false;
    }
    const tgt = m.path[0], dx = tgt.x - pos.x, dz = tgt.z - pos.z, dist = Math.hypot(dx, dz);
    if (dist < 0.08) { m.path.shift(); if (!m.path.length && m.kind === 'person') arrive(m); return true; }
    // turn towards where we're going first, then speed up gently; slow down at the end
    const want = Math.atan2(dx, dz);
    let diff = want - m.g.rotation.y; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    m.g.rotation.y += diff * Math.min(1, dt * 7);
    const left = dist + (m.path.length > 1 ? 99 : 0);
    const top = Math.abs(diff) > 1.1 ? m.speed * 0.15 : m.speed * Math.min(1, left / 1.2 + 0.25);
    m.v = (m.v || 0) + (top - (m.v || 0)) * Math.min(1, dt * 4);
    const s = Math.min(dist, m.v * dt);
    pos.x += Math.sin(m.g.rotation.y) * s * 0.35 + dx / dist * s * 0.65;
    pos.z += Math.cos(m.g.rotation.y) * s * 0.35 + dz / dist * s * 0.65;
    return true;
  }
  function animate(dt, time) {
    people.slice().forEach((p) => {
      const moving = p.love === 'him' ? followHer(p, dt) : step(p, dt);
      if (p.inside || !p.g.visible) return;
      if (p.sitting && swing) {                     // on the swing, swinging together
        const side = p.love === 'her' ? -0.4 : 0.4;
        tmpV.set(side, 0.06, 0); swing.userData.seat.localToWorld(tmpV); world.worldToLocal(tmpV);
        p.g.position.set(tmpV.x, tmpV.y - HIP, tmpV.z);
        p.g.rotation.set(swing.userData.pivot.rotation.x * 0.9, swing.rotation.y, 0);
        p.parts.legL.rotation.x = p.parts.legR.rotation.x = -1.45 + Math.sin(time * 1.7) * 0.25;
        p.parts.armL.rotation.x = p.parts.armR.rotation.x = -0.5;
        p.parts.head.rotation.set(0, 0, 0);
        return;
      }
      const pace = Math.min(1, (p.v || 0) / p.speed);
      p.t += dt * (moving ? 3 + 7 * pace : 2);
      const sw = moving ? Math.sin(p.t) * 0.75 * pace : 0;
      p.parts.legL.rotation.x = sw; p.parts.legR.rotation.x = -sw;
      p.parts.armL.rotation.x = -sw * 0.8; p.parts.armR.rotation.x = sw * 0.8;
      p.g.rotation.x = 0; p.parts.head.rotation.x = 0; p.parts.head.rotation.z = 0;
      const gy = groundY(p.g.position.x, p.g.position.z);
      p.g.position.y = gy + (moving ? Math.abs(Math.sin(p.t)) * 0.06 : 0);
      if (!moving && !p.path.length) {
        if (p.goal === 'hall') {                         // waiting at the hall: face it, little hops
          let d = Math.PI - p.g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); p.g.rotation.y += d * Math.min(1, dt * 6);
          p.g.position.y = gy + Math.max(0, Math.sin(time * 4 + p.i)) * 0.1;
          p.parts.armR.rotation.x = -2.6 + Math.sin(time * 6 + p.i) * 0.3;
        } else if (p.goal === 'work') {                  // busy at the door: face the house, hands going
          let d = Math.PI - p.g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); p.g.rotation.y += d * Math.min(1, dt * 6);
          p.parts.armR.rotation.x = -1.3 + Math.sin(time * 9 + p.i) * 0.55;
          p.parts.armL.rotation.x = -0.9 + Math.sin(time * 9 + p.i + 1.6) * 0.35;
          p.parts.head.rotation.x = 0.25;
        }
        p.parts.head.rotation.y = p.goal === 'work' ? 0 : Math.sin(time * 0.7 + p.i) * 0.4;
      } else p.parts.head.rotation.y = 0;
    });
    // tapped the couple: he gives her a kiss on the cheek ♡
    if (couple.kiss > 0 && couple.him && couple.him.g.visible) {
      couple.kiss -= dt;
      const her = couple.her, him = couple.him, k = Math.min(1, Math.sin(Math.min(1, (2.4 - couple.kiss) / 2.4) * Math.PI) * 1.6);
      const dx = her.g.position.x - him.g.position.x, dz = her.g.position.z - him.g.position.z;
      if (!him.sitting) {
        let d = Math.atan2(dx, dz) - him.g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); him.g.rotation.y += d * Math.min(1, dt * 8);
        let e = Math.atan2(-dx, -dz) - her.g.rotation.y; e = Math.atan2(Math.sin(e), Math.cos(e)); her.g.rotation.y += e * Math.min(1, dt * 3) * 0.5;
        him.g.rotation.x = 0.2 * k;
      } else {
        him.parts.head.rotation.y = 0.9 * k; him.parts.head.rotation.z = 0.25 * k;
        her.parts.head.rotation.z = -0.15 * k;
      }
      kissHeart.visible = true;
      kissHeart.position.set((her.g.position.x + him.g.position.x) / 2, 2 + (2.4 - couple.kiss) * 0.35, (her.g.position.z + him.g.position.z) / 2);
      kissHeart.material.opacity = Math.min(1, couple.kiss * 1.5);
      if (couple.kiss <= 0) { kissHeart.visible = false; him.g.rotation.x = 0; }
    }
    // the swing moves while they sit on it
    if (swing) {
      const pv = swing.userData.pivot, on = couple.her && couple.her.sitting;
      pv.rotation.x = on ? Math.sin(time * 1.7) * (couple.kiss > 0 ? 0.12 : 0.32) : pv.rotation.x * Math.max(0, 1 - dt * 1.5);
    }
    // lights: a house is lit when someone's awake inside or it still has work; the Love house stays dark when they're in
    const rNow = routine(realHour());
    houseObjs.forEach((h, i) => {
      if (!h.userData.wm) return;
      let lit = 0;
      if (i === couple.home) lit = 0;
      else if (busyAt(i) > 0 || h.userData.alwaysLit) lit = 1;
      else if (rNow !== 'sleep' && people.some((p) => p.home === i && p.inside)) lit = 1;
      h.userData.lit = lerp(h.userData.lit || 0, lit, Math.min(1, dt * 2));
      h.userData.wm.emissiveIntensity = nightAmt * (0.28 + 0.7 * h.userData.lit);   // a soft porch glow at night, brighter when someone's up
      if (h.userData.heart) {
        const both = couple.her && couple.her.inside && couple.him.inside;
        h.userData.heart.material.emissiveIntensity = both ? 0.5 + Math.max(0, Math.sin(time * 5)) * 1.3 : 0.2;
      }
      if (busyAt(i) > 0 && h.userData.chimney && Math.random() < dt * 2.2) puff(h);
    });
    for (let q = puffs.length - 1; q >= 0; q--) {
      const f = puffs[q]; f.life += dt;
      f.m.position.y += dt * 0.9; f.m.position.x += dt * 0.25;
      f.m.scale.setScalar(1 + f.life * 0.9); f.m.material.opacity = Math.max(0, 0.75 - f.life * 0.3);
      if (f.life > 2.5) { world.remove(f.m); f.m.material.dispose(); puffs.splice(q, 1); }
    }
    helperClock += dt;
    if (helperClock > 2) { helperClock = 0; manageHelpers(); }
    [cat, dog].forEach((m) => {
      if (m.sleep > 0) {                          // tapped: lie down, close eyes, Zzz… for ~3 s
        m.sleep -= dt;
        const k = Math.min(1, m.sleepIn += dt * 3);
        m.parts.legs.forEach((l, i) => { l.rotation.x = (i < 2 ? -1.45 : 1.45) * k; });
        m.g.position.y = groundY(m.g.position.x, m.g.position.z) - 0.22 * k * m.g.scale.y;
        m.parts.head.rotation.x = 0.35 * k;
        m.parts.head.rotation.y = 0;
        m.parts.eyes.forEach((e) => { e.scale.y = 1 - 0.8 * k; });
        m.parts.tail.rotation.z = Math.sin(time * 0.8) * 0.15;
        m.zzz.visible = true;
        m.zzz.position.set(m.g.position.x, 0.95 + ((time * 0.6) % 1) * 0.45, m.g.position.z);
        m.zzz.material.opacity = 0.9 - ((time * 0.6) % 1) * 0.6;
        if (m.sleep <= 0) { m.zzz.visible = false; m.parts.eyes.forEach((e) => { e.scale.y = 1; }); m.parts.head.rotation.x = 0; m.wait = rnd(0.3, 1); }
        return;
      }
      const moving = step(m, dt);
      const pace = Math.min(1, (m.v || 0) / m.speed);
      m.t += dt * (moving ? 4 + 8 * pace : 2);
      const sw = moving ? Math.sin(m.t) * 0.6 * pace : 0;
      m.parts.legs.forEach((l, k) => { l.rotation.x = (k === 0 || k === 3) ? sw : -sw; });
      if (m.kind === 'cat') {
        m.parts.tail.rotation.z = Math.sin(time * 2) * 0.35;
        m.parts.tail.rotation.x = m.sit && !moving ? 0.9 : 0.5;
        m.g.children[0].rotation.x = 0;
        m.parts.head.rotation.y = moving ? 0 : Math.sin(time * 0.5) * 0.5;
        m.g.position.y = groundY(m.g.position.x, m.g.position.z);
      } else {
        m.parts.tail.rotation.z = Math.sin(time * (moving ? 18 : 10)) * 0.6;
        m.parts.head.rotation.x = moving ? 0 : Math.sin(time * 1.3) * 0.1;
        m.g.position.y = groundY(m.g.position.x, m.g.position.z) + (moving ? Math.abs(Math.sin(m.t)) * 0.07 : 0);
      }
    });
    // food pellets: fall, float, get eaten
    for (let i = food.length - 1; i >= 0; i--) {
      const p = food[i];
      if (p.m.position.y > 0.24) { p.vy -= dt * 9; p.m.position.y = Math.max(0.24, p.m.position.y + p.vy * dt); if (p.m.position.y === 0.24) splash(p.m.position.x, p.m.position.z, 0.5); }
      else p.m.position.y = 0.24 + Math.sin(time * 3 + i) * 0.015;
      p.life -= dt;
      if (p.life <= 0) { world.remove(p.m); food.splice(i, 1); }
    }
    fish.forEach((f) => {
      f.a += f.sp * dt;
      let nx = POND.x + Math.cos(f.a) * (POND.rx - 1.6) * f.r, nz = POND.z + Math.sin(f.a) * (POND.rz - 1) * f.r;
      // hungry: swim to the nearest floating pellet and gulp it
      let best = null, bd = 1e9;
      food.forEach((p) => { if (p.m.position.y <= 0.3) { const d = Math.hypot(p.m.position.x - f.g.position.x, p.m.position.z - f.g.position.z); if (d < bd) { bd = d; best = p; } } });
      if (best && !f.jump) {
        const dx = best.m.position.x - f.g.position.x, dz = best.m.position.z - f.g.position.z, d = Math.hypot(dx, dz);
        const sp = Math.min(d, 2.6 * dt);
        f.g.position.x += dx / (d || 1) * sp; f.g.position.z += dz / (d || 1) * sp; f.g.position.y = 0.16;
        f.g.rotation.y = Math.atan2(dx, dz);
        if (d < 0.25) { world.remove(best.m); food.splice(food.indexOf(best), 1); splash(best.m.position.x, best.m.position.z, 0.6); }
        // keep the circle in step so the fish glides back afterwards
        f.a = Math.atan2((f.g.position.z - POND.z) / (POND.rz - 1), (f.g.position.x - POND.x) / (POND.rx - 1.6));
        f.r = Math.min(0.85, Math.max(0.2, Math.hypot((f.g.position.x - POND.x) / (POND.rx - 1.6), (f.g.position.z - POND.z) / (POND.rz - 1))));
        f.g.userData.tail.rotation.y = Math.sin(time * 16 + f.a) * 0.6;
        return;
      }
      if (f.jump > 0) {
        f.jump += dt * 0.9;
        const h = Math.sin(f.jump * Math.PI) * 1.8;
        f.g.position.set(lerp(f.jx, nx, f.jump), 0.12 + h, lerp(f.jz, nz, f.jump));
        f.g.rotation.x = -Math.cos(f.jump * Math.PI) * 1.1;
        if (f.jump >= 1) { f.jump = 0; f.g.rotation.x = 0; ripple.position.set(nx, 0.24, nz); ripple.material.opacity = 0.8; ripple.scale.setScalar(1); }
      } else {
        const dx = nx - f.g.position.x, dz = nz - f.g.position.z;
        f.g.position.set(lerp(f.g.position.x, nx, Math.min(1, dt * 6)), 0.12, lerp(f.g.position.z, nz, Math.min(1, dt * 6)));
        if (dx || dz) f.g.rotation.y = Math.atan2(dx, dz);
        if (Math.random() < dt * 0.05) { f.jump = 0.001; f.jx = nx; f.jz = nz; ripple.position.set(nx, 0.24, nz); ripple.material.opacity = 0.8; ripple.scale.setScalar(1); }
      }
      f.g.userData.tail.rotation.y = Math.sin(time * 8 + f.a) * 0.5;
    });
    river.glints.forEach((gl) => {
      gl.t = (gl.t + gl.sp * dt * 6) % 1;
      const p = river.curve.getPointAt(gl.t), q = river.curve.getTangentAt(gl.t);
      gl.m.position.set(p.x - q.z * gl.side, 0.06, p.z + q.x * gl.side);
      gl.m.rotation.z = -Math.atan2(q.z, q.x);
      gl.m.material.opacity = 0.35 + Math.abs(Math.sin(time * 3 + gl.side * 9)) * 0.5;
    });
    river.ftex.offset.y = (river.ftex.offset.y + dt * 1.6) % 1;
    fountain.jet.scale.y = 1 + Math.sin(time * 6) * 0.08;
    fountain.drops.forEach((d0) => {                  // little arcs from the top bowl down into the basin
      d0.t = (d0.t + dt * 0.7) % 1;
      const r0 = 0.15 + d0.t * 0.95, y0 = 2.25 + d0.t * 0.6 - d0.t * d0.t * 2.35;
      d0.m.position.set(Math.cos(d0.a) * r0, y0, Math.sin(d0.a) * r0);
    });
    river.foam.forEach((f, k) => { const sc = 0.8 + Math.abs(Math.sin(time * 5 + k)) * 0.5; f.scale.setScalar(sc); });
    park.ducks.forEach((d) => {
      d.a += d.sp * dt;
      const x = POND.x + Math.cos(d.a) * (POND.rx - 2), z = POND.z + Math.sin(d.a) * (POND.rz - 1.2);
      d.g.rotation.y = Math.atan2(x - d.g.position.x, z - d.g.position.z) || d.g.rotation.y;
      d.g.position.set(x, 0.18 + Math.sin(time * 2 + d.a) * 0.03, z);
    });
    for (let i = splashes.length - 1; i >= 0; i--) {
      const r = splashes[i]; r.material.opacity -= dt * 1.2; r.scale.multiplyScalar(1 + dt * 2.5 * r.userData.size);
      if (r.material.opacity <= 0) { world.remove(r); r.geometry.dispose(); splashes.splice(i, 1); }
    }
    if (ripple.material.opacity > 0) { ripple.material.opacity = Math.max(0, ripple.material.opacity - dt * 0.8); ripple.scale.multiplyScalar(1 + dt * 1.8); }
    flies.forEach((b) => {
      b.ph += dt;
      b.g.position.set(b.cx + Math.sin(b.ph * 0.4) * 6, 1.6 + Math.sin(b.ph * 1.3) * 0.5, b.cz + Math.cos(b.ph * 0.33) * 4);
      b.g.rotation.y = b.ph * 0.4 + Math.PI / 2;
      const f = Math.sin(b.ph * 18) * 1.1;
      b.g.userData.l.rotation.y = f; b.g.userData.r.rotation.y = -f;
    });
    const fpos = fireflies.geometry.attributes.position;
    for (let i = 0; i < fpos.count; i++) {
      fpos.setY(i, 1.5 + Math.sin(time * 0.8 + i) * 0.8);
      fpos.setX(i, fpos.getX(i) + Math.sin(time * 0.5 + i * 3) * dt * 0.4);
    }
    fpos.needsUpdate = true;
    clouds.forEach((c) => { c.position.x += c.userData.speed * dt; if (c.position.x > 90) c.position.x = -90; });
    if (drive) driveStep(dt);
    lowClouds.rotation.y += dt * 0.012;
    islets.forEach((g0) => { g0.position.y = g0.userData.y0 + Math.sin(time * 0.5 + g0.userData.ph) * 0.3; });
    sparkles.forEach((sp) => { sp.material.opacity = sp.userData.base * Math.max(0, Math.sin(time * 1.8 + sp.userData.ph)); });
    bigStars.forEach((b) => { b.material.opacity = b.userData.base * (0.55 + 0.45 * Math.sin(time * 1.3 + b.userData.ph)); });
    if (nightAmt > 0.6) {                           // a shooting star every so often
      if (shot.t < 0) {
        shot.wait -= dt;
        if (shot.wait <= 0) {
          const a = rnd(0, Math.PI * 2);
          shot.from.set(Math.cos(a) * 180, rnd(110, 170), Math.sin(a) * 180 - 40);
          shot.dir.set(rnd(-1, 1), rnd(-0.55, -0.35), rnd(-0.3, 0.3)).normalize();
          shot.t = 0;
        }
      } else {
        shot.t += dt / 1.1;
        shooting.position.copy(shot.from).addScaledVector(shot.dir, shot.t * 120);
        const s0 = shooting.position.clone().project(camera), sd = shooting.position.clone().addScaledVector(shot.dir, 10).project(camera);
        shooting.material.rotation = Math.atan2(sd.y - s0.y, sd.x - s0.x);
        shooting.material.opacity = Math.sin(Math.min(1, shot.t) * Math.PI) * 0.95;
        if (shot.t >= 1) { shot.t = -1; shot.wait = rnd(7, 16); shooting.material.opacity = 0; }
      }
    } else shooting.material.opacity = 0;
    const flag = hall.userData.flag; flag.rotation.y = Math.sin(time * 3) * 0.25;
    const bell = hall.userData.bell;
    bell.material.emissiveIntensity = urgent ? (0.6 + Math.sin(time * 6) * 0.4) : 0;
    bell.rotation.z = urgent ? Math.sin(time * 7) * 0.35 : 0;
  }

  /* the couple's drive: out of the garage, a loop round the village roads, back home */
  let drive = null;
  function startDrive(done) {
    if (!lot.car || drive) return false;
    const c = lot.car, home = { x: c.position.x, z: c.position.z, ry: c.rotation.y };
    const n0 = graph.nearest(lot.exit.x, lot.exit.z);
    const doorSet = new Set(graph.doorNodes);
    const road = graph.nodes.map((_, i) => i).filter((i) => !doorSet.has(i) && Math.abs(groundY(graph.nodes[i].x, graph.nodes[i].z)) < 0.2);   // down in the village
    const far = road.filter((n) => Math.hypot(graph.nodes[n].x - home.x, graph.nodes[n].z - home.z) > 30);
    const pickN = (a) => a[Math.floor(Math.random() * a.length)];
    const stops = far.length ? [pickN(far), pickN(far)] : [];
    let pts = [{ x: home.x, z: home.z }, { x: lot.exit.x, z: lot.exit.z }], at = n0;
    stops.concat([n0]).forEach((n) => { graph.path(at, n).forEach((q) => pts.push({ x: q.x, z: q.z })); at = n; });
    pts.push({ x: lot.exit.x, z: lot.exit.z }, { x: home.x, z: home.z - Math.cos(home.ry) * 0.01 });
    pts = pts.filter((q, i) => !i || Math.hypot(q.x - pts[i - 1].x, q.z - pts[i - 1].z) > 0.3);
    drive = { pts, i: 1, home, done, v: 0, last: 0 };
    return true;
  }
  function driveStep(dt) {
    const c = lot.car, d = drive, q = d.pts[d.i];
    const reverse = d.i === d.pts.length - 1;                     // backs into the driveway at the end
    const dx = q.x - c.position.x, dz = q.z - c.position.z, l = Math.hypot(dx, dz);
    d.v = Math.min(reverse ? 2 : 6.5, d.v + dt * 3);
    if (l < 0.35) {
      d.i++;
      if (d.i >= d.pts.length) {
        c.position.set(d.home.x, groundY(d.home.x, d.home.z), d.home.z); c.rotation.y = d.home.ry;
        const done = d.done; drive = null; if (done) done(); return;
      }
      return;
    }
    const step = Math.min(l, d.v * dt);
    c.position.x += dx / l * step; c.position.z += dz / l * step; c.position.y = groundY(c.position.x, c.position.z);
    let want = Math.atan2(dx, dz) + (reverse ? Math.PI : 0), cur = c.rotation.y;
    while (want - cur > Math.PI) want -= Math.PI * 2; while (want - cur < -Math.PI) want += Math.PI * 2;
    c.rotation.y = cur + (want - cur) * Math.min(1, dt * 5);
  }

  /* lighting from the clock */
  let nightAmt = 0;
  function applyTime() {
    const d = new Date();
    const h = hourOverride != null ? hourOverride : d.getHours() + d.getMinutes() / 60;
    const s = skyAt(h);
    nightAmt = s.night;
    scene.background = s.sky; scene.fog.color.copy(s.sky);
    skyMat.uniforms.bottom.value.copy(s.sky).lerp(new THREE.Color(0xffffff), 0.18 * (1 - s.night)).lerp(new THREE.Color(0x9d8bd6), 0.4 * s.night);
    skyMat.uniforms.top.value.copy(s.sky).lerp(new THREE.Color(s.night > 0.5 ? 0x262b72 : 0x6fb3e3), 0.5);
    hemi.intensity = s.amb;
    hemi.color.set(s.night > 0.5 ? 0xc8c6ff : 0xffffff);
    hemi.groundColor.set(s.night > 0.5 ? 0x7c84b0 : 0xb7d7a0);
    sun.color.copy(s.sun); sun.intensity = s.power;
    const a = (h - 6) / 12 * Math.PI;                         // sun arc 6:00 → 18:00
    const day = h >= 5.5 && h <= 18.6;
    const ang = day ? a : ((h + 12) % 24 - 6) / 12 * Math.PI; // moon arc at night
    const lx = Math.cos(ang) * 70, ly = Math.max(Math.sin(ang), 0.25) * 70;
    sun.position.set(lx, ly, 40); sun.target.position.set(0, 0, 0);
    sunDisc.position.set(Math.cos(a) * 200, Math.sin(a) * 160, -120); sunDisc.visible = Math.sin(a) > -0.05;
    const ma = ((h + 12) % 24 - 6) / 12 * Math.PI;
    moonDisc.position.set(Math.cos(ma) * 200, Math.sin(ma) * 160, -120); moonDisc.visible = s.night > 0.3 && Math.sin(ma) > 0;
    stars.material.opacity = s.night;
    bigStars.forEach((b) => { b.userData.base = s.night; });
    lowClouds.mat.color.set(s.night > 0.5 ? 0x9a98c8 : 0xffffff);
    sparkles.forEach((sp) => { sp.userData.base = 0.55 + s.night * 0.45; });
    fireflies.material.opacity = s.night * 0.95;
    lampMats.forEach((m) => { m.emissiveIntensity = s.night * 0.95; });
    lampLights.forEach((l) => { l.intensity = s.night * 18; });
    clouds.forEach((c) => { c.userData.mat.color.set(s.night > 0.5 ? 0x7a83a8 : 0xffffff); });
    flies.forEach((b) => { b.g.visible = s.night < 0.5; });
  }

  /* sizing / camera fit */
  let W = 1, H = 1;
  function resize() {
    W = container.clientWidth || window.innerWidth; H = container.clientHeight || window.innerHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
  }
  // the closest view where the whole shore (and the houses' roofs) fits on screen
  const fitCam = new THREE.PerspectiveCamera();
  function fitDistance(polar, target) {
    fitCam.fov = camera.fov; fitCam.aspect = camera.aspect; fitCam.near = 0.5; fitCam.far = 1000; fitCam.updateProjectionMatrix();
    const pts = [];
    for (let i = 0; i < 48; i++) { const t = i / 48 * Math.PI * 2, r = shoreR(t); pts.push(new THREE.Vector3(Math.cos(t) * r, 0, Math.sin(t) * r)); }
    pts.push(new THREE.Vector3(HALL_POS[0], 9 + HILL.h, HALL_POS[1]));
    MOUNTAINS.forEach(([x, z, r, h]) => pts.push(new THREE.Vector3(x, h, z)));
    HOUSE_POS.forEach(([x, z]) => pts.push(new THREE.Vector3(x, 6.5, z)));
    const fits = (d) => {
      fitCam.position.set(0, Math.cos(polar) * d, Math.sin(polar) * d).add(target);
      fitCam.lookAt(target); fitCam.updateMatrixWorld();
      const v = new THREE.Vector3();
      return pts.every((q) => { v.copy(q).project(fitCam); return Math.abs(v.x) < 0.97 && v.y > -0.97 && v.y < 0.86; });   // a little room for the clock at the top
    };
    let lo = 10, hi = 600;
    for (let k = 0; k < 30; k++) { const mid = (lo + hi) / 2; if (fits(mid)) hi = mid; else lo = mid; }
    return hi;
  }
  function homeView() {
    resize();
    const polar = layoutKey === 'port' ? 0.6 : 0.88, t = new THREE.Vector3(0, 0, 1.5);
    const dist = fitDistance(polar, t);
    return { p: new THREE.Vector3(0, Math.cos(polar) * dist, Math.sin(polar) * dist).add(t), t };
  }
  function fitCamera() {
    const v = homeView();
    controls.target.copy(v.t); camera.position.copy(v.p);
    controls.update();
  }

  /* walking into a house: the camera glides to the door, the door swings open and
     the camera goes on through it. Coming out is the same, backwards: from the
     doorway the camera drifts back to where you were while the door closes. */
  const ENTER_MS = 1800, EXIT_MS = 1900;
  let fly = null, flown = false, lastView = null;
  const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);   // smooth in & out
  function doorPose(h) {
    const f = h.userData.face || 0, sx = Math.sin(f), sz = Math.cos(f), dd = h.userData.doorZ - 1.3, y = h.position.y;
    const at = (k, hy) => new THREE.Vector3(h.position.x + sx * (dd + k), y + hy, h.position.z + sz * (dd + k));
    return { near: at(3.2, 1.75), nearT: at(-1, 1.45), inside: at(0.35, 1.6), insideT: at(-2, 1.4) };
  }
  // path through up to 3 points (quadratic-ish blend): start → door → (inside)
  function along(a, b, c, k) {
    if (!c) return a.clone().lerp(b, k);
    const ab = a.clone().lerp(b, k), bc = b.clone().lerp(c, k);
    return ab.lerp(bc, k);
  }
  function enterHouse(id, done, opts) {
    const h = houseObjs.find((o) => o.userData.id === id);
    if (!h) { if (done) done(); return; }
    const d = doorPose(h);
    lastView = { p: camera.position.clone(), t: controls.target.clone() };
    fly = { mode: 'in', start: performance.now(), dur: ENTER_MS, h, done, at: opts && opts.at, atFired: false,
      p: [lastView.p, d.near, d.inside], t: [lastView.t, d.nearT, d.insideT] };
    controls.enabled = false; flown = true;
  }
  function exitHouse(id, done) {
    const h = houseObjs.find((o) => o.userData.id === id);
    if (!h) { backOutside(); if (done) done(); return; }
    const d = doorPose(h), back = lastView || homeView();
    if (h.userData.hinge) h.userData.hinge.rotation.y = -1.7;
    camera.position.copy(d.inside); controls.target.copy(d.insideT); camera.lookAt(controls.target);
    fly = { mode: 'out', start: performance.now(), dur: EXIT_MS, h, done, p: [d.inside, d.near, back.p], t: [d.insideT, d.nearT, back.t] };
    controls.enabled = false; flown = true;
  }
  function flyStep() {
    if (!fly) return;
    const k = Math.min(1, (performance.now() - fly.start) / fly.dur), e = ease(k);
    camera.position.copy(along(fly.p[0], fly.p[1], fly.p[2], e));
    controls.target.copy(along(fly.t[0], fly.t[1], fly.t[2], e));
    camera.lookAt(controls.target);
    const hinge = fly.h.userData.hinge;
    if (hinge) {
      if (fly.mode === 'in') hinge.rotation.y = -1.7 * ease(Math.min(1, Math.max(0, (k - 0.25) / 0.45)));
      else hinge.rotation.y = -1.7 * (1 - ease(Math.min(1, Math.max(0, (k - 0.2) / 0.5))));
    }
    if (fly.at && !fly.atFired && k >= fly.at.k) { fly.atFired = true; fly.at.fn(); }   // e.g. start the fade early
    if (k >= 1) {
      const cb = fly.done, mode = fly.mode; fly = null;
      if (mode === 'out') { flown = false; controls.enabled = true; controls.update(); }
      if (cb) cb();
    }
  }
  function backOutside() {
    if (!flown || (fly && fly.mode === 'out')) return;
    flown = false; fly = null; controls.enabled = true;
    houseObjs.forEach((h) => { if (h.userData.hinge) h.userData.hinge.rotation.y = 0; });
    const v = lastView || homeView();
    camera.position.copy(v.p); controls.target.copy(v.t); controls.update();
  }

  /* tapping a house */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  let down = null;
  renderer.domElement.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
  renderer.domElement.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) { down = null; return; }
    down = null;
    const r = renderer.domElement.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (couple.her && couple.her.g.visible && couple.him.g.visible && ray.intersectObjects([couple.her.g, couple.him.g], true)[0]) {
      if (!(couple.kiss > 0)) {
        couple.kiss = 2.4;
        if (!couple.her.sitting) { couple.her.path = []; couple.her.wait = Math.max(couple.her.wait, 2.8); }
      }
      return;
    }
    const pet = ray.intersectObjects([cat.g, dog.g], true)[0];
    if (pet) {
      const m = cat.g.getObjectById(pet.object.id) ? cat : dog;
      if (!(m.sleep > 0)) { m.sleep = 3; m.sleepIn = 0; m.path = []; }
      return;
    }
    const wet = ray.intersectObject(water)[0];
    if (wet) { feed(wet.point.x - world.position.x, wet.point.z - world.position.z); return; }
    const hit = ray.intersectObjects(houseObjs, true)[0];
    if (!hit) return;
    let o = hit.object; while (o && !o.userData.id) o = o.parent;
    if (o) opts.onPick(o.userData.id);
  });

  /* name-tag anchors (screen px) */
  const tmp = new THREE.Vector3();
  function anchor(id) {
    const o = houseObjs.find((h) => h.userData.id === id);
    if (!o) return null;
    tmp.set(o.position.x, o.position.y + o.userData.top, o.position.z);
    tmp.project(camera);
    return { x: (tmp.x + 1) / 2 * W, y: (1 - tmp.y) / 2 * H, visible: tmp.z < 1 };
  }

  /* loop */
  const clock = new THREE.Clock();
  let running = false, shown = true, lastTimeApply = 0;
  const frameFns = [];
  function loop() {
    if (!running) return;
    if (!shown || document.hidden) { running = false; return; }
    requestAnimationFrame(loop);
    const dt = Math.min(0.12, clock.getDelta()), time = clock.elapsedTime;
    if (time - lastTimeApply > 20) { applyTime(); lastTimeApply = time; }
    animate(dt, time);
    if (fly) flyStep(); else controls.update();
    renderer.render(scene, camera);
    frameFns.forEach((fn) => fn());
  }
  function start() { if (running) return; running = true; clock.getDelta(); requestAnimationFrame(loop); }
  const onVis = () => { if (!document.hidden && shown) { applyTime(); start(); } };
  const onResize = () => { if (shown) resize(); };
  document.addEventListener('visibilitychange', onVis);
  window.addEventListener('resize', onResize);

  applyTime();
  fitCamera();
  start();
  if (/[?&]debug3d/.test(location.search)) window.__v3d = { drive: (f) => startDrive(f), get car() { return lot.car; }, renderer, people, couple, get swing() { return swing; }, graph, cat, dog, routine, realHour, camera, controls, water, food, get urgent() { return urgent; } };

  return {
    setUrgent(n) {
      const was = urgent; urgent = n || 0;
      if (!!was !== !!urgent) people.forEach((p) => { if (!p.love && !p.helper) { p.path = []; p.wait = rnd(0, 1.5); } });
    },
    // { houseId: unfinished count } — busy houses work day and night (lights, smoke), lots of work brings helpers
    setBusy(map) {
      const next = {};
      (opts.houses || []).forEach((h, i) => { if (map && map[h.id] > 0) next[i] = map[h.id]; });
      busy = next;
      manageHelpers();
    },
    anchor,
    onFrame(fn) { frameFns.push(fn); },
    night() { return nightAmt; },
    setTimeMode(mode) { hourOverride = mode === 'day' ? 11 : mode === 'night' ? 22 : null; applyTime(); },
    show(on) { shown = !!on; if (shown) { backOutside(); resize(); applyTime(); start(); } },
    enterHouse,
    exitHouse,
    drive: startDrive,
    resize,
    recenter: fitCamera,
    layout: layoutKey,
    destroy() {
      running = false; shown = false;
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      renderer.dispose();
      renderer.domElement.remove();
    }
  };
}


/* ================================================================
   INSIDE A HOUSE — the room drawn behind a feature page (Work, Money…).
   Each tab of the page looks at a different corner of the same room.
   window.Village3D.room(container, { house, roof, look, corner, timeMode }) → { setCorner, destroy }
   ================================================================ */
const ROOM_W = 9, ROOM_D = 7, ROOM_H = 4.4;
const ROOM_FRONT = 7;      // floor, side walls and ceiling run on past the camera, so it's always inside the room
function tint(hex, k) { return new THREE.Color(hex).lerp(new THREE.Color(0xffffff), k).getHex(); }

function rDesk(g, x, z, ry, top) {
  const d = new THREE.Group(); d.position.set(x, 0, z); d.rotation.y = ry || 0; g.add(d);
  d.add(box(2.2, 0.08, 1, top || 0xd9b48f, 0, 0.78, 0));
  [[-1, -0.42], [1, -0.42], [-1, 0.42], [1, 0.42]].forEach(([a, b]) => d.add(box(0.08, 0.78, 0.08, 0xb08a68, a, 0.39, b)));
  return d;
}
function rChair(g, x, z, ry) {
  const c = new THREE.Group(); c.position.set(x, 0, z); c.rotation.y = ry || 0; g.add(c);
  c.add(box(0.55, 0.08, 0.55, 0xf6a9bd, 0, 0.5, 0));
  c.add(box(0.55, 0.6, 0.08, 0xf6a9bd, 0, 0.82, -0.26));
  [[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]].forEach(([a, b]) => c.add(box(0.06, 0.5, 0.06, 0x8c7a6b, a, 0.25, b)));
  return c;
}
function rLaptop(d, x, z) {
  d.add(box(0.7, 0.04, 0.48, 0xd8d8e0, x, 0.84, z));
  const sc = box(0.7, 0.46, 0.04, 0xd8d8e0, x, 1.07, z - 0.24); sc.rotation.x = -0.25; d.add(sc);
  const glow = box(0.62, 0.38, 0.02, 0, x, 1.07, z - 0.215, new THREE.MeshBasicMaterial({ color: 0xbfe6f2 })); glow.rotation.x = -0.25; d.add(glow);
}
function rShelf(g, x, z, ry, n) {
  const sh = new THREE.Group(); sh.position.set(x, 0, z); sh.rotation.y = ry || 0; g.add(sh);
  sh.add(box(1.8, 2.4, 0.4, 0xc49674, 0, 1.2, 0));
  for (let r = 0; r < 4; r++) {
    sh.add(box(1.7, 0.06, 0.36, 0xe2c9ad, 0, 0.3 + r * 0.55, 0.03));
    for (let k = 0; k < (n || 6); k++) {
      const c = COL.flower[(k + r) % COL.flower.length], h = 0.3 + ((k * 7 + r * 3) % 4) * 0.04;
      sh.add(box(0.16, h, 0.28, c === 0xffffff ? 0xa6d8e8 : c, -0.7 + k * 0.24, 0.33 + r * 0.55 + h / 2, 0.05));
    }
  }
  return sh;
}
function rPlant(g, x, z) {
  g.add(box(0.45, 0.45, 0.45, 0xf9c39c, x, 0.22, z));
  [[0, 0.75, 0, 0.42], [0.18, 1.05, 0.1, 0.3], [-0.15, 1.0, -0.1, 0.32]].forEach(([a, b, c, r], i) => {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 2), mat(COL.leaf[i], {})); m.position.set(x + a, b, z + c); m.castShadow = true; g.add(m);
  });
}
function rWallBoard(g, x, y, z, ry, w, h, color, dots) {
  const b = new THREE.Group(); b.position.set(x, y, z); b.rotation.y = ry; g.add(b);
  b.add(box(w + 0.12, h + 0.12, 0.05, 0xc49674, 0, 0, 0));
  b.add(box(w, h, 0.06, color, 0, 0, 0.01));
  (dots || []).forEach(([a, c, col, sz]) => b.add(box(sz || 0.32, sz || 0.32, 0.03, col, a, c, 0.06)));
  return b;
}
function rPoster(g, x, y, z, ry) {             // little bar chart
  const bars = [[-0.45, 0.25], [-0.15, 0.45], [0.15, 0.35], [0.45, 0.6]];
  const b = rWallBoard(g, x, y, z, ry, 1.4, 1.1, 0xfffaf0);
  bars.forEach(([a, h], i) => b.add(box(0.2, h, 0.03, [0xffb6c1, 0xa6d8e8, 0xdde874, 0xd9c9f0][i], a, -0.4 + h / 2, 0.06)));
  return b;
}
function rCalendar(g, x, y, z, ry, big) {
  const w = big ? 2.2 : 1.1, h = big ? 1.6 : 0.9, b = rWallBoard(g, x, y, z, ry, w, h, 0xffffff);
  b.add(box(w, h * 0.18, 0.04, 0xff9bb0, 0, h * 0.41, 0.05));
  for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) {
    const marked = (r * 7 + c) % 9 === 3;
    b.add(box(w / 9, h / 7, 0.02, marked ? 0xffd6df : 0xf3ece6, -w / 2 + (c + 1) * w / 8, h * 0.2 - r * h / 5.5, 0.06));
  }
  return b;
}
function rClock(g, x, y, z, ry) {
  const c = new THREE.Group(); c.position.set(x, y, z); c.rotation.y = ry; g.add(c);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.06, 20), mat(0xfffaf0)); face.rotation.x = Math.PI / 2; c.add(face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.04, 6, 20), mat(0xf6a9bd)); c.add(rim);
  const hh = box(0.04, 0.18, 0.02, 0x4a3f3f, 0, 0.08, 0.05), mm = box(0.03, 0.27, 0.02, 0x4a3f3f, 0, 0.12, 0.06);
  c.add(hh, mm); c.userData.hands = [hh, mm];
  return c;
}
function rPiggy(d, x, z) {
  const p = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), mat(0xffb6c1)); p.scale.set(1.3, 1, 1); p.position.set(x, 1.1, z); d.add(p);
  d.add(box(0.12, 0.1, 0.1, 0xff9bb0, x + 0.38, 1.1, z));
  [[-0.15, -0.12], [0.15, -0.12], [-0.15, 0.12], [0.15, 0.12]].forEach(([a, b]) => d.add(box(0.07, 0.12, 0.07, 0xff9bb0, x + a, 0.86, z + b)));
  d.add(box(0.12, 0.02, 0.03, 0x8c6a6a, x, 1.38, z));
  for (let k = 0; k < 3; k++) for (let n = 0; n < 2 + k; n++) {
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.03, 12), mat(0xf5d888)); coin.position.set(x - 0.7 + k * 0.22, 0.84 + n * 0.035, z + 0.1); d.add(coin);
  }
}
function rSafe(g, x, z, ry) {
  const s = new THREE.Group(); s.position.set(x, 0, z); s.rotation.y = ry || 0; g.add(s);
  s.add(box(1, 1.1, 0.9, 0x9aa7b8, 0, 0.55, 0));
  const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.05, 14), mat(0xf5d888)); dial.rotation.x = Math.PI / 2; dial.position.set(0.15, 0.6, 0.46); s.add(dial);
  s.add(box(0.06, 0.3, 0.05, 0xf5d888, -0.3, 0.6, 0.46));
  return s;
}
function rJars(g, x, z, ry) {
  const sh = new THREE.Group(); sh.position.set(x, 0, z); sh.rotation.y = ry || 0; g.add(sh);
  sh.add(box(2, 0.08, 0.45, 0xc49674, 0, 1.3, 0)); sh.add(box(2, 0.08, 0.45, 0xc49674, 0, 0.6, 0));
  [-1, 1].forEach((a) => sh.add(box(0.08, 1.4, 0.45, 0xb08a68, a * 0.96, 0.7, 0)));
  [0.6, 1.3].forEach((y, r) => [-0.65, -0.2, 0.25, 0.7].forEach((a, k) => {
    const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.4, 12), new THREE.MeshLambertMaterial({ color: 0xe6f6fb, transparent: true, opacity: 0.7 }));
    jar.position.set(a, y + 0.24, 0); sh.add(jar);
    const fill = 0.08 + ((k + r * 2) % 4) * 0.08;
    const coins = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, fill, 12), mat(0xf5d888)); coins.position.set(a, y + 0.06 + fill / 2, 0); sh.add(coins);
  }));
  return sh;
}
function rCabinet(g, x, z, ry) {
  const c = new THREE.Group(); c.position.set(x, 0, z); c.rotation.y = ry || 0; g.add(c);
  c.add(box(0.9, 1.5, 0.7, 0xa6d8e8, 0, 0.75, 0));
  [0.35, 0.8, 1.25].forEach((y) => { c.add(box(0.8, 0.38, 0.04, 0xbfe6f2, 0, y, 0.36)); c.add(box(0.25, 0.05, 0.05, 0xfffaf0, 0, y + 0.08, 0.39)); });
  return c;
}
function rTripod(g, x, z) {
  [0, 2.1, 4.2].forEach((a) => { const l = box(0.04, 1.4, 0.04, 0x6b5a4e, x + Math.cos(a) * 0.25, 0.65, z + Math.sin(a) * 0.25); l.rotation.set(Math.sin(a) * 0.3, 0, -Math.cos(a) * 0.3); g.add(l); });
  g.add(box(0.4, 0.28, 0.25, 0x4a3f3f, x, 1.45, z));
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.15, 12), mat(0x2e2a36)); lens.rotation.x = Math.PI / 2; lens.position.set(x, 1.45, z + 0.18); g.add(lens);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.05, 6, 24), new THREE.MeshBasicMaterial({ color: 0xfff4cf })); ring.position.set(x - 0.9, 1.7, z - 0.3); g.add(ring);
  g.add(box(0.04, 1.7, 0.04, 0x6b5a4e, x - 0.9, 0.85, z - 0.3));
}
function rKeys(g, x, y, z, ry) {
  const b = rWallBoard(g, x, y, z, ry, 1.2, 0.7, 0xf0dcc4);
  [-0.4, -0.13, 0.13, 0.4].forEach((a, i) => {
    b.add(box(0.05, 0.05, 0.08, 0x8c7a6b, a, 0.18, 0.08));
    b.add(box(0.1, 0.22, 0.03, [0xf5d888, 0xa6d8e8, 0xffb6c1, 0xa3d9bd][i], a, -0.02, 0.08));
  });
}

// furniture + camera spots for each house. corner: [camera x,y,z, look-at x,y,z]
const ROOMS = {
  work: { first: 'list', build(g, R) {
      const d = rDesk(g, -1.6, -2.4); rLaptop(d, 0.2, 0); d.add(box(0.3, 0.2, 0.22, 0xffffff, -0.75, 0.92, 0.1));
      rChair(g, -1.4, -1.55, Math.PI); R.seat = { x: -1.4, z: -1.6, ry: Math.PI, y: 0.54 };
      rWallBoard(g, -4.45, 1.8, 0.4, Math.PI / 2, 2.6, 1.4, 0xffffff,
        [[-0.9, 0.35, 0xfff1a8], [-0.4, 0.4, 0xffb6c1], [0.1, 0.3, 0xa6d8e8], [0.6, 0.38, 0xa3d9bd], [-0.8, -0.2, 0xffb6c1], [-0.2, -0.25, 0xfff1a8], [0.5, -0.2, 0xd9c9f0]]);
      rShelf(g, 4.25, -0.6, -Math.PI / 2); rPoster(g, 4.44, 2.2, 1.6, -Math.PI / 2);
      rTripod(g, 3.4, 4.6); rPlant(g, -3.9, -3);
    },
    corners: {
      list: [0.8, 2.9, 5.8, -1.3, 1.0, -2.2], board: [2.4, 2.7, 4.2, -4.3, 1.6, 0.3], stats: [-2.4, 2.7, 4.2, 4.3, 1.5, 0.3], posts: [-0.6, 2.5, 8.6, 3.2, 1.3, 4.4]
    } },
  money: { first: 'overview', build(g, R) {
      const d = rDesk(g, 0, -2.3, 0, 0xf9c39c); rPiggy(d, 0.4, 0);
      d.add(box(0.35, 0.05, 0.45, 0x8fb3d9, -0.5, 0.84, 0.1));
      rChair(g, 0.2, -1.45, Math.PI); R.seat = { x: 0.2, z: -1.5, ry: Math.PI, y: 0.54 };
      rCalendar(g, -4.44, 1.9, -0.8, Math.PI / 2, true); rPoster(g, -4.44, 1.9, 2.1, Math.PI / 2);
      rJars(g, 4.2, -1.0, -Math.PI / 2); rCabinet(g, 3.6, -3, 0); rSafe(g, 3.6, 2, -Math.PI / 2.5); rPlant(g, -3.9, -3);
      R.windowX = -1.9;
    },
    corners: {
      overview: [0.6, 2.9, 5.8, 0, 1, -2.3], calendar: [2.6, 2.7, 3.6, -4.3, 1.8, -0.8], stats: [2.6, 2.7, 5.4, -4.3, 1.8, 1.8],
      budget: [-2.4, 2.7, 3.6, 4.2, 1.1, -1.2], history: [-1.6, 2.7, 3.8, 3.4, 1, -3], categories: [-1.6, 2.5, 6.2, 3.6, 0.7, 2]
    } },
  calendar: { first: 'main', build(g, R) {
      rCalendar(g, -0.1, 2.05, -3.44, 0, true); rClock(g, -2.6, 2.5, -3.44, 0);
      R.windowX = 2.9;
      const d = rDesk(g, -1.2, -1.6); d.add(box(0.5, 0.06, 0.36, 0xfff1a8, 0.3, 0.84, 0)); d.add(box(0.04, 0.04, 0.3, 0xf19bb0, 0.65, 0.88, 0));
      rChair(g, -1, -0.75, Math.PI); R.seat = { x: -1, z: -0.8, ry: Math.PI, y: 0.54 };
      rShelf(g, 4.25, 0.2, -Math.PI / 2, 5); rPlant(g, 3.8, 2.6);
    },
    corners: { main: [-0.2, 2.9, 5.8, -0.4, 1.5, -2.8] } },
  account: { first: 'main', build(g, R) {
      rSafe(g, 3.7, -2.6, -0.3); rKeys(g, -0.5, 2.0, -3.44, 0);
      R.windowX = 1.7;
      const d = rDesk(g, -1.8, -1.8, 0.2); rLaptop(d, 0, 0);
      rChair(g, -1.75, -0.95, Math.PI + 0.2); R.seat = { x: -1.72, z: -1.0, ry: Math.PI + 0.2, y: 0.54 };
      rShelf(g, -4.25, 0.6, Math.PI / 2, 5); rPlant(g, 3.9, 1.8);
    },
    corners: { main: [-0.2, 2.9, 5.8, -0.9, 1.2, -2.4] } },
  love: { first: 'main', build(g, R) {
      const W = -3.44;                                   // back wall
      // sofa for two
      const so = new THREE.Group(); so.position.set(-0.4, 0, -2.5); g.add(so);
      so.add(box(2.6, 0.45, 0.9, 0xf6a9bd, 0, 0.32, 0)); so.add(box(2.6, 0.75, 0.25, 0xf19bb0, 0, 0.8, -0.35));
      [-1, 1].forEach((sx) => so.add(box(0.25, 0.65, 0.9, 0xf19bb0, sx * 1.3, 0.45, 0)));
      const pillow = heart(0xff7f9e); pillow.scale.setScalar(0.4); pillow.position.set(1.0, 0.75, -0.15); so.add(pillow);
      R.seats = [{ x: -0.85, z: -2.35, ry: 0, y: 0.56 }, { x: 0.05, z: -2.35, ry: 0, y: 0.56 }];
      R.sofa = true; R.couple = true;
      // two badminton rackets, crossed, and the Yonex bag on a hook
      [[-1.95, 2.35, 0.55, 0x2f3d6b], [-1.65, 2.35, -0.55, 0xe8652b]].forEach(([x, y, rz, c]) => {
        const rk = new THREE.Group(); rk.position.set(x, y, W + 0.06); rk.rotation.z = rz; g.add(rk);
        rk.add(box(0.06, 0.34, 0.05, 0xffffff, 0, -0.5, 0));                  // grip
        rk.add(box(0.025, 0.34, 0.025, 0x9aa7b8, 0, -0.17, 0));                // shaft
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.02, 6, 22), mat(c)); ring.scale.y = 1.3; ring.position.y = 0.2; rk.add(ring);
        for (let k = -3; k <= 3; k++) { rk.add(box(0.004, 0.42, 0.004, 0xffffff, k * 0.045, 0.2, 0)); rk.add(box(0.32, 0.004, 0.004, 0xffffff, 0, 0.2 + k * 0.055, 0)); }
      });
      { const cv = document.createElement('canvas'); cv.width = 128; cv.height = 64; const x = cv.getContext('2d');
        x.fillStyle = '#ffffff'; x.fillRect(0, 0, 128, 64);
        x.fillStyle = '#e8652b'; x.fillRect(0, 8, 128, 16);
        x.fillStyle = '#26305a'; x.beginPath(); x.moveTo(0, 64); x.lineTo(0, 24); x.lineTo(14, 24); x.lineTo(30, 64); x.fill();
        x.fillStyle = '#26305a'; x.fillRect(0, 6, 128, 2); x.fillRect(26, 28, 102, 2);
        x.font = 'bold 13px sans-serif'; x.fillText('YONEX', 74, 54);
        x.beginPath(); x.arc(60, 49, 3, 0, 7); x.arc(67, 49, 3, 0, 7); x.lineWidth = 2; x.strokeStyle = '#26305a'; x.stroke();
        const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace;
        const white = mat(0xffffff), front = new THREE.MeshLambertMaterial({ map: tx });
        const bag = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.58, 0.36), [white, white, mat(0xe8652b), white, front, front]);
        bag.position.set(1.25, 1.62, W + 0.22); bag.castShadow = true; g.add(bag);
        [-0.28, 0.28].forEach((dx) => { g.add(box(0.06, 0.5, 0.03, 0xffffff, 1.25 + dx * 0.9, 2.02, W + 0.2)); });
        g.add(box(0.5, 0.06, 0.06, 0x26305a, 1.25, 2.28, W + 0.2));          // handle top
        g.add(box(0.06, 0.06, 0.16, 0x8c7a6b, 1.25, 2.32, W + 0.1)); }      // hook
      // one picture frame — tap it to change the photo
      g.add(box(1.42, 1.08, 0.06, 0xc49674, -0.4, 2.55, W + 0.02));
      g.add(box(1.28, 0.94, 0.07, 0xfffaf0, -0.4, 2.55, W + 0.03));
      const pic = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.78), new THREE.MeshBasicMaterial({ color: 0xffd6df }));
      pic.position.set(-0.4, 2.55, W + 0.075); pic.userData.pick = 'frame'; g.add(pic);
      R.frames = [pic];
      // fairy lights along the wall top
      for (let k = 0; k < 14; k++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), new THREE.MeshBasicMaterial({ color: [0xfff1a8, 0xffb6c1][k % 2] })); b.position.set(-4 + k * 0.62, 3.45 - Math.sin(k * 0.9) * 0.08, -3.38); g.add(b); }
      // a little table beside the sofa with a vase of flowers
      const st = new THREE.Group(); st.position.set(1.65, 0, -2.3); g.add(st);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.06, 18), mat(0xe2c39e)); top.position.y = 0.6; st.add(top);
      st.add(box(0.07, 0.6, 0.07, 0xb08a68, 0, 0.3, 0));
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.04, 14), mat(0xb08a68)); base.position.y = 0.02; st.add(base);
      const vase = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 12), mat(0xc9e3f8)); vase.scale.y = 1.3; vase.position.y = 0.8; st.add(vase);
      [[0, 1.08, 0, 0xffb6c1], [0.08, 1.02, 0.05, 0xfff1a8], [-0.08, 1.04, -0.03, 0xf6a9bd]].forEach(([x, y, z, c]) => {
        st.add(box(0.015, 0.25, 0.015, 0x7cb86f, x * 0.6, 0.95, z * 0.6));
        const f = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), mat(c)); f.position.set(x, y, z); st.add(f);
      });
      // stairs up to the bedroom, along the left wall — tap them
      const stairs = new THREE.Group(); stairs.userData.pick = 'up'; g.add(stairs);
      for (let k = 0; k < 10; k++) {
        stairs.add(box(1.1, (k + 1) * 0.44, 0.5, k % 2 ? 0xe9cfae : 0xe2c39e, -3.88, (k + 1) * 0.22, 2.2 - k * 0.48));
        stairs.add(box(1.12, 0.05, 0.52, 0xf6a9bd, -3.88, (k + 1) * 0.44 + 0.02, 2.2 - k * 0.48));     // a little carpet runner
        if (k % 2 === 0) stairs.add(box(0.06, 0.8, 0.06, 0xffffff, -3.3, (k + 1) * 0.44 + 0.4, 2.2 - k * 0.48));
      }
      { const L = Math.hypot(4.8, 4.4), rail = box(0.08, 0.08, L, 0xffffff, -3.3, 2.2 + 0.8 + 0.22, 0.04); rail.rotation.x = Math.atan2(4.4, 4.8); stairs.add(rail); }
      const up = labelSprite('⬆ bedroom', '#d0668c', 0.34); up.position.set(-3.3, 2.75, 0.2); stairs.add(up);
      // the dining table (bún chả at lunchtime)
      const dt = new THREE.Group(); dt.position.set(1.3, 0, 1.25); g.add(dt);
      dt.add(box(1.5, 0.06, 0.95, 0xe2c39e, 0, 0.76, 0));
      [[-0.65, -0.38], [0.65, -0.38], [-0.65, 0.38], [0.65, 0.38]].forEach(([a, b]) => dt.add(box(0.06, 0.76, 0.06, 0xb08a68, a, 0.38, b)));
      [-1, 1].forEach((sx) => {
        const bowl = (bx, bz, fill) => {
          const bw = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.1, 0.1, 12), mat(0xffffff)); bw.position.set(bx, 0.84, bz); dt.add(bw);
          const f = new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.135, 0.02, 12), mat(fill)); f.position.set(bx, 0.88, bz); dt.add(f);
        };
        bowl(sx * 0.4 - 0.16, -0.18, 0xf6efe0);                               // bún
        bowl(sx * 0.4 + 0.16, -0.18, 0xd98c4a);                               // nước chấm with chả
        [[-0.05, -0.2], [0.05, -0.14], [0.0, -0.24]].forEach(([a, b]) => dt.add(box(0.07, 0.03, 0.05, 0x8a5233, sx * 0.4 + 0.16 + a, 0.9, b)));
        dt.add(box(0.32, 0.012, 0.012, 0xc49674, sx * 0.4, 0.8, 0.05));      // chopsticks
        dt.add(box(0.32, 0.012, 0.012, 0xc49674, sx * 0.4, 0.8, 0.08));
      });
      const herbs = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.03, 12), mat(0xffffff)); herbs.position.set(0, 0.8, -0.05); dt.add(herbs);
      for (let k = 0; k < 7; k++) dt.add(box(0.07, 0.04, 0.05, [0x6fb85a, 0x8fcc7c][k % 2], (k % 3 - 1) * 0.08, 0.83, (Math.floor(k / 3) - 1) * 0.07 - 0.05));
      // side by side behind the table, facing the room
      rChair(g, 1.3 - 0.4, 1.25 - 0.85, 0); rChair(g, 1.3 + 0.4, 1.25 - 0.85, 0);
      R.dining = [{ x: 1.3 - 0.4, z: 1.25 - 0.8, ry: 0, y: 0.54 }, { x: 1.3 + 0.4, z: 1.25 - 0.8, ry: 0, y: 0.54 }];
      R.windowX = 3.1;
      rPlant(g, 3.95, -2.9);
      R.dinner = dt;
      R.defaultDishes = dt.children.slice(5);                 // the bún chả set (after the top + legs)

      // ---- upstairs: the bedroom, a room of its own off to the side ----
      const BX = 14, bed = new THREE.Group(); bed.position.x = BX; g.add(bed);
      const LEN = ROOM_D + ROOM_FRONT, MID = ROOM_FRONT / 2;
      for (let i = 0; i < 12; i++) { const pl = box(ROOM_W / 12, 0.1, LEN, i % 2 ? 0xf3dcc8 : 0xeed2bd, -ROOM_W / 2 + (i + 0.5) * ROOM_W / 12, -0.05, MID); pl.castShadow = false; bed.add(pl); }
      const bwall = box(ROOM_W, ROOM_H, 0.12, R.wall, 0, ROOM_H / 2, -ROOM_D / 2); bwall.castShadow = false; bed.add(bwall);
      [-1, 1].forEach((sx) => { const w = box(0.12, ROOM_H, LEN, R.wall2, sx * ROOM_W / 2, ROOM_H / 2, MID); w.castShadow = false; bed.add(w); });
      const bc = box(ROOM_W, 0.12, LEN, 0, 0, ROOM_H + 0.06, MID, new THREE.MeshLambertMaterial({ color: R.ceil, emissive: R.ceil, emissiveIntensity: 0.3 })); bc.castShadow = false; bed.add(bc);
      // the window, with the real sky
      bed.add(box(1.9, 1.5, 0.08, 0xffffff, 2.9, 2.3, -ROOM_D / 2 + 0.06)); bed.add(box(1.7, 1.3, 0.09, 0, 2.9, 2.3, -ROOM_D / 2 + 0.07, R.skyMat));
      [-1, 1].forEach((sx) => bed.add(box(0.26, 1.8, 0.05, 0xffc4cf, 2.9 + sx * 1.08, 2.25, -ROOM_D / 2 + 0.2)));
      // the bed: rounded frame, a soft pink headboard, white sheets, a pink duvet, two pillows
      bed.add(box(2.8, 0.4, 3.4, 0xf2e6da, 0, 0.28, -1.85));
      bed.add(box(2.6, 0.22, 3.2, 0xffffff, 0, 0.58, -1.85));
      bed.add(box(3.0, 1.5, 0.22, 0xf6c1cf, 0, 1.0, -3.48));
      bed.add(box(2.7, 0.18, 0.1, 0xf9d3de, 0, 1.6, -3.36));
      [-0.62, 0.62].forEach((x) => bed.add(box(1.0, 0.2, 0.55, 0xfffaf5, x, 0.8, -3.0)));
      bed.add(box(2.72, 0.12, 2.35, 0xf9c3d3, 0, 0.98, -1.25));             // the duvet (over them at night)
      bed.add(box(2.74, 0.14, 0.32, 0xffffff, 0, 0.99, -2.3));              // the folded sheet edge
      [-1.4, 1.4].forEach((x) => bed.add(box(0.12, 0.5, 2.3, 0xf9c3d3, x, 0.75, -1.25)));
      const hc = heart(0xff8fb1); hc.scale.setScalar(0.32); hc.position.set(0, 1.25, -3.3); bed.add(hc);
      // bedside tables: a lamp on the left, the album on the right
      [-1.95, 1.95].forEach((x) => { bed.add(box(0.75, 0.62, 0.6, 0xe2c39e, x, 0.31, -3.05)); bed.add(box(0.79, 0.05, 0.64, 0xf0dcc4, x, 0.64, -3.05)); bed.add(box(0.5, 0.05, 0.02, 0xc49674, x, 0.42, -2.74)); });
      const lb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), mat(0xf6c1cf)); lb.position.set(-1.95, 0.76, -3.05); bed.add(lb);
      const lsh = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 0.26, 18, 1, true), new THREE.MeshLambertMaterial({ color: 0xfff1d6, emissive: 0xffd27a, emissiveIntensity: 0, side: THREE.DoubleSide }));
      lsh.position.set(-1.95, 1.02, -3.05); bed.add(lsh); R.bedLamp = lsh;
      const album = new THREE.Group(); album.position.set(1.95, 0.7, -3.0); album.rotation.y = -0.3; album.userData.pick = 'album'; bed.add(album);
      album.add(box(0.5, 0.08, 0.38, 0xc9e3f8, 0, 0, 0));
      album.add(box(0.04, 0.085, 0.38, 0xa9cbe8, -0.25, 0, 0));
      const ah = heart(0xf48fb1); ah.scale.setScalar(0.15); ah.rotation.x = -Math.PI / 2; ah.position.set(0.02, 0.045, 0.06); album.add(ah);
      R.album = album;
      // the top of the stairs, back down — tap it
      const down = new THREE.Group(); down.userData.pick = 'down'; bed.add(down);
      down.add(box(1.3, 0.04, 2.6, 0xb89c86, -3.75, 0.005, 1.2));
      [0.1, 0.6, 1.1, 1.6, 2.1].forEach((dz, k) => down.add(box(1.2, 0.03, 0.42, 0x9c8270, -3.75, 0.02, 0.05 + dz - k * 0.02)));
      for (let k = 0; k < 6; k++) down.add(box(0.06, 0.85, 0.06, 0xffffff, -3.05, 0.42, -0.05 + k * 0.5));
      down.add(box(0.08, 0.08, 2.6, 0xffffff, -3.05, 0.86, 1.2));
      const dn = labelSprite('⬇ living room', '#d0668c', 0.34); dn.position.set(-3.0, 1.35, 0.6); down.add(dn);
      // a rug, a plant, fairy lights
      const brug = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.03, 32), mat(0xd9e9f7)); brug.scale.set(1.8, 1, 1.1); brug.position.set(0.6, 0.02, 1.0); bed.add(brug);
      rPlant(bed, 3.95, 0.4);
      for (let k = 0; k < 14; k++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), new THREE.MeshBasicMaterial({ color: [0xfff1a8, 0xffb6c1][k % 2] })); b.position.set(-4 + k * 0.62, 3.45 - Math.sin(k * 0.9) * 0.08, -3.38); bed.add(b); }
      R.bedSpots = [{ x: BX - 0.45, z: -1.42 }, { x: BX + 0.45, z: -1.42 }];
    },
    corners: { main: [0.2, 2.8, 6.6, 0.0, 1.3, -1.9], bed: [14.2, 2.6, 3.4, 14.0, 0.9, -2.3], meal: [1.0, 2.6, 5.6, 1.2, 1.0, -0.6], album: [15.75, 1.75, -1.85, 15.9, 0.55, -3.05] } },
  game: { first: 'main', build(g, R) {
      // TV on a low cabinet, a console, a bean bag to sit on, posters
      g.add(box(2.6, 0.6, 0.6, 0xc49674, 0, 0.3, -3.05));
      g.add(box(2.2, 1.3, 0.1, 0x2e2a36, 0, 1.35, -3.15));
      const scr = box(2.05, 1.15, 0.02, 0, 0, 1.35, -3.09, new THREE.MeshBasicMaterial({ color: 0xa6d8e8 })); g.add(scr);
      [[-0.6, 1.55, 0xffb6c1], [0.1, 1.2, 0xf5d888], [0.6, 1.6, 0xa3d9bd]].forEach(([x, y, c]) => g.add(box(0.3, 0.3, 0.01, 0, x, y, -3.075, new THREE.MeshBasicMaterial({ color: c }))));
      g.add(box(0.5, 0.12, 0.35, 0xffffff, 0.8, 0.66, -2.95));
      const bag = new THREE.Mesh(new THREE.SphereGeometry(0.7, 14, 10), mat(0xf6a9bd)); bag.scale.set(1.1, 0.6, 1); bag.position.set(0.2, 0.4, -0.4); bag.castShadow = true; g.add(bag);
      R.seats = [{ x: 0.2, z: -0.45, ry: Math.PI, y: 0.78 }];
      R.gamer = true;
      rPoster(g, -4.44, 2.2, -0.8, Math.PI / 2); rWallBoard(g, 4.44, 2.2, -0.4, -Math.PI / 2, 1.2, 1.5, 0xd9c9f0, [[0, 0.3, 0xffb6c1, 0.5], [0, -0.35, 0xf5d888, 0.4]]);
      rShelf(g, -4.25, 1.8, Math.PI / 2, 5); rPlant(g, 3.9, -3);
      R.windowX = 2.9;
    }, corners: { main: [0.4, 2.8, 5.6, 0, 1.1, -2.6] } },
  language: { first: 'main', build(g, R) {
      // a study desk with open books, flash cards on the wall, a little globe
      const d = rDesk(g, -1.2, -2.3, 0, 0xf6c1cf);
      d.add(box(0.5, 0.05, 0.36, 0xffffff, -0.2, 0.83, 0)); d.add(box(0.5, 0.05, 0.36, 0xfff6e8, 0.32, 0.83, 0));
      d.add(box(0.02, 0.06, 0.36, 0xc49674, 0.06, 0.84, 0));
      [0xa6d8e8, 0xffb6c1, 0xf5d888].forEach((c, k) => d.add(box(0.4, 0.07, 0.28, c, 0.85, 0.83 + k * 0.075, -0.05)));
      const globe = new THREE.Mesh(new THREE.SphereGeometry(0.18, 20, 14), mat(0x9fcfe4)); globe.position.set(-0.8, 1.08, 0); d.add(globe);
      d.add(box(0.05, 0.25, 0.05, 0xc49674, -0.8, 0.9, 0));
      rChair(g, -1.0, -1.45, Math.PI); R.seat = { x: -1.0, z: -1.5, ry: Math.PI, y: 0.54 };
      rWallBoard(g, -4.45, 1.9, 0.2, Math.PI / 2, 2.4, 1.4, 0xffffff,
        [[-0.75, 0.35, 0xffb6c1], [-0.25, 0.35, 0xfff1a8], [0.25, 0.35, 0xa6d8e8], [0.75, 0.35, 0xa3d9bd], [-0.5, -0.25, 0xd9c9f0], [0, -0.25, 0xffb6c1], [0.5, -0.25, 0xfff1a8]]);
      rShelf(g, 4.25, -0.4, -Math.PI / 2, 5); rPoster(g, 4.44, 2.3, 1.8, -Math.PI / 2); rPlant(g, 3.9, -3);
      R.windowX = 2.2;
    }, corners: { main: [-0.3, 2.9, 5.8, -0.9, 1.1, -2.3] } },
  skills: { first: 'main', build(g, R) {
      // a workbench: laptop, a sketchbook, a toolbox, an easel, a progress chart
      const d = rDesk(g, -0.6, -2.3, 0, 0xf5d888); rLaptop(d, -0.3, 0);
      d.add(box(0.45, 0.04, 0.32, 0xffffff, 0.45, 0.83, 0.05)); d.add(box(0.02, 0.02, 0.3, 0xe8799f, 0.62, 0.86, 0.05));
      const tb = box(0.6, 0.3, 0.32, 0xe56b6b, 3.4, 0.15, -2.6); g.add(tb); g.add(box(0.3, 0.05, 0.05, 0x3a3540, 3.4, 0.35, -2.6));
      rChair(g, -0.4, -1.45, Math.PI); R.seat = { x: -0.4, z: -1.5, ry: Math.PI, y: 0.54 };
      const easel = new THREE.Group(); easel.position.set(-3.3, 0, -1.6); easel.rotation.y = 0.5; g.add(easel);
      [-0.4, 0.4].forEach((x) => { const l = box(0.07, 1.9, 0.07, 0xc49674, x, 0.95, 0); l.rotation.z = -x * 0.15; easel.add(l); });
      easel.add(box(1.0, 0.8, 0.05, 0xffffff, 0, 1.35, 0.06)); easel.add(box(0.5, 0.3, 0.06, 0xa6d8e8, -0.15, 1.45, 0.08)); easel.add(box(0.25, 0.25, 0.06, 0xffb6c1, 0.25, 1.2, 0.08));
      rWallBoard(g, 4.44, 2.0, -0.5, -Math.PI / 2, 1.6, 1.2, 0xffffff, [[-0.5, -0.25, 0xa3d9bd, 0.3], [-0.15, -0.1, 0xf5d888, 0.3], [0.2, 0.05, 0xffb6c1, 0.3], [0.55, 0.2, 0xa6d8e8, 0.3]]);
      rShelf(g, -4.25, 1.4, Math.PI / 2, 5); rPlant(g, 3.9, 2.4);
      R.windowX = 2.4;
    }, corners: { main: [0, 2.9, 5.8, -0.3, 1.1, -2.2] } },
  notes: { first: 'main', build(g, R) {
      // a writing desk, a cork board covered in sticky notes, piles of notebooks
      const d = rDesk(g, -0.8, -2.3, 0, 0xf5d888); rLaptop(d, 0.4, 0);
      [0xffb6c1, 0xa6d8e8, 0xfff1a8].forEach((c, k) => d.add(box(0.36, 0.05, 0.48, c, -0.5, 0.83 + k * 0.055, 0.02 + k * 0.03)));
      rChair(g, -0.6, -1.45, Math.PI); R.seat = { x: -0.6, z: -1.5, ry: Math.PI, y: 0.54 };
      rWallBoard(g, -0.6, 2.2, -3.44, 0, 2.6, 1.3, 0xd9b48f,
        [[-1.0, 0.35, 0xfff1a8], [-0.55, 0.3, 0xffb6c1], [-0.1, 0.38, 0xa6d8e8], [0.35, 0.32, 0xa3d9bd], [0.85, 0.36, 0xfff1a8], [-0.8, -0.25, 0xd9c9f0], [-0.3, -0.22, 0xfff1a8], [0.2, -0.28, 0xffb6c1], [0.7, -0.24, 0xa6d8e8]]);
      rShelf(g, 4.25, -0.4, -Math.PI / 2, 5); rPlant(g, -3.9, -3);
      R.windowX = 2.8;
    }, corners: { main: [-0.2, 2.9, 5.8, -0.6, 1.3, -2.4] } },
  goals: { first: 'main', build(g, R) {
      // a vision board with pictures + a big star, a desk, a trophy
      rWallBoard(g, 0, 2.15, -3.44, 0, 3.0, 1.6, 0xffffff,
        [[-1.1, 0.35, 0xa6d8e8, 0.45], [-0.45, 0.4, 0xffb6c1, 0.4], [0.55, 0.38, 0xa3d9bd, 0.45], [1.15, 0.3, 0xf5d888, 0.4], [-0.9, -0.35, 0xd9c9f0, 0.45], [0.95, -0.35, 0xffb6c1, 0.4]]);
      const star = heart(0xffd36b); star.scale.setScalar(0.5); star.position.set(0, 2.1, -3.3); g.add(star);
      const d = rDesk(g, -1.8, -1.9, 0.25, 0xd9c9f0); rLaptop(d, 0, 0);
      rChair(g, -1.7, -1.05, Math.PI + 0.25); R.seat = { x: -1.68, z: -1.1, ry: Math.PI + 0.25, y: 0.54 };
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.12, 0.36, 18), mat(0xf5c84c)); cup.position.set(3.7, 1.28, -2.7); g.add(cup);
      g.add(box(0.5, 0.9, 0.5, 0xf0dcc4, 3.7, 0.45, -2.7)); g.add(box(0.2, 0.12, 0.2, 0xf5c84c, 3.7, 1.0, -2.7));
      rPlant(g, -3.9, -3);
      R.windowX = 3.2;
    }, corners: { main: [0.2, 2.8, 5.8, -0.2, 1.4, -2.4] } },
  health: { first: 'main', build(g, R) {
      // a yoga mat, dumbbells, a little fridge and a bowl of fruit
      const matM = box(1.0, 0.04, 2.0, 0xa3d9bd, -1.6, 0.03, -0.6); matM.castShadow = false; g.add(matM);
      [[-0.7, -1.4], [-0.45, -1.4]].forEach(([x, z]) => { g.add(box(0.36, 0.05, 0.05, 0x8a8f99, x, 0.12, z)); [-0.16, 0.16].forEach((dx) => { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.08, 16), mat(0xf19bb0)); w.rotation.z = Math.PI / 2; w.position.set(x + dx, 0.12, z); g.add(w); }); });
      g.add(box(0.9, 1.6, 0.8, 0xffffff, 3.6, 0.8, -2.9)); g.add(box(0.05, 0.4, 0.05, 0xc0c6ce, 3.2, 1.0, -2.48)); g.add(box(0.9, 0.04, 0.82, 0xe9e4de, 3.6, 1.1, -2.9));
      const t = rDesk(g, 1.2, -2.4, 0, 0xffd6c9);
      const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.25, 20, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), mat(0xffffff)); bowl.position.set(0, 1.04, 0); t.add(bowl);
      [[0xff7f7f, -0.08, 0], [0xffd36b, 0.08, 0.04], [0x9ad690, 0, -0.08]].forEach(([c, x, z]) => { const f = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 10), mat(c)); f.position.set(x, 1.04, z); t.add(f); });
      const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.3, 14), mat(0x9fcfe4)); bottle.position.set(0.5, 0.98, 0.1); t.add(bottle);
      rChair(g, 1.4, -1.55, Math.PI); R.seat = { x: 1.4, z: -1.6, ry: Math.PI, y: 0.54 };
      rPoster(g, -4.44, 2.2, -0.6, Math.PI / 2); rPlant(g, -3.9, -3);
      R.windowX = -0.6;
    }, corners: { main: [0.4, 2.8, 5.8, 0.2, 1.0, -2.0] } },
  law: { first: 'main', build(g, R) {
      // tall bookshelves of law books, a desk with the scales of justice
      rShelf(g, -4.25, -0.8, Math.PI / 2, 5); rShelf(g, -4.25, 1.4, Math.PI / 2, 5); rShelf(g, 4.25, -0.4, -Math.PI / 2, 5);
      const d = rDesk(g, 0.2, -2.3, 0, 0xc49674); rLaptop(d, -0.4, 0);
      const sc = new THREE.Group(); sc.position.set(0.55, 0.83, 0); d.add(sc);
      sc.add(box(0.04, 0.5, 0.04, 0xd9b44a, 0, 0.25, 0)); sc.add(box(0.5, 0.03, 0.03, 0xd9b44a, 0, 0.48, 0));
      [-0.24, 0.24].forEach((x) => { const pan = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.06, 0.03, 16), mat(0xd9b44a)); pan.position.set(x, 0.3, 0); sc.add(pan); sc.add(box(0.01, 0.18, 0.01, 0xd9b44a, x, 0.39, 0)); });
      rChair(g, 0.4, -1.45, Math.PI); R.seat = { x: 0.4, z: -1.5, ry: Math.PI, y: 0.54 };
      rPlant(g, 3.9, 2.4);
      R.windowX = 2.4;
    }, corners: { main: [0.2, 2.9, 5.8, 0.1, 1.2, -2.3] } },
  other: { first: 'main', build(g, R) {
      const d = rDesk(g, -1, -2.3); rLaptop(d, 0, 0); rChair(g, -0.8, -1.45, Math.PI); R.seat = { x: -0.8, z: -1.5, ry: Math.PI, y: 0.54 };
      rShelf(g, 4.25, -0.6, -Math.PI / 2); rPlant(g, -3.9, -3);
    }, corners: { main: [0, 2.9, 5.8, 0, 1.1, -2] } }
};

function createRoom(container, opts) {
  opts = opts || {};
  const spec = ROOMS[opts.house] || (opts.kind === 'game' ? ROOMS.game : ROOMS.other);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  const wall = tint(opts.roof || 0xf6a9bd, 0.72), wall2 = tint(opts.roof || 0xf6a9bd, 0.55);
  scene.background = new THREE.Color(tint(opts.roof || 0xf6a9bd, 0.82));

  const g = new THREE.Group(); scene.add(g);
  // floor planks, walls, skirting
  const LEN = ROOM_D + ROOM_FRONT, MID = (ROOM_FRONT) / 2;       // back wall stays at z = -ROOM_D/2
  for (let i = 0; i < 12; i++) { const pl = box(ROOM_W / 12, 0.1, LEN, i % 2 ? 0xe9cfae : 0xe2c39e, -ROOM_W / 2 + (i + 0.5) * ROOM_W / 12, -0.05, MID); pl.castShadow = false; g.add(pl); }
  const back = box(ROOM_W, ROOM_H, 0.12, wall, 0, ROOM_H / 2, -ROOM_D / 2); back.castShadow = false; g.add(back);
  [-1, 1].forEach((sx) => { const w = box(0.12, ROOM_H, LEN, wall2, sx * ROOM_W / 2, ROOM_H / 2, MID); w.castShadow = false; w.receiveShadow = true; g.add(w); });
  // ceiling: soft and light (it only gets light from below, so it glows a little instead of going dark)
  const ceilCol = tint(opts.roof || 0xf6a9bd, 0.9);
  const ceil = box(ROOM_W, 0.12, LEN, 0, 0, ROOM_H + 0.06, MID, new THREE.MeshLambertMaterial({ color: ceilCol, emissive: ceilCol, emissiveIntensity: 0.3 }));
  ceil.castShadow = false; g.add(ceil);
  // cornice + skirting (trim only: they don't throw shadows, which drew thin lines across the room)
  const trim = (m) => { m.castShadow = false; g.add(m); };
  trim(box(ROOM_W, 0.16, 0.12, 0xffffff, 0, ROOM_H - 0.08, -ROOM_D / 2 + 0.1));
  [-1, 1].forEach((sx) => trim(box(0.12, 0.16, LEN, 0xffffff, sx * (ROOM_W / 2 - 0.1), ROOM_H - 0.08, MID)));
  trim(box(ROOM_W, 0.14, 0.04, 0xffffff, 0, 0.07, -ROOM_D / 2 + 0.08));
  [-1, 1].forEach((sx) => trim(box(0.04, 0.14, LEN, 0xffffff, sx * (ROOM_W / 2 - 0.08), 0.07, MID)));
  const skyMat = new THREE.MeshBasicMaterial({ color: 0xbfe3f5 });
  // rug + ceiling lamp
  const rug = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.03, 32), mat(0xf6d4dc)); rug.scale.set(2, 1, 1.3); rug.position.set(0.3, 0.02, 0.6); rug.receiveShadow = true; g.add(rug);
  const cord = box(0.03, 0.55, 0.03, 0x8c7a6b, 0.3, ROOM_H - 0.27, 0.3); cord.castShadow = false; g.add(cord);
  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.4, 12, 1, true), new THREE.MeshLambertMaterial({ color: 0xfff1a8, emissive: 0xffd27a, emissiveIntensity: 0, side: THREE.DoubleSide }));
  shade.position.set(0.3, ROOM_H - 0.72, 0.3); shade.castShadow = false; g.add(shade);

  const R = { wall, wall2, ceil: ceilCol, skyMat };
  spec.build(g, R);
  // window with the real sky; curtains hang from a rod, tied back at the sides
  { const wx = R.windowX != null ? R.windowX : 2.2, wy = 2.1, z = -ROOM_D / 2;
    g.add(box(1.9, 1.5, 0.08, 0xffffff, wx, wy, z + 0.06));
    g.add(box(1.7, 1.3, 0.09, 0, wx, wy, z + 0.07, skyMat));
    g.add(box(0.05, 1.3, 0.1, 0xffffff, wx, wy, z + 0.1)); g.add(box(1.7, 0.05, 0.1, 0xffffff, wx, wy, z + 0.1));
    const rod = box(2.5, 0.05, 0.05, 0xc49674, wx, wy + 0.9, z + 0.2); rod.castShadow = false; g.add(rod);
    [-1, 1].forEach((sx) => {
      const c = box(0.24, 1.75, 0.05, 0xffc4cf, wx + sx * 1.08, wy + 0.0, z + 0.2); c.castShadow = false; g.add(c);
      const tie = box(0.28, 0.06, 0.07, 0xf6a9bd, wx + sx * 1.08, wy - 0.25, z + 0.22); tie.castShadow = false; g.add(tie);
    }); }
  let clockHands = []; g.traverse((o) => { if (o.userData.hands) clockHands = o.userData.hands; });
  // the resident, at the desk
  const seats = R.seats || (R.seat ? [R.seat] : []);
  const looks = opts.looks || (opts.look ? [opts.look] : []);
  const sitters = seats.slice(0, looks.length).map((st, k) => {
    const w = makePerson(looks[k]); g.add(w.g);
    w.g.position.set(st.x, st.y - HIP, st.z); w.g.rotation.y = st.ry;
    w.parts.legL.rotation.x = w.parts.legR.rotation.x = -1.45;
    return w;
  });
  const who = R.sofa || R.gamer ? null : sitters[0] || null;
  let coupleMode = '';
  // the Love couple: their names float over their heads; tap = a kiss on the cheek
  const names = [];
  if (R.couple) sitters.forEach((w, k) => {
    w.g.userData.pick = 'couple';
    const n = labelSprite(k === 0 ? 'namu' : 'hunf', k === 0 ? '#e8799f' : '#5f8fc4', 0.3); g.add(n); names.push(n);
  });
  const kissHeart = (() => { const hm = heart(0xff7f9e); hm.scale.setScalar(0.16); hm.visible = false; g.add(hm); return hm; })();
  let kissT = -1;
  // ground floor or the bedroom (the album lives upstairs)
  let floor = '', floorPicked = false, zoomed = false;
  const floorCorner = () => (floor === 'bed' ? 'bed' : (coupleMode === 'lunch' || coupleMode === 'dinner') ? 'meal' : spec.corners[opts.corner] ? opts.corner : spec.first);
  function goFloor(f, jump) { floor = f; setCorner(floorCorner(), jump); }
  const zzz = textSprite('z Z z', '#7a6a9a', 0.9, 0.45); g.add(zzz);
  // tapping things in the room: the album, the frame, the stairs, the two of them
  if (opts.onPick) {
    const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); let down = null, hold = 0, held = false, clickWait = 0;
    const el = renderer.domElement;
    const pickAt = (cx, cy) => {
      const r = el.getBoundingClientRect();
      ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(g.children, true).find((h) => { if (h.object.isSprite) return false; let o = h.object; while (o && !o.userData.pick) o = o.parent; return !!o; });
      if (!hit) return '';
      let o = hit.object; while (o && !o.userData.pick) o = o.parent;
      return o.userData.pick;
    };
    const menu = () => {                              // long press / double click on the couple → the chat bubble
      const v = new THREE.Vector3(); names[0].getWorldPosition(v); const v2 = new THREE.Vector3(); names[1].getWorldPosition(v2);
      v.add(v2).multiplyScalar(0.5).project(camera);
      const r = el.getBoundingClientRect();
      opts.onPick('couple-menu', { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height });
    };
    const act = (what) => {
      if (what === 'couple') { if (kissT < 0) kissT = 0; return; }
      if (what === 'up' || what === 'down') { floorPicked = true; goFloor(what === 'up' ? 'bed' : 'main'); return; }
      if (what === 'album') {                         // zoom in on it, then the book opens
        zoomed = true; setCorner('album');
        setTimeout(() => opts.onPick('album'), 750); return;
      }
      opts.onPick(what);
    };
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('pointerdown', (e) => {
      down = { x: e.clientX, y: e.clientY, type: e.pointerType }; held = false;
      clearTimeout(hold);
      if (e.pointerType !== 'mouse' && R.couple && pickAt(e.clientX, e.clientY) === 'couple') hold = setTimeout(() => { held = true; menu(); }, 520);
    });
    el.addEventListener('pointermove', (e) => { if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) clearTimeout(hold); });
    el.addEventListener('pointerup', (e) => {
      clearTimeout(hold);
      if (!down || held || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) { down = null; return; }
      const type = down.type; down = null;
      const what = pickAt(e.clientX, e.clientY);
      if (!what) return;
      if (what === 'couple' && type === 'mouse') { clearTimeout(clickWait); clickWait = setTimeout(() => act('couple'), 260); return; }   // wait: it may be a double click
      act(what);
    });
    el.addEventListener('dblclick', (e) => {
      if (!R.couple || pickAt(e.clientX, e.clientY) !== 'couple') return;
      clearTimeout(clickWait); menu();
    });
  }
  const gamer = R.gamer ? sitters[0] : null;

  const hemi = new THREE.HemisphereLight(0xffffff, 0xe2c39e, 1.4); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff4e6, 1.6); sun.position.set(2.5, ROOM_H - 0.3, 8); sun.target.position.set(0, 0, -2); scene.add(sun.target); sun.castShadow = true;   // from the front, under the ceiling
  sun.shadow.mapSize.set(1024, 1024); Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 0.5, far: 25 }); sun.shadow.bias = -0.001; scene.add(sun);
  const lamp = new THREE.PointLight(0xffd9a0, 0, 12, 1.3); lamp.position.set(0.3, ROOM_H - 1.1, 0.3); scene.add(lamp);
  function applyTime() {
    const d = new Date();
    const h = opts.timeMode === 'day' ? 11 : opts.timeMode === 'night' ? 22 : d.getHours() + d.getMinutes() / 60;
    const s = skyAt(h);
    skyMat.color.copy(s.sky);
    hemi.intensity = 1.5 - s.night * 0.7; sun.intensity = 1.6 * (1 - s.night) + 0.2;
    lamp.intensity = s.night * 8; shade.material.emissiveIntensity = s.night;
    if (clockHands.length) { clockHands[0].rotation.z = -(d.getHours() % 12) / 12 * Math.PI * 2; clockHands[1].rotation.z = -d.getMinutes() / 60 * Math.PI * 2; }
  }

  // camera moves between corners
  const camP = new THREE.Vector3(), camT = new THREE.Vector3(), goP = new THREE.Vector3(), goT = new THREE.Vector3();
  function cornerOf(name) { return spec.corners[name] || spec.corners[spec.first]; }
  function setCorner(name, jump) {
    const c = cornerOf(name);
    goP.set(c[0], c[1], c[2]); goT.set(c[3], c[4], c[5]);
    if (jump) { camP.copy(goP); camT.copy(goT); }
  }
  setCorner(opts.corner, true);
  if (opts.walkIn) {                                  // just came through the door: start at the front, drift in
    camP.set(0, 1.7, ROOM_D / 2 + 3.2); camT.set(0, 1.4, -ROOM_D / 2);
  }
  function resize() {
    const W = container.clientWidth || innerWidth, H = container.clientHeight || innerHeight;
    renderer.setSize(W, H, false); camera.aspect = W / H;
    camera.fov = W / H < 0.9 ? 64 : 50;            // phones: a bit wider so the room still shows
    if (W / H < 0.9) camera.setViewOffset(W, H, 0, -H * 0.2, W, H); else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  }
  resize();
  const onResize = () => resize();
  window.addEventListener('resize', onResize);

  const clock = new THREE.Clock(), rugV = new THREE.Vector3();
  let running = true, last = 0;
  function loop() {
    if (!running) return;
    requestAnimationFrame(loop);
    if (document.hidden) return;
    const dt = Math.min(0.1, clock.getDelta()), t = clock.elapsedTime;
    camP.lerp(goP, Math.min(1, dt * 1.6)); camT.lerp(goT, Math.min(1, dt * 1.6));
    camera.position.copy(camP); camera.lookAt(camT);
    if (R.couple) {                                   // by the real clock: sofa · sleeping heads together · bún chả
      const d = new Date(), hr = d.getHours() + d.getMinutes() / 60;
      const want = hr >= 22 || hr < 6.5 ? 'sleep' : (hr >= 11.5 && hr < 13 ? 'lunch' : hr >= 18.5 && hr < 19.75 ? 'dinner' : 'sofa');
      if (want !== coupleMode) {
        coupleMode = want;
        if (!floorPicked && !zoomed) goFloor(want === 'sleep' ? 'bed' : 'main', !floor && !opts.walkIn);
        const ss = want === 'lunch' || want === 'dinner' ? R.dining : R.seats;
        sitters.forEach((w, k) => {
          if (want === 'sleep') {                    // tucked in, side by side, heads on the pillows
            const b = R.bedSpots[k];
            w.g.position.set(b.x, 0.9, b.z); w.g.rotation.set(-Math.PI / 2, 0, 0);
            w.parts.legL.rotation.x = w.parts.legR.rotation.x = 0;
          } else {
            w.g.position.set(ss[k].x, ss[k].y - HIP, ss[k].z); w.g.rotation.set(0, ss[k].ry, 0);
            w.parts.legL.rotation.x = w.parts.legR.rotation.x = -1.45;
          }
          if (!w.sleepMap) w.sleepMap = paintSkin(w.parts.look, true);
          if (!w.awakeMap) w.awakeMap = w.parts.mat.map;
          w.parts.mat.map = want === 'sleep' ? w.sleepMap : w.awakeMap; w.parts.mat.needsUpdate = true;
        });
        zzz.visible = want === 'sleep';
      }
      sitters.forEach((w, k) => {
        const side = k === 0 ? -1 : 1;
        if (coupleMode === 'lunch' || coupleMode === 'dinner') {   // chopsticks up to the mouth, a little nod
          w.parts.armL.rotation.x = -0.9;
          w.parts.armR.rotation.x = -1.35 + Math.sin(t * 2.6 + k * 1.7) * 0.45;
          w.parts.head.rotation.set(0.12 + Math.max(0, Math.sin(t * 2.6 + k * 1.7)) * 0.12, 0, 0);
        } else if (coupleMode === 'sleep') {        // asleep in bed, heads turned to each other
          w.parts.armL.rotation.x = w.parts.armR.rotation.x = 0;
          w.parts.head.rotation.set(0.6, -side * (0.35 + Math.sin(t * 0.9) * 0.03), 0);
        } else {
          w.parts.armL.rotation.x = w.parts.armR.rotation.x = -0.6;
          w.parts.head.rotation.set(0, -side * 0.25, -side * (0.18 + Math.sin(t * 0.8) * 0.04));
        }
      });
      if (zzz.visible) { zzz.position.set(14, 1.6 + (t * 0.25) % 0.4, -3.0); zzz.material.opacity = 0.9 - ((t * 0.25) % 0.4) * 1.5; }
      // names over their heads
      sitters.forEach((w, k) => { w.parts.head.getWorldPosition(names[k].position); names[k].position.y += coupleMode === 'sleep' ? 0.45 : 0.62; });
      // the kiss: he leans over to her cheek, a little heart floats up
      if (kissT >= 0) {
        kissT += dt;
        const him = sitters[1], her = sitters[0], k1 = Math.sin(Math.min(1, kissT / 1.6) * Math.PI);
        him.parts.head.rotation.y += (coupleMode === 'sleep' ? -0.5 : -0.9) * k1;
        him.parts.head.rotation.z += 0.25 * k1;
        her.parts.head.rotation.z -= 0.2 * k1;
        if (coupleMode !== 'sleep') { him.g.rotation.z = 0.16 * k1; }
        const hp = new THREE.Vector3(); her.parts.head.getWorldPosition(hp); const mp = new THREE.Vector3(); him.parts.head.getWorldPosition(mp);
        kissHeart.visible = kissT > 0.5;
        kissHeart.position.copy(hp).lerp(mp, 0.5); kissHeart.position.y += 0.35 + (kissT - 0.5) * 0.35;
        kissHeart.scale.setScalar(0.12 + Math.min(1, (kissT - 0.5) * 2) * 0.06);
        kissHeart.rotation.y = camera.rotation.y;
        if (kissT > 2.1) { kissT = -1; kissHeart.visible = false; him.g.rotation.z = 0; }
      }
      if (R.bedLamp) R.bedLamp.material.emissiveIntensity = coupleMode === 'sleep' ? 0.15 : 0.6 * lamp.intensity / 8;
    } else if (R.sofa) sitters.forEach((w, k) => {           // cuddled up on the sofa
      w.parts.armL.rotation.x = w.parts.armR.rotation.x = -0.6;
      w.parts.head.rotation.z = (k === 0 ? -1 : 1) * (0.18 + Math.sin(t * 0.8) * 0.04);
      w.parts.head.rotation.y = (k === 0 ? 1 : -1) * 0.25;
    });
    if (gamer) {                                     // playing on the bean bag, controller in hand
      gamer.parts.armL.rotation.x = gamer.parts.armR.rotation.x = -1.1 + Math.sin(t * 14) * 0.05;
      gamer.parts.head.rotation.x = -0.05; gamer.parts.head.rotation.y = Math.sin(t * 0.5) * 0.08;
    }
    if (who) {                                       // typing away
      who.parts.armL.rotation.x = -1.2 + Math.sin(t * 9) * 0.12;
      who.parts.armR.rotation.x = -1.2 + Math.sin(t * 9 + 1.8) * 0.12;
      who.parts.head.rotation.x = 0.15 + Math.sin(t * 0.6) * 0.05;
      who.parts.head.rotation.y = Math.sin(t * 0.35) * 0.25;
    }
    if (t - last > 20 || last === 0) { applyTime(); last = t || 0.001; }
    renderer.render(scene, camera);
    rugV.set(0.3, 0.05, 0.6).project(camera);
    document.documentElement.style.setProperty('--rug-x', ((rugV.x + 1) / 2 * 100).toFixed(1) + 'vw');
    document.documentElement.style.setProperty('--rug-y', ((1 - rugV.y) / 2 * 100).toFixed(1) + 'vh');
  }
  applyTime();
  requestAnimationFrame(loop);
  if (/[?&]debug3d/.test(location.search)) window.__room = { camera, R, renderer, sitters };
  // the dishes they ordered, on the dining table (up to 4)
  function setFood(items) {
    if (!R.dinner) return;
    (R.foodMeshes || []).forEach((m) => { R.dinner.remove(m); });
    R.foodMeshes = [];
    items = (items || []).filter((it) => it && it.name).slice(0, 4);
    R.defaultDishes.forEach((m) => { m.visible = !items.length; });
    const xs = [[0], [-0.33, 0.33], [-0.48, 0, 0.48], [-0.54, -0.18, 0.18, 0.54]][Math.max(0, items.length - 1)] || [];
    const loader = new THREE.TextureLoader(); loader.setCrossOrigin('anonymous');
    items.forEach((it, i) => {
      const plate = new THREE.Group(); plate.position.set(xs[i], 0.8, -0.12 + (i % 2) * 0.06); R.dinner.add(plate); R.foodMeshes.push(plate);
      const pm = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.05, 24), mat(0xffffff)); plate.add(pm);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.015, 8, 24), mat([0xf6c1cf, 0xc9e3f8, 0xfff1a8, 0xcdeccd][i])); rim.rotation.x = Math.PI / 2; rim.position.y = 0.025; plate.add(rim);
      const fm = new THREE.MeshLambertMaterial({ color: 0xffffff });
      const food = new THREE.Mesh(new THREE.CircleGeometry(0.16, 28), fm); food.rotation.x = -Math.PI / 2; food.position.y = 0.03; plate.add(food);
      const fallback = () => {                       // no picture: a little drawing with the name
        const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
        x.fillStyle = ['#ffe1e9', '#e1f0fb', '#fff6cf', '#e3f5e1'][i]; x.fillRect(0, 0, 128, 128);
        x.font = '64px sans-serif'; x.textAlign = 'center'; x.fillText('🍲', 64, 76);
        x.font = '800 16px Nunito, sans-serif'; x.fillStyle = '#8a5a6a'; x.fillText(it.name.slice(0, 14), 64, 112);
        fm.map = new THREE.CanvasTexture(c); fm.map.colorSpace = THREE.SRGBColorSpace; fm.needsUpdate = true;
      };
      if (!it.img) { fallback(); return; }
      if (/^data:image\/svg/.test(it.img)) {          // drawn by Claude: paint it on a cream plate
        const im = new Image();
        im.onload = () => {
          const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
          x.fillStyle = '#fffaf5'; x.fillRect(0, 0, 256, 256); x.drawImage(im, 0, 0, 256, 256);
          fm.map = new THREE.CanvasTexture(c); fm.map.colorSpace = THREE.SRGBColorSpace; fm.needsUpdate = true;
        };
        im.onerror = fallback; im.src = it.img; return;
      }
      loader.load(it.img, (tx) => {
        tx.colorSpace = THREE.SRGBColorSpace;
        const a = tx.image.width / tx.image.height;     // crop the middle square
        if (a > 1) { tx.repeat.set(1 / a, 1); tx.offset.set((1 - 1 / a) / 2, 0); } else { tx.repeat.set(1, a); tx.offset.set(0, (1 - a) / 2); }
        fm.map = tx; fm.needsUpdate = true;
      }, undefined, fallback);
    });
  }
  return {
    house: opts.house,
    setCorner(name) { if (R.couple) { opts.corner = name; if (!zoomed) setCorner(floorCorner(), false); return; } setCorner(name, false); },
    back() { zoomed = false; setCorner(floorCorner(), false); },     // after the album: zoom back out
    setFood,
    get floor() { return floor; },
    setPhotos(urls) {
      if (!R.frames) return;
      const loader = new THREE.TextureLoader();
      R.frames.forEach((f, i) => {
        if (!urls[i]) return;
        loader.load(urls[i], (tx) => {
          tx.colorSpace = THREE.SRGBColorSpace;
          const img = tx.image, fw = f.geometry.parameters.width, fh = f.geometry.parameters.height;
          // crop to fill the frame
          const a = img.width / img.height, b = fw / fh;
          if (a > b) { tx.repeat.set(b / a, 1); tx.offset.set((1 - b / a) / 2, 0); } else { tx.repeat.set(1, a / b); tx.offset.set(0, (1 - a / b) / 2); }
          f.material.map = tx; f.material.color.set(0xffffff); f.material.needsUpdate = true;
        });
      });
    },
    setTimeMode(m) { opts.timeMode = m; applyTime(); },
    destroy() {
      running = false;
      window.removeEventListener('resize', onResize);
      scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      renderer.dispose(); renderer.domElement.remove();
    }
  };
}

window.Village3D = { create, room: createRoom, LOOKS, LOVE: LOVE_LOOKS, ROOF: COL.roof };
