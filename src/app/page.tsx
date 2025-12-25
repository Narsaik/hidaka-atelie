"use client";

import dynamic from "next/dynamic";
import BrandStatement from "@/components/sections/BrandStatement";
import TrustBadges from "@/components/sections/TrustBadges";
import ServiceHighlight from "@/components/sections/ServiceHighlight";
import ProcessPreview from "@/components/sections/ProcessPreview";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import { RevealOnScroll } from "@/components/animations/ParallaxSection";

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
      {/* Immersive 3D Hero */}
      <HeroImmersive />

      {/* Dress Drawing Animation Section */}
      <DressDrawing />

      {/* Brand Statement with reveal */}
      <RevealOnScroll direction="up">
        <BrandStatement />
      </RevealOnScroll>

      {/* Trust Badges */}
      <RevealOnScroll direction="up" delay={0.1}>
        <TrustBadges />
      </RevealOnScroll>

      {/* Service Highlight */}
      <RevealOnScroll direction="left">
        <ServiceHighlight />
      </RevealOnScroll>

      {/* Process Preview */}
      <RevealOnScroll direction="up">
        <ProcessPreview />
      </RevealOnScroll>

      {/* Testimonials */}
      <RevealOnScroll direction="right">
        <Testimonials />
      </RevealOnScroll>

      {/* Final CTA */}
      <RevealOnScroll direction="up">
        <FinalCTA />
      </RevealOnScroll>
    </>
  );
}
