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

/* ---------------- layouts (same plans as the old pixel maps: 1 unit = 4 px) ----------------
   'land' for wide screens, 'port' (tall) for phones held upright. Chosen when the scene
   is created; village.js re-creates the scene when the screen turns. */
const LAYOUTS = {
  land: {
    W: 256, H: 160,
    houses: [[14,10],[50,10],[86,10],[146,10],[182,10],[218,10],[14,62],[218,62],[14,112],[50,112],[86,112]],
    hall: [128, 65], pond: [206, 128],
    trees: [[118,8],[64,40],[160,40],[232,40],[60,96],[100,94],[152,96],[166,112],[244,104],[4,150],[120,146],[140,150],[178,92],[6,40],[250,140],[30,150],[248,20]],
    roads: [[8,36.5,250,36.5],[8,88.5,250,88.5],[8,138.5,172,138.5],[44.5,36.5,44.5,138.5],[129.5,88.5,129.5,138.5],[212.5,36.5,212.5,88.5]],
    island: [72, 50]
  },
  port: {
    W: 160, H: 256,
    houses: [[8,10],[48,10],[88,10],[128,10],[8,58],[128,58],[8,110],[128,110],[8,162],[128,162],[8,210]],
    hall: [80, 116], pond: [84, 214],
    trees: [[52,48],[102,46],[50,84],[104,84],[52,160],[104,158],[64,152],[136,210],[146,238],[122,238],[40,140]],
    roads: [[4,36.5,156,36.5],[37.5,36.5,37.5,250],[122.5,36.5,122.5,208],[37.5,142.5,122.5,142.5]],
    island: [48, 72]
  }
};
let LAY, HOUSE_POS, HALL_POS, POND, TREE_POS, ROADS, ISLAND;
function useLayout(key) {
  LAY = LAYOUTS[key];
  const P = (x, y) => [(x - LAY.W / 2) / 4, (y - LAY.H / 2) / 4];
  HOUSE_POS = LAY.houses.map(([x, y]) => P(x + 12, y + 11));
  HALL_POS = P(LAY.hall[0], LAY.hall[1]);
  const pc = P(LAY.pond[0], LAY.pond[1]);
  POND = { x: pc[0], z: pc[1], rx: 8, rz: 3.8 };
  TREE_POS = LAY.trees.map(([x, y]) => P(x + 5, y + 8));
  ROADS = LAY.roads.map(([x1, y1, x2, y2]) => P(x1, y1).concat(P(x2, y2)));
  ISLAND = { w: LAY.island[0], d: LAY.island[1] };
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
function box(w, h, d, color, x = 0, y = 0, z = 0, extra) {
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
function slab(shape, depth, color, y) {
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 6 });
  g.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(g, mat(color));
  m.position.y = y; m.receiveShadow = true;
  return m;
}

/* ---------------- buildings ---------------- */
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
  const g = new THREE.ExtrudeGeometry(s, { depth: d + 0.8, bevelEnabled: false });
  g.translate(0, 0, -(d + 0.8) / 2);
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
  const w = hall ? 10 : 5.2, d = hall ? 7 : 4.2, h = hall ? 4.6 : 3.2, rh = hall ? 3.6 : 2.6;   // 1 unit ≈ 1 m
  g.add(box(w + 0.6, 0.3, d + 0.6, COL.wall2, 0, 0.15, 0));           // base
  g.add(box(w, h, d, COL.wall, 0, 0.3 + h / 2, 0));                      // walls
  const roof = gableRoof(w, d, rh, hall ? COL.roof.hall : COL.roof[spec.roof]);
  roof.position.y = 0.3 + h; g.add(roof);
  // door + step
  const dw = hall ? 1.9 : 1.05, dh = hall ? 2.8 : 2.15;
  g.add(box(dw, dh, 0.12, COL.door, 0, 0.3 + dh / 2, d / 2 + 0.02));
  g.add(box(0.12, 0.12, 0.08, 0xf9e08a, dw / 2 - 0.25, 0.3 + dh / 2, d / 2 + 0.1));
  g.add(box(dw + 0.8, 0.12, 0.8, COL.road, 0, 0.06, d / 2 + 0.6));
  // windows (front + sides)
  const wm = windowMat();
  g.userData.wm = wm;
  const wx = hall ? [-3.6, -2, 2, 3.6] : [-1.6, 1.6];
  wx.forEach((x) => {
    g.add(box(1.1, 1.1, 0.1, COL.frame, x, 0.3 + h * 0.6, d / 2 + 0.01));
    g.add(box(0.85, 0.85, 0.12, 0, x, 0.3 + h * 0.6, d / 2 + 0.03, wm));
  });
  [-1, 1].forEach((sx) => g.add(box(0.12, 0.85, 0.85, 0, sx * (w / 2 + 0.01), 0.3 + h * 0.6, 0, wm)));
  if (!hall) {
    g.add(box(0.6, 1.4, 0.6, COL.wall2, w / 4, 0.3 + h + rh * 0.55, -d / 5));            // chimney
    g.userData.chimney = new THREE.Vector3(w / 4, 0.3 + h + rh * 0.55 + 1, -d / 5);
    g.add(box(0.8, 0.2, 0.8, 0xe2c9ad, w / 4, 0.3 + h + rh * 0.55 + 0.75, -d / 5));
    // little flower box under the windows
    wx.forEach((x) => {
      g.add(box(1.2, 0.25, 0.35, COL.door, x, 0.3 + h * 0.6 - 0.75, d / 2 + 0.2));
      [-0.35, 0, 0.35].forEach((o, k) => g.add(box(0.22, 0.22, 0.22, COL.flower[k], x + o, 0.3 + h * 0.6 - 0.52, d / 2 + 0.22)));
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
  g.userData.bell = bell;
  g.userData.doorZ = d / 2 + 1.3;
  return g;
}

function makeTree(r) {
  const g = new THREE.Group();
  const s = 1.3 + r() * 0.6;
  g.add(box(0.5 * s, 1.6 * s, 0.5 * s, COL.trunk, 0, 0.8 * s, 0));
  const blobs = [[0, 2.1, 0, 1.25], [0.6, 1.8, 0.3, 0.85], [-0.5, 1.9, -0.2, 0.9], [0.1, 2.8, 0.1, 0.8]];
  blobs.forEach(([x, y, z, rr], i) => {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(rr * s, 0), mat(COL.leaf[i % 3], { flatShading: true }));
    m.position.set(x * s, y * s, z * s); m.castShadow = true; m.receiveShadow = true;
    g.add(m);
  });
  g.rotation.y = r() * 6.28;
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
  { hair: 0x5a4040, skin: 0xedbd9a, shirt: 0xd9c9f0, pants: 0x6d6a8a, style: 'long' }                  // Goals
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
function makePerson(look) {
  const g = new THREE.Group(), parts = {};
  parts.legL = limb(0.24, 0.55, 0.26, look.pants, -0.15, 0.55, 0); g.add(parts.legL);
  parts.legR = limb(0.24, 0.55, 0.26, look.pants, 0.15, 0.55, 0); g.add(parts.legR);
  [parts.legL, parts.legR].forEach((l) => l.add(box(0.26, 0.12, 0.34, 0x6b5a4e, 0, -0.52, 0.04)));
  parts.body = box(0.62, 0.62, 0.4, look.shirt, 0, 0.86, 0); g.add(parts.body);
  parts.armL = limb(0.18, 0.52, 0.2, look.shirt, -0.41, 1.12, 0); g.add(parts.armL);
  parts.armR = limb(0.18, 0.52, 0.2, look.shirt, 0.41, 1.12, 0); g.add(parts.armR);
  [parts.armL, parts.armR].forEach((a) => a.add(box(0.17, 0.14, 0.19, look.skin, 0, -0.55, 0)));
  const head = new THREE.Group(); head.position.y = 1.5; g.add(head); parts.head = head;
  head.add(box(0.7, 0.66, 0.66, look.skin, 0, 0, 0));
  head.add(box(0.76, 0.22, 0.72, look.hair, 0, 0.36, -0.01));
  head.add(box(0.76, 0.55, 0.16, look.hair, 0, 0.1, -0.3));
  head.add(box(0.12, 0.4, 0.6, look.hair, -0.36, 0.12, -0.04));
  head.add(box(0.12, 0.4, 0.6, look.hair, 0.36, 0.12, -0.04));
  head.add(box(0.5, 0.12, 0.08, look.hair, 0, 0.24, 0.32));        // fringe
  [-0.15, 0.15].forEach((x) => {
    head.add(box(0.1, 0.14, 0.04, 0x3d3030, x, 0.0, 0.34));
    head.add(box(0.04, 0.05, 0.04, 0xffffff, x + 0.02, 0.04, 0.36));
    head.add(box(0.13, 0.06, 0.03, 0xffa3b5, x * 1.55, -0.12, 0.335));
  });
  head.add(box(0.1, 0.04, 0.03, 0xd2777f, 0, -0.18, 0.335));
  if (look.style === 'bun') { const b = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), mat(look.hair)); b.position.set(0, 0.6, -0.1); b.castShadow = true; head.add(b); }
  if (look.style === 'cap') { head.add(box(0.8, 0.18, 0.76, look.cap, 0, 0.5, 0)); head.add(box(0.7, 0.06, 0.4, look.cap, 0, 0.42, 0.5)); }
  if (look.style === 'long') head.add(box(0.74, 0.8, 0.16, look.hair, 0, -0.3, -0.3));
  if (look.style === 'twin') [-0.42, 0.42].forEach((x) => { const t = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(look.hair)); t.position.set(x, 0.05, -0.15); t.scale.y = 1.6; head.add(t); });
  if (look.glasses) [-0.15, 0.15].forEach((x) => { head.add(box(0.2, 0.18, 0.02, 0x6b5a4e, x, 0, 0.345)); head.add(box(0.14, 0.12, 0.025, 0xdff3fa, x, 0, 0.35)); });
  if (look.dress) g.add(box(0.74, 0.42, 0.5, look.dress, 0, 0.6, 0));                // skirt
  g.scale.setScalar(0.86);     // ≈ 1.75 m tall
  return { g, parts };
}
function makeCat() {
  const g = new THREE.Group(), parts = {};
  const c = 0xf7c18a, dk = 0xe09d5e, wh = 0xfff3e6;
  g.add(box(0.46, 0.4, 0.8, c, 0, 0.5, 0));
  [-0.12, 0.1].forEach((z) => g.add(box(0.48, 0.06, 0.12, dk, 0, 0.71, z)));      // stripes
  g.add(box(0.36, 0.2, 0.5, wh, 0, 0.34, 0.05));
  parts.legs = [[-0.14, 0.28], [0.14, 0.28], [-0.14, -0.28], [0.14, -0.28]].map(([x, z]) => { const l = limb(0.13, 0.32, 0.13, c, x, 0.34, z); g.add(l); return l; });
  const head = new THREE.Group(); head.position.set(0, 0.78, 0.48); g.add(head); parts.head = head;
  head.add(box(0.5, 0.42, 0.42, c, 0, 0, 0));
  head.add(box(0.3, 0.16, 0.06, wh, 0, -0.1, 0.21));
  [-0.15, 0.15].forEach((x) => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.2, 4), mat(dk)); ear.position.set(x, 0.29, -0.02); ear.rotation.y = Math.PI / 4; head.add(ear);
    const eye = box(0.08, 0.1, 0.03, 0x3d3030, x * 0.8, 0.04, 0.215); head.add(eye); (parts.eyes = parts.eyes || []).push(eye);
  });
  head.add(box(0.07, 0.05, 0.03, 0xff9db0, 0, -0.04, 0.23));
  const tail = new THREE.Group(); tail.position.set(0, 0.62, -0.38); g.add(tail); parts.tail = tail;
  const t1 = box(0.1, 0.1, 0.4, c, 0, 0.05, -0.18); tail.add(t1);
  const t2 = new THREE.Group(); t2.position.set(0, 0.05, -0.36); tail.add(t2); t2.add(box(0.1, 0.4, 0.1, dk, 0, 0.18, 0));
  tail.rotation.x = 0.5;
  g.scale.setScalar(0.6);      // cat ≈ 0.45 m
  return { g, parts };
}
function makeDog() {
  const g = new THREE.Group(), parts = {};
  const c = 0xfff4e6, br = 0xc9966f;
  g.add(box(0.56, 0.5, 0.95, c, 0, 0.62, 0));
  g.add(box(0.58, 0.3, 0.4, br, 0, 0.76, -0.15));          // brown patch
  parts.legs = [[-0.17, 0.33], [0.17, 0.33], [-0.17, -0.33], [0.17, -0.33]].map(([x, z]) => { const l = limb(0.16, 0.4, 0.16, c, x, 0.42, z); g.add(l); return l; });
  const head = new THREE.Group(); head.position.set(0, 0.98, 0.55); g.add(head); parts.head = head;
  head.add(box(0.56, 0.52, 0.5, c, 0, 0, 0));
  head.add(box(0.3, 0.24, 0.26, c, 0, -0.1, 0.34));
  head.add(box(0.13, 0.1, 0.06, 0x3d3030, 0, -0.02, 0.48));
  head.add(box(0.1, 0.12, 0.06, 0xff8fa3, 0.05, -0.24, 0.42));
  [-0.3, 0.3].forEach((x) => {
    const e = limb(0.12, 0.42, 0.26, br, x, 0.2, -0.02); e.rotation.z = x > 0 ? -0.15 : 0.15; head.add(e);
    const eye = box(0.08, 0.11, 0.03, 0x3d3030, x * 0.45, 0.08, 0.26); head.add(eye); (parts.eyes = parts.eyes || []).push(eye);
  });
  const tail = limb(0.12, 0.42, 0.12, br, 0, 0.82, -0.47); tail.rotation.x = -0.9; g.add(tail); parts.tail = tail;
  g.scale.setScalar(0.62);     // dog ≈ 0.75 m
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

function makeSwing() {
  const g = new THREE.Group(), wood = 0xc49674, rope = 0xeadfcb;
  [-1.3, 1.3].forEach((x) => [-1, 1].forEach((sz) => {
    const leg = box(0.14, 2.75, 0.14, wood, x, 1.3, sz * 0.48); leg.rotation.x = -sz * 0.36; g.add(leg);
  }));
  g.add(box(2.9, 0.14, 0.16, wood, 0, 2.58, 0));
  const pivot = new THREE.Group(); pivot.position.y = 2.52; g.add(pivot);
  [-0.72, 0.72].forEach((x) => pivot.add(box(0.04, 1.96, 0.04, rope, x, -0.98, 0)));
  const seat = box(1.65, 0.1, 0.5, 0xf6a9bd, 0, -1.98, 0); pivot.add(seat);
  g.userData.pivot = pivot; g.userData.seat = seat;
  return g;
}
function textSprite(text, color, w, h) {
  const c = document.createElement('canvas'); c.width = 128; c.height = 64;
  const x = c.getContext('2d');
  x.font = 'bold 48px sans-serif'; x.fillStyle = color; x.textAlign = 'center'; x.fillText(text, 64, 50);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
  sp.scale.set(w, h, 1); sp.visible = false;
  return sp;
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
  [0, 0x1e2647, 0x8fa6ff, 0.25, 0.55, 1],
  [5, 0x262f55, 0x8fa6ff, 0.25, 0.55, 1],
  [6, 0xf8cdb6, 0xffc9a0, 1.3, 1.1, 0.4],
  [7.5, 0xbfe3f5, 0xfff4e6, 2.3, 1.55, 0],
  [16.5, 0xbfe3f5, 0xfff4e6, 2.3, 1.55, 0],
  [18, 0xf7c0b4, 0xffbe96, 1.3, 1.1, 0.4],
  [19.2, 0x2b3159, 0x8fa6ff, 0.3, 0.6, 1],
  [24, 0x1e2647, 0x8fa6ff, 0.25, 0.55, 1]
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
  scene.fog = new THREE.Fog(0xbfe3f5, 220, 480);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.5, 600);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minDistance = 14; controls.maxDistance = 170;
  controls.minPolarAngle = 0.15; controls.maxPolarAngle = 1.32;
  controls.target.set(0, 0, 1.5);
  controls.screenSpacePanning = false;          // move along the ground
  controls.rotateSpeed = 0.7;
  controls.panSpeed = 1.1;
  controls.keyPanSpeed = 22;
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
  Object.assign(sun.shadow.camera, { left: -44, right: 44, top: 36, bottom: -36, near: 1, far: 220 });
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.03;
  scene.add(sun); scene.add(sun.target);
  const lampLights = [];

  /* sky things: sun / moon discs, stars, clouds */
  const sunDisc = new THREE.Mesh(new THREE.SphereGeometry(4, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffe9a8, fog: false }));
  const moonDisc = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 12), new THREE.MeshBasicMaterial({ color: 0xf4f1ff, fog: false }));
  scene.add(sunDisc, moonDisc);
  const starGeo = new THREE.BufferGeometry(), sp = [];
  for (let i = 0; i < 700; i++) {
    const th = Math.random() * Math.PI * 2, ph = Math.random() * 1.55;
    sp.push(Math.cos(th) * Math.sin(ph) * 280, Math.cos(ph) * 280 + 20, Math.sin(th) * Math.sin(ph) * 280);
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

  /* island */
  const world = new THREE.Group(); scene.add(world);
  world.add(slab(roundedRect(ISLAND.w, ISLAND.d, 6), 0.6, COL.grass, -0.6));   // ground top = y 0
  const dirt = slab(roundedRect(ISLAND.w - 0.4, ISLAND.d - 0.4, 6), 2.2, COL.dirt, -2.8); world.add(dirt);
  const dirt2 = slab(roundedRect(ISLAND.w - 3, ISLAND.d - 3, 5), 2.5, COL.dirt2, -5.3); world.add(dirt2);
  const dirt3 = slab(roundedRect(ISLAND.w - 10, ISLAND.d - 10, 4), 2, COL.dirt2, -7.3); world.add(dirt3);
  // grass rim lip
  const rim = slab(roundedRect(ISLAND.w + 0.3, ISLAND.d + 0.3, 6.1), 0.3, COL.grassSide, -0.75); world.add(rim);

  // roads
  ROADS.forEach(([x1, z1, x2, z2]) => {
    const v = x1 === x2, len = v ? Math.abs(z2 - z1) : Math.abs(x2 - x1);
    const m = box(v ? 1.8 : len + 1.8, 0.06, v ? len + 1.8 : 1.8, COL.road, (x1 + x2) / 2, 0.03, (z1 + z2) / 2);
    m.castShadow = false; world.add(m);
  });
  // stepping stones on the roads
  const R = rng(5);
  const stoneGeo = new THREE.BoxGeometry(0.5, 0.05, 0.4);
  const stones = new THREE.InstancedMesh(stoneGeo, mat(0xe6cfa3), 140);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 140; i++) {
    const r = ROADS[Math.floor(R() * ROADS.length)], t = R();
    const v = r[0] === r[2];
    dummy.position.set(lerp(r[0], r[2], t) + (v ? (R() - 0.5) * 1.2 : 0), 0.07, lerp(r[1], r[3], t) + (v ? 0 : (R() - 0.5) * 1.2));
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
  // reeds
  for (let i = 0; i < 10; i++) {
    const a = R() * Math.PI * 2, x = POND.x + Math.cos(a) * (POND.rx + 0.6), z = POND.z + Math.sin(a) * (POND.rz + 0.6);
    world.add(box(0.08, 1, 0.08, 0x7cb86f, x, 0.45, z));
  }

  // flowers + grass tufts (instanced)
  const fGeo = new THREE.BoxGeometry(0.22, 0.22, 0.22), tGeo = new THREE.BoxGeometry(0.08, 0.35, 0.08);
  const free = (x, z) => !inPond(x, z, 1.5) &&
    !ROADS.some(([x1, z1, x2, z2]) => x >= Math.min(x1, x2) - 1.2 && x <= Math.max(x1, x2) + 1.2 && z >= Math.min(z1, z2) - 1.2 && z <= Math.max(z1, z2) + 1.2) &&
    !HOUSE_POS.some(([hx, hz]) => Math.abs(x - hx) < 3.6 && Math.abs(z - hz) < 3.8) &&
    !(Math.abs(x - HALL_POS[0]) < 6 && Math.abs(z - HALL_POS[1]) < 5.4);
  COL.flower.forEach((c, ci) => {
    const n = 40, im = new THREE.InstancedMesh(fGeo, mat(c), n);
    let k = 0;
    while (k < n) {
      const x = (R() - 0.5) * (ISLAND.w - 6), z = (R() - 0.5) * (ISLAND.d - 6);
      if (!free(x, z)) continue;
      dummy.position.set(x, 0.11, z); dummy.rotation.y = R(); dummy.updateMatrix(); im.setMatrixAt(k++, dummy.matrix);
    }
    world.add(im);
  });
  const tufts = new THREE.InstancedMesh(tGeo, mat(0x8fcc7c), 300);
  for (let k = 0; k < 300;) {
    const x = (R() - 0.5) * (ISLAND.w - 4), z = (R() - 0.5) * (ISLAND.d - 4);
    if (!free(x, z)) continue;
    dummy.position.set(x, 0.17, z); dummy.rotation.set(R() * 0.3, R() * 3, R() * 0.3); dummy.updateMatrix(); tufts.setMatrixAt(k++, dummy.matrix);
  }
  world.add(tufts);

  // trees, fences, lamps
  TREE_POS.forEach(([x, z]) => { if (!free(x, z)) return; const t = makeTree(R); t.position.set(x, 0, z); t.userData.post = 1.2; world.add(t); });
  for (let i = 0; i < 14; i++) {   // a ring of trees near the edge
    const a = i / 14 * Math.PI * 2 + 0.2, x = Math.cos(a) * (ISLAND.w / 2 - 3), z = Math.sin(a) * (ISLAND.d / 2 - 3);
    if (!free(x, z)) continue;
    const t = makeTree(R); t.position.set(x, 0, z); t.userData.post = 1.2; world.add(t);
  }
  // street lamps beside the roads (the first three really light up at night)
  const lampSpots = [];
  ROADS.forEach(([x1, z1, x2, z2]) => [0.3, 0.72].forEach((t) => {
    const v = x1 === x2, x = lerp(x1, x2, t) + (v ? 1.4 : 0), z = lerp(z1, z2, t) + (v ? 0 : 1.4);
    if (HOUSE_POS.some(([hx, hz]) => Math.abs(x - hx) < 3.6 && Math.abs(z - hz) < 4.2)) return;
    if (Math.abs(x - HALL_POS[0]) < 6.2 && Math.abs(z - HALL_POS[1]) < 6) return;
    if (inPond(x, z, 1.5)) return;
    lampSpots.push([x, z]);
  }));
  lampSpots.slice(0, 7).forEach(([x, z], k) => {
    const l = makeLamp(); l.position.set(x, 0, z); l.userData.post = 0.3; world.add(l);
    if (k % 2 === 0 && lampLights.length < 3) {
      const pl = new THREE.PointLight(0xffc977, 0, 12, 1.6); pl.position.set(x, 2.7, z); world.add(pl); lampLights.push(pl);
    }
  });

  // houses
  const houseObjs = [], doors = [];
  (opts.houses || []).forEach((spec, i) => {
    if (!HOUSE_POS[i]) return;
    const h = makeHouse(spec, false); h.position.set(HOUSE_POS[i][0], 0, HOUSE_POS[i][1]);
    h.userData.id = spec.id; world.add(h); houseObjs.push(h);
    doors.push({ x: HOUSE_POS[i][0], z: HOUSE_POS[i][1] + h.userData.doorZ });
  });
  const hall = makeHouse(null, true); hall.position.set(HALL_POS[0], 0, HALL_POS[1]); hall.userData.id = 'hall'; world.add(hall); houseObjs.push(hall);
  const hallDoor = { x: HALL_POS[0], z: HALL_POS[1] + hall.userData.doorZ };
  doors.push(hallDoor);
  const graph = buildGraph(doors);
  const hallNode = graph.doorNodes[graph.doorNodes.length - 1];

  /* actors */
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
    } else addPerson(LOOKS[i] || LOOKS[i % 9], i);
  });
  const cat = Object.assign(makeCat(), { kind: 'cat', path: [], speed: 1.1, wait: 2, t: 0, sit: true });
  const dog = Object.assign(makeDog(), { kind: 'dog', path: [], speed: 2.2, wait: 1, t: 0, buddy: 0 });
  { const a = graph.nodes[graph.doorNodes[2]], b = graph.nodes[graph.doorNodes[graph.doorNodes.length - 1]];
    cat.g.position.set(a.x + 1.5, 0, a.z + 0.6); dog.g.position.set(b.x + 3, 0, b.z + 0.8); }
  world.add(cat.g, dog.g);
  const fish = [0, 1, 2, 3].map((i) => { const f = makeFish(i); world.add(f); return { g: f, a: rnd(0, 6.28), r: rnd(0.3, 0.75), sp: rnd(0.25, 0.5) * (i % 2 ? 1 : -1), jump: 0, jx: 0, jz: 0 }; });
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
    if (h < 8) return 'morning';
    if (h < 11.5) return 'work';
    if (h < 13) return 'lunch';
    if (h < 17.5) return 'work';
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
  function comeOut(p) {
    const n = homeDoor(p.home);
    p.inside = false; p.g.visible = true;
    p.g.position.set(n.x + rnd(-0.3, 0.3), 0, n.z - 0.9); p.g.rotation.set(0, 0, 0);
  }
  function goInside(p, stay) { const n = homeDoor(p.home); goTo(p, { x: n.x, z: n.z - 0.9 }, 'in'); p.stay = stay; }
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
    if (r === 'lunch' && x < 0.5) return gatherSpot(Math.floor(rnd(0, 18)));
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
      const n = homeDoor(him.home), dx = n.x - him.g.position.x, dz = n.z - 0.9 - him.g.position.z, d = Math.hypot(dx, dz);
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
  const blocks = HOUSE_POS.map(([x, z]) => ({ x, z, hw: 3.3, hd: 2.6 }))
    .concat([{ x: HALL_POS[0], z: HALL_POS[1], hw: 5.8, hd: 4.1 }]);
  const posts = [];
  world.children.forEach((o) => { if (o.userData.post) posts.push({ x: o.position.x, z: o.position.z, r: o.userData.post }); });
  function blocked(x, z, pad) {
    pad = pad || 0.5;
    if (Math.abs(x) > ISLAND.w / 2 - 2.5 || Math.abs(z) > ISLAND.d / 2 - 2.5) return true;
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
  const onRoad = (x, z, pad) => ROADS.some(([x1, z1, x2, z2]) => x >= Math.min(x1, x2) - 0.9 - pad && x <= Math.max(x1, x2) + 0.9 + pad && z >= Math.min(z1, z2) - 0.9 - pad && z <= Math.max(z1, z2) + 0.9 + pad);
  let swing = null;
  if (couple.home != null) {
    const [hx, hz] = HOUSE_POS[couple.home];
    // in front of the door first (across the path), then beside the house
    const tries = [[0, 7.2], [0, 6.4], [-2.2, 7.2], [2.2, 7.2], [0, 8.4], [4.6, 0.8], [-4.6, 0.8], [0, -5.2]];
    const hard = (x, z) => Math.abs(x) > ISLAND.w / 2 - 2.5 || Math.abs(z) > ISLAND.d / 2 - 2.5 || inPond(x, z, 1) ||
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
      swing = makeSwing(); swing.position.set(x, 0, z); world.add(swing);
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
        p.g.position.set(tmpV.x, tmpV.y - 0.47, tmpV.z);
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
      p.g.position.y = (moving ? Math.abs(Math.sin(p.t)) * 0.06 : 0);
      if (!moving && !p.path.length) {
        if (p.goal === 'hall') {                         // waiting at the hall: face it, little hops
          let d = Math.PI - p.g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); p.g.rotation.y += d * Math.min(1, dt * 6);
          p.g.position.y = Math.max(0, Math.sin(time * 4 + p.i)) * 0.1;
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
      else if (busyAt(i) > 0) lit = 1;
      else if (rNow !== 'sleep' && people.some((p) => p.home === i && p.inside)) lit = 1;
      h.userData.lit = lerp(h.userData.lit || 0, lit, Math.min(1, dt * 2));
      h.userData.wm.emissiveIntensity = nightAmt * h.userData.lit * 0.95;
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
        m.g.position.y = -0.22 * k * m.g.scale.y;
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
        m.g.position.y = 0;
      } else {
        m.parts.tail.rotation.z = Math.sin(time * (moving ? 18 : 10)) * 0.6;
        m.parts.head.rotation.x = moving ? 0 : Math.sin(time * 1.3) * 0.1;
        m.g.position.y = (moving ? Math.abs(Math.sin(m.t)) * 0.07 : 0);
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
    const flag = hall.userData.flag; flag.rotation.y = Math.sin(time * 3) * 0.25;
    const bell = hall.userData.bell;
    bell.material.emissiveIntensity = urgent ? (0.6 + Math.sin(time * 6) * 0.4) : 0;
    bell.rotation.z = urgent ? Math.sin(time * 7) * 0.35 : 0;
  }

  /* lighting from the clock */
  let nightAmt = 0;
  function applyTime() {
    const d = new Date();
    const h = hourOverride != null ? hourOverride : d.getHours() + d.getMinutes() / 60;
    const s = skyAt(h);
    nightAmt = s.night;
    scene.background = s.sky; scene.fog.color.copy(s.sky);
    hemi.intensity = s.amb;
    hemi.color.set(s.night > 0.5 ? 0x9aa8e0 : 0xffffff);
    hemi.groundColor.set(s.night > 0.5 ? 0x3a4a5a : 0xb7d7a0);
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
  function fitCamera() {
    resize();
    const vfov = camera.fov * Math.PI / 180, hfov = 2 * Math.atan(Math.tan(vfov / 2) * camera.aspect);
    const needW = ISLAND.w * (layoutKey === 'port' ? 0.6 : 0.56), needD = ISLAND.d * 0.6;
    const dist = Math.max(needW / Math.tan(hfov / 2), needD / Math.tan(vfov / 2)) * 1.02;
    const polar = layoutKey === 'port' ? 0.78 : 0.88, az = 0;
    camera.position.set(Math.sin(polar) * Math.sin(az) * dist, Math.cos(polar) * dist, Math.sin(polar) * Math.cos(az) * dist).add(controls.target);
    controls.update();
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
    controls.update();
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
  if (/[?&]debug3d/.test(location.search)) window.__v3d = { people, couple, get swing() { return swing; }, graph, cat, dog, routine, realHour, camera, controls, water, food, get urgent() { return urgent; } };

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
    show(on) { shown = !!on; if (shown) { resize(); applyTime(); start(); } },
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

window.Village3D = { create };
