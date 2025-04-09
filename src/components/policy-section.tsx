"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function PolicySection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.salonPolicy}</h2>
            <p className="text-gray-600">{t.salonPolicyText}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.refundPolicy}</h2>
            <p className="text-gray-600 mb-4">{t.refundPolicyText1}</p>
            <p className="text-gray-600">{t.refundPolicyText2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
