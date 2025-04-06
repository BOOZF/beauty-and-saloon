"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between relative">
      <button
        className="text-neutral-700 hover:text-neutral-900 transition-colors"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6" />
          <span className="hidden md:inline text-sm uppercase tracking-wider">MENU</span>
        </div>
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="flex flex-col items-center">
          <div className="relative h-16 w-40">
            <div className="text-center">
              <div className="text-3xl font-light tracking-widest">BB</div>
              <div className="text-xs tracking-wider text-neutral-600">
                <span className="px-1">beauty</span>|<span className="px-1">slimming</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Button variant="outline" className="rounded-none border-neutral-300 hover:bg-neutral-100">
        BOOK NOW
      </Button>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  )
}

