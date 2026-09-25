import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>404: term not found</h1>
    <p class="muted">This page doesn't exist.</p>
    <p><a routerLink="/">Play today's puzzle</a></p>
  `,
  styles: `
    :host {
      display: grid;
      gap: 1rem;
      padding-top: 2rem;
    }
  `
})
export class NotFoundPage {}
