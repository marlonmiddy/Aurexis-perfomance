import type { MetadataRoute } from 'next'
import { SITE_NAME, SITE_SHORT_NAME } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description:
      'Surface transformation practice in Cape Town working across architectural interiors and exteriors, architectural glass and mobility assets.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f2e8',
    theme_color: '#062045',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
