import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductDemoSection } from "@/components/product-demo-section"
import { ServicesSection } from "@/components/services-section"
import { DashboardShowcaseSection } from "@/components/dashboard-showcase-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductDemoSection />
      <ServicesSection />
      <DashboardShowcaseSection />
      <TestimonialsSection />
      <FAQSection />      
      <Footer />
    </main>
  )
}
