/**
 * Conteúdo específico do posicionamento de PMO da G2 — usado na seção PMO
 * da Home e na página /pmo.
 */

export type PmoOffer = {
  title: string
  description: string
}

export const pmoOffers: PmoOffer[] = [
  {
    title: 'PMO Start',
    description: 'Implante seu primeiro PMO com estrutura, governança e metodologia.',
  },
  {
    title: 'PMO as a Service',
    description: 'Tenha um escritório de projetos sem precisar construir toda a estrutura internamente.',
  },
  {
    title: 'Project Leadership',
    description: 'Coloque um profissional experiente à frente de projetos estratégicos e críticos.',
  },
]

export const pmoCapabilities: string[] = [
  'Gestão de portfólio',
  'Governança de projetos',
  'Gestão de riscos',
  'Indicadores de projeto',
  'Status reports',
  'Steering committees',
  'Gestão híbrida (tradicional, ágil e combinada)',
]
