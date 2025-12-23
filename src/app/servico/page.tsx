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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
            Serviço
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-[-0.02em]">
            Haute Couture Concierge
          </h1>
          <p className="text-[#737373] mt-6 max-w-xl mx-auto leading-relaxed">
            Um serviço criado para mulheres que desejam viver a experiência da
            alta-costura de forma íntima, confortável e completamente personalizada.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="section bg-white">
        <div className="container max-w-2xl mx-auto">
          <div className="space-y-5 text-[#4a4a4a] leading-relaxed">
            <p className="text-lg text-[#1a1a1a] font-medium">
              Em vez de você ir até um ateliê, eu levo o ateliê até você.
            </p>
            <p>
              No conforto da sua casa, você recebe:
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {[
              "Curadoria exclusiva de tecidos premium",
              "Análise de estilo e biotipo",
              "Criação do seu design personalizado",
              "Provas técnicas e ajustes",
              "Acompanhamento individual em cada etapa",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[#1a1a1a]">
                <svg className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-[#fafafa]">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              Incluso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              O que está incluído?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white">
                <span className="w-8 h-8 bg-[#1a1a1a] text-white flex items-center justify-center flex-shrink-0 text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[#1a1a1a] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              Na Prática
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              O que você recebe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <div key={index} className="p-6 border border-[#e5e5e5] hover:border-[#8b7355] transition-colors">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[#1a1a1a] mt-4 text-sm leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 md:py-24 bg-[#1a1a1a]">
        <div className="container max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
            Para Quem
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">
            Para quem é esse serviço?
          </h2>

          <ul className="space-y-3">
            {TARGET_AUDIENCE.map((item, index) => (
              <li key={index} className="text-[#a3a3a3]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-[#fafafa]">
        <div className="container max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
            Investimento
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            Como funcionam os valores?
          </h2>

          <p className="text-[#737373] mb-8">
            Os valores variam conforme:
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {PRICING_FACTORS.map((factor, index) => (
              <span key={index} className="px-5 py-2.5 bg-white text-[#1a1a1a] text-sm border border-[#e5e5e5]">
                {factor}
              </span>
            ))}
          </div>

          <p className="text-[#737373] text-sm">
            Eu sempre preparo um orçamento claro e personalizado
            após entender o que você deseja.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
            Pronta para viver essa experiência?
          </h2>
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
      </section>
    </>
  );
}
