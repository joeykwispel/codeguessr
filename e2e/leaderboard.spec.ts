import { expect, test, type Page } from '@playwright/test';
import { setup, TODAY } from './helpers';

/** The leaderboard against a mocked Supabase: the public leaderboard() RPC and your own profile row. */

const USER_ID = '5f0c6c1e-3a57-4f7e-9d1f-0e4b1f6f2a11';

const boards: Record<string, { rank: number; nickname: string; value: number }[]> = {
  played: [
    { rank: 1, nickname: 'grace', value: 5 },
    { rank: 2, nickname: 'linus', value: 4 }
  ],
  streak: [{ rank: 1, nickname: 'linus', value: 3 }],
  wins: []
};

async function mockLeaderboard(page: Page) {
  const joined: string[] = [];
  let mine: string | null = null;
  await page.route('**/rest/v1/rpc/leaderboard**', (route) => {
    const { metric } = route.request().postDataJSON() as { metric: string };
    const rows = [...(boards[metric] ?? [])];
    if (mine && metric === 'played') rows.push({ rank: rows.length + 1, nickname: mine, value: 1 });
    return route.fulfill({ json: rows });
  });
  await page.route('**/rest/v1/leaderboard_profiles**', (route) => {
    const method = route.request().method();
    if (method === 'GET') return route.fulfill({ json: mine ? [{ nickname: mine }] : [] });
    if (method === 'DELETE') {
      mine = null;
      return route.fulfill({ status: 204 });
    }
    const body = route.request().postDataJSON();
    mine = (Array.isArray(body) ? body[0] : body).nickname;
    joined.push(mine!);
    return route.fulfill({ status: 201, json: [] });
  });
  return joined;
}

/** A stored Supabase session, as if the Google sign-in had already happened. */
async function signedIn(page: Page) {
  const exp = Math.floor(new Date(`${TODAY}T10:00:00Z`).getTime() / 1000) + 3600;
  const b64 = (o: unknown) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const user = { id: USER_ID, aud: 'authenticated', role: 'authenticated', email: 'ada@example.com', user_metadata: { full_name: 'Ada Lovelace' } };
  const session = {
    access_token: `${b64({ alg: 'HS256' })}.${b64({ sub: USER_ID, exp, role: 'authenticated' })}.sig`,
    token_type: 'bearer',
    expires_in: 3600,
    expires_at: exp,
    refresh_token: 'refresh',
    user
  };
  await page.addInitScript((s) => localStorage.setItem('sb-e2e-test-auth-token', JSON.stringify(s)), session);
  await page.route('**/rest/v1/user_stats**', (route) => route.fulfill(route.request().method() === 'GET' ? { json: [] } : { status: 201, json: [] }));
}

test('shows all three rankings on one screen and invites signed-out visitors to join', async ({ page }) => {
  await setup(page);
  await mockLeaderboard(page);
  await page.goto('/leaderboard/');

  await expect(page.getByRole('heading', { level: 1, name: 'Leaderboard' })).toBeVisible();
  const played = page.getByRole('list', { name: 'Most played' });
  await expect(played.getByRole('listitem')).toHaveCount(2);
  await expect(played.getByRole('listitem').first()).toContainText('grace');
  await expect(played.getByRole('listitem').first()).toContainText('Rank 1: grace, 5 played');

  const streak = page.getByRole('list', { name: 'Longest streak' });
  await expect(streak.getByRole('listitem')).toHaveCount(1);
  await expect(streak.getByRole('listitem')).toContainText('3 days');

  await expect(page.getByRole('article').filter({ hasText: 'Most wins' })).toContainText('No one yet. Be the first!');
  await expect(page.getByRole('button', { name: 'Sign in with Google' })).toBeVisible();
});

test('today’s puzzle has a compact leaderboard below it, linking to the full one', async ({ page }) => {
  await setup(page);
  await mockLeaderboard(page);
  await page.goto('/');

  const section = page.getByRole('region', { name: 'Leaderboard' });
  await section.scrollIntoViewIfNeeded();
  await expect(section.getByRole('heading', { level: 3, name: 'Longest streak' })).toBeVisible();
  await expect(section.getByRole('list', { name: 'Most played' }).getByRole('listitem')).toHaveCount(2);
  await section.getByRole('link', { name: /Full leaderboard/ }).click();
  await expect(page).toHaveURL(/\/leaderboard\/?$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Leaderboard' })).toBeVisible();
});

test('a signed-in player can join with a nickname, is highlighted, and can leave again', async ({ page }) => {
  await setup(page);
  const joined = await mockLeaderboard(page);
  await signedIn(page);
  await page.goto('/leaderboard/');

  const field = page.getByRole('textbox', { name: 'Nickname' });
  await field.fill('x');
  await page.getByRole('button', { name: 'Join' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'Use 2 to 20' })).toBeVisible();
  await expect(field).toHaveAttribute('aria-invalid', 'true');

  await field.fill('ada_l');
  await page.getByRole('button', { name: 'Join' }).click();
  await expect(page.getByText('Saved. You’re on the leaderboard as ada_l.')).toBeVisible();
  expect(joined).toEqual(['ada_l']);
  await expect(page.getByRole('listitem').filter({ hasText: 'ada_l' })).toContainText('you');

  await page.getByRole('button', { name: 'Leave the leaderboard' }).click();
  await expect(page.getByText('You left the leaderboard.')).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'ada_l' })).toHaveCount(0);
});

test('the Dutch page is translated', async ({ page }) => {
  await setup(page);
  await mockLeaderboard(page);
  await page.goto('/nl/leaderboard/');
  await expect(page.getByRole('heading', { level: 1, name: 'Ranglijst' })).toBeVisible();
  await expect(page.getByRole('list', { name: 'Meest gespeeld' }).getByRole('listitem').first()).toContainText('5 gespeeld');
});
