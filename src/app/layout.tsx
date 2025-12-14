import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const matchFont = localFont({
  src: [
    {
      path: '../fonts/MatchVariableWEB-Upright.woff2',
      style: 'normal',
    },
    {
      path: '../fonts/MatchVariableWEB-Italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-match',
  display: 'swap',
})

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
    <html lang="en" className={matchFont.variable}>
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
