import Link from 'next/link'
import type { SolutionLine } from '@/config/solutions'
import { ArrowRightIcon } from './icons'

type SolutionCardProps = {
  line: SolutionLine
}

export function SolutionCard({ line }: SolutionCardProps) {
  return (
    <Link
      href={`/solucoes#${line.slug}`}
      className="group flex h-full flex-col rounded-lg border border-border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card"
    >
      <h3 className="text-navy">{line.title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{line.description}</p>

      <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
        {line.items.slice(0, 4).map((item) => (
          <li key={item.name} className="flex items-start gap-2.5 text-sm text-ink-soft">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
            {item.name}
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-dark">
        Ver detalhes
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
