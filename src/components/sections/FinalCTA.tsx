"use client";

import { getWhatsAppLink } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl mx-auto text-center">
        {/* Headline */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
          Para quem é
        </p>

        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-[1.3] mb-8">
          HIDAKA é para quem busca exclusividade real,
          narrativa estética própria e peças construídas
          com intenção, rigor e autenticidade.
        </h2>

        {/* Target Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "Mulheres que buscam exclusividade",
            "Quem valoriza experiência e cuidado",
            "Quem deseja peças únicas",
            "Quem prioriza conforto e privacidade",
            "Quem busca luxo elegante e discreto",
          ].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#fafafa] text-[#4a4a4a] text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-[#fafafa] p-10 md:p-12">
          <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">
            Pronta para criar sua peça exclusiva?
          </h3>
          <p className="text-[#737373] mb-8 max-w-md mx-auto">
            Fale com Jade pelo WhatsApp e envie sua ideia, data do evento,
            seu bairro/cidade e o tipo de peça que imagina.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Falar com Jade
          </a>
        </div>
      </div>
    </section>
  );
}
