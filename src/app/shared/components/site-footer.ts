import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().footer;
    <footer>
      <p>{{ t.daily }}</p>
      <p>
        {{ t.madeBy }} <a href="https://joeyoosenbrug.nl">Joey Oosenbrug</a> ·
        <a href="https://github.com/joeykwispel/codeguessr">{{ t.source }}</a>
      </p>
    </footer>
  `,
  styles: `
    footer {
      max-width: var(--max);
      margin: 0 auto;
      padding: 1.5rem var(--gutter) 2rem;
      color: var(--muted);
      font-size: 0.875rem;
      text-align: center;
      display: grid;
      gap: 0.25rem;
    }
    a {
      display: inline-block;
      padding: 0.5rem 0;
    }
  `
})
export class SiteFooter {
  protected readonly i18n = inject(I18n);
}
