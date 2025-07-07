import React, { useState } from 'react'
import { supabase } from './supabaseClient'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('') // 🆕 name field
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      let result

      if (isLogin) {
        result = await supabase.auth.signInWithPassword({
          email,
          password,
        })
      } else {
        result = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name, 
            },
          },
        })
      }

      const { error: authError } = result

      if (authError) {
        if (!isLogin && authError.message === 'User already registered') {
          setError('An account with this email already exists. Try logging in.')
        } else {
          setError(authError.message)
        }
      } else {
        console.log(isLogin ? 'Logged in!' : 'Signed up!', result)
        navigate('/introduction')
      }
    } catch (err: any) {
      setError('Unexpected error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl mb-4">{isLogin ? 'Login' : 'Sign Up'}</h1>

      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        {!isLogin && ( // 🆕 Only show name field during sign-up
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-blue-500 hover:underline"
      >
        {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
      </button>
    </div>
  )
}

export default Login
