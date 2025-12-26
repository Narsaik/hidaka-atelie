import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="container max-w-xl mx-auto text-center px-6 py-20">
        {/* 404 Number */}
        <p
          className="font-serif text-8xl md:text-9xl font-light mb-6"
          style={{ color: "#e5e5e5" }}
        >
          404
        </p>

        {/* Message */}
        <h1 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
          Página não encontrada
        </h1>
        <p className="text-[#737373] mb-8 leading-relaxed">
          A página que você está procurando não existe ou foi movida.
          <br />
          Volte para a página inicial e explore nosso ateliê.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn btn-primary inline-flex items-center justify-center"
          >
            Voltar ao Início
          </Link>
          <Link
            href="/contato"
            className="btn btn-secondary inline-flex items-center justify-center"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Decorative line */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-[#8b7355]" />
          <span className="text-xs uppercase tracking-widest text-[#8b7355]">
            HIDAKA
          </span>
          <div className="w-12 h-px bg-[#8b7355]" />
        </div>
      </div>
    </main>
  );
}
