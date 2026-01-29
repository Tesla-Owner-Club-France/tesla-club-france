import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { SITE_CONFIG } from "@/types";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Tesla",
    "Tesla Owners Club",
    "Tesla France",
    "Club Tesla",
    "Propriétaires Tesla",
    "Communauté Tesla",
    "Partenaires Tesla",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
