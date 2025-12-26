import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | HIDAKA Ateliê",
  description: "Política de Privacidade do HIDAKA Ateliê - Saiba como protegemos seus dados pessoais.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#fafafa]">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] font-medium mb-6">
            Legal
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] tracking-[-0.02em]">
            Política de Privacidade
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
              A HIDAKA Ateliê está comprometida com a proteção da sua privacidade.
              Esta Política de Privacidade explica como coletamos, usamos, armazenamos
              e protegemos suas informações pessoais, em conformidade com a Lei Geral
              de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              1. Dados que Coletamos
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              Coletamos os seguintes dados pessoais quando você interage conosco:
            </p>
            <ul className="list-disc pl-6 text-[#4a4a4a] space-y-2 mb-6">
              <li><strong>Dados de identificação:</strong> Nome completo</li>
              <li><strong>Dados de contato:</strong> E-mail, telefone/WhatsApp</li>
              <li><strong>Dados do evento:</strong> Tipo de evento, data aproximada</li>
              <li><strong>Dados de navegação:</strong> Cookies, endereço IP, páginas visitadas</li>
            </ul>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              2. Finalidade do Tratamento
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              Utilizamos seus dados para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 text-[#4a4a4a] space-y-2 mb-6">
              <li>Responder às suas solicitações de orçamento e consulta</li>
              <li>Fornecer nossos serviços de alta-costura personalizada</li>
              <li>Enviar comunicações sobre seus pedidos</li>
              <li>Enviar newsletter (caso você tenha optado por receber)</li>
              <li>Melhorar nosso site e experiência do usuário</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              3. Base Legal
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              O tratamento dos seus dados pessoais é realizado com base nas seguintes
              hipóteses legais previstas na LGPD:
            </p>
            <ul className="list-disc pl-6 text-[#4a4a4a] space-y-2 mb-6">
              <li><strong>Consentimento:</strong> Para envio de newsletter e comunicações de marketing</li>
              <li><strong>Execução de contrato:</strong> Para prestação de nossos serviços</li>
              <li><strong>Legítimo interesse:</strong> Para melhorar nossos serviços e site</li>
            </ul>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              4. Compartilhamento de Dados
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros
              para fins de marketing. Podemos compartilhar dados apenas com:
            </p>
            <ul className="list-disc pl-6 text-[#4a4a4a] space-y-2 mb-6">
              <li>Prestadores de serviços essenciais (hospedagem, e-mail)</li>
              <li>Autoridades competentes, quando exigido por lei</li>
            </ul>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              5. Cookies
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Utilizamos cookies para melhorar sua experiência em nosso site.
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo.
              Você pode configurar seu navegador para recusar cookies, mas isso pode
              afetar algumas funcionalidades do site.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              6. Seus Direitos
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              De acordo com a LGPD, você tem os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 text-[#4a4a4a] space-y-2 mb-6">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos seus dados</li>
              <li>Correção de dados incompletos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados</li>
              <li>Portabilidade dos dados</li>
              <li>Revogação do consentimento</li>
            </ul>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              7. Segurança dos Dados
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Implementamos medidas técnicas e organizacionais adequadas para proteger
              seus dados pessoais contra acesso não autorizado, perda, destruição ou
              alteração. Nosso site utiliza certificado SSL para criptografar as
              comunicações.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              8. Retenção de Dados
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as
              finalidades descritas nesta política, ou conforme exigido por lei.
              Dados de clientes são mantidos por 5 anos após o término do serviço.
            </p>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              9. Contato
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política,
              entre em contato conosco:
            </p>
            <ul className="list-none text-[#4a4a4a] space-y-2 mb-6">
              <li><strong>E-mail:</strong> contato@hidaka-atelie.com</li>
              <li><strong>WhatsApp:</strong> (11) 93182-2442</li>
            </ul>

            <h2 className="font-serif text-xl text-[#1a1a1a] mt-10 mb-4">
              10. Alterações
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-6">
              Esta política pode ser atualizada periodicamente. Recomendamos que
              você a revise regularmente. Alterações significativas serão comunicadas
              por e-mail ou por aviso em nosso site.
            </p>
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
