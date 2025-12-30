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
    <form onSubmit={handleSubmit} className="mt-10 w-full max-w-md mx-auto space-y-4">
      <Input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="admin@example.com"
        disabled={status === 'loading' || status === 'success'}
        error={status === 'error' ? error : undefined}
        className="w-full"
      />
      <Button 
        type="submit" 
        variant="dark"
        disabled={status === 'loading' || status === 'success'}
        showArrow
        className="w-full justify-center"
      >
        {status === 'loading' ? 'Joining...' : status === 'success' ? 'You\'re on the list!' : 'Get Early Access'}
      </Button>
    </form>
  )
}
