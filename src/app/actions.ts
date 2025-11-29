'use server'

export async function joinWaitlist(email: string) {
  const webhookUrl = 'https://n8n.srv1041535.hstgr.cloud/webhook/elova-waiting-list'
  // The user specified "JWT token", so we'll assume it's used as a Bearer token or similar.
  // Using a generic name so the user can set it in Vercel.
  const secret = process.env.N8N_WEBHOOK_SECRET

  if (!secret) {
    console.error('Missing N8N_WEBHOOK_SECRET environment variable')
    return { success: false, error: 'Server configuration error' }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${secret}`,
      },
      body: JSON.stringify({ 
        email,
        source: 'elova-sales-site',
        timestamp: new Date().toISOString()
      }),
    })

    if (!response.ok) {
      console.error(`Webhook failed with status: ${response.status}`)
      return { success: false, error: 'Failed to join waitlist' }
    }

    return { success: true }
  } catch (error) {
    console.error('Error joining waitlist:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}
