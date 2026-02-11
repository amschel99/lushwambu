import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ServicesGrid from '@/components/services-grid'
import AcademySection from '@/components/academy-section'
import ShopSection from '@/components/shop-section'
import GallerySection from '@/components/gallery-section'
import Footer from '@/components/footer'
import WhatsAppFloat from '@/components/whatsapp-float'

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <AcademySection />
      <ShopSection />
      <GallerySection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
