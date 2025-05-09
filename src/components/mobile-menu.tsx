"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import BookingCatalog from "./booking-catalog";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 300); // Match the animation duration
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 ${
          isClosing ? "animate-fade-out" : "animate-fade-in"
        }`}
        onClick={handleClose}
      />

      {/* Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-[270px] bg-[#e8dfd3] z-50 ${
          isClosing ? "animate-slide-out" : "animate-slide-in"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-end">
            <button onClick={handleClose} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-4 flex flex-col items-center">
            <h2 className="text-xl font-light tracking-widest mb-6">
              {t.menu}
            </h2>

            <nav className="flex flex-col items-center space-y-4 text-center">
              <Link
                href="/"
                className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider text-sm"
              >
                {t.home}
              </Link>
              <Link
                href="/about"
                className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider text-sm"
              >
                {t.whoWeAre}
              </Link>
              <Link
                href="/services"
                className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider text-sm"
              >
                {t.whatWeDo}
              </Link>
              <Link
                href="/location"
                className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider text-sm"
              >
                {t.whereWeAre}
              </Link>
              <Link
                href="/product"
                className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider text-sm"
              >
                {t.shopProducts}
              </Link>
            </nav>

            <div className="mt-auto pt-6">
              <Button
                variant="outline"
                className="group relative w-full bg-transparent border-2 border-neutral-700 hover:bg-neutral-700 hover:text-white transition-all duration-300 overflow-hidden"
                onClick={() => setIsBookingOpen(true)}
              >
                <span className="relative z-10 text-sm font-light tracking-widest">
                  {t.bookNow}
                </span>
                <div className="absolute inset-0 bg-neutral-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookingCatalog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
