/**
 * Configuração central do site: metadados globais usados em SEO,
 * Open Graph, sitemap e demais integrações.
 *
 * Alterar informações do site (nome, descrição, URL) apenas aqui.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.g2techhub.com.br'

export const siteConfig = {
  name: 'G2 Tech Hub',
  shortName: 'G2 Tech Hub',
  legalName: 'G2 Tech Hub',
  title: 'G2 Tech Hub | Gestão, Estratégia, Governança e Projetos',
  description:
    'A G2 Tech Hub ajuda pequenas e médias empresas a estruturar gestão, processos, governança e projetos para crescer com mais eficiência e previsibilidade.',
  tagline: 'Gestão funciona em qualquer negócio.',
  url: siteUrl,
  locale: 'pt_BR',
  language: 'pt-BR',
  themeColor: '#0A192F',
  keywords: [
    'consultoria empresarial',
    'gestão empresarial',
    'governança corporativa',
    'PMO',
    'gestão de projetos',
    'planejamento estratégico',
    'processos empresariais',
    'consultoria para PMEs',
  ],
  ogImage: '/images/og-cover.png',
} as const

export type SiteConfig = typeof siteConfig
