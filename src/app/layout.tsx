import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d4ed8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="min-h-screen bg-ink-50 text-ink-900 antialiased">
        <SkipLink />
        <Header />
        {children}
        <Footer />
        <AdSenseScript />
      </body>
    </html>
  );
}
