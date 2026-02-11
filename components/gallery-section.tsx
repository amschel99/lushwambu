'use client'

import Image from 'next/image'

const images = [
  { src: 'https://i.pinimg.com/736x/de/34/19/de3419687a8348b83ebf9de0804b4623.jpg', alt: 'Nail art' },
  { src: 'https://i.pinimg.com/736x/df/cc/ce/dfccce0b733bba7843461612ea03ed4c.jpg', alt: 'Lash work' },
  { src: 'https://i.pinimg.com/736x/8c/5c/fd/8c5cfd605faa9f4135e7606d4f052f9c.jpg', alt: 'Wig styling' },
  { src: 'https://i.pinimg.com/736x/d3/32/29/d332296cfde037258873ecbb10a02787.jpg', alt: 'Nail detail' },
  { src: 'https://i.pinimg.com/736x/02/f5/a3/02f5a39bb56e081f258247b12b855dc8.jpg', alt: 'Beauty work' },
  { src: 'https://i.pinimg.com/736x/4f/0f/3a/4f0f3a38dffdb9779de4e640e8ebd9ef.jpg', alt: 'Glam look' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-sand py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-inter text-terracotta text-[11px] tracking-[0.3em] mb-2">
            @LUSHBYWAMBO
          </p>
          <h2 className="font-fraunces text-cocoa text-3xl md:text-4xl font-light italic">
            Follow Along
          </h2>
        </div>

        {/* Tight 3x2 Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/lushbywambo"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="33vw"
                quality={60}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
