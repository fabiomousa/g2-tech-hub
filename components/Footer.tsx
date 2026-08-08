import Link from 'next/link'
import Image from 'next/image'
import { mainNav } from '@/config/navigation'
import { companyConfig } from '@/config/company'
import { siteConfig } from '@/config/site'
import { Container } from './Container'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy text-white/70">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="G2 Tech Hub — página inicial">
            <Image
              src="/logo/g2-icon.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-heading text-lg font-bold text-white">G2 Tech Hub</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Gestão, estratégia, governança e projetos para empresas que querem crescer com estrutura.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h2 className="eyebrow text-white/50">Navegação</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/" className="text-sm text-white/70 transition-colors hover:text-teal">
                Início
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-white/50">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {companyConfig.email && (
              <li>
                <a href={`mailto:${companyConfig.email}`} className="transition-colors hover:text-teal">
                  {companyConfig.email}
                </a>
              </li>
            )}
            {companyConfig.phone && <li>{companyConfig.phone}</li>}
            <li>
              <Link href="/contato" className="transition-colors hover:text-teal">
                Fale com a G2
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>Estratégia. Estrutura. Execução. Crescimento.</p>
        </Container>
      </div>
    </footer>
  )
}
