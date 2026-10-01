"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Instagram, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "HATBAR", href: "/#experiencia" },
  { label: "EVENTOS", href: "/#experiencia" },
  { label: "PAQUETES", href: "/#MaterialsSection" },
  { label: "GALERÍA", href: "/#galeria" },
  { label: "FAQ", href: "/#faq" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-32"
        }`}
      >
        <div className="backdrop-blur-md bg-[#171717]/80 rounded-full shadow-lg border border-white/[0.08]">
          <div className="flex justify-between items-center h-16 px-6 lg:px-8">
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/design-mode/Mohoveri%20Blanco.png" alt="Mohoveri Hatbar" width={80} height={80} />
            </Link>

            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-serif text-cream/90 hover:text-cream transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/#" className="text-cream/80 hover:text-cream transition-colors">
                <Heart size={18} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-cream/80 hover:text-cream transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="/contacto">
                <Button
                  size="sm"
                  className="bg-[#a77341] hover:bg-[#a77341]/90 text-cream font-serif text-xs px-6 rounded-full shadow-lg hover:shadow-[#a77341]/20 transition-all"
                >
                  Agendar llamada
                </Button>
              </Link>
            </div>

            <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-40 md:hidden">
          <div className="backdrop-blur-md bg-[#171717]/95 rounded-2xl shadow-xl border border-white/[0.08] p-6">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-serif text-cream/90 hover:text-cream transition-colors tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <Link href="/#" className="text-cream/80 hover:text-cream transition-colors">
                  <Heart size={18} />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="text-cream/80 hover:text-cream transition-colors">
                  <Instagram size={18} />
                </Link>
              </div>
              <Link href="/contacto">
                <Button
                  size="sm"
                  className="w-full bg-[#a77341] hover:bg-[#a77341]/90 text-cream font-serif text-sm rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Agendar llamada
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
