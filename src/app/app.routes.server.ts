import { RenderMode, ServerRoute } from '@angular/ssr';

/** Static export for GitHub Pages: fixed pages are prerendered, everything else falls back to the client-rendered 404.html. */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client }
];
