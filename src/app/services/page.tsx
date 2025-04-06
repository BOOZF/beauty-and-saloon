import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-light tracking-wider text-center mb-12">OUR SERVICES</h1>

          <div className="grid gap-8">
            <ServiceCategory
              title="BEAUTY TREATMENTS"
              services={[
                { name: "Facial Treatment", price: "$80+", info: "Rejuvenating facial for all skin types" },
                { name: "Manicure", price: "$35+", info: "Classic manicure with polish" },
                { name: "Pedicure", price: "$45+", info: "Relaxing pedicure with polish" },
                { name: "Waxing", price: "$25+", info: "Various body areas available" },
                { name: "Lash Extensions", price: "$120+", info: "Full set of classic lashes" },
              ]}
            />

            <ServiceCategory
              title="SLIMMING TREATMENTS"
              services={[
                { name: "Body Contouring", price: "$150+", info: "Non-invasive fat reduction" },
                { name: "Cellulite Reduction", price: "$120+", info: "Targeted cellulite treatment" },
                { name: "Skin Tightening", price: "$130+", info: "Firming treatment for loose skin" },
                { name: "Detox Wrap", price: "$90+", info: "Full body detoxifying wrap" },
                { name: "Lymphatic Drainage", price: "$110+", info: "Manual lymphatic massage" },
              ]}
            />

            <ServiceCategory
              title="PACKAGES"
              services={[
                { name: "Relaxation Package", price: "$200+", info: "Facial, manicure, and pedicure" },
                { name: "Slimming Package", price: "$350+", info: "3 body contouring sessions" },
                { name: "Bridal Package", price: "$300+", info: "Complete beauty preparation for your special day" },
                { name: "Monthly Membership", price: "$180/month", info: "2 treatments of your choice each month" },
              ]}
            />
          </div>

          <div className="mt-12 text-center">
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

interface ServiceCategoryProps {
  title: string
  services: {
    name: string
    price: string
    info?: string
  }[]
}

function ServiceCategory({ title, services }: ServiceCategoryProps) {
  return (
    <div className="border-t pt-8">
      <h2 className="text-xl font-medium mb-6">{title}</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex justify-between items-start pb-4 border-b border-neutral-200">
            <div>
              <h3 className="font-medium">{service.name}</h3>
              {service.info && <p className="text-sm text-neutral-600 mt-1">{service.info}</p>}
            </div>
            <div className="text-right font-medium">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

