import { socialConfig } from '@/config/social'
import { InstagramIcon, LinkedInIcon } from './icons'
import { cn } from '@/lib/utils'

type SocialLinksProps = {
  className?: string
  iconClassName?: string
}

/**
 * Renderiza apenas as redes sociais que possuem URL configurada em
 * config/social.ts — evita links quebrados ou "#" enquanto não definidas.
 */
export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const links = [
    { key: 'linkedin', href: socialConfig.linkedin, label: 'LinkedIn da G2 Tech Hub', Icon: LinkedInIcon, event: 'linkedin_click' },
    { key: 'instagram', href: socialConfig.instagram, label: 'Instagram da G2 Tech Hub', Icon: InstagramIcon, event: 'instagram_click' },
  ].filter((link) => link.href)

  if (links.length === 0) return null

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map(({ key, href, label, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          data-event={key === 'linkedin' ? 'linkedin_click' : 'instagram_click'}
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-200 hover:border-teal hover:text-teal',
            iconClassName,
          )}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}
