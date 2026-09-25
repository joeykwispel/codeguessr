import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { storage } from './storage';

interface Settings {
  hard: boolean;
}

const KEY = 'cg:settings';

/** Player preferences that outlive a single game. */
@Injectable({ providedIn: 'root' })
export class SettingsService {
  readonly hard = signal(false);

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) this.hard.set(storage.get<Settings>(KEY, { hard: false }).hard === true);
  }

  setHard(hard: boolean): void {
    this.hard.set(hard);
    storage.set(KEY, { hard } satisfies Settings);
  }
}
