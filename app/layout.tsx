import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { companyConfig } from '@/config/company'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AnalyticsScripts } from '@/components/AnalyticsScripts'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  image: `${siteConfig.url}/logo/g2-icon.png`,
  logo: `${siteConfig.url}/logo/g2-icon.png`,
  ...(companyConfig.email && { email: companyConfig.email }),
  ...(companyConfig.phone && { telephone: companyConfig.phone }),
  address: {
    '@type': 'PostalAddress',
    addressCountry: companyConfig.address.country,
  },
  areaServed: 'BR',
  knowsAbout: [
    'Gestão empresarial',
    'Planejamento estratégico',
    'Governança corporativa',
    'Gerenciamento de projetos',
    'PMO',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
        <AnalyticsScripts />
      </body>
    </html>
  )
}
