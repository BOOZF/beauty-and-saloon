"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import BookingSection from "@/components/booking-section";
import PolicySection from "@/components/policy-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BookingSection />
      <PolicySection />
      <Footer />
    </main>
  );
}
