import { Routes } from '@angular/router';

const play = () => import('./features/play/play.page').then((m) => m.PlayPage);

/** Every page exists twice: English at the root and Dutch under /nl (see core/locale-path.ts). */
const pages: Routes = [
  { path: '', loadComponent: play },
  { path: 'archive', loadComponent: () => import('./features/archive/archive.page').then((m) => m.ArchivePage) },
  { path: 'privacy', loadComponent: () => import('./features/privacy/privacy.page').then((m) => m.PrivacyPage) },
  // a past puzzle; the :date input is read by PlayPage (withComponentInputBinding)
  { path: 'archive/:date', loadComponent: play },
  { path: '**', loadComponent: () => import('./features/not-found.page').then((m) => m.NotFoundPage) }
];

export const routes: Routes = [{ path: 'nl', children: pages }, ...pages];
