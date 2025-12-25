"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { getWhatsAppLink } from "@/lib/constants";
import { Magnetic, AnimatedText } from "@/components/animations/ParallaxSection";

// Dynamic import for 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import("@/components/3d/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0" style={{ backgroundColor: "#fafafa" }} />
  ),
});

export default function HeroImmersive() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !overlayRef.current) return;

    // Initial animation timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Fade out loading overlay
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Animate content elements
    const elements = contentRef.current.querySelectorAll(".animate-in");
    tl.from(
      elements,
      {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Parallax effect on scroll
    gsap.to(contentRef.current, {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Loading overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="text-center">
          <h1
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: "#ffffff", letterSpacing: "0.2em" }}
          >
            HIDAKA
          </h1>
          <div
            className="w-12 h-px mx-auto"
            style={{
              backgroundColor: "#8b7355",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* 3D Background */}
      <Scene3D />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(250,250,250,0.8) 0%, rgba(250,250,250,0.4) 50%, rgba(250,250,250,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center py-24 md:py-32">
          {/* Overline */}
          <p
            className="animate-in text-xs uppercase tracking-widest mb-6"
            style={{ color: "#8b7355", letterSpacing: "0.25em" }}
          >
            Haute Couture Concierge
          </p>

          {/* Main Title with animated text */}
          <h1
            className="animate-in font-serif text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{ color: "#1a1a1a", letterSpacing: "0.15em" }}
          >
            <AnimatedText text="HIDAKA" className="font-serif" />
          </h1>

          {/* Subtitle */}
          <p
            className="animate-in font-serif text-xl md:text-2xl mb-6"
            style={{ color: "#4a4a4a" }}
          >
            Estúdio de criação sob medida que transforma
            <br className="hidden md:block" />
            peças em projetos autorais.
          </p>

          {/* Divider with animation */}
          <div
            className="animate-in w-16 h-px mx-auto my-8"
            style={{ backgroundColor: "#8b7355" }}
          />

          {/* Description */}
          <p
            className="animate-in text-base md:text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "#737373", lineHeight: 1.8 }}
          >
            Alta-costura personalizada no conforto da sua casa.
            Cada peça nasce do zero, feita exclusivamente para você.
          </p>

          {/* CTAs with magnetic effect */}
          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center">
            <Magnetic strength={0.2}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  padding: "16px 32px",
                  transition: "all 0.3s ease",
                }}
              >
                Agendar Consulta
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href="/servico"
                className="btn btn-secondary"
                style={{
                  border: "1px solid #1a1a1a",
                  color: "#1a1a1a",
                  padding: "16px 32px",
                  transition: "all 0.3s ease",
                }}
              >
                Conhecer o Serviço
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ color: "#a3a3a3" }}
      >
        <span className="text-xs uppercase tracking-widest animate-bounce">Scroll</span>
        <div className="w-px h-8 bg-current opacity-50" />
      </div>

      {/* Decorative floating elements */}
      <div
        className="absolute top-1/4 left-10 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#8b7355",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 right-20 w-3 h-3 rounded-full"
        style={{
          backgroundColor: "#b5a48c",
          animation: "float 8s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: "#d4d4d4",
          animation: "float 5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.5;
            transform: scaleX(1.5);
          }
        }
      `}</style>
    </section>
  );
}
