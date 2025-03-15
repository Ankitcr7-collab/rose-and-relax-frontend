import Link from "next/link"
import { SparklesIcon as Champagne, Check, Home, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter text-rose-900 sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Experience luxury living with our comprehensive concierge solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
                Service Packages
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Choose Your Perfect Package
              </h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a variety of service packages designed to meet your needs, whether you're visiting Nashville or
                call it home.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            {/* Vacation Essentials Package */}
            <div className="flex flex-col rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <Champagne className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Vacation Essentials</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Perfect for short-term visitors needing basic concierge services.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold">$199</span>
                <span className="text-muted-foreground"> /stay</span>
              </div>
              <ul className="mb-8 flex-1 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Pre-arrival grocery shopping</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Welcome package with local treats</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>1 restaurant reservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Local recommendations guide</span>
                </li>
              </ul>
              <Button className="mt-auto w-full bg-rose-500 text-white hover:bg-rose-600">
                <Link href="/cart?package=vacation-essentials">Add to Cart</Link>
              </Button>
            </div>

            {/* Premium Vacation Package */}
            <div className="relative flex flex-col rounded-lg border-2 border-rose-500 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white">Most Popular</Badge>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <Home className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Premium Vacation</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Comprehensive service package for the ultimate Nashville vacation.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold">$399</span>
                <span className="text-muted-foreground"> /stay</span>
              </div>
              <ul className="mb-8 flex-1 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>All Vacation Essentials features</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>3 restaurant reservations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>2 local experience bookings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Personal shopping assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Daily check-in service</span>
                </li>
              </ul>
              <Button className="mt-auto w-full bg-rose-500 text-white hover:bg-rose-600">
                <Link href="/cart?package=premium-vacation">Add to Cart</Link>
              </Button>
            </div>

            {/* Resident Luxury Package */}
            <div className="flex flex-col rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <Gift className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Resident Luxury</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                For Nashville residents who want ongoing concierge services.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold">$299</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <ul className="mb-8 flex-1 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Weekly home maintenance checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Monthly deep cleaning coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>4 restaurant reservations/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Personal assistant (5 hrs/month)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-rose-500" />
                  <span>Seasonal home refreshes</span>
                </li>
              </ul>
              <Button className="mt-auto w-full bg-rose-500 text-white hover:bg-rose-600">
                <Link href="/cart?package=resident-luxury">Add to Cart</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rose-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
                À La Carte Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Custom Concierge Services</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Need something specific? Choose from our individual services to create your perfect experience.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Individual Services */}
            <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-lg font-bold">Grocery Shopping</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Pre-arrival grocery shopping with your preferred items.
              </p>
              <div className="mb-2">
                <span className="text-xl font-bold">$75</span>
                <span className="text-sm text-muted-foreground"> (up to $300 in groceries)</span>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-full border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
              >
                <Link href="/cart?service=grocery-shopping">Add to Cart</Link>
              </Button>
            </div>

            <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-lg font-bold">Restaurant Reservations</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Secure reservations at Nashville's most sought-after restaurants.
              </p>
              <div className="mb-2">
                <span className="text-xl font-bold">$35</span>
                <span className="text-sm text-muted-foreground"> per reservation</span>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-full border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
              >
                <Link href="/cart?service=restaurant-reservations">Add to Cart</Link>
              </Button>
            </div>

            <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-lg font-bold">Experience Bookings</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Book tickets for local shows, tours, and attractions.
              </p>
              <div className="mb-2">
                <span className="text-xl font-bold">$45</span>
                <span className="text-sm text-muted-foreground"> per experience</span>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-full border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
              >
                <Link href="/cart?service=experience-bookings">Add to Cart</Link>
              </Button>
            </div>

            <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-lg font-bold">Personal Shopping</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Personal shopping assistance for gifts or personal items.
              </p>
              <div className="mb-2">
                <span className="text-xl font-bold">$65</span>
                <span className="text-sm text-muted-foreground"> per hour</span>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-full border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
              >
                <Link href="/cart?service=personal-shopping">Add to Cart</Link>
              </Button>
            </div>

            <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-lg font-bold">Home Maintenance</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Coordination of cleaning, repairs, and maintenance services.
              </p>
              <div className="mb-2">
                <span className="text-xl font-bold">$55</span>
                <span className="text-sm text-muted-foreground"> per service</span>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-full border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
              >
                <Link href="/cart?service=home-maintenance">Add to Cart</Link>
              </Button>
            </div>

            <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-lg font-bold">Event Planning</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Custom event planning for parties, gatherings, and special occasions.
              </p>
              <div className="mb-2">
                <span className="text-xl font-bold">$85</span>
                <span className="text-sm text-muted-foreground"> per hour</span>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-full border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
              >
                <Link href="/cart?service=event-planning">Add to Cart</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
                Custom Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Something Special?</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Don't see what you're looking for? We specialize in custom concierge solutions tailored to your unique
                needs.
              </p>
              <div className="flex flex-col gap-2 pt-4 sm:flex-row sm:justify-center">
                <Button className="bg-rose-500 text-white hover:bg-rose-600">
                  <Link href="/booking">Request a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

