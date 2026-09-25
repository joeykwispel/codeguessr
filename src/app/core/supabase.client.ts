import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

/**
 * The one Supabase client. It uses the public anon key: everything it can do is limited by Row Level Security
 * (read published puzzles, read/write your own stats row). supabase-js is loaded on first use, so it never
 * weighs on the initial bundle, and it's never created during prerendering.
 */
@Injectable({ providedIn: 'root' })
export class Supabase {
  /** False when no project is configured (or during prerendering): the app then runs fully offline. */
  readonly configured = isPlatformBrowser(inject(PLATFORM_ID)) && !!environment.supabaseUrl && !!environment.supabaseAnonKey;
  private client?: Promise<SupabaseClient | null>;

  get(): Promise<SupabaseClient | null> {
    if (!this.configured) return Promise.resolve(null);
    this.client ??= import('@supabase/supabase-js')
      .then(({ createClient }) =>
        createClient(environment.supabaseUrl, environment.supabaseAnonKey, {
          auth: { flowType: 'pkce', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
        })
      )
      .catch(() => {
        // chunk failed to load (offline on first visit): behave as if Supabase isn't configured
        this.client = undefined;
        return null;
      });
    return this.client;
  }
}
