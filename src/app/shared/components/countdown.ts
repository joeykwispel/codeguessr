import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, computed, inject, output, signal } from '@angular/core';
import { msUntilNextDay } from '../../core/dates';

/** Time left until the next UTC midnight, ticking every second (only in the browser). Emits once it reaches zero. */
@Component({
  selector: 'app-countdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<time class="mono" [attr.datetime]="duration()">{{ text() }}</time>`
})
export class Countdown {
  readonly elapsed = output<void>();
  private readonly ms = signal<number | null>(null);

  protected readonly text = computed(() => {
    const ms = this.ms();
    if (ms === null) return '--:--:--';
    const s = Math.max(0, Math.floor(ms / 1000));
    return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((n) => String(n).padStart(2, '0')).join(':');
  });
  protected readonly duration = computed(() => `PT${Math.max(0, Math.floor((this.ms() ?? 0) / 1000))}S`);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const tick = () => {
        const ms = msUntilNextDay();
        // msUntilNextDay is never 0 (at midnight it's a full day again), so detect the wrap-around instead
        const prev = this.ms();
        this.ms.set(ms);
        if (prev !== null && ms > prev) this.elapsed.emit();
      };
      tick();
      const id = setInterval(tick, 1000);
      destroyRef.onDestroy(() => clearInterval(id));
    });
  }
}
