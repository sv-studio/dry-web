import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-accent-primary shadow-md',
    'text-base font-medium whitespace-nowrap text-bg-primary',
    'data-disabled:bg-accent-primary data-disabled:opacity-40 data-hover:bg-accent-dim',
    'transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-bg-elevated shadow-md ring-1 ring-accent-primary/20',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#c084fc4d]',
    'text-base font-medium whitespace-nowrap text-text-primary',
    'data-disabled:bg-bg-elevated data-disabled:opacity-40 data-hover:bg-bg-tertiary',
    'transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent shadow-sm ring-1 ring-border-default',
    'text-sm font-medium whitespace-nowrap text-text-primary',
    'data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-bg-tertiary',
    'transition-all duration-200 hover:scale-105 active:scale-95',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
