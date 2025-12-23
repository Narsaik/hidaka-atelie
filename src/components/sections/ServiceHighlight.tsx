"use client";

import { DIFFERENTIALS, getWhatsAppLink } from "@/lib/constants";

export default function ServiceHighlight() {
  return (
    <section className="section bg-[#2D2D2D] text-[#F5F3EF]">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-script text-xl md:text-2xl text-[#C4B8A8] mb-3">
            O Diferencial
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#F5F3EF]">
            Em vez de você ir até um ateliê,<br />eu levo o ateliê até você.
          </h2>
        </div>

        {/* Differentials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {DIFFERENTIALS.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-[#3D3D3D] hover:border-[#C4B8A8] transition-colors"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-[#C4B8A8] font-body">
                0{index + 1}
              </span>
              <h3 className="text-lg font-serif text-[#F5F3EF] mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#A69B8C] font-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#C4B8A8] text-[#2D2D2D] font-body text-sm tracking-wider uppercase hover:bg-[#D9D0C5] transition-colors"
          >
            Agendar Experiência
          </a>
        </div>
      </div>
    </section>
  );
}
