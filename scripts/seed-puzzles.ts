// Upserts every puzzle from src/app/data into the Supabase `puzzles` table.
//
//   SUPABASE_URL=https://<ref>.supabase.co SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-puzzles.ts
//   node scripts/seed-puzzles.ts --dry-run      (validates and prints, writes nothing)
//
// Needs the service role key, because the table has no public write policy. That key bypasses Row Level
// Security, so it only ever lives in your shell or in the SUPABASE_SERVICE_ROLE_KEY repo secret used by
// .github/workflows/seed-puzzles.yml, never in the app. Node 22.18+ runs this TypeScript file directly.
import { createClient } from '@supabase/supabase-js';
import { toRows } from '../src/app/data/rows.ts';
import { puzzles } from '../src/app/data/shared/puzzles.ts';
import { puzzles as en } from '../src/app/data/locales/en/puzzles.ts';
import { puzzles as nl } from '../src/app/data/locales/nl/puzzles.ts';

const dryRun = process.argv.includes('--dry-run');
const rows = toRows(puzzles, en, nl);

// the database checks these too, but failing here gives a readable message
const dates = new Set<string>();
for (const r of rows) {
  if (r.clues_en.length !== 6 || r.clues_nl.length !== 6) throw new Error(`Puzzle #${r.id} needs six clues in both languages`);
  if (dates.has(r.date)) throw new Error(`Two puzzles on ${r.date}`);
  dates.add(r.date);
}

console.log(`${rows.length} puzzles, ${rows[0]?.date} to ${rows.at(-1)?.date}`);
if (dryRun) {
  for (const r of rows) console.log(`#${r.id} ${r.date} ${r.answer} (${r.category})`);
  process.exit(0);
}

const url = process.env['SUPABASE_URL'];
const key = process.env['SUPABASE_SERVICE_ROLE_KEY'];
if (!url || !key) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or use --dry-run).');
  process.exit(1);
}

/** Refuses the public anon/publishable key: with it every write would be rejected by RLS anyway. */
function isServiceKey(k: string): boolean {
  if (k.startsWith('sb_secret_')) return true;
  if (k.startsWith('sb_publishable_')) return false;
  try {
    const payload = JSON.parse(Buffer.from(k.split('.')[1] ?? '', 'base64url').toString('utf8')) as { role?: string };
    return payload.role === 'service_role';
  } catch {
    return false;
  }
}
if (!isServiceKey(key)) {
  console.error('SUPABASE_SERVICE_ROLE_KEY is not a service role (secret) key.');
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
const { error } = await supabase.from('puzzles').upsert(rows, { onConflict: 'id' });
if (error) {
  console.error(`Seeding failed: ${error.message}`);
  process.exit(1);
}
console.log(`Upserted ${rows.length} puzzles.`);
