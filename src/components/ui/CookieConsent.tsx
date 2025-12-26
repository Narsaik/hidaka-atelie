"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "hidaka-cookie-consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
    // Enable analytics if needed
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
    // Disable analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="container max-w-4xl mx-auto">
            <div className="bg-white shadow-xl border border-[#e5e5e5] p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Content */}
                <div className="flex-1">
                  <h2
                    id="cookie-consent-title"
                    className="font-serif text-lg text-[#1a1a1a] mb-2"
                  >
                    Utilizamos cookies
                  </h2>
                  <p
                    id="cookie-consent-description"
                    className="text-sm text-[#737373] leading-relaxed"
                  >
                    Usamos cookies para melhorar sua experiência em nosso site e
                    analisar o tráfego. Ao clicar em &ldquo;Aceitar&rdquo;, você concorda
                    com o uso de cookies conforme nossa{" "}
                    <Link
                      href="/politica-privacidade"
                      className="text-[#8b7355] underline hover:text-[#6b5a45]"
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleDecline}
                    className="px-6 py-3 text-sm font-medium text-[#4a4a4a] border border-[#e5e5e5] hover:bg-[#fafafa] transition-colors"
                    aria-label="Recusar cookies"
                  >
                    Recusar
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-3 text-sm font-medium bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors"
                    aria-label="Aceitar cookies"
                  >
                    Aceitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, string>
    ) => void;
  }
}
