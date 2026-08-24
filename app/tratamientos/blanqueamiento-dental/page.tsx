import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { whiteningData } from "./data";

export const metadata: Metadata = {
  title:
    "Blanqueamiento dental en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en blanqueamiento dental en Sant Boi de Llobregat. Recupera el color natural de tu sonrisa mediante un tratamiento profesional, seguro y personalizado. Primera visita gratuita con radiografías y diagnóstico.",

  keywords: [
    "blanqueamiento dental Sant Boi",
    "blanquear dientes Sant Boi",
    "blanqueamiento profesional",
    "estética dental Sant Boi",
    "sonrisa blanca",
    "dentista Sant Boi",
    "clínica dental Sant Boi",
  ],

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/blanqueamiento-dental",
  },

  openGraph: {
    title:
      "Blanqueamiento dental en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Consigue una sonrisa más blanca y luminosa mediante un tratamiento profesional de blanqueamiento dental completamente personalizado.",

    url:
      "https://www.estudiodentalcatalunya.es/tratamientos/blanqueamiento-dental",

    type: "article",

    images: [
      {
        url: "/images/tratamientos/blanqueamiento-dental/hero-blanqueamiento-dental.jpg",
        width: 1200,
        height: 630,
        alt: "Blanqueamiento dental en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Blanqueamiento dental | Estudio Dental Catalunya",

    description:
      "Recupera una sonrisa más blanca mediante un tratamiento profesional de blanqueamiento dental.",

    images: [
      "/images/tratamientos/blanqueamiento-dental/hero-blanqueamiento-dental.jpg",
    ],
  },
};

export default function WhiteningPage() {
  return (
    <main>

      <TreatmentHero {...whiteningData.hero} />

      <TreatmentIntro {...whiteningData.intro} />

      <TreatmentBenefits {...whiteningData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Analizamos el estado de tu salud bucodental, valoramos el color de tus dientes y planificamos un tratamiento de blanqueamiento dental completamente personalizado para conseguir un resultado natural, seguro y duradero."
      />

      <TreatmentTechnology {...whiteningData.technology} />

      <TreatmentIndications {...whiteningData.indications} />

      <TreatmentFAQ {...whiteningData.faq} />

      <TreatmentCTA {...whiteningData.cta} />

    </main>
  );
}