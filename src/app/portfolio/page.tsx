import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfólio | HIDAKA Ateliê",
  description: "Conheça as criações exclusivas do HIDAKA Ateliê. Peças sob medida feitas com intenção, rigor e autenticidade.",
};

// Placeholder data for portfolio items
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F5F3EF]">
        <div className="container-luxury text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[#A69B8C] font-body">
            Criações
          </span>
          <div className="divider divider-center" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2D2D] mt-6">
            Portfólio
          </h1>
          <p className="text-[#5A5A5A] font-body mt-6 max-w-2xl mx-auto">
            Cada peça é um projeto autoral. Conheça algumas das criações exclusivas
            que nasceram do encontro entre arte e intenção.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-[#E8E4DD]">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 text-sm font-body tracking-wider transition-colors ${
                  index === 0
                    ? "bg-[#2D2D2D] text-white"
                    : "text-[#5A5A5A] hover:text-[#2D2D2D]"
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
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="aspect-[3/4] bg-[#E8E4DD] relative overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#A69B8C]">
                      <svg
                        className="w-12 h-12 mx-auto mb-2 opacity-50"
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
                      <p className="text-xs font-body">Em breve</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#2D2D2D]/0 group-hover:bg-[#2D2D2D]/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm tracking-wider font-body">
                      Ver Detalhes
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#A69B8C] font-body">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif text-[#2D2D2D] mt-1 group-hover:text-[#A69B8C] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-16 p-8 bg-[#F5F3EF]">
            <p className="text-[#5A5A5A] font-body">
              <strong className="text-[#2D2D2D]">Nota:</strong> Por respeito à privacidade
              de nossas clientes, algumas peças não são exibidas publicamente.
              <br />
              Para ver mais exemplos do nosso trabalho, entre em contato.
            </p>
          </div>
        </div>
      </section>

      {/* Making Of Section */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#A69B8C] font-body">
              Bastidores
            </span>
            <div className="divider divider-center" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D] mt-6">
              Making Of
            </h2>
            <p className="text-[#5A5A5A] font-body mt-4 max-w-xl mx-auto">
              O processo de criação é parte essencial da experiência HIDAKA.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-[#E8E4DD] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#A69B8C] text-xs font-body">
                    Processo {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <p className="font-script text-3xl md:text-4xl text-[#A69B8C] mb-8">
            Quer criar sua peça exclusiva?
          </p>
          <p className="text-[#5A5A5A] font-body mb-8">
            Cada história merece uma peça única. Conte-nos a sua.
          </p>
          <a
            href={getWhatsAppLink("Olá! Vi o portfólio e gostaria de criar minha peça exclusiva.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Começar Agora
          </a>
        </div>
      </section>
    </>
  );
}
