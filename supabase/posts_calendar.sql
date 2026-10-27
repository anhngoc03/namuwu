-- ============================================================
-- POSTS (trong Work, cho công việc bật "Có mục Posts" — vd KOC) + CALENDAR
-- Chạy 1 lần trong Supabase → SQL Editor → Run (SAU khi đã chạy work.sql).
-- Chạy lại cũng không sao. Bảng mới đều bật Row-Level Security.
-- ============================================================

-- công tắc "Có mục Posts" cho từng công việc (nhóm) của Work
alter table public.work_groups add column if not exists has_posts boolean not null default false;

-- bài đăng (lưu sẵn để đăng dần)
create table if not exists public.posts (
  id             bigserial primary key,
  group_id       bigint references public.work_groups(id) on delete set null,
  product        text not null default '',
  tag            text not null default '',
  caption        text not null default '',
  links          jsonb not null default '[]'::jsonb,
  note           text not null default '',
  status         text not null default 'draft' check (status in ('draft','scheduled','posted')),
  scheduled_date date,
  scheduled_time text,                -- 'HH:MM' giờ Việt Nam
  posted_at      timestamptz,
  created_at     timestamptz not null default now()
);

-- cài đặt nhỏ (vd khung giờ đăng bài)
create table if not exists public.app_settings (
  key   text primary key,
  value jsonb not null default '{}'::jsonb
);

-- Calendar: ghi chú / đánh dấu theo ngày (1 ngày nhiều ghi chú)
create table if not exists public.calendar_notes (
  id         bigserial primary key,
  day        date not null,
  kind       text not null default 'other' check (kind in ('important','work','off','remind','other')),
  note       text not null default '',
  created_at timestamptz not null default now()
);
create index if not exists calendar_notes_day_idx on public.calendar_notes (day);

alter table public.posts          enable row level security;
alter table public.app_settings   enable row level security;
alter table public.calendar_notes enable row level security;
