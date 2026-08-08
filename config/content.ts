/**
 * Estrutura preparada para o blog/central de conteúdos da G2.
 *
 * Os itens abaixo são EXEMPLOS DEMONSTRATIVOS de como o layout se comporta
 * com conteúdo real — não são artigos publicados. Cada um é sinalizado com
 * `isPlaceholder: true` e a interface exibe um aviso correspondente.
 * Substitua por conteúdos reais (ou conecte a um CMS) antes de publicar.
 */

export type ContentCategory =
  | 'Gestão'
  | 'Estratégia'
  | 'Processos'
  | 'Governança'
  | 'PMO'
  | 'Projetos'
  | 'Crescimento'

export const contentCategories: ContentCategory[] = [
  'Gestão',
  'Estratégia',
  'Processos',
  'Governança',
  'PMO',
  'Projetos',
  'Crescimento',
]

export type ContentCard = {
  slug: string
  title: string
  excerpt: string
  category: ContentCategory
  isPlaceholder: boolean
}

export const contentCards: ContentCard[] = [
  {
    slug: 'sinais-de-que-a-gestao-nao-acompanhou-o-crescimento',
    title: 'Sinais de que a gestão não acompanhou o crescimento da empresa',
    excerpt:
      'Como identificar, na prática, quando a estrutura de gestão de uma empresa ficou para trás em relação ao seu tamanho e complexidade.',
    category: 'Gestão',
    isPlaceholder: true,
  },
  {
    slug: 'o-que-e-um-pmo-e-quando-faz-sentido',
    title: 'O que é um PMO e quando faz sentido implantar um',
    excerpt:
      'Um panorama sobre escritórios de projetos: o que fazem, que problemas resolvem e em que momento da empresa faz sentido estruturar um.',
    category: 'PMO',
    isPlaceholder: true,
  },
  {
    slug: 'governanca-nao-e-burocracia',
    title: 'Governança não é burocracia: é clareza sobre decisões',
    excerpt:
      'Por que estruturar papéis, alçadas e ritos de decisão reduz — em vez de aumentar — a complexidade do dia a dia.',
    category: 'Governança',
    isPlaceholder: true,
  },
  {
    slug: 'indicadores-que-geram-decisao',
    title: 'Indicadores que geram decisão, não apenas relatório',
    excerpt:
      'A diferença entre acompanhar números e usar indicadores para efetivamente orientar prioridades e ações.',
    category: 'Processos',
    isPlaceholder: true,
  },
  {
    slug: 'planejamento-estrategico-que-vira-execucao',
    title: 'Planejamento estratégico que vira execução',
    excerpt:
      'Como conectar o planejamento estratégico ao portfólio de projetos e às rotinas de gestão da empresa.',
    category: 'Estratégia',
    isPlaceholder: true,
  },
  {
    slug: 'crescer-sem-perder-controle',
    title: 'Crescer sem perder controle: o papel da estrutura',
    excerpt:
      'O que muda na gestão de uma empresa entre diferentes estágios de crescimento — e como se preparar para o próximo.',
    category: 'Crescimento',
    isPlaceholder: true,
  },
]
