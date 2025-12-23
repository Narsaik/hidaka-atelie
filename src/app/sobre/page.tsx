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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F5F3EF]">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2D2D] tracking-[0.2em] mb-4">
            HIDAKA
          </h1>
          <p className="font-script text-2xl md:text-3xl text-[#A69B8C]">
            Ateliê
          </p>
          <div className="divider divider-center mt-8" />
        </div>
      </section>

      {/* About - from document */}
      <section className="section bg-white">
        <div className="container-luxury max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-[#5A5A5A] font-body leading-relaxed">
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

      {/* Philosophy - from document */}
      <section className="section bg-[#2D2D2D] text-[#F5F3EF]">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-[#F5F3EF] leading-relaxed">
            HIDAKA é para quem busca exclusividade real, narrativa estética própria
            e peças construídas com intenção, rigor e autenticidade.
          </p>
        </div>
      </section>

      {/* Pillars - from document */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
              Os Pilares
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8">
              <span className="text-3xl font-serif text-[#C4B8A8]">01</span>
              <h3 className="text-xl font-serif text-[#2D2D2D] mt-4 mb-4">
                A Artista
              </h3>
              <ul className="space-y-2 text-[#5A5A5A] font-body text-sm">
                <li>Como eu desenho</li>
                <li>Como eu crio</li>
                <li>Minhas referências</li>
                <li>Meus processos</li>
                <li>Making of dos vestidos do zero</li>
                <li>Minha visão estética</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8">
              <span className="text-3xl font-serif text-[#C4B8A8]">02</span>
              <h3 className="text-xl font-serif text-[#2D2D2D] mt-4 mb-4">
                A Empreendedora
              </h3>
              <ul className="space-y-2 text-[#5A5A5A] font-body text-sm">
                <li>Como estou montando minha estrutura</li>
                <li>Como funciona fazer sob medida na casa das pessoas</li>
                <li>A diferença entre serviço premium e comum</li>
                <li>Minha rotina e bastidores</li>
                <li>Minhas decisões</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8">
              <span className="text-3xl font-serif text-[#C4B8A8]">03</span>
              <h3 className="text-xl font-serif text-[#2D2D2D] mt-4 mb-4">
                A Personalidade
              </h3>
              <ul className="space-y-2 text-[#5A5A5A] font-body text-sm">
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
      <section className="section bg-white">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-serif text-[#2D2D2D] mb-6">
            Vamos criar juntas?
          </p>
          <p className="text-[#5A5A5A] font-body mb-8">
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
