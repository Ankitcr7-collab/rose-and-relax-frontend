'use client'; // Marks this as a client-side component in Next.js

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

// An interface in TypeScript is like a blueprint or contract that defines the shape of an object
// This interface says that any User object MUST have these exact properties with these types
interface User {
  id: number;          // Must have a numeric id
  email: string;       // Must have an email that's a string
  username: string;    // Must have a username that's a string
  is_active: boolean;  // Must have is_active that's true/false
  is_admin: boolean;   // Must have is_admin that's true/false
}

// This interface defines what methods and properties our authentication system must provide
// It's like a contract saying "any auth system must have these features"
interface AuthContextType {
  user: User | null;   // Must store either a User object or null
  loading: boolean;    // Must have a loading state (true/false)
  login: (username: string, password: string) => Promise<void>;  // Must have a login function
  signup: (email: string, username: string, password: string) => Promise<void>;  // Must have a signup function
  logout: () => void;  // Must have a logout function
}

// Creates a React context with our AuthContextType interface as its shape
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The main AuthProvider component that wraps our app
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null); // State for current user
  const [loading, setLoading] = useState(true); // State for loading status
  const router = useRouter(); // Next.js router for navigation

  // Effect runs on component mount to check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateToken();
    } else {
      setLoading(false);
    }
  }, []);

  // Validates the JWT token with the backend
  const validateToken = async () => {
    try {
      const userData = await api.getProfile();
      setUser(userData);
    } catch (error) {
      console.error('Token validation error:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  // Handles user login
  const login = async (username: string, password: string) => {
    try {
      const data = await api.login(username, password);
      localStorage.setItem('token', data.access_token);
      await validateToken();
      router.push('/'); // Redirects to home page after login
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Handles user signup
  const signup = async (email: string, username: string, password: string) => {
    try {
      await api.signup({ email, username, password });
      await login(username, password);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  // Handles user logout
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login'); // Redirects to login page
  };

  // Provides the authentication context to child components
  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context in other components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}