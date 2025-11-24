'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#use-cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex lg:items-center lg:gap-2">
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply data-hover:underline data-hover:underline-offset-4"
          >
            {label}
          </Link>
        </div>
      ))}
      <Link
        href="/login"
        className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply data-hover:underline data-hover:underline-offset-4"
      >
        Login
      </Link>
      <Link
        href="/try"
        className="flex items-center px-4 py-2 text-base font-medium text-white bg-white/10 rounded-full data-hover:bg-white/20 transition-colors shadow-md"
      >
        Try for Free
      </Link>
      <Link
        href="/demo"
        className="flex items-center px-4 py-2 text-base font-medium text-white bg-rose-600 rounded-full data-hover:bg-rose-500 transition-colors shadow-md"
      >
        Get a demo
      </Link>
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-white/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6 text-white" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-white">
              {label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: links.length * 0.1 },
          }}
        >
          <Link href="/login" className="text-base font-medium text-white">
            Login
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: (links.length + 1) * 0.1 },
          }}
        >
          <Link
            href="/try"
            className="inline-block text-center px-4 py-2 text-base font-medium text-white bg-white/10 rounded-full shadow-md"
          >
            Try for Free
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: (links.length + 2) * 0.1 },
          }}
        >
          <Link
            href="/demo"
            className="inline-block text-center px-4 py-2 text-base font-medium text-white bg-rose-600 rounded-full shadow-md"
          >
            Get a demo
          </Link>
        </motion.div>
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-white/5" />
        <div className="absolute inset-x-0 top-2 border-t border-white/5" />
      </div>
    </DisclosurePanel>
  )
}

import { Container } from './container'
import { NavbarReveal } from './navbar-reveal'

export function Navbar() {
  return (
    <NavbarReveal>
      <Disclosure as="header" className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 w-full">
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
