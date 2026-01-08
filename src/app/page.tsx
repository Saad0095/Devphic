import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("../components/Navigation"));
const Hero = dynamic(() => import("../components/Hero"));
const TrustStrip = dynamic(() => import("../components/TrustStrip"));
const Services = dynamic(() => import("../components/Services"));
const WhyDevphic = dynamic(() => import("../components/WhyDevphic"));
const Process = dynamic(() => import("../components/Process"));
const FeaturedProjects = dynamic(() => import("../components/FeaturedProjects"));
const CTASection = dynamic(() => import("../components/CTASection"));
const Contact = dynamic(() => import("../components/Contact"));
const Footer = dynamic(() => import("../components/Footer"));

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
  );
}
