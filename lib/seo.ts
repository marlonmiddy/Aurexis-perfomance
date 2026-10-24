/**
 * Single source of truth for the canonical origin.
 *
 * The previous value (`https://aurexis.vercel.app`) resolves to an unrelated
 * site, which pointed every canonical and Open Graph URL at a third party.
 * Set NEXT_PUBLIC_SITE_URL once a custom domain is live and nothing else
 * needs to change.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurexis-theta.vercel.app'
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
