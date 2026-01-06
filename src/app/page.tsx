import Contact from "../components/Contact";
import CTASection from "../components/CTASection";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Process from "../components/Process";
import Services from "../components/Services";
import TrustStrip from "../components/TrustStrip";
import WhyDevphic from "../components/WhyDevphic";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyDevphic />
      <Process />
      <FeaturedProjects />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}