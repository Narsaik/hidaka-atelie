"use client";

import { TARGET_AUDIENCE, getWhatsAppLink } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="section bg-white">
      <div className="container-luxury max-w-3xl mx-auto">
        {/* For whom */}
        <div className="text-center mb-8">
          <p className="font-script text-xl md:text-2xl text-[#A69B8C] mb-3">
            Para quem é
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#2D2D2D] leading-relaxed">
            HIDAKA é para quem busca exclusividade real,
            narrativa estética própria e peças construídas
            com intenção, rigor e autenticidade.
          </h2>
        </div>

        {/* Target audience list */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TARGET_AUDIENCE.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#F5F3EF] text-[#5A5A5A] text-xs font-body"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#F5F3EF] p-6 md:p-8 text-center">
          <p className="text-lg md:text-xl font-serif text-[#2D2D2D] mb-4">
            Pronta para criar sua peça exclusiva?
          </p>
          <p className="text-sm text-[#5A5A5A] font-body mb-6 max-w-md mx-auto">
            Fale com Jade pelo WhatsApp e envie sua ideia, data do evento,
            seu bairro/cidade e o tipo de peça que imagina.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com Jade
          </a>
        </div>
      </div>
    </section>
  );
}
