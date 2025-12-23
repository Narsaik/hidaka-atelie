"use client";

import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-[#fafafa]">
      {/* Background Pattern - subtle */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 text-center py-32">
        {/* Overline */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-8 animate-fade-in">
          Haute Couture Concierge
        </p>

        {/* Main Title */}
        <h1 className="font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-6 animate-fade-in delay-100">
          HIDAKA
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-[clamp(1.125rem,3vw,1.5rem)] text-[#4a4a4a] max-w-2xl mx-auto mb-4 animate-fade-in delay-200">
          Estúdio de criação sob medida que transforma
          <br className="hidden md:block" />
          peças em projetos autorais.
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-[#8b7355] mx-auto my-10 animate-fade-in delay-200" />

        {/* Description */}
        <p className="text-[#737373] text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in delay-300">
          Alta-costura personalizada no conforto da sua casa.
          Cada peça nasce do zero, feita exclusivamente para você.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Agendar Consulta
          </a>
          <Link href="/servico" className="btn btn-secondary">
            Conhecer o Serviço
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-400">
        <div className="flex flex-col items-center gap-2 text-[#a3a3a3]">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#a3a3a3] to-transparent" />
        </div>
      </div>
    </section>
  );
}
