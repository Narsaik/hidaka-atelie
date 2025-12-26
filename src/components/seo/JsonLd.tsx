export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://hidaka-atelie.vercel.app/#business",
        name: "HIDAKA Ateliê",
        alternateName: "Hidaka Haute Couture",
        description:
          "Estúdio de criação sob medida especializado em alta-costura personalizada com atendimento concierge em domicílio. Vestidos de noiva, festa e peças exclusivas.",
        url: "https://hidaka-atelie.vercel.app",
        telephone: "+55-11-93182-2442",
        email: "contato@hidaka-atelie.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -23.5505,
          longitude: -46.6333,
        },
        areaServed: [
          {
            "@type": "City",
            name: "São Paulo",
          },
          {
            "@type": "City",
            name: "Campinas",
          },
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: -23.5505,
            longitude: -46.6333,
          },
          geoRadius: "100000",
        },
        priceRange: "$$$",
        image: "https://hidaka-atelie.vercel.app/images/og-image.jpg",
        logo: "https://hidaka-atelie.vercel.app/images/logo.png",
        sameAs: ["https://instagram.com/kathhidaka"],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        founder: {
          "@type": "Person",
          name: "Kathlyn Hidaka",
          jobTitle: "Designer e Fundadora",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Alta-Costura",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Haute Couture Concierge",
                description:
                  "Serviço completo de alta-costura personalizada com atendimento em domicílio",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Vestido de Noiva Sob Medida",
                description:
                  "Criação exclusiva de vestidos de noiva personalizados",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Vestido de Festa",
                description:
                  "Peças exclusivas para formaturas, madrinhas e eventos especiais",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://hidaka-atelie.vercel.app/#website",
        url: "https://hidaka-atelie.vercel.app",
        name: "HIDAKA Ateliê",
        description: "Alta-costura personalizada no conforto da sua casa",
        publisher: {
          "@id": "https://hidaka-atelie.vercel.app/#business",
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hidaka-atelie.vercel.app/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: "https://hidaka-atelie.vercel.app",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
