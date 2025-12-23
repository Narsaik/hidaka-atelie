import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import ServiceHighlight from "@/components/sections/ServiceHighlight";
import ProcessPreview from "@/components/sections/ProcessPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ServiceHighlight />
      <ProcessPreview />
      <FinalCTA />
    </>
  );
}
