'use client'

import { motion } from 'framer-motion'

export function HeroBadge() {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-[#6b21a8] px-4 py-1 text-sm font-medium text-[#e9d5ff]"
      initial="rest"
      animate="rest"
    >
      Early Access Q2 2026
    </motion.div>
  )
}
