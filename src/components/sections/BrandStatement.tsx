"use client";

import { motion } from "framer-motion";

const values = [
  { title: "Exclusividade", subtitle: "Real" },
  { title: "Narrativa", subtitle: "Estética" },
  { title: "Intenção", subtitle: "& Rigor" },
  { title: "Autenticidade", subtitle: "Absoluta" },
];

export default function BrandStatement() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-serif text-2xl md:text-3xl lg:text-4xl mb-8"
              style={{ color: '#1a1a1a', lineHeight: 1.4 }}
            >
              &ldquo;É muito mais que costurar um vestido: é entregar uma experiência
              de luxo, personalizada e sem esforço para a cliente.&rdquo;
            </p>
          </motion.blockquote>

          {/* Divider */}
          <motion.div
            className="w-12 h-px mx-auto mb-8"
            style={{ backgroundColor: '#8b7355' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Supporting Text */}
          <motion.p
            className="text-base md:text-lg mb-16"
            style={{ color: '#737373', lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Processo silencioso, criterioso e contemporâneo — do primeiro traço
            ao acabamento final — garantindo uma experiência individual, elegante e discreta.
          </motion.p>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
            style={{ borderTop: '1px solid #e5e5e5' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {values.map((item, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-lg" style={{ color: '#1a1a1a' }}>
                  {item.title}
                </p>
                <p className="text-sm mt-1" style={{ color: '#8b7355' }}>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
