# Study roadmap file (`namuwu-study/1`)

A roadmap file holds everything the Languages / Skills houses need — the plan, every lesson
already written, the exercises and the tests **with their answers** — so the website only
stores it and marks your answers itself. The website itself never calls an AI (no API cost).

Make the file in any chat with Claude (send your book / documents, paste the prompt below),
then in the village: Languages or Skills → **Import roadmap** → choose the `.json` file.

## Shape

```json
{
  "format": "namuwu-study/1",
  "house": "language",
  "subject": "Tiếng Nhật JLPT N4",
  "level": "đã xong N5",
  "goal": "thi N4 tháng 7",
  "weeks": 8,
  "daysPerWeek": 5,
  "minutesPerDay": 30,
  "startDate": "2026-11-10",
  "summary": "2–4 câu về lộ trình",
  "notes": "nguồn: Minna no Nihongo II, bài 26–35",
  "lessons": [
    {
      "week": 1,
      "title": "Thể て + います",
      "goal": "Nói được việc đang làm",
      "day": "2026-11-10",
      "content": "## Ý chính\n- ...\n## Ví dụ\n- 勉強(べんきょう)しています — đang học\n## Đáp án\n- ...",
      "exercise": {
        "title": "Thể て",
        "questions": [
          { "type": "mcq", "q": "「たべる」→ thể て?", "options": ["たべて", "たべって", "たべいて", "たべんで"], "answer": "たべて", "explain": "Động từ nhóm 2: bỏ る + て", "points": 1 },
          { "type": "short", "q": "Viết thể て của 「のむ」", "answer": "のんで", "accept": ["nonde"], "points": 1 },
          { "type": "write", "q": "Viết 2 câu nói bạn đang làm gì", "answer": "いま、にほんごを べんきょうしています。…", "points": 3 }
        ]
      }
    }
  ],
  "tests": [
    { "week": 1, "title": "Ôn tuần 1", "questions": [ ] },
    { "title": "Thi thử cuối khoá", "questions": [ ] }
  ]
}
```

### Fields

| Field | Needed | Notes |
|---|---|---|
| `house` | – | `language` or `skills` (default: the house you import into) |
| `subject` | ✓ | name of the roadmap |
| `weeks`, `daysPerWeek`, `minutesPerDay`, `startDate` | – | `startDate` is `YYYY-MM-DD`; lesson days are spread over the weeks if a lesson has no `day` |
| `lessons[]` | ✓ | in order; `week`, `title`, `goal`, `content`, optional `day`, optional `exercise` |
| `lessons[].content` | – | the lesson text. Formatting: `## ` headings, `- ` lists, `**bold**`, new lines. No tables. |
| `tests[]` | – | `week` = a week test (shows on that week); no `week` = a final / big test |

### Questions

| `type` | Marked how | Fields |
|---|---|---|
| `mcq` | automatically | `options` (2–8), `answer` = the right option, exactly as written (or its index `"0"`, `"1"`…) |
| `short` | automatically | `answer`, plus `accept` = other answers that also count. Case, spaces and punctuation are ignored. |
| `write` | you compare with the model answer and tap ✓ / ✗ | `answer` = model answer or what a good answer should have |

All types: `q` (the question), `explain` (shown after handing in), `points` (mcq/short 1, write 2–5).
Anything you get wrong goes into **🔁 Review mistakes**, and every test has **↺ Do it again**.

## Prompt to paste into a chat (with your documents attached)

> Dựa vào tài liệu mình gửi, hãy tạo một file JSON đúng định dạng `namuwu-study/1` (mô tả bên dưới)
> cho lộ trình học **[môn / mục tiêu]**, trình độ hiện tại **[...]**, **[số tuần]** tuần, **[số buổi]** buổi/tuần,
> mỗi buổi **[số phút]** phút, bắt đầu **[YYYY-MM-DD]**, `house` là `"language"` (hoặc `"skills"`).
> - Mỗi bài: `content` là bài giảng đầy đủ bám theo tài liệu (ý chính, giải thích + ví dụ, mẹo nhớ, tự luyện có đáp án),
>   tiếng Nhật thì kanji kèm cách đọc trong ngoặc, tiếng Anh có IPA.
> - Mỗi bài có `exercise` 5–8 câu (chủ yếu `mcq` và `short`, 1 câu `write`), có `answer`, `accept`, `explain`.
> - Mỗi tuần 1 bài test trong `tests` (có `week`), cuối khoá 1 bài thi thử (không có `week`).
> - Chỉ trả về JSON hợp lệ, không chú thích. Nếu dài quá thì chia nhiều phần, mình sẽ ghép.
>
> (dán phần "Shape" và các bảng ở trên vào sau câu này)
