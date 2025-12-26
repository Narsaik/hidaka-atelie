"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              maxWidth: "400px",
              textAlign: "center",
              padding: "40px 24px",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 24px",
                borderRadius: "50%",
                backgroundColor: "#fee2e2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            {/* Message */}
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "400",
                color: "#1a1a1a",
                marginBottom: "16px",
              }}
            >
              Erro Crítico
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "#737373",
                marginBottom: "32px",
                lineHeight: "1.6",
              }}
            >
              Ocorreu um erro crítico no sistema.
              <br />
              Por favor, recarregue a página.
            </p>

            {/* Button */}
            <button
              onClick={() => reset()}
              style={{
                padding: "14px 28px",
                fontSize: "14px",
                fontWeight: "500",
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Recarregar Página
            </button>

            {/* Error code */}
            {error.digest && (
              <p
                style={{
                  marginTop: "32px",
                  fontSize: "12px",
                  color: "#a3a3a3",
                }}
              >
                Código: {error.digest}
              </p>
            )}
          </div>
        </main>
      </body>
    </html>
  );
}
