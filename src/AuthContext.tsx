import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from '@/supabaseClient'

interface AuthContextType {
  user: any | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch initial user session
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data?.user ?? null)
      setLoading(false)
    }

    fetchUser()

    // Listen for auth changes (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
