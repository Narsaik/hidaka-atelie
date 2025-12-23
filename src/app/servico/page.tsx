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
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-[#F5F3EF]">
        <div className="container-luxury text-center max-w-2xl mx-auto">
          <p className="font-script text-xl md:text-2xl text-[#A69B8C] mb-3">
            Haute Couture Concierge
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-[#2D2D2D] mb-4">
            O que é o serviço?
          </h1>
          <div className="divider divider-center" />
        </div>
      </section>

      {/* What is it */}
      <section className="section bg-white">
        <div className="container-luxury max-w-2xl mx-auto">
          <div className="space-y-4 text-sm md:text-base text-[#5A5A5A] font-body leading-relaxed">
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
          <ul className="mt-6 space-y-2">
            {[
              "Uma curadoria exclusiva de tecidos premium",
              "Análise de estilo e biotipo",
              "Criação do seu design personalizado",
              "Provas técnicas e ajustes",
              "Acompanhamento individual em cada etapa",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#2D2D2D] font-body">
                <svg className="w-4 h-4 text-[#C4B8A8] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D]">
              O que está incluído?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {WHATS_INCLUDED.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white">
                <span className="w-6 h-6 rounded-full bg-[#C4B8A8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-[#2D2D2D] font-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Na prática */}
      <section className="section bg-white">
        <div className="container-luxury max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D]">
              Na prática, o que você recebe:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {SERVICES.map((service, index) => (
              <div key={index} className="p-5 border border-[#E8E4DD]">
                <span className="text-lg font-serif text-[#C4B8A8]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[#2D2D2D] font-body mt-2">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-12 md:py-16 bg-[#2D2D2D] text-[#F5F3EF]">
        <div className="container-luxury max-w-2xl mx-auto text-center px-6">
          <h2 className="text-xl md:text-2xl font-serif text-[#F5F3EF] mb-6">
            Para quem é esse serviço?
          </h2>

          <ul className="space-y-2">
            {TARGET_AUDIENCE.map((item, index) => (
              <li key={index} className="text-sm text-[#C4B8A8] font-body">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D] mb-4">
            Como funcionam os valores?
          </h2>

          <p className="text-sm text-[#5A5A5A] font-body mb-6">
            Os valores variam conforme:
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {PRICING_FACTORS.map((factor, index) => (
              <span key={index} className="px-4 py-2 bg-white text-[#2D2D2D] text-xs font-body">
                {factor}
              </span>
            ))}
          </div>

          <p className="text-sm text-[#5A5A5A] font-body">
            Eu sempre preparo um orçamento claro e personalizado
            após entender o que você deseja.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-luxury max-w-2xl mx-auto text-center px-6">
          <p className="text-lg md:text-xl font-serif text-[#2D2D2D] mb-4">
            Pronta para viver essa experiência?
          </p>
          <p className="text-sm text-[#5A5A5A] font-body mb-6">
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
