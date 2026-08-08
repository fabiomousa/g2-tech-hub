import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'
import { CTASection } from '@/components/CTA'
import { catalog } from '@/config/catalog'

export const metadata: Metadata = {
  title: 'Soluções',
  description:
    'Conheça as soluções da G2 Tech Hub em Gestão & Estratégia, Processos & Governança, PMO e Crescimento — para empresas que querem evoluir com estrutura.',
  alternates: { canonical: '/solucoes' },
}

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Soluções para empresas que querem evoluir."
        description="Um catálogo estruturado em quatro linhas de atuação. O escopo e o investimento de cada solução são definidos comercialmente, conforme a realidade de cada empresa."
      />

      {catalog.map((category, index) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`section scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-offwhite'}`}
        >
          <Container>
            <SectionHeader eyebrow={`0${index + 1}`} title={category.title} description={category.description} />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.offers.map((offer) => (
                <div
                  key={offer.slug}
                  className="rounded-lg border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <h3 className="text-navy">{offer.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{offer.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <CTASection
        title="Não sabe por onde começar?"
        description="Fale com a G2 e vamos identificar juntos qual solução faz mais sentido para o momento da sua empresa."
        primaryLabel="Quero conversar com a G2"
        primaryHref="/contato"
        primaryEvent="contact_click"
      />
    </>
  )
}
