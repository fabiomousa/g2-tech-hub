'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { mainNav, headerCta } from '@/config/navigation'
import { cn } from '@/lib/utils'
import { trackEvent } from '@/lib/events'
import { Logo } from './Logo'
import { MenuIcon } from './icons'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b transition-all duration-300',
          scrolled
            ? 'border-white/10 bg-navy/95 backdrop-blur-md shadow-soft'
            : 'border-transparent bg-navy',
        )}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 lg:h-[72px] lg:px-8">
          <Logo variant="light" />

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'link-underline text-sm font-medium text-white/80 hover:text-white',
                  pathname === item.href && 'text-white',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href={headerCta.href}
              onClick={() => trackEvent('diagnostic_click', { source: 'header' })}
              className="inline-flex items-center rounded-md bg-orange px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-dark hover:shadow-lift"
            >
              {headerCta.label}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
            aria-label="Abrir menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
