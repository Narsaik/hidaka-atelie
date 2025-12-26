"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="container max-w-xl mx-auto text-center px-6 py-20">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#fee2e2] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#dc2626]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
          Algo deu errado
        </h1>
        <p className="text-[#737373] mb-8 leading-relaxed">
          Ocorreu um erro inesperado. Por favor, tente novamente.
          <br />
          Se o problema persistir, entre em contato conosco.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary inline-flex items-center justify-center"
          >
            Tentar Novamente
          </button>
          <a
            href="/"
            className="btn btn-secondary inline-flex items-center justify-center"
          >
            Voltar ao Início
          </a>
        </div>

        {/* Error code for debugging */}
        {error.digest && (
          <p className="mt-8 text-xs text-[#a3a3a3]">
            Código do erro: {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}
