"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, Check } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export default function BookingPage() {
  const [date, setDate] = useState<Date>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setSubmitted(true)
  }

  return (
    <main className="flex-1">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/90 to-rose-50/80" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            opacity: 0.3,
          }}
        />
        <div className="container relative grid min-h-[300px] items-center gap-4 px-4 py-12 md:px-6 md:py-24">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-rose-900 sm:text-5xl md:text-6xl">
              Book Our Services
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Schedule a consultation or book services directly. We'll take care of all the details.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          {submitted ? (
            <div className="mx-auto max-w-2xl rounded-lg border border-rose-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <Check className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Booking Request Received</h2>
              <p className="mb-6 text-muted-foreground">
                Thank you for your booking request! A member of our team will contact you within 24 hours to confirm
                your appointment and discuss your specific needs.
              </p>
              <Button className="bg-rose-500 text-white hover:bg-rose-600" onClick={() => setSubmitted(false)}>
                Submit Another Request
              </Button>
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-lg border border-rose-100 bg-white p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Personal Information</h2>
                  <p className="text-sm text-muted-foreground">
                    Please provide your contact information so we can get in touch with you.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Your last name" required />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Service Information</h2>
                  <p className="text-sm text-muted-foreground">Tell us about the services you're interested in.</p>
                </div>

                <div className="space-y-2">
                  <Label>I am a:</Label>
                  <RadioGroup defaultValue="visitor" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="visitor" id="visitor" />
                      <Label htmlFor="visitor" className="font-normal">
                        Visitor to Nashville
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="resident" id="resident" />
                      <Label htmlFor="resident" className="font-normal">
                        Nashville Resident
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="property-owner" id="property-owner" />
                      <Label htmlFor="property-owner" className="font-normal">
                        Property Owner
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Initial Consultation</SelectItem>
                      <SelectItem value="vacation">Vacation Concierge Services</SelectItem>
                      <SelectItem value="resident">Resident Concierge Services</SelectItem>
                      <SelectItem value="property">Property Management</SelectItem>
                      <SelectItem value="event">Event Planning</SelectItem>
                      <SelectItem value="custom">Custom Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Please share any specific requests or information that will help us prepare for your consultation."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hear-about">How did you hear about us?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Friend or Family</SelectItem>
                      <SelectItem value="hotel">Hotel Recommendation</SelectItem>
                      <SelectItem value="ad">Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-rose-500 text-white hover:bg-rose-600">
                  Submit Booking Request
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

