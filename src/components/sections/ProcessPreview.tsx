"use client";

import Link from "next/link";

const steps = [
  { number: "01", title: "Questionário", description: "Envie sua ideia, referências e data do evento" },
  { number: "02", title: "Reunião", description: "Alinhamos design, tecidos e orçamento" },
  { number: "03", title: "Criação", description: "Desenho exclusivo e modelagem sob medida" },
  { number: "04", title: "Provas", description: "Ajustes até a perfeição absoluta" },
  { number: "05", title: "Entrega", description: "Sua peça exclusiva está pronta" },
];

export default function ProcessPreview() {
  return (
    <section className="section bg-[#fafafa]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
            Processo
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
            Do conceito ao caimento final
          </h2>
          <p className="text-[#737373] mt-4 max-w-lg mx-auto">
            Cada etapa é conduzida com direção estética e precisão técnica.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-[#e5e5e5]" />
                )}

                {/* Step Circle */}
                <div className="relative z-10 w-12 h-12 mx-auto bg-white border border-[#e5e5e5] rounded-full flex items-center justify-center mb-4">
                  <span className="text-xs font-medium text-[#8b7355]">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-base text-[#1a1a1a] mb-1">{step.title}</h3>
                <p className="text-xs text-[#737373] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/processo"
            className="inline-flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-[#8b7355] transition-colors"
          >
            Ver processo completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
