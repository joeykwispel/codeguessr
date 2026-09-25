import { defineConfig, devices } from '@playwright/test';

/** End-to-end tests against the production build (`npm run build` first, or let CI do it). */
export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  workers: process.env['CI'] ? 2 : 4,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 1 : 0,
  reporter: process.env['CI'] ? [['github'], ['html', { open: 'never' }]] : 'list',
  // PW_CHANNEL=msedge (or chrome) runs against an installed browser instead of the downloaded one.
  // Service workers are blocked so every test sees the network (and our mocked Supabase) directly.
  use: { baseURL: 'http://localhost:4173', trace: 'retain-on-failure', channel: process.env['PW_CHANNEL'], serviceWorkers: 'block' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } }
  ],
  webServer: { command: 'npm run preview -- --port 4173', port: 4173, reuseExistingServer: !process.env['CI'] }
});
