"use client";

import Link from "next/link";

export default function ProcessPreview() {
  return (
    <section className="section bg-[#F5F3EF]">
      <div className="container-luxury max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-script text-xl md:text-2xl text-[#A69B8C] mb-3">
            Processo Sob Medida
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D]">
            Do conceito ao caimento final
          </h2>
          <p className="text-sm text-[#5A5A5A] font-body mt-3 max-w-md mx-auto">
            Tudo é pensado para que a peça conte a sua história
            com precisão, arte e intenção.
          </p>
        </div>

        {/* Process overview */}
        <div className="bg-white p-6 md:p-8">
          <p className="text-xs tracking-[0.2em] uppercase text-[#A69B8C] font-body mb-4">
            O processo envolve:
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              "Direção estética",
              "Desenvolvimento conceitual",
              "Projeto exclusivo",
              "Curadoria de materiais",
              "Modelagem sob medida",
              "Provas e ajustes",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-[#2D2D2D] font-body">
                <span className="w-1.5 h-1.5 bg-[#C4B8A8] rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Link to full process */}
        <div className="text-center mt-8">
          <Link
            href="/processo"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#2D2D2D] hover:text-[#A69B8C] transition-colors font-body"
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
