/**
 * lib/food.js — Love › "order food": Claude draws the dish as a small, cute SVG
 * (pastel, on a plate or in a bowl), so any dish typed in gets its own picture.
 * Used by functions/api.js (action drawLoveFood, Personal token required).
 * Key: ANTHROPIC_API_KEY (Cloudflare → Settings → Variables and Secrets).
 */
import Anthropic from '@anthropic-ai/sdk';

const MODEL = 'claude-opus-5-5';
const MAX_SVG = 40000;

const PROMPT = (dish) => `Draw the dish "${dish}" as one small, cute illustration.

Rules:
- Reply with ONLY one SVG element: <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"> … </svg>. No markdown, no words before or after.
- Seen from above at a slight angle, served the way it is really served (a plate, a bowl, a cup, a basket…), filling most of the square, centred, on a transparent background.
- Kawaii, soft and round, pastel colours with gentle shading (simple linear/radial gradients are fine), a thin darker outline; it must still look like the real dish so it can be recognised (its typical ingredients, colours and garnish).
- No text, no letters, no faces on the food, no <image>, no <script>, no <foreignObject>, no external links, no CSS @import.
- Keep it under 6 KB: a few dozen simple shapes.`;

// keep only a plain, safe <svg>: no scripts, handlers, outside links or embedded documents
export function cleanSvg(text) {
  let s = String(text || '');
  const a = s.indexOf('<svg'), b = s.lastIndexOf('</svg>');
  if (a < 0 || b < a) throw new Error('No picture came back');
  s = s.slice(a, b + 6);
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, '')
    .replace(/<(image|iframe|object|embed|use)\b[^>]*>/gi, '')
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s(xlink:)?href\s*=\s*("(?!#)[^"]*"|'(?!#)[^']*')/gi, '')
    .replace(/@import[^;]*;?/gi, '')
    .replace(/url\(\s*['"]?(?!#)[^)]*\)/gi, 'none');
  if (!/^<svg[^>]*\bwidth=/.test(s)) s = s.replace(/^<svg/, '<svg width="256" height="256"');
  if (!/^<svg[^>]*xmlns=/.test(s)) s = s.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  if (s.length > MAX_SVG) throw new Error('The drawing came out too big');
  return s;
}

export async function drawFood(env, dish) {
  if (!env.ANTHROPIC_API_KEY) throw new Error('Missing ANTHROPIC_API_KEY (Cloudflare → Settings → Variables and Secrets)');
  dish = String(dish || '').trim().slice(0, 60);
  if (!dish) throw new Error('Type a dish first');
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const res = await client.beta.messages.create({
    model: MODEL,
    max_tokens: 12000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'low' },
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    messages: [{ role: 'user', content: PROMPT(dish) }]
  });
  const text = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
  const svg = cleanSvg(text);
  // base64 (UTF-8 safe) so it can be used straight as an <img> / texture source
  const bytes = new TextEncoder().encode(svg);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return { name: dish, img: 'data:image/svg+xml;base64,' + btoa(bin) };
}
