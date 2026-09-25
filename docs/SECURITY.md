# Security review

What Codeguessr stores, who can reach it, and how that is enforced and tested. Reviewed for the first release (September 2026).

## What ships to the browser

- The Supabase project URL and the **anon / publishable key**. These are public by design: every request made with them is limited by Row Level Security (RLS).
- Never the **service role key**. It bypasses RLS and is only used by `scripts/seed-puzzles.ts`, from a shell or from the `SUPABASE_SERVICE_ROLE_KEY` secret in the `supabase` GitHub environment. The script refuses to run with a public key, and `.env*` files are git-ignored.

## Data

| Data                        | Where                        | Who can read          | Who can write                    |
| --------------------------- | ---------------------------- | --------------------- | -------------------------------- |
| Puzzles                     | `public.puzzles`             | everyone, up to today | only the service role (seeding)  |
| Stats of a signed-in player | `public.user_stats`, one row | that player           | that player (insert/update only) |
| Google identity             | `auth.users` (Supabase Auth) | that player           | Supabase Auth                    |
| Anonymous stats and games   | the player's localStorage    | that browser          | that browser                     |

Nothing beyond what Google OAuth provides (id, email, name, avatar URL) is stored about a player, and those stay in `auth.users`; `user_stats` holds only numbers and a date. Deleting the auth user deletes the stats row (`on delete cascade`).

## RLS policies ([`supabase/migrations`](../supabase/migrations))

**`puzzles`**

- RLS on. One `select` policy for `anon` and `authenticated`: `date <= (now() at time zone 'utc')::date`, so future puzzles (and their answers) can't be fetched from the API before their day.
- No insert/update/delete policies, **and** those privileges are revoked from `anon` and `authenticated`. A permissive policy added by mistake later still couldn't open writes.
- Check constraints: six clues per language, a known category.

Note: the bundled offline snapshot contains every puzzle, including future ones. That is a deliberate trade-off for offline play in a game that runs entirely in the browser; it is no worse than the answer being in the JavaScript once the puzzle loads.

**`user_stats`**

- RLS on. Separate `select`, `insert` and `update` policies for `authenticated`, all with `(select auth.uid()) = user_id`; `update` has the same `with check`, so a row can't be moved to another user.
- No delete policy, and `delete`/`truncate` revoked. `anon` has no privileges at all.
- Check constraints keep values consistent (`games_won <= games_played`, `max_streak >= streak`, six distribution buckets), and a trigger sets `updated_at` server-side.

## How it is tested

[`supabase/rls.test.ts`](../supabase/rls.test.ts) runs both migrations on an in-memory Postgres (PGlite) with a minimal copy of Supabase's `auth` schema, roles and `auth.uid()`, and grants everything on public tables to `anon`/`authenticated` like Supabase does, so only the policies protect the data. It then acts as two users and anonymous visitors and proves that:

- a user can create and read their own row, but cannot read, update, upsert over or insert another user's row, or move their row to someone else;
- nobody can delete stats through the API roles, and anonymous visitors can't touch stats at all;
- a request without a user id sees nothing;
- future puzzles are hidden, and nobody but the service role can write puzzles.

These run in CI on every pull request (`npm run test:unit`).

## Browser-side protections

- **Content Security Policy** as a `<meta>` tag on every page: `default-src 'self'`, scripts only from the site plus a sha256 hash per inline script (computed by `scripts/postbuild.mjs`, which also fails the build on inline event handlers), `connect-src` limited to the site and `*.supabase.co`, `object-src 'none'`, `base-uri 'self'`, `form-action 'none'`. `style-src` allows `'unsafe-inline'` because Angular injects component styles at runtime. A meta-tag CSP can't set `frame-ancestors`; GitHub Pages can't send headers.
- **OAuth** uses the authorization code flow with PKCE. The redirect only goes to URLs on the Supabase allow list.
- No cookies of our own and no analytics. The Supabase session lives in localStorage, where it is exposed to any script on the page; the strict CSP is what keeps foreign scripts out.

## Things to keep in mind

- Adding a column or table: turn RLS on in the same migration, and add a test for it in `supabase/rls.test.ts`.
- Rotating keys: the anon key only needs a rebuild and deploy; rotate the service role key in the GitHub environment secret.
- If Supabase realtime is ever used for `user_stats`, realtime respects RLS, but check the publication only includes what's needed.
