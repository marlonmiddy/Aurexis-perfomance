/**
 * Single source of truth for the canonical origin.
 *
 * Defaults to the production domain so canonicals, the sitemap and robots
 * never point at a preview deployment. NEXT_PUBLIC_SITE_URL can override it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurexis.co.za'
).replace(/\/$/, '')

export const SITE_NAME = 'Aurexis Surface Transformations'
export const SITE_SHORT_NAME = 'AUREXIS'

export function absoluteUrl(path = '/') {
  return new URL(path, `${SITE_URL}/`).toString().replace(/\/$/, '') || SITE_URL
}

/** Canonical path for every indexable route, used by the sitemap and metadata. */
export const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  cookies: '/cookie-policy',
  studio: (slug: string) => `/divisions/${slug}`,
} as const
