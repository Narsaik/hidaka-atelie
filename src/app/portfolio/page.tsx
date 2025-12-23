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
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-[#F5F3EF]">
        <div className="container-luxury text-center max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#A69B8C] font-body">
            Criações
          </span>
          <div className="divider divider-center mt-4" />
          <h1 className="text-3xl md:text-4xl font-serif text-[#2D2D2D] mt-4">
            Portfólio
          </h1>
          <p className="text-sm text-[#5A5A5A] font-body mt-4 max-w-md mx-auto">
            Cada peça é um projeto autoral. Conheça algumas das criações exclusivas
            que nasceram do encontro entre arte e intenção.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-[#E8E4DD]">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-1.5 text-xs font-body tracking-wider transition-colors ${
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="aspect-[3/4] bg-[#E8E4DD] relative overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#A69B8C]">
                      <svg
                        className="w-10 h-10 mx-auto mb-2 opacity-50"
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
                    <span className="text-white text-xs tracking-wider font-body">
                      Ver Detalhes
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#A69B8C] font-body">
                    {item.category}
                  </span>
                  <h3 className="text-base font-serif text-[#2D2D2D] mt-1 group-hover:text-[#A69B8C] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-10 p-6 bg-[#F5F3EF]">
            <p className="text-xs text-[#5A5A5A] font-body">
              <strong className="text-[#2D2D2D]">Nota:</strong> Por respeito à privacidade
              de nossas clientes, algumas peças não são exibidas publicamente.
              Para ver mais exemplos, entre em contato.
            </p>
          </div>
        </div>
      </section>

      {/* Making Of Section */}
      <section className="section bg-[#F5F3EF]">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A69B8C] font-body">
              Bastidores
            </span>
            <div className="divider divider-center mt-4" />
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D] mt-4">
              Making Of
            </h2>
            <p className="text-sm text-[#5A5A5A] font-body mt-3 max-w-md mx-auto">
              O processo de criação é parte essencial da experiência HIDAKA.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="container-luxury max-w-2xl mx-auto text-center px-6">
          <p className="font-script text-2xl md:text-3xl text-[#A69B8C] mb-4">
            Quer criar sua peça exclusiva?
          </p>
          <p className="text-sm text-[#5A5A5A] font-body mb-6">
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
