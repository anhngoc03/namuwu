/**
 * lib/study.js — the Study houses (Languages, Skills): Claude plans a roadmap,
 * writes each lesson when it's first opened, makes exercises / tests, and marks
 * the answers. functions/api.js stores everything in Supabase (supabase/study.sql).
 * Key: ANTHROPIC_API_KEY (Cloudflare → Settings → Variables and Secrets).
 */
import Anthropic from '@anthropic-ai/sdk';

const MODEL = 'claude-opus-5-5';

const TEACHER = `Bạn là gia sư riêng, dạy bằng tiếng Việt (trừ khi môn học là ngoại ngữ thì dùng ngôn ngữ đó cho ví dụ).
- Giải thích ngắn gọn, dễ hiểu, có ví dụ thực tế; chia nhỏ, đi từ dễ đến khó.
- Tiếng Nhật: kanji luôn kèm cách đọc trong ngoặc, ví dụ 勉強(べんきょう), và nghĩa tiếng Việt. Có romaji khi người học mới bắt đầu.
- Tiếng Anh: có phiên âm IPA cho từ mới, ví dụ câu, và nghĩa tiếng Việt.
- Không bịa thông tin; nếu kiến thức có thể đã thay đổi (luật, quy định, phần mềm) thì nói rõ.`;

function client(env) {
  if (!env.ANTHROPIC_API_KEY) throw new Error('Missing ANTHROPIC_API_KEY (Cloudflare → Settings → Variables and Secrets)');
  return new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
}
// one call; with a schema the reply is JSON that matches it
async function ask(env, prompt, { schema, effort = 'medium', maxTokens = 16000 } = {}) {
  const res = await client(env).beta.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    thinking: { type: 'adaptive' },
    output_config: Object.assign({ effort }, schema ? { format: { type: 'json_schema', schema } } : {}),
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: TEACHER,
    messages: [{ role: 'user', content: prompt }]
  });
  if (res.stop_reason === 'refusal') throw new Error('The AI could not help with this one');
  if (res.stop_reason === 'max_tokens') throw new Error('The AI ran out of room — try a smaller request');
  const text = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
  if (!schema) return text.trim();
  try { return JSON.parse(text); } catch (e) { throw new Error('The AI reply was not readable — try again'); }
}

const planInfo = (p) => `Môn: ${p.subject}
Trình độ hiện tại: ${p.level || '(không nói)'}
Mục tiêu: ${p.goal || '(không nói)'}
Thời gian: ${p.weeks} tuần, ${p.days_per_week} buổi/tuần, mỗi buổi khoảng ${p.minutes_per_day} phút
Ghi chú của người học: ${p.notes || '(không có)'}`;

/* ---------- the roadmap: one line per lesson, grouped by week ---------- */
const ROADMAP_SCHEMA = {
  type: 'object',
  properties: {
    summary: { type: 'string', description: '2-4 câu: lộ trình đi từ đâu đến đâu, cách học hiệu quả' },
    lessons: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          week: { type: 'integer' },
          title: { type: 'string', description: 'tên bài ngắn gọn' },
          goal: { type: 'string', description: 'một câu: học xong bài này làm được gì' }
        },
        required: ['week', 'title', 'goal'],
        additionalProperties: false
      }
    }
  },
  required: ['summary', 'lessons'],
  additionalProperties: false
};
export async function makeRoadmap(env, plan) {
  const n = Math.min(80, plan.weeks * plan.days_per_week);
  const out = await ask(env, `Lập lộ trình học cho người này.

${planInfo(plan)}

Yêu cầu:
- Đúng ${n} bài, chia đều cho ${plan.weeks} tuần (${plan.days_per_week} bài mỗi tuần, ghi số tuần 1..${plan.weeks}).
- Mỗi bài vừa sức ${plan.minutes_per_day} phút. Bài cuối mỗi tuần nên là ôn tập nhẹ.
- Thứ tự hợp lý, bài sau dựa trên bài trước, bám sát mục tiêu.`, { schema: ROADMAP_SCHEMA, effort: 'medium' });
  const lessons = (out.lessons || []).filter((l) => l && l.title).slice(0, n).map((l, i) => ({
    week: Math.max(1, Math.min(plan.weeks, Number(l.week) || 1)), seq: i + 1,
    title: String(l.title).slice(0, 200), goal: String(l.goal || '').slice(0, 400)
  }));
  if (!lessons.length) throw new Error('The AI did not make a roadmap — try again');
  return { summary: String(out.summary || '').slice(0, 1500), lessons };
}

/* ---------- a lesson, written the first time it's opened ---------- */
export async function writeLesson(env, plan, lesson, before) {
  return ask(env, `Soạn bài học số ${lesson.seq} (tuần ${lesson.week}) trong lộ trình sau.

${planInfo(plan)}

Bài: ${lesson.title}
Mục tiêu bài: ${lesson.goal}
Các bài đã học trước: ${before.length ? before.join('; ') : '(đây là bài đầu tiên)'}

Viết bài giảng vừa ${plan.minutes_per_day} phút, gồm:
1. Ý chính (ngắn gọn)
2. Giải thích + ví dụ
3. Mẹo nhớ / lỗi hay gặp
4. Tự luyện nhanh: 3 câu hỏi nhỏ (đáp án để ở cuối, mục "Đáp án")

Định dạng: chỉ dùng "## " cho tiêu đề mục, "- " cho gạch đầu dòng, **chữ đậm**, xuống dòng bình thường. Không dùng bảng, không dùng code block.`, { effort: 'medium', maxTokens: 12000 });
}

/* ---------- exercises / tests ---------- */
const Q_SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    questions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['mcq', 'short', 'write'], description: 'mcq = trắc nghiệm, short = điền/trả lời ngắn, write = viết câu/đoạn' },
          q: { type: 'string', description: 'câu hỏi' },
          options: { type: 'array', items: { type: 'string' }, description: '4 lựa chọn cho mcq; [] cho loại khác' },
          answer: { type: 'string', description: 'mcq: chép đúng nguyên văn lựa chọn đúng; short: đáp án mẫu; write: bài mẫu / tiêu chí' },
          explain: { type: 'string', description: 'giải thích ngắn vì sao' },
          points: { type: 'integer', description: 'điểm của câu: mcq/short 1, write 2-5' }
        },
        required: ['type', 'q', 'options', 'answer', 'explain', 'points'],
        additionalProperties: false
      }
    }
  },
  required: ['title', 'questions'],
  additionalProperties: false
};
export async function makeQuestions(env, plan, { kind, lessons, mistakes, count }) {
  const what = kind === 'review'
    ? `Bài ÔN LẠI CÂU SAI: làm câu mới cùng dạng, cùng kiến thức với các câu người học đã làm sai dưới đây (không chép y nguyên):\n${mistakes.map((m, i) => `${i + 1}. ${m.q} — đáp án đúng: ${m.answer}`).join('\n')}`
    : kind === 'test'
      ? `BÀI TEST tổng hợp các bài sau (trộn đủ dạng, có vài câu khó hơn một chút):\n${lessons.map((l) => '- ' + l.title + ': ' + l.goal).join('\n')}`
      : `BÀI TẬP cho bài vừa học:\n- ${lessons[0].title}: ${lessons[0].goal}\n${lessons[0].content ? '\nNội dung bài:\n' + lessons[0].content.slice(0, 6000) : ''}`;
  const out = await ask(env, `${planInfo(plan)}

Hãy ra ${count} câu hỏi.
${what}

Yêu cầu:
- Trộn dạng: phần lớn mcq và short (chấm được ngay), ${kind === 'exercise' ? 'có thể 1' : '1-2'} câu write.
- Câu mcq có đúng 4 lựa chọn, chỉ 1 đúng, "answer" chép nguyên văn lựa chọn đúng.
- Câu short có 1 đáp án rõ ràng, ngắn.
- Vừa trình độ người học.`, { schema: Q_SCHEMA, effort: 'medium' });
  const qs = (out.questions || []).filter((q) => q && q.q).slice(0, 40).map((q) => ({
    type: ['mcq', 'short', 'write'].includes(q.type) ? q.type : 'short',
    q: String(q.q).slice(0, 2000),
    options: q.type === 'mcq' ? (q.options || []).map(String).slice(0, 6) : [],
    answer: String(q.answer || '').slice(0, 2000),
    explain: String(q.explain || '').slice(0, 1500),
    points: Math.max(1, Math.min(5, Number(q.points) || 1))
  }));
  if (!qs.length) throw new Error('The AI did not make any questions — try again');
  return { title: String(out.title || '').slice(0, 200), questions: qs };
}

/* ---------- marking: multiple choice here, the rest by Claude ---------- */
const GRADE_SCHEMA = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          i: { type: 'integer', description: 'số thứ tự câu (bắt đầu từ 0)' },
          score: { type: 'number', description: 'điểm đạt được, từ 0 đến điểm tối đa của câu' },
          comment: { type: 'string', description: 'nhận xét ngắn, chỉ ra lỗi và cách sửa' }
        },
        required: ['i', 'score', 'comment'],
        additionalProperties: false
      }
    },
    feedback: { type: 'string', description: '2-4 câu nhận xét chung + nên ôn gì' }
  },
  required: ['results', 'feedback'],
  additionalProperties: false
};
const norm = (s) => String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
export async function gradeAnswers(env, plan, questions, answers) {
  const results = questions.map((q, i) => {
    const a = answers[i];
    if (q.type === 'mcq') {
      const ok = norm(a) === norm(q.answer);
      return { correct: ok, score: ok ? q.points : 0, comment: '' };
    }
    if (q.type === 'short' && norm(a) && norm(a) === norm(q.answer)) return { correct: true, score: q.points, comment: '' };
    if (!norm(a)) return { correct: false, score: 0, comment: 'Chưa trả lời' };
    return null;                                     // Claude marks it
  });
  const todo = questions.map((q, i) => i).filter((i) => !results[i]);
  let feedback = '';
  if (todo.length || questions.length) {
    const out = await ask(env, `${planInfo(plan)}

Chấm bài cho người học. Những câu cần chấm (short: chấp nhận cách viết khác nhưng đúng nghĩa; write: chấm theo đáp án mẫu/tiêu chí, cho điểm từng phần):
${todo.map((i) => `#${i} [${questions[i].type}, tối đa ${questions[i].points} điểm]
Câu hỏi: ${questions[i].q}
Đáp án mẫu: ${questions[i].answer}
Bài làm: ${String(answers[i] || '').slice(0, 3000)}`).join('\n\n') || '(không có câu cần chấm tay)'}

Kết quả các câu trắc nghiệm: ${questions.map((q, i) => (q.type === 'mcq' ? `#${i} ${results[i].correct ? 'đúng' : 'sai'}` : null)).filter(Boolean).join(', ') || '(không có)'}

Trả về điểm + nhận xét cho từng câu cần chấm, và một nhận xét chung cho cả bài.`, { schema: GRADE_SCHEMA, effort: 'medium' });
    (out.results || []).forEach((r) => {
      const i = Number(r.i);
      if (!todo.includes(i)) return;
      const max = questions[i].points, sc = Math.max(0, Math.min(max, Number(r.score) || 0));
      results[i] = { correct: sc >= max * 0.99, score: sc, comment: String(r.comment || '').slice(0, 1500) };
    });
    feedback = String(out.feedback || '').slice(0, 2000);
  }
  todo.forEach((i) => { if (!results[i]) results[i] = { correct: false, score: 0, comment: '' }; });
  const score = results.reduce((s, r) => s + r.score, 0), max = questions.reduce((s, q) => s + q.points, 0);
  return { results, score: Math.round(score * 10) / 10, max, feedback };
}
