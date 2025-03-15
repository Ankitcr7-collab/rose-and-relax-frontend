"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { api } from "@/lib/api"

type User = {
  id: string
  username: string
  email: string
} | null

type AuthContextType = {
  user: User
  login: (usernameOrEmail: string, password: string) => Promise<boolean>
  signup: (email: string, username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Check if user is logged in on initial load
  useEffect(() => {
    setMounted(true)
    const token = localStorage.getItem("token")
    
    if (token) {
      fetchUserProfile()
    } else {
      setIsLoading(false)
    }
  }, [])

  // Fetch user profile from API
  const fetchUserProfile = async () => {
    try {
      const userData = await api.getProfile()
      setUser(userData)
      setIsLoading(false)
    } catch (err) {
      console.error("Failed to fetch user profile", err)
      localStorage.removeItem("token")
      setIsLoading(false)
    }
  }

  // Real login function that calls the API
  const login = async (usernameOrEmail: string, password: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await api.login(usernameOrEmail, password)
      
      if (response.access_token) {
        localStorage.setItem("token", response.access_token)
        await fetchUserProfile()
        return true
      } else {
        throw new Error("No access token received")
      }
    } catch (err: any) {
      setError(err.message || "Login failed. Please check your credentials.")
      setIsLoading(false)
      return false
    }
  }

  // Real signup function that calls the API
  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      await api.signup({ email, username, password })
      
      // After signup, log the user in
      const loginSuccess = await login(username, password)
      return loginSuccess
    } catch (err: any) {
      setError(err.message || "Signup failed. Please try again.")
      setIsLoading(false)
      return false
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isLoading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}