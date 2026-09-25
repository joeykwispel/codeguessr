/**
 * Used by `npm run build:e2e`: a fake Supabase project, so the end-to-end tests can exercise sign-in and sync.
 * Every request to it is intercepted and answered by the Playwright tests; nothing leaves the machine.
 */
export const environment = {
  siteUrl: 'https://codeguessr.joeyoosenbrug.nl',
  supabaseUrl: 'https://e2e-test.supabase.co',
  supabaseAnonKey: 'e2e-anon-key'
};
