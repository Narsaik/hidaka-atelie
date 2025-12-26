"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const portfolioItems = [
  { id: 1, title: "Vestido de Noiva Clássico", category: "Noiva", description: "Renda francesa e seda pura", image: "/images/portfolio/01.jpg" },
  { id: 2, title: "Vestido de Festa Longo", category: "Festa", description: "Cetim italiano com bordados", image: "/images/portfolio/02.jpg" },
  { id: 3, title: "Conjunto Sob Medida", category: "Sob Medida", description: "Alfaiataria feminina refinada", image: "/images/portfolio/03.jpg" },
  { id: 4, title: "Vestido de Madrinha", category: "Festa", description: "Chiffon com detalhes dourados", image: "/images/portfolio/04.jpg" },
  { id: 5, title: "Traje para Formatura", category: "Festa", description: "Design contemporâneo elegante", image: "/images/portfolio/05.jpg" },
  { id: 6, title: "Peça Autoral", category: "Autoral", description: "Criação única conceitual", image: "/images/portfolio/06.jpg" },
  { id: 7, title: "Vestido de Noiva Moderno", category: "Noiva", description: "Minimalismo sofisticado", image: "/images/portfolio/07.jpg" },
  { id: 8, title: "Blazer Personalizado", category: "Sob Medida", description: "Corte impecável sob medida", image: "/images/portfolio/08.jpg" },
  { id: 9, title: "Vestido de Gala", category: "Autoral", description: "Arte em movimento", image: "/images/portfolio/09.jpg" },
];

const categories = ["Todos", "Noiva", "Festa", "Sob Medida", "Autoral"];

const makingOfSteps = [
  { id: 1, title: "Seleção de Tecidos", description: "Curadoria de materiais premium", image: "/images/making-of/01.jpg" },
  { id: 2, title: "Modelagem", description: "Cada curva pensada para você", image: "/images/making-of/02.jpg" },
  { id: 3, title: "Costura Artesanal", description: "Mãos experientes, pontos perfeitos", image: "/images/making-of/03.jpg" },
  { id: 4, title: "Acabamentos", description: "Detalhes que fazem a diferença", image: "/images/making-of/04.jpg" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "Todos"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
              Criações
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-[-0.02em]">
              Portfólio
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[#737373] mt-6 max-w-xl mx-auto leading-relaxed">
              Cada peça é um projeto autoral. Conheça algumas das criações exclusivas
              que nasceram do encontro entre arte e intenção.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white border-b border-[#e5e5e5] sticky top-20 z-30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm tracking-wide transition-all ${
                  activeCategory === category
                    ? "bg-[#1a1a1a] text-white"
                    : "text-[#737373] hover:text-[#1a1a1a] hover:bg-[#fafafa]"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                >
                  {/* Image with enhanced hover */}
                  <motion.div
                    className="aspect-[3/4] bg-[#fafafa] relative overflow-hidden mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center text-white px-6">
                        <motion.span
                          className="text-sm tracking-wider block mb-2"
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                        >
                          {item.description}
                        </motion.span>
                        <span className="text-xs text-[#b5a48c] tracking-wider">
                          Clique para ver mais
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                  {/* Info */}
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#1a1a1a] mt-1 group-hover:text-[#8b7355] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-[#737373]">Nenhuma peça encontrada nesta categoria.</p>
            </motion.div>
          )}

          {/* Privacy Note */}
          <ScrollReveal delay={0.3}>
            <motion.div
              className="text-center mt-16 p-8 bg-[#fafafa]"
              whileHover={{ boxShadow: "0 4px 20px -4px rgba(0,0,0,0.1)" }}
            >
              <p className="text-sm text-[#737373]">
                <strong className="text-[#1a1a1a]">Nota:</strong> Por respeito à privacidade
                de nossas clientes, algumas peças não são exibidas publicamente.
                Para ver mais exemplos, entre em contato.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Making Of */}
      <section className="section bg-[#fafafa]">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              Bastidores
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Making Of
            </h2>
            <p className="text-[#737373] mt-4 max-w-md mx-auto">
              O processo de criação é parte essencial da experiência HIDAKA.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {makingOfSteps.map((step) => (
              <StaggerItem key={step.id}>
                <motion.div
                  className="aspect-square bg-white relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                      {String(step.id).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-white text-sm group-hover:text-[#d4af37] transition-colors">
                      {step.title}
                    </span>
                    <span className="text-white/70 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {step.description}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
              Quer criar sua peça exclusiva?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[#737373] mb-8">
              Cada história merece uma peça única. Conte-nos a sua.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <motion.a
              href={getWhatsAppLink("Olá! Vi o portfólio e gostaria de criar minha peça exclusiva.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-block"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Começar Agora
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Simple Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 max-w-2xl w-full bg-white p-8"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#737373] hover:text-[#1a1a1a] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {(() => {
                const item = portfolioItems.find(p => p.id === selectedItem);
                if (!item) return null;
                return (
                  <>
                    {/* Image */}
                    <div className="aspect-[4/5] bg-[#fafafa] mb-6 relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] block mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#737373] mb-6">
                        {item.description}
                      </p>
                      <a
                        href={getWhatsAppLink(`Olá! Gostaria de saber mais sobre a peça "${item.title}".`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-block"
                      >
                        Solicitar Informações
                      </a>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
