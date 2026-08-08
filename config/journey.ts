/**
 * Jornada do cliente com a G2 — usada na Home e na página Sobre.
 */

export type JourneyStage = {
  code: string
  title: string
  description: string
}

export const journeyStages: JourneyStage[] = [
  { code: '01', title: 'Entender', description: 'Diagnóstico.' },
  { code: '02', title: 'Estruturar', description: 'Estratégia, processos e governança.' },
  { code: '03', title: 'Executar', description: 'PMO e projetos.' },
  { code: '04', title: 'Evoluir', description: 'Growth Hub e melhoria contínua.' },
]

export type WorkflowStage = {
  title: string
}

export const workflowStages: WorkflowStage[] = [
  { title: 'Diagnóstico' },
  { title: 'Planejamento' },
  { title: 'Implementação' },
  { title: 'Gestão' },
  { title: 'Monitoramento' },
  { title: 'Evolução' },
]
