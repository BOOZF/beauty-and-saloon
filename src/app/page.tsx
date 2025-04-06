"use client";

import Image from "next/image";
import Header1 from "@/components/headerTransparent";
import Hero from "@/components/hero";
import BookingSection from "@/components/booking-section";
import PolicySection from "@/components/policy-section";
import Footer from "@/components/footer";

export default function Home() {
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
