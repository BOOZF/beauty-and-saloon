"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export default function Header1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 py-4 px-4 md:px-6 flex items-center justify-between">
      <button
        className="text-white hover:text-neutral-200 transition-colors"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6" />
          <span className="hidden md:inline text-sm uppercase tracking-wider">
            MENU
          </span>
        </div>
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 pt-5">
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

      <Button
        variant="outline"
        className="text-white border-white bg-transparent hover:bg-white/10 transition-all duration-300"
      >
        BOOK NOW
      </Button>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
