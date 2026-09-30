import { ChangeDetectionStrategy, Component, PLATFORM_ID, computed, inject, linkedSignal, resource, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../core/auth.service';
import { I18n, fmt } from '../../core/i18n';
import { LeaderboardService, type LeaderboardEntry, type Metric, metrics, validNickname } from '../../core/leaderboard.service';
import { Seo } from '../../core/seo.service';
import { Icon } from '../../shared/components/icon';

/**
 * /leaderboard: the top players by games played, longest streak or wins. Joining is opt-in with a nickname;
 * nothing from the Google account is shown. Values come from the synced stats row (daily puzzles only).
 */
@Component({
  selector: 'app-leaderboard-page',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().leaderboard;
    <header class="intro">
      <h1>{{ t.title }}</h1>
      <p class="muted">{{ t.intro }}</p>
    </header>

    <fieldset class="filter">
      <legend class="sr-only">{{ t.metric }}</legend>
      @for (m of metrics; track m) {
        <label [class.on]="metric() === m"><input type="radio" name="metric" [checked]="metric() === m" (change)="metric.set(m)" />{{ t[m] }}</label>
      }
    </fieldset>

    @if (!service.available) {
      <p class="glass notice">{{ t.unavailable }}</p>
    } @else if (board.error()) {
      <div class="glass notice" role="alert">
        <p>{{ t.error }}</p>
        <button type="button" class="btn" (click)="board.reload()">{{ i18n.t().play.retry }}</button>
      </div>
    } @else if (board.hasValue()) {
      @if (entries().length) {
        <ol class="list" [attr.aria-label]="t[metric()]">
          @for (e of entries(); track e.nickname) {
            @let me = isMe(e);
            <li class="row" [class.me]="me" [class.top]="e.rank <= 3">
              <span class="sr-only">{{ fmt(t.row, { rank: e.rank, name: e.nickname + (me ? ' (' + t.you + ')' : ''), value: valueLabel(e.value) }) }}</span>
              <span class="rank mono" aria-hidden="true">
                @if (e.rank === 1) {
                  <app-icon name="trophy" />
                } @else {
                  {{ e.rank }}
                }
              </span>
              <span class="name" aria-hidden="true">
                {{ e.nickname }}
                @if (me) {
                  <span class="you mono">{{ t.you }}</span>
                }
              </span>
              <span class="value mono" aria-hidden="true">{{ valueLabel(e.value) }}</span>
            </li>
          }
        </ol>
      } @else {
        <p class="glass notice">{{ t.empty }}</p>
      }
    } @else {
      <div class="skeleton" aria-busy="true">
        <p class="sr-only" role="status">{{ t.loading }}</p>
        @for (i of [1, 2, 3, 4, 5]; track i) {
          <div class="sk" aria-hidden="true"></div>
        }
      </div>
    }

    @if (service.available) {
      <section class="glass join" aria-labelledby="join-title">
        <h2 id="join-title">{{ t.joinTitle }}</h2>
        @if (auth.status() === 'signed-in') {
          <p class="small">{{ mine.value() ? fmt(t.joined, { name: mine.value()! }) : t.why }}</p>
          <form (submit)="save($event)" novalidate>
            <label for="nickname">{{ t.nickname }}</label>
            <input
              id="nickname"
              name="nickname"
              autocomplete="nickname"
              maxlength="20"
              aria-describedby="nickname-rules"
              [attr.aria-invalid]="message()?.text === t.invalid || message()?.text === t.taken ? 'true' : null"
              [value]="draft()"
              [disabled]="busy()"
              (input)="draft.set(input($event))"
            />
            <p id="nickname-rules" class="muted small">{{ t.rules }}</p>
            <div class="actions">
              <button type="submit" class="btn btn-primary" [disabled]="busy() || !draft().trim()">{{ mine.value() ? t.save : t.join }}</button>
              @if (mine.value()) {
                <button type="button" class="btn" [disabled]="busy()" (click)="leave()">{{ t.leave }}</button>
              }
            </div>
          </form>
        } @else {
          <p class="small">{{ t.signedOut }}</p>
          <button type="button" class="btn" [disabled]="auth.status() === 'loading'" (click)="auth.signIn()">
            <app-icon name="user" />
            {{ t.signIn }}
          </button>
        }
        <p class="small" [class.error]="message()?.error" role="status">{{ message()?.text }}</p>
      </section>
    }
  `,
  styles: `
    :host {
      display: grid;
      gap: 1.25rem;
    }
    .intro {
      display: grid;
      gap: 0.5rem;
    }
    h1 {
      font-size: clamp(2rem, 6vw, 3rem);
      letter-spacing: -0.04em;
      line-height: 1;
    }
    h2 {
      font-size: 1.1rem;
      letter-spacing: -0.01em;
    }
    .filter {
      display: inline-flex;
      flex-wrap: wrap;
      justify-self: start;
      margin: 0;
      padding: 3px;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--surface);
    }
    .filter label {
      position: relative;
      display: inline-flex;
      align-items: center;
      min-height: 40px;
      padding: 0 0.875rem;
      border-radius: 999px;
      font-family: var(--mono);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    }
    .filter label.on {
      background: var(--accent);
      color: var(--accent-ink);
    }
    .filter input {
      position: absolute;
      opacity: 0;
      inset: 0;
      margin: 0;
      cursor: pointer;
    }
    .filter label:has(input:focus-visible) {
      outline: 3px solid var(--accent-text);
      outline-offset: 2px;
    }
    .list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.375rem;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-height: 52px;
      padding: 0.5rem 0.875rem;
      border: 1px solid var(--border);
      border-left-width: 4px;
      border-radius: var(--radius-sm);
      background: var(--surface);
      -webkit-backdrop-filter: blur(14px);
      backdrop-filter: blur(14px);
    }
    .row.top {
      border-left-color: var(--accent);
    }
    .row.me {
      background: var(--ok-soft);
    }
    .rank {
      display: inline-flex;
      justify-content: center;
      min-width: 2rem;
      font-weight: 700;
    }
    .rank app-icon {
      color: var(--flame);
    }
    .name {
      flex: 1;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      overflow-wrap: anywhere;
    }
    .you {
      padding: 0.1rem 0.5rem;
      border-radius: 999px;
      background: var(--accent);
      color: var(--accent-ink);
      font-size: 0.7rem;
    }
    .value {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--muted);
      white-space: nowrap;
    }
    .notice {
      display: grid;
      gap: 0.75rem;
      justify-items: start;
      padding: 1.25rem;
    }
    .skeleton {
      display: grid;
      gap: 0.375rem;
    }
    .sk {
      height: 52px;
      border-radius: var(--radius-sm);
      background: var(--surface-2);
    }
    .join {
      display: grid;
      gap: 0.75rem;
      justify-items: start;
      padding: 1.25rem;
    }
    .small {
      font-size: 0.875rem;
    }
    .error {
      color: var(--bad);
    }
    form {
      display: grid;
      gap: 0.375rem;
      width: 100%;
    }
    label[for='nickname'] {
      font-weight: 600;
    }
    input {
      width: 100%;
      max-width: 22rem;
      min-height: 44px;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--surface);
      font-family: var(--mono);
    }
    input:focus-visible {
      outline: none;
      border-color: color-mix(in srgb, var(--accent) 70%, var(--border));
      box-shadow: 0 0 0 4px var(--glow);
    }
    input[aria-invalid='true'] {
      border-color: var(--bad);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.25rem;
    }
  `
})
export class LeaderboardPage {
  protected readonly i18n = inject(I18n);
  protected readonly auth = inject(AuthService);
  protected readonly service = inject(LeaderboardService);
  protected readonly fmt = fmt;
  protected readonly metrics = metrics;
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly metric = signal<Metric>('played');
  protected readonly busy = signal(false);
  protected readonly message = signal<{ text: string; error: boolean } | null>(null);

  protected readonly board = resource({
    params: () => (this.browser && this.service.available ? this.metric() : undefined),
    loader: ({ params }) => this.service.top(params)
  });
  protected readonly entries = computed(() => this.board.value() ?? []);

  /** Your nickname when you're signed in and joined. */
  protected readonly mine = resource({
    params: () => (this.auth.status() === 'signed-in' ? this.auth.user()?.id : undefined),
    loader: ({ params }) => this.service.nickname(params).catch(() => null)
  });
  protected readonly draft = linkedSignal(() => this.mine.value() ?? '');

  constructor() {
    inject(Seo).set('leaderboard');
  }

  protected valueLabel(n: number): string {
    const t = this.i18n.t().leaderboard;
    return fmt({ played: t.playedValue, streak: t.streakValue, wins: t.winsValue }[this.metric()], { n });
  }

  protected isMe(e: LeaderboardEntry): boolean {
    const mine = this.mine.value();
    return !!mine && mine.toLowerCase() === e.nickname.toLowerCase();
  }

  protected input(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  protected async save(event: Event): Promise<void> {
    event.preventDefault();
    const user = this.auth.user();
    const t = this.i18n.t().leaderboard;
    const name = this.draft().trim();
    if (!user || !name) return;
    if (!validNickname(name)) return this.message.set({ text: t.invalid, error: true });
    this.busy.set(true);
    const error = await this.service.join(user.id, name);
    this.busy.set(false);
    if (error) return this.message.set({ text: t[error], error: true });
    this.message.set({ text: fmt(t.saved, { name }), error: false });
    this.mine.set(name);
    this.board.reload();
  }

  protected async leave(): Promise<void> {
    const user = this.auth.user();
    if (!user) return;
    const t = this.i18n.t().leaderboard;
    this.busy.set(true);
    const ok = await this.service.leave(user.id);
    this.busy.set(false);
    this.message.set(ok ? { text: t.left, error: false } : { text: t.failed, error: true });
    if (!ok) return;
    this.mine.set(null);
    this.board.reload();
  }
}
