"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import ConsultationForm from "@/components/ui/ConsultationForm";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
              Contato
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-[-0.02em]">
              Vamos criar juntas?
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[#737373] mt-6 max-w-xl mx-auto leading-relaxed">
              Preencha o formulário abaixo ou envie uma mensagem no WhatsApp para falar com
              <strong className="text-[#1a1a1a]"> Jade</strong>, minha assistente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Column Layout: Form + Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Consultation Form */}
            <ScrollReveal delay={0.1}>
              <div className="order-2 lg:order-1">
                <ConsultationForm />
              </div>
            </ScrollReveal>

            {/* Info Column */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* What to send */}
              <ScrollReveal delay={0.2}>
                <motion.div
                  className="bg-[#fafafa] p-8"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-6">
                    O que enviar
                  </p>
                  <ul className="space-y-4">
                    {CONTACT_INFO.map((item, index) => (
                      <li key={index} className="flex items-center gap-4 text-[#1a1a1a]">
                        <span className="w-2 h-2 bg-[#8b7355] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>

              {/* What you receive */}
              <ScrollReveal delay={0.3}>
                <motion.div
                  className="bg-[#fafafa] p-8"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-6">
                    Você recebe
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Disponibilidade",
                      "Valores iniciais",
                      "Próximos passos",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-4 text-[#1a1a1a]">
                        <span className="w-2 h-2 bg-[#8b7355] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>

              {/* WhatsApp CTA */}
              <ScrollReveal delay={0.4}>
                <div className="text-center pt-4">
                  <p className="text-sm text-[#737373] mb-4">Ou fale diretamente pelo WhatsApp</p>
                  <motion.a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center gap-3"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Falar com Jade
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other Contacts */}
      <section className="section bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {/* Instagram */}
            <StaggerItem>
              <motion.div
                className="bg-white p-8 h-full"
                whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">Instagram</h3>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#4a4a4a] hover:text-[#E4405F] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  {SITE_CONFIG.instagram}
                </a>
                <p className="text-[#737373] text-sm mt-3">
                  Acompanhe o trabalho e bastidores.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Response Time */}
            <StaggerItem>
              <motion.div
                className="bg-white p-8 h-full"
                whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">Tempo de Resposta</h3>
                <p className="text-[#4a4a4a]">
                  Respondemos em até 24 horas úteis.
                </p>
                <p className="text-[#737373] text-sm mt-3">
                  Segunda a sexta, das 9h às 18h.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
