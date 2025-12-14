'use client'

import { useState } from 'react'
import { joinWaitlist } from '@/app/actions'
import { Button } from './button'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Call server action
    const result = await joinWaitlist(email)
    
    if (result.success) {
      console.log('Joined waitlist:', email)
      setStatus('success')
      setEmail('')
    } else {
      console.error(result.error)
      setStatus('idle') // Or 'error' state if we had one, but idle lets them retry
      // Ideally show error message to user
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-md flex-col gap-y-4 sm:flex-row sm:gap-x-4">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-auto rounded-full border-0 bg-white px-5 py-3 text-base text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:leading-6 placeholder:text-slate-400"
        placeholder="Enter your email"
        disabled={status === 'loading' || status === 'success'}
      />
      <div className="flex-none">
        <Button type="submit" disabled={status === 'loading' || status === 'success'} className="!py-3 !px-6 cursor-pointer">
          {status === 'loading' ? 'Joining...' : status === 'success' ? 'You’re on the list!' : 'Get Early Access'}
        </Button>
      </div>
    </form>
  )
}
