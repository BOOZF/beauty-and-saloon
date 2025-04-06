import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e8dfd3] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-medium mb-4">CONTACT US</h3>
          <div className="space-y-6">
            <address className="not-italic">
              <p>5500, Jalan Bakar Sampah</p>
              <p>71000, Port Dickson Negeri Sembilan</p>
            </address>

            <address className="not-italic pt-4 border-t border-neutral-300">
              <p>NO. 37-A, 3, Jalan Deluxe</p>
              <p>43800 Sepang Selangor</p>
            </address>

            <div className="pt-4">
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@bbbeauty.com</p>
            </div>
          </div>
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
        <p>
          © {new Date().getFullYear()} BB Beauty and Slimming. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
