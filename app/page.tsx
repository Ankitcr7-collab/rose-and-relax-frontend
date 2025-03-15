import Link from "next/link"
import { ArrowRight, CalendarCheck, Gift, Home, MapPin, ShoppingBag, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">

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
          <div className="container relative grid min-h-[500px] items-center gap-4 px-4 py-12 md:min-h-[600px] md:px-6 md:py-24 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-rose-900 sm:text-5xl md:text-6xl">
                Nashville's Premier Luxury Concierge Service
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Rosé & Relax offers personalized concierge solutions for both vacationers and full-time residents in
                Nashville.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="bg-rose-500 text-white hover:bg-rose-600">
                  <Link href="/booking">Book Our Services</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="bg-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tailored Concierge Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a unique hybrid model that caters to both vacationers and full-time residents with
                  personalized, luxury concierge solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <Home className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">For Vacation Home Guests</h3>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CalendarCheck className="h-4 w-4 text-rose-500" />
                    <span>Pre-arrival grocery shopping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Utensils className="h-4 w-4 text-rose-500" />
                    <span>Restaurant reservations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-rose-500" />
                    <span>Local experience bookings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4 text-rose-500" />
                    <span>Personal shopping assistance</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <Gift className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">For Full-Time Residents</h3>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CalendarCheck className="h-4 w-4 text-rose-500" />
                    <span>Regular home maintenance coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Utensils className="h-4 w-4 text-rose-500" />
                    <span>Event planning and management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-rose-500" />
                    <span>Personal assistant services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4 text-rose-500" />
                    <span>Lifestyle management</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="bg-rose-50 py-12 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nashville's Unique Concierge Experience
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                While other concierge services in Nashville focus primarily on property management or hospitality, Rosé
                & Relax stands out by offering a hybrid model that caters to both vacationers and full-time residents
                with personalized, luxury concierge solutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-rose-500 text-white hover:bg-rose-600">Our Story</Button>
                <Button
                  variant="outline"
                  className="border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900"
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <img
                alt="Luxury concierge service"
                className="aspect-video object-cover"
                height="310"
                src="/placeholder.svg?height=620&width=1100"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="testimonials" className="bg-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied clients about their experience with Rosé & Relax.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Avatar"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Vacation Home Guest</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    "Rosé & Relax made our Nashville vacation absolutely perfect. From stocking our rental with our
                    favorite groceries to booking the best local experiences, they thought of everything!"
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Avatar"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Michael & Lisa Thompson</h3>
                    <p className="text-sm text-muted-foreground">Full-Time Residents</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    "As busy professionals, having Rosé & Relax manage our lifestyle needs has been a game-changer.
                    Their attention to detail and personalized service is unmatched in Nashville."
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Avatar"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="font-semibold">David Wilson</h3>
                    <p className="text-sm text-muted-foreground">Property Owner</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    "I own a vacation property in Nashville but live out of state. Rosé & Relax ensures my guests have
                    an exceptional experience while maintaining my property to the highest standards."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-rose-50 py-12 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">Contact Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to experience Nashville's premier concierge service? Contact us today to discuss your needs and
                how we can enhance your Nashville experience.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  <span>Nashville, Tennessee</span>
                </div>
                <div className="flex items-center gap-2">
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
                    className="h-5 w-5 text-rose-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(615) 555-0123</span>
                </div>
                <div className="flex items-center gap-2">
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
                    className="h-5 w-5 text-rose-500"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>hello@roseandrelax.com</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="bg-rose-500 text-white hover:bg-rose-600">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  )
}

