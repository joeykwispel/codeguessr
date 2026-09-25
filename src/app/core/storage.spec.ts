import { storage } from './storage';

describe('storage', () => {
  beforeEach(() => localStorage.clear());

  it('round-trips JSON values', () => {
    storage.set('k', { a: 1 });
    expect(storage.get('k', null)).toEqual({ a: 1 });
  });

  it('returns the fallback for missing or corrupt values', () => {
    expect(storage.get('missing', 42)).toBe(42);
    localStorage.setItem('bad', '{not json');
    expect(storage.get('bad', 'fallback')).toBe('fallback');
  });
});
