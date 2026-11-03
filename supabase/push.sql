-- ============================================================
-- REMINDERS (thông báo đẩy trên điện thoại)
-- Chạy 1 lần trong Supabase → SQL Editor → Run. Chạy lại cũng không sao.
-- Bảng mới đều bật Row-Level Security, không policy: chỉ server Cloudflare
-- (service key) đọc/ghi được.
-- ============================================================

-- cài đặt nhỏ (đã có nếu từng chạy posts_calendar.sql) — giờ nhắc + khoá VAPID nằm ở đây
create table if not exists public.app_settings (
  key   text primary key,
  value jsonb not null default '{}'::jsonb
);
alter table public.app_settings enable row level security;

-- mỗi máy (điện thoại / máy tính) đã bật thông báo
create table if not exists public.push_subscriptions (
  id         bigint generated always as identity primary key,
  endpoint   text not null unique,
  p256dh     text not null,
  auth       text not null,
  label      text not null default '',
  created_at timestamptz not null default now()
);
alter table public.push_subscriptions enable row level security;

-- đã gửi nhắc nào hôm nay (vd 'morning:2026-11-03') → không gửi trùng
create table if not exists public.push_log (
  key     text primary key,
  sent_at timestamptz not null default now()
);
create index if not exists push_log_sent_at_idx on public.push_log (sent_at);
alter table public.push_log enable row level security;

-- Hẹn giờ: cứ 5 phút gọi /api một lần để server xem có gì cần nhắc.
-- (Nếu web có tên miền khác namuwu.pages.dev thì sửa URL bên dưới.)
create extension if not exists pg_cron;
create extension if not exists pg_net with schema extensions;

select cron.schedule(
  'namuwu-reminders',
  '*/5 * * * *',
  $$
  select net.http_post(
    url     := 'https://namuwu.pages.dev/api',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body    := '{"action": "runReminders", "args": []}'::jsonb
  );
  $$
);

-- Xem lịch đã tạo:      select * from cron.job;
-- Xem các lần đã chạy:  select * from cron.job_run_details order by start_time desc limit 10;
-- Tắt hẳn nhắc giờ:     select cron.unschedule('namuwu-reminders');
