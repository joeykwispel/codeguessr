import { ChangeDetectionStrategy, Component, effect, inject, signal, viewChild } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { I18n, fmt } from '../../core/i18n';
import { LeaderboardService, validNickname } from '../../core/leaderboard.service';
import { Seo } from '../../core/seo.service';
import { Icon } from '../../shared/components/icon';
import { LeaderboardBoard } from './leaderboard-board';

/**
 * /leaderboard: all three rankings on one screen (most played, longest streak, most wins), plus joining.
 * Joining is opt-in with a nickname; nothing from the Google account is shown. Only daily puzzles count.
 */
@Component({
  selector: 'app-leaderboard-page',
  imports: [Icon, LeaderboardBoard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().leaderboard;
    <header class="intro">
      <span class="badge" aria-hidden="true"><app-icon name="trophy" /></span>
      <div>
        <h1>{{ t.title }}</h1>
        <p class="muted">{{ t.intro }}</p>
      </div>
    </header>

    @if (!service.enabled) {
      <p class="glass notice">{{ t.error }}</p>
    } @else {
      <app-leaderboard-board [limit]="10" />

      <section class="glass join" aria-labelledby="join-title">
        <div class="copy">
          <h2 id="join-title">{{ t.joinTitle }}</h2>
          @if (auth.status() === 'signed-in') {
            <p class="small">{{ mine() ? fmt(t.joined, { name: mine()! }) : t.why }}</p>
          } @else {
            <p class="small">{{ t.signedOut }}</p>
          }
        </div>

        @if (auth.status() === 'signed-in') {
          <form (submit)="save($event)" novalidate>
            <label for="nickname">{{ t.nickname }}</label>
            <div class="field">
              <input
                id="nickname"
                name="nickname"
                autocomplete="nickname"
                maxlength="20"
                aria-describedby="nickname-rules"
                [attr.aria-invalid]="invalid() ? 'true' : null"
                [value]="draft()"
                [disabled]="busy()"
                (input)="draft.set(input($event))"
              />
              <button type="submit" class="btn btn-primary" [disabled]="busy() || !draft().trim()">{{ mine() ? t.save : t.join }}</button>
            </div>
            <p id="nickname-rules" class="muted tiny">{{ t.rules }}</p>
            @if (mine()) {
              <button type="button" class="link" [disabled]="busy()" (click)="leave()">{{ t.leave }}</button>
            }
          </form>
        } @else {
          <button type="button" class="btn btn-primary" [disabled]="auth.status() === 'loading'" (click)="auth.signIn()">
            <app-icon name="user" />
            {{ t.signIn }}
          </button>
        }
        <p class="msg small" [class.error]="message()?.error" role="status">{{ message()?.text }}</p>
      </section>
    }
  `,
  styles: `
    :host {
      display: grid;
      gap: 1.25rem;
    }
    .intro {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .intro div {
      display: grid;
      gap: 0.375rem;
    }
    .badge {
      flex: none;
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      border-radius: 16px;
      color: #231a00;
      background: linear-gradient(135deg, #ffe08a, #f5c542 55%, #e0a526);
      box-shadow: 0 10px 30px color-mix(in srgb, #f5c542 30%, transparent);
    }
    .badge app-icon {
      width: 28px;
      height: 28px;
    }
    h1 {
      font-size: clamp(2rem, 6vw, 3rem);
      letter-spacing: -0.04em;
      line-height: 1;
    }
    h2 {
      margin: 0;
      font-size: 1.1rem;
      letter-spacing: -0.01em;
    }
    .notice {
      padding: 1.25rem;
    }
    .join {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
      align-items: start;
      gap: 0.75rem 1.5rem;
      padding: 1.25rem;
    }
    @media (max-width: 680px) {
      .join {
        grid-template-columns: minmax(0, 1fr);
      }
    }
    .copy {
      display: grid;
      gap: 0.375rem;
    }
    .small {
      margin: 0;
      font-size: 0.875rem;
    }
    .tiny {
      margin: 0;
      font-size: 0.75rem;
    }
    .msg {
      grid-column: 1 / -1;
    }
    .msg:empty {
      margin: 0;
      min-height: 0;
    }
    .error {
      color: var(--bad);
    }
    form {
      display: grid;
      gap: 0.375rem;
    }
    label {
      font-weight: 600;
      font-size: 0.875rem;
    }
    .field {
      display: flex;
      gap: 0.5rem;
    }
    input {
      flex: 1;
      min-width: 0;
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
    .link {
      justify-self: start;
      min-height: 44px;
      padding: 0;
      border: 0;
      background: none;
      color: var(--muted);
      font: inherit;
      font-size: 0.8125rem;
      text-decoration: underline;
      cursor: pointer;
    }
    .link:hover {
      color: var(--bad);
    }
  `
})
export class LeaderboardPage {
  protected readonly i18n = inject(I18n);
  protected readonly auth = inject(AuthService);
  protected readonly service = inject(LeaderboardService);
  protected readonly fmt = fmt;
  private readonly board = viewChild(LeaderboardBoard);

  protected readonly busy = signal(false);
  protected readonly message = signal<{ text: string; error: boolean } | null>(null);
  protected readonly invalid = signal(false);

  /** Your nickname, from the board (which loads it for highlighting your rows). */
  protected mine(): string | null {
    return this.board()?.mine.value() ?? null;
  }
  protected readonly draft = signal('');

  constructor() {
    inject(Seo).set('leaderboard');
    // the field starts with your current nickname, and follows it after saving or leaving
    effect(() => this.draft.set(this.board()?.mine.value() ?? ''));
  }

  protected input(event: Event): string {
    this.invalid.set(false);
    return (event.target as HTMLInputElement).value;
  }

  protected async save(event: Event): Promise<void> {
    event.preventDefault();
    const user = this.auth.user();
    const t = this.i18n.t().leaderboard;
    const name = this.draft().trim();
    if (!user || !name) return;
    if (!validNickname(name)) return this.fail(t.invalid);
    this.busy.set(true);
    const error = await this.service.join(user.id, name);
    this.busy.set(false);
    if (error) return this.fail(t[error], error !== 'failed');
    this.message.set({ text: fmt(t.saved, { name }), error: false });
    this.board()?.reload();
  }

  protected async leave(): Promise<void> {
    const user = this.auth.user();
    if (!user) return;
    const t = this.i18n.t().leaderboard;
    this.busy.set(true);
    const ok = await this.service.leave(user.id);
    this.busy.set(false);
    if (!ok) return this.fail(t.failed, false);
    this.message.set({ text: t.left, error: false });
    this.board()?.reload();
  }

  private fail(text: string, invalid = true): void {
    this.invalid.set(invalid);
    this.message.set({ text, error: true });
  }
}
