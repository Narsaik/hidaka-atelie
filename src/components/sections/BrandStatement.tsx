"use client";

export default function BrandStatement() {
  return (
    <section className="section bg-white">
      <div className="container-luxury max-w-3xl mx-auto text-center">
        {/* Quote */}
        <p className="text-xl md:text-2xl lg:text-3xl font-serif text-[#2D2D2D] leading-relaxed mb-6">
          "É muito mais que costurar um vestido: é entregar uma experiência
          de luxo, personalizada e sem esforço para a cliente."
        </p>

        <div className="divider divider-center" />

        {/* Description */}
        <p className="text-[#5A5A5A] font-body leading-relaxed mt-6 max-w-xl mx-auto">
          Trabalho com processo silencioso, criterioso e contemporâneo —
          do primeiro traço ao acabamento final.
        </p>

        {/* Core values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[#E8E4DD]">
          <div className="text-center">
            <p className="text-lg font-serif text-[#2D2D2D]">Exclusividade</p>
            <p className="text-xs text-[#A69B8C] font-body mt-1">Real</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-serif text-[#2D2D2D]">Narrativa</p>
            <p className="text-xs text-[#A69B8C] font-body mt-1">Estética</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-serif text-[#2D2D2D]">Intenção</p>
            <p className="text-xs text-[#A69B8C] font-body mt-1">& Rigor</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-serif text-[#2D2D2D]">Autenticidade</p>
            <p className="text-xs text-[#A69B8C] font-body mt-1">Absoluta</p>
          </div>
        </div>
      </div>
    </section>
  );
}
