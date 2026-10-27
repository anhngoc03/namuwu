-- ============================================================
-- WORK (Personal) — chạy 1 lần trong Supabase → SQL Editor → Run.
-- Tạo 2 bảng mới và bật Row-Level Security (không policy nào: chỉ server
-- Cloudflare dùng service key mới đọc/ghi được, khoá công khai bị chặn).
-- Chạy lại cũng không sao (IF NOT EXISTS).
-- ============================================================

create table if not exists public.work_groups (
  id          bigserial primary key,
  name        text not null,
  created_at  timestamptz not null default now()
);

create table if not exists public.work_tasks (
  id               bigserial primary key,
  title            text not null,
  group_id         bigint references public.work_groups(id) on delete set null,
  status           text not null default 'todo'   check (status in ('todo','doing','paused','done')),
  priority         text not null default 'medium' check (priority in ('low','medium','high')),
  due_date         date,
  note             text not null default '',
  fee              numeric,
  repeat_every     text check (repeat_every in ('daily','weekly','monthly')),
  subtasks         jsonb not null default '[]'::jsonb,
  time_spent       integer not null default 0,      -- giây, cộng dồn từ nút bấm giờ
  timer_started_at timestamptz,                     -- khác null = đang bấm giờ
  done_at          timestamptz,
  created_at       timestamptz not null default now()
);

alter table public.work_groups enable row level security;
alter table public.work_tasks  enable row level security;
