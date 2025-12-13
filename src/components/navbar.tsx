'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'

const links = [
  { href: '/pricing', label: 'Pricing' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex lg:items-center lg:gap-2">
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-slate-700 bg-blend-multiply data-hover:underline data-hover:underline-offset-4">
            {label}
          </Link>
        </div>
      ))}
      <Link
        href="/early-access"
        className="flex items-center px-4 py-2 text-base font-medium text-white bg-rose-600 rounded-full data-hover:bg-rose-700 transition-colors"
      >
        Get Early Access
      </Link>
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-slate-100 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6 text-slate-700" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel static className="lg:hidden">
      {({ open }) => (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="relative overflow-hidden"
            >
              <div className="flex flex-col gap-6 px-6 py-4">
                {links.map(({ href, label }, linkIndex) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: linkIndex * 0.1,
                    }}
                    key={href}
                  >
                    <Link
                      href={href}
                      className="block w-full text-center text-base font-medium text-slate-700"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: links.length * 0.1,
                  }}
                >
                  <Link
                    href="/early-access"
                    className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-rose-600 rounded-full data-hover:bg-rose-700"
                  >
                    Get Early Access
                  </Link>
                </motion.div>
              </div>
              <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2">
                <div className="absolute inset-x-0 top-0 border-t border-slate-200" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </DisclosurePanel>
  )
}

import { Container } from './container'
import { NavbarReveal } from './navbar-reveal'

export function Navbar() {
  return (
    <NavbarReveal>
      <Disclosure as="header" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md w-full">
        <Container>
          <div className="relative flex justify-between py-4">
            <div className="relative flex gap-6">
              <div className="flex items-center">
                <Link href="/" title="Home">
                  <Logo className="h-9" />
                </Link>
              </div>
            </div>
            <DesktopNav />
            <MobileNavButton />
          </div>
        </Container>
        <MobileNav />
      </Disclosure>
    </NavbarReveal>
  )
}
