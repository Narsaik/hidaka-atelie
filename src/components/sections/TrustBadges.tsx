"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { TRUST_BADGES, STATS } from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  home: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
};

export default function TrustBadges() {
  return (
    <section className="section bg-white border-y border-[#e5e5e5]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Stats Row */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-12 md:mb-16">
              <StatItem value={STATS.piecesCreated} suffix="+" label="Peças Criadas" />
              <StatItem value={STATS.clientsSatisfied} suffix="+" label="Clientes Satisfeitas" />
              <StatItem value={STATS.yearsExperience} label="Anos de Experiência" />
              <StatItem value={STATS.citiesServed} label="Cidades Atendidas" />
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="w-full h-px bg-[#e5e5e5] mb-12 md:mb-16" />

          {/* Trust Badges */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {TRUST_BADGES.map((badge, index) => (
              <StaggerItem key={index}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-4 text-[#8b7355] transition-transform duration-300 group-hover:scale-110">
                    {icons[badge.icon]}
                  </div>
                  <h3 className="font-serif text-base md:text-lg text-[#1a1a1a] mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#737373] leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <motion.div
      className="text-center px-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="block font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}{suffix}
      </motion.span>
      <span className="text-xs md:text-sm text-[#737373] block leading-tight">{label}</span>
    </motion.div>
  );
}
