"use client";

import Header2 from "@/components/headerStatic";
import Footer from "@/components/footer";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <Header2 />
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-8 text-center">
          {t.aboutTitle}
        </h1>
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="space-y-6 text-center mb-12">
            <p className="text-neutral-700 leading-relaxed">
              {t.aboutParagraph1}
            </p>
            <p className="text-neutral-700 leading-relaxed">
              {t.aboutParagraph2}
            </p>
            <p className="text-neutral-700 leading-relaxed">
              {t.aboutParagraph3}
            </p>
            <p className="text-neutral-700 leading-relaxed">
              {t.aboutParagraph4}
            </p>
          </div>
          <div className="relative size-80 mb-10">
            <div className="absolute inset-0 bg-neutral-100 -rotate-2 transform" />
            <div className="absolute inset-0 rotate-2 transform overflow-hidden bg-white mt-10">
              <img
                src="/profile/bb.jpg"
                alt="BB Beauty and Slimming Interior"
                className="w-full h-full object-cover p-4"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
