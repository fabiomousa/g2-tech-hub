import type { PmoOffer } from '@/config/pmo'

type PMOCardProps = {
  offer: PmoOffer
  index: number
}

export function PMOCard({ offer, index }: PMOCardProps) {
  return (
    <div className="relative flex flex-col rounded-lg border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white/[0.06]">
      <span className="font-heading text-sm font-bold text-teal">{String(index).padStart(2, '0')}</span>
      <h3 className="mt-4 text-white">{offer.title}</h3>
      <p className="mt-2 text-sm text-white/70">{offer.description}</p>
    </div>
  )
}
