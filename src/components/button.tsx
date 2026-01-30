import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  // For light backgrounds (default)
  primary: clsx(
    'inline-flex items-center justify-center px-5 py-[calc(--spacing(2.5)-1px)]',
    'rounded-full border border-transparent bg-gray-950 shadow-md',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-gray-950 data-disabled:opacity-40',
    'data-hover:bg-gray-800 data-hover:shadow-lg data-hover:-translate-y-0.5',
    'active:translate-y-0 active:bg-gray-900 active:shadow-md',
    'transition-all duration-200',
  ),
  secondary: clsx(
    'inline-flex items-center justify-center px-5 py-[calc(--spacing(2.5)-1px)]',
    'rounded-full border border-gray-300 bg-white shadow-sm',
    'text-base font-medium whitespace-nowrap text-gray-950',
    'data-disabled:bg-white data-disabled:opacity-40',
    'data-hover:bg-gray-50 data-hover:border-gray-400 data-hover:-translate-y-0.5 data-hover:shadow-md',
    'active:translate-y-0 active:bg-gray-100 active:shadow-sm',
    'transition-all duration-200',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-3 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-gray-300 bg-white shadow-sm',
    'text-base font-medium whitespace-nowrap text-gray-700',
    'data-disabled:bg-transparent data-disabled:opacity-40',
    'data-hover:bg-gray-50 data-hover:border-gray-400 data-hover:-translate-y-0.5',
    'active:translate-y-0 active:bg-gray-100',
    'transition-all duration-200',
  ),
  // For dark backgrounds
  'primary-dark': clsx(
    'inline-flex items-center justify-center px-5 py-[calc(--spacing(2.5)-1px)]',
    'rounded-full border border-transparent bg-white shadow-md',
    'text-base font-medium whitespace-nowrap text-gray-950',
    'data-disabled:bg-white data-disabled:opacity-40',
    'data-hover:bg-gray-100 data-hover:shadow-lg data-hover:-translate-y-0.5',
    'active:translate-y-0 active:bg-gray-200 active:shadow-md',
    'transition-all duration-200',
  ),
  'secondary-dark': clsx(
    'inline-flex items-center justify-center px-5 py-[calc(--spacing(2.5)-1px)]',
    'rounded-full border border-white/30 bg-white/10 shadow-sm backdrop-blur-sm',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-white/10 data-disabled:opacity-40',
    'data-hover:bg-white/20 data-hover:border-white/50 data-hover:-translate-y-0.5 data-hover:shadow-md',
    'active:translate-y-0 active:bg-white/25 active:shadow-sm',
    'transition-all duration-200',
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
  className = clsx('focus-ring', variants[variant], className)

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
