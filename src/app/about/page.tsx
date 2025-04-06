import Header2 from "@/components/headerStatic";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <Header2 />
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-8 text-center">
          WHO WE ARE
        </h1>
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="space-y-6 text-center mb-12">
            <p className="text-neutral-700 leading-relaxed">
              At BB Beauty and Slimming, we are passionate about helping you
              discover your most radiant self through holistic, innovative, and
              personalized facial and wellness treatments. Founded by Dee Bee
              Bee, a dedicated professional with nearly 25 years of experience
              in the beauty and facial industry, our establishment is the result
              of decades of passion, expertise, and a heartfelt mission to bring
              out the natural beauty in every individual.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              From the very beginning, Dee Bee Bee has set the standard for
              excellence, continuously evolving with the latest advancements in
              skin science and facial therapy techniques. Her unwavering
              commitment to client care and results has made BB Beauty and
              Slimming a trusted name in the industry.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Our team of experienced professionals shares the same dedication
              to personalized care and exceptional service. By using
              state-of-the-art equipment, premium skincare products, and
              advanced techniques, we ensure that every treatment delivers
              visible and lasting results.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              At BB Beauty and Slimming, we believe that beauty is not just skin
              deep. We strive to create a tranquil and welcoming environment
              where you can escape from daily stress and focus on your
              well-being. Whether you are here for a quick refresh or a complete
              transformation, every session is tailored to your unique skin
              type, concerns, and goals.
            </p>
          </div>
          <div className="relative size-80 mb-10">
            <div className="absolute inset-0 bg-neutral-100 -rotate-2 transform" />
            <div className="absolute inset-0 rotate-2 transform overflow-hidden bg-white mt-10">
              <img
                src="/profile/bb.jpg"
                alt="BB Beauty and Slimming Interior"
                className="w-full h-full object-cover p-4"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
