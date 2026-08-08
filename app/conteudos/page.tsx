import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { contentCards } from '@/config/content'

export const metadata: Metadata = {
  title: 'Conteúdos',
  description:
    'Artigos e materiais da G2 Tech Hub sobre gestão, estratégia, processos, governança, PMO, projetos e crescimento.',
  alternates: { canonical: '/conteudos' },
}

export default function ConteudosPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos"
        title="Materiais sobre gestão, estratégia e execução."
        description="Uma central de conteúdos em construção. Os cards abaixo demonstram como o layout se comportará com publicações reais."
      />

      <section className="section bg-white">
        <Container>
          <div className="mb-8 flex items-center gap-3 rounded-md border border-orange/30 bg-orange/10 px-5 py-4 text-sm text-navy">
            <span className="font-heading font-bold text-orange-dark">Aviso:</span>
            Os itens abaixo são conteúdos de exemplo, usados apenas para demonstrar o layout desta
            página. Ainda não correspondem a artigos publicados.
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contentCards.map((card) => (
              <article
                key={card.slug}
                className="flex flex-col rounded-lg border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-dark">
                    {card.category}
                  </span>
                  {card.isPlaceholder && (
                    <span className="rounded-full bg-navy-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy-400">
                      Exemplo
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-navy">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{card.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
