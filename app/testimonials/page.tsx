import Link from "next/link"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
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
              Client Testimonials
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Hear what our clients have to say about their experience with Rosé & Relax.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="flex flex-col rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rose-400 text-rose-400" />
                  ))}
              </div>
              <blockquote className="mb-6 flex-1 italic text-muted-foreground">
                "Rosé & Relax made our Nashville vacation absolutely perfect. From stocking our rental with our favorite
                groceries to booking the best local experiences, they thought of everything! The personalized welcome
                package was such a thoughtful touch, and their restaurant recommendations were spot-on. We felt like
                VIPs the entire trip."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sarah Johnson"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Vacation Home Guest</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rose-400 text-rose-400" />
                  ))}
              </div>
              <blockquote className="mb-6 flex-1 italic text-muted-foreground">
                "As busy professionals, having Rosé & Relax manage our lifestyle needs has been a game-changer. Their
                attention to detail and personalized service is unmatched in Nashville. The monthly home maintenance
                coordination has saved us countless hours, and their event planning for our anniversary party was
                flawless."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Michael & Lisa Thompson"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Michael & Lisa Thompson</h3>
                  <p className="text-sm text-muted-foreground">Full-Time Residents</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rose-400 text-rose-400" />
                  ))}
              </div>
              <blockquote className="mb-6 flex-1 italic text-muted-foreground">
                "I own a vacation property in Nashville but live out of state. Rosé & Relax ensures my guests have an
                exceptional experience while maintaining my property to the highest standards. Their communication is
                excellent, and I never have to worry about a thing. My guests rave about the concierge services, and my
                property has maintained perfect ratings thanks to their attention to detail."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="David Wilson"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">David Wilson</h3>
                  <p className="text-sm text-muted-foreground">Property Owner</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rose-400 text-rose-400" />
                  ))}
              </div>
              <blockquote className="mb-6 flex-1 italic text-muted-foreground">
                "We planned a girls' weekend in Nashville and Rosé & Relax made it absolutely stress-free! They arranged
                transportation, secured reservations at the hottest restaurants, and even helped us book VIP access to
                some amazing music venues. Their local knowledge is impeccable, and they tailored everything to our
                preferences."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Jennifer Adams"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Jennifer Adams</h3>
                  <p className="text-sm text-muted-foreground">Group Vacation</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rose-400 text-rose-400" />
                  ))}
              </div>
              <blockquote className="mb-6 flex-1 italic text-muted-foreground">
                "Rosé & Relax helped us relocate to Nashville with ease. Their knowledge of the area was invaluable as
                they helped us find the perfect neighborhood, recommended service providers, and handled countless
                details during our transition. Six months later, we're still using their monthly resident services
                package."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Robert & Emma Chen"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Robert & Emma Chen</h3>
                  <p className="text-sm text-muted-foreground">New Residents</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border border-rose-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-rose-400 text-rose-400" />
                  ))}
              </div>
              <blockquote className="mb-6 flex-1 italic text-muted-foreground">
                "I hired Rosé & Relax to plan my mother's 70th birthday celebration in Nashville. From venue selection
                to coordinating with vendors, they handled everything with professionalism and creativity. The event was
                perfect down to the smallest details, and my mother was absolutely thrilled."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Thomas Greene"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Thomas Greene</h3>
                  <p className="text-sm text-muted-foreground">Event Planning Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rose-50 py-12 md:py-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
              Join Our Clients
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience the Rosé & Relax Difference
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to elevate your Nashville experience with our premium concierge services? Whether you're planning a
              visit or looking for ongoing support as a resident, we're here to make your life more luxurious and
              stress-free.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-rose-500 text-white hover:bg-rose-600">
                <Link href="/booking">Book a Consultation</Link>
              </Button>
              <Button variant="outline" className="border-rose-200 text-rose-900 hover:bg-rose-50 hover:text-rose-900">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
            <img
              alt="Happy clients enjoying Nashville"
              className="aspect-video object-cover"
              height="310"
              src="/placeholder.svg?height=620&width=1100"
              width="550"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

