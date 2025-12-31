'use client'

import React from 'react'
import {
  BuildingOffice2Icon,
  CommandLineIcon,
  CpuChipIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'
import { BentoCard } from '@/components/bento-card'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Map } from '@/components/map'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Heading, Subheading } from '@/components/text'
import { Container } from '@/components/container'
import { WaitlistForm } from '@/components/waitlist-form'
import { FAQSection } from '@/components/faq-section'
import { FinalCTA } from '@/components/final-cta'
import { motion } from 'framer-motion'

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
        <Heading as="h3" className="mt-2 max-w-4xl">
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
          title="Automatic History"
          description="Forget about creating backup workflows to Google Drive. Elova keeps a full history of your executions and configurations out of the box."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:rounded-tl-4xl"
        />
        <BentoCard
          title="Inspect Executions Instantly"
          description="View detailed execution logs, input/output data, and error stack traces without needing to log in to your production n8n instance."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:rounded-tr-4xl"
        />
        <BentoCard
          title="Cost & Token Tracking"
          description="Monitor AI agent costs per execution. Track token usage across LLM providers to prevent billing surprises."
          graphic={
            <div className="absolute inset-0 bg-gray-100" />
          }
          className="lg:rounded-bl-4xl"
        />
        <BentoCard
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
        <Heading as="h3" className="mt-2 max-w-4xl">
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
          <div className="flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-[#e2e8f0] transition-colors hover:bg-slate-50">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3e8ff]">
              <BuildingOffice2Icon className="h-6 w-6 text-[#6b21a8]" />
            </div>
            <div className="mb-2 text-sm font-semibold text-[#6b21a8]">Agencies</div>
            <h4 className="text-lg font-semibold text-slate-900">Multi-Tenant Command Center</h4>
            <p className="mt-4 flex-auto text-base leading-6 text-slate-600">
              Monitor health across disjointed client instances. Catch webhook failures and API rate limits before your client sends an angry email.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-[#e2e8f0] transition-colors hover:bg-slate-50">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3e8ff]">
              <CpuChipIcon className="h-6 w-6 text-[#6b21a8]" />
            </div>
            <div className="mb-2 text-sm font-semibold text-[#6b21a8]">AI Engineers</div>
            <h4 className="text-lg font-semibold text-slate-900">AI Cost & Latency Control</h4>
            <p className="mt-4 flex-auto text-base leading-6 text-slate-600">
              Stop flying blind on API costs. Track token usage, execution time, and failure rates across your autonomous agents and LLM chains.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-[#e2e8f0] transition-colors hover:bg-slate-50">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3e8ff]">
              <CommandLineIcon className="h-6 w-6 text-[#6b21a8]" />
            </div>
            <div className="mb-2 text-sm font-semibold text-[#6b21a8]">IT Operations</div>
            <h4 className="text-lg font-semibold text-slate-900">Visual Root Cause Analysis</h4>
            <p className="mt-4 flex-auto text-base leading-6 text-slate-600">
              When a critical sync fails at 3 AM, don&apos;t parse JSON logs. See exactly which node broke, the data payload it received, and the error output instantly.
            </p>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

function PricingSection() {
  const [isAnnual, setIsAnnual] = React.useState(true)

  const tiers = [
    {
      name: 'Starter',
      slug: 'starter',
      description: 'For solo developers and hobbyists.',
      priceMonthly: 12,
      priceAnnually: 120,
      highlights: [
        '1 n8n Instance',
        '7-day Data Retention',
        'Visual Flowchart Debugging',
        'AI Cost Monitoring',
      ],
    },
    {
      name: 'Pro',
      slug: 'pro',
      description: 'For production workflows and small teams.',
      priceMonthly: 39,
      priceAnnually: 390,
      featured: true,
      highlights: [
        'Everything from Community',
        '5 n8n Instances',
        '30-day Data Retention',
        'Email & Slack Alerts',
        '5 Team Members',
      ],
    },
    {
      name: 'Business',
      slug: 'business',
      description: 'For agencies and scaling companies.',
      priceMonthly: 199,
      priceAnnually: 1990,
      highlights: [
        'Everything from Pro',
        '50 n8n Instances',
        'Unlimited Data Retention',
        '20 Team Members',
        'Priority Support',
      ],
    },
  ]

  return (
    <div id="pricing" className="scroll-mt-8 overflow-hidden bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Subheading>Pricing</Subheading>
          <Heading as="h2" className="mt-2">
            Pricing that grows with your automations
          </Heading>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-600">
            Start for free with our Community edition. Upgrade when you need more history, alerts, and team collaboration.
          </p>
          <fieldset aria-label="Payment frequency" className="mt-8 flex justify-center">
            <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-sm font-semibold ring-1 ring-[#cbd5e1] bg-[#f1f5f9]">
              <label className="group relative cursor-pointer rounded-full px-4 py-2 has-[:checked]:bg-[#6b21a8]">
                <input
                  className="absolute inset-0 appearance-none rounded-full cursor-pointer"
                  type="radio"
                  value="monthly"
                  name="frequency"
                  checked={!isAnnual}
                  onChange={() => setIsAnnual(false)}
                />
                <span className="text-slate-600 group-has-[:checked]:text-white">Monthly</span>
              </label>
              <label className="group relative cursor-pointer rounded-full px-4 py-2 has-[:checked]:bg-[#6b21a8]">
                <input
                  className="absolute inset-0 appearance-none rounded-full cursor-pointer"
                  type="radio"
                  value="annually"
                  name="frequency"
                  checked={isAnnual}
                  onChange={() => setIsAnnual(true)}
                />
                <span className="text-slate-600 group-has-[:checked]:text-white">Annually</span>
              </label>
            </div>
          </fieldset>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-y-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${tier.featured ? 'z-10' : 'z-0'}`}
            >
              <div
                className={`flex h-full flex-col rounded-2xl p-8 ring-1 ${
                  tier.featured
                    ? 'bg-white shadow-2xl ring-2 ring-[#6b21a8] lg:scale-105'
                    : 'bg-white shadow-md ring-[#e2e8f0]'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="rounded-full bg-[#f3e8ff] px-4 py-1 text-xs font-semibold text-[#6b21a8] shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-medium text-slate-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-base leading-6 text-slate-600">{tier.description}</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-x-2">
                    <span className="text-5xl font-semibold tracking-tight text-slate-900">
                      €{isAnnual ? tier.priceAnnually : tier.priceMonthly}
                    </span>
                    <span className="text-sm font-semibold text-slate-600">
                      EUR/{isAnnual ? 'year' : 'month'}
                    </span>
                    {isAnnual && (
                      <span className="rounded-full px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 ring-1 ring-green-200">
                        Save 17%
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className={`mt-6 w-full rounded-full px-4 py-3 text-base leading-6 font-semibold transition-colors cursor-pointer ${
                    tier.featured
                      ? 'bg-[#6b21a8] text-white hover:bg-[#581c87]'
                      : 'bg-white text-slate-900 border border-[#e2e8f0] hover:bg-slate-50'
                  }`}
                >
                  Get Early Access
                </button>
                <ul className="mt-8 space-y-3 flex-1">
                  {tier.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-base leading-[21px] text-slate-600">
                      <CheckIcon className="h-5 w-5 flex-none text-slate-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-base text-slate-600"
        >
          Need an Enterprise plan with custom limits?{' '}
          <a href="mailto:contact@elova.io" className="text-slate-900 hover:text-slate-700 font-semibold underline underline-offset-2">
            Contact us
          </a>
          .
        </motion.p>
      </Container>
    </div>
  )
}

export function HomePage() {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Hero />
      <main>
        <div className="py-32">
          <FeaturesSection />
          <UseCasesSection />
          <PricingSection />
          <FAQSection />
        </div>
      </main>
      <FinalCTA />
      <Footer />
    </div>
  )
}
