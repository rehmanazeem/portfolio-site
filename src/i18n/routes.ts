import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from './ui';

/** Page keys and their path per locale (relative to the locale root). */
export const routes = {
  home: { en: '', de: '' },
  how: { en: 'how-i-work', de: 'so-arbeite-ich' },
  about: { en: 'about', de: 'ueber-mich' },
  contact: { en: 'contact', de: 'kontakt' },
} as const;

export type RouteKey = keyof typeof routes | 'privacy';

/** Locale-aware URL (honours the site base path). */
export function urlFor(route: RouteKey, locale: Locale): string {
  if (route === 'privacy') return getRelativeLocaleUrl(locale, locale === 'en' ? 'privacy' : 'datenschutz');
  return getRelativeLocaleUrl(locale, routes[route][locale]);
}

/** Impressum is a single German page shared by both languages. */
export const impressumUrl = (): string => getRelativeLocaleUrl('en', 'impressum');
