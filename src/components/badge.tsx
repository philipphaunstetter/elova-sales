import { clsx } from 'clsx'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        active: 'bg-green-100 text-green-700',
        inactive: 'bg-slate-100 text-slate-600',
        label: 'bg-slate-900 text-white',
        primary: 'bg-purple-100 text-purple-700',
      },
    },
    defaultVariants: {
      variant: 'label',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={clsx(badgeVariants({ variant }), className)} {...props} />
  )
}
