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

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
}

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Brazilian phone format: accepts (XX) XXXXX-XXXX or variations
    const phoneRegex = /^[\d\s()+-]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const formatPhone = (value: string): string => {
    // Remove non-digits
    const digits = value.replace(/\D/g, "");

    // Format as (XX) XXXXX-XXXX
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Format phone number as user types
    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: FormErrors = {};

    if (stepNumber === 1) {
      if (formData.name.trim().length < 3) {
        newErrors.name = "Nome deve ter pelo menos 3 caracteres";
      }
      if (!validateEmail(formData.email)) {
        newErrors.email = "Digite um e-mail válido";
      }
    }

    if (stepNumber === 2) {
      if (!validatePhone(formData.phone)) {
        newErrors.phone = "Digite um telefone válido";
      }
      if (!formData.eventType) {
        newErrors.eventType = "Selecione o tipo de evento";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Save to database first
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: formData.eventDate || null,
          message: formData.message || null,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar solicitação");
      }

      // Format message for WhatsApp
      const message = `Olá! Gostaria de agendar uma consulta.

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Tipo de evento: ${formData.eventType}
Data do evento: ${formData.eventDate || "A definir"}
Mensagem: ${formData.message || "Sem mensagem adicional"}`;

      setIsSubmitted(true);

      // Open WhatsApp after a delay
      setTimeout(() => {
        window.open(getWhatsAppLink(message), "_blank");
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Erro ao enviar. Tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.length > 2 && validateEmail(formData.email);
      case 2:
        return validatePhone(formData.phone) && formData.eventType !== "";
      case 3:
        return true;
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
        role="status"
        aria-live="polite"
      >
        <motion.div
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#8b7355] flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">
          Mensagem enviada!
        </h3>
        <p className="text-[#525252] mb-6">
          Você será redirecionada para o WhatsApp para finalizar o contato com Jade.
        </p>
        <p className="text-sm text-[#737373]">
          Respondemos em até 24 horas úteis.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10">
      {/* Progress */}
      <div
        className="flex items-center justify-center gap-2 mb-10"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={3}
        aria-label={`Etapa ${step} de 3`}
      >
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                s === step
                  ? "bg-[#8b7355] text-white"
                  : s < step
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-[#e5e5e5] text-[#525252]"
              }`}
              aria-current={s === step ? "step" : undefined}
            >
              {s < step ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
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
                <p className="text-sm text-[#525252]">
                  Como podemos te chamar?
                </p>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-[#4a4a4a] mb-2"
                >
                  Nome completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.name ? "border-red-500" : "border-[#e5e5e5]"
                  } focus:border-[#8b7355] focus:outline-none transition-colors`}
                  placeholder="Seu nome"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  autoComplete="name"
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-[#4a4a4a] mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-[#e5e5e5]"
                  } focus:border-[#8b7355] focus:outline-none transition-colors`}
                  placeholder="seu@email.com"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  autoComplete="email"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
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
                <p className="text-sm text-[#525252]">
                  Conte-nos mais sobre sua ocasião especial
                </p>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-[#4a4a4a] mb-2"
                >
                  Telefone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.phone ? "border-red-500" : "border-[#e5e5e5]"
                  } focus:border-[#8b7355] focus:outline-none transition-colors`}
                  placeholder="(11) 99999-9999"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm text-[#4a4a4a] mb-2"
                >
                  Tipo de evento <span className="text-red-500">*</span>
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.eventType ? "border-red-500" : "border-[#e5e5e5]"
                  } focus:border-[#8b7355] focus:outline-none transition-colors bg-white`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.eventType}
                  aria-describedby={errors.eventType ? "eventType-error" : undefined}
                >
                  <option value="">Selecione...</option>
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <p id="eventType-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.eventType}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm text-[#4a4a4a] mb-2"
                >
                  Data do evento (aproximada)
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#8b7355] focus:outline-none transition-colors"
                  min={new Date().toISOString().split("T")[0]}
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
                <p className="text-sm text-[#525252]">
                  Descreva sua ideia ou inspiração
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-[#4a4a4a] mb-2"
                >
                  Mensagem <span className="text-[#737373]">(opcional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#8b7355] focus:outline-none transition-colors resize-none"
                  placeholder="Descreva sua ideia, referências, o tipo de peça que imagina..."
                  maxLength={1000}
                />
                <p className="text-xs text-[#737373] mt-1">
                  {formData.message.length}/1000 caracteres
                </p>
              </div>

              {/* Summary */}
              <div className="bg-[#fafafa] p-4 text-sm" role="region" aria-label="Resumo do formulário">
                <p className="text-[#525252] mb-2">Resumo:</p>
                <p className="text-[#1a1a1a]">
                  <strong>{formData.name}</strong> • {formData.eventType}
                  {formData.eventDate && ` • ${new Date(formData.eventDate).toLocaleDateString("pt-BR")}`}
                </p>
              </div>

              {/* Error Display */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded" role="alert">
                  <p className="text-sm">{submitError}</p>
                </div>
              )}
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
              aria-disabled={!isStepValid()}
            >
              Continuar
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Enviar Solicitação"
              )}
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
}
