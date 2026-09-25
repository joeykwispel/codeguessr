import { readFileSync, readdirSync } from 'node:fs';
import { PGlite } from '@electric-sql/pglite';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

/**
 * Runs the real migrations on an in-memory Postgres (PGlite) with a minimal stand-in for Supabase's auth schema,
 * then acts as different users through the same roles and JWT claim Supabase uses. This proves the RLS policies,
 * not a mock of them.
 */

const ALICE = '11111111-1111-4111-8111-111111111111';
const BOB = '22222222-2222-4222-8222-222222222222';

let db: PGlite;

/** Runs `sql` as the given Postgres role, with `sub` as the JWT subject (what auth.uid() returns). */
async function as(role: 'anon' | 'authenticated', sub: string | null, sql: string, params: unknown[] = []) {
  await db.exec('begin');
  try {
    await db.query(`select set_config('request.jwt.claim.sub', $1, true)`, [sub ?? '']);
    await db.exec(`set local role ${role}`);
    const result = await db.query<Record<string, unknown>>(sql, params);
    await db.exec('commit');
    return result;
  } catch (e) {
    await db.exec('rollback');
    throw e;
  }
}

beforeAll(async () => {
  db = new PGlite();
  // What Supabase provides out of the box: roles, the auth schema and auth.uid()
  await db.exec(`
    create role anon nologin;
    create role authenticated nologin;
    create schema auth;
    create table auth.users (id uuid primary key, email text);
    create function auth.uid() returns uuid language sql stable as $$
      select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid
    $$;
    grant usage on schema auth to anon, authenticated;
    grant execute on function auth.uid() to anon, authenticated;
    grant usage on schema public to anon, authenticated;
    -- Supabase grants everything on public tables to these roles by default; RLS has to do the protecting.
    alter default privileges in schema public grant all on tables to anon, authenticated;
  `);
  const dir = new URL('./migrations/', import.meta.url);
  for (const file of readdirSync(dir).sort()) await db.exec(readFileSync(new URL(file, dir), 'utf8'));
  await db.exec(`insert into auth.users (id, email) values ('${ALICE}', 'alice@example.com'), ('${BOB}', 'bob@example.com')`);
  await db.exec(`insert into public.user_stats (user_id, streak, max_streak, games_played, games_won) values ('${BOB}', 4, 7, 20, 15)`);
  await db.exec(`
    insert into public.puzzles (id, date, answer, clues_en, clues_nl, fun_fact_en, fun_fact_nl, category) values
      (1, '2000-01-01', 'Past', '{a,b,c,d,e,f}', '{a,b,c,d,e,f}', 'x', 'y', 'tool'),
      (2, '2999-01-01', 'Future', '{a,b,c,d,e,f}', '{a,b,c,d,e,f}', 'x', 'y', 'tool')
  `);
});

afterAll(async () => {
  await db?.close();
});

describe('user_stats RLS', () => {
  it('a user can create and read their own row', async () => {
    await as('authenticated', ALICE, `insert into public.user_stats (user_id, games_played) values ($1, 3)`, [ALICE]);
    const { rows } = await as('authenticated', ALICE, `select user_id, games_played from public.user_stats`);
    expect(rows).toEqual([{ user_id: ALICE, games_played: 3 }]);
  });

  it("a user cannot read another user's row", async () => {
    const { rows } = await as('authenticated', ALICE, `select * from public.user_stats where user_id = $1`, [BOB]);
    expect(rows).toEqual([]);
  });

  it("a user cannot update another user's row", async () => {
    const { affectedRows } = await as('authenticated', ALICE, `update public.user_stats set games_played = 0 where user_id = $1`, [BOB]);
    expect(affectedRows).toBe(0);
    const { rows } = await db.query<{ games_played: number }>(`select games_played from public.user_stats where user_id = $1`, [BOB]);
    expect(rows[0]?.games_played).toBe(20);
  });

  it('a user cannot move their own row to another user', async () => {
    await expect(as('authenticated', ALICE, `update public.user_stats set user_id = $1 where user_id = $2`, [BOB, ALICE])).rejects.toThrow();
  });

  it('a user cannot insert a row for another user', async () => {
    await expect(as('authenticated', BOB, `insert into public.user_stats (user_id) values ($1)`, [ALICE])).rejects.toThrow(/row-level security/);
  });

  it('upserting over another user’s row is rejected', async () => {
    await expect(
      as(
        'authenticated',
        ALICE,
        `insert into public.user_stats (user_id, games_played) values ($1, 99) on conflict (user_id) do update set games_played = 99`,
        [BOB]
      )
    ).rejects.toThrow();
    const { rows } = await db.query<{ games_played: number }>(`select games_played from public.user_stats where user_id = $1`, [BOB]);
    expect(rows[0]?.games_played).toBe(20);
  });

  it('nobody can delete rows through the API roles', async () => {
    await expect(as('authenticated', ALICE, `delete from public.user_stats where user_id = $1`, [ALICE])).rejects.toThrow(/permission denied/);
  });

  it('anonymous visitors cannot read or write stats at all', async () => {
    await expect(as('anon', null, `select * from public.user_stats`)).rejects.toThrow(/permission denied/);
    await expect(as('anon', null, `insert into public.user_stats (user_id) values ($1)`, [ALICE])).rejects.toThrow(/permission denied/);
  });

  it('a user without a JWT subject sees nothing', async () => {
    const { rows } = await as('authenticated', null, `select * from public.user_stats`);
    expect(rows).toEqual([]);
  });

  it('the database enforces sane values', async () => {
    await expect(as('authenticated', ALICE, `update public.user_stats set games_won = 10 where user_id = $1`, [ALICE])).rejects.toThrow(/check constraint/);
  });
});

describe('puzzles RLS', () => {
  it('anyone can read puzzles up to today, but not future ones', async () => {
    const { rows } = await as('anon', null, `select answer from public.puzzles order by id`);
    expect(rows).toEqual([{ answer: 'Past' }]);
  });

  it('nobody can write puzzles with the anon or authenticated role', async () => {
    await expect(as('anon', null, `update public.puzzles set answer = 'Hacked'`)).rejects.toThrow(/permission denied/);
    await expect(as('authenticated', ALICE, `delete from public.puzzles`)).rejects.toThrow(/permission denied/);
    await expect(
      as(
        'authenticated',
        ALICE,
        `insert into public.puzzles (id, date, answer, clues_en, clues_nl, fun_fact_en, fun_fact_nl, category) values (3, '2001-01-01', 'X', '{a,b,c,d,e,f}', '{a,b,c,d,e,f}', 'x', 'y', 'tool')`
      )
    ).rejects.toThrow(/permission denied/);
  });
});
