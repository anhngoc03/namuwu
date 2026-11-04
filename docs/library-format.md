# Library file (`namuwu-library/1`)

The Town Hall searches inside documents you imported — the full text of laws,
books, course notes… Importing and searching are plain database work: **no AI, no API cost**.

You don't write these files by hand: send the documents (PDF, Word, text, photos of pages) to Claude in a
chat and ask for a `namuwu-library/1` file. Then in the village: Town Hall → **Import file**. The same document imported again replaces the old copy (matched by `title`).

Needs `supabase/library.sql` run once in Supabase.

## Shape

```json
{
  "format": "namuwu-library/1",
  "docs": [
    {
      "title": "Luật Khám bệnh, chữa bệnh 2023",
      "kind": "law",
      "source": "15/2023/QH15.pdf",
      "meta": {
        "number": "15/2023/QH15",
        "type": "Luật",
        "issuer": "Quốc hội",
        "issued": "2023-01-09",
        "effective": "2024-01-01",
        "status": "còn hiệu lực",
        "field": "health",
        "url": "https://…",
        "summary": "2–3 câu tóm tắt"
      },
      "sections": [
        { "heading": "Chương I. Những quy định chung", "text": "…" },
        { "heading": "Điều 1. Phạm vi điều chỉnh", "text": "Luật này quy định…" },
        { "heading": "Điều 2. Giải thích từ ngữ", "text": "1. Khám bệnh là…\n2. Chữa bệnh là…" }
      ]
    },
    {
      "title": "Minna no Nihongo I — Bài 1",
      "kind": "study",
      "source": "minna1.pdf",
      "sections": [ { "heading": "Từ vựng", "text": "わたし — tôi\n…" }, { "heading": "Ngữ pháp", "text": "…" } ]
    }
  ]
}
```

| Field | Notes |
|---|---|
| `title` | required; the same title again replaces that document |
| `kind` | `law` · `study` · `note` · `other` (the filter chips in Search files) |
| `source` | file name or link, for your reference |
| `meta` | anything; for a **law**, `number` (+ `type`, `issuer`, `issued`, `effective` as `YYYY-MM-DD`, `status`, `field` = `health`/`law`/`other`, `url`, `summary`) also puts it on the **Law** house's list |
| `sections` | the text, in order. One section per Điều / bài / mục works best — search results point at a section. Long sections are split automatically (~1500 characters) under the same heading. |

Text is kept exactly as written (with accents). Searching ignores accents and capitals, so
`kham benh` finds “khám bệnh”; every word you type must appear in the part.
