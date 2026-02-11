'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Academy', href: '#academy' },
  { label: 'Shop', href: '#shop' },
  { label: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            {/* Logo mark */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-fraunces text-lg italic transition-colors ${
                scrolled ? 'bg-cocoa' : 'bg-white/15 backdrop-blur-sm'
              }`}
            >
              L
            </div>
            <div className="flex flex-col">
              <span
                className={`font-fraunces text-lg tracking-[0.2em] font-light transition-colors leading-tight ${
                  scrolled ? 'text-cocoa' : 'text-white'
                }`}
              >
                LUSH
              </span>
              <span
                className={`font-inter text-[9px] tracking-[0.3em] transition-colors ${
                  scrolled ? 'text-cocoa/50' : 'text-white/50'
                }`}
              >
                BY WAMBO
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-inter text-sm tracking-[0.1em] transition-colors hover:opacity-100 ${
                  scrolled ? 'text-cocoa/60 hover:text-cocoa' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <a
              href="https://wa.me/254701347075?text=Hi%20Lush%20by%20Wambo!%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className={`font-inter text-sm tracking-[0.1em] px-7 py-2.5 rounded-full transition-all ${
                scrolled
                  ? 'bg-forest text-white hover:bg-forest/90'
                  : 'bg-white/15 text-white backdrop-blur-sm hover:bg-white/25'
              }`}
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? 'text-cocoa' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-24 px-8">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-fraunces text-cocoa text-3xl tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/254701347075?text=Hi%20Lush%20by%20Wambo!%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="font-inter text-sm tracking-[0.2em] bg-forest text-white px-8 py-4 rounded-full text-center mt-4 w-fit"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </>
  )
}
