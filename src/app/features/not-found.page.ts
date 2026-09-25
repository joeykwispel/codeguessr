import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../core/i18n';
import { Seo } from '../core/seo.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().notFound;
    <h1>{{ t.title }}</h1>
    <p class="muted">{{ t.text }}</p>
    <p>
      <a [routerLink]="i18n.href('/')">{{ t.link }}</a>
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

  constructor() {
    inject(Seo).set('notFound');
  }
}
