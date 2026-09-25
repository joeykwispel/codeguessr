import { Routes } from '@angular/router';

/** Every page exists twice: English at the root and Dutch under /nl (see core/locale-path.ts). */
const pages: Routes = [
  { path: '', loadComponent: () => import('./features/play/play.page').then((m) => m.PlayPage) },
  { path: '**', loadComponent: () => import('./features/not-found.page').then((m) => m.NotFoundPage) }
];

export const routes: Routes = [{ path: 'nl', children: pages }, ...pages];
