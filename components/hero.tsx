import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full relative">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
          src="/placeholder.svg?height=700&width=1400"
          alt="BB Beauty and Slimming Salon Interior"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  )
}

