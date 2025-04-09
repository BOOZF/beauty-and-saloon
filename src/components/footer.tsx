"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#e8dfd3] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-medium mb-4">CONTACT US</h3>
          <address className="not-italic">
            <span className="flex mb-5 flex-col">
              <p>{t.address1}</p>
              <p>{t.address2}</p>
            </span>
            <p>{t.address3}</p>
            <p>{t.address4}</p>
            <p className="mt-4">Phone: {t.phone}</p>
            <p>Email: {t.email}</p>
          </address>
        </div>

        <div>
          <h3 className="font-medium mb-4">HOURS</h3>
          <p>{t.hours}</p>
          <p>{t.hours2}</p>
          <p>Monday: Closing</p>
        </div>

        <div>
          <h3 className="font-medium mb-4">FOLLOW US</h3>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/share/15xGrWaofE/?mibextid=wwXIfr"
              className="text-neutral-700 hover:text-neutral-900"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-neutral-600">
        <p>{t.footerText}</p>
      </div>
    </footer>
  );
}
