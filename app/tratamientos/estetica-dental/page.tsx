import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { aestheticData } from "./data";

export const metadata: Metadata = {
  title:
    "Estética Dental en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en estética dental en Sant Boi de Llobregat. Mejora la armonía de tu sonrisa mediante tratamientos personalizados como diseño de sonrisa, carillas dentales y blanqueamiento dental. Primera visita gratuita con radiografías.",

  keywords: [
    "estética dental Sant Boi",
    "diseño de sonrisa",
    "sonrisa perfecta",
    "carillas dentales",
    "blanqueamiento dental",
    "dentista estético",
    "mejorar sonrisa",
    "estética dental Barcelona",
  ],

  alternates: {
    canonical:
      "https://estudiodentalcatalunya.es/tratamientos/estetica-dental",
  },

  openGraph: {
    title:
      "Estética Dental en Sant Boi de Llobregat",

    description:
      "Diseñamos sonrisas naturales mediante tratamientos personalizados de estética dental adaptados a cada paciente.",

    url:
      "https://estudiodentalcatalunya.es/tratamientos/estetica-dental",

    type: "website",

    images: [
      {
        url:
          "/images/tratamientos/estetica-dental/hero-estetica-dental.jpg",
        width: 1200,
        height: 630,
        alt: "Estética Dental en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Estética Dental | Estudio Dental Catalunya",

    description:
      "Especialistas en tratamientos de estética dental en Sant Boi de Llobregat.",

    images: [
      "/images/tratamientos/estetica-dental/hero-estetica-dental.jpg",
    ],
  },
};

export default function AestheticPage() {
  return (
    <main>

      <TreatmentHero {...aestheticData.hero} />

      <TreatmentIntro {...aestheticData.intro} />

      <TreatmentBenefits {...aestheticData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Analizamos tu sonrisa, tus rasgos faciales y tus expectativas para diseñar un tratamiento completamente personalizado que consiga un resultado natural, armónico y adaptado a ti."
      />

      <TreatmentTechnology {...aestheticData.technology} />

      <TreatmentIndications {...aestheticData.indications} />

      <TreatmentFAQ {...aestheticData.faq} />

      <TreatmentCTA {...aestheticData.cta} />

    </main>
  );
}