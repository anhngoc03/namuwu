-- ============================================================
-- NOTES · GOALS · FOOD & GYM · LAW — the rest of the village houses
-- Chạy 1 lần trong Supabase → SQL Editor → Run. Chạy lại cũng không sao.
-- Bảng bật Row-Level Security, không policy: chỉ server Cloudflare đọc/ghi được.
-- ============================================================

-- Notes: ghi chú theo từng lĩnh vực (tự đặt tên lĩnh vực)
create table if not exists public.notes (
  id         bigint generated always as identity primary key,
  field      text not null default 'General',
  title      text not null default '',
  body       text not null default '',
  pinned     boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists notes_field_idx on public.notes (field, updated_at desc);
alter table public.notes enable row level security;

-- Goals: mục tiêu theo năm, chi phí cần / đã để dành, các bước
create table if not exists public.goals (
  id            bigint generated always as identity primary key,
  year          int  not null default extract(year from now())::int,
  title         text not null,
  area          text not null default '',        -- vd. Sức khoẻ, Học tập, Tài chính
  why           text not null default '',
  deadline      date,
  target_amount numeric not null default 0,      -- chi phí cần (VND)
  saved_amount  numeric not null default 0,      -- đã để dành / đã chi
  status        text not null default 'active',  -- active | done | dropped
  steps         jsonb not null default '[]',     -- [{text, done, due}]
  created_at    timestamptz not null default now()
);
create index if not exists goals_year_idx on public.goals (year);
alter table public.goals enable row level security;

-- Food & Gym: nhật ký ăn uống, tập luyện, cân nặng, nước
create table if not exists public.health_logs (
  id         bigint generated always as identity primary key,
  day        date not null default current_date,
  kind       text not null,                      -- meal | workout | weight | water
  title      text not null default '',
  kcal       int,                                -- meal: năng lượng; workout: đốt được (ước tính)
  minutes    int,                                -- workout
  value      numeric,                            -- weight: kg; water: ml
  note       text not null default '',
  created_at timestamptz not null default now()
);
create index if not exists health_logs_day_idx on public.health_logs (day);
alter table public.health_logs enable row level security;

-- Law: văn bản pháp luật mới (vbpl.vn, baochinhphu.vn, thuvienphapluat.vn) — chỉ lưu thông tin + tóm tắt
create table if not exists public.law_docs (
  id         bigint generated always as identity primary key,
  number     text not null unique,               -- số hiệu, vd. 15/2023/QH15
  title      text not null default '',
  kind       text not null default '',           -- Luật, Bộ luật, Nghị định, Thông tư, Quyết định…
  issuer     text not null default '',
  issued     date,
  effective  date,
  status     text not null default '',           -- còn hiệu lực / chưa có hiệu lực / hết hiệu lực…
  field      text not null default 'other',      -- health | law | other
  url        text not null default '',
  summary    text not null default '',
  is_read    boolean not null default false,
  starred    boolean not null default false,
  found_at   timestamptz not null default now()
);
create index if not exists law_docs_found_idx on public.law_docs (found_at desc);
alter table public.law_docs enable row level security;
