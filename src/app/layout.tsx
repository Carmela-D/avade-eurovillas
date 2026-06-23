import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://avade.org"
  ),
  title: {
    default: "Adelante Eurovillas — Plataforma Vecinal de Eurovillas",
    template: "%s | Adelante Eurovillas",
  },
  description:
    "Más de 58 años pagando doble por servicios municipales que ya están cubiertos por el IBI. Los vecinos de Eurovillas (Nuevo Baztán y Villar del Olmo) nos organizamos para exigir la recepción municipal de la urbanización y el fin de la EUCE.",
  keywords: [
    "Eurovillas",
    "EUCE",
    "Nuevo Baztán",
    "Villar del Olmo",
    "urbanización",
    "vecinos",
    "plataforma vecinal",
    "AVADE",
    "recepción municipal",
    "cuotas EUCE",
  ],
  authors: [{ name: "Plataforma Adelante Eurovillas" }],
  creator: "Adelante Eurovillas",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://avade.org",
    siteName: "Adelante Eurovillas",
    title: "Adelante Eurovillas — Plataforma Vecinal de Eurovillas",
    description:
      "58 años de doble imposición. Los vecinos de Eurovillas nos organizamos para exigir lo que nos corresponde.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adelante Eurovillas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adelante Eurovillas",
    description:
      "58 años de doble imposición. Los vecinos de Eurovillas nos organizamos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Adelante Eurovillas",
  alternateName: "AVADE",
  description:
    "Plataforma vecinal que exige la recepción municipal de la urbanización Eurovillas y la disolución de la EUCE.",
  url: "https://avade.org",
  email: "informacion@avade.org",
  foundingDate: "2025",
  areaServed: {
    "@type": "Place",
    name: "Eurovillas, Nuevo Baztán y Villar del Olmo, Madrid",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
