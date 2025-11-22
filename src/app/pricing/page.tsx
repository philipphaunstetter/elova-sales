import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
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
      { description: '3 Endpoint Monitors' },
      { description: 'Visual Flowchart Debugging' },
    ],
    features: [
      { section: 'Scale', name: 'n8n Instances', value: '1' },
      { section: 'Scale', name: 'Team members', value: '1' },
      { section: 'Scale', name: 'Shared Projects', value: false },
      { section: 'Data', name: 'Retention', value: '7 days' },
      { section: 'Data', name: 'Endpoint Monitors', value: 3 },
      { section: 'Features', name: 'Flowchart Viewer', value: true },
      { section: 'Features', name: 'AI Cost Monitoring', value: false },
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
      { description: 'AI Cost & Token Tracking' },
      { description: '30-day Data Retention' },
      { description: 'Email & Slack Alerts' },
    ],
    features: [
      { section: 'Scale', name: 'n8n Instances', value: '5' },
      { section: 'Scale', name: 'Team members', value: '5' },
      { section: 'Scale', name: 'Shared Projects', value: '3' },
      { section: 'Data', name: 'Retention', value: '30 days' },
      { section: 'Data', name: 'Endpoint Monitors', value: 20 },
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
      { description: 'White-labeling', disabled: true },
      { description: 'Client Workspaces', disabled: true },
    ],
    features: [
      { section: 'Scale', name: 'n8n Instances', value: '50' },
      { section: 'Scale', name: 'Team members', value: '20' },
      { section: 'Scale', name: 'Shared Projects', value: '10' },
      { section: 'Data', name: 'Retention', value: 'Unlimited' },
      { section: 'Data', name: 'Endpoint Monitors', value: 100 },
      { section: 'Features', name: 'Flowchart Viewer', value: true },
      { section: 'Features', name: 'AI Cost Monitoring', value: true },
      { section: 'Features', name: 'Alerts (Email/Slack)', value: true },
      { section: 'Features', name: 'White-labeling', value: false },
      { section: 'Support', name: 'Support', value: 'Priority (24h)' },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Pricing that grows with your automations.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Start for free with our Community edition. Upgrade when you need more history, alerts, and team collaboration.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <div className="mt-12 text-center">
           <p className="text-gray-600">Need an Enterprise plan with custom limits? <Link href="mailto:sales@elova.io" className="text-blue-600 hover:underline">Contact us</Link>.</p>
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href} variant={tier.priceMonthly === 0 ? 'outline' : 'primary'}>
              {tier.priceMonthly === 0 ? 'Get Started' : 'Start free trial'}
            </Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Includes:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
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
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
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
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
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
                            <div className="text-sm/6">{value}</div>
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
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              How does the monitoring work?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Elova connects to your n8n instance via API. It fetches workflow execution data and presents it in a unified dashboard. We do not store your workflow data in the cloud; everything stays on your self-hosted instance.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Is the Community version really free?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes! The Community version is free forever for 1 n8n instance. It includes all core features like the flowchart debugger and endpoint monitoring.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I host it myself?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolutely. Elova is designed to be self-hosted using Docker. You can run it on the same server as your n8n instance or a separate one.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Do you support Zapier or Make.com?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Currently, we focus on n8n monitoring. Support for Zapier and Make.com is planned for the Enterprise tier in the future.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
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
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
