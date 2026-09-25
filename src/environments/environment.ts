/**
 * Public, build-time configuration. Everything here ships to the browser.
 *
 * The Supabase anon key is safe to expose: it only grants what the Row Level Security policies allow
 * (read published puzzles, read/write your own stats row). The service role key must never appear here;
 * it only lives in the SUPABASE_SERVICE_ROLE_KEY repo secret used by scripts/seed-puzzles.ts.
 *
 * Leave supabaseUrl empty to run fully offline: puzzles come from the bundled snapshot and sign-in is hidden.
 */
export const environment = {
  siteUrl: 'https://codeguessr.joeyoosenbrug.nl',
  supabaseUrl: 'https://onnbzdrtdpyatfhzkghj.supabase.co',
  supabaseAnonKey: 'sb_publishable_8nJ8d9Xct4EUJnU3LmEnAA_7iQfAtVb'
};
