"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import BookingCatalog from "./booking-catalog";

export default function BookingSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-light tracking-wider mb-8">{t.bookNow}</h2>
        <div className="w-full max-w-xs mx-auto h-px bg-neutral-300 mb-8"></div>

        <p className="text-neutral-700 mb-8">{t.pricingNote}</p>

        <Button
          className="rounded-none bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-100 px-8 py-6 h-auto"
          onClick={() => setIsBookingOpen(true)}
        >
          {t.bookAnAppointment}
        </Button>
      </div>

      <BookingCatalog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
}
