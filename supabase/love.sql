-- ============================================================
-- LOVE — album ảnh (chữ ở đây, ảnh nằm trên Google Drive)
-- Chạy 1 lần trong Supabase → SQL Editor → Run. Chạy lại cũng không sao.
-- Bảng bật Row-Level Security, không policy: chỉ server Cloudflare đọc/ghi được.
-- ============================================================

-- mỗi kỷ niệm: ngày, tỉnh/thành, nơi chốn, ghi chú, nhãn
create table if not exists public.love_memories (
  id         bigint generated always as identity primary key,
  day        date not null,
  province   text not null default '',
  place      text not null default '',
  note       text not null default '',
  tags       text[] not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists love_memories_day_idx on public.love_memories (day desc);
alter table public.love_memories enable row level security;

-- ảnh của kỷ niệm (file thật ở Google Drive, tên dạng yymmdd_<tỉnh>.jpg)
create table if not exists public.love_photos (
  id         bigint generated always as identity primary key,
  memory_id  bigint not null references public.love_memories(id) on delete cascade,
  drive_id   text not null unique,
  name       text not null default '',
  mime       text not null default 'image/jpeg',
  created_at timestamptz not null default now()
);
create index if not exists love_photos_memory_idx on public.love_photos (memory_id);
create index if not exists love_photos_name_idx on public.love_photos (name text_pattern_ops);
alter table public.love_photos enable row level security;
