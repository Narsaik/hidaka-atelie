"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#fafafa' }}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center py-24 md:py-32">
          {/* Overline */}
          <motion.p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: '#8b7355', letterSpacing: '0.25em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Haute Couture Concierge
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{ color: '#1a1a1a', letterSpacing: '0.1em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            HIDAKA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-serif text-xl md:text-2xl mb-6"
            style={{ color: '#4a4a4a' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Estúdio de criação sob medida que transforma
            <br className="hidden md:block" />
            peças em projetos autorais.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="w-16 h-px mx-auto my-8"
            style={{ backgroundColor: '#8b7355' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Description */}
          <motion.p
            className="text-base md:text-lg mb-10 max-w-xl mx-auto"
            style={{ color: '#737373', lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Alta-costura personalizada no conforto da sua casa.
            Cada peça nasce do zero, feita exclusivamente para você.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Agendar Consulta
            </a>
            <Link href="/servico" className="btn btn-secondary">
              Conhecer o Serviço
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#a3a3a3' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-current opacity-50" />
      </motion.div>
    </section>
  );
}
