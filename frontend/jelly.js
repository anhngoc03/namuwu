/* Procedural jellyfish (canvas). Bell pulses (quick squeeze, slow relax) and
   drifts; tentacles + frilly oral arms are verlet chains anchored on the rim,
   so they trail, lag and ripple on their own. */
var JellySim = (function () {
  var sims = [], raf = null, last = 0;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function make(canvas) {
    var s = { c: canvas, ctx: canvas.getContext('2d'), t: Math.random() * 10,
      x: 50, y: 34, vx: 0, vy: 0, ang: 0, tent: [], arms: [] };
    var i, k;
    // 9 thin tentacles round the rim, 4 frilly oral arms from the centre
    for (i = 0; i < 9; i++) s.tent.push(chain(20, 3.3, (i / 8) * 2 - 1, 0.6 + Math.random() * 0.8));
    for (k = 0; k < 4; k++) s.arms.push(chain(12, 3.0, (k / 3) * 0.9 - 0.45, 0.4 + Math.random() * 0.5));
    function chain(n, seg, u, ph) {
      var pts = [];
      for (var j = 0; j < n; j++) pts.push({ x: 50 + u * 14, y: 40 + j * seg, px: 50 + u * 14, py: 40 + j * seg });
      return { pts: pts, seg: seg, u: u, ph: ph };
    }
    sims.push(s);
    return s;
  }

  // contraction 0..1: fast squeeze (first 28% of the beat), slow relax after
  function squeeze(phase) {
    if (phase < 0.28) { var a = phase / 0.28; return Math.sin(a * Math.PI / 2); }
    var b = (phase - 0.28) / 0.72; return Math.pow(1 - b, 2.2);
  }

  function step(s, dt) {
    var P = 1.7;                        // seconds per beat
    s.t += dt;
    var phase = (s.t % P) / P, c = squeeze(phase);
    var prevPhase = ((s.t - dt) % P) / P;
    // thrust while squeezing, along the body axis; water drag; soft pull home
    if (phase < 0.28) {
      var thrust = 34 * dt;
      s.vx += Math.sin(s.ang) * thrust; s.vy -= Math.cos(s.ang) * thrust;
    }
    s.vy += 7 * dt;                     // gentle sinking between beats
    s.vx += (50 - s.x) * 0.6 * dt; s.vy += (34 - s.y) * 0.9 * dt;
    s.vx *= Math.pow(0.18, dt); s.vy *= Math.pow(0.18, dt);
    s.x += s.vx * dt; s.y += s.vy * dt;
    s.ang = 0.28 * Math.sin(s.t * 0.37) + 0.08 * Math.sin(s.t * 0.9);
    s.sq = c;

    var w = 15 * (1 - 0.2 * c);         // bell half-width
    var cos = Math.cos(s.ang), sin = Math.sin(s.ang);
    function rim(u, depth) {            // point on the bell's rim, rotated with the body
      var lx = u * w, ly = 4 + depth;
      return { x: s.x + lx * cos - ly * sin, y: s.y + lx * sin + ly * cos };
    }
    var all = s.tent.concat(s.arms);
    for (var i = 0; i < all.length; i++) {
      var ch = all[i], p = ch.pts, isArm = i >= s.tent.length;
      var a = rim(isArm ? ch.u * 0.45 : ch.u, isArm ? 1 : 0);
      p[0].x = a.x; p[0].y = a.y; p[0].px = a.x; p[0].py = a.y;
      for (var j = 1; j < p.length; j++) {
        var q = p[j], vx = (q.x - q.px) * 0.96, vy = (q.y - q.py) * 0.96;
        q.px = q.x; q.py = q.y;
        // a ripple travelling down the tentacle + a little current
        var wave = Math.sin(s.t * 2.4 - j * 0.45 + ch.ph * 6) * (isArm ? 0.016 : 0.034) * Math.min(j, 10) * dt * 60 * 0.12;
        q.x += vx + wave + Math.sin(s.t * 0.5 + ch.ph) * 0.004;
        q.y += vy + 0.06;               // trails "down" (behind the swim)
      }
      for (var it = 0; it < 3; it++) {   // keep segment lengths
        for (j = 1; j < p.length; j++) {
          var A = p[j - 1], B = p[j], dx = B.x - A.x, dy = B.y - A.y, d = Math.sqrt(dx * dx + dy * dy) || 0.001;
          var diff = (d - ch.seg) / d;
          if (j === 1) { B.x -= dx * diff; B.y -= dy * diff; }
          else { A.x += dx * diff * 0.5; A.y += dy * diff * 0.5; B.x -= dx * diff * 0.5; B.y -= dy * diff * 0.5; }
        }
      }
    }
  }

  function draw(s) {
    var cv = s.c, ctx = s.ctx, dpr = Math.min(2, window.devicePixelRatio || 1);
    var W = cv.clientWidth, H = cv.clientHeight;
    if (!W || !H) return;
    if (cv.width !== Math.round(W * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
    var k = Math.min(W / 100, H / 110) * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.setTransform(k, 0, 0, k, (cv.width - 100 * k) / 2, (cv.height - 110 * k) / 2);
    var dark = typeof themeIsDark === 'function' && themeIsDark();
    var line = dark ? '210,215,255' : '120,128,235';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.shadowColor = dark ? 'rgba(170,175,255,.9)' : 'rgba(150,150,255,.35)';
    ctx.shadowBlur = (dark ? 6 : 3) * k / dpr;

    // tentacles: thin, tapering
    s.tent.forEach(function (ch) { strand(ctx, ch.pts, 0.9, 0.25, 'rgba(' + line + ',' + (dark ? .75 : .6) + ')'); });
    // oral arms: wide frilly ribbons
    s.arms.forEach(function (ch, i) {
      strand(ctx, ch.pts, 4.2, 1.2, 'rgba(' + (dark ? '200,190,255' : '170,160,245') + ',' + (dark ? .38 : .34) + ')');
      strand(ctx, ch.pts, 1.4, 0.4, 'rgba(' + (dark ? '235,225,255' : '150,140,240') + ',' + (dark ? .55 : .45) + ')');
    });

    // bell
    var c = s.sq || 0, w = 15 * (1 - 0.2 * c), h = 15 * (1 + 0.14 * c);
    ctx.save();
    ctx.translate(s.x, s.y); ctx.rotate(s.ang);
    var g = ctx.createRadialGradient(-w * 0.3, -h * 0.55, 1, 0, -h * 0.2, w * 1.25);
    g.addColorStop(0, dark ? 'rgba(255,245,255,.95)' : 'rgba(250,240,255,.95)');
    g.addColorStop(0.45, dark ? 'rgba(200,190,255,.75)' : 'rgba(205,195,255,.85)');
    g.addColorStop(1, dark ? 'rgba(130,140,255,.45)' : 'rgba(150,160,250,.6)');
    ctx.beginPath();
    ctx.moveTo(-w, 4);
    ctx.bezierCurveTo(-w * 1.05, -h * 0.9, w * 1.05, -h * 0.9, w, 4);
    for (var i = 8; i >= 0; i--) {                       // scalloped rim
      var xx = -w + (2 * w) * (i / 8);
      ctx.quadraticCurveTo(xx + w / 8, 6.2 + c, xx, 4);
    }
    ctx.closePath();
    ctx.fillStyle = g; ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(' + line + ',.55)'; ctx.lineWidth = 0.7; ctx.stroke();
    // inner glow + highlight
    ctx.beginPath(); ctx.ellipse(0, -h * 0.15, w * 0.45, h * 0.28, 0, 0, Math.PI * 2);
    ctx.fillStyle = dark ? 'rgba(255,200,240,.35)' : 'rgba(255,190,230,.4)'; ctx.fill();
    ctx.beginPath(); ctx.ellipse(-w * 0.45, -h * 0.5, w * 0.22, h * 0.1, -0.6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.fill();
    ctx.restore();
  }

  // one continuous smooth path per strand (separate segments leave dots at the joints);
  // taper by drawing the root half again a bit thicker
  function strand(ctx, p, w0, w1, color) {
    ctx.strokeStyle = color;
    trace(ctx, p, p.length); ctx.lineWidth = (w0 + w1) / 2; ctx.stroke();
    trace(ctx, p, Math.ceil(p.length * 0.45)); ctx.lineWidth = w0 * 0.6; ctx.stroke();
  }
  function trace(ctx, p, n) {
    ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y);
    for (var j = 1; j < n - 1; j++) ctx.quadraticCurveTo(p[j].x, p[j].y, (p[j].x + p[j + 1].x) / 2, (p[j].y + p[j + 1].y) / 2);
    ctx.lineTo(p[n - 1].x, p[n - 1].y);
  }

  function loop(now) {
    raf = null;
    var dt = Math.min(0.05, (now - (last || now)) / 1000); last = now;
    sims = sims.filter(function (s) { return s.c.isConnected; });
    var any = false;
    sims.forEach(function (s) {
      if (!s.c.offsetParent) return;               // hidden page / list → skip
      any = true;
      step(s, dt); draw(s);
    });
    if (sims.length) raf = requestAnimationFrame(loop);
    if (!any) last = 0;
  }

  return {
    attach: function (canvas) {
      var s = make(canvas);
      for (var i = 0; i < 90; i++) step(s, 1 / 60);   // settle tentacles before first paint
      if (reduce) { draw(s); return; }
      if (!raf) raf = requestAnimationFrame(loop);
    }
  };
})();
