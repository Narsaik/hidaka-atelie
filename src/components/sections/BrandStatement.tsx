"use client";

export default function BrandStatement() {
  return (
    <section className="section bg-white">
      <div className="container-luxury max-w-4xl mx-auto text-center">
        {/* Quote - exact from document */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#2D2D2D] leading-relaxed mb-8">
          "É muito mais que costurar um vestido: é entregar uma experiência
          de luxo, personalizada e sem esforço para a cliente."
        </p>

        <div className="divider divider-center" />

        {/* Description - from document */}
        <p className="text-[#5A5A5A] font-body leading-relaxed mt-8 max-w-2xl mx-auto">
          Trabalho com processo silencioso, criterioso e contemporâneo —
          do primeiro traço ao acabamento final — garantindo uma experiência
          individual, elegante e discreta.
        </p>

        {/* Core values - from document */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-[#E8E4DD]">
          <div className="text-center">
            <p className="text-xl font-serif text-[#2D2D2D]">Exclusividade</p>
            <p className="text-sm text-[#A69B8C] font-body mt-1">Real</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-serif text-[#2D2D2D]">Narrativa</p>
            <p className="text-sm text-[#A69B8C] font-body mt-1">Estética</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-serif text-[#2D2D2D]">Intenção</p>
            <p className="text-sm text-[#A69B8C] font-body mt-1">& Rigor</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-serif text-[#2D2D2D]">Autenticidade</p>
            <p className="text-sm text-[#A69B8C] font-body mt-1">Absoluta</p>
          </div>
        </div>
      </div>
    </section>
  );
}
