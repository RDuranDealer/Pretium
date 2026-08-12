import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site, brandColors } from "@/lib/site";

/**
 * Montserrat es la tipografía del logotipo corporativo.
 * Va autoalojada (archivo en src/app/fonts/) en vez de cargarse desde Google:
 * carga más rápido, no depende de un tercero y cumple con GDPR.
 */
const montserrat = localFont({
  src: "./fonts/Montserrat.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-montserrat",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: brandColors.azul,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Consultoría SAP HCM y SuccessFactors`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "SAP HCM",
    "SuccessFactors",
    "consultoría SAP Chile",
    "nómina SAP",
    "payroll SAP",
    "S/4HANA",
    "recursos humanos SAP",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Consultoría SAP HCM y SuccessFactors`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Consultoría SAP HCM`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  areaServed: "CL",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Nueva Providencia 1945, Oficina 502",
    addressLocality: "Providencia",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  sameAs: [site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL" className={montserrat.variable}>
      <body className={montserrat.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
