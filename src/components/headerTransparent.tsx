"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import BookingCatalog from "./booking-catalog";

export default function Header1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="w-full fixed top-0 left-0 z-50 py-4 px-4 md:px-6">
      <div className="grid grid-cols-3 items-center">
        {/* Left Column */}
        <div className="justify-self-start">
          <button
            className="text-white hover:text-neutral-200 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="flex items-center gap-2">
              <Menu className="h-6 w-6" />
              <span className="hidden md:inline text-sm uppercase tracking-wider">
                {t.menu}
              </span>
            </div>
          </button>
        </div>

        {/* Center Column */}
        <div className="justify-self-center mr-24 sm:mr-0">
          <Link href="/" className="flex flex-col items-center">
            <div className="relative h-48 w-60">
              <Image
                src="/profile/logo.svg"
                alt="BB Beauty and Slimming"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Right Column */}
        <div className="justify-self-end flex items-center gap-4">
          <LanguageToggle />
          <Button
            variant="outline"
            className="text-white border-white bg-transparent hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsBookingOpen(true)}
          >
            {t.bookNow}
          </Button>
        </div>
      </div>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      <BookingCatalog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </header>
  );
}
