import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import type { GameState } from '../../core/game';
import { I18n, fmt } from '../../core/i18n';
import { shareText } from '../../core/share';
import { Icon } from '../../shared/components/icon';

/**
 * Copies the emoji result to the clipboard. The on-page preview uses ✓/✗ marks next to the colours and has a
 * text alternative per turn, so the result never relies on colour alone.
 */
@Component({
  selector: 'app-share-button',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().share;
    <div class="share">
      <ol class="grid" [attr.aria-label]="t.preview">
        @for (g of state().guesses; track $index; let i = $index) {
          <li [class]="g.result === 'correct' ? 'hit' : 'miss'">
            <span aria-hidden="true">{{ g.result === 'correct' ? '✓' : '✗' }}</span>
            <span class="visually-hidden">{{ fmt(t.grid, { n: i + 1, result: i18n.t().play[g.result] }) }}</span>
          </li>
        }
      </ol>
      <button type="button" class="btn btn-primary" (click)="copy()">
        <app-icon name="share" />
        {{ t.button }}
      </button>
    </div>
    @if (status() === 'copied') {
      <p class="status ok">{{ t.copied }}</p>
    } @else if (status() === 'failed') {
      <p class="status">{{ t.failed }}</p>
      <textarea readonly rows="3" [attr.aria-label]="t.preview" [value]="text()"></textarea>
    }
  `,
  styles: `
    .share {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .grid {
      display: flex;
      gap: 4px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .grid li {
      display: grid;
      place-items: center;
      width: 28px;
      height: 28px;
      border-radius: 5px;
      font-weight: 800;
      font-size: 0.875rem;
    }
    .hit {
      background: var(--success);
      color: var(--bg);
    }
    .miss {
      background: var(--surface-2);
      border: 1px solid var(--border);
      color: var(--muted);
    }
    .status {
      margin-top: 0.5rem;
      font-size: 0.9375rem;
    }
    .ok {
      color: var(--success);
      font-weight: 600;
    }
    textarea {
      width: 100%;
      margin-top: 0.5rem;
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--surface-2);
      font-family: var(--font-mono);
    }
  `
})
export class ShareButton {
  protected readonly i18n = inject(I18n);
  protected readonly fmt = fmt;
  private readonly clipboard = inject(Clipboard);
  private readonly announcer = inject(LiveAnnouncer);

  readonly state = input.required<GameState>();
  readonly streak = input(0);
  protected readonly status = signal<'idle' | 'copied' | 'failed'>('idle');
  protected readonly text = computed(() => shareText(this.state(), this.state().archive ? undefined : this.streak()));

  protected async copy(): Promise<void> {
    let ok: boolean;
    try {
      await navigator.clipboard.writeText(this.text());
      ok = true;
    } catch {
      // older browsers or no permission: CDK falls back to a hidden textarea + execCommand
      ok = this.clipboard.copy(this.text());
    }
    this.status.set(ok ? 'copied' : 'failed');
    const t = this.i18n.t().share;
    void this.announcer.announce(ok ? t.copied : t.failed, 'polite');
  }
}
