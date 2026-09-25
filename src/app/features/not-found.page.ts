import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../core/i18n';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().notFound;
    <h1>{{ t.title }}</h1>
    <p class="muted">{{ t.text }}</p>
    <p>
      <a routerLink="/">{{ t.link }}</a>
    </p>
  `,
  styles: `
    :host {
      display: grid;
      gap: 1rem;
      padding-top: 2rem;
    }
  `
})
export class NotFoundPage {
  protected readonly i18n = inject(I18n);
}
