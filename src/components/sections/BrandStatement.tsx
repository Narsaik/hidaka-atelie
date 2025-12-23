"use client";

export default function BrandStatement() {
  return (
    <section className="section bg-white">
      <div className="container max-w-4xl mx-auto">
        {/* Quote */}
        <blockquote className="text-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-[1.4] mb-8">
            &ldquo;É muito mais que costurar um vestido: é entregar uma experiência
            de luxo, personalizada e sem esforço para a cliente.&rdquo;
          </p>
        </blockquote>

        <div className="w-12 h-px bg-[#8b7355] mx-auto mb-8" />

        {/* Supporting Text */}
        <p className="text-center text-[#737373] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Processo silencioso, criterioso e contemporâneo — do primeiro traço
          ao acabamento final — garantindo uma experiência individual, elegante e discreta.
        </p>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-[#e5e5e5]">
          {[
            { title: "Exclusividade", subtitle: "Real" },
            { title: "Narrativa", subtitle: "Estética" },
            { title: "Intenção", subtitle: "& Rigor" },
            { title: "Autenticidade", subtitle: "Absoluta" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-lg text-[#1a1a1a]">{item.title}</p>
              <p className="text-sm text-[#8b7355] mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
