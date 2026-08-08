type SegmentCardProps = {
  name: string
}

export function SegmentCard({ name }: SegmentCardProps) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-border bg-white px-5 py-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-card">
      <span className="font-heading text-sm font-semibold text-navy">{name}</span>
    </div>
  )
}
