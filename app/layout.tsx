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
  metadataBase: new URL("https://estudiodentalcatalunya.es"),

  applicationName: "Estudio Dental Catalunya",

  title: {
    default:
      "Clínica Dental en Sant Boi de Llobregat | Estudio Dental Catalunya",
    template: "%s | Estudio Dental Catalunya",
  },

  description:
    "Clínica dental en Sant Boi de Llobregat especializada en implantes dentales, ortodoncia, ortodoncia invisible, estética dental y odontología integral. Primera visita gratuita con radiografías y diagnóstico.",

  keywords: [
    "dentista Sant Boi",
    "clínica dental Sant Boi",
    "implantes dentales Sant Boi",
    "ortodoncia Sant Boi",
    "ortodoncia invisible Sant Boi",
    "Invisalign Sant Boi",
    "estética dental Sant Boi",
    "carillas dentales Sant Boi",
    "blanqueamiento dental Sant Boi",
    "endodoncia Sant Boi",
    "periodoncia Sant Boi",
    "odontología general Sant Boi",
    "odontopediatría Sant Boi",
    "dentista Barcelona",
  ],

  authors: [
    {
      name: "Estudio Dental Catalunya",
      url: "https://estudiodentalcatalunya.es",
    },
  ],

  creator: "Estudio Dental Catalunya",
  publisher: "Estudio Dental Catalunya",

  category: "Health",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "https://estudiodentalcatalunya.es",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

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
    url: "https://estudiodentalcatalunya.es",
    siteName: "Estudio Dental Catalunya",

    title:
      "Clínica Dental en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Clínica dental en Sant Boi especializada en implantes dentales, ortodoncia, estética dental y odontología integral. Primera visita gratuita con radiografías y diagnóstico.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estudio Dental Catalunya - Clínica Dental en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Clínica Dental en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Clínica dental en Sant Boi especializada en implantes, ortodoncia, estética dental y odontología integral.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],

    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891b2",
  colorScheme: "light",
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

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-N23BCLM7XD', {
              anonymize_ip: true,
              page_path: window.location.pathname,
            });
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