/**
 * Método G2 — framework proprietário de diagnóstico, planejamento,
 * estruturação, execução e evolução empresarial.
 */

export type MethodStep = {
  code: string
  title: string
  description: string
}

export const methodSteps: MethodStep[] = [
  { code: 'G1', title: 'Diagnosticar', description: 'Compreender profundamente a empresa.' },
  { code: 'G2', title: 'Direcionar', description: 'Definir objetivos e prioridades.' },
  { code: 'G3', title: 'Planejar', description: 'Transformar estratégia em iniciativas e projetos.' },
  { code: 'G4', title: 'Estruturar', description: 'Organizar processos, papéis e governança.' },
  { code: 'G5', title: 'Executar', description: 'Implementar as mudanças.' },
  { code: 'G6', title: 'Controlar', description: 'Monitorar resultados, riscos e indicadores.' },
  { code: 'G7', title: 'Evoluir', description: 'Aplicar melhoria contínua.' },
  { code: 'G8', title: 'Sustentar', description: 'Consolidar resultados e evolução.' },
]

export type MethodDiscipline = {
  title: string
  description: string
}

export const methodDisciplines: MethodDiscipline[] = [
  { title: 'Estratégia', description: 'Direção, prioridades e objetivos claros para o negócio.' },
  { title: 'Governança', description: 'Papéis, responsabilidades, indicadores e decisões.' },
  { title: 'Projetos', description: 'Transformação de iniciativas estratégicas em resultados.' },
  { title: 'Operações', description: 'Processos e rotinas que sustentam a execução no dia a dia.' },
]
