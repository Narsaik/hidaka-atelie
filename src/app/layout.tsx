import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SkipToContent from "@/components/accessibility/SkipToContent";
import CookieConsent from "@/components/ui/CookieConsent";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import JsonLd from "@/components/seo/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const baseUrl = "https://hidaka-atelie.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "HIDAKA Ateliê | Haute Couture Concierge",
    template: "%s | HIDAKA Ateliê",
  },
  description:
    "Alta-costura personalizada no conforto da sua casa. Criação sob medida exclusiva com atendimento concierge em domicílio. Vestidos de noiva, festa e peças autorais.",
  keywords: [
    "alta costura",
    "sob medida",
    "vestido de festa",
    "vestido de noiva",
    "ateliê",
    "costura personalizada",
    "concierge",
    "moda exclusiva",
    "São Paulo",
    "haute couture",
    "vestido madrinha",
    "formatura",
  ],
  authors: [{ name: "Kathlyn Hidaka", url: baseUrl }],
  creator: "HIDAKA Ateliê",
  publisher: "HIDAKA Ateliê",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "HIDAKA Ateliê",
    title: "HIDAKA Ateliê | Haute Couture Concierge",
    description:
      "Alta-costura personalizada no conforto da sua casa. Criação sob medida exclusiva.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HIDAKA Ateliê - Alta-costura personalizada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIDAKA Ateliê | Haute Couture Concierge",
    description:
      "Alta-costura personalizada no conforto da sua casa. Criação sob medida exclusiva.",
    images: ["/images/og-image.jpg"],
    creator: "@kathhidaka",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when ready
    // google: "your-google-verification-code",
  },
  category: "fashion",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable} antialiased`}
      >
        <GoogleAnalytics />
        <SkipToContent />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
