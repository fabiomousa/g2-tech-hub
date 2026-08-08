import type { MethodStep as MethodStepType } from '@/config/method'
import { cn } from '@/lib/utils'

type MethodStepProps = {
  step: MethodStepType
  size?: 'sm' | 'lg'
  className?: string
}

export function MethodStep({ step, size = 'sm', className }: MethodStepProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-lg border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card',
        size === 'lg' && 'p-8',
        className,
      )}
    >
      <span
        className={cn(
          'font-heading font-bold text-teal-dark',
          size === 'lg' ? 'text-3xl' : 'text-2xl',
        )}
      >
        {step.code}
      </span>
      <h3 className={cn('mt-3 text-navy', size === 'sm' && 'text-lg')}>{step.title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
    </div>
  )
}
