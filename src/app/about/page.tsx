import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-light tracking-wider text-center mb-12">WHO WE ARE</h1>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <p className="mb-4">
                BB Beauty and Slimming was founded with a simple mission: to help our clients look and feel their best.
                Our team of experienced professionals is dedicated to providing exceptional beauty and slimming
                treatments in a relaxing and welcoming environment.
              </p>
              <p>
                We believe that self-care is essential for overall well-being, and we're committed to helping you
                achieve your beauty and body goals with personalized treatments and expert care.
              </p>
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="BB Beauty and Slimming Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl font-light text-center mb-8">Our Specialists</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((specialist) => (
              <div key={specialist} className="text-center">
                <div className="relative h-64 w-full mb-4">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Specialist${specialist}`}
                    alt={`Beauty Specialist ${specialist}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium">Jane Doe</h3>
                <p className="text-sm text-neutral-600">Senior Beauty Therapist</p>
              </div>
            ))}
          </div>

          <div className="bg-neutral-50 p-8">
            <h2 className="text-2xl font-light text-center mb-8">Our Approach</h2>
            <p className="mb-4">
              At BB Beauty and Slimming, we take a holistic approach to beauty and body treatments. We understand that
              each client is unique, with different needs and goals. That's why we offer personalized consultations to
              create customized treatment plans that address your specific concerns.
            </p>
            <p>
              We use only the highest quality products and the latest technologies to ensure effective results. Our
              commitment to excellence extends beyond our treatments to every aspect of your experience with us, from
              the moment you walk through our doors to the follow-up care we provide.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

