/* ------------------------------------------------------------------
 * jelly.js — the jellyfish on empty screens.
 *
 * The painting (images/jellyfish.webp) is warped live, pixel by pixel, in a
 * WebGL fragment shader, using the way a real one swims:
 *   - the bell squeezes quickly, then relaxes slowly (one beat ≈ 1.8s);
 *   - each squeeze pushes the body up along its axis, then it sinks/drifts;
 *   - the same beat travels down the tentacles a moment later (they stretch
 *     and kink after the bell), plus slow waves running root → tip.
 * One shared WebGL canvas renders every jellyfish, then each one is copied to
 * its own 2D <canvas> (phones allow only a few WebGL contexts). Without WebGL
 * the painting is just shown still.
 * ------------------------------------------------------------------ */
var JellySim = (function () {
  var IMG_SRC = '/images/jellyfish.webp';
  var IW = 465, IH = 480;          // painting size (px) — shader works in these units
  var PAD = 40;                    // room around it for the body to move into
  var BW = IW + PAD * 2, BH = IH + PAD * 2;
  var BEAT = 1.8;

  var sims = [], raf = null, last = 0;
  var img = new Image(), imgReady = false;
  var gl = null, glCanvas = null, prog = null, uni = {}, glFailed = false;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  img.onload = function () { imgReady = true; kick(); };
  img.src = IMG_SRC;

  var VS = 'attribute vec2 p; varying vec2 v; uniform vec2 box;' +
    'void main(){ v = (p * 0.5 + 0.5) * box; v.y = box.y - v.y; gl_Position = vec4(p, 0.0, 1.0); }';

  var FS = [
    'precision mediump float;',
    'varying vec2 v;',
    'uniform sampler2D img; uniform vec2 size; uniform float pad;',
    'uniform float t; uniform float beat; uniform vec2 off; uniform float rot;',
    // bell centre + body axis (towards the tentacles) in painting pixels
    'const vec2 C = vec2(318.0, 78.0);',
    'const vec2 A = vec2(-0.348, 0.937);',
    'float squeeze(float tt){',
    '  float ph = fract(tt / beat);',
    '  if (ph < 0.26) return sin(ph / 0.26 * 1.5708);',
    '  return pow(1.0 - (ph - 0.26) / 0.74, 2.2);',
    '}',
    'void main(){',
    '  vec2 q = v - vec2(pad) - off;',
    // undo the body tilt around the bell
    '  vec2 dq = q - C; float cr = cos(rot), sr = sin(rot);',
    '  dq = vec2(cr * dq.x + sr * dq.y, -sr * dq.x + cr * dq.y);',
    '  vec2 N = vec2(A.y, -A.x);',
    '  float s = dot(dq, A);',                  // along the body (− = top of bell)
    '  float r = dot(dq, N);',                  // across the body
    '  float c = squeeze(t);',
    // bell: narrower + a little longer while squeezing, fading out below the rim
    '  float wb = 1.0 - smoothstep(55.0, 120.0, s);',
    '  float r2 = r / (1.0 - 0.15 * c * wb);',
    '  float s2 = s < 0.0 ? s / (1.0 + 0.07 * c * wb) : s;',
    // tentacles: the beat arrives later the further down; they stretch + kink,
    // and slow waves run root → tip all the time
    '  float wt = smoothstep(70.0, 170.0, s);',
    '  float d = max(s - 80.0, 0.0);',
    '  float cl = squeeze(t - 0.25 - d / 260.0);',
    '  s2 -= wt * cl * 0.10 * d;',
    '  float amp = wt * (3.0 + d * 0.045);',
    '  r2 += amp * sin(t * 2.1 - s * 0.034) + amp * 0.45 * sin(t * 3.3 - s * 0.071 + 1.7);',
    '  r2 += wt * cl * d * 0.035 * sin(s * 0.02 - 0.6);',
    '  vec2 src = C + A * s2 + N * r2;',
    '  vec2 uv = src / size;',
    '  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) { gl_FragColor = vec4(0.0); return; }',
    '  gl_FragColor = texture2D(img, uv);',
    '}'
  ].join('\n');

  function initGL() {
    if (gl || glFailed) return !!gl;
    try {
      glCanvas = document.createElement('canvas');
      gl = glCanvas.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false });
      if (!gl) throw new Error('no webgl');
      var sh = function (type, src) {
        var o = gl.createShader(type); gl.shaderSource(o, src); gl.compileShader(o);
        if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o));
        return o;
      };
      prog = gl.createProgram();
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS));
      gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error('link');
      gl.useProgram(prog);
      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      var loc = gl.getAttribLocation(prog, 'p');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      ['img', 'size', 'pad', 't', 'beat', 'off', 'rot', 'box'].forEach(function (n) { uni[n] = gl.getUniformLocation(prog, n); });
      var tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.uniform1i(uni.img, 0);
      gl.uniform2f(uni.size, IW, IH);
      gl.uniform1f(uni.pad, PAD);
      gl.uniform1f(uni.beat, BEAT);
      gl.uniform2f(uni.box, BW, BH);
      return true;
    } catch (e) {
      glFailed = true; gl = null;
      return false;
    }
  }

  // Body movement (in painting px): thrust along the axis while squeezing,
  // water drag, a soft pull back home, slow sinking and a gentle sway.
  function step(s, dt) {
    s.t += dt;
    var ph = (s.t % BEAT) / BEAT;
    if (ph < 0.26) { s.vx += 0.348 * 120 * dt; s.vy -= 0.937 * 120 * dt; }   // −axis = swim direction
    s.vy += 14 * dt;
    s.vx += -s.x * 1.2 * dt; s.vy += -s.y * 1.6 * dt;
    var drag = Math.pow(0.12, dt);
    s.vx *= drag; s.vy *= drag;
    s.x += s.vx * dt; s.y += s.vy * dt;
    s.rot = 0.07 * Math.sin(s.t * 0.33) + 0.03 * Math.sin(s.t * 0.81);
  }

  function render(s) {
    var cv = s.c, W = cv.clientWidth, H = cv.clientHeight;
    if (!W || !H) return;
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    var w = Math.round(W * dpr), h = Math.round(H * dpr);
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    if (glCanvas.width !== w || glCanvas.height !== h) { glCanvas.width = w; glCanvas.height = h; }
    gl.viewport(0, 0, w, h);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uni.t, s.t);
    gl.uniform2f(uni.off, s.x, s.y);
    gl.uniform1f(uni.rot, s.rot);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    var ctx = s.ctx;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(glCanvas, 0, 0);
  }

  function still(s) {               // no WebGL / reduced motion: the painting, unmoved
    var cv = s.c, W = cv.clientWidth, H = cv.clientHeight;
    if (!W || !H || !imgReady) return;
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    var k = cv.width / BW;
    s.ctx.drawImage(img, PAD * k, PAD * k, IW * k, IH * k);
  }

  function loop(now) {
    raf = null;
    var dt = Math.min(0.05, (now - (last || now)) / 1000); last = now;
    sims = sims.filter(function (s) { return s.c.isConnected; });
    if (!sims.length) { last = 0; return; }
    sims.forEach(function (s) {
      if (!s.c.offsetParent) return;           // on a hidden page → skip
      step(s, dt);
      render(s);
    });
    raf = requestAnimationFrame(loop);
  }

  function kick() {
    if (!imgReady) return;
    var useGL = !reduce && initGL();
    if (!useGL) { sims.forEach(still); return; }
    if (!raf) raf = requestAnimationFrame(loop);
  }

  return {
    // the canvas should keep the BW:BH (545:560) shape; CSS sizes it.
    attach: function (canvas) {
      sims.push({ c: canvas, ctx: canvas.getContext('2d'), t: Math.random() * BEAT, x: 0, y: 0, vx: 0, vy: 0, rot: 0 });
      kick();
    }
  };
})();
