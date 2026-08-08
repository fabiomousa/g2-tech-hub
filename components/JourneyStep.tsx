import type { JourneyStage } from '@/config/journey'

type JourneyStepProps = {
  stage: JourneyStage
  isLast?: boolean
}

export function JourneyStep({ stage, isLast }: JourneyStepProps) {
  return (
    <div className="relative flex flex-1 flex-col items-start gap-3 md:items-center md:text-center">
      <div className="flex items-center gap-3 md:flex-col md:gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-teal">
          {stage.code}
        </span>
        <h3 className="text-navy md:mt-1">{stage.title}</h3>
      </div>
      <p className="text-sm text-ink-soft md:px-4">{stage.description}</p>

      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[22px] top-11 h-[calc(100%-2.75rem)] w-px bg-border md:left-auto md:top-[22px] md:h-px md:w-full md:translate-x-1/2"
        />
      )}
    </div>
  )
}
