import { absoluteUrl, SITE_NAME, SITE_URL } from '@/lib/seo'
import { company, legalEntity, primaryLocation, studios } from '@/lib/site-data'

/**
 * Stable @id values so every node in the graph references one canonical
 * entity rather than repeating duplicate business descriptions per page.
 */
export const ids = {
  organization: `${SITE_URL}/#organization`,
  business: `${SITE_URL}/#localbusiness`,
  website: `${SITE_URL}/#website`,
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: primaryLocation.street,
  addressLocality: primaryLocation.city,
  addressRegion: primaryLocation.region,
  addressCountry: primaryLocation.countryCode,
}

/**
 * The legal entity. Kept separate from the trading location so the
 * MSS TRADING (PTY) LTD → Aurexis relationship is machine-readable.
 */
function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ids.organization,
    name: legalEntity.name,
    alternateName: SITE_NAME,
    legalName: legalEntity.name,
    url: SITE_URL,
    taxID: legalEntity.taxpayerReference,
    address: {
      '@type': 'PostalAddress',
      streetAddress: legalEntity.registeredAddress.lines.join(', '),
      postalCode: legalEntity.registeredAddress.postalCode,
      addressCountry: primaryLocation.countryCode,
    },
    subOrganization: { '@id': ids.business },
  }
}

/**
 * ProfessionalService is a LocalBusiness subtype and is the closest accurate
 * match for a surface transformation practice with a physical Cape Town base.
 * Ratings, reviews, awards and opening hours are deliberately omitted because
 * none are verifiable from the codebase.
 */
function localBusinessNode() {
  return {
    '@type': 'ProfessionalService',
    '@id': ids.business,
    name: SITE_NAME,
    alternateName: company.name,
    url: SITE_URL,
    image: absoluteUrl('/opengraph-image'),
    description:
      'Surface transformation practice in Observatory, Cape Town, resurfacing architectural interiors and exteriors, architectural glass and mobility assets.',
    telephone: company.phoneE164,
    email: company.email,
    address: postalAddress,
    hasMap: company.googleBusinessProfile,
    parentOrganization: { '@id': ids.organization },
    founder: { '@type': 'Person', name: company.ceo, jobTitle: company.ceoRole },
    areaServed: company.regions.map((name) => ({ '@type': 'Place', name })),
    sameAs: [company.instagramHref, company.googleBusinessProfile],
    makesOffer: studios.map((studio) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: studio.title,
        description: studio.overview,
        url: absoluteUrl(`/divisions/${studio.slug}`),
      },
    })),
  }
}

function webSiteNode() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: 'en-ZA',
    publisher: { '@id': ids.organization },
  }
}

/** Site-wide identity graph, rendered once in the root layout. */
export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationNode(), localBusinessNode(), webSiteNode()],
  }
}

export function breadcrumbGraph(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}

/** Service + FAQPage for a studio. Both describe content visible on the page. */
export function studioGraph(slug: string) {
  const studio = studios.find((entry) => entry.slug === slug)
  if (!studio) return null

  const url = absoluteUrl(`/divisions/${slug}`)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: studio.title,
        description: studio.overview,
        url,
        serviceType: studio.shortTitle,
        provider: { '@id': ids.business },
        areaServed: company.regions.map((name) => ({ '@type': 'Place', name })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${studio.shortTitle} capabilities`,
          itemListElement: studio.environments.map((environment) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: environment.title,
              description: environment.detail,
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: studio.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }
}
