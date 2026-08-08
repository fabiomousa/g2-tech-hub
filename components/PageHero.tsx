import type { ReactNode } from 'react'
import { Container } from './Container'

type PageHeroProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

/**
 * Hero compacto usado no topo das páginas internas (Sobre, Método,
 * Soluções, PMO, Conteúdos, Contato).
 */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-16 md:pb-20 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />

      <Container className="relative">
        <div className="max-w-2xl">
          {eyebrow && <p className="eyebrow mb-3 text-teal">{eyebrow}</p>}
          <h1 className="text-white">{title}</h1>
          {description && <p className="mt-5 text-lg text-white/70">{description}</p>}
        </div>
        {children}
      </Container>
    </section>
  )
}
