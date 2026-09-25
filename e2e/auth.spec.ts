import { expect, test, type Page, type Route } from '@playwright/test';
import { setup } from './helpers';

/**
 * Sign-in with a mocked Supabase + Google OAuth round trip (the e2e build points at https://e2e-test.supabase.co).
 * authorize -> redirect back with ?code -> PKCE token exchange -> user_stats select + upsert.
 */

const USER = {
  id: '5f0c6c1e-3a57-4f7e-9d1f-0e4b1f6f2a11',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'ada@example.com',
  app_metadata: { provider: 'google' },
  user_metadata: { full_name: 'Ada Lovelace' },
  created_at: '2026-01-01T00:00:00Z'
};

const base64url = (o: unknown) => Buffer.from(JSON.stringify(o)).toString('base64url');

function session(now: Date) {
  const exp = Math.floor(now.getTime() / 1000) + 3600;
  const token = `${base64url({ alg: 'HS256', typ: 'JWT' })}.${base64url({ sub: USER.id, exp, role: 'authenticated', aud: 'authenticated' })}.sig`;
  return { access_token: token, token_type: 'bearer', expires_in: 3600, expires_at: exp, refresh_token: 'refresh', user: USER };
}

async function mockSupabase(page: Page, cloud: Record<string, unknown> | null) {
  const upserts: Record<string, unknown>[] = [];
  const now = new Date('2026-09-25T10:00:00Z');
  await page.route('**/auth/v1/authorize**', (route) => {
    const redirect = new URL(route.request().url()).searchParams.get('redirect_to')!;
    return route.fulfill({ status: 302, headers: { location: `${redirect}?code=test-code` } });
  });
  await page.route('**/auth/v1/token**', (route) => route.fulfill({ json: session(now) }));
  await page.route('**/auth/v1/user**', (route) => route.fulfill({ json: USER }));
  await page.route('**/auth/v1/logout**', (route) => route.fulfill({ status: 204 }));
  await page.route('**/rest/v1/user_stats**', (route: Route) => {
    if (route.request().method() === 'GET') return route.fulfill({ json: cloud ? [cloud] : [] });
    const body = route.request().postDataJSON();
    upserts.push(Array.isArray(body) ? body[0] : body);
    cloud = upserts.at(-1)!;
    return route.fulfill({ status: 201, json: [] });
  });
  return upserts;
}

test('sign in with Google, merge local stats into the cloud row, sign out', async ({ page }) => {
  await setup(page, {
    storage: {
      'cg:stats': { streak: 1, maxStreak: 1, lastPlayedDate: '2026-09-24', gamesPlayed: 1, gamesWon: 1, guessDistribution: [0, 1, 0, 0, 0, 0] }
    }
  });
  const upserts = await mockSupabase(page, {
    user_id: USER.id,
    streak: 0,
    max_streak: 6,
    last_played_date: '2026-09-10',
    games_played: 10,
    games_won: 8,
    guess_distribution: [1, 2, 3, 2, 0, 0]
  });
  await page.goto('/');

  await page.getByRole('button', { name: 'Sign in' }).click();
  const panel = page.locator('#auth-panel');
  await expect(panel.getByText(/keep your streak and stats in sync/)).toBeVisible();
  await panel.getByRole('button', { name: 'Continue with Google' }).click();

  // back from the (mocked) consent screen
  await expect(page.getByRole('button', { name: 'Account: Ada Lovelace' })).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
  await expect.poll(() => upserts.length).toBeGreaterThan(0);
  expect(upserts[0]).toMatchObject({
    user_id: USER.id,
    games_played: 11,
    games_won: 9,
    guess_distribution: [1, 3, 3, 2, 0, 0],
    streak: 1,
    max_streak: 6,
    last_played_date: '2026-09-24'
  });

  await page.getByRole('button', { name: 'Statistics', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Statistics' });
  await expect(dialog.getByText('Played', { exact: true }).locator('..')).toContainText('11');
  await expect(dialog.getByText('Stats synced across your devices.')).toBeVisible();
  await page.keyboard.press('Escape');

  await page.getByRole('button', { name: 'Account: Ada Lovelace' }).click();
  await page.locator('#auth-panel').getByRole('button', { name: 'Sign out' }).click();
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  // stats stay on the device after signing out
  await page.getByRole('button', { name: 'Statistics', exact: true }).click();
  await expect(page.getByRole('dialog').getByText('Played', { exact: true }).locator('..')).toContainText('11');
});

test('a finished game while signed in is added to the cloud row', async ({ page }) => {
  await setup(page);
  const upserts = await mockSupabase(page, null);
  await page.goto('/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('#auth-panel').getByRole('button', { name: 'Continue with Google' }).click();
  await expect(page.getByRole('button', { name: 'Account: Ada Lovelace' })).toBeVisible();
  await expect.poll(() => upserts.length).toBe(1);

  await page.getByRole('combobox', { name: 'Your guess' }).fill('GraphQL');
  await page.getByRole('button', { name: 'Guess', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
  await expect.poll(() => upserts.length).toBe(2);
  expect(upserts[1]).toMatchObject({ games_played: 1, games_won: 1, streak: 1, last_played_date: '2026-09-25', guess_distribution: [1, 0, 0, 0, 0, 0] });
});

test('a cancelled Google consent shows a message and the game keeps working', async ({ page }) => {
  await setup(page);
  await mockSupabase(page, null);
  await page.goto('/?error=access_denied&error_description=User+cancelled');
  await expect(page).toHaveURL(/\/$/);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'Sign-in was cancelled.' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeFocused();
  await page.getByRole('combobox', { name: 'Your guess' }).fill('GraphQL');
  await page.getByRole('button', { name: 'Guess', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
});
