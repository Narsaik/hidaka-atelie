export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative">
          <h1
            className="font-serif text-3xl md:text-4xl animate-pulse"
            style={{ color: "#1a1a1a", letterSpacing: "0.2em" }}
          >
            HIDAKA
          </h1>

          {/* Animated underline */}
          <div className="mt-4 flex justify-center">
            <div
              className="h-px w-16 animate-pulse"
              style={{ backgroundColor: "#8b7355" }}
            />
          </div>
        </div>

        {/* Loading dots */}
        <div className="mt-8 flex justify-center gap-2">
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#8b7355", animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#8b7355", animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#8b7355", animationDelay: "300ms" }}
          />
        </div>

        <p className="mt-6 text-sm text-[#737373]">Carregando...</p>
      </div>
    </div>
  );
}
