import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FAQSection } from '@/components/faq-section'
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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple pricing for n8n observability. Start for free, upgrade for production scale.',
}

const tiers = [
  {
    name: 'Community',
    slug: 'community',
    description: 'For solo developers and hobbyists.',
    priceMonthly: 0,
    href: 'https://github.com/philipphaunstetter/n8n-analytics',
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
    href: '#',
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
    href: '#',
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

function PricingHeader() {
  return (
    <div className="relative">
      <Container className="relative pt-24 pb-24 sm:pt-32 lg:pb-32">
        <div className="relative z-10">
          <Heading as="h1" className="text-center">Pricing that grows with your automations</Heading>
          <Lead className="mt-6 mx-auto max-w-2xl text-center">
            Start for free with our Community edition. Upgrade when you need more history, alerts, and team collaboration.
          </Lead>
        </div>

        {/* Pricing Cards */}
        <div className="relative mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">Need an Enterprise plan with custom limits? <Link href="mailto:sales@elova.io" className="text-rose-400 hover:underline">Contact us</Link>.</p>
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  const isPro = tier.slug === 'pro'
  const cardBg = isPro ? 'bg-white shadow-2xl' : 'bg-slate-800/80'
  const borderClass = isPro ? 'ring-2 ring-rose-500' : 'ring-1 ring-white/10'
  const textColor = isPro ? 'text-gray-900' : 'text-white'
  const descColor = isPro ? 'text-gray-600' : 'text-gray-400'
  const priceColor = isPro ? 'text-gray-900' : 'text-white'
  const borderColor = isPro ? 'border-gray-200' : 'border-white/10'
  
  return (
    <div className={`relative rounded-2xl ${cardBg} p-8 ${borderClass} ${isPro ? 'z-10 lg:scale-105' : ''}`}>
      {isPro && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
            Most Popular
          </div>
        </div>
      )}
      <div className="relative">
        <h3 className={`text-lg font-semibold ${isPro ? 'text-rose-600' : 'text-white'}`}>{tier.name}</h3>
        <p className={`mt-2 text-sm/6 ${descColor}`}>{tier.description}</p>
        <div className="mt-6 flex items-baseline gap-x-2">
          <span className={`text-5xl font-semibold tracking-tight ${priceColor}`}>
            ${tier.priceMonthly}
          </span>
          <span className={`text-sm font-semibold ${descColor}`}>USD/month</span>
        </div>
        <div className="mt-8">
          <Button href={tier.href} variant={isPro ? 'primary' : 'secondary'} className="w-full">
            {tier.priceMonthly === 0 ? 'Get Started' : 'Start free trial'}
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
                  <MenuButton className="flex items-center justify-between gap-2 font-medium text-white">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-white" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-slate-800 p-1 shadow-lg ring-1 ring-white/10 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 text-white data-focus:bg-white/10"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-white" />
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
                  <div className="-mx-4 rounded-lg bg-slate-700 px-4 py-3 text-sm/6 font-semibold text-white">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-slate-700 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-400"
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
                            <div className="text-sm/6 text-white">{value}</div>
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

function FeatureItem({
  description,
  disabled = false,
  featured = false,
}: {
  description: string
  disabled?: boolean
  featured?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className={`flex items-start gap-3 text-sm/6 ${featured ? 'text-gray-700' : 'text-gray-400'} data-disabled:text-gray-500`}
    >
      <CheckIcon className={`h-5 w-5 flex-none ${featured ? 'text-rose-600' : 'text-gray-500'}`} aria-hidden="true" />
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let params = await searchParams
  let tier =
    typeof params.tier === 'string'
      ? tiers.find(({ slug }) => slug === params.tier)!
      : tiers[0]

  return (
    <div className="overflow-hidden">
      <div className="relative isolate bg-slate-900">
        {/* Radial gradient overlay for entire page */}
        <svg
          viewBox="0 0 1208 1024"
          aria-hidden="true"
          className="absolute top-32 left-1/2 -z-10 h-256 -translate-x-1/2 blur-3xl opacity-20"
        >
          <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#pricing-gradient)" />
          <defs>
            <radialGradient id="pricing-gradient">
              <stop stopColor="#f43f5e" />
              <stop offset={1} stopColor="#be123c" />
            </radialGradient>
          </defs>
        </svg>
        
        <Container>
          <Navbar />
        </Container>
        <main>
          <PricingHeader />
          <PricingTable selectedTier={tier} />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
