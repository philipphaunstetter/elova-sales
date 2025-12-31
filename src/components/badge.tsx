import { clsx } from 'clsx'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        active: 'bg-[#dcfce7] text-[#166534]',
        inactive: 'bg-[#f1f5f9] text-[#64748b]',
        label: 'bg-[#0f172a] text-[#f8fafc]',
        primary: 'bg-[#f3e8ff] text-[#581c87]',
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
