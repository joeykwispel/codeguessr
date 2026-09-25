import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-play-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Today's puzzle</h1>
    <p class="muted">Guess the tech term from up to six clues.</p>
  `
})
export class PlayPage {}
