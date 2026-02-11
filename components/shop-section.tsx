'use client'

import Image from 'next/image'

const PHONE = '254701347075'

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Velvet Foundation',
    category: 'FACE',
    price: 'KSh 2,500',
    image: 'https://i.pinimg.com/736x/02/7f/e4/027fe4c80a32b9960bea23ddbdf50aa3.jpg',
  },
  {
    id: 2,
    name: 'Flawless Concealer',
    category: 'FACE',
    price: 'KSh 1,500',
    image: 'https://i.pinimg.com/736x/a5/2d/44/a52d449bddbff1264b1e4bf1001ad02e.jpg',
  },
  {
    id: 3,
    name: 'Luxe Lipstick',
    category: 'LIPS',
    price: 'KSh 2,500',
    image: 'https://i.pinimg.com/736x/e4/4a/4a/e44a4a642a9e9cf3e17474b071d14d64.jpg',
  },
]

function whatsappUrl(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}

export default function ShopSection() {
  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <p className="font-inter text-terracotta text-xs tracking-[0.3em] mb-2">
            BEAUTY ESSENTIALS
          </p>
          <h2 className="font-fraunces text-cocoa text-3xl md:text-4xl font-light italic">
            The Shop
          </h2>
        </div>
        <a
          href={whatsappUrl("Hi Lush by Wambo! I'd like to browse your products.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block font-inter text-sm tracking-[0.15em] text-cocoa/50 hover:text-terracotta transition-colors"
        >
          VIEW ALL &rarr;
        </a>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-sand">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                quality={70}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Category pill */}
              <div className="absolute top-4 left-4">
                <span className="font-inter text-xs tracking-[0.2em] bg-white/90 backdrop-blur-sm text-cocoa px-4 py-1.5 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-fraunces text-cocoa text-lg md:text-xl group-hover:text-terracotta transition-colors">
                  {product.name}
                </h3>
                <p className="font-inter text-cocoa/50 text-base mt-0.5">
                  {product.price}
                </p>
              </div>
              <a
                href={whatsappUrl(`Hi Lush by Wambo! I'd like to order ${product.name} (${product.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-xs tracking-[0.1em] bg-cocoa text-white px-5 py-2.5 rounded-full hover:bg-terracotta transition-colors mt-1"
              >
                ORDER
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
