'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full bg-cocoa overflow-hidden">
      {/* Subtle ambient glow behind image */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-terracotta/[0.04] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full pt-28 pb-16 md:pt-32 md:pb-20">
          {/* Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="hidden md:block w-10 h-px bg-terracotta/60 mb-8" />

            <h1 className="font-fraunces text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light italic leading-[1.05] mb-6">
              Lush
              <br />
              <span className="text-terracotta">by</span> Wambo
            </h1>

            <p className="font-inter text-white/40 text-xs sm:text-sm tracking-[0.25em] uppercase mb-10">
              Premium beauty house calls in Nairobi
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#services"
                className="font-inter text-sm tracking-[0.15em] bg-terracotta text-white px-10 py-4 rounded-full hover:bg-terracotta/90 transition-colors"
              >
                EXPLORE
              </a>
              <a
                href="https://wa.me/254701347075?text=Hi%20Lush%20by%20Wambo!%20I'd%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm tracking-[0.15em] text-white/70 px-10 py-4 rounded-full hover:bg-white/10 transition-colors border border-white/15"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Offset decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border border-terracotta/20" />

              <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="https://i.pinimg.com/736x/77/0c/23/770c23e1f567020e3598320275addb6d.jpg"
                  alt="Lush by Wambo - Luxury Beauty"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 420px"
                  quality={85}
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
