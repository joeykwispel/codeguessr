import { Injectable, computed, signal } from '@angular/core';
import { getContent } from '../data/locales';
import type { Locale } from '../data/shared/types';

/** Fills {placeholders} in a translated string. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, key: string) => (key in values ? String(values[key]) : m));
}

/** The active language and its copy. */
@Injectable({ providedIn: 'root' })
export class I18n {
  readonly locale = signal<Locale>('en');
  readonly content = computed(() => getContent(this.locale()));
  readonly t = computed(() => this.content().ui);
}
