// HIDAKA Ateliê - Site Constants

export const SITE_CONFIG = {
  name: "HIDAKA",
  tagline: "Haute Couture Concierge",
  description: "Estúdio de criação sob medida",
  url: "https://hidaka-atelie.com",
  email: "contato@hidaka-atelie.com",
  instagram: "@hidaka.atelie",
  instagramUrl: "https://instagram.com/hidaka.atelie",
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Gostaria de saber mais sobre o Haute Couture Concierge.",
};

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servico", label: "Serviço" },
  { href: "/processo", label: "Processo" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

// What's included in the service - from original document
export const WHATS_INCLUDED = [
  "Visita presencial na sua casa (consultoria + criação + medidas)",
  "Curadoria de tecidos e materiais",
  "Desenho exclusivo da peça",
  "Modelagem sob medida",
  "Costura, ajustes e finalização",
  "Acompanhamento contínuo até a entrega final",
  "Entrega premium + acabamento de alta-costura",
];

// Services offered - from original document
export const SERVICES = [
  "Criação sob medida totalmente personalizada",
  "Atendimento VIP, no horário da cliente",
  "Assessoria completa: tecido, modelagem, cartela de cores, mood, referências",
  "Provas presenciais ou delivery de provas",
  "Styling do look (acessórios, cabelo, maquiagem)",
  "Gestão do prazo – garantia de que tudo vai dar certo",
  "Acompanhamento do dia do evento, se necessário",
  "Consultoria estética (proporções, cortes, o que valoriza o corpo)",
  "Confidencialidade absoluta",
];

// Process steps - from original document
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Questionário Inicial",
    description: "O início da nossa jornada é simples e essencial. Você recebe, pelo WhatsApp, um questionário com perguntas importantes sobre estilo, evento, referências e desejos. Essas informações serão a base para entendermos exatamente o que você procura e começarmos a criar o seu projeto exclusivo.",
  },
  {
    number: "02",
    title: "Processo Criativo",
    description: "Com todos os detalhes em mãos, sua ideia se transforma em arte. É aqui que nasce o croqui: desenhado e assinado especialmente para você, refletindo sua essência, personalidade e o momento que deseja eternizar.",
  },
  {
    number: "03",
    title: "Primeira Reunião",
    subtitle: "Online ou Presencial",
    description: "Com o croqui pronto, realizamos nossa primeira conversa por vídeo ou presencial. Neste encontro alinhamos: design final, tecidos e materiais, paleta de cores, orçamento, prazos e detalhes especiais. Esse é o momento em que ajustamos tudo para garantir que cada detalhe tenha significado.",
  },
  {
    number: "04",
    title: "Contrato",
    description: "Após definirmos todo o projeto, formalizamos nossa parceria. Você recebe seu contrato digital ou presencialmente para garantir que cada etapa esteja clara, registrada e segura.",
  },
  {
    number: "05",
    title: "Pagamento e Produção",
    description: "Com tudo alinhado, realizamos o pagamento da entrada para iniciar a produção. Formas disponíveis: PIX ou Crédito. A partir daí, começam as provas, ajustes e acompanhamento contínuo até a entrega final.",
  },
];

// Target audience - from original document
export const TARGET_AUDIENCE = [
  "Para quem quer exclusividade real",
  "Para quem valoriza experiência e cuidado",
  "Para quem deseja uma peça única, feita só para ela",
  "Para quem quer conforto e privacidade",
  "Para quem busca luxo de forma elegante e discreta",
];

// Differentials - from original document
export const DIFFERENTIALS = [
  {
    title: "Você não precisa se deslocar",
    description: "O ateliê vai até você. Levo tecidos, materiais, referências e ferramentas até sua casa.",
  },
  {
    title: "O design nasce no seu universo",
    description: "A peça é criada no seu espaço, observando como você se movimenta, sua energia e seu ambiente.",
  },
  {
    title: "Feita para você",
    description: "A peça é feita para o seu corpo, sua energia e sua história. Não é uma adaptação, é uma criação única.",
  },
  {
    title: "Luxo baseado em cuidado",
    description: "É luxo baseado em cuidado, não ostentação. Processo íntimo, artístico e exclusivo.",
  },
];

// Pricing factors - from original document
export const PRICING_FACTORS = [
  "Tipo de peça",
  "Tecido escolhido",
  "Complexidade da modelagem",
  "Prazo de entrega",
];

// FAQ - from original document
export const FAQ = [
  {
    question: "Quanto tempo leva?",
    answer: "Depende da complexidade da peça, mas em geral: 1ª visita para criação + medidas, 2ª visita para prova da peça piloto. Depois, a quantidade de visitas depende de como evolui de acordo com as provas que fazemos. E por último, a entrega final.",
  },
  {
    question: "Como funcionam os valores?",
    answer: "Os valores variam conforme: tipo de peça, tecido escolhido, complexidade da modelagem e prazo de entrega. Eu sempre preparo um orçamento claro e personalizado após entender o que você deseja.",
  },
  {
    question: "Como agendar?",
    answer: "Basta enviar uma mensagem no WhatsApp para falar com Jade, minha assistente. Envie: sua ideia ou referência, data do evento, seu bairro/cidade, e o tipo de peça que imagina. Retornaremos com disponibilidade, valores iniciais e próximos passos.",
  },
];

// What to send when contacting - from original document
export const CONTACT_INFO = [
  "Sua ideia ou referência",
  "Data do evento",
  "Seu bairro/cidade",
  "O tipo de peça que imagina",
];

export const getWhatsAppLink = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
};
