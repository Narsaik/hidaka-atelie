import { Metadata } from "next";
import { PROCESS_STEPS, FAQ, getWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Processo | HIDAKA Ateliê",
  description: "Conheça o processo de criação sob medida da HIDAKA. Do questionário inicial à entrega final.",
};

export default function ProcessoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-[#F5F3EF]">
        <div className="container-luxury text-center max-w-2xl mx-auto">
          <p className="font-script text-xl md:text-2xl text-[#A69B8C] mb-3">
            Processo Sob Medida
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-[#2D2D2D] mb-4">
            Como funciona a experiência?
          </h1>
          <div className="divider divider-center" />
        </div>
      </section>

      {/* Process steps */}
      <section className="section bg-white">
        <div className="container-luxury max-w-2xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={index}
              className="mb-10 last:mb-0 pb-10 last:pb-0 border-b last:border-b-0 border-[#E8E4DD]"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-serif text-[#C4B8A8] leading-none">
                  {step.number}
                </span>
                <div className="flex-1 pt-1">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#A69B8C] font-body mb-1">
                    Passo {step.number}
                  </p>
                  <h2 className="text-lg md:text-xl font-serif text-[#2D2D2D] mb-2">
                    {step.title}
                  </h2>
                  <p className="text-sm text-[#5A5A5A] font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-[#2D2D2D] text-[#F5F3EF]">
        <div className="container-luxury max-w-2xl mx-auto text-center px-6">
          <h2 className="text-xl md:text-2xl font-serif text-[#F5F3EF] mb-4">
            Quanto tempo leva?
          </h2>

          <p className="text-sm text-[#C4B8A8] font-body mb-8">
            Depende da complexidade da peça, mas em geral:
          </p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="p-4 border border-[#3D3D3D]">
              <span className="text-xl font-serif text-[#C4B8A8]">1ª</span>
              <p className="text-sm font-serif text-[#F5F3EF] mt-2">Visita</p>
              <p className="text-xs text-[#A69B8C] font-body mt-1">
                Criação + Medidas
              </p>
            </div>
            <div className="p-4 border border-[#3D3D3D]">
              <span className="text-xl font-serif text-[#C4B8A8]">2ª</span>
              <p className="text-sm font-serif text-[#F5F3EF] mt-2">Visita</p>
              <p className="text-xs text-[#A69B8C] font-body mt-1">
                Prova da peça piloto
              </p>
            </div>
            <div className="p-4 border border-[#3D3D3D]">
              <span className="text-xl font-serif text-[#C4B8A8]">+</span>
              <p className="text-sm font-serif text-[#F5F3EF] mt-2">Provas</p>
              <p className="text-xs text-[#A69B8C] font-body mt-1">
                Conforme necessário
              </p>
            </div>
          </div>

          <p className="text-xs text-[#A69B8C] font-body">
            A quantidade de visitas depende de como evolui de acordo com as provas.
            E por último, a entrega final.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D]">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <div key={index} className="bg-white p-5">
                <h3 className="text-base font-serif text-[#2D2D2D] mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-[#5A5A5A] font-body leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-luxury max-w-2xl mx-auto text-center px-6">
          <p className="text-lg md:text-xl font-serif text-[#2D2D2D] mb-4">
            Pronta para começar?
          </p>
          <p className="text-sm text-[#5A5A5A] font-body mb-6">
            O primeiro passo é simples: envie uma mensagem no WhatsApp.
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
      </section>
    </>
  );
}
