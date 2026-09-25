import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';
import { AuthService } from './auth.service';
import { mergeOnSignIn } from './merge';
import { type GameResult, type Stats, recordGame } from './stats';
import { StatsService, normalizeStats } from './stats.service';
import { storage } from './storage';
import { Supabase } from './supabase.client';

/** A row of public.user_stats. */
interface UserStatsRow {
  user_id: string;
  streak: number;
  max_streak: number;
  last_played_date: string | null;
  games_played: number;
  games_won: number;
  guess_distribution: number[];
}

export type SyncStatus = 'off' | 'syncing' | 'synced' | 'error';

const UNSYNCED_KEY = 'cg:unsynced';
const OWNER_KEY = 'cg:sync-owner';

export const toRow = (userId: string, s: Stats): UserStatsRow => ({
  user_id: userId,
  streak: s.streak,
  max_streak: Math.max(s.maxStreak, s.streak),
  last_played_date: s.lastPlayedDate,
  games_played: s.gamesPlayed,
  games_won: Math.min(s.gamesWon, s.gamesPlayed),
  guess_distribution: s.guessDistribution
});

export const fromRow = (r: UserStatsRow): Stats =>
  normalizeStats({
    streak: r.streak,
    maxStreak: r.max_streak,
    lastPlayedDate: r.last_played_date,
    gamesPlayed: r.games_played,
    gamesWon: r.games_won,
    guessDistribution: r.guess_distribution
  });

/**
 * Optional cloud layer on top of StatsService. Local stats stay the source the UI reads; this service only:
 * - queues daily results finished while signed out (or while offline),
 * - merges the local stats into the user's row on sign-in (see core/merge.ts),
 * - pushes each finished daily game to the row while signed in.
 * Dropping sign-in means deleting this file, auth.service.ts, features/auth and the two init() calls in app.ts.
 */
@Injectable({ providedIn: 'root' })
export class CloudSync {
  private readonly supabase = inject(Supabase);
  private readonly auth = inject(AuthService);
  private readonly stats = inject(StatsService);
  private readonly destroyRef = inject(DestroyRef);
  private started = false;

  readonly status = signal<SyncStatus>('off');

  init(): void {
    if (this.started || !this.supabase.configured) return;
    this.started = true;

    this.stats.onRecorded((result) => {
      const user = this.auth.user();
      if (user) void this.push(user.id, result);
      else this.queue(result);
    });

    this.auth.events$
      .pipe(
        map((e) => e.session?.user.id ?? null),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((userId) => {
        if (userId) void this.syncOnSignIn(userId);
        else this.status.set('off');
      });
  }

  /** Pulls the user's row, merges this device's stats in, writes the result back and mirrors it locally. */
  private async syncOnSignIn(userId: string): Promise<void> {
    this.status.set('syncing');
    try {
      const client = await this.supabase.get();
      if (!client) return;
      const { data, error } = await client.from('user_stats').select('*').eq('user_id', userId).maybeSingle();
      if (error) throw error;
      const owner = storage.getString(OWNER_KEY);
      const merged = mergeOnSignIn({
        cloud: data ? fromRow(data as UserStatsRow) : null,
        local: this.stats.stats(),
        unsynced: this.unsynced(),
        owner: owner === null ? 'none' : owner === userId ? 'self' : 'other'
      });
      await this.write(userId, merged);
    } catch {
      // keep the queue; the next sign-in or page load tries again
      this.status.set('error');
    }
  }

  /** Adds one finished game to the latest cloud row (so games from other devices are never overwritten). */
  private async push(userId: string, result: GameResult): Promise<void> {
    this.status.set('syncing');
    try {
      const client = await this.supabase.get();
      if (!client) return;
      const { data, error } = await client.from('user_stats').select('*').eq('user_id', userId).maybeSingle();
      if (error) throw error;
      const base = data ? fromRow(data as UserStatsRow) : this.stats.stats();
      await this.write(userId, data ? recordGame(base, result) : base);
    } catch {
      this.queue(result);
      this.status.set('error');
    }
  }

  private async write(userId: string, merged: Stats): Promise<void> {
    const client = await this.supabase.get();
    if (!client) return;
    const { error } = await client.from('user_stats').upsert(toRow(userId, merged), { onConflict: 'user_id' });
    if (error) throw error;
    this.stats.replace(merged);
    storage.set(UNSYNCED_KEY, []);
    storage.setString(OWNER_KEY, userId);
    this.status.set('synced');
  }

  private unsynced(): GameResult[] {
    const list = storage.get<GameResult[]>(UNSYNCED_KEY, []);
    return Array.isArray(list) ? list : [];
  }

  private queue(result: GameResult): void {
    const list = this.unsynced().filter((r) => r.date !== result.date);
    storage.set(UNSYNCED_KEY, [...list, result]);
  }
}
