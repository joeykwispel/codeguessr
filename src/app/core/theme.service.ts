import { DOCUMENT, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { storage } from './storage';

export type Theme = 'light' | 'dark';

/**
 * Dark/light theme. Without a stored choice the system preference wins (handled in CSS, so it also works before
 * Angular boots). A stored choice is applied by the inline script in index.html and mirrored here.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly theme = signal<Theme>('dark');

  constructor() {
    if (!this.browser) return;
    const stored = storage.getString('theme');
    const system: Theme = globalThis.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    this.theme.set(stored === 'light' || stored === 'dark' ? stored : system);
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.doc.documentElement.dataset['theme'] = next;
    // the browser UI colour follows the chosen theme instead of the system one
    for (const meta of Array.from(this.doc.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')))
      meta.content = next === 'dark' ? '#0b0f17' : '#f6f7f9';
    storage.setString('theme', next);
  }
}
