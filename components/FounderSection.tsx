import Image from 'next/image'
import { companyConfig } from '@/config/company'
import { Container } from './Container'
import { SectionHeader } from './SectionHeader'

export function FounderSection() {
  const { founder } = companyConfig

  return (
    <section className="section bg-offwhite">
      <Container>
        <SectionHeader eyebrow="Founder" title="Quem lidera a G2" align="center" className="mx-auto" />

        <div className="mx-auto mt-14 grid max-w-4xl items-center gap-10 rounded-lg border border-border bg-white p-8 shadow-card md:grid-cols-[220px_1fr] md:p-10">
          <div className="mx-auto aspect-square w-40 overflow-hidden rounded-lg bg-navy-50 md:w-full">
            {founder.photo ? (
              <Image
                src={founder.photo}
                alt={founder.name}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-100 to-navy-50 text-center">
                <span className="font-heading text-3xl font-bold text-navy-400">
                  {founder.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <span className="px-4 text-[11px] uppercase tracking-wider text-navy-400">
                  Foto em breve
                </span>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-navy">{founder.name}</h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-teal-dark">
              {founder.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{founder.bio}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {founder.competencies.map((competency) => (
                <li
                  key={competency}
                  className="rounded-full border border-border bg-offwhite px-3 py-1.5 text-xs font-medium text-ink-soft"
                >
                  {competency}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
