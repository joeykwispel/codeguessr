import { Injectable, inject } from '@angular/core';
import { Supabase } from './supabase.client';

export const metrics = ['played', 'streak', 'wins'] as const;
export type Metric = (typeof metrics)[number];

export interface LeaderboardEntry {
  rank: number;
  nickname: string;
  value: number;
}

/** Why joining failed: the nickname is taken, doesn't match the rules, or anything else (offline, server). */
export type JoinError = 'taken' | 'invalid' | 'failed';

/** Same rule as the database check: 2-20 letters (a-z), digits, spaces, dots, dashes, underscores; no outer spaces. */
const NICKNAME = /^[A-Za-z0-9._-][A-Za-z0-9 ._-]{0,18}[A-Za-z0-9._-]$/;

export function validNickname(nickname: string): boolean {
  return NICKNAME.test(nickname);
}

/**
 * The opt-in leaderboard. Anyone can read the ranking through the public leaderboard() function, which only
 * returns nicknames and numbers. Joining, renaming and leaving touch only your own row (Row Level Security).
 */
@Injectable({ providedIn: 'root' })
export class LeaderboardService {
  private readonly supabase = inject(Supabase);

  get available(): boolean {
    return this.supabase.configured;
  }

  async top(metric: Metric, limit = 50): Promise<LeaderboardEntry[]> {
    const client = await this.supabase.get();
    if (!client) throw new Error('unavailable');
    const { data, error } = await client.rpc('leaderboard', { metric, max_rows: limit });
    if (error) throw error;
    return (data ?? []) as LeaderboardEntry[];
  }

  /** Your nickname, or null when you haven't joined. */
  async nickname(userId: string): Promise<string | null> {
    const client = await this.supabase.get();
    if (!client) return null;
    const { data, error } = await client.from('leaderboard_profiles').select('nickname').eq('user_id', userId).maybeSingle();
    if (error) throw error;
    return (data as { nickname: string } | null)?.nickname ?? null;
  }

  /** Joins, or changes your nickname if you already joined. */
  async join(userId: string, nickname: string): Promise<JoinError | null> {
    const name = nickname.trim();
    if (!validNickname(name)) return 'invalid';
    try {
      const client = await this.supabase.get();
      if (!client) return 'failed';
      const { error } = await client.from('leaderboard_profiles').upsert({ user_id: userId, nickname: name }, { onConflict: 'user_id' });
      if (!error) return null;
      return error.code === '23505' ? 'taken' : error.code === '23514' ? 'invalid' : 'failed';
    } catch {
      return 'failed';
    }
  }

  async leave(userId: string): Promise<boolean> {
    try {
      const client = await this.supabase.get();
      if (!client) return false;
      const { error } = await client.from('leaderboard_profiles').delete().eq('user_id', userId);
      return !error;
    } catch {
      return false;
    }
  }
}
