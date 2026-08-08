import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'
import { Hero } from '@/components/Hero'
import { PillarCard } from '@/components/PillarCard'
import { MethodStep } from '@/components/MethodStep'
import { SolutionCard } from '@/components/SolutionCard'
import { PMOCard } from '@/components/PMOCard'
import { SegmentCard } from '@/components/SegmentCard'
import { JourneyStep } from '@/components/JourneyStep'
import { FounderSection } from '@/components/FounderSection'
import { DiagnosticCTA } from '@/components/DiagnosticCTA'
import { Button, CTASection } from '@/components/CTA'
import { pillars } from '@/config/pillars'
import { methodSteps } from '@/config/method'
import { solutionLines } from '@/config/solutions'
import { pmoOffers } from '@/config/pmo'
import { segments } from '@/config/segments'
import { journeyStages, workflowStages } from '@/config/journey'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const growthDrivers = ['Mais clientes', 'Mais pessoas', 'Mais processos', 'Mais decisões', 'Mais projetos']

const symptoms = [
  'Decisões centralizadas',
  'Processos pouco claros',
  'Retrabalho',
  'Projetos atrasados',
  'Falta de indicadores',
  'Reuniões que não geram decisões',
  'Dificuldade de delegar',
  'Dependência excessiva dos sócios',
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* PROBLEMA */}
      <section className="section bg-white">
        <Container>
          <SectionHeader
            eyebrow="O desafio do crescimento"
            title="Sua empresa cresceu. Sua gestão acompanhou?"
            description="Crescer traz novos desafios."
          />

          <div className="mt-12 flex flex-wrap gap-3">
            {growthDrivers.map((driver) => (
              <span
                key={driver}
                className="rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-sm font-semibold text-teal-dark"
              >
                {driver}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {symptoms.map((symptom) => (
              <div
                key={symptom}
                className="rounded-md border border-border bg-offwhite px-4 py-3.5 text-sm text-ink-soft"
              >
                {symptom}
              </div>
            ))}
          </div>

          <p className="mt-12 border-l-2 border-orange pl-6 font-heading text-xl font-semibold text-navy md:text-2xl">
            O problema não é crescer. É crescer sem estrutura.
          </p>
        </Container>
      </section>

      {/* PROPOSTA DE VALOR */}
      <section className="section bg-offwhite">
        <Container>
          <SectionHeader title="Estratégia precisa virar execução." align="center" className="mx-auto" />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.title} index={index + 1} title={pillar.title} description={pillar.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* MÉTODO G2 */}
      <section className="section bg-white">
        <Container>
          <SectionHeader
            eyebrow="Método G2"
            title="Um método para transformar gestão em resultado."
            description="O Método G2 é nosso framework proprietário de diagnóstico, planejamento, estruturação, execução e evolução empresarial."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {methodSteps.map((step) => (
              <MethodStep key={step.code} step={step} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/metodo" event="method_view" variant="secondary">
              Conheça o Método G2
            </Button>
          </div>
        </Container>
      </section>

      {/* SOLUÇÕES */}
      <section className="section bg-offwhite">
        <Container>
          <SectionHeader
            eyebrow="Soluções"
            title="Soluções para empresas que querem evoluir."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionLines.map((line) => (
              <SolutionCard key={line.slug} line={line} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/solucoes" event="solution_view" variant="secondary">
              Conheça nossas soluções
            </Button>
          </div>
        </Container>
      </section>

      {/* PMO */}
      <section className="section relative overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:48px_48px] opacity-30" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

        <Container className="relative">
          <SectionHeader
            eyebrow="G2 PMO"
            title="Projetos não deveriam ser uma fonte de caos."
            description="A G2 estrutura Escritórios de Projetos para empresas que precisam transformar iniciativas estratégicas em execução disciplinada, utilizando boas práticas de gerenciamento de projetos baseadas no PMBOK®, combinadas com abordagens ágeis e híbridas quando apropriado."
            tone="dark"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pmoOffers.map((offer, index) => (
              <PMOCard key={offer.title} offer={offer} index={index + 1} />
            ))}
          </div>

          <div className="mt-12">
            <Button href="/pmo" event="pmo_view">
              Conheça o G2 PMO
            </Button>
          </div>
        </Container>
      </section>

      {/* SEGMENTOS */}
      <section className="section bg-white">
        <Container>
          <SectionHeader
            title="Gestão funciona em qualquer negócio."
            description="Nosso trabalho não está limitado a um segmento. Atuamos sobre problemas de gestão, processos, governança e execução que aparecem em diferentes tipos de empresas."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {segments.map((segment) => (
              <SegmentCard key={segment.name} name={segment.name} />
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-base text-ink-soft">
            Não precisamos conhecer profundamente o seu setor para entender os desafios de gestão que
            impedem sua empresa de evoluir.
          </p>
        </Container>
      </section>

      {/* COMO TRABALHAMOS */}
      <section className="section bg-offwhite">
        <Container>
          <SectionHeader
            title="Sem consultoria que entrega um PowerPoint e desaparece."
            description="Nossa atuação combina diagnóstico, planejamento e execução. O objetivo não é apenas recomendar mudanças, mas ajudar a empresa a implementá-las."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {workflowStages.map((stage, index) => (
              <div key={stage.title} className="flex flex-1 items-center gap-3">
                <div className="flex flex-1 items-center justify-center rounded-md border border-border bg-white px-4 py-5 text-center font-heading text-sm font-semibold text-navy shadow-soft">
                  {stage.title}
                </div>
                {index < workflowStages.length - 1 && (
                  <span aria-hidden="true" className="hidden shrink-0 text-teal-dark md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SOBRE A G2 */}
      <section className="section bg-white">
        <Container className="max-w-3xl">
          <SectionHeader
            title="Experiência de grandes operações aplicada ao crescimento de empresas."
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-8 space-y-5 text-center">
            <p className="text-base text-ink-soft md:text-lg">
              A G2 Tech Hub nasceu da experiência acumulada ao longo de mais de duas décadas em
              tecnologia, gestão, projetos, operações e liderança.
            </p>
            <p className="text-base text-ink-soft md:text-lg">
              Ao longo dessa trajetória, identificamos um padrão: empresas de diferentes segmentos
              enfrentam problemas semelhantes quando começam a crescer — falta de processos, excesso de
              dependência dos sócios, projetos sem governança, indicadores pouco utilizados e
              dificuldade para transformar estratégia em execução.
            </p>
            <p className="text-base text-ink-soft md:text-lg">
              A G2 existe para ajudar essas empresas a superar essa fase e construir uma estrutura de
              gestão preparada para o próximo estágio.
            </p>
          </div>
        </Container>
      </section>

      <FounderSection />

      {/* JORNADA DO CLIENTE */}
      <section className="section bg-offwhite">
        <Container>
          <SectionHeader title="Uma jornada completa de transformação." align="center" className="mx-auto" />

          <div className="mt-14 flex flex-col gap-8 md:flex-row md:gap-6">
            {journeyStages.map((stage, index) => (
              <JourneyStep key={stage.code} stage={stage} isLast={index === journeyStages.length - 1} />
            ))}
          </div>
        </Container>
      </section>

      <DiagnosticCTA />

      <CTASection
        title="Sua empresa está preparada para o próximo estágio?"
        description="Converse com a G2 e descubra quais estruturas precisam ser fortalecidas para transformar crescimento em resultados sustentáveis."
        primaryLabel="Agendar uma conversa"
        primaryHref="/contato"
        primaryEvent="contact_click"
      />
    </>
  )
}
