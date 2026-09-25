/**
 * UTC calendar-day helpers. A "day" is a YYYY-MM-DD string in UTC, so every visitor gets the same puzzle
 * no matter their timezone, and the puzzle changes at 00:00 UTC.
 */

const DAY_MS = 86_400_000;
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

/** The UTC day for a moment in time. */
export function utcDay(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10);
}

/** Whether a string is a real calendar day in YYYY-MM-DD form (rejects 2026-02-30). */
export function isDay(value: string): boolean {
  if (!ISO_DAY.test(value)) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && utcDay(d) === value;
}

/** Milliseconds since the epoch at 00:00 UTC of a day. */
function startOf(day: string): number {
  return Date.parse(`${day}T00:00:00Z`);
}

/** The day `n` days after (or before, if negative) `day`. */
export function addDays(day: string, n: number): string {
  return utcDay(new Date(startOf(day) + n * DAY_MS));
}

/** Whole days from `a` to `b` (positive when b is later). */
export function daysBetween(a: string, b: string): number {
  return Math.round((startOf(b) - startOf(a)) / DAY_MS);
}

/** Milliseconds until the next UTC midnight, for the "next puzzle in" countdown. */
export function msUntilNextDay(now: Date = new Date()): number {
  return startOf(addDays(utcDay(now), 1)) - now.getTime();
}

/** All days from `from` to `to`, inclusive. */
export function dayRange(from: string, to: string): string[] {
  const n = daysBetween(from, to);
  return n < 0 ? [] : Array.from({ length: n + 1 }, (_, i) => addDays(from, i));
}
