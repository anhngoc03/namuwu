-- Love › Fund: what the two of them spend from their shared fund, day by day (amount only).
-- The fund's monthly amount lives in app_settings (key 'love_fund'); nothing else is needed.
-- Run once in Supabase → SQL Editor. Safe to run again.
create table if not exists public.love_fund_spend (
  id          bigint generated always as identity primary key,
  day         date not null,
  amount      bigint not null check (amount > 0),
  created_at  timestamptz not null default now()
);
alter table public.love_fund_spend enable row level security;
create index if not exists love_fund_spend_day_idx on public.love_fund_spend (day);
