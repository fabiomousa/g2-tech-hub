import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'
import { FounderSection } from '@/components/FounderSection'
import { MethodStep } from '@/components/MethodStep'
import { CTASection } from '@/components/CTA'
import { methodSteps } from '@/config/method'

export const metadata: Metadata = {
  title: 'Sobre a G2 Tech Hub',
  description:
    'Conheça a G2 Tech Hub: experiência de grandes operações aplicada aos desafios de gestão, processos, governança e projetos de empresas em crescimento.',
  alternates: { canonical: '/sobre' },
}

const problems = [
  'Falta de processos estruturados',
  'Dependência excessiva dos sócios',
  'Projetos sem governança',
  'Indicadores pouco utilizados',
  'Dificuldade para transformar estratégia em execução',
  'Crescimento sem estrutura de gestão correspondente',
]

const workApproach = [
  {
    title: 'Diagnóstico antes de recomendação',
    description: 'Entendemos a empresa antes de propor qualquer mudança.',
  },
  {
    title: 'Planejamento aplicável',
    description: 'Transformamos análise em plano de ação realista.',
  },
  {
    title: 'Execução acompanhada',
    description: 'Ajudamos a implementar, não apenas recomendamos.',
  },
  {
    title: 'Evolução contínua',
    description: 'A estrutura evolui junto com a empresa.',
  },
]

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a G2"
        title="Experiência de grandes operações aplicada aos desafios de empresas em crescimento."
        description="A G2 Tech Hub ajuda pequenas e médias empresas a estruturar gestão, processos, governança e projetos — transformando estratégia em execução e crescimento em resultados."
      />

      {/* O QUE É A G2 */}
      <section className="section bg-white">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="O que é a G2" title="Uma consultoria de gestão, não apenas de tecnologia." />
          <div className="mt-6 space-y-5">
            <p className="text-base text-ink-soft md:text-lg">
              A G2 Tech Hub é uma empresa de consultoria empresarial que ajuda pequenas e médias
              empresas a estruturar gestão, processos, governança e projetos. Embora nossa origem e
              experiência estejam fortemente relacionadas à tecnologia, projetos e operações, o nosso
              foco é muito mais amplo: gestão empresarial, planejamento, processos, governança,
              projetos, PMO, indicadores e crescimento.
            </p>
            <p className="text-base text-ink-soft md:text-lg">
              Atuamos em diferentes segmentos — varejo, restaurantes, academias, agências de turismo,
              escritórios de advocacia, empresas de serviços e negócios B2B — porque o princípio que nos
              orienta é simples: gestão funciona em qualquer negócio.
            </p>
          </div>
        </Container>
      </section>

      {/* POR QUE EXISTE */}
      <section className="section bg-offwhite">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Por que existimos" title="Experiência de grandes operações aplicada ao crescimento de empresas." />
          <div className="mt-6 space-y-5">
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

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section className="section bg-offwhite">
        <Container>
          <SectionHeader eyebrow="Problemas que resolvemos" title="Sinais que aparecem antes de uma crise de gestão." align="center" className="mx-auto" />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem} className="rounded-md border border-border bg-white px-5 py-4 text-sm text-ink-soft shadow-soft">
                {problem}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* COMO TRABALHAMOS */}
      <section className="section bg-white">
        <Container>
          <SectionHeader eyebrow="Como trabalhamos" title="Diagnóstico, planejamento e execução — nessa ordem." align="center" className="mx-auto" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workApproach.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-border bg-offwhite p-6">
                <span className="font-heading text-sm font-bold text-teal-dark">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MÉTODO G2 */}
      <section className="section bg-offwhite">
        <Container>
          <SectionHeader
            eyebrow="Método G2"
            title="Um framework proprietário, do diagnóstico à sustentação."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {methodSteps.map((step) => (
              <MethodStep key={step.code} step={step} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Vamos conversar"
        title="Pronto para estruturar o próximo estágio da sua empresa?"
        description="Converse com a G2 e entenda como podemos apoiar a gestão, os processos e os projetos do seu negócio."
        primaryLabel="Agendar uma conversa"
        primaryHref="/contato"
        primaryEvent="contact_click"
        secondaryLabel="Conheça o Método G2"
        secondaryHref="/metodo"
      />
    </>
  )
}
