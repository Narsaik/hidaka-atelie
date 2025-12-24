"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENT_TYPES, getWhatsAppLink } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    // For now, we'll redirect to WhatsApp with the form data
    const message = `Olá! Gostaria de agendar uma consulta.

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Tipo de evento: ${formData.eventType}
Data do evento: ${formData.eventDate}
Mensagem: ${formData.message}`;

    setIsSubmitted(true);

    // Open WhatsApp after a delay
    setTimeout(() => {
      window.open(getWhatsAppLink(message), "_blank");
    }, 2000);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.length > 2 && formData.email.includes("@");
      case 2:
        return formData.phone.length > 8 && formData.eventType !== "";
      case 3:
        return true; // Optional fields
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#8b7355] flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">
          Mensagem enviada!
        </h3>
        <p className="text-[#737373] mb-6">
          Você será redirecionada para o WhatsApp para finalizar o contato com Jade.
        </p>
        <p className="text-sm text-[#a3a3a3]">
          Respondemos em até 24 horas úteis.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10">
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                s === step
                  ? "bg-[#8b7355] text-white"
                  : s < step
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-[#e5e5e5] text-[#737373]"
              }`}
            >
              {s < step ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            {s < 3 && (
              <div
                className={`w-12 md:w-20 h-px mx-2 ${
                  s < step ? "bg-[#1a1a1a]" : "bg-[#e5e5e5]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  Vamos começar
                </h3>
                <p className="text-sm text-[#737373]">
                  Como podemos te chamar?
                </p>
              </div>

              <div>
                <label className="block text-sm text-[#4a4a4a] mb-2">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#8b7355] focus:outline-none transition-colors"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-[#4a4a4a] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#8b7355] focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  Sobre o evento
                </h3>
                <p className="text-sm text-[#737373]">
                  Conte-nos mais sobre sua ocasião especial
                </p>
              </div>

              <div>
                <label className="block text-sm text-[#4a4a4a] mb-2">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#8b7355] focus:outline-none transition-colors"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-[#4a4a4a] mb-2">Tipo de evento</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#8b7355] focus:outline-none transition-colors bg-white"
                  required
                >
                  <option value="">Selecione...</option>
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#4a4a4a] mb-2">Data do evento (aproximada)</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#8b7355] focus:outline-none transition-colors"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  Sua visão
                </h3>
                <p className="text-sm text-[#737373]">
                  Descreva sua ideia ou inspiração
                </p>
              </div>

              <div>
                <label className="block text-sm text-[#4a4a4a] mb-2">
                  Mensagem <span className="text-[#a3a3a3]">(opcional)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#8b7355] focus:outline-none transition-colors resize-none"
                  placeholder="Descreva sua ideia, referências, o tipo de peça que imagina..."
                />
              </div>

              {/* Summary */}
              <div className="bg-[#fafafa] p-4 text-sm">
                <p className="text-[#737373] mb-2">Resumo:</p>
                <p className="text-[#1a1a1a]">
                  <strong>{formData.name}</strong> • {formData.eventType}
                  {formData.eventDate && ` • ${new Date(formData.eventDate).toLocaleDateString("pt-BR")}`}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 text-sm text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
            >
              Voltar
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <motion.button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={isStepValid() ? { scale: 1.02 } : {}}
              whileTap={isStepValid() ? { scale: 0.98 } : {}}
            >
              Continuar
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Solicitação
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
}
