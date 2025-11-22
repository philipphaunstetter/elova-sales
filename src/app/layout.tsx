import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Elova',
    default: 'Elova - Workflow Observability for n8n',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="text-gray-950 antialiased">
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
