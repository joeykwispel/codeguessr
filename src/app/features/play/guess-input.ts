import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, input, model, output, signal, viewChild } from '@angular/core';
import { I18n, fmt } from '../../core/i18n';
import type { Suggestion } from '../../core/guess';
import { Icon } from '../../shared/components/icon';
import { terms } from './game.store';

/**
 * Guess field with typeahead, following the WAI-ARIA combobox pattern (list autocomplete):
 * arrow keys move through suggestions (aria-activedescendant), Enter guesses, Escape closes the list and then clears
 * the field, Tab leaves. Suggestions are picked on pointerdown so touch works without the field losing focus.
 */
@Component({
  selector: 'app-guess-input',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().play;
    <form class="guess" (submit)="submitForm($event)" novalidate>
      <label for="guess-field" class="label">{{ t.input }}</label>
      <div class="row">
        <div class="combo">
          <input
            #field
            id="guess-field"
            type="text"
            role="combobox"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            spellcheck="false"
            enterkeyhint="send"
            aria-autocomplete="list"
            aria-controls="guess-listbox"
            [attr.aria-expanded]="open()"
            [attr.aria-activedescendant]="active() >= 0 ? 'guess-option-' + active() : null"
            [attr.aria-describedby]="error() ? 'guess-error guess-turns' : 'guess-turns'"
            [attr.aria-invalid]="error() ? 'true' : null"
            [placeholder]="t.placeholder"
            [disabled]="disabled()"
            [value]="query()"
            (input)="onInput($event)"
            (keydown)="onKeydown($event)"
            (focus)="focused.set(true)"
            (blur)="focused.set(false)"
          />
          <ul id="guess-listbox" role="listbox" [attr.aria-label]="t.suggestions" [hidden]="!open()">
            @for (s of suggestions(); track s.name; let i = $index) {
              <li
                role="option"
                [id]="'guess-option-' + i"
                [attr.aria-selected]="i === active()"
                [class.active]="i === active()"
                (pointerdown)="pick(s, $event)"
                (pointermove)="active.set(i)"
              >
                <span class="name">{{ s.name }}</span>
                @if (s.alias) {
                  <span class="alias">{{ s.alias }}</span>
                }
              </li>
            }
          </ul>
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="disabled()">{{ t.guess }}</button>
      </div>
      <div class="meta">
        <p id="guess-turns" class="muted">{{ turnsText() }}</p>
        <button type="button" class="btn skip" [disabled]="disabled()" [attr.aria-label]="t.skipLabel" (click)="skipped.emit()">
          <app-icon name="skip" />
          {{ t.skip }}
        </button>
      </div>
      @if (error()) {
        <p id="guess-error" class="error">{{ error() }}</p>
      }
      <p class="visually-hidden" role="status">{{ countText() }}</p>
    </form>
  `,
  styles: `
    .label {
      display: block;
      font-weight: 600;
      margin-bottom: 0.375rem;
    }
    .row {
      display: flex;
      gap: 0.5rem;
    }
    .combo {
      position: relative;
      flex: 1;
      min-width: 0;
    }
    input {
      width: 100%;
      min-height: 48px;
      padding: 0.625rem 0.875rem;
      border: 2px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--surface);
      font-family: var(--font-mono);
      font-size: 1rem;
    }
    input::placeholder {
      color: var(--muted);
      opacity: 1;
      font-family: var(--font-sans);
    }
    input:focus-visible {
      outline: none;
      border-color: var(--focus);
      box-shadow: 0 0 0 3px var(--accent-soft);
    }
    input[aria-invalid='true'] {
      border-color: var(--danger);
    }
    input:disabled {
      opacity: 0.6;
    }
    ul {
      position: absolute;
      z-index: 20;
      left: 0;
      right: 0;
      top: calc(100% + 4px);
      margin: 0;
      padding: 0.25rem;
      list-style: none;
      max-height: min(50vh, 320px);
      overflow-y: auto;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      box-shadow: var(--shadow);
    }
    li {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 0.75rem;
      min-height: 44px;
      padding: 0.625rem 0.75rem;
      border-radius: 6px;
      cursor: pointer;
      font-family: var(--font-mono);
    }
    li.active {
      background: var(--accent-soft);
      outline: 2px solid var(--accent);
      outline-offset: -2px;
    }
    .alias {
      color: var(--muted);
      font-size: 0.875rem;
    }
    .meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    .meta p {
      font-size: 0.875rem;
    }
    .skip {
      min-height: 40px;
      padding: 0.375rem 0.75rem;
      font-size: 0.875rem;
    }
    .error {
      margin-top: 0.5rem;
      color: var(--danger);
      font-weight: 500;
    }
  `
})
export class GuessInput {
  protected readonly i18n = inject(I18n);
  private readonly field = viewChild<ElementRef<HTMLInputElement>>('field');

  readonly query = model('');
  readonly disabled = input(false);
  readonly error = input<string | null>(null);
  readonly exclude = input<readonly (string | null)[]>([]);
  readonly turnsLeft = input(0);
  readonly turns = input(0);
  readonly submitted = output<string>();
  readonly skipped = output<void>();

  protected readonly focused = signal(false);
  protected readonly dismissed = signal(false);
  protected readonly active = signal(-1);

  protected readonly suggestions = computed(() => {
    const excluded = new Set(this.exclude());
    return terms
      .search(this.query(), 12)
      .filter((s) => !excluded.has(s.name))
      .slice(0, 8);
  });
  protected readonly open = computed(() => this.focused() && !this.dismissed() && this.suggestions().length > 0 && !this.disabled());
  protected readonly turnsText = computed(() => fmt(this.i18n.t().play.turnsLeft, { n: this.turnsLeft(), total: this.turns() }));
  protected readonly countText = computed(() => {
    if (!this.focused() || !this.query().trim()) return '';
    const n = this.suggestions().length;
    return n ? fmt(this.i18n.t().play.suggestionCount, { n }) : this.i18n.t().play.noSuggestions;
  });

  focus(): void {
    this.field()?.nativeElement.focus();
  }

  protected onInput(e: Event): void {
    this.query.set((e.target as HTMLInputElement).value);
    this.dismissed.set(false);
    this.active.set(-1);
  }

  protected onKeydown(e: KeyboardEvent): void {
    const n = this.suggestions().length;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.dismissed.set(false);
        if (n) this.active.set((this.active() + 1) % n);
        this.scrollActive();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.dismissed.set(false);
        if (n) this.active.set(this.active() <= 0 ? n - 1 : this.active() - 1);
        this.scrollActive();
        break;
      case 'Escape':
        if (this.open()) {
          e.preventDefault();
          this.dismissed.set(true);
          this.active.set(-1);
        } else if (this.query()) {
          e.preventDefault();
          this.query.set('');
        }
        break;
      case 'Enter': {
        const s = this.open() ? this.suggestions()[this.active()] : undefined;
        if (s) {
          e.preventDefault();
          this.choose(s);
        }
        break;
      }
      case 'Tab':
        this.dismissed.set(true);
        break;
    }
  }

  protected pick(s: Suggestion, e: PointerEvent): void {
    // keep focus in the field (and the keyboard open on mobile)
    e.preventDefault();
    this.choose(s);
  }

  protected submitForm(e: Event): void {
    e.preventDefault();
    this.submitted.emit(this.query());
    this.active.set(-1);
  }

  private choose(s: Suggestion): void {
    this.query.set(s.name);
    this.active.set(-1);
    this.dismissed.set(true);
    this.submitted.emit(s.name);
  }

  private scrollActive(): void {
    queueMicrotask(() => document.getElementById(`guess-option-${this.active()}`)?.scrollIntoView?.({ block: 'nearest' }));
  }
}
