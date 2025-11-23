import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Self-hosted workflow observability for n8n. Monitor executions, debug with visual flowcharts, and track your automation health.',
}

function Hero() {
  return (
    <div className="relative">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="mb-8 flex">
            <Link
              href="https://github.com/philipphaunstetter/n8n-analytics"
              className="flex items-center gap-1 rounded-xs bg-blue-500/10 px-3 py-0.5 text-sm/6 font-medium text-blue-400 data-hover:bg-blue-500/20"
            >
              Open Source on GitHub
              <ChevronRightIcon className="size-4" />
            </Link>
          </div>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl md:text-8xl">
            The Missing Observability Layer for n8n
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium text-gray-400 sm:text-xl/8">
            Self-hosted monitoring, visual debugging, and reliability checks for your critical automations. Built for IT Ops, Agencies, and AI Engineers.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://github.com/philipphaunstetter/n8n-analytics">Get Started</Button>
            <Button variant="secondary" href="/#features">
              View Features
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ScreenshotSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Stop flying blind with your automations.
        </Heading>
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
      <Subheading>Features</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Monitor, debug, and optimize with confidence.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-2">
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
      </div>
    </Container>
  )
}

function UseCasesSection() {
  return (
    <Container id="use-cases" className="pt-24 sm:pt-32">
      <Subheading>Use Cases</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Built for mission-critical automation teams.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div className="rounded-2xl bg-gray-900 p-8 ring-1 ring-white/10">
            <h4 className="font-semibold text-white">IT Operations</h4>
            <p className="mt-2 text-sm text-gray-400">
              Ensure your cron jobs and infrastructure workflows never fail silently. Get unified visibility across all instances.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-2xl bg-gray-900 p-8 ring-1 ring-white/10">
            <h4 className="font-semibold text-white">AI Engineers</h4>
            <p className="mt-2 text-sm text-gray-400">
              Track token usage and costs for your LLM chains. Debug complex AI agent interactions with visual traces.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-2xl bg-gray-900 p-8 ring-1 ring-white/10">
            <h4 className="font-semibold text-white">Agencies</h4>
            <p className="mt-2 text-sm text-gray-400">
              Manage workflows for multiple clients in one dashboard. Offer white-labeled monitoring portals to your customers.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
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
