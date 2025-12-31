'use client'

import { clsx } from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, useState } from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const inputType = isPassword && showPassword ? 'text' : type

    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-[#020617]">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={inputType}
            className={clsx(
              'w-full rounded-full border border-[#e2e8f0] bg-white px-3 py-[7.5px]',
              'text-sm text-slate-900 placeholder:text-[#64748b]',
              'transition-colors duration-200',
              'focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900/10',
              'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              isPassword && 'pr-12',
              className,
            )}
            ref={ref}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-slate-500">{helperText}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
