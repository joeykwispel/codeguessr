import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { Seo } from '../../core/seo.service';

/** /privacy and /nl/privacy: the privacy policy, text in data/locales/<lang>/privacy.ts. */
@Component({
  selector: 'app-privacy-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let p = privacy();
    <article>
      <header class="intro">
        <h1>{{ p.title }}</h1>
        <p class="updated mono">{{ p.updated }}</p>
        <p class="lead">{{ p.intro }}</p>
      </header>
      @for (s of p.sections; track s.heading) {
        <section>
          <h2><span class="br" aria-hidden="true">// </span>{{ s.heading }}</h2>
          @for (para of s.paragraphs; track $index) {
            <p>{{ para }}</p>
          }
        </section>
      }
    </article>
  `,
  styles: `
    article {
      display: grid;
      gap: 1.75rem;
    }
    .intro {
      display: grid;
      gap: 0.5rem;
    }
    h1 {
      font-size: clamp(2rem, 6vw, 3rem);
      letter-spacing: -0.04em;
      line-height: 1;
    }
    .updated {
      font-size: 0.8rem;
      color: var(--muted);
    }
    .lead {
      font-size: 1.05rem;
    }
    section {
      display: grid;
      gap: 0.6rem;
    }
    h2 {
      font-size: 1.05rem;
      letter-spacing: -0.02em;
    }
    .br {
      color: var(--syn-com);
    }
  `
})
export class PrivacyPage {
  private readonly i18n = inject(I18n);
  protected readonly privacy = computed(() => this.i18n.content().privacy);

  constructor() {
    inject(Seo).set('privacy');
  }
}
