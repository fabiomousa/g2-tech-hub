import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * Lockup do logo: símbolo original da G2 (não redesenhado) + nome da marca
 * em tipografia. O arquivo fonte fica em /public/logo/g2-icon.png.
 */
export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-2.5 shrink-0', className)}
      aria-label="G2 Tech Hub — página inicial"
    >
      <Image
        src="/logo/g2-icon.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105 lg:h-10 lg:w-10"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-[1.05rem] font-bold tracking-tight lg:text-lg',
            variant === 'light' ? 'text-white' : 'text-navy',
          )}
        >
          G2 Tech Hub
        </span>
        <span
          className={cn(
            'mt-1 text-[10px] font-semibold uppercase tracking-[0.16em]',
            variant === 'light' ? 'text-teal-light' : 'text-teal-dark',
          )}
        >
          Gestão &amp; Execução
        </span>
      </span>
    </Link>
  )
}
