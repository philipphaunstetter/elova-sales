'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import { FAQSection } from '@/components/faq-section'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    slug: 'starter',
    description: 'For solo developers and hobbyists.',
    priceMonthly: 12,
    priceAnnually: 120,
    href: '/early-access',
    highlights: [
      { description: '1 n8n Instance' },
      { description: '7-day Data Retention' },
      { description: 'Visual Flowchart Debugging' },
      { description: 'AI Cost Monitoring' },
    ],
    features: [
      { section: 'Scale', name: 'n8n Instances', value: '1' },
      { section: 'Scale', name: 'Team members', value: false },
      { section: 'Scale', name: 'Shared Projects', value: false },
      { section: 'Data', name: 'Retention', value: '7 days' },
      { section: 'Features', name: 'Flowchart Viewer', value: true },
      { section: 'Features', name: 'AI Cost Monitoring', value: true },
      { section: 'Features', name: 'Alerts (Email/Slack)', value: false },
      { section: 'Features', name: 'White-labeling', value: false },
      { section: 'Support', name: 'Support', value: 'Community' },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    description: 'For production workflows and small teams.',
    priceMonthly: 39,
    priceAnnually: 390,
    href: '/early-access',
    highlights: [
      { description: 'Everything from Community' },
      { description: '5 n8n Instances' },
      { description: '30-day Data Retention' },
      { description: 'Email & Slack Alerts' },
      { description: '5 Team Members' },
    ],
    features: [
      { section: 'Scale', name: 'n8n Instances', value: '5' },
      { section: 'Scale', name: 'Team members', value: '5' },
      { section: 'Scale', name: 'Shared Projects', value: '3' },
      { section: 'Data', name: 'Retention', value: '30 days' },
      { section: 'Features', name: 'Flowchart Viewer', value: true },
      { section: 'Features', name: 'AI Cost Monitoring', value: true },
      { section: 'Features', name: 'Alerts (Email/Slack)', value: true },
      { section: 'Features', name: 'White-labeling', value: false },
      { section: 'Support', name: 'Support', value: 'Email (48h)' },
    ],
  },
  {
    name: 'Business',
    slug: 'business',
    description: 'For agencies and scaling companies.',
    priceMonthly: 199,
    priceAnnually: 1990,
    href: '/early-access',
    highlights: [
      { description: 'Everything from Pro' },
      { description: '50 n8n Instances' },
      { description: 'Unlimited Data Retention' },
      { description: '20 Team Members' },
      { description: 'Priority Support' },
    ],
    features: [
      { section: 'Scale', name: 'n8n Instances', value: '50' },
      { section: 'Scale', name: 'Team members', value: '20' },
      { section: 'Scale', name: 'Shared Projects', value: '10' },
      { section: 'Data', name: 'Retention', value: 'Unlimited' },
      { section: 'Features', name: 'Flowchart Viewer', value: true },
      { section: 'Features', name: 'AI Cost Monitoring', value: true },
      { section: 'Features', name: 'Alerts (Email/Slack)', value: true },
      { section: 'Features', name: 'White-labeling', value: false },
      { section: 'Support', name: 'Support', value: 'Priority (24h)' },
    ],
  },
]

function SocialIconGitHub(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function PricingHeader() {
  return (
    <div className="relative">
      <Container className="relative pt-24 pb-24 sm:pt-32 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Heading as="h1" className="text-center">Pricing that grows with your automations</Heading>
          <Lead className="mt-6 mx-auto max-w-2xl text-center !text-slate-600">
            Start for free with our Community edition. Upgrade when you need more history, alerts, and team collaboration.
          </Lead>
        </motion.div>
      </Container>
    </div>
  )
}

function PricingCardsSection({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number]
}) {
  return (
    <Container>
      {/* Pricing Cards */}
      <div className="relative mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier, tierIndex) => {
          const isPro = tier.slug === 'pro'
          return (
            <motion.div
              key={tierIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
              className={`relative ${isPro ? 'z-10' : 'z-0'}`}
            >
              <PricingCard tier={tier} />
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-slate-600">Need an Enterprise plan with custom limits? <Link href="mailto:sales@elova.io" className="text-rose-600 hover:underline">Contact us</Link>.</p>
      </motion.div>

      {/* Community Edition Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="mt-24 rounded-3xl bg-gradient-to-r from-rose-500 to-rose-600 lg:flex lg:items-center lg:justify-between lg:p-16 p-8"
      >
        <div className="lg:w-1/2">
          <Heading as="h2" className="!text-white">Looking for something else?</Heading>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-16">
          <div className="rounded-2xl bg-white p-8 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Community Edition</h3>
            <p className="mt-2 text-sm/6 text-slate-600">
              A standard, self-hosted version of Elova is available on GitHub.
            </p>
            <div className="mt-6 flex gap-4">
              <Button href="https://github.com/philipphaunstetter/n8n-analytics" variant="secondary" className="gap-2">
                <SocialIconGitHub className="size-4" />
                GitHub
              </Button>
              <Button href="https://github.com/philipphaunstetter/n8n-analytics/blob/main/docs/prd.md" variant="secondary">
                View docs
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  const isPro = tier.slug === 'pro'
  const cardBg = isPro ? 'bg-white shadow-2xl' : 'bg-white shadow-md'
  const borderClass = isPro ? 'ring-2 ring-rose-500' : 'ring-1 ring-slate-200'
  const descColor = isPro ? 'text-slate-600' : 'text-slate-600'
  const priceColor = isPro ? 'text-slate-900' : 'text-slate-900'
  const borderColor = isPro ? 'border-slate-200' : 'border-slate-200'
  
  return (
    <div className={`relative rounded-2xl ${cardBg} p-8 ${borderClass} ${isPro ? 'lg:scale-105' : ''}`}>
      {isPro && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
            Most Popular
          </div>
        </div>
      )}
      <div className="relative">
        <h3 className={`text-lg font-semibold ${isPro ? 'text-rose-600' : 'text-slate-900'}`}>{tier.name}</h3>
        <p className={`mt-2 text-sm/6 ${descColor}`}>{tier.description}</p>
        <div className="mt-6 flex items-baseline gap-x-2 group-has-[[name=frequency][value=monthly]:checked]/tiers:flex hidden">
          <span className={`text-5xl font-semibold tracking-tight ${priceColor}`}>
            €{tier.priceMonthly}
          </span>
          <span className={`text-sm font-semibold ${descColor}`}>EUR/month</span>
        </div>
        <div className="mt-6 flex items-baseline gap-x-3 group-not-has-[[name=frequency][value=monthly]:checked]/tiers:flex hidden">
          <span className={`text-5xl font-semibold tracking-tight ${priceColor}`}>
            €{tier.priceAnnually}
          </span>
          <span className={`text-sm font-semibold ${descColor}`}>EUR/year</span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isPro
              ? 'bg-green-100 text-green-700 ring-1 ring-green-200'
              : 'bg-green-100 text-green-700 ring-1 ring-green-200'
          }`}>
            Save 17%
          </span>
        </div>
        <div className="mt-8">
          <Button href={tier.href} variant={isPro ? 'primary' : 'secondary'} className="w-full">
            Get Early Access
          </Button>
        </div>
        <ul className={`mt-8 space-y-3 pt-8 border-t ${borderColor}`}>
          {tier.highlights.map((props, featureIndex) => (
            <FeatureItem key={featureIndex} {...props} featured={isPro} />
          ))}
        </ul>
      </div>
    </div>
  )
}

function PricingTable({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number]
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0" colSpan={4}>
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium text-slate-900">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-slate-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-slate-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 text-slate-900 data-focus:bg-slate-100"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-slate-900" />
                </div>
              </div>
            </td>
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-slate-100 px-4 py-3 text-sm/6 font-semibold text-slate-900">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-slate-200 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-slate-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6 text-slate-900">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem(
  {
    description,
    disabled = false,
    featured = false,
  }: {
    description: string
    disabled?: boolean
    featured?: boolean
  },
) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className={`flex items-start gap-3 text-sm/6 ${featured ? 'text-slate-700' : 'text-slate-600'} data-disabled:text-slate-400`}
    >
      <CheckIcon className={`h-5 w-5 flex-none ${featured ? 'text-rose-600' : 'text-gray-500'}`} aria-hidden="true" />
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

export function PricingPageClient({
  params,
}: {
  params: { [key: string]: string | string[] | undefined }
}) {
  let tier =
    typeof params.tier === 'string'
      ? tiers.find(({ slug }) => slug === params.tier)!
      : tiers[0]

  return (
    <div className="overflow-hidden">
      <div className="relative isolate bg-white">

        <Container>
          <Navbar />
        </Container>
        <main>
          <form className="group/tiers">
            <PricingHeader />

            {/* Billing Frequency Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="mt-16 flex justify-center"
            >
              <fieldset aria-label="Payment frequency">
                <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-sm font-semibold ring-1 ring-slate-300 bg-slate-100">
                  <label className="group relative rounded-full px-4 py-2 has-checked:bg-rose-600">
                    <input
                      defaultValue="monthly"
                      name="frequency"
                      type="radio"
                      className="absolute inset-0 appearance-none rounded-full"
                    />
                    <span className="text-slate-600 group-has-checked:text-white">Monthly</span>
                  </label>
                  <label className="group relative rounded-full px-4 py-2 has-checked:bg-rose-600">
                    <input
                      defaultValue="annually"
                      defaultChecked
                      name="frequency"
                      type="radio"
                      className="absolute inset-0 appearance-none rounded-full"
                    />
                    <span className="text-slate-600 group-has-checked:text-white">Annually</span>
                  </label>
                </div>
              </fieldset>
            </motion.div>

            <PricingCardsSection selectedTier={tier} />
          </form>
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
