import { HomePage } from '@/components/home-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Self-hosted workflow observability for n8n. Monitor executions, debug with visual flowcharts, and track your automation health.',
}

export default function Home() {
  return <HomePage />
}
