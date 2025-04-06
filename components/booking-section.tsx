import { Button } from "@/components/ui/button"

export default function BookingSection() {
  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-light tracking-wider mb-8">BOOK NOW</h2>
        <div className="w-full max-w-xs mx-auto h-px bg-neutral-300 mb-8"></div>

        <p className="text-neutral-700 mb-8">
          All prices listed are starting prices. Price may vary depending on the length, density and health of the skin.
        </p>

        <Button className="rounded-none bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-100 px-8 py-6 h-auto">
          BOOK YOUR APPOINTMENT
        </Button>
      </div>
    </section>
  )
}

