import type { Metadata } from 'next'
import { PricingPageClient } from './pricing-client'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple pricing for n8n observability. Start for free, upgrade for production scale.',
}

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  return <PricingPageClient params={params} />
}
