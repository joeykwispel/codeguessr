-- Per-user stats for signed-in players (optional cross-device sync). One row per user.
-- Row Level Security is the only write protection: a user can select, insert and update only their own row.
-- Nothing else about the user is stored; name, email and avatar stay in auth.users (from Google OAuth).

create table if not exists public.user_stats (
  user_id uuid primary key references auth.users (id) on delete cascade,
  streak integer not null default 0 check (streak >= 0),
  max_streak integer not null default 0 check (max_streak >= streak),
  last_played_date date,
  games_played integer not null default 0 check (games_played >= 0),
  games_won integer not null default 0 check (games_won between 0 and games_played),
  guess_distribution integer[] not null default '{0,0,0,0,0,0}' check (array_length(guess_distribution, 1) = 6),
  updated_at timestamptz not null default now()
);

alter table public.user_stats enable row level security;

-- (select auth.uid()) is evaluated once per query instead of once per row (Supabase performance advice).
drop policy if exists "read own stats" on public.user_stats;
create policy "read own stats"
  on public.user_stats
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "insert own stats" on public.user_stats;
create policy "insert own stats"
  on public.user_stats
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "update own stats" on public.user_stats;
create policy "update own stats"
  on public.user_stats
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- No delete policy: rows go away with the auth user (on delete cascade).
-- Anonymous visitors get no access at all, even if a permissive policy were added by mistake.
revoke all on public.user_stats from anon;
revoke delete, truncate on public.user_stats from authenticated;
grant select, insert, update on public.user_stats to authenticated;

-- Keep updated_at honest regardless of what the client sends.
create or replace function public.touch_user_stats()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists user_stats_touch on public.user_stats;
create trigger user_stats_touch
  before insert or update on public.user_stats
  for each row execute function public.touch_user_stats();
