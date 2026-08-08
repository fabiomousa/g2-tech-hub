import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className={cn('eyebrow mb-3', tone === 'dark' && 'text-teal')}>{eyebrow}</p>
      )}
      <h2 className={cn(tone === 'dark' && 'text-white')}>{title}</h2>
      {description && (
        <p className={cn('mt-4 text-base md:text-lg', tone === 'dark' ? 'text-white/70' : 'text-ink-soft')}>
          {description}
        </p>
      )}
    </div>
  )
}
