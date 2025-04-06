import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function LocationPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-light tracking-wider text-center mb-12">WHERE WE ARE</h1>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
            <div>
              <h2 className="text-xl font-medium mb-4">Visit Our Salon</h2>
              <address className="not-italic mb-6">
                <p>123 Beauty Street</p>
                <p>City, State 12345</p>
                <p className="mt-4">Phone: (123) 456-7890</p>
                <p>Email: info@bbbeauty.com</p>
              </address>

              <h3 className="font-medium mb-2">Hours</h3>
              <ul className="mb-6">
                <li>Monday - Friday: 9am - 8pm</li>
                <li>Saturday: 9am - 6pm</li>
                <li>Sunday: 10am - 5pm</li>
              </ul>

              <Button className="rounded-none bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-100">
                GET DIRECTIONS
              </Button>
            </div>

            <div className="bg-neutral-100 h-80 flex items-center justify-center">
              <p className="text-neutral-500">Map will be displayed here</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-light mb-6">Ready to experience BB Beauty and Slimming?</h2>
            <Button className="rounded-none bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-100 px-8 py-6 h-auto">
              BOOK YOUR APPOINTMENT
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

