import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';

/** Footer in the portfolio's style: mono, muted, a // comment, external links marked with ↗. */
@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().footer;
    <footer>
      <div class="row mono">
        <p><span class="com">// </span>© {{ year }} Codeguessr · {{ t.daily }}</p>
        <p>
          {{ t.madeBy }}
          <a href="https://joeyoosenbrug.nl/" target="_blank" rel="noopener noreferrer"
            >Joey Oosenbrug ↗<span class="sr-only"> {{ t.newTab }}</span></a
          >
          ·
          <a href="https://github.com/joeykwispel/codeguessr" target="_blank" rel="noopener noreferrer"
            >{{ t.source }} ↗<span class="sr-only"> {{ t.newTab }}</span></a
          >
          ·
          <a [routerLink]="i18n.href('/privacy')">{{ t.privacy }}</a>
        </p>
      </div>
    </footer>
  `,
  styles: `
    footer {
      border-top: 1px solid var(--border);
      padding-block: 1.25rem 1.5rem;
      color: var(--muted);
      font-size: 0.8rem;
      background: color-mix(in srgb, var(--bg) 70%, transparent);
    }
    .row {
      width: min(var(--column), 100% - 2rem);
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem 1rem;
      flex-wrap: wrap;
    }
    a {
      display: inline-block;
      padding-block: 0.25rem;
    }
  `
})
export class SiteFooter {
  protected readonly i18n = inject(I18n);
  protected readonly year = new Date().getUTCFullYear();
}
