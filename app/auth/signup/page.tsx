'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) setError(error.message)
    else router.push('/sign-in')

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003B36] text-white px-4">
      <div className="bg-white text-[#003B36] shadow-xl rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#003B36]">Create Your EzyRide Account</h1>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E5B700] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E5B700] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#E5B700] text-[#003B36] rounded-lg py-3 font-semibold hover:bg-[#d4a800] transition-all duration-300"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-sm mt-6">
          Already have an account?{' '}
          <a href="/sign-in" className="text-[#E5B700] font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}
