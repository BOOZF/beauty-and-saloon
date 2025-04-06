import Header2 from "@/components/headerStatic";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";

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
                    <p className="font-light">5500, Jalan Bakar Sampah</p>
                    <p className="font-light">
                      71000, Port Dickson Negeri Sembilan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-neutral-400" />
                  <div>
                    <p className="font-light">
                      3C, Eco Grandeur, No 23-1, Persiaran Eco Grandeur 1
                    </p>
                    <p className="font-light">42300 Puncak Alam, Selangor</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-neutral-400" />
                  <p className="font-light">+6014-3994349</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-neutral-400" />
                  <p className="font-light">deebeebee2009@gmail.com</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1 text-neutral-400" />
                  <div>
                    <p className="font-light">Tue - Sat: 10:00 - 17:00</p>
                    <p className="font-light">Sun : 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center justify-center bg-white p-8 border border-neutral-100">
            <h2 className="text-2xl font-light tracking-wider mb-8">
              Navigate to Puncak Alam Branch
            </h2>
            <div className="space-y-6 w-full max-w-md">
              <a
                href="https://waze.com/ul/hw284kdzg5"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="group relative w-full bg-[#7DA0CA] hover:border-white text-white py-4 px-6 rounded-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7DA0CA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Navigation className="w-6 h-6" />
                    <span className="text-lg font-light tracking-wider">
                      Navigate with Waze
                    </span>
                  </div>
                </button>
              </a>
            </div>
            <h2 className="text-2xl font-light tracking-wider mb-8 mt-10">
              Navigate to Port Dickson Branch
            </h2>
            <div className="space-y-6 w-full max-w-md">
              <a
                href="https://waze.com/ul/hw22qkxgq7 "
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="group relative w-full bg-[#7DA0CA] hover:border-white text-white py-4 px-6 rounded-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7DA0CA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Navigation className="w-6 h-6" />
                    <span className="text-lg font-light tracking-wider">
                      Navigate with Waze
                    </span>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
