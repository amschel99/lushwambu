'use client'

import Image from 'next/image'

export default function AcademySection() {
  return (
    <section id="academy" className="bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="https://i.pinimg.com/736x/3b/5f/26/3b5f2695177993760062b4da21b6213d.jpg"
              alt="Makeup Academy - Professional Training"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={70}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="font-inter text-terracotta text-xs tracking-[0.3em] mb-2">
              LEARN THE CRAFT
            </p>
            <h2 className="font-fraunces text-cocoa text-3xl md:text-4xl lg:text-5xl font-light italic leading-tight mb-6">
              The Academy
            </h2>
            <p className="font-inter text-cocoa/60 text-sm md:text-base leading-relaxed mb-4 max-w-md">
              Master the art of beauty with Wambo. From beginner to pro, our hands-on sessions cover everything from bridal glam to editorial looks.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <span className="font-inter text-cocoa/70 text-base">1-on-1 Private Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <span className="font-inter text-cocoa/70 text-base">Group Masterclasses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <span className="font-inter text-cocoa/70 text-base">Certificate on Completion</span>
              </div>
            </div>
            <a
              href="https://wa.me/254701347075?text=Hi%20Lush%20by%20Wambo!%20I'd%20like%20to%20apply%20to%20the%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-inter text-sm tracking-[0.15em] bg-forest text-white px-10 py-4 rounded-full hover:bg-forest/90 transition-colors"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
