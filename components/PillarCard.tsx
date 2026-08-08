type PillarCardProps = {
  index: number
  title: string
  description: string
}

export function PillarCard({ index, title, description }: PillarCardProps) {
  return (
    <div className="group relative rounded-lg border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <span className="font-heading text-sm font-bold text-teal-dark">
        {String(index).padStart(2, '0')}
      </span>
      <h3 className="mt-4 text-navy">{title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{description}</p>
      <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  )
}
