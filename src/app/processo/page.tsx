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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F5F3EF]">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <p className="font-script text-2xl md:text-3xl text-[#A69B8C] mb-4">
            Processo Sob Medida
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-6">
            Como funciona a experiência?
          </h1>
          <div className="divider divider-center" />
        </div>
      </section>

      {/* Process steps - from document */}
      <section className="section bg-white">
        <div className="container-luxury max-w-3xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={index}
              className="mb-16 last:mb-0 pb-16 last:pb-0 border-b last:border-b-0 border-[#E8E4DD]"
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl font-serif text-[#C4B8A8] leading-none">
                  {step.number}
                </span>
                <div className="flex-1 pt-2">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#A69B8C] font-body mb-2">
                    Passo {step.number}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D] mb-4">
                    {step.title}
                  </h2>
                  <p className="text-[#5A5A5A] font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline - from document */}
      <section className="section bg-[#2D2D2D] text-[#F5F3EF]">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#F5F3EF] mb-8">
            Quanto tempo leva?
          </h2>

          <p className="text-[#C4B8A8] font-body mb-12">
            Depende da complexidade da peça, mas em geral:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-[#3D3D3D]">
              <span className="text-3xl font-serif text-[#C4B8A8]">1ª</span>
              <p className="text-lg font-serif text-[#F5F3EF] mt-3">Visita</p>
              <p className="text-sm text-[#A69B8C] font-body mt-2">
                Criação + Medidas
              </p>
            </div>
            <div className="p-6 border border-[#3D3D3D]">
              <span className="text-3xl font-serif text-[#C4B8A8]">2ª</span>
              <p className="text-lg font-serif text-[#F5F3EF] mt-3">Visita</p>
              <p className="text-sm text-[#A69B8C] font-body mt-2">
                Prova da peça piloto
              </p>
            </div>
            <div className="p-6 border border-[#3D3D3D]">
              <span className="text-3xl font-serif text-[#C4B8A8]">+</span>
              <p className="text-lg font-serif text-[#F5F3EF] mt-3">Provas</p>
              <p className="text-sm text-[#A69B8C] font-body mt-2">
                Conforme necessário
              </p>
            </div>
          </div>

          <p className="text-[#A69B8C] font-body">
            A quantidade de visitas depende de como evolui de acordo com as provas.
            <br />E por último, a entrega final.
          </p>
        </div>
      </section>

      {/* FAQ - from document */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            {FAQ.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8">
                <h3 className="text-lg font-serif text-[#2D2D2D] mb-3">
                  {item.question}
                </h3>
                <p className="text-[#5A5A5A] font-body leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-serif text-[#2D2D2D] mb-6">
            Pronta para começar?
          </p>
          <p className="text-[#5A5A5A] font-body mb-8">
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
