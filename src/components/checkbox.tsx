'use client'

import { clsx } from 'clsx'
import { Check } from 'lucide-react'
import { forwardRef } from 'react'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            className={clsx(
              'peer h-5 w-5 shrink-0 appearance-none rounded border-2 border-slate-300',
              'bg-white transition-all duration-200',
              'checked:border-slate-900 checked:bg-slate-900',
              'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            {...props}
          />
          <Check
            className={clsx(
              'pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2',
              'text-white opacity-0 transition-opacity duration-200',
              'peer-checked:opacity-100',
            )}
          />
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={checkboxId}
                className="cursor-pointer text-sm font-medium text-slate-900"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-slate-500">{description}</p>
            )}
          </div>
        )}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
