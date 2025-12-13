'use client'

import { motion } from 'framer-motion'

export function HeroBadge() {
  return (
    <motion.div
      className="flex items-center gap-1 text-sm/6 font-medium text-rose-500"
      initial="rest"
      animate="rest"
    >
      Early Access Q2 2026
    </motion.div>
  )
}
