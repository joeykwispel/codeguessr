import { defineConfig } from 'vitest/config';

/** Database tests (RLS policies on an in-memory Postgres). The app's unit tests run through `ng test` instead. */
export default defineConfig({
  test: {
    include: ['supabase/**/*.test.ts'],
    environment: 'node',
    testTimeout: 30_000
  }
});
