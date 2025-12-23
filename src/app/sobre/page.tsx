import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre | HIDAKA Ateliê",
  description: "Conheça HIDAKA - estúdio de criação sob medida que transforma peças em projetos autorais.",
};

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
            Sobre
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-[-0.02em]">
            HIDAKA Ateliê
          </h1>
          <p className="text-[#737373] mt-6 max-w-xl mx-auto leading-relaxed">
            Estúdio de criação sob medida que transforma peças em projetos autorais.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section bg-white">
        <div className="container max-w-2xl mx-auto">
          <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
            <p>
              <strong className="text-[#1a1a1a]">HIDAKA</strong> é um estúdio de criação
              sob medida que transforma peças em projetos autorais.
            </p>
            <p>
              Minha assinatura, chamada <strong className="text-[#1a1a1a]">Haute Couture Concierge</strong>,
              é um serviço personalizado onde cada etapa — conceito, desenho, curadoria de materiais,
              modelagem e provas — é conduzida com direção estética e precisão técnica.
            </p>
            <p className="text-[#1a1a1a] font-medium">
              Aqui, nada é produzido em série.
            </p>
            <p>
              Cada peça nasce do zero, feita exclusivamente para a cliente, com atenção
              absoluta aos detalhes e respeito ao seu tempo, sua história e sua identidade.
            </p>
            <p>
              Trabalho com processo silencioso, criterioso e contemporâneo — do primeiro traço
              ao acabamento final — garantindo uma experiência individual, elegante e discreta.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 md:py-24 bg-[#1a1a1a]">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl text-white leading-relaxed">
            "HIDAKA é para quem busca exclusividade real, narrativa estética própria
            e peças construídas com intenção, rigor e autenticidade."
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section bg-[#fafafa]">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              Fundamentos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Os Pilares
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] font-medium">
                01
              </span>
              <h3 className="font-serif text-xl text-[#1a1a1a] mt-4 mb-4">
                A Artista
              </h3>
              <ul className="space-y-2 text-[#737373] text-sm">
                <li>Processo criativo autoral</li>
                <li>Referências contemporâneas</li>
                <li>Visão estética definida</li>
                <li>Making of detalhado</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] font-medium">
                02
              </span>
              <h3 className="font-serif text-xl text-[#1a1a1a] mt-4 mb-4">
                A Empreendedora
              </h3>
              <ul className="space-y-2 text-[#737373] text-sm">
                <li>Estrutura profissional</li>
                <li>Serviço premium diferenciado</li>
                <li>Atendimento personalizado</li>
                <li>Processos refinados</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] font-medium">
                03
              </span>
              <h3 className="font-serif text-xl text-[#1a1a1a] mt-4 mb-4">
                A Personalidade
              </h3>
              <ul className="space-y-2 text-[#737373] text-sm">
                <li>Autenticidade genuína</li>
                <li>Comunicação direta</li>
                <li>Criatividade intuitiva</li>
                <li>Conexão verdadeira</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
            Vamos criar juntas?
          </h2>
          <p className="text-[#737373] mb-8">
            Cada peça começa com uma conversa.
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
