import { localeOf, localize, publicPath, publicUrl, stripLocale } from './locale-path';

describe('locale paths', () => {
  it('prefixes Dutch and leaves English at the root', () => {
    expect(localize('/', 'en')).toBe('/');
    expect(localize('/', 'nl')).toBe('/nl');
    expect(localize('/archive', 'nl')).toBe('/nl/archive');
    expect(localize('/nl/archive', 'en')).toBe('/archive');
    expect(localize('/nl/archive', 'nl')).toBe('/nl/archive');
  });

  it('strips the locale prefix', () => {
    expect(stripLocale('/nl')).toBe('/');
    expect(stripLocale('/nl/')).toBe('/');
    expect(stripLocale('/nl/archive/2026-09-21')).toBe('/archive/2026-09-21');
    expect(stripLocale('/archive')).toBe('/archive');
    // a path that only starts with "nl" is not Dutch
    expect(stripLocale('/nlx')).toBe('/nlx');
  });

  it('reads the locale from a path', () => {
    expect(localeOf('/nl')).toBe('nl');
    expect(localeOf('/nl/archive')).toBe('nl');
    expect(localeOf('/nl?code=abc')).toBe('nl');
    expect(localeOf('/')).toBe('en');
    expect(localeOf('/nlx')).toBe('en');
  });

  it('builds public paths for the language links', () => {
    expect(publicPath('/')).toBe('/');
    expect(publicPath('/nl')).toBe('/nl/');
    expect(publicPath('/archive/2026-09-21')).toBe('/archive/2026-09-21/');
    expect(publicPath('/archive/?x=1')).toBe('/archive/');
  });

  it('builds public URLs with a trailing slash', () => {
    expect(publicUrl('https://x.nl', '/')).toBe('https://x.nl/');
    expect(publicUrl('https://x.nl', '/nl')).toBe('https://x.nl/nl/');
    expect(publicUrl('https://x.nl', '/nl/archive?x=1')).toBe('https://x.nl/nl/archive/');
  });
});
