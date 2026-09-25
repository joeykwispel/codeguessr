import { ChangeDetectionStrategy, Component, ElementRef, afterNextRender, inject, input, output, signal } from '@angular/core';
import type { GameState } from '../../core/game';
import { maxTurns } from '../../core/game';
import { I18n, fmt } from '../../core/i18n';
import type { Puzzle } from '../../data/shared/types';
import { Countdown } from '../../shared/components/countdown';
import { Icon } from '../../shared/components/icon';

/** Shown when the game ends: result, answer, fun fact and the countdown to the next puzzle. */
@Component({
  selector: 'app-result-panel',
  imports: [Countdown, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().play;
    @let s = state();
    <section class="glass result" [class.won]="s.status === 'won'" aria-labelledby="result-title" tabindex="-1">
      @if (s.status === 'won') {
        <div class="burst" aria-hidden="true">
          @for (i of pieces; track i) {
            <span [style.--i]="i"></span>
          }
        </div>
      }
      <h2 id="result-title">
        <app-icon [name]="s.status === 'won' ? 'trophy' : 'bulb'" />
        {{ s.status === 'won' ? t.won : t.lost }}
      </h2>
      @if (s.status === 'won') {
        <p>{{ fmt(t.wonIn, { n: s.guesses.length, total: turns() }) }}</p>
      }
      <p class="answer">
        {{ t.answerWas }} <strong class="mono">{{ puzzle().answer }}</strong>
      </p>
      <div class="fact">
        <h3><span class="com" aria-hidden="true">// </span>{{ t.funFact }}</h3>
        <p>{{ puzzle().funFact }}</p>
      </div>
      <ng-content />
      @if (!s.archive) {
        <p class="next">
          @if (newDay()) {
            {{ t.newAvailable }} <button type="button" class="btn" (click)="reload.emit()">{{ t.playNew }}</button>
          } @else {
            {{ t.next }} <app-countdown (elapsed)="newDay.set(true)" />
          }
        </p>
      }
    </section>
  `,
  styles: `
    .result {
      position: relative;
      display: grid;
      gap: 0.75rem;
      padding: 1.25rem;
      overflow: hidden;
    }
    .result {
      animation: fade-up 0.7s var(--ease);
    }
    .result:focus {
      outline: none;
    }
    .won {
      border-color: color-mix(in srgb, var(--accent) 55%, var(--border));
    }
    h2 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: clamp(1.4rem, 3vw, 1.75rem);
    }
    .won h2 {
      color: var(--ok);
    }
    .answer strong {
      font-size: 1.125rem;
    }
    .fact {
      padding: 0.75rem 0.875rem;
      border-left: 3px solid var(--accent);
      background: var(--surface);
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    }
    h3 {
      font-family: var(--mono);
      font-size: 0.8rem;
      letter-spacing: 0;
      color: var(--muted);
      margin-bottom: 0.25rem;
    }
    .next {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      color: var(--muted);
    }
    .next app-countdown {
      color: var(--text);
      font-weight: 700;
    }
    .burst {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .burst span {
      position: absolute;
      top: 2rem;
      left: 2rem;
      width: 10px;
      height: 10px;
      border-radius: 2px;
      background: var(--accent);
      opacity: 0;
      animation: pop 0.9s var(--ease) forwards;
      animation-delay: calc(var(--i) * 20ms);
      --a: calc(var(--i) * 30deg);
    }
    .burst span:nth-child(3n) {
      background: var(--accent-2);
    }
    @keyframes pop {
      0% {
        opacity: 1;
        transform: rotate(var(--a)) translateY(0) scale(1);
      }
      100% {
        opacity: 0;
        transform: rotate(var(--a)) translateY(-90px) scale(0.4);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .burst {
        display: none;
      }
    }
  `
})
export class ResultPanel {
  protected readonly i18n = inject(I18n);
  protected readonly fmt = fmt;
  protected readonly pieces = Array.from({ length: 12 }, (_, i) => i);
  protected readonly newDay = signal(false);

  readonly state = input.required<GameState>();
  readonly puzzle = input.required<Puzzle>();
  /** Move focus here when the game ends during play (not when reopening a finished game). */
  readonly focusOnShow = input(false);
  readonly reload = output<void>();

  protected turns = () => maxTurns(this.state());

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef);
    afterNextRender(() => {
      if (this.focusOnShow()) el.nativeElement.querySelector<HTMLElement>('section')?.focus();
    });
  }
}
