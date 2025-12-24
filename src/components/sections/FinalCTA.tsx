"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";

const tags = [
  "Mulheres que buscam exclusividade",
  "Quem valoriza experiência e cuidado",
  "Quem deseja peças únicas",
  "Quem prioriza conforto e privacidade",
  "Quem busca luxo elegante e discreto",
];

export default function FinalCTA() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs uppercase tracking-widest font-medium mb-4"
              style={{ color: '#8b7355', letterSpacing: '0.3em' }}
            >
              Para quem é
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 md:mb-10 px-4"
              style={{ color: '#1a1a1a', lineHeight: 1.4 }}
            >
              HIDAKA é para quem busca exclusividade real,
              narrativa estética própria e peças construídas
              com intenção, rigor e autenticidade.
            </h2>
          </motion.div>

          {/* Target Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 md:px-4 py-2 text-xs md:text-sm cursor-default transition-colors"
                style={{ backgroundColor: '#fafafa', color: '#4a4a4a' }}
                whileHover={{ backgroundColor: '#8b7355', color: '#ffffff', scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Box */}
          <motion.div
            className="p-8 md:p-10 lg:p-12"
            style={{ backgroundColor: '#fafafa' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
          >
            <h3
              className="font-serif text-xl md:text-2xl mb-3 md:mb-4"
              style={{ color: '#1a1a1a' }}
            >
              Pronta para criar sua peça exclusiva?
            </h3>
            <p
              className="text-sm md:text-base mb-6 md:mb-8 max-w-md mx-auto leading-relaxed"
              style={{ color: '#737373' }}
            >
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
        </div>
      </div>
    </section>
  );
}
