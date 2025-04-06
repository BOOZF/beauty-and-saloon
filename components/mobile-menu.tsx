"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-[#e8dfd3] overflow-y-auto">
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-end">
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-2xl font-light tracking-widest mb-10">MENU</h2>

          <nav className="flex flex-col items-center space-y-6 text-center">
            <Link href="/" className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
              HOME
            </Link>
            <Link href="/about" className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
              WHO WE ARE
            </Link>
            <Link href="/services" className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
              WHAT WE DO
            </Link>
            <Link href="/location" className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
              WHERE WE ARE
            </Link>
            <Link href="/products" className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
              TAKE IT HOME
            </Link>
            <Link href="/gift-cards" className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
              GIVE IT FORWARD
            </Link>
            <Link href="/shop" className="py-2 text-neutral-700 hover:text-neutral-900 uppercase tracking-wider">
              SHOP PRODUCTS
            </Link>
          </nav>

          <div className="mt-auto pt-10">
            <Button variant="outline" className="rounded-none border-neutral-700 hover:bg-neutral-200">
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

