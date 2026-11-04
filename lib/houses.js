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

