import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { ContactForm } from '@/components/ContactForm'
import { companyConfig } from '@/config/company'
import { WhatsAppIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a G2 Tech Hub. Conte brevemente qual desafio de gestão, processos, projetos ou governança sua empresa está enfrentando.',
  alternates: { canonical: '/contato' },
}

export default function ContatoPage() {
  const whatsappHref = companyConfig.whatsapp
    ? `https://wa.me/${companyConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(companyConfig.whatsappMessage)}`
    : undefined

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu negócio."
        description="Conte-nos brevemente qual desafio sua empresa está enfrentando. A primeira conversa tem como objetivo entender o contexto e avaliar se a G2 pode realmente ajudar."
      />

      <section id="diagnostico" className="section scroll-mt-24 bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-navy">Fale diretamente com a G2</h2>
            <p className="mt-3 text-sm text-ink-soft md:text-base">
              Prefere um contato direto? Use um dos canais abaixo.
            </p>

            <div className="mt-8 space-y-4">
              {companyConfig.email && (
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="flex items-center gap-3 rounded-md border border-border bg-offwhite px-5 py-4 text-sm font-medium text-navy transition-colors hover:border-teal"
                >
                  {companyConfig.email}
                </a>
              )}

              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_click"
                  className="flex items-center gap-3 rounded-md border border-border bg-offwhite px-5 py-4 text-sm font-medium text-navy transition-colors hover:border-teal"
                >
                  <WhatsAppIcon className="h-4 w-4 text-teal-dark" />
                  Conversar no WhatsApp
                </a>
              )}
            </div>

            <div className="mt-10 rounded-md border border-teal/25 bg-teal/5 p-5">
              <p className="text-sm text-ink-soft">
                Todos os campos marcados são utilizados apenas para entender o contexto da sua empresa
                e avaliar como a G2 pode ajudar. Nenhuma informação é compartilhada com terceiros.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-6 shadow-card md:p-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
