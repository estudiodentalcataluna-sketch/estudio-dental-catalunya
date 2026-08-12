import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import SeoSchema from "./components/SeoSchema";
import { AppointmentProvider } from "./components/AppointmentProvider";
import AppointmentModal from "./components/AppointmentModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.estudiodentalcatalunya.es"),

  title: {
    default:
      "Estudio Dental Catalunya | Clínica Dental en Sant Boi de Llobregat",
    template: "%s | Estudio Dental Catalunya",
  },

  description:
    "Clínica dental privada en Sant Boi de Llobregat especializada en implantología, ortodoncia, estética dental, endodoncia y odontología integral. Primera visita gratuita con radiografías y diagnóstico.",

  keywords: [
    "dentista Sant Boi",
    "clínica dental Sant Boi",
    "implantes dentales Sant Boi",
    "ortodoncia Sant Boi",
    "Invisalign Sant Boi",
    "estética dental",
    "endodoncia",
    "periodoncia",
    "odontología",
    "Neodent",
    "dentista Barcelona",
  ],

  authors: [
    {
      name: "Estudio Dental Catalunya",
      url: "https://www.estudiodentalcatalunya.es",
    },
  ],

  creator: "Estudio Dental Catalunya",
  publisher: "Estudio Dental Catalunya",

  alternates: {
    canonical: "https://www.estudiodentalcatalunya.es",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.estudiodentalcatalunya.es",
    siteName: "Estudio Dental Catalunya",
    title:
      "Estudio Dental Catalunya | Clínica Dental en Sant Boi de Llobregat",
    description:
      "Especialistas en implantología, ortodoncia, estética dental y odontología integral.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estudio Dental Catalunya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Estudio Dental Catalunya | Clínica Dental en Sant Boi de Llobregat",
    description:
      "Especialistas en implantología, ortodoncia, estética dental y odontología integral.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891b2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N23BCLM7XD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N23BCLM7XD');
          `}
        </Script>

        <AppointmentProvider>

          <SeoSchema />

          <AppointmentModal />

          {children}

        </AppointmentProvider>

      </body>
    </html>
  );
}