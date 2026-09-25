import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Static export for GitHub Pages: fixed pages are prerendered in both languages (each with its own <html lang>,
 * title, canonical and hreflang tags); everything else falls back to the client-rendered 404.html.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'nl', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client }
];
