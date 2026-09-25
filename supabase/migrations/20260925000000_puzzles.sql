-- Puzzles: one row per UTC day. Public read access through the anon key, no public writes.
-- Rows are written only by scripts/seed-puzzles.ts with the service role key (which bypasses RLS).

create table if not exists public.puzzles (
  id integer primary key check (id > 0),
  date date not null unique,
  answer text not null check (length(answer) between 1 and 60),
  aliases text[] not null default '{}',
  clues_en text[] not null check (array_length(clues_en, 1) = 6),
  clues_nl text[] not null check (array_length(clues_nl, 1) = 6),
  fun_fact_en text not null,
  fun_fact_nl text not null,
  category text not null check (category in ('language', 'framework', 'library', 'tool', 'protocol', 'database', 'platform', 'concept'))
);

alter table public.puzzles enable row level security;

-- Anyone may read puzzles up to and including today (UTC). Future puzzles stay hidden until their day.
drop policy if exists "puzzles are readable up to today" on public.puzzles;
create policy "puzzles are readable up to today"
  on public.puzzles
  for select
  to anon, authenticated
  using (date <= (now() at time zone 'utc')::date);

-- No insert/update/delete policies: with RLS on, those are denied for anon and authenticated.
-- Revoking the grants as well means a mistaken future policy still can't open up writes.
revoke insert, update, delete, truncate on public.puzzles from anon, authenticated;
grant select on public.puzzles to anon, authenticated;
