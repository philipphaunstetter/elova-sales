'use client'

import { motion } from 'framer-motion'
import { Button } from './button'

export function FinalCTA() {
  return (
    <section className="bg-[#f3e8ff] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#6b21a8]">
            GET STARTED
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-[#6b21a8] sm:text-4xl">
            Ready to monitor your workflows?
          </h2>
          <p className="mt-4 text-base leading-6 text-gray-900">
            Self-hosted workflow observability for n8n. Deploy in minutes with Docker.
          </p>
          <div className="mt-8">
            <Button className="text-sm">Get Early Access</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
