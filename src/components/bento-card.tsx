'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Subheading } from './text'

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean
  className?: string
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  graphic: React.ReactNode
  fade?: ('top' | 'bottom')[]
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: { scale: 1.02 } }}
      transition={{ duration: 0.2 }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-white shadow-xs ring-1 ring-slate-200',
      )}
    >
      <div className="relative h-80 shrink-0 overflow-hidden">
        <motion.div
          variants={{ idle: { scale: 1 }, active: { scale: 1.05 } }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          {graphic}
        </motion.div>
        {fade.includes('top') && (
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white to-50%" />
        )}
        {fade.includes('bottom') && (
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white to-50%" />
        )}
      </div>
      <div className="relative p-10">
        {eyebrow && (
          <Subheading as="h3" dark={true}>
            {eyebrow}
          </Subheading>
        )}
        <p className={clsx("text-2xl/8 font-medium tracking-tight text-slate-900", eyebrow ? "mt-1" : "")}>
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-base leading-6 text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
