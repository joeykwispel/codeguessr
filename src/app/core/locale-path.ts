import type { Locale } from '../data/shared/types';

/**
 * Route-based i18n: English lives at the root, Dutch under /nl. Paths here are router paths without a trailing
 * slash ("/", "/archive"); the static files on GitHub Pages add the slash ("/nl/archive/").
 */

const NL = /^\/nl(?=\/|$|\?|#)/;

export function localeOf(path: string): Locale {
  return NL.test(path) ? 'nl' : 'en';
}

/** The path without its locale prefix: "/nl/archive" -> "/archive", "/nl" -> "/". */
export function stripLocale(path: string): string {
  const stripped = path.replace(NL, '');
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
}

/** The path in a given locale: ("/archive", "nl") -> "/nl/archive", ("/", "nl") -> "/nl". */
export function localize(path: string, locale: Locale): string {
  const neutral = stripLocale(path);
  if (locale === 'en') return neutral;
  return neutral === '/' ? '/nl' : `/nl${neutral}`;
}

/** A page's public path, with the trailing slash GitHub Pages uses for directories: "/nl/archive" -> "/nl/archive/". */
export function publicPath(path: string): string {
  const clean = path.split(/[?#]/)[0] ?? '/';
  return clean === '/' || clean === '' ? '/' : `${clean.replace(/\/$/, '')}/`;
}

/** The public URL of a page. */
export function publicUrl(siteUrl: string, path: string): string {
  return `${siteUrl}${publicPath(path)}`;
}
