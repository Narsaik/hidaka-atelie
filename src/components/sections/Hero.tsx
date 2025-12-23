"use client";

import { getWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8E4DD] via-[#F5F3EF] to-[#F5F3EF]" />

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-6 pt-24">
        {/* Brand */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-[0.4em] font-serif text-[#2D2D2D] mb-6">
            HIDAKA
          </h1>
          <p className="font-script text-2xl md:text-3xl lg:text-4xl text-[#A69B8C]">
            Haute Couture Concierge
          </p>
        </div>

        {/* Divider */}
        <div className="divider divider-center animate-fade-in delay-200 my-10" />

        {/* Description - exact from document */}
        <div className="animate-fade-in delay-300 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-serif text-[#2D2D2D] leading-relaxed mb-6">
            Estúdio de criação sob medida que transforma peças em projetos autorais.
          </p>
          <p className="text-[#5A5A5A] font-body leading-relaxed max-w-2xl mx-auto mb-12">
            Cada peça nasce do zero, feita exclusivamente para você, com atenção absoluta
            aos detalhes e respeito ao seu tempo, sua história e sua identidade.
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com Jade
          </a>
          <a href="/servico" className="btn-secondary">
            Conhecer o Serviço
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-500 mt-20">
          <div className="flex flex-col items-center text-[#A69B8C]">
            <span className="text-xs tracking-[0.2em] uppercase font-body mb-4">
              Descubra
            </span>
            <div className="w-px h-12 bg-[#C4B8A8]" />
          </div>
        </div>
      </div>
    </section>
  );
}
