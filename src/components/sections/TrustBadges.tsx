"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Peças Criadas" },
  { value: "50+", label: "Clientes Satisfeitas" },
  { value: "5", label: "Anos de Experiência" },
  { value: "8", label: "Cidades Atendidas" },
];

const badges = [
  { icon: "shield", title: "100% Privacidade", description: "Sigilo absoluto garantido" },
  { icon: "star", title: "Atendimento Exclusivo", description: "Uma cliente por vez" },
  { icon: "heart", title: "Feito à Mão", description: "Artesanato brasileiro" },
  { icon: "home", title: "Conforto", description: "Atendimento em domicílio" },
];

export default function TrustBadges() {
  return (
    <section
      className="section"
      style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className="font-serif text-4xl md:text-5xl mb-2"
                  style={{ color: '#1a1a1a' }}
                >
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: '#737373' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px mb-16" style={{ backgroundColor: '#e5e5e5' }} />

          {/* Trust Badges */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {badges.map((badge, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-14 h-14 mx-auto mb-4 flex items-center justify-center"
                  style={{ color: '#8b7355' }}
                >
                  {badge.icon === "shield" && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {badge.icon === "star" && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )}
                  {badge.icon === "heart" && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                  {badge.icon === "home" && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                </div>
                <h3 className="font-serif text-lg mb-1" style={{ color: '#1a1a1a' }}>
                  {badge.title}
                </h3>
                <p className="text-sm" style={{ color: '#737373' }}>
                  {badge.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
