import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <p>A new puzzle every day at 00:00 UTC.</p>
      <p>
        Made by <a href="https://joeyoosenbrug.nl">Joey Oosenbrug</a> ·
        <a href="https://github.com/joeykwispel/codeguessr">Source</a>
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
export class SiteFooter {}
