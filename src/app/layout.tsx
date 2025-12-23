import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

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

export const metadata: Metadata = {
  title: "HIDAKA Ateliê | Haute Couture Concierge",
  description: "Alta-costura personalizada no conforto da sua casa. Criação sob medida exclusiva com atendimento concierge em domicílio.",
  keywords: ["alta costura", "sob medida", "vestido de festa", "ateliê", "costura personalizada", "concierge", "moda exclusiva"],
  authors: [{ name: "Kathlyn Hidaka" }],
  openGraph: {
    title: "HIDAKA Ateliê | Haute Couture Concierge",
    description: "Alta-costura personalizada no conforto da sua casa.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
