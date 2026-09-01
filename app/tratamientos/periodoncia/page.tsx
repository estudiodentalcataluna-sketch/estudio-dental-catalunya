import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { periodonticsData } from "./data";

const canonicalUrl =
  "https://estudiodentalcatalunya.es/tratamientos/periodoncia";

const heroImage =
  "/images/tratamientos/periodoncia/hero-periodoncia.jpg";

export const metadata: Metadata = {
  title:
    "Periodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en periodoncia en Sant Boi de Llobregat. Tratamos la gingivitis y la periodontitis para cuidar la salud de tus encías y conservar tus dientes.",

  keywords: [
    "periodoncia Sant Boi",
    "periodoncista Sant Boi",
    "gingivitis Sant Boi",
    "periodontitis Sant Boi",
    "tratamiento encías Sant Boi",
    "sangrado de encías",
    "salud de las encías",
    "enfermedad periodontal",
    "dentista Sant Boi",
    "clínica dental Sant Boi",
    "periodoncia Barcelona",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Periodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Tratamientos personalizados para prevenir y tratar la gingivitis y la periodontitis, manteniendo unas encías sanas y una sonrisa saludable.",

    url: canonicalUrl,

    type: "article",

    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "Periodoncia en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Periodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Tratamientos personalizados para cuidar las encías y tratar la gingivitis y la periodontitis.",

    images: [heroImage],
  },
};

export default function PeriodonticsPage() {
  return (
    <main>
      <TreatmentHero {...periodonticsData.hero} />

      <TreatmentIntro {...periodonticsData.intro} />

      <TreatmentBenefits {...periodonticsData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Comenzamos con un estudio periodontal completo para valorar el estado de las encías, diagnosticar la enfermedad y planificar el tratamiento más adecuado para detener su evolución y preservar la salud bucodental."
      />

      <TreatmentTechnology {...periodonticsData.technology} />

      <TreatmentIndications {...periodonticsData.indications} />

      <TreatmentFAQ {...periodonticsData.faq} />

      <TreatmentCTA {...periodonticsData.cta} />
    </main>
  );
}