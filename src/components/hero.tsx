'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { HeroBadge } from '@/components/hero-badge'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative">
      <Navbar />
      <Container className="relative">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex"
          >
            <HeroBadge />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl md:text-7xl"
          >
            The Missing Observability Layer for{' '}
            <span className="text-rose-500">n8n</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg font-medium text-gray-400 sm:text-xl/8"
          >
            Self-hosted monitoring, visual debugging, and reliability checks for
            your critical automations. Built for IT Ops, Agencies, and AI
            Engineers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:items-center"
          >
            <Button href="https://github.com/philipphaunstetter/n8n-analytics">
              Get Started
            </Button>
            <Button variant="secondary" href="/#features">
              View Features
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
