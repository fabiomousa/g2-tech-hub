import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'
import { MethodStep } from '@/components/MethodStep'
import { CTASection } from '@/components/CTA'
import { methodSteps, methodDisciplines } from '@/config/method'

export const metadata: Metadata = {
  title: 'Método G2',
  description:
    'Conheça o Método G2, o framework proprietário da G2 Tech Hub para transformar estratégia em execução em oito etapas: diagnosticar, direcionar, planejar, estruturar, executar, controlar, evoluir e sustentar.',
  alternates: { canonical: '/metodo' },
}

export default function MetodoPage() {
  return (
    <>
      <PageHero
        eyebrow="Método G2"
        title="Método G2"
        description="Um framework proprietário para transformar estratégia em execução."
      />

      {/* AS OITO ETAPAS */}
      <section className="section bg-white">
        <Container>
          <SectionHeader
            eyebrow="As oito etapas"
            title="Do diagnóstico à sustentação dos resultados."
            description="Cada etapa do Método G2 conecta a anterior à seguinte, formando um ciclo contínuo de evolução da gestão."
            align="center"
            className="mx-auto"
          />

          <div className="relative mt-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {methodSteps.map((step) => (
                <MethodStep key={step.code} step={step} size="lg" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* DISCIPLINAS TRANSVERSAIS */}
      <section className="section bg-offwhite">
        <Container>
          <SectionHeader
            eyebrow="Disciplinas transversais"
            title="Quatro disciplinas presentes em todas as etapas."
            description="Independentemente da fase do Método G2, quatro frentes de trabalho permanecem presentes e conectadas."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {methodDisciplines.map((discipline) => (
              <div
                key={discipline.title}
                className="rounded-lg border border-border bg-white p-7 text-center shadow-soft"
              >
                <h3 className="text-navy">{discipline.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{discipline.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Quer entender como o Método G2 se aplica à sua empresa?"
        description="Converse com a G2 e descubra em que etapa a sua empresa está — e o que precisa para avançar."
        primaryLabel="Faça o Diagnóstico G2"
        primaryHref="/contato#diagnostico"
        primaryEvent="diagnostic_click"
        secondaryLabel="Conheça nossas soluções"
        secondaryHref="/solucoes"
      />
    </>
  )
}
