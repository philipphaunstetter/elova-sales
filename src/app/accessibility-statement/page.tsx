'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'

export default function AccessibilityStatement() {
  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <Heading as="h1" className="mb-8">
            Accessibility Statement
          </Heading>
          <div className="space-y-6 text-lg text-slate-400">
            <p>
              [Company Name] is committed to making its website accessible, in accordance with [Relevant Legislation, e.g., BITV 2.0].
            </p>

            <p>
              <strong>Compliance Status</strong>
              <br />
              This website is [partially/fully] compliant with [Standard].
            </p>

            <p>
              <strong>Feedback and Contact Information</strong>
              <br />
              If you notice any barriers or have suggestions for improvement, please contact us:
              <br />
              Email: [Email Address]
              <br />
              Phone: [Phone Number]
            </p>
            
            <p>
               This statement was last updated on: [Date]
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
