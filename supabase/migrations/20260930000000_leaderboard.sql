-- Leaderboard: opt-in only. A signed-in player joins by choosing a nickname; nothing from Google is ever shown.
-- The public can only call public.leaderboard(), which returns nicknames and numbers, never user ids.

create table if not exists public.leaderboard_profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  -- 2 to 20 ASCII letters, digits, spaces, dots, dashes and underscores; no leading or trailing space
  nickname text not null check (nickname ~ '^[A-Za-z0-9._-][A-Za-z0-9 ._-]{0,18}[A-Za-z0-9._-]$'),
  created_at timestamptz not null default now()
);

-- Nicknames are unique regardless of case.
create unique index if not exists leaderboard_profiles_nickname_key on public.leaderboard_profiles (lower(nickname));

alter table public.leaderboard_profiles enable row level security;

drop policy if exists "read own profile" on public.leaderboard_profiles;
create policy "read own profile"
  on public.leaderboard_profiles
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "insert own profile" on public.leaderboard_profiles;
create policy "insert own profile"
  on public.leaderboard_profiles
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "update own profile" on public.leaderboard_profiles;
create policy "update own profile"
  on public.leaderboard_profiles
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- Leaving the leaderboard deletes the row.
drop policy if exists "delete own profile" on public.leaderboard_profiles;
create policy "delete own profile"
  on public.leaderboard_profiles
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);

revoke all on public.leaderboard_profiles from anon;
revoke truncate on public.leaderboard_profiles from authenticated;
grant select, insert, update, delete on public.leaderboard_profiles to authenticated;

-- The top players for one metric: 'played' (games played), 'streak' (longest streak) or 'wins' (games won).
-- Runs as its owner so it can join the two tables, and only ever returns nickname + value.
-- Stats are written by the players' own browsers, so values are capped at the number of daily puzzles
-- released so far: nobody can rank with more games than there have been days.
create or replace function public.leaderboard(metric text, max_rows integer default 50)
returns table (rank integer, nickname text, value integer)
language sql
stable
security definer
set search_path = ''
as $$
  with days as (
    select greatest(((now() at time zone 'utc')::date - date '2026-09-21') + 1, 0) as n
  ),
  scored as (
    select
      p.nickname,
      least(
        case metric
          when 'played' then s.games_played
          when 'streak' then s.max_streak
          when 'wins' then s.games_won
        end,
        (select n from days)
      )::integer as value,
      p.created_at
    from public.leaderboard_profiles p
    join public.user_stats s on s.user_id = p.user_id
    where metric in ('played', 'streak', 'wins')
  )
  select (rank() over (order by value desc))::integer, nickname, value
  from scored
  where value > 0
  order by value desc, created_at, nickname
  limit least(greatest(coalesce(max_rows, 50), 1), 100);
$$;

revoke all on function public.leaderboard(text, integer) from public;
grant execute on function public.leaderboard(text, integer) to anon, authenticated;
