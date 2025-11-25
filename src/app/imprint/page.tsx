'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'

export default function Imprint() {
  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <Heading as="h1" className="mb-8">
            Imprint
          </Heading>
          <div className="space-y-6 text-lg text-slate-400">
            <p>
              <strong>Information according to § 5 TMG</strong>
              <br />
              [Company Name]
              <br />
              [Address Line 1]
              <br />
              [Address Line 2]
              <br />
              [City, Postal Code]
              <br />
              Germany
            </p>

            <p>
              <strong>Represented by:</strong>
              <br />
              [Name of Representative]
            </p>

            <p>
              <strong>Contact:</strong>
              <br />
              Phone: [Phone Number]
              <br />
              Email: [Email Address]
            </p>

            <p>
              <strong>Register:</strong>
              <br />
              Registration in the commercial register.
              <br />
              Register court: [Court Name]
              <br />
              Registration number: [HRB Number]
            </p>

            <p>
              <strong>VAT ID:</strong>
              <br />
              Sales tax identification number according to § 27 a Sales Tax Law:
              <br />
              [VAT ID]
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
