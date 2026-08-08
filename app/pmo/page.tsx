import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'
import { PMOCard } from '@/components/PMOCard'
import { CTASection } from '@/components/CTA'
import { pmoOffers, pmoCapabilities } from '@/config/pmo'

export const metadata: Metadata = {
  title: 'G2 PMO — Escritório de Projetos',
  description:
    'A G2 estrutura Escritórios de Projetos (PMO) para transformar iniciativas estratégicas em execução previsível, com boas práticas de PMBOK® combinadas a abordagens ágeis e híbridas.',
  alternates: { canonical: '/pmo' },
}

export default function PMOPage() {
  return (
    <>
      <PageHero
        eyebrow="G2 PMO"
        title="Transforme projetos estratégicos em execução previsível."
        description="Estratégia define onde a empresa quer chegar. O PMO ajuda a garantir que os projetos certos sejam executados da forma certa."
      />

      {/* POSICIONAMENTO */}
      <section className="section bg-white">
        <Container className="max-w-3xl">
          <p className="text-base text-ink-soft md:text-lg">
            A G2 estrutura Escritórios de Projetos para empresas que precisam transformar iniciativas
            estratégicas em execução disciplinada, utilizando boas práticas de gerenciamento de
            projetos baseadas no PMBOK<sup>®</sup>, combinadas com abordagens ágeis e híbridas quando
            apropriado.
          </p>
          <p className="mt-5 text-base text-ink-soft md:text-lg">
            Não tratamos PMO como controle de cronogramas. Tratamos como mecanismo para transformar
            estratégia em execução — com governança, indicadores e disciplina.
          </p>
        </Container>
      </section>

      {/* OFERTAS */}
      <section className="section bg-navy">
        <Container>
          <SectionHeader eyebrow="Como atuamos" title="Três formas de estruturar seu PMO." tone="dark" align="center" className="mx-auto" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pmoOffers.map((offer, index) => (
              <PMOCard key={offer.title} offer={offer} index={index + 1} />
            ))}
          </div>
        </Container>
      </section>

      {/* CAPACIDADES */}
      <section className="section bg-offwhite">
        <Container>
          <SectionHeader
            eyebrow="Capacidades"
            title="O que um PMO estruturado pela G2 entrega."
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pmoCapabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-md border border-border bg-white px-5 py-4 text-sm font-medium text-navy shadow-soft"
              >
                {capability}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-muted">
            A abordagem combina boas práticas reconhecidas de gerenciamento de projetos com métodos
            ágeis e híbridos, conforme o contexto de cada empresa. Certificações específicas, quando
            aplicáveis, são informadas comercialmente.
          </p>
        </Container>
      </section>

      <CTASection
        title="Seus projetos estratégicos merecem execução previsível."
        description="Fale com a G2 e entenda qual modelo de PMO faz mais sentido para o momento da sua empresa."
        primaryLabel="Conversar sobre o G2 PMO"
        primaryHref="/contato"
        primaryEvent="contact_click"
      />
    </>
  )
}
