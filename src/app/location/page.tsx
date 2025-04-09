"use client";

import Header2 from "@/components/headerStatic";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function LocationPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <Header2 />
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-8 text-center">
          {t.locationTitle}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 border border-neutral-100">
              <h2 className="text-2xl font-light tracking-wider mb-6">
                {t.contactUs}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-neutral-400" />
                  <div>
                    <p className="font-light">{t.address1}</p>
                    <p className="font-light">{t.address2}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-neutral-400" />
                  <div>
                    <p className="font-light">{t.address3}</p>
                    <p className="font-light">{t.address4}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-neutral-400" />
                  <p className="font-light">{t.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-neutral-400" />
                  <p className="font-light">{t.email}</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1 text-neutral-400" />
                  <div>
                    <p className="font-light">{t.hours}</p>
                    <p className="font-light">{t.hours2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center justify-center bg-white p-8 border border-neutral-100">
            <h2 className="text-2xl font-light tracking-wider mb-8">
              {t.navigateToPuncakAlam}
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
                      {t.navigateWithWaze}
                    </span>
                  </div>
                </button>
              </a>
            </div>
            <h2 className="text-2xl font-light tracking-wider mb-8 mt-10">
              {t.navigateToPortDickson}
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
                      {t.navigateWithWaze}
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
