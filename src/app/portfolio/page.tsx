import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfólio | HIDAKA Ateliê",
  description: "Conheça as criações exclusivas do HIDAKA Ateliê. Peças sob medida feitas com intenção, rigor e autenticidade.",
};

const portfolioItems = [
  { id: 1, title: "Vestido de Noiva", category: "Noiva" },
  { id: 2, title: "Vestido de Festa", category: "Festa" },
  { id: 3, title: "Conjunto Sob Medida", category: "Sob Medida" },
  { id: 4, title: "Vestido de Madrinha", category: "Festa" },
  { id: 5, title: "Traje para Evento", category: "Evento" },
  { id: 6, title: "Peça Autoral", category: "Autoral" },
];

const categories = ["Todos", "Noiva", "Festa", "Sob Medida", "Autoral"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
            Criações
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-[-0.02em]">
            Portfólio
          </h1>
          <p className="text-[#737373] mt-6 max-w-xl mx-auto leading-relaxed">
            Cada peça é um projeto autoral. Conheça algumas das criações exclusivas
            que nasceram do encontro entre arte e intenção.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-[#e5e5e5]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 text-sm tracking-wide transition-colors ${
                  index === 0
                    ? "bg-[#1a1a1a] text-white"
                    : "text-[#737373] hover:text-[#1a1a1a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="aspect-[3/4] bg-[#fafafa] relative overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#a3a3a3]">
                      <svg
                        className="w-12 h-12 mx-auto mb-3 opacity-40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-xs">Em breve</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm tracking-wider">
                      Ver Detalhes
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-[#1a1a1a] mt-1 group-hover:text-[#8b7355] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy Note */}
          <div className="text-center mt-16 p-8 bg-[#fafafa]">
            <p className="text-sm text-[#737373]">
              <strong className="text-[#1a1a1a]">Nota:</strong> Por respeito à privacidade
              de nossas clientes, algumas peças não são exibidas publicamente.
              Para ver mais exemplos, entre em contato.
            </p>
          </div>
        </div>
      </section>

      {/* Making Of */}
      <section className="section bg-[#fafafa]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              Bastidores
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Making Of
            </h2>
            <p className="text-[#737373] mt-4 max-w-md mx-auto">
              O processo de criação é parte essencial da experiência HIDAKA.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-white relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#a3a3a3] text-xs">
                    Processo {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
            Quer criar sua peça exclusiva?
          </h2>
          <p className="text-[#737373] mb-8">
            Cada história merece uma peça única. Conte-nos a sua.
          </p>
          <a
            href={getWhatsAppLink("Olá! Vi o portfólio e gostaria de criar minha peça exclusiva.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Começar Agora
          </a>
        </div>
      </section>
    </>
  );
}
