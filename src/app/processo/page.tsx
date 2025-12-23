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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
            Processo
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-[-0.02em]">
            Como funciona a experiência?
          </h1>
          <p className="text-[#737373] mt-6 max-w-xl mx-auto leading-relaxed">
            Do conceito ao caimento final, cada etapa é conduzida com
            direção estética e precisão técnica.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={index}
              className="mb-12 last:mb-0 pb-12 last:pb-0 border-b last:border-b-0 border-[#e5e5e5]"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-medium text-[#8b7355]">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h2 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-3">
                    {step.title}
                  </h2>
                  <p className="text-[#737373] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 bg-[#1a1a1a]">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
            Cronograma
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Quanto tempo leva?
          </h2>
          <p className="text-[#a3a3a3] mb-12">
            Depende da complexidade da peça, mas em geral:
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="p-6 border border-[#333]">
              <span className="font-serif text-2xl text-[#8b7355]">1ª</span>
              <p className="font-serif text-white mt-3">Visita</p>
              <p className="text-[#737373] text-sm mt-2">
                Criação + Medidas
              </p>
            </div>
            <div className="p-6 border border-[#333]">
              <span className="font-serif text-2xl text-[#8b7355]">2ª</span>
              <p className="font-serif text-white mt-3">Visita</p>
              <p className="text-[#737373] text-sm mt-2">
                Prova da peça piloto
              </p>
            </div>
            <div className="p-6 border border-[#333]">
              <span className="font-serif text-2xl text-[#8b7355]">+</span>
              <p className="font-serif text-white mt-3">Provas</p>
              <p className="text-[#737373] text-sm mt-2">
                Conforme necessário
              </p>
            </div>
          </div>

          <p className="text-[#737373] text-sm">
            A quantidade de visitas depende de como evolui de acordo com as provas.
            E por último, a entrega final.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8">
                <h3 className="font-serif text-lg text-[#1a1a1a] mb-3">
                  {item.question}
                </h3>
                <p className="text-[#737373] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
            Pronta para começar?
          </h2>
          <p className="text-[#737373] mb-8">
            O primeiro passo é simples: envie uma mensagem no WhatsApp.
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
      </section>
    </>
  );
}
