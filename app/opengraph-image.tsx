import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0A192F',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(78,205,196,0.25), transparent 55%), radial-gradient(circle at 10% 90%, rgba(30,58,95,0.6), transparent 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 14,
              height: 56,
              backgroundColor: '#4ECDC4',
              borderRadius: 4,
            }}
          />
          <span style={{ fontSize: 34, fontWeight: 700, color: '#F8F9FA', letterSpacing: -0.5 }}>
            G2 TECH HUB
          </span>
        </div>

        <div style={{ display: 'flex', marginTop: 56, maxWidth: 900 }}>
          <span style={{ fontSize: 56, fontWeight: 700, color: '#F8F9FA', lineHeight: 1.15 }}>
            {siteConfig.tagline}
          </span>
        </div>

        <div style={{ display: 'flex', marginTop: 28, maxWidth: 760 }}>
          <span style={{ fontSize: 26, color: 'rgba(248,249,250,0.7)', lineHeight: 1.4 }}>
            Gestão, estratégia, governança e projetos para empresas que querem crescer com estrutura.
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
