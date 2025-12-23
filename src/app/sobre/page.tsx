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
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-[#F5F3EF]">
        <div className="container-luxury text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif text-[#2D2D2D] tracking-[0.15em] mb-3">
            HIDAKA
          </h1>
          <p className="font-script text-xl md:text-2xl text-[#A69B8C]">
            Ateliê
          </p>
          <div className="divider divider-center mt-6" />
        </div>
      </section>

      {/* About */}
      <section className="section bg-white">
        <div className="container-luxury max-w-2xl mx-auto">
          <div className="space-y-5 text-sm md:text-base text-[#5A5A5A] font-body leading-relaxed">
            <p>
              <strong className="text-[#2D2D2D]">HIDAKA</strong> é um estúdio de criação
              sob medida que transforma peças em projetos autorais.
            </p>
            <p>
              Minha assinatura, chamada <strong className="text-[#2D2D2D]">Haute Couture Concierge</strong>,
              é um serviço personalizado onde cada etapa — conceito, desenho, curadoria de materiais,
              modelagem e provas — é conduzida com direção estética e precisão técnica.
            </p>
            <p>
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

      {/* Philosophy */}
      <section className="py-12 md:py-16 bg-[#2D2D2D] text-[#F5F3EF]">
        <div className="container-luxury max-w-2xl mx-auto text-center px-6">
          <p className="text-base md:text-lg lg:text-xl font-serif text-[#F5F3EF] leading-relaxed">
            HIDAKA é para quem busca exclusividade real, narrativa estética própria
            e peças construídas com intenção, rigor e autenticidade.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D]">
              Os Pilares
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Pillar 1 */}
            <div className="bg-white p-6">
              <span className="text-2xl font-serif text-[#C4B8A8]">01</span>
              <h3 className="text-base font-serif text-[#2D2D2D] mt-3 mb-3">
                A Artista
              </h3>
              <ul className="space-y-1.5 text-[#5A5A5A] font-body text-xs">
                <li>Como eu desenho</li>
                <li>Como eu crio</li>
                <li>Minhas referências</li>
                <li>Meus processos</li>
                <li>Making of dos vestidos</li>
                <li>Minha visão estética</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6">
              <span className="text-2xl font-serif text-[#C4B8A8]">02</span>
              <h3 className="text-base font-serif text-[#2D2D2D] mt-3 mb-3">
                A Empreendedora
              </h3>
              <ul className="space-y-1.5 text-[#5A5A5A] font-body text-xs">
                <li>Como estou montando minha estrutura</li>
                <li>Sob medida na casa das pessoas</li>
                <li>Serviço premium vs comum</li>
                <li>Minha rotina e bastidores</li>
                <li>Minhas decisões</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6">
              <span className="text-2xl font-serif text-[#C4B8A8]">03</span>
              <h3 className="text-base font-serif text-[#2D2D2D] mt-3 mb-3">
                A Personalidade
              </h3>
              <ul className="space-y-1.5 text-[#5A5A5A] font-body text-xs">
                <li>Meu humor</li>
                <li>Minha forma natural de falar</li>
                <li>Meus surtos engraçados</li>
                <li>Meu jeitinho caótico e genial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-luxury max-w-2xl mx-auto text-center px-6">
          <p className="text-lg md:text-xl font-serif text-[#2D2D2D] mb-4">
            Vamos criar juntas?
          </p>
          <p className="text-sm text-[#5A5A5A] font-body mb-6">
            Cada peça começa com uma conversa.
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
