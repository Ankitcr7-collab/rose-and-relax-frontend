"use client"

import { useState, useEffect } from "react"
import { Trash2, Plus, Minus, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart-provider"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)
  const [discount, setDiscount] = useState(0)

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.0925 // Nashville sales tax rate
  const total = subtotal + tax - discount

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "WELCOME10" && !promoApplied) {
      setDiscount(subtotal * 0.1) // 10% discount
      setPromoApplied(true)
    }
  }

  // Check for URL parameters to add items to cart
  useEffect(() => {
    // This would be handled by your actual cart implementation
    // This is just a placeholder for demonstration
  }, [])

  return (
    <main className="flex-1">
      <div className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="mb-8 text-3xl font-bold tracking-tighter md:text-4xl">Your Cart</h1>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <div className="mb-6 rounded-full bg-rose-50 p-4">
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
                  className="h-8 w-8 text-rose-500"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
              <p className="mb-6 text-muted-foreground">Looks like you haven't added any services to your cart yet.</p>
              <Button className="bg-rose-500 text-white hover:bg-rose-600">
                <Link href="/services">Browse Services</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="rounded-lg border shadow-sm">
                  <div className="p-6">
                    <h2 className="mb-4 text-lg font-semibold">Items in Your Cart</h2>

                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-start gap-4">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                            <img
                              src={item.image || "/placeholder.svg?height=100&width=100"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <h3 className="text-base font-medium">{item.name}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  className="flex h-6 w-6 items-center justify-center rounded-full border"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="flex h-6 w-6 items-center justify-center rounded-full border"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-rose-500 hover:text-rose-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-lg border shadow-sm">
                  <div className="p-6">
                    <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {promoApplied && (
                        <div className="flex items-center justify-between text-rose-500">
                          <span>Discount (10%)</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between font-medium">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>

                      <div className="flex gap-2">
                        <Input
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Promo Code"
                          className="flex-1"
                        />
                        <Button
                          onClick={applyPromoCode}
                          variant="outline"
                          disabled={promoApplied}
                          className="border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
                        >
                          Apply
                        </Button>
                      </div>

                      {promoApplied && (
                        <p className="text-xs text-green-600">Promo code WELCOME10 applied successfully!</p>
                      )}

                      <Button className="w-full bg-rose-500 text-white hover:bg-rose-600">
                        <Link href="/checkout" className="flex items-center justify-center gap-2">
                          Proceed to Checkout <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>

                      <p className="mt-4 text-center text-xs text-muted-foreground">
                        Secure checkout powered by Stripe
                        <CreditCard className="mx-auto mt-2 h-4 w-4" />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-dashed border-rose-200 bg-rose-50 p-4">
                  <h3 className="mb-2 text-sm font-medium">Need Help?</h3>
                  <p className="text-xs text-muted-foreground">
                    Have questions about our services or need assistance with your order?
                  </p>
                  <Button variant="link" className="mt-2 h-auto p-0 text-sm text-rose-600">
                    <Link href="#contact">Contact our concierge team</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

