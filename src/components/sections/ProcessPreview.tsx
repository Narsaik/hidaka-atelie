"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Questionário", description: "Envie sua ideia, referências e data do evento" },
  { number: "02", title: "Reunião", description: "Alinhamos design, tecidos e orçamento" },
  { number: "03", title: "Criação", description: "Desenho exclusivo e modelagem sob medida" },
  { number: "04", title: "Provas", description: "Ajustes até a perfeição absoluta" },
  { number: "05", title: "Entrega", description: "Sua peça exclusiva está pronta" },
];

export default function ProcessPreview() {
  return (
    <section className="section" style={{ backgroundColor: '#fafafa' }}>
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
              Processo
            </p>
            <h2
              className="font-serif text-2xl md:text-3xl lg:text-4xl"
              style={{ color: '#1a1a1a' }}
            >
              Do conceito ao caimento final
            </h2>
            <p
              className="text-sm md:text-base mt-4 max-w-lg mx-auto leading-relaxed"
              style={{ color: '#737373' }}
            >
              Cada etapa é conduzida com direção estética e precisão técnica.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 left-1/2 w-full h-px"
                    style={{ backgroundColor: '#e5e5e5' }}
                  />
                )}

                {/* Step Circle */}
                <motion.div
                  className="relative z-10 w-10 h-10 md:w-12 md:h-12 mx-auto flex items-center justify-center mb-3 md:mb-4 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e5e5',
                  }}
                  whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{ color: '#8b7355' }}
                  >
                    {step.number}
                  </span>
                </motion.div>

                {/* Content */}
                <h3
                  className="font-serif text-sm md:text-base mb-1 transition-colors"
                  style={{ color: '#1a1a1a' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed px-1"
                  style={{ color: '#737373' }}
                >
                  {step.description}
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
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/processo"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#1a1a1a' }}
            >
              Ver processo completo
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
