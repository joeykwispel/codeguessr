import { addDays, dayRange, daysBetween, isDay, msUntilNextDay, utcDay } from './dates';

describe('UTC day resolution', () => {
  it('uses the UTC date, not the local one', () => {
    // 23:30 on the 24th in New York is already the 25th in UTC
    expect(utcDay(new Date('2026-09-24T23:30:00-04:00'))).toBe('2026-09-25');
    // 00:30 on the 25th in Amsterdam is still the 24th in UTC
    expect(utcDay(new Date('2026-09-25T00:30:00+02:00'))).toBe('2026-09-24');
  });

  it('switches exactly at midnight UTC', () => {
    expect(utcDay(new Date('2026-09-24T23:59:59.999Z'))).toBe('2026-09-24');
    expect(utcDay(new Date('2026-09-25T00:00:00.000Z'))).toBe('2026-09-25');
  });

  it('counts down to the next UTC midnight', () => {
    expect(msUntilNextDay(new Date('2026-09-24T23:59:59.000Z'))).toBe(1000);
    expect(msUntilNextDay(new Date('2026-09-25T00:00:00.000Z'))).toBe(86_400_000);
  });

  it('adds days across month, year and leap-day boundaries', () => {
    expect(addDays('2026-09-30', 1)).toBe('2026-10-01');
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
    expect(addDays('2028-02-28', 1)).toBe('2028-02-29');
    expect(addDays('2026-03-01', -1)).toBe('2026-02-28');
  });

  it('ignores daylight saving changes (UTC has none)', () => {
    // Europe switches clocks on 2026-10-25; a UTC day is still exactly one day
    expect(daysBetween('2026-10-24', '2026-10-26')).toBe(2);
    expect(addDays('2026-03-28', 2)).toBe('2026-03-30');
  });

  it('validates day strings', () => {
    expect(isDay('2026-09-25')).toBe(true);
    expect(isDay('2026-02-30')).toBe(false);
    expect(isDay('2026-9-25')).toBe(false);
    expect(isDay('not-a-day')).toBe(false);
  });

  it('builds inclusive ranges', () => {
    expect(dayRange('2026-09-29', '2026-10-01')).toEqual(['2026-09-29', '2026-09-30', '2026-10-01']);
    expect(dayRange('2026-10-01', '2026-09-29')).toEqual([]);
  });
});
