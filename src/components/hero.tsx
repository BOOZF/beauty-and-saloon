"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="w-full relative">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] animate-fade-in-up">
        <Image
          src="/profile/bigBanner.jpg"
          alt="BB Beauty and Slimming Interior"
          fill
          priority
          className="object-cover animate-fade-in"
        />
      </div>
    </section>
  );
}
