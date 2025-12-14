'use client'

import { Container } from '@/components/container'
import { HeroBadge } from '@/components/hero-badge'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { WaitlistForm } from '@/components/waitlist-form'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative">
      <Navbar />
      <Container className="relative">
        <div className="flex flex-col items-center text-center pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <HeroBadge />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-6xl md:text-7xl"
          >
            Stop flying blind with your automations.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg font-medium text-slate-600 sm:text-xl/8"
          >
            The Missing Observability Layer for n8n. Self-hosted monitoring, visual
            debugging, and reliability checks for your critical automations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 max-w-2xl text-base text-slate-600"
          >
            Join the waitlist for our Early Access program starting Q2 2026.{' '}
            <br className="hidden sm:inline" />
            Be the first to shape the future of n8n observability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 w-full"
          >
            <WaitlistForm />
          </motion.div>
          <div className="mt-16 flow-root sm:mt-24">
            <Screenshot
              width={6999}
              height={3866}
              src="/screenshots/dashboard-screenshot.png"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}