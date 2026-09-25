import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/play/play.page').then((m) => m.PlayPage) },
  { path: '**', loadComponent: () => import('./features/not-found.page').then((m) => m.NotFoundPage) }
];
