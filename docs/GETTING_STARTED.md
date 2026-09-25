# Getting started

## Requirements

- [Node.js](https://nodejs.org) 22.18 or newer (24 recommended; CI uses 24). The seed script is TypeScript that Node runs directly.
- npm (comes with Node)
- For end-to-end tests: `npx playwright install chromium` once, or set `PW_CHANNEL=chrome` to use your installed Chrome

## Run it locally

```bash
git clone https://github.com/joeykwispel/codeguessr.git
cd codeguessr
npm install
npm start
```

Open http://localhost:4200. Without Supabase settings the app runs fully offline: puzzles come from the bundled snapshot and the sign-in button is hidden. That is enough for everything except sign-in.

## Scripts

| Command                            | What it does                                                                                                                 |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `npm start`                        | Dev server with hot reload                                                                                                   |
| `npm run build`                    | Production build into `dist/codeguessr/browser` (prerender + postbuild: CSP hashes, `404.html`, sitemap)                     |
| `npm run build:e2e`                | Same build, pointed at a fake Supabase project (`src/environments/environment.e2e.ts`) that the Playwright tests answer      |
| `npm run preview`                  | Serve the build like GitHub Pages does (`/path/` → `index.html`, unknown paths → `404.html`) on http://localhost:4173        |
| `npm run check`                    | Type-check the app with strict templates, the tests and the scripts                                                          |
| `npm run lint`                     | Prettier + ESLint                                                                                                            |
| `npm run format`                   | Format everything with Prettier                                                                                              |
| `npm run test:unit`                | Vitest through `ng test`, then the Row Level Security tests (`vitest.db.config.ts`)                                          |
| `npm run test:e2e`                 | Playwright + axe against the build (run `npm run build:e2e` first)                                                           |
| `node scripts/seed-puzzles.ts`     | Upsert all puzzles into Supabase (see below); `--dry-run` only validates and lists them                                      |
| `node scripts/generate-images.mjs` | Re-render the PWA icons and `public/og.png` from `public/favicon.svg` (set `PW_CHANNEL=chrome` if Playwright has no browser) |

## Environment variables

| Where                                      | Name                        | Secret? | Used for                                                                      |
| ------------------------------------------ | --------------------------- | ------- | ----------------------------------------------------------------------------- |
| `src/environments/environment.ts`          | `supabaseUrl`               | no      | The app's Supabase project URL                                                |
| `src/environments/environment.ts`          | `supabaseAnonKey`           | no      | The public anon / publishable key. Safe to commit: RLS decides what it can do |
| Shell, or repo **variable** `SUPABASE_URL` | `SUPABASE_URL`              | no      | `scripts/seed-puzzles.ts`                                                     |
| Shell, or repo **secret**                  | `SUPABASE_SERVICE_ROLE_KEY` | **yes** | `scripts/seed-puzzles.ts` only. It bypasses RLS: never put it in the app      |

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com) (the free tier is plenty).
2. **Tables and policies.** Open the SQL editor and run the two files in `supabase/migrations/` in order (or use `supabase db push` with the Supabase CLI). They create:
   - `puzzles`: readable by everyone up to today (UTC), no public writes.
   - `user_stats`: one row per signed-in user; a user can only select, insert and update their own row.
3. **Keys.** Project Settings → API. Put the project URL and the anon (or publishable) key in `src/environments/environment.ts`. Keep the service role (secret) key for seeding only.
4. **Seed the puzzles.**

   ```bash
   SUPABASE_URL=https://<ref>.supabase.co SUPABASE_SERVICE_ROLE_KEY=<service role key> node scripts/seed-puzzles.ts
   ```

   Or in GitHub: add the variable `SUPABASE_URL` and the secret `SUPABASE_SERVICE_ROLE_KEY` to an environment called `supabase` (Settings → Environments), then run **Actions → Seed puzzles**. The script refuses a key that isn't a service role key.

5. **Google sign-in** (skip this if you don't want accounts; see "Running without sign-in" below).
   1. In [Google Cloud Console](https://console.cloud.google.com/apis/credentials), create an OAuth client of type _Web application_. Set up the consent screen with just the default scopes (`email`, `profile`, `openid`).
   2. Authorized redirect URI: `https://<ref>.supabase.co/auth/v1/callback`.
   3. In Supabase: Authentication → Providers → Google → enable, paste the client ID and secret.
   4. Authentication → URL Configuration: Site URL `https://codeguessr.joeyoosenbrug.nl`, and add these redirect URLs:
      `https://codeguessr.joeyoosenbrug.nl/**` and `http://localhost:4200/**`.

The Content Security Policy already allows `https://*.supabase.co` (and `wss://` for realtime). If you use a custom Supabase domain, add it to `connect-src` in `scripts/postbuild.mjs`.

## Running without sign-in

Local stats are the default path; cloud sync is a thin layer on top. To drop accounts completely:

1. Delete `src/app/core/auth.service.ts`, `src/app/core/cloud-sync.service.ts`, `src/app/features/auth/` and `e2e/auth.spec.ts`.
2. Remove the `auth.init()` / `sync.init()` lines in `src/app/app.ts`, `<app-auth-button />` in the header, and the `auth` line in the stats dialog note.
3. Skip `supabase/migrations/…_user_stats.sql` (and its tests in `supabase/rls.test.ts`).

Puzzles still come from Supabase, and stats stay in localStorage.

## Deploying (GitHub Pages)

1. Repo Settings → Pages → Source: **GitHub Actions**. Custom domain: `codeguessr.joeyoosenbrug.nl` (`public/CNAME` already contains it; the base href is `/`).
2. DNS at your domain provider: add a **CNAME** record `codeguessr` → `joeykwispel.github.io` (your `<github-username>.github.io`).
3. Wait for the DNS check in the Pages settings to pass, then tick **Enforce HTTPS**.
4. Merge to `main`: `.github/workflows/deploy.yml` lints, checks, tests, builds and deploys. Pull requests run `.github/workflows/pr-check.yml` (lint, check, unit, e2e + axe, Lighthouse) without deploying.

## Adding a puzzle

See [Adding a puzzle](../README.md#adding-a-puzzle) in the README. In short: `data/shared/puzzles.ts` for the structure, `data/locales/en|nl/puzzles.ts` for the text, then run the seed workflow.

## Project structure

```
src/
  index.html              theme + language inline script (hashed into the CSP at build time)
  styles.css              design tokens (light/dark), fonts, shared building blocks
  environments/           public config (Supabase URL + anon key), e2e variant
  app/
    app.routes.ts         / and /nl, each with '', archive, archive/:date
    app.routes.server.ts  which routes are prerendered
    core/                 framework-free rules (game, guess, stats, merge, share, dates) + services
    data/                 all content; see the README
    features/             play, archive, stats, auth
    shared/components/    header, footer, icon, countdown
supabase/                 migrations and RLS tests
scripts/                  build and maintenance scripts
e2e/                      Playwright tests
```
