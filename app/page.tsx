import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { AboutVideo } from "@/components/about-video"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { Accessories } from "@/components/accessories"
import { MaterialsSection } from "@/components/materials-section"
import { PriceCalculator } from "@/components/price-calculator"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <AboutVideo />
      <HowItWorks />
      <Benefits />
      <Accessories />
      <MaterialsSection />
      <PriceCalculator />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  )
}
