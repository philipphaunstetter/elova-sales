import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-rose-600 shadow-md',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-rose-600 data-disabled:opacity-40 data-hover:bg-rose-500',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-slate-300 bg-white shadow-md',
    'text-base font-medium whitespace-nowrap text-slate-700',
    'data-disabled:bg-white data-disabled:opacity-40 data-hover:bg-slate-50',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent shadow-sm ring-1 ring-slate-950/10',
    'text-sm font-medium whitespace-nowrap text-slate-950',
    'data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-slate-50',
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
