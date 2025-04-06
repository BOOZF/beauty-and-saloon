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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-neutral-700 leading-relaxed">
              At BB Beauty and Slimming, we believe in enhancing your natural
              beauty through holistic and innovative treatments. Our journey
              began with a simple vision: to create a sanctuary where beauty,
              wellness, and relaxation converge.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Our team of experienced professionals is dedicated to providing
              personalized care and exceptional service. We continuously update
              our techniques and use state-of-the-art equipment to ensure the
              best results for our clients.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              We take pride in creating a warm, welcoming environment where you
              can escape the daily stresses and focus on your well-being. Every
              treatment is tailored to your unique needs and goals.
            </p>
          </div>
          <div className="relative h-[600px] w-full mb-10">
            <div className="absolute inset-0 bg-neutral-100 -rotate-2 transform" />
            <div className="absolute inset-0 rotate-2 transform overflow-hidden">
              <img
                src="/profile/bb.jpg"
                alt="BB Beauty and Slimming Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
