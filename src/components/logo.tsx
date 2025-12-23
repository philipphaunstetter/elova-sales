import Image from 'next/image'
import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/elova-brand.svg"
      alt="elova"
      width={100}
      height={43}
      className={className}
      priority
    />
  )
}
