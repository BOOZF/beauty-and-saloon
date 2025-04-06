import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] animate-fade-in-up">
        <Image
          src="/profile/bigBanner.jpg"
          alt="BB Beauty and Slimming Salon Interior"
          fill
          priority
          className="object-cover animate-fade-in"
        />
      </div>
    </section>
  );
}
