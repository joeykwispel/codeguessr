import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';

/**
 * The app name in the kit's editor-path style, under the design-kit header (which stays identical across every
 * joeyoosenbrug.nl app). The game's controls (streak, statistics, sign-in) live in the header: see header-tools.ts.
 */
@Component({
  selector: 'app-app-bar',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bar">
      <a class="name mono" [routerLink]="i18n.href('/')" [attr.aria-label]="i18n.t().nav.home"><span class="tilde" aria-hidden="true">~/</span>codeguessr</a>
    </div>
  `,
  styles: `
    .bar {
      display: flex;
      align-items: center;
      min-height: 36px;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px dashed var(--border);
    }
    .name {
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: -0.02em;
      color: var(--text);
      text-decoration: none;
    }
    .tilde {
      color: var(--accent-text);
    }
  `
})
export class AppBar {
  protected readonly i18n = inject(I18n);
}
