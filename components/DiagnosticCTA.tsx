import { Container } from './Container'
import { Button } from './CTA'
import { CheckIcon } from './icons'

const dimensions = ['Gestão', 'Processos', 'Indicadores', 'Governança', 'Projetos']

/**
 * Seção de conversão — Diagnóstico G2. Preparada para, futuramente, dar
 * lugar a um formulário interativo ou ferramenta própria; hoje direciona
 * para o formulário de contato com o desafio já contextualizado.
 */
export function DiagnosticCTA() {
  return (
    <section id="diagnostico-home" className="section bg-white">
      <Container>
        <div className="grid items-center gap-12 rounded-lg border border-border bg-gradient-to-br from-navy-50 to-white p-8 shadow-card md:grid-cols-2 md:p-14">
          <div>
            <p className="eyebrow mb-3 text-teal-dark">Diagnóstico G2</p>
            <h2 className="text-navy">Descubra o nível de maturidade da sua empresa.</h2>
            <p className="mt-4 text-base text-ink-soft md:text-lg">
              Responda algumas perguntas e identifique os principais pontos de atenção em gestão,
              processos, indicadores, governança e projetos.
            </p>
            <div className="mt-8">
              <Button href="/contato#diagnostico" event="diagnostic_click" eventPayload={{ source: 'diagnostic_section' }}>
                Fazer Diagnóstico G2
              </Button>
            </div>
          </div>

          <ul className="space-y-3">
            {dimensions.map((dimension) => (
              <li
                key={dimension}
                className="flex items-center gap-3 rounded-md border border-border bg-white px-5 py-4 shadow-soft"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="font-heading text-sm font-semibold text-navy">{dimension}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
