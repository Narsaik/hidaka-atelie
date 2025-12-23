"use client";

import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Atendimento em Domicílio",
    description: "Levo o ateliê até você. Tecidos, materiais, referências e ferramentas — tudo no conforto da sua casa.",
  },
  {
    number: "02",
    title: "Criação Exclusiva",
    description: "Cada peça é desenhada do zero. Nada é produzido em série. Sua história, sua identidade, sua peça.",
  },
  {
    number: "03",
    title: "Curadoria Premium",
    description: "Seleção criteriosa de tecidos e materiais de alta qualidade, escolhidos especialmente para você.",
  },
  {
    number: "04",
    title: "Acompanhamento Completo",
    description: "Do primeiro traço ao acabamento final, com provas e ajustes até a perfeição.",
  },
];

export default function ServiceHighlight() {
  return (
    <section className="section bg-[#1a1a1a]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
            O Diferencial
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
            Em vez de você ir até um ateliê,
            <br />
            <span className="text-[#b5a48c]">eu levo o ateliê até você.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="p-8 border border-[#333] hover:border-[#8b7355] transition-colors duration-300"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] font-medium">
                {feature.number}
              </span>
              <h3 className="font-serif text-xl text-white mt-4 mb-3">
                {feature.title}
              </h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/servico"
            className="inline-flex items-center gap-2 text-sm text-[#b5a48c] hover:text-white transition-colors"
          >
            Ver todos os serviços
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
