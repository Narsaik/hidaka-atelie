"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const steps = [
  { number: "01", title: "Questionário", description: "Envie sua ideia, referências e data do evento" },
  { number: "02", title: "Reunião", description: "Alinhamos design, tecidos e orçamento" },
  { number: "03", title: "Criação", description: "Desenho exclusivo e modelagem sob medida" },
  { number: "04", title: "Provas", description: "Ajustes até a perfeição absoluta" },
  { number: "05", title: "Entrega", description: "Sua peça exclusiva está pronta" },
];

export default function ProcessPreview() {
  return (
    <section className="section bg-[#fafafa]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              Processo
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a]">
              Do conceito ao caimento final
            </h2>
            <p className="text-[#737373] text-sm md:text-base mt-4 max-w-lg mx-auto leading-relaxed">
              Cada etapa é conduzida com direção estética e precisão técnica.
            </p>
          </ScrollReveal>

          {/* Process Steps */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4" staggerDelay={0.1}>
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center group">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-[#e5e5e5]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      style={{ originX: 0 }}
                    />
                  )}

                  {/* Step Circle */}
                  <motion.div
                    className="relative z-10 w-10 h-10 md:w-12 md:h-12 mx-auto bg-white border border-[#e5e5e5] rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:border-[#8b7355] group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-[10px] md:text-xs font-medium text-[#8b7355]">{step.number}</span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-serif text-sm md:text-base text-[#1a1a1a] mb-1 group-hover:text-[#8b7355] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-[#737373] leading-relaxed px-1">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <ScrollReveal className="text-center mt-10 md:mt-12" delay={0.5}>
            <Link
              href="/processo"
              className="inline-flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-[#8b7355] transition-colors group"
            >
              Ver processo completo
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
