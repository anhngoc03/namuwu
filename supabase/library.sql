-- Library: the documents you hand over (laws, study books, notes…), split into sections,
-- so the Town Hall can search inside them. Searching costs nothing (no AI) — it's Postgres full-text.
-- Run once in Supabase → SQL Editor. Safe to run again.

create table if not exists public.library_docs (
  id          bigint generated always as identity primary key,
  title       text not null,
  kind        text not null default 'other',        -- law | study | note | other
  source      text not null default '',             -- where it came from (file name, link…)
  meta        jsonb not null default '{}'::jsonb,   -- e.g. số hiệu, ngày ban hành for a law
  sections    int not null default 0,
  created_at  timestamptz not null default now()
);
alter table public.library_docs enable row level security;

create table if not exists public.library_chunks (
  id       bigint generated always as identity primary key,
  doc_id   bigint not null references public.library_docs(id) on delete cascade,
  idx      int not null default 0,                  -- order inside the document
  heading  text not null default '',                -- Điều 5 / Chương 2 / Bài 3…
  body     text not null default '',
  plain    text not null default '',                -- the same text, lower case, no Vietnamese accents (for searching)
  tsv      tsvector generated always as (to_tsvector('simple', plain)) stored
);
alter table public.library_chunks enable row level security;

create index if not exists library_chunks_tsv_idx on public.library_chunks using gin (tsv);
create index if not exists library_chunks_doc_idx on public.library_chunks (doc_id, idx);
