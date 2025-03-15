import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">Rose & Relax</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-800 hover:text-red-600">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-red-600">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-red-600">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-red-600">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-red-600">
              Cart
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-red-600">
              Login
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-red-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Ultimate Relaxation Destination
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience premium relaxation services tailored just for you. Discover peace and tranquility with Rose & Relax.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/services" className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Explore Services
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-red-600 font-medium py-3 px-6 rounded-lg border border-red-200 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Experience</h3>
                <p className="text-gray-600">Enjoy top-tier services with our experienced professionals.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Natural Products</h3>
                <p className="text-gray-600">We use only natural, organic products for all our services.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl">🛎️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                <p className="text-gray-600">Each service is tailored to meet your specific needs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rose & Relax</h3>
              <p className="text-gray-400">Your ultimate relaxation destination with premium services.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white">Massage Therapy</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Facial Treatments</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Body Scrubs</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Aromatherapy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                123 Relaxation Street<br />
                Nashville, TN 37203<br />
                <a href="tel:+16155551234" className="hover:text-white">615-555-1234</a><br />
                <a href="mailto:info@roseandrelax.com" className="hover:text-white">info@roseandrelax.com</a>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Rose & Relax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

