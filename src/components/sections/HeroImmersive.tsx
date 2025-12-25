"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";

// Dynamic import for 3D scene to avoid SSR issues
const NeedleScene = dynamic(() => import("@/components/3d/NeedleScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0" style={{ backgroundColor: "#fafafa" }} />
  ),
});

export default function HeroImmersive() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Hide loading screen after delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Loading overlay - completely hidden after load */}
      {!isLoaded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="font-serif text-4xl md:text-5xl mb-4"
              style={{ color: "#ffffff", letterSpacing: "0.2em" }}
            >
              HIDAKA
            </h1>
            <motion.div
              className="w-12 h-px mx-auto"
              style={{ backgroundColor: "#8b7355" }}
              animate={{ scaleX: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      )}

      {/* 3D Needle/Haystack Background */}
      <NeedleScene />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(250,250,250,0.85) 0%, rgba(250,250,250,0.5) 50%, rgba(250,250,250,0.9) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center py-24 md:py-32">
          {/* Overline */}
          <motion.p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#8b7355", letterSpacing: "0.25em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Haute Couture Concierge
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="font-serif text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{ color: "#1a1a1a", letterSpacing: "0.15em" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            HIDAKA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-serif text-xl md:text-2xl mb-6"
            style={{ color: "#4a4a4a" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Estúdio de criação sob medida que transforma
            <br className="hidden md:block" />
            peças em projetos autorais.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="w-16 h-px mx-auto my-8"
            style={{ backgroundColor: "#8b7355" }}
            initial={{ scaleX: 0 }}
            animate={isLoaded ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          {/* Description */}
          <motion.p
            className="text-base md:text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "#737373", lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Alta-costura personalizada no conforto da sua casa.
            Cada peça nasce do zero, feita exclusivamente para você.
          </motion.p>

          {/* CTAs - Fixed without Magnetic wrapper */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
              }}
            >
              Agendar Consulta
            </a>
            <Link
              href="/servico"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
              style={{
                border: "1px solid #1a1a1a",
                color: "#1a1a1a",
                backgroundColor: "transparent",
              }}
            >
              Conhecer o Serviço
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ color: "#a3a3a3" }}
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
      >
        <motion.span
          className="text-xs uppercase tracking-widest"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <div className="w-px h-8 bg-current opacity-50" />
      </motion.div>
    </section>
  );
}
