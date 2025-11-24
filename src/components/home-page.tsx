'use client'

import { BentoCard } from '@/components/bento-card'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Map } from '@/components/map'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import { Container } from '@/components/container'
import { motion } from 'framer-motion'

function ScreenshotSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" className="max-w-3xl">
            Stop flying blind with your automations.
          </Heading>
        </motion.div>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function FeaturesSection() {
  return (
    <Container id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <Subheading>Features</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Monitor, debug, and optimize with confidence.
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-2"
      >
        <BentoCard
          eyebrow="Peace of Mind"
          title="Automatic History"
          description="Forget about creating backup workflows to Google Drive. Elova keeps a full history of your executions and configurations out of the box."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Deep Visibility"
          title="Inspect Executions Instantly"
          description="View detailed execution logs, input/output data, and error stack traces without needing to log in to your production n8n instance."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="AI Observability"
          title="Cost & Token Tracking"
          description="Monitor AI agent costs per execution. Track token usage across LLM providers to prevent billing surprises."
          graphic={
            <div className="absolute inset-0 bg-gray-100" />
          }
          className="lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Privacy First"
          title="Self-Hosted & Secure"
          description="Deploy with Docker on your own infrastructure. Keep sensitive workflow data and credentials under your control."
          graphic={<Map />}
          className="lg:rounded-br-4xl"
        />
      </motion.div>
    </Container>
  )
}

function UseCasesSection() {
  return (
    <Container id="use-cases" className="pt-24 sm:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <Subheading>Use Cases</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Built for mission-critical automation teams.
        </Heading>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-2xl bg-slate-800 p-8 ring-1 ring-white/10">
            <h4 className="font-semibold text-white">IT Operations</h4>
            <p className="mt-2 text-sm text-gray-400">
              Ensure your cron jobs and infrastructure workflows never fail silently. Get unified visibility across all instances.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-2xl bg-slate-800 p-8 ring-1 ring-white/10">
            <h4 className="font-semibold text-white">AI Engineers</h4>
            <p className="mt-2 text-sm text-gray-400">
              Track token usage and costs for your LLM chains. Debug complex AI agent interactions with visual traces.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="rounded-2xl bg-slate-800 p-8 ring-1 ring-white/10">
            <h4 className="font-semibold text-white">Agencies</h4>
            <p className="mt-2 text-sm text-gray-400">
              Manage workflows for multiple clients in one dashboard. Offer white-labeled monitoring portals to your customers.
            </p>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

export function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="py-32">
          <ScreenshotSection />
          <FeaturesSection />
          <UseCasesSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
