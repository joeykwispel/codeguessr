import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Static export for GitHub Pages: fixed pages are prerendered in both languages (each with its own <html lang>,
 * title, canonical and hreflang tags). Archive games (/archive/<date>) and unknown paths are client-rendered from
 * 404.html, the app shell that GitHub Pages serves for any path without a file.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'archive', renderMode: RenderMode.Prerender },
  { path: 'nl', renderMode: RenderMode.Prerender },
  { path: 'nl/archive', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client }
];
