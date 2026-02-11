'use client'

import { MessageCircle, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-cocoa text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-fraunces text-2xl tracking-[0.2em] font-light mb-2">
              LUSH
            </h3>
            <p className="font-inter text-[10px] tracking-[0.3em] text-white/40 mb-4">
              BY WAMBO
            </p>
            <p className="font-inter text-white/50 text-base leading-relaxed max-w-xs">
              Premium beauty house calls in Nairobi. Bringing luxury to your doorstep since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-inter text-xs tracking-[0.2em] text-white/40 mb-4">
              QUICK LINKS
            </p>
            <div className="flex flex-col gap-3">
              <a href="#services" className="font-inter text-base text-white/70 hover:text-terracotta transition-colors">Services</a>
              <a href="#academy" className="font-inter text-base text-white/70 hover:text-terracotta transition-colors">Academy</a>
              <a href="#shop" className="font-inter text-base text-white/70 hover:text-terracotta transition-colors">Shop</a>
              <a href="#gallery" className="font-inter text-base text-white/70 hover:text-terracotta transition-colors">Gallery</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-inter text-xs tracking-[0.2em] text-white/40 mb-4">
              GET IN TOUCH
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/254701347075?text=Hi%20Lush%20by%20Wambo!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-inter text-base text-white/70 hover:text-terracotta transition-colors">
                <MessageCircle size={18} strokeWidth={1.5} />
                WhatsApp
              </a>
              <a href="https://www.instagram.com/lushb.wambo?igsh=ajZ2dHNzbTR1eGVs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-inter text-base text-white/70 hover:text-terracotta transition-colors">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@glambybobo1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-inter text-base text-white/70 hover:text-terracotta transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.27 8.27 0 0 0 4.76 1.5V6.77a4.83 4.83 0 0 1-1-.08Z" />
                </svg>
                TikTok
              </a>
              <a href="https://www.facebook.com/share/1JcsbggQqW/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-inter text-base text-white/70 hover:text-terracotta transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
                </svg>
                Facebook
              </a>
              <a href="tel:+254701347075" className="flex items-center gap-3 font-inter text-base text-white/70 hover:text-terracotta transition-colors">
                <Phone size={18} strokeWidth={1.5} />
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs tracking-[0.15em] text-white/30">
            NAIROBI | HOUSE CALLS AVAILABLE
          </p>
          <p className="font-inter text-xs text-white/20">
            &copy; 2024 Lush by Wambo
          </p>
        </div>
      </div>
    </footer>
  )
}
