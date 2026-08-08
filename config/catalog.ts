/**
 * Catálogo completo de soluções, usado na página /solucoes.
 * Preços não são exibidos publicamente — tratados comercialmente.
 */

export type CatalogOffer = {
  slug: string
  name: string
  description: string
}

export type CatalogCategory = {
  slug: string
  title: string
  description: string
  offers: CatalogOffer[]
}

export const catalog: CatalogCategory[] = [
  {
    slug: 'gestao-estrategia',
    title: 'Gestão & Estratégia',
    description: 'Organizamos a gestão para que o negócio avance.',
    offers: [
      { slug: 'business-assessment', name: 'Business Assessment', description: 'Diagnóstico empresarial.' },
      { slug: 'strategy-sprint', name: 'Strategy Sprint', description: 'Planejamento estratégico intensivo.' },
    ],
  },
  {
    slug: 'processos-governanca',
    title: 'Processos & Governança',
    description: 'Criamos estrutura para a empresa crescer com controle.',
    offers: [
      { slug: 'process-design', name: 'Process Design', description: 'Mapeamento e estruturação de processos.' },
      { slug: 'governance', name: 'Governance', description: 'Estruturação da governança empresarial.' },
    ],
  },
  {
    slug: 'pmo',
    title: 'PMO',
    description: 'Transformamos projetos em execução previsível.',
    offers: [
      { slug: 'pmo-start', name: 'PMO Start', description: 'Implantação de escritório de projetos.' },
      { slug: 'pmo-as-a-service', name: 'PMO as a Service', description: 'PMO terceirizado recorrente.' },
      { slug: 'project-leadership', name: 'Project Leadership', description: 'Gestão de projetos estratégicos.' },
    ],
  },
  {
    slug: 'crescimento',
    title: 'Crescimento',
    description: 'Acompanhamento contínuo para empresas que querem evoluir.',
    offers: [
      { slug: 'growth-hub', name: 'Growth Hub', description: 'Consultoria contínua.' },
      { slug: 'fractional-coo', name: 'Fractional COO', description: 'Atuação executiva e operacional.' },
    ],
  },
]
