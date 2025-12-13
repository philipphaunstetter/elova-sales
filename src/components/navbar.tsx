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

function DesktopNav() {
  return null
}

function MobileNavButton() {
  return null
}

function MobileNav() {
  return null
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
          </div>
        </Container>
        <MobileNav />
      </Disclosure>
    </NavbarReveal>
  )
}
