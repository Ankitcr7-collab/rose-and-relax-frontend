import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { AuthProvider } from "@/components/auth-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rosé & Relax | Nashville's Premier Luxury Concierge Service",
  description: "Personalized concierge solutions for both vacationers and full-time residents in Nashville.",
    generator: 'v0.dev'
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8DEF91BB-2C3F-4B0B-82B7-A6384669D6F7-zIWZ6WULMRyaPF2OSmhur8ALazZg14.png"
            alt="Rosé and Relax Logo"
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-rose-500">
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-rose-500"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-rose-500"
          >
            Testimonials
          </Link>
          <Link
            href="/booking"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-rose-500"
          >
            Book Now
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-rose-500"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingBag className="h-6 w-6 text-rose-900" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
              0
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-rose-500">
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
            >
              Sign Up
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <CartProvider>
              <div className="relative min-h-screen">
                <Navigation />
                {children}
                <footer className="border-t bg-white">
                  <div className="container flex flex-col gap-6 px-4 py-10 md:px-6 md:py-12">
                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8DEF91BB-2C3F-4B0B-82B7-A6384669D6F7-zIWZ6WULMRyaPF2OSmhur8ALazZg14.png"
                            alt="Rosé and Relax Logo"
                            className="h-10 w-auto"
                          />
                        </div>
                        <p className="max-w-[300px] text-sm text-muted-foreground">
                          Nashville's premier luxury concierge service, offering personalized solutions for both vacationers
                          and full-time residents.
                        </p>
                      </div>
                      <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3">
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Services</h3>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link
                                href="/services"
                                className="text-muted-foreground transition-colors hover:text-rose-500"
                              >
                                For Vacationers
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services"
                                className="text-muted-foreground transition-colors hover:text-rose-500"
                              >
                                For Residents
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services"
                                className="text-muted-foreground transition-colors hover:text-rose-500"
                              >
                                Property Management
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services"
                                className="text-muted-foreground transition-colors hover:text-rose-500"
                              >
                                Event Planning
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Company</h3>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link href="#" className="text-muted-foreground transition-colors hover:text-rose-500">
                                About
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/testimonials"
                                className="text-muted-foreground transition-colors hover:text-rose-500"
                              >
                                Testimonials
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="text-muted-foreground transition-colors hover:text-rose-500">
                                Careers
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="text-muted-foreground transition-colors hover:text-rose-500">
                                Press
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Legal</h3>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link href="#" className="text-muted-foreground transition-colors hover:text-rose-500">
                                Terms
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="text-muted-foreground transition-colors hover:text-rose-500">
                                Privacy
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="text-muted-foreground transition-colors hover:text-rose-500">
                                Cookies
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="text-muted-foreground transition-colors hover:text-rose-500">
                                Contact
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center">
                      <p className="text-xs text-muted-foreground">© 2023 Rosé & Relax. All rights reserved.</p>
                      <div className="flex gap-4 sm:ml-auto">
                        <Link href="#" className="text-muted-foreground hover:text-rose-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                          <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-rose-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-rose-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                          <span className="sr-only">Instagram</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'