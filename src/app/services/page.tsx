import Header2 from "@/components/headerStatic";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    name: "Facial Treatments",
    description:
      "Customized facial treatments to rejuvenate and nourish your skin",
    duration: "60-90 min",
    price: "from $89",
  },
  {
    id: 2,
    name: "Body Slimming",
    description: "Advanced slimming treatments for targeted fat reduction",
    duration: "45-60 min",
    price: "from $120",
  },
  {
    id: 3,
    name: "Massage Therapy",
    description: "Relaxing and therapeutic massage treatments",
    duration: "60-90 min",
    price: "from $99",
  },
  {
    id: 4,
    name: "Beauty Treatments",
    description:
      "Complete beauty services including manicure, pedicure, and waxing",
    duration: "30-60 min",
    price: "from $45",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <Header2 />
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-8 text-center">
          OUR SERVICES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 border border-neutral-100 hover:border-neutral-200 transition-colors"
            >
              <h3 className="text-xl font-light tracking-wider mb-4">
                {service.name}
              </h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>{service.duration}</span>
                <span>{service.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center mb-12">
          <Button
            variant="outline"
            className="rounded-none border-neutral-700 hover:bg-neutral-700 hover:text-white transition-all duration-300 px-8 py-6"
          >
            BOOK AN APPOINTMENT
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
