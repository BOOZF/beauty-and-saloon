"use client";

import Image from "next/image";
import Header1 from "@/components/headerTransparent";
import Hero from "@/components/hero";
import BookingSection from "@/components/booking-section";
import { PolicySection } from "@/components/policy-section";
import Footer from "@/components/footer";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen">
      <Header1 />
      <Hero />
      <BookingSection />
      <PolicySection />
      <Footer />
    </main>
  );
}
