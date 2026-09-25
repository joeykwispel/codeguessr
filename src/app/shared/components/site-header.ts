import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { Icon } from './icon';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <a class="brand" routerLink="/" aria-label="Codeguessr, today's puzzle">
        <img src="favicon.svg" alt="" width="28" height="28" />
        <span>Codeguessr</span>
      </a>
      <nav aria-label="Main">
        <button
          type="button"
          class="icon-btn"
          (click)="theme.toggle()"
          [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        >
          <app-icon [name]="theme.theme() === 'dark' ? 'sun' : 'moon'" />
        </button>
      </nav>
    </header>
  `,
  styles: `
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      max-width: 960px;
      margin: 0 auto;
      padding: 0.5rem var(--gutter);
    }
    :host {
      display: block;
      border-bottom: 1px solid var(--border);
      background: var(--surface);
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      min-height: 44px;
      color: var(--text);
      font-weight: 800;
      font-size: 1.125rem;
      text-decoration: none;
      letter-spacing: -0.01em;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 0.125rem;
    }
  `
})
export class SiteHeader {
  protected readonly theme = inject(ThemeService);
}
