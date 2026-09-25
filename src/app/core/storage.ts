/**
 * localStorage that never throws. Private windows, blocked site data and prerendering (no window at all)
 * all fall back to "nothing stored", so the game keeps working without persistence.
 */
export const storage = {
  get<T>(key: string, fallback: T): T {
    try {
      const raw = globalThis.localStorage?.getItem(key);
      return raw == null ? fallback : (JSON.parse(raw) as T);
    } catch {
      return fallback;
    }
  },
  set(key: string, value: unknown): void {
    try {
      globalThis.localStorage?.setItem(key, JSON.stringify(value));
    } catch {
      // storage full or blocked: keep the in-memory state
    }
  },
  getString(key: string): string | null {
    try {
      return globalThis.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  },
  setString(key: string, value: string): void {
    try {
      globalThis.localStorage?.setItem(key, value);
    } catch {
      // ignore
    }
  },
  remove(key: string): void {
    try {
      globalThis.localStorage?.removeItem(key);
    } catch {
      // ignore
    }
  }
};
