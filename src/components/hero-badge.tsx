'use client'

import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function HeroBadge() {
  return (
    <Link
      href="https://github.com/philipphaunstetter/n8n-analytics"
      className="inline-block"
    >
      <motion.div
        className="flex items-center gap-1 text-sm/6 font-medium text-rose-500 hover:text-rose-400"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        Open Source on GitHub
        <motion.span
          variants={{
            rest: { x: 0 },
            hover: { x: 3 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <ChevronRightIcon className="size-4" />
        </motion.span>
      </motion.div>
    </Link>
  )
}
