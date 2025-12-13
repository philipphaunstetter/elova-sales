import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { WaitlistForm } from '@/components/waitlist-form'

export const metadata = {
  title: 'Early Access',
  description: 'Join the early access list for Elova.',
}

export default function EarlyAccess() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative isolate">
        
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex items-center">
            <div className="relative w-full">
              <Container className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 sm:py-20">
                  <div className="text-left">
                    <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                      Join the <span className="text-rose-600">Early Access</span> Program
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                      Be the first to get access to Elova and shape the future of n8n observability.
                      We are currently rolling out invites in batches.
                    </p>
                    <div className="mt-2">
                      <WaitlistForm />
                    </div>
                  </div>
                  <div className="relative flex justify-center lg:justify-end w-full">
                    <div className="w-[120%] lg:w-[160%] -mr-32 lg:-mr-64">
                      <Screenshot
                        width={1216}
                        height={768}
                        src="/screenshots/app.png"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </main>
        </div>
        
        <Footer hideCta />
      </div>
    </div>
  )
}
