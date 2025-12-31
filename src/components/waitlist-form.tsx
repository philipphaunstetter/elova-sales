'use client'

import { useState } from 'react'
import { joinWaitlist } from '@/app/actions'
import { Button } from './button'
import { Input } from './input'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    
    // Call server action
    const result = await joinWaitlist(email)
    
    if (result.success) {
      console.log('Joined waitlist:', email)
      setStatus('success')
      setEmail('')
    } else {
      console.error(result.error)
      setStatus('error')
      setError(result.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2">
      <div className="space-y-2">
        <Input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === 'loading' || status === 'success'}
          error={status === 'error' ? error : undefined}
          className="w-full"
        />
        <Button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'}
          className="w-full justify-center"
        >
          {status === 'loading' ? 'Joining...' : status === 'success' ? 'You\'re on the list!' : 'Join Waiting List'}
        </Button>
      </div>
      <p className="text-xs text-center text-[#64748b] leading-4">
        * Your data is stored locally & double opt-in is required.
      </p>
    </form>
  )
}
