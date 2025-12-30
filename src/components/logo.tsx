import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/elova-brand.svg"
      alt="elova"
      width={100}
      height={43}
      className={clsx(className, 'block')}
    />
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/elova-brand.svg"
      alt="elova"
      width={100}
      height={43}
      className={clsx(className, 'block')}
    />
  )
}
