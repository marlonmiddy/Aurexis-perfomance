import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { JsonLd } from '@/components/json-ld'
import { SITE_NAME, SITE_SHORT_NAME, SITE_URL } from '@/lib/seo'
import { siteGraph } from '@/lib/structured-data'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AUREXIS — Surface Transformations in Cape Town',
    template: '%s — AUREXIS',
  },
  description:
    'Aurexis is a surface transformation practice in Observatory, Cape Town, resurfacing architectural interiors and exteriors, architectural glass and mobility assets.',
  applicationName: SITE_SHORT_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AUREXIS — Surface Transformations in Cape Town',
    description:
      'Transform existing surfaces across built environments, architectural glass and mobility.',
    siteName: SITE_NAME,
    locale: 'en_ZA',
    type: 'website',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUREXIS — Surface Transformations in Cape Town',
    description:
      'Transform existing surfaces across built environments, architectural glass and mobility.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#062045',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-ZA"
      className={`bg-background ${display.variable} ${body.variable}`}
    >
      <body className="antialiased font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
        <JsonLd data={siteGraph()} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
