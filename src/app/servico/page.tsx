import { Metadata } from "next";
import { WHATS_INCLUDED, SERVICES, TARGET_AUDIENCE, PRICING_FACTORS, getWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Haute Couture Concierge | HIDAKA Ateliê",
  description: "Serviço exclusivo de criação sob medida com atendimento em domicílio. Alta-costura personalizada no conforto da sua casa.",
};

export default function ServicoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F5F3EF]">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <p className="font-script text-2xl md:text-3xl text-[#A69B8C] mb-4">
            Haute Couture Concierge
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-6">
            O que é o serviço?
          </h1>
          <div className="divider divider-center" />
        </div>
      </section>

      {/* What is it - from document */}
      <section className="section bg-white">
        <div className="container-luxury max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-[#5A5A5A] font-body leading-relaxed">
            <p>
              O <strong className="text-[#2D2D2D]">Haute Couture Concierge</strong> é
              um serviço criado para mulheres que desejam viver a experiência da
              alta-costura de forma íntima, confortável e completamente personalizada.
            </p>
            <p>
              Em vez de você ir até um ateliê, <strong className="text-[#2D2D2D]">eu levo o ateliê até você</strong>.
            </p>
            <p>
              No conforto da sua casa, você recebe:
            </p>
          </div>

          {/* Home visit includes */}
          <ul className="mt-8 space-y-3">
            {[
              "Uma curadoria exclusiva de tecidos premium",
              "Análise de estilo e biotipo",
              "Criação do seu design personalizado",
              "Provas técnicas e ajustes",
              "Acompanhamento individual em cada etapa",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[#2D2D2D] font-body">
                <svg className="w-5 h-5 text-[#C4B8A8] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included - from document */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
              O que está incluído?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-white">
                <span className="w-8 h-8 rounded-full bg-[#C4B8A8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-[#2D2D2D] font-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Na prática - from document */}
      <section className="section bg-white">
        <div className="container-luxury max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
              Na prática, o que você recebe:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <div key={index} className="p-6 border border-[#E8E4DD]">
                <span className="text-2xl font-serif text-[#C4B8A8]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[#2D2D2D] font-body mt-3">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom - from document */}
      <section className="section bg-[#2D2D2D] text-[#F5F3EF]">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#F5F3EF] mb-8">
            Para quem é esse serviço?
          </h2>

          <ul className="space-y-4">
            {TARGET_AUDIENCE.map((item, index) => (
              <li key={index} className="text-lg text-[#C4B8A8] font-body">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing - from document */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D] mb-6">
            Como funcionam os valores?
          </h2>

          <p className="text-[#5A5A5A] font-body mb-8">
            Os valores variam conforme:
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {PRICING_FACTORS.map((factor, index) => (
              <span key={index} className="px-5 py-2 bg-white text-[#2D2D2D] text-sm font-body">
                {factor}
              </span>
            ))}
          </div>

          <p className="text-[#5A5A5A] font-body">
            Eu sempre preparo um orçamento claro e personalizado<br />
            após entender o que você deseja.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-serif text-[#2D2D2D] mb-6">
            Pronta para viver essa experiência?
          </p>
          <p className="text-[#5A5A5A] font-body mb-8">
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
      </section>
    </>
  );
}
