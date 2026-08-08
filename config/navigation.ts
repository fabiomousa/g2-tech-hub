/**
 * Itens de navegação principal, reutilizados pelo Header (desktop e mobile)
 * e pelo Footer.
 */

export type NavItem = {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Método G2', href: '/metodo' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'PMO', href: '/pmo' },
  { label: 'Conteúdos', href: '/conteudos' },
  { label: 'Contato', href: '/contato' },
]

export const headerCta: NavItem = {
  label: 'Diagnóstico G2',
  href: '/contato#diagnostico',
}
