/**
 * Catálogo de soluções da G2, organizado em quatro grandes linhas.
 * Usado na Home (visão resumida) e na página /solucoes (catálogo completo).
 */

export type SolutionItem = {
  name: string
  description: string
}

export type SolutionLine = {
  slug: string
  title: string
  description: string
  items: SolutionItem[]
}

export const solutionLines: SolutionLine[] = [
  {
    slug: 'gestao-estrategia',
    title: 'Gestão & Estratégia',
    description: 'Organizamos a gestão para que o negócio avance.',
    items: [
      {
        name: 'Business Assessment',
        description: 'Diagnóstico empresarial que revela onde a gestão trava o crescimento.',
      },
      {
        name: 'Strategy Sprint',
        description: 'Planejamento estratégico intensivo, com prioridades e metas claras.',
      },
      {
        name: 'Planejamento estratégico',
        description: 'Direcionamento de médio e longo prazo alinhado à realidade da empresa.',
      },
      {
        name: 'Indicadores',
        description: 'Painéis de indicadores que apoiam decisões, não apenas relatórios.',
      },
      {
        name: 'Gestão executiva',
        description: 'Apoio direto à liderança na condução da gestão do dia a dia.',
      },
    ],
  },
  {
    slug: 'processos-governanca',
    title: 'Processos & Governança',
    description: 'Criamos estrutura para a empresa crescer com controle.',
    items: [
      {
        name: 'Process Design',
        description: 'Mapeamento e redesenho dos processos críticos da operação.',
      },
      {
        name: 'Governança',
        description: 'Papéis, alçadas e fóruns de decisão bem definidos.',
      },
      {
        name: 'RACI',
        description: 'Clareza sobre quem executa, aprova, é consultado e informado.',
      },
      {
        name: 'KPIs',
        description: 'Indicadores de processo conectados aos objetivos do negócio.',
      },
      {
        name: 'Ritos de gestão',
        description: 'Reuniões e rotinas que efetivamente geram decisão.',
      },
      {
        name: 'Padronização',
        description: 'Rotinas documentadas para reduzir dependência de pessoas específicas.',
      },
    ],
  },
  {
    slug: 'pmo',
    title: 'PMO',
    description: 'Transformamos projetos em execução previsível.',
    items: [
      {
        name: 'PMO Start',
        description: 'Implantação do primeiro escritório de projetos da empresa.',
      },
      {
        name: 'PMO as a Service',
        description: 'Escritório de projetos contínuo, sem estrutura interna dedicada.',
      },
      {
        name: 'Gestão de Portfólio',
        description: 'Priorização e acompanhamento de múltiplas iniciativas simultâneas.',
      },
      {
        name: 'Project Leadership',
        description: 'Liderança experiente à frente de projetos estratégicos e críticos.',
      },
      {
        name: 'Governança de projetos',
        description: 'Ritos, papéis e critérios de decisão para o portfólio de projetos.',
      },
    ],
  },
  {
    slug: 'growth-hub',
    title: 'Growth Hub',
    description: 'Acompanhamento contínuo para empresas que querem evoluir.',
    items: [
      { name: 'Gestão', description: 'Suporte contínuo à gestão do negócio.' },
      { name: 'Estratégia', description: 'Revisão periódica de prioridades e direcionamento.' },
      { name: 'Indicadores', description: 'Evolução constante dos painéis de indicadores.' },
      { name: 'PMO', description: 'Acompanhamento do portfólio de projetos em andamento.' },
      { name: 'Governança', description: 'Manutenção e evolução dos ritos de decisão.' },
      { name: 'Mentoria executiva', description: 'Apoio próximo à liderança ao longo do crescimento.' },
    ],
  },
]

export function getSolutionLine(slug: string): SolutionLine | undefined {
  return solutionLines.find((line) => line.slug === slug)
}
