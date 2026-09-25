import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { CloudSync } from '../../core/cloud-sync.service';
import { I18n, fmt } from '../../core/i18n';
import { Icon } from '../../shared/components/icon';

/**
 * Header control for the optional Google sign-in: a disclosure button with a small panel that explains what
 * signing in does (sync only), or, when signed in, who you are, the sync state and a sign-out button.
 * Hidden entirely when no Supabase project is configured.
 */
@Component({
  selector: 'app-auth-button',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'close(true)', '(document:pointerdown)': 'outside($event)' },
  template: `
    @let t = i18n.t().auth;
    @if (auth.status() !== 'unavailable') {
      @let user = auth.user();
      <button
        #trigger
        type="button"
        class="icon-btn trigger"
        aria-controls="auth-panel"
        [attr.aria-expanded]="open()"
        [attr.aria-label]="user ? t.menu + ': ' + (user.name ?? user.email) : t.signIn"
        [attr.aria-busy]="auth.status() === 'loading' ? 'true' : null"
        (click)="toggle()"
      >
        @if (user) {
          @if (user.avatarUrl && !avatarFailed()) {
            <img [src]="user.avatarUrl" alt="" width="28" height="28" referrerpolicy="no-referrer" (error)="avatarFailed.set(true)" />
          } @else {
            <span class="initial" aria-hidden="true">{{ initial() }}</span>
          }
        } @else {
          <span class="label">{{ t.signIn }}</span>
        }
      </button>

      <div id="auth-panel" class="panel card" [hidden]="!open()">
        @if (user) {
          <p class="who">{{ fmt(t.signedInAs, { name: user.name ?? user.email ?? '' }) }}</p>
          @if (user.email && user.name) {
            <p class="muted small">{{ user.email }}</p>
          }
          <p class="sync small" [class.bad]="sync.status() === 'error'">
            <app-icon name="cloud" />
            {{ sync.status() === 'syncing' ? t.syncing : sync.status() === 'error' ? t.syncError : t.synced }}
          </p>
          <button type="button" class="btn" (click)="signOut()">
            <app-icon name="logout" />
            {{ t.signOut }}
          </button>
        } @else {
          <h2 class="title">{{ t.title }}</h2>
          <p class="small">{{ t.why }}</p>
          @if (auth.error()) {
            <p class="error small" role="alert">{{ auth.error() }}</p>
          }
          <button type="button" class="btn google" [disabled]="auth.status() === 'loading'" (click)="auth.signIn()">
            <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true" focusable="false">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            {{ auth.status() === 'loading' ? t.loading : t.google }}
          </button>
          <p class="muted small">{{ t.privacy }}</p>
        }
      </div>
    }
  `,
  styles: `
    :host {
      position: relative;
    }
    .trigger img,
    .initial {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .initial {
      display: grid;
      place-items: center;
      background: var(--accent);
      color: var(--accent-contrast);
      font-weight: 800;
    }
    .label {
      font-size: 0.9375rem;
    }
    .panel {
      position: absolute;
      right: 0;
      top: calc(100% + 8px);
      z-index: 30;
      width: min(88vw, 320px);
      padding: 1rem;
      display: grid;
      gap: 0.625rem;
      box-shadow: var(--shadow);
    }
    .title {
      font-size: 1.0625rem;
    }
    .who {
      font-weight: 700;
    }
    .small {
      font-size: 0.875rem;
    }
    .sync {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      color: var(--success);
    }
    .sync.bad {
      color: var(--warning);
    }
    .error {
      color: var(--danger);
    }
    .google {
      width: 100%;
    }
  `
})
export class AuthButton {
  protected readonly auth = inject(AuthService);
  protected readonly sync = inject(CloudSync);
  protected readonly i18n = inject(I18n);
  protected readonly fmt = fmt;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly trigger = viewChild<ElementRef<HTMLButtonElement>>('trigger');

  protected readonly open = signal(false);
  protected readonly avatarFailed = signal(false);
  protected readonly initial = computed(() => (this.auth.user()?.name ?? this.auth.user()?.email ?? '?').trim().charAt(0).toUpperCase());

  protected toggle(): void {
    this.open.update((o) => !o);
  }

  protected close(restoreFocus = false): void {
    if (!this.open()) return;
    this.open.set(false);
    if (restoreFocus) this.trigger()?.nativeElement.focus();
  }

  protected outside(e: PointerEvent): void {
    if (this.open() && !this.host.nativeElement.contains(e.target as Node)) this.close();
  }

  protected async signOut(): Promise<void> {
    await this.auth.signOut();
    this.close(true);
  }
}
