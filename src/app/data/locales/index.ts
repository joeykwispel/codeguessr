import en from './en';
import type { Locale } from '../shared/types';

export type Content = typeof en;

export const locales: Locale[] = ['en'];

/** Returns the interface copy for a locale. Add a language by adding a folder next to en/ with the same files. */
export function getContent(_locale: Locale): Content {
  return en;
}
