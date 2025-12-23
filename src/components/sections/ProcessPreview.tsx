"use client";

import Link from "next/link";

export default function ProcessPreview() {
  return (
    <section className="section bg-[#F5F3EF]">
      <div className="container-luxury max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-script text-2xl md:text-3xl text-[#A69B8C] mb-4">
            Processo Sob Medida
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
            Do conceito ao caimento final
          </h2>
          <p className="text-[#5A5A5A] font-body mt-4 max-w-xl mx-auto">
            Tudo é pensado para que a peça conte a sua história
            com precisão, arte e intenção.
          </p>
        </div>

        {/* Process overview - from document */}
        <div className="bg-white p-8 md:p-12">
          <p className="text-sm tracking-[0.2em] uppercase text-[#A69B8C] font-body mb-6">
            O processo envolve:
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Direção estética",
              "Desenvolvimento conceitual",
              "Projeto exclusivo",
              "Curadoria de materiais",
              "Modelagem sob medida",
              "Provas e ajustes",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#2D2D2D] font-body">
                <span className="w-1.5 h-1.5 bg-[#C4B8A8] rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Link to full process */}
        <div className="text-center mt-12">
          <Link
            href="/processo"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#2D2D2D] hover:text-[#A69B8C] transition-colors font-body"
          >
            Ver Processo Completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
