import type { MetadataRoute } from 'next'
import { absoluteUrl, routes } from '@/lib/seo'
import { studios } from '@/lib/site-data'

/**
 * Only canonical, indexable routes that actually resolve. Studio URLs are
 * derived from site-data so the sitemap cannot drift from the router.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: absoluteUrl(routes.home), changeFrequency: 'monthly', priority: 1 },
    ...studios.map((studio) => ({
      url: absoluteUrl(routes.studio(studio.slug)),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    { url: absoluteUrl(routes.about), changeFrequency: 'yearly', priority: 0.8 },
    { url: absoluteUrl(routes.contact), changeFrequency: 'yearly', priority: 0.8 },
    { url: absoluteUrl(routes.privacy), changeFrequency: 'yearly', priority: 0.3 },
    { url: absoluteUrl(routes.terms), changeFrequency: 'yearly', priority: 0.3 },
    { url: absoluteUrl(routes.cookies), changeFrequency: 'yearly', priority: 0.3 },
  ].map((entry) => ({ ...entry, lastModified }))
}
