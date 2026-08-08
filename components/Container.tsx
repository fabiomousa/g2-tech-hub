import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = {
  as?: ElementType
  children: ReactNode
  className?: string
}

export function Container({ as: Tag = 'div', children, className }: ContainerProps) {
  return <Tag className={cn('mx-auto w-full max-w-content px-6 lg:px-8', className)}>{children}</Tag>
}
