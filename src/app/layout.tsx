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
    <html lang="en" className="dark">
      <body className="bg-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
