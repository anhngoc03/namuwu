/**
 * lib/houses.js — the AI parts of the Notes, Goals, Food & Gym and Law houses.
 * functions/api.js stores the data (supabase/houses.sql); this file only asks Claude.
 * Key: ANTHROPIC_API_KEY (Cloudflare → Settings → Variables and Secrets).
 */
import Anthropic from '@anthropic-ai/sdk';

const MODEL = 'claude-opus-5-5';
const LAW_SITES = ['vbpl.vn', 'baochinhphu.vn', 'thuvienphapluat.vn'];

function client(env) {
  if (!env.ANTHROPIC_API_KEY) throw new Error('Missing ANTHROPIC_API_KEY (Cloudflare → Settings → Variables and Secrets)');
  return new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
}
async function ask(env, prompt, { schema, effort = 'low', maxTokens = 12000, system } = {}) {
  const res = await client(env).beta.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    thinking: { type: 'adaptive' },
    output_config: Object.assign({ effort }, schema ? { format: { type: 'json_schema', schema } } : {}),
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: system || 'Bạn là trợ lý cá nhân dễ thương, trả lời bằng tiếng Việt, ngắn gọn, chính xác, không bịa.',
    messages: [{ role: 'user', content: prompt }]
  });
  if (res.stop_reason === 'refusal') throw new Error('The AI could not help with this one');
  if (res.stop_reason === 'max_tokens') throw new Error('The AI ran out of room — try a shorter request');
  const text = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
  if (!schema) return text.trim();
  try { return JSON.parse(text); } catch (e) { throw new Error('The AI reply was not readable — try again'); }
}

/* ---------- Notes: tidy a rough note ---------- */
export async function tidyNote(env, { field, title, body }) {
  const out = await ask(env, `Sắp xếp lại ghi chú này cho gọn gàng, dễ đọc lại sau này. Giữ nguyên mọi thông tin (số liệu, tên, link), không thêm thông tin mới, sửa lỗi chính tả.
Dùng "## " cho tiêu đề mục, "- " cho gạch đầu dòng, **chữ đậm** cho điều quan trọng. Nếu chưa có tiêu đề thì đặt một tiêu đề ngắn.

Lĩnh vực: ${field || '(chưa có)'}
Tiêu đề: ${title || '(chưa có)'}
Nội dung:
${String(body || '').slice(0, 20000)}`, {
    schema: { type: 'object', properties: { title: { type: 'string' }, body: { type: 'string' } }, required: ['title', 'body'], additionalProperties: false },
    effort: 'low'
  });
  return { title: String(out.title || title || '').slice(0, 200), body: String(out.body || '').slice(0, 40000) };
}

/* ---------- Food & Gym ---------- */
export async function healthPlan(env, profile, recent) {
  return ask(env, `Lập kế hoạch ăn uống + tập luyện cho 7 ngày tới, thực tế, dễ làm, món ăn Việt Nam dễ nấu/dễ mua.

Thông tin: ${JSON.stringify(profile)}
Nhật ký 2 tuần gần đây (tóm tắt): ${recent}

Gồm:
## Mục tiêu tuần (2-3 gạch)
## Ăn uống (mỗi ngày: sáng / trưa / tối / phụ, kèm kcal ước tính)
## Tập luyện (mỗi ngày: bài, thời gian, cường độ; có ngày nghỉ)
## Mẹo nhỏ
Định dạng: "## " tiêu đề, "- " gạch đầu dòng, **đậm**. Không dùng bảng. Nếu có dấu hiệu cần bác sĩ thì nhắc nhẹ.`, { effort: 'medium', maxTokens: 14000 });
}

/* ---------- Law: new documents from the three official sites (web search) ---------- */
export async function lawSearch(env, { scope, since, known }) {
  const what = scope === 'health'
    ? 'văn bản quy phạm pháp luật và văn bản hướng dẫn trong lĩnh vực Y TẾ (luật, nghị định, thông tư của Bộ Y tế, quyết định…)'
    : scope === 'law'
      ? 'các LUẬT, BỘ LUẬT mới được Quốc hội thông qua / ban hành, và luật sửa đổi bổ sung'
      : 'văn bản quy phạm pháp luật mới quan trọng (ưu tiên lĩnh vực y tế và các luật, bộ luật)';
  const sys = 'Bạn là trợ lý pháp lý. Chỉ dùng thông tin tìm được trên vbpl.vn, baochinhphu.vn, thuvienphapluat.vn. Không bịa số hiệu, ngày tháng hay tình trạng hiệu lực; trường nào không chắc thì để trống.';
  const messages = [{ role: 'user', content: `Tìm ${what} được ban hành hoặc có hiệu lực từ ngày ${since} đến nay.
Đã có sẵn (bỏ qua): ${known.slice(0, 80).join(', ') || '(chưa có)'}

Cuối cùng trả lời DUY NHẤT một mảng JSON (không markdown, không chữ nào khác), tối đa 12 phần tử, mỗi phần tử:
{"number":"số hiệu","title":"trích yếu","kind":"Luật|Bộ luật|Nghị định|Thông tư|Quyết định|…","issuer":"cơ quan ban hành","issued":"YYYY-MM-DD hoặc rỗng","effective":"YYYY-MM-DD hoặc rỗng","status":"còn hiệu lực|chưa có hiệu lực|hết hiệu lực một phần|…","field":"health|law|other","url":"link nguồn","summary":"2-3 câu: nội dung chính, ai bị ảnh hưởng"}` }];
  const tools = [{ type: 'web_search_20260209', name: 'web_search', max_uses: 6, allowed_domains: LAW_SITES }];
  let text = '';
  for (let round = 0; round < 5; round++) {
    const res = await client(env).beta.messages.create({
      model: MODEL, max_tokens: 16000, thinking: { type: 'adaptive' }, output_config: { effort: 'medium' },
      betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default', system: sys, tools, messages
    });
    messages.push({ role: 'assistant', content: res.content });
    text = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('') || text;
    if (res.stop_reason === 'pause_turn') continue;       // the search is still going
    if (res.stop_reason === 'refusal') throw new Error('The AI could not search this');
    break;
  }
  const a = text.indexOf('['), b = text.lastIndexOf(']');
  if (a < 0 || b < a) return [];
  let list;
  try { list = JSON.parse(text.slice(a, b + 1)); } catch (e) { return []; }
  const day = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(String(s || '')) ? s : null);
  return (Array.isArray(list) ? list : []).filter((d) => d && d.number && d.title).slice(0, 12).map((d) => ({
    number: String(d.number).trim().slice(0, 80), title: String(d.title).slice(0, 600), kind: String(d.kind || '').slice(0, 60),
    issuer: String(d.issuer || '').slice(0, 200), issued: day(d.issued), effective: day(d.effective), status: String(d.status || '').slice(0, 80),
    field: ['health', 'law', 'other'].includes(d.field) ? d.field : (scope === 'health' ? 'health' : scope === 'law' ? 'law' : 'other'),
    url: /^https:\/\/([a-z0-9-]+\.)*(vbpl\.vn|baochinhphu\.vn|thuvienphapluat\.vn)\//i.test(String(d.url || '')) ? String(d.url).slice(0, 500) : '',
    summary: String(d.summary || '').slice(0, 1200)
  }));
}
