import { Container } from './Container'
import { Button } from './CTA'
import { HeroGraphic } from './HeroGraphic'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <Container className="relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2 lg:gap-10 lg:py-32">
        <div className="animate-fade-up">
          <p className="eyebrow mb-5 text-teal">Consultoria empresarial</p>
          <h1 className="text-white">Sua empresa cresceu. Sua gestão acompanhou?</h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            A G2 Tech Hub ajuda pequenas e médias empresas a estruturar gestão, processos,
            governança e projetos, transformando estratégia em execução e crescimento em
            resultados.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contato#diagnostico" event="diagnostic_click" eventPayload={{ source: 'hero' }}>
              Faça o Diagnóstico G2
            </Button>
            <Button href="/solucoes" variant="outline-light">
              Conheça nossas soluções
            </Button>
          </div>
        </div>

        <div
          className="relative mx-auto aspect-square w-full max-w-md animate-fade-in lg:max-w-none"
          style={{ animationDelay: '150ms' }}
        >
          <HeroGraphic />
        </div>
      </Container>
    </section>
  )
}
