import Header2 from "@/components/headerStatic";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <Header2 />
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-8 text-center">
          WHERE WE ARE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 border border-neutral-100">
              <h2 className="text-2xl font-light tracking-wider mb-6">
                Contact Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-neutral-400" />
                  <div>
                    <p className="font-light">123 Beauty Street</p>
                    <p className="font-light">Singapore 123456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-neutral-400" />
                  <p className="font-light">+65 1234 5678</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-neutral-400" />
                  <p className="font-light">hello@bbbeauty.com</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1 text-neutral-400" />
                  <div>
                    <p className="font-light">Mon - Fri: 10:00 - 20:00</p>
                    <p className="font-light">Sat - Sun: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-neutral-100">
              <h2 className="text-2xl font-light tracking-wider mb-6">
                Getting Here
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">By MRT</h3>
                  <p className="text-neutral-600">
                    5 minutes walk from Beauty MRT Station (Exit A)
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">By Bus</h3>
                  <p className="text-neutral-600">
                    Bus services: 123, 456, 789
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">By Car</h3>
                  <p className="text-neutral-600">
                    Parking available at Beauty Mall
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] bg-neutral-100">
            {/* Replace this div with your actual map component */}
            <div className="w-full h-full flex items-center justify-center text-neutral-400">
              Map Component Here
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
