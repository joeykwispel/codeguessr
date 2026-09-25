import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import type { AuthChangeEvent, Session, SupabaseClient } from '@supabase/supabase-js';
import { Observable, defer, shareReplay, switchMap } from 'rxjs';
import { I18n, fmt } from './i18n';
import { Supabase } from './supabase.client';

export interface AuthUser {
  id: string;
  email: string | null;
  name: string | null;
  avatarUrl: string | null;
}

/** 'unavailable' when no Supabase project is configured; 'loading' until the stored session has been checked. */
export type AuthStatus = 'unavailable' | 'loading' | 'signed-out' | 'signed-in';

export interface AuthEvent {
  event: AuthChangeEvent;
  session: Session | null;
}

/** Only what Google OAuth gives us: id, email, name, avatar. Nothing else is read or stored. */
export function toUser(session: Session | null): AuthUser | null {
  const u = session?.user;
  if (!u) return null;
  const meta = (u.user_metadata ?? {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === 'string' && v ? v : null);
  return {
    id: u.id,
    email: u.email ?? null,
    name: str(meta['full_name']) ?? str(meta['name']),
    avatarUrl: str(meta['avatar_url']) ?? str(meta['picture'])
  };
}

/**
 * Optional Google sign-in through Supabase Auth. Nothing waits on it: the game, stats and archive work the same
 * signed out, and every failure (offline, blocked storage, cancelled consent) just leaves you signed out.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly supabase = inject(Supabase);
  private readonly announcer = inject(LiveAnnouncer);
  private readonly i18n = inject(I18n);
  private readonly destroyRef = inject(DestroyRef);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private started = false;

  readonly status = signal<AuthStatus>(this.supabase.configured ? 'loading' : 'unavailable');
  readonly user = signal<AuthUser | null>(null);
  readonly error = signal<string | null>(null);

  /** Session changes as a stream (initial session, sign-in, token refresh, sign-out). */
  readonly events$: Observable<AuthEvent> = defer(() => this.supabase.get()).pipe(
    switchMap((client) => (client ? authEvents(client) : new Observable<AuthEvent>((sub) => sub.complete()))),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  /** Starts listening. Called once after the first render, so it never delays the page. */
  init(): void {
    if (this.started || !this.browser || !this.supabase.configured) return;
    this.started = true;
    this.readRedirectError();
    this.events$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: ({ event, session }) => this.apply(event, session),
      error: () => this.status.set('signed-out')
    });
    // if the auth library never answers (offline, storage blocked), stop showing a spinner
    setTimeout(() => {
      if (this.status() === 'loading') this.status.set('signed-out');
    }, 8000);
  }

  async signIn(): Promise<void> {
    this.error.set(null);
    try {
      const client = await this.supabase.get();
      if (!client) throw new Error('unavailable');
      const redirectTo = `${location.origin}${location.pathname}`;
      const { error } = await client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo } });
      if (error) throw error;
    } catch {
      this.fail(this.i18n.t().auth.error);
    }
  }

  async signOut(): Promise<void> {
    try {
      const client = await this.supabase.get();
      // 'local' clears this device even when the server can't be reached
      await client?.auth.signOut({ scope: 'local' });
    } catch {
      // already signed out server-side or offline: the local session is gone either way
    }
    this.apply('SIGNED_OUT', null);
  }

  private apply(event: AuthChangeEvent, session: Session | null): void {
    const before = this.status();
    const user = toUser(session);
    this.user.set(user);
    this.status.set(user ? 'signed-in' : 'signed-out');
    const t = this.i18n.t().auth;
    if (user && before !== 'signed-in' && event === 'SIGNED_IN') {
      void this.announcer.announce(fmt(t.signedInAs, { name: user.name ?? user.email ?? '' }), 'polite');
    } else if (!user && before === 'signed-in') {
      void this.announcer.announce(event === 'SIGNED_OUT' ? t.signedOut : t.expired, 'polite');
    }
  }

  /** Google or Supabase can send the visitor back with ?error=...; show it and clean the URL. */
  private readRedirectError(): void {
    const params = new URLSearchParams(location.search);
    const hash = new URLSearchParams(location.hash.slice(1));
    if (!params.has('error') && !hash.has('error')) return;
    this.fail(params.get('error') === 'access_denied' || hash.get('error') === 'access_denied' ? this.i18n.t().auth.cancelled : this.i18n.t().auth.error);
    history.replaceState(history.state, '', location.pathname);
  }

  private fail(message: string): void {
    this.error.set(message);
    void this.announcer.announce(message, 'assertive');
  }
}

function authEvents(client: SupabaseClient): Observable<AuthEvent> {
  return new Observable<AuthEvent>((subscriber) => {
    const { data } = client.auth.onAuthStateChange((event, session) => subscriber.next({ event, session }));
    return () => data.subscription.unsubscribe();
  });
}
