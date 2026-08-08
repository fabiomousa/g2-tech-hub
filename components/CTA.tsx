'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { trackEvent, type ConversionEvent } from '@/lib/events'
import { ArrowRightIcon } from './icons'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline-light'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  event?: ConversionEvent
  eventPayload?: Record<string, unknown>
  showArrow?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-orange text-white hover:bg-orange-dark shadow-soft hover:shadow-lift hover:-translate-y-0.5',
  secondary:
    'bg-navy text-white hover:bg-navy-600 shadow-soft hover:-translate-y-0.5',
  ghost: 'text-navy hover:text-teal-dark',
  'outline-light': 'border border-white/30 text-white hover:border-teal hover:text-teal',
}

export function Button({
  href,
  children,
  variant = 'primary',
  className,
  event,
  eventPayload,
  showArrow = true,
}: ButtonProps) {
  const isExternal = href.startsWith('http')

  const handleClick = () => {
    if (event) trackEvent(event, eventPayload)
  }

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-all duration-200',
    variantClasses[variant],
    className,
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={classes}>
        {children}
        {showArrow && <ArrowRightIcon className="h-4 w-4" />}
      </a>
    )
  }

  return (
    <Link href={href} onClick={handleClick} className={classes}>
      {children}
      {showArrow && <ArrowRightIcon className="h-4 w-4" />}
    </Link>
  )
}

type CTASectionProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  primaryLabel: string
  primaryHref: string
  primaryEvent?: ConversionEvent
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  primaryEvent,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        {eyebrow && <p className="eyebrow mb-3 text-teal">{eyebrow}</p>}
        <h2 className="text-white">{title}</h2>
        {description && <p className="mt-4 text-base text-white/70 md:text-lg">{description}</p>}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} event={primaryEvent}>
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline-light">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
