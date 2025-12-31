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
            className="mb-6 flex justify-center"
          >
            <HeroBadge />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[48px] font-medium leading-[48px] tracking-[-0.5px] text-black"
          >
            Stop flying blind.<br />Start monitoring.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-md text-base leading-6 text-black"
          >
            Elova brings enterprise-grade observability to n8n. Correlate workflow performance with server health and endpoint uptime in one unified, visual interface.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 w-full max-w-md"
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