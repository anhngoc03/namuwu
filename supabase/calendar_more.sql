-- ============================================================
-- CALENDAR: thêm mark "Him" + lặp lại hằng tháng / hằng năm
-- Chạy 1 lần trong Supabase → SQL Editor → Run (SAU khi đã chạy posts_calendar.sql).
-- Chạy lại cũng không sao.
-- ============================================================

alter table public.calendar_notes drop constraint if exists calendar_notes_kind_check;
alter table public.calendar_notes add constraint calendar_notes_kind_check
  check (kind in ('important','him','work','off','remind','other'));

-- '' = không lặp, 'monthly' = mỗi tháng (cùng ngày), 'yearly' = mỗi năm (cùng ngày/tháng)
alter table public.calendar_notes add column if not exists repeat text not null default '';
alter table public.calendar_notes drop constraint if exists calendar_notes_repeat_check;
alter table public.calendar_notes add constraint calendar_notes_repeat_check
  check (repeat in ('','monthly','yearly'));
