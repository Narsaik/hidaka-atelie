"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    <section className="section" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs uppercase tracking-widest font-medium mb-4"
              style={{ color: '#8b7355', letterSpacing: '0.3em' }}
            >
              O Diferencial
            </p>
            <h2
              className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight"
              style={{ color: '#ffffff' }}
            >
              Em vez de você ir até um ateliê,
              <br className="hidden sm:block" />
              <span style={{ color: '#b5a48c' }}> eu levo o ateliê até você.</span>
            </h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                className="p-6 md:p-8 transition-all duration-300 group"
                style={{ border: '1px solid #333333' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -4, borderColor: '#8b7355' }}
              >
                <span
                  className="text-xs uppercase tracking-widest font-medium"
                  style={{ color: '#8b7355', letterSpacing: '0.2em' }}
                >
                  {feature.number}
                </span>
                <h3
                  className="font-serif text-lg md:text-xl mt-3 md:mt-4 mb-2 md:mb-3 transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#a3a3a3' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/servico"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#b5a48c' }}
            >
              Ver todos os serviços
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
