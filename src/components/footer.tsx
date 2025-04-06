import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#e8dfd3] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-medium mb-4">CONTACT US</h3>
          <address className="not-italic">
            <p>123 Beauty Street</p>
            <p>City, State 12345</p>
            <p className="mt-4">Phone: (123) 456-7890</p>
            <p>Email: info@bbbeauty.com</p>
          </address>
        </div>

        <div>
          <h3 className="font-medium mb-4">HOURS</h3>
          <p>Monday - Friday: 9am - 8pm</p>
          <p>Saturday: 9am - 6pm</p>
          <p>Sunday: 10am - 5pm</p>
        </div>

        <div>
          <h3 className="font-medium mb-4">FOLLOW US</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-neutral-700 hover:text-neutral-900">
              Instagram
            </Link>
            <Link href="#" className="text-neutral-700 hover:text-neutral-900">
              Facebook
            </Link>
            <Link href="#" className="text-neutral-700 hover:text-neutral-900">
              Twitter
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} BB Beauty and Slimming. All rights reserved.</p>
      </div>
    </footer>
  )
}

