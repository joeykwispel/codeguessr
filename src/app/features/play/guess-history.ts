import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import type { Guess } from '../../core/game';
import { I18n, fmt } from '../../core/i18n';
import { Icon } from '../../shared/components/icon';

/** Guesses so far, with an icon and a word for each result (never colour alone), plus empty slots for turns left. */
@Component({
  selector: 'app-guess-history',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().play;
    @if (guesses().length) {
      <h2 class="heading">{{ t.history }}</h2>
    }
    <ol>
      @for (g of guesses(); track $index; let i = $index) {
        <li [class]="g.result">
          <app-icon [name]="g.result === 'correct' ? 'check' : g.result === 'skipped' ? 'skip' : 'x'" />
          <span class="sr-only">{{ fmt(t.turn, { n: i + 1 }) }}:</span>
          <span class="value">{{ g.value ?? '—' }}</span>
          <span class="result">{{ t[g.result] }}</span>
        </li>
      }
      @for (slot of empty(); track slot) {
        <li class="empty" aria-hidden="true"></li>
      }
    </ol>
  `,
  styles: `
    .heading {
      font-family: var(--mono);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.375rem;
    }
    li {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      min-height: 44px;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--surface);
      font-family: var(--mono);
    }
    .value {
      flex: 1;
      overflow-wrap: anywhere;
    }
    .result {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .correct {
      border-color: var(--ok);
      background: var(--ok-soft);
      color: var(--ok);
    }
    .correct .value {
      color: var(--text);
      font-weight: 700;
    }
    .wrong {
      border-color: var(--bad);
      background: var(--bad-soft);
    }
    .wrong app-icon,
    .wrong .result {
      color: var(--bad);
    }
    .skipped {
      color: var(--muted);
    }
    .empty {
      border-style: dashed;
      min-height: 44px;
    }
  `
})
export class GuessHistory {
  protected readonly i18n = inject(I18n);
  protected readonly fmt = fmt;
  readonly guesses = input.required<Guess[]>();
  readonly turns = input.required<number>();
  readonly finished = input(false);
  protected readonly empty = computed(() => (this.finished() ? [] : Array.from({ length: Math.max(0, this.turns() - this.guesses().length) }, (_, i) => i)));
}
