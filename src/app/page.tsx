import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import TrustBadges from "@/components/sections/TrustBadges";
import ServiceHighlight from "@/components/sections/ServiceHighlight";
import ProcessPreview from "@/components/sections/ProcessPreview";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <TrustBadges />
      <ServiceHighlight />
      <ProcessPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
