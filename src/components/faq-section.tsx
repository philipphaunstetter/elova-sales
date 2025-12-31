'use client'

import { Container } from '@/components/container'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    question: 'How does the monitoring work?',
    answer:
      'elova connects to your n8n instance via API. It fetches workflow execution data and presents it in a unified dashboard. We do not store your workflow data in the cloud; everything stays on your self-hosted instance.',
  },
  {
    question: 'Is the Community version really free?',
    answer:
      'Yes! The Community version is free forever for 1 n8n instance. It includes all core features like the flowchart debugger and endpoint monitoring.',
  },
  {
    question: 'Can I host it myself?',
    answer:
      'Absolutely. elova is designed to be self-hosted using Docker. You can run it on the same server as your n8n instance or a separate one.',
  },
  {
    question: 'Do you support Zapier or Make.com?',
    answer:
      'Currently, we focus on n8n monitoring. Support for Zapier and Make.com is planned for the Enterprise tier in the future.',
  },
]

export function FAQSection() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium tracking-tight text-slate-900"
          >
            Frequently asked questions
          </motion.h2>
          <dl className="mt-8 flex flex-col gap-1 divide-y divide-[#cbd5e1]">
            {faqs.map((faq, index) => (
              <Disclosure key={faq.question} as="div" className="pt-4 pb-4 first:pt-0">
                {({ open }) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-slate-900 cursor-pointer">
                        <span className="text-base/7 font-normal">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                          <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <AnimatePresence initial={false}>
                      {open && (
                        <DisclosurePanel static className="mt-2">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pr-12">
                              <p className="text-sm leading-[21px] text-slate-600">{faq.answer}</p>
                            </div>
                          </motion.div>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </section>
    </Container>
  )
}
