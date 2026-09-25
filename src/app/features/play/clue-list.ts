import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { I18n, fmt } from '../../core/i18n';

/** The clues, hardest first. Locked clues show only their number, so you can see how many are left. */
@Component({
  selector: 'app-clue-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().play;
    <h2 class="visually-hidden">{{ t.clues }}</h2>
    <ol>
      @for (clue of clues(); track $index; let i = $index) {
        @if (i < revealed()) {
          <li class="clue open">
            <span class="n" aria-hidden="true">{{ i + 1 }}</span>
            <p>
              <span class="visually-hidden">{{ fmt(t.clue, { n: i + 1 }) }}: </span>{{ clue }}
            </p>
          </li>
        } @else {
          <li class="clue locked">
            <span class="n" aria-hidden="true">{{ i + 1 }}</span>
            <p>
              <span class="visually-hidden">{{ fmt(t.clue, { n: i + 1 }) }}: </span>{{ t.locked }}
            </p>
          </li>
        }
      }
    </ol>
  `,
  styles: `
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.5rem;
    }
    .clue {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 0.75rem 0.875rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--surface);
    }
    .open {
      animation: reveal 0.35s ease-out;
    }
    .locked {
      background: transparent;
      border-style: dashed;
      color: var(--muted);
    }
    .n {
      flex: none;
      display: grid;
      place-items: center;
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 6px;
      background: var(--accent-soft);
      color: var(--text);
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 0.875rem;
    }
    .locked .n {
      background: var(--surface-2);
      color: var(--muted);
    }
    p {
      padding-top: 0.125rem;
    }
    @keyframes reveal {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
    }
  `
})
export class ClueList {
  protected readonly i18n = inject(I18n);
  protected readonly fmt = fmt;
  readonly clues = input.required<string[]>();
  readonly revealed = input.required<number>();
}
