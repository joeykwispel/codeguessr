import { Injectable, Injector, inject } from '@angular/core';

/** Opens the statistics dialog. The CDK dialog and the dialog itself are loaded on first use. */
@Injectable({ providedIn: 'root' })
export class OpenStats {
  private readonly injector = inject(Injector);

  async open(): Promise<void> {
    const [{ Dialog }, { StatsDialog }] = await Promise.all([import('@angular/cdk/dialog'), import('./stats-dialog')]);
    this.injector.get(Dialog).open(StatsDialog, {
      ariaLabelledBy: 'stats-title',
      autoFocus: 'first-tabbable',
      restoreFocus: true,
      backdropClass: ['cdk-overlay-dark-backdrop', 'app-backdrop'],
      injector: this.injector
    });
  }
}
