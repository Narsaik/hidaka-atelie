"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-4">
              Para quem é
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-[#1a1a1a] leading-[1.4] mb-8 md:mb-10 px-4">
              HIDAKA é para quem busca exclusividade real,
              narrativa estética própria e peças construídas
              com intenção, rigor e autenticidade.
            </h2>
          </ScrollReveal>

          {/* Target Tags */}
          <StaggerContainer className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12 px-4" staggerDelay={0.05}>
            {[
              "Mulheres que buscam exclusividade",
              "Quem valoriza experiência e cuidado",
              "Quem deseja peças únicas",
              "Quem prioriza conforto e privacidade",
              "Quem busca luxo elegante e discreto",
            ].map((tag, index) => (
              <StaggerItem key={index}>
                <motion.span
                  className="px-3 md:px-4 py-2 bg-[#fafafa] text-[#4a4a4a] text-xs md:text-sm hover:bg-[#8b7355] hover:text-white transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Box */}
          <ScrollReveal delay={0.3}>
            <motion.div
              className="bg-[#fafafa] p-8 md:p-10 lg:p-12"
              whileHover={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-3 md:mb-4">
                Pronta para criar sua peça exclusiva?
              </h3>
              <p className="text-[#737373] text-sm md:text-base mb-6 md:mb-8 max-w-md mx-auto leading-relaxed">
                Fale com Jade pelo WhatsApp e envie sua ideia, data do evento,
                seu bairro/cidade e o tipo de peça que imagina.
              </p>
              <motion.a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Falar com Jade
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
