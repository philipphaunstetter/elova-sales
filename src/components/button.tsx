import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { ArrowRight } from 'lucide-react'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center gap-2 px-4 py-2',
    'rounded-full border border-transparent bg-[#6b21a8]',
    'text-sm font-medium whitespace-nowrap text-[#f8fafc]',
    'transition-all duration-200',
    'data-disabled:opacity-40 data-hover:bg-[#581c87]',
  ),
  dark: clsx(
    'inline-flex items-center justify-center gap-2 px-6 py-3',
    'rounded-full bg-slate-900 border border-transparent',
    'text-sm font-medium whitespace-nowrap text-white',
    'transition-all duration-200',
    'data-disabled:opacity-40 data-hover:bg-slate-800 data-hover:scale-[1.02]',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-slate-300 bg-white',
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
  showArrow?: boolean
  children?: React.ReactNode
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  showArrow = false,
  children,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </>
  )

  if (typeof props.href === 'undefined') {
    return (
      <Headless.Button {...props} className={className}>
        {content}
      </Headless.Button>
    )
  }

  return (
    <Link {...props} className={className}>
      {content}
    </Link>
  )
}
