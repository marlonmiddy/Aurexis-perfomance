import type { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { StudioPage } from '@/components/studio-page'
import { getStudio, studios } from '@/lib/site-data'

export function generateStaticParams() {
  return studios.map((studio) => ({ slug: studio.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const studio = getStudio(slug)

  if (!studio) return {}

  return {
    title: `${studio.title} | Aurexis`,
    description: studio.overview,
    openGraph: {
      title: `${studio.title} | Aurexis`,
      description: studio.line,
      images: [{ url: studio.hero, alt: studio.heroAlt }],
    },
  }
}

export default async function StudioRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === 'visual-communications' || slug === 'commercial-identity') {
    permanentRedirect('/divisions/built-environments')
  }

  if (slug === 'glass-technologies') {
    permanentRedirect('/divisions/glass-systems')
  }

  const studio = getStudio(slug)

  if (!studio) notFound()

  return (
    <>
      <SiteNav />
      <StudioPage studio={studio} />
      <SiteFooter />
    </>
  )
}
