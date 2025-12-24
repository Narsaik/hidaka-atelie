"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const features = [
  {
    number: "01",
    title: "Atendimento em Domicílio",
    description: "Levo o ateliê até você. Tecidos, materiais, referências e ferramentas — tudo no conforto da sua casa.",
  },
  {
    number: "02",
    title: "Criação Exclusiva",
    description: "Cada peça é desenhada do zero. Nada é produzido em série. Sua história, sua identidade, sua peça.",
  },
  {
    number: "03",
    title: "Curadoria Premium",
    description: "Seleção criteriosa de tecidos e materiais de alta qualidade, escolhidos especialmente para você.",
  },
  {
    number: "04",
    title: "Acompanhamento Completo",
    description: "Do primeiro traço ao acabamento final, com provas e ajustes até a perfeição.",
  },
];

export default function ServiceHighlight() {
  return (
    <section className="section bg-[#1a1a1a]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              O Diferencial
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
              Em vez de você ir até um ateliê,
              <br className="hidden sm:block" />
              <span className="text-[#b5a48c]"> eu levo o ateliê até você.</span>
            </h2>
          </ScrollReveal>

          {/* Features Grid */}
          <StaggerContainer className="grid md:grid-cols-2 gap-4 md:gap-6" staggerDelay={0.1}>
            {features.map((feature) => (
              <StaggerItem key={feature.number}>
                <motion.div
                  className="p-6 md:p-8 border border-[#333] hover:border-[#8b7355] transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] font-medium">
                    {feature.number}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-white mt-3 md:mt-4 mb-2 md:mb-3 group-hover:text-[#b5a48c] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <ScrollReveal className="text-center mt-10 md:mt-12" delay={0.4}>
            <Link
              href="/servico"
              className="inline-flex items-center gap-2 text-sm text-[#b5a48c] hover:text-white transition-colors group"
            >
              Ver todos os serviços
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
