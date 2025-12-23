"use client";

import { TARGET_AUDIENCE, getWhatsAppLink } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="section bg-white">
      <div className="container-luxury max-w-4xl mx-auto">
        {/* For whom - exact from document */}
        <div className="text-center mb-12">
          <p className="font-script text-2xl md:text-3xl text-[#A69B8C] mb-4">
            Para quem é
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
            HIDAKA é para quem busca exclusividade real,<br />
            narrativa estética própria e peças construídas<br />
            com intenção, rigor e autenticidade.
          </h2>
        </div>

        {/* Target audience list */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {TARGET_AUDIENCE.map((item, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-[#F5F3EF] text-[#5A5A5A] text-sm font-body"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#F5F3EF] p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl font-serif text-[#2D2D2D] mb-6">
            Pronta para criar sua peça exclusiva?
          </p>
          <p className="text-[#5A5A5A] font-body mb-8 max-w-lg mx-auto">
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
