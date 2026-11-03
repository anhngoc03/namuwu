-- ============================================================
-- STUDY — lộ trình học, bài học, bài tập, bài test (nhà Languages + Skills)
-- AI (Claude) soạn lộ trình / bài / câu hỏi và chấm bài; ở đây chỉ lưu chữ.
-- Chạy 1 lần trong Supabase → SQL Editor → Run. Chạy lại cũng không sao.
-- Bảng bật Row-Level Security, không policy: chỉ server Cloudflare đọc/ghi được.
-- ============================================================

-- một lộ trình: học gì, trình độ, mục tiêu, bao lâu
create table if not exists public.study_plans (
  id              bigint generated always as identity primary key,
  house           text not null default 'language',     -- language | skills
  subject         text not null,                         -- vd. "Tiếng Nhật JLPT N3"
  level           text not null default '',              -- trình độ hiện tại
  goal            text not null default '',              -- muốn đạt được gì
  minutes_per_day int  not null default 30,
  days_per_week   int  not null default 5,
  weeks           int  not null default 8,
  start_date      date not null default current_date,
  notes           text not null default '',
  summary         text not null default '',              -- AI tóm tắt lộ trình
  status          text not null default 'active',        -- active | paused | done
  created_at      timestamptz not null default now()
);
alter table public.study_plans enable row level security;

-- từng bài trong lộ trình (nội dung bài do AI soạn khi mở lần đầu)
create table if not exists public.study_lessons (
  id         bigint generated always as identity primary key,
  plan_id    bigint not null references public.study_plans(id) on delete cascade,
  week       int  not null default 1,
  seq        int  not null default 1,                   -- thứ tự trong cả lộ trình
  day        date,                                      -- ngày dự kiến học
  title      text not null default '',
  goal       text not null default '',
  content    text not null default '',                  -- bài giảng (markdown nhẹ)
  done       boolean not null default false,
  done_at    timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists study_lessons_plan_idx on public.study_lessons (plan_id, seq);
create index if not exists study_lessons_day_idx on public.study_lessons (day);
alter table public.study_lessons enable row level security;

-- bài tập (theo bài) / bài test (theo tuần, cả lộ trình) / ôn câu sai
create table if not exists public.study_tests (
  id           bigint generated always as identity primary key,
  plan_id      bigint not null references public.study_plans(id) on delete cascade,
  lesson_id    bigint references public.study_lessons(id) on delete set null,
  kind         text not null default 'exercise',        -- exercise | test | review
  title        text not null default '',
  questions    jsonb not null default '[]',             -- [{type, q, options, answer, explain, points}]
  answers      jsonb,                                   -- câu trả lời của bạn
  results      jsonb,                                   -- [{correct, score, comment}]
  score        numeric,
  max_score    numeric,
  feedback     text not null default '',
  created_at   timestamptz not null default now(),
  submitted_at timestamptz
);
create index if not exists study_tests_plan_idx on public.study_tests (plan_id, created_at desc);
alter table public.study_tests enable row level security;
