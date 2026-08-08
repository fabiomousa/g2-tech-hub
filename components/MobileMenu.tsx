'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { mainNav, headerCta } from '@/config/navigation'
import { cn } from '@/lib/utils'
import { trackEvent } from '@/lib/events'
import { CloseIcon } from './icons'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div
      id="mobile-menu"
      className={cn(
        'fixed inset-0 z-[60] bg-navy transition-opacity duration-300 md:hidden',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <div className="flex items-center justify-end px-6 pt-6">
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-teal"
          aria-label="Fechar menu"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-6 pt-8" aria-label="Navegação principal (mobile)">
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'rounded-md px-3 py-4 text-lg font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-teal',
              pathname === item.href && 'text-teal',
            )}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={headerCta.href}
          onClick={() => trackEvent('diagnostic_click', { source: 'mobile_menu' })}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-orange px-5 py-4 text-center text-base font-semibold text-white shadow-soft transition-colors hover:bg-orange-dark"
        >
          {headerCta.label}
        </Link>
      </nav>
    </div>
  )
}
