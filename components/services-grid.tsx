'use client'

import Image from 'next/image'

interface ServiceItem {
  id: string
  title: string
  image: string
}

const services: ServiceItem[] = [
  {
    id: 'nails',
    title: 'Nails',
    image: 'https://i.pinimg.com/736x/ad/73/8d/ad738d4b6f1b7e1135ec41f287781347.jpg',
  },
  {
    id: 'lashes',
    title: 'Lash Extensions',
    image: 'https://i.pinimg.com/736x/32/b7/43/32b7434f9f7b92464e07427d326b1c4f.jpg',
  },
  {
    id: 'wigs',
    title: 'Wig Install',
    image: 'https://i.pinimg.com/736x/fd/8b/e7/fd8be747195b034f06ff7ea96d635ec4.jpg',
  },
  {
    id: 'makeup',
    title: 'Makeup Glams',
    image: 'https://i.pinimg.com/736x/4f/0f/3a/4f0f3a38dffdb9779de4e640e8ebd9ef.jpg',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <p className="font-inter text-terracotta text-xs tracking-[0.3em] mb-2">
            WHAT WE DO
          </p>
          <h2 className="font-fraunces text-cocoa text-3xl md:text-4xl font-light italic">
            Our Services
          </h2>
        </div>
        <a
          href="https://wa.me/254701347075?text=Hi%20Lush%20by%20Wambo!%20I'd%20like%20to%20book%20a%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block font-inter text-sm tracking-[0.15em] text-cocoa/50 hover:text-terracotta transition-colors"
        >
          BOOK A SERVICE &rarr;
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {services.map((service) => (
          <a
            key={service.id}
            href={`https://wa.me/254701347075?text=${encodeURIComponent(`Hi Lush by Wambo! I'd like to book ${service.title}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={70}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <h3 className="font-fraunces text-cocoa text-lg md:text-xl text-center group-hover:text-terracotta transition-colors">
              {service.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}
