"use client";

import dynamic from "next/dynamic";
import BrandStatement from "@/components/sections/BrandStatement";
import TrustBadges from "@/components/sections/TrustBadges";
import ServiceHighlight from "@/components/sections/ServiceHighlight";
import ProcessPreview from "@/components/sections/ProcessPreview";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

// Dynamic imports for heavy 3D components
const HeroImmersive = dynamic(() => import("@/components/sections/HeroImmersive"), {
  ssr: false,
});

const DressDrawing = dynamic(() => import("@/components/animations/DressDrawing"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Immersive 3D Hero with Needle Animation */}
      <HeroImmersive />

      {/* Dress Drawing Animation Section */}
      <DressDrawing />

      {/* Brand Statement */}
      <BrandStatement />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Service Highlight */}
      <ServiceHighlight />

      {/* Process Preview */}
      <ProcessPreview />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
