import en from './en';
import nl from './nl';
import type { Locale } from '../shared/types';

export type Content = typeof en;

export const locales: Locale[] = ['en', 'nl'];

/** Returns the interface copy for a locale. Add a language by adding a folder next to en/ and nl/ with the same files. */
export function getContent(locale: Locale): Content {
  return locale === 'nl' ? nl : en;
}
