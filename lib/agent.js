/**
 * lib/agent.js — the village's AI agent (Town Hall chat), run by functions/api.js
 * as action "agentChat" (Personal token required).
 * ------------------------------------------------------------------
 * - Claude reads and changes the existing Personal data through tools:
 *   Work, Expenses, Calendar, Home to-do. It uses the same functions the app
 *   uses, so rules (repeating tasks, budgets…) stay the same.
 * - Web search / fetch for questions that need fresh info (law: vbpl.vn,
 *   baochinhphu.vn, thuvienphapluat.vn first).
 * - Files sent in the chat go straight to Claude in that request and are NOT
 *   saved anywhere (no Supabase, no Drive). The conversation lives only in the
 *   open browser tab; locking Personal or reloading forgets it.
 * - Key: ANTHROPIC_API_KEY (Cloudflare → Settings → Variables and Secrets).
 * ------------------------------------------------------------------
 */
import Anthropic from '@anthropic-ai/sdk';

const MODEL = 'claude-opus-5-5';
const MAX_ROUNDS = 12;               // tool-use rounds per message
const MAX_FILE_BYTES = 15 * 1024 * 1024;

const SYSTEM = `Bạn là trợ lý cuộc sống của chủ nhân, sống ở "Town Hall" giữa một ngôi làng pixel nhỏ. Mỗi ngôi nhà trong làng là một mảng cuộc sống: Work (công việc), Money (chi tiêu), Calendar (lịch, ngày kỷ niệm, nhắc nhở), Account, Languages (tiếng Nhật + tiếng Anh), Skills, Law (pháp luật), Food & Gym, Notes, Love, Goals.

Cách làm việc:
- Trả lời bằng ngôn ngữ chủ nhân dùng (thường là tiếng Việt), ngắn gọn, thân thiện, dễ thương vừa phải. Không dùng bảng dài trừ khi được hỏi.
- Bạn được phép tự làm mọi việc với dữ liệu qua các tool: tạo/sửa/đổi trạng thái/xoá việc trong Work, thêm/xoá chi tiêu và thu nhập, thêm/sửa/xoá ghi chú lịch, thêm/tick to-do ở Home. Khi yêu cầu đã rõ thì cứ làm luôn, rồi nói ngắn gọn đã làm gì.
- Trước khi XOÁ thứ gì, hoặc khi có nhiều khả năng khác nhau (không rõ việc nào, danh mục nào, ngày nào), hỏi lại một câu ngắn. Đọc dữ liệu trước khi sửa để dùng đúng id.
- Ngày tháng theo giờ Việt Nam (mỗi tin nhắn có ghi thời điểm hiện tại). "Mai", "thứ 6 này"… thì tự quy ra YYYY-MM-DD. Tiền là VND.
- Nhắc việc: khi được hỏi hôm nay/tuần này có gì, xem Work (hạn của việc và của từng mục checklist), Calendar (remind, work, important, him, ngày lặp) và to-do Home, rồi tóm tắt việc trễ hạn và sắp tới hạn trước.
- Pháp luật: khi hỏi về văn bản quy phạm pháp luật, văn bản hướng dẫn (đặc biệt lĩnh vực y tế) hoặc các luật, bộ luật, ưu tiên tìm trên vbpl.vn, baochinhphu.vn, thuvienphapluat.vn. Luôn ghi số hiệu, ngày ban hành, ngày hiệu lực, tình trạng hiệu lực nếu tìm được, và dẫn link nguồn. Nếu không chắc văn bản còn hiệu lực thì nói rõ.
- Học ngoại ngữ / kỹ năng: dạy theo kiểu từng phần nhỏ, có ví dụ, có bài tập nhỏ khi hợp lý. Tiếng Nhật: ghi kanji kèm furigana (hiragana) và nghĩa tiếng Việt.
- Tài liệu chủ nhân gửi kèm chỉ để bạn tham khảo trong cuộc trò chuyện này; không lưu đi đâu cả.
- Không bịa dữ liệu. Nếu tool báo lỗi, nói rõ lỗi và gợi ý cách khác.`;

/* ---------------- tools ---------------- */
const TOOLS = [
  {
    name: 'get_work',
    description: 'Đọc dữ liệu Work: các nhóm (công việc/job) và các task. Trả về task chưa xong và tối đa 30 task đã xong gần nhất. Mỗi task: id, title, status (todo/doing/paused/done), priority (low/medium/high), due (YYYY-MM-DD), groupId, repeat, note, subtasks (checklist: text, done, due).',
    input_schema: { type: 'object', properties: {}, additionalProperties: false }
  },
  {
    name: 'save_work_task',
    description: 'Tạo task mới (không có id) hoặc sửa task có sẵn (có id — chỉ cần gửi các trường muốn đổi, phần còn lại giữ nguyên). Đặt status = "done" để đánh dấu xong (task lặp lại sẽ tự sinh lần kế tiếp). subtasks gửi lên sẽ THAY toàn bộ checklist cũ.',
    input_schema: {
      type: 'object',
      properties: {
        id: { type: 'integer', description: 'id task cần sửa; bỏ trống để tạo mới' },
        title: { type: 'string' },
        status: { type: 'string', enum: ['todo', 'doing', 'paused', 'done'] },
        priority: { type: 'string', enum: ['low', 'medium', 'high'] },
        due: { type: 'string', description: 'YYYY-MM-DD, hoặc chuỗi rỗng để bỏ hạn' },
        groupId: { type: ['integer', 'null'], description: 'id nhóm công việc (từ get_work)' },
        repeat: { type: 'string', enum: ['', 'daily', 'weekly', 'monthly'] },
        note: { type: 'string' },
        fee: { type: ['number', 'null'], description: 'thù lao/phí của việc (VND)' },
        subtasks: {
          type: 'array',
          items: {
            type: 'object',
            properties: { text: { type: 'string' }, done: { type: 'boolean' }, due: { type: 'string' } },
            required: ['text']
          }
        }
      },
      additionalProperties: false
    }
  },
  {
    name: 'delete_work_task',
    description: 'Xoá hẳn một task trong Work. Chỉ dùng khi chủ nhân đã đồng ý xoá.',
    input_schema: { type: 'object', properties: { id: { type: 'integer' } }, required: ['id'], additionalProperties: false }
  },
  {
    name: 'get_expenses',
    description: 'Đọc chi tiêu của một tháng: danh mục (id, name), nguồn tiền/ví (id, name, balance), các khoản chi (id, amount, categoryId, note, date, walletId), thu nhập, ngân sách theo danh mục, quỹ tiết kiệm.',
    input_schema: {
      type: 'object',
      properties: { period: { type: 'string', description: 'YYYY-MM; bỏ trống = tháng này' } },
      additionalProperties: false
    }
  },
  {
    name: 'add_expense',
    description: 'Ghi một khoản chi. Cần categoryId đúng (lấy từ get_expenses).',
    input_schema: {
      type: 'object',
      properties: {
        amount: { type: 'number', description: 'VND, số dương' },
        categoryId: { type: 'integer' },
        note: { type: 'string' },
        date: { type: 'string', description: 'YYYY-MM-DD' },
        walletId: { type: ['integer', 'null'], description: 'nguồn tiền; null = chưa phân loại' }
      },
      required: ['amount', 'categoryId', 'date'],
      additionalProperties: false
    }
  },
  {
    name: 'delete_expense',
    description: 'Xoá một khoản chi theo id. Chỉ dùng khi chủ nhân đã đồng ý.',
    input_schema: { type: 'object', properties: { id: { type: 'integer' } }, required: ['id'], additionalProperties: false }
  },
  {
    name: 'add_income',
    description: 'Ghi một khoản thu nhập.',
    input_schema: {
      type: 'object',
      properties: {
        amount: { type: 'number' },
        source: { type: 'string', description: 'nguồn thu, vd "Lương"' },
        date: { type: 'string', description: 'YYYY-MM-DD' },
        walletId: { type: ['integer', 'null'] }
      },
      required: ['amount', 'source', 'date'],
      additionalProperties: false
    }
  },
  {
    name: 'get_calendar',
    description: 'Đọc ghi chú lịch của một năm (đã trải ra các ngày lặp lại hằng tháng/hằng năm). Mỗi ghi chú: id, day, start (ngày gốc), kind (important/him/work/off/remind/other; "him" là ngày liên quan người yêu), note, repeat.',
    input_schema: { type: 'object', properties: { year: { type: 'integer' } }, additionalProperties: false }
  },
  {
    name: 'save_calendar_note',
    description: 'Tạo (không id) hoặc sửa (có id) ghi chú lịch. Với ghi chú lặp, day là ngày gốc (start).',
    input_schema: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        day: { type: 'string', description: 'YYYY-MM-DD' },
        kind: { type: 'string', enum: ['important', 'him', 'work', 'off', 'remind', 'other'] },
        note: { type: 'string' },
        repeat: { type: 'string', enum: ['', 'monthly', 'yearly'] }
      },
      required: ['day', 'kind', 'note'],
      additionalProperties: false
    }
  },
  {
    name: 'delete_calendar_note',
    description: 'Xoá ghi chú lịch theo id. Chỉ dùng khi chủ nhân đã đồng ý.',
    input_schema: { type: 'object', properties: { id: { type: 'integer' } }, required: ['id'], additionalProperties: false }
  },
  {
    name: 'get_home_todos',
    description: 'Đọc danh sách to-do nhanh ở trang Home (id, text, deadline, checked).',
    input_schema: { type: 'object', properties: {}, additionalProperties: false }
  },
  {
    name: 'add_home_todo',
    description: 'Thêm một to-do nhanh ở trang Home.',
    input_schema: {
      type: 'object',
      properties: { text: { type: 'string' }, deadline: { type: 'string', description: 'YYYY-MM-DD, có thể bỏ trống' } },
      required: ['text'],
      additionalProperties: false
    }
  },
  {
    name: 'check_home_todo',
    description: 'Tick (checked=true) hoặc bỏ tick một to-do ở Home.',
    input_schema: {
      type: 'object',
      properties: { id: { type: 'integer' }, checked: { type: 'boolean' } },
      required: ['id', 'checked'],
      additionalProperties: false
    }
  },
  { type: 'web_search_20260209', name: 'web_search', max_uses: 6 },
  { type: 'web_fetch_20260209', name: 'web_fetch', max_uses: 6 }
];

const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(String(s || ''));
const isPeriod = (s) => /^\d{4}-\d{2}$/.test(String(s || ''));
function need(cond, msg) { if (!cond) throw new Error(msg); }

function compactWork(d) {
  const open = d.tasks.filter((t) => t.status !== 'done');
  const done = d.tasks.filter((t) => t.status === 'done').slice(0, 30);
  const slim = (t) => ({
    id: t.id, title: t.title, status: t.status, priority: t.priority, due: t.due || '', groupId: t.groupId,
    repeat: t.repeat || '', note: (t.note || '').slice(0, 400), fee: t.fee,
    subtasks: (t.subtasks || []).map((x) => ({ text: x.text, done: !!x.done, due: x.due || '' }))
  });
  return { today: d.today, groups: d.groups, openTasks: open.map(slim), recentlyDone: done.map(slim) };
}
function compactExpenses(d) {
  return {
    period: d.period,
    categories: d.categories.map((c) => ({ id: c.id, name: c.name })),
    wallets: d.wallets.map((w) => ({ id: w.id, name: w.name, balance: w.balance })),
    walletTotal: d.walletTotal,
    entries: d.entries,
    spentTotal: d.entries.reduce((s, e) => s + e.amount, 0),
    income: d.incomeEntries,
    incomeTotal: d.income,
    budgetOverall: d.budgetOverall,
    categoryBudgets: d.categoryBudgets,
    savings: { name: d.savings.name, target: d.savings.target, balance: d.savings.balance }
  };
}

// Runs one tool. Returns { result, action } — action = short line shown in the chat.
async function runTool(env, api, name, input) {
  input = input || {};
  switch (name) {
    case 'get_work':
      return { result: compactWork(await api.getWorkData(env)) };
    case 'save_work_task': {
      let task = input;
      if (input.id) {
        const d = await api.getWorkData(env);
        const cur = d.tasks.find((t) => t.id === Number(input.id));
        need(cur, 'Không tìm thấy task id ' + input.id);
        task = Object.assign({}, cur, input);
      } else {
        need(String(input.title || '').trim(), 'Task mới cần title');
      }
      if (task.due && !isDate(task.due)) throw new Error('due phải là YYYY-MM-DD');
      const d = await api.saveWorkTask(env, [task]);
      const saved = input.id ? d.tasks.find((t) => t.id === Number(input.id)) : d.tasks.find((t) => t.title === String(task.title).trim());
      return {
        result: { ok: true, task: saved ? { id: saved.id, title: saved.title, status: saved.status, due: saved.due } : null },
        action: (input.id ? 'Updated task: ' : 'Added task: ') + String(task.title).trim()
      };
    }
    case 'delete_work_task': {
      const d0 = await api.getWorkData(env);
      const cur = d0.tasks.find((t) => t.id === Number(input.id));
      need(cur, 'Không tìm thấy task id ' + input.id);
      await api.deleteWorkTask(env, [Number(input.id)]);
      return { result: { ok: true }, action: 'Deleted task: ' + cur.title };
    }
    case 'get_expenses': {
      const p = isPeriod(input.period) ? input.period : undefined;
      return { result: compactExpenses(await api.getExpenseData(env, [p])) };
    }
    case 'add_expense': {
      need(Number(input.amount) > 0, 'amount phải > 0');
      need(isDate(input.date), 'date phải là YYYY-MM-DD');
      await api.addExpenseEntry(env, [Number(input.amount), Number(input.categoryId), String(input.note || ''), input.date, input.walletId == null ? null : Number(input.walletId)]);
      return { result: { ok: true }, action: 'Added expense: ' + Number(input.amount).toLocaleString('vi-VN') + 'đ' + (input.note ? ' · ' + input.note : '') };
    }
    case 'delete_expense': {
      await api.deleteExpenseEntry(env, [Number(input.id)]);
      return { result: { ok: true }, action: 'Deleted expense #' + Number(input.id) };
    }
    case 'add_income': {
      need(Number(input.amount) > 0, 'amount phải > 0');
      need(isDate(input.date), 'date phải là YYYY-MM-DD');
      await api.addExpenseIncomeEntry(env, [Number(input.amount), String(input.source || ''), input.date, input.walletId == null ? null : Number(input.walletId)]);
      return { result: { ok: true }, action: 'Added income: ' + Number(input.amount).toLocaleString('vi-VN') + 'đ · ' + input.source };
    }
    case 'get_calendar':
      return { result: await api.getCalendarNotes(env, [input.year]) };
    case 'save_calendar_note': {
      need(isDate(input.day), 'day phải là YYYY-MM-DD');
      await api.saveCalendarNote(env, [{ id: input.id, day: input.day, kind: input.kind, note: input.note, repeat: input.repeat || '', wasRepeat: !!input.id }]);
      return { result: { ok: true }, action: (input.id ? 'Updated' : 'Added') + ' calendar note ' + input.day + ': ' + input.note };
    }
    case 'delete_calendar_note': {
      await api.deleteCalendarNote(env, [Number(input.id)]);
      return { result: { ok: true }, action: 'Deleted calendar note #' + Number(input.id) };
    }
    case 'get_home_todos': {
      const rows = await api.getHomeData(env);
      return { result: rows.map((r) => ({ id: r.row, text: r.todolist, deadline: r.deadline, checked: r.checked })) };
    }
    case 'add_home_todo': {
      need(String(input.text || '').trim(), 'text trống');
      await api.addHomeItem(env, [String(input.text).trim(), isDate(input.deadline) ? input.deadline : '']);
      return { result: { ok: true }, action: 'Added to-do: ' + String(input.text).trim() };
    }
    case 'check_home_todo': {
      await api.toggleHomeCheck(env, [Number(input.id), !!input.checked]);
      return { result: { ok: true }, action: (input.checked ? 'Ticked' : 'Unticked') + ' to-do #' + Number(input.id) };
    }
    default:
      throw new Error('Unknown tool ' + name);
  }
}

/* ---------------- one chat turn ---------------- */
function vnStamp() {
  const d = new Date(Date.now() + 7 * 3600 * 1000);
  const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  return days[d.getUTCDay()] + ' ' + d.toISOString().slice(0, 10) + ' ' + d.toISOString().slice(11, 16) + ' (giờ Việt Nam)';
}

function fileBlock(f) {
  const type = String(f.type || '');
  const data = String(f.data || '');
  need(data.length * 0.75 <= MAX_FILE_BYTES, 'File "' + f.name + '" quá lớn (tối đa 15MB)');
  if (/^image\/(png|jpeg|gif|webp)$/.test(type)) {
    return { type: 'image', source: { type: 'base64', media_type: type, data: data } };
  }
  if (type === 'application/pdf') {
    return { type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: data }, title: String(f.name || 'file').slice(0, 200) };
  }
  // anything else is read as plain text
  let text;
  try { text = new TextDecoder().decode(Uint8Array.from(atob(data), (c) => c.charCodeAt(0))); }
  catch (e) { throw new Error('Không đọc được file "' + f.name + '"'); }
  return { type: 'document', source: { type: 'text', media_type: 'text/plain', data: text }, title: String(f.name || 'file').slice(0, 200) };
}

function cleanHistory(h) {
  if (!Array.isArray(h)) return [];
  return h.filter((m) => m && (m.role === 'user' || m.role === 'assistant') && (typeof m.content === 'string' || Array.isArray(m.content)));
}

// args: [history, text, files]  → { messages, reply, actions }
export async function agentChat(env, args, api) {
  if (!env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY is not set on the server');
  const [history, text, files] = args;
  const messages = cleanHistory(history);
  const content = [];
  (Array.isArray(files) ? files.slice(0, 10) : []).forEach((f) => content.push(fileBlock(f)));
  const ask = String(text || '').trim();
  need(ask || content.length, 'Tin nhắn trống');
  content.push({ type: 'text', text: '[' + vnStamp() + ']\n' + (ask || '(xem file đính kèm)') });
  messages.push({ role: 'user', content: content });

  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const actions = [];
  let reply = '';

  for (let round = 0; round < MAX_ROUNDS; round++) {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 16000,
      thinking: { type: 'adaptive' },
      output_config: { effort: 'medium' },
      cache_control: { type: 'ephemeral' },
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: SYSTEM,
      tools: TOOLS,
      messages: messages
    });
    messages.push({ role: 'assistant', content: response.content });
    const texts = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
    if (texts) reply = texts;

    if (response.stop_reason === 'refusal') { reply = reply || 'Xin lỗi, mình không trả lời được câu này.'; break; }
    if (response.stop_reason === 'pause_turn') continue;           // server tool still working
    if (response.stop_reason !== 'tool_use') {
      if (response.stop_reason === 'max_tokens') reply += '\n\n(…câu trả lời bị cắt vì quá dài)';
      break;
    }

    const results = [];
    for (const b of response.content) {
      if (b.type !== 'tool_use') continue;
      try {
        const r = await runTool(env, api, b.name, b.input);
        if (r.action) actions.push(r.action);
        results.push({ type: 'tool_result', tool_use_id: b.id, content: JSON.stringify(r.result).slice(0, 60000) });
      } catch (e) {
        results.push({ type: 'tool_result', tool_use_id: b.id, content: String((e && e.message) || e), is_error: true });
      }
    }
    messages.push({ role: 'user', content: results });
    if (round === MAX_ROUNDS - 1) reply = reply || '(Dừng lại vì làm quá nhiều bước — nhắn tiếp để mình làm nốt.)';
  }

  return { messages: messages, reply: reply, actions: actions };
}
