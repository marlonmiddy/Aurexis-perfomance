import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Aurexis Surface Transformations — Cape Town'

/**
 * Generated rather than a photograph so social cards are always a correct
 * 1200x630 PNG. Social scrapers handle AVIF inconsistently.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#062045',
          color: '#f7f2e8',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 14 }}>
          AUREXIS
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 92, lineHeight: 1.05 }}>
            Surface Transformations
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 30,
              color: 'rgba(247, 242, 232, 0.65)',
            }}
          >
            Built environments · Glass systems · Mobility
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            letterSpacing: 4,
            color: 'rgba(247, 242, 232, 0.5)',
            borderTop: '1px solid rgba(247, 242, 232, 0.2)',
            paddingTop: 28,
          }}
        >
          <span>OBSERVATORY, CAPE TOWN</span>
          <span>MSS TRADING (PTY) LTD</span>
        </div>
      </div>
    ),
    size,
  )
}
