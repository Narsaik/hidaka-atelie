import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | HIDAKA Ateliê",
  description: "Termos de Uso do HIDAKA Ateliê - Condições para utilização de nossos serviços.",
};

export default function TermosUsoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
            Legal
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] tracking-[-0.02em]">
            Termos de Uso
          </h1>
          <p className="text-[#737373] mt-4 text-sm">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="prose prose-neutral max-w-none">
            <p className="text-[#4a4a4a] leading-relaxed mb-8">
              Bem-vindo ao site da HIDAKA Ateliê. Ao acessar e utilizar este site,
              você concorda com os termos e condições descritos abaixo. Leia
              atentamente antes de continuar navegando.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Ao acessar este site, você confirma que leu, entendeu e concorda em
              cumprir estes Termos de Uso. Se você não concordar com qualquer parte
              destes termos, não utilize nosso site.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              2. Descrição dos Serviços
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              A HIDAKA Ateliê oferece serviços de alta-costura personalizada,
              incluindo criação sob medida, consultoria de estilo e atendimento
              concierge em domicílio. Os serviços são prestados mediante contrato
              específico firmado entre as partes.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              3. Uso do Site
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              Você concorda em utilizar este site apenas para fins legais e de
              acordo com estes termos. É proibido:
            </p>
            <ul className="list-disc pl-6 text-[#4a4a4a] space-y-2 mb-6">
              <li>Usar o site de forma que possa danificá-lo ou prejudicar sua disponibilidade</li>
              <li>Tentar obter acesso não autorizado a qualquer parte do site</li>
              <li>Utilizar robôs, scrapers ou outros meios automatizados</li>
              <li>Reproduzir, duplicar ou revender qualquer parte do site</li>
            </ul>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              4. Propriedade Intelectual
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Todo o conteúdo deste site, incluindo textos, imagens, designs,
              logotipos e marcas, são de propriedade exclusiva da HIDAKA Ateliê
              ou de seus licenciadores, protegidos pelas leis de propriedade
              intelectual. É proibida a reprodução sem autorização prévia por escrito.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              5. Orçamentos e Preços
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Os orçamentos fornecidos são válidos pelo prazo indicado no momento
              da proposta. Os preços podem variar de acordo com o tipo de peça,
              tecido escolhido, complexidade da modelagem e prazo de entrega.
              Valores finais são definidos após alinhamento do projeto.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              6. Contratação de Serviços
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              A contratação de nossos serviços está sujeita à assinatura de
              contrato específico, que conterá todas as condições, prazos,
              valores e obrigações das partes. O início da produção ocorre
              após a assinatura do contrato e pagamento do sinal acordado.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              7. Cancelamentos e Reembolsos
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              As condições de cancelamento e reembolso são estabelecidas no
              contrato individual de cada serviço. Em geral, cancelamentos
              após o início da produção podem resultar em retenção parcial
              ou total dos valores pagos, conforme estágio do trabalho.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              8. Confidencialidade
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Tratamos todas as informações de nossos clientes com absoluta
              confidencialidade. Detalhes sobre peças, eventos e identidade
              dos clientes não são divulgados sem autorização expressa.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              9. Limitação de Responsabilidade
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              A HIDAKA Ateliê não se responsabiliza por danos indiretos,
              incidentais ou consequentes decorrentes do uso ou impossibilidade
              de uso deste site. As informações são fornecidas "como estão",
              sem garantias de qualquer tipo.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              10. Links Externos
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Este site pode conter links para sites de terceiros. Não temos
              controle sobre o conteúdo desses sites e não nos responsabilizamos
              por suas práticas de privacidade ou conteúdo.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              11. Modificações
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Reservamo-nos o direito de modificar estes termos a qualquer momento.
              As alterações entram em vigor imediatamente após a publicação no site.
              O uso continuado do site após alterações constitui aceitação dos
              novos termos.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              12. Lei Aplicável
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Estes termos são regidos pelas leis da República Federativa do Brasil.
              Qualquer disputa será submetida ao foro da Comarca de São Paulo, SP,
              com exclusão de qualquer outro.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              13. Contato
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Para dúvidas sobre estes termos, entre em contato:
            </p>
            <ul className="list-none text-[#4a4a4a] space-y-2 mb-6">
              <li><strong>E-mail:</strong> contato@hidaka-atelie.com</li>
              <li><strong>WhatsApp:</strong> (11) 93182-2442</li>
            </ul>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
            <Link
              href="/"
              className="text-sm text-[#8b7355] hover:text-[#6b5a45] transition-colors"
            >
              &larr; Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
