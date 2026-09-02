import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { orthodonticsData } from "./data";

export const metadata: Metadata = {
  title:
    "Ortodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en ortodoncia en Sant Boi de Llobregat. Corregimos la posición de los dientes y problemas de mordida mediante brackets metálicos y estéticos con tratamientos personalizados. Primera visita gratuita con radiografías y diagnóstico.",

  keywords: [
    "ortodoncia Sant Boi",
    "ortodoncista Sant Boi",
    "clínica de ortodoncia Sant Boi",
    "brackets Sant Boi",
    "brackets metálicos Sant Boi",
    "brackets estéticos Sant Boi",
    "ortodoncia para adultos Sant Boi",
    "ortodoncia para niños Sant Boi",
    "alineación dental Sant Boi",
    "corregir mordida Sant Boi",
    "tratamiento de ortodoncia",
    "ortodoncia Barcelona",
    "dentista Sant Boi",
    "clínica dental Sant Boi",
  ],

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/ortodoncia",
  },

  openGraph: {
    title:
      "Ortodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Tratamientos de ortodoncia personalizados mediante brackets metálicos y estéticos para mejorar la alineación dental, la mordida y la función de la sonrisa.",

    url:
      "https://www.estudiodentalcatalunya.es/tratamientos/ortodoncia",

    type: "article",

    images: [
      {
        url: "/images/tratamientos/ortodoncia/hero-ortodoncia.jpg",
        width: 1200,
        height: 630,
        alt: "Ortodoncia en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Ortodoncia | Estudio Dental Catalunya",

    description:
      "Especialistas en ortodoncia con brackets metálicos y estéticos en Sant Boi de Llobregat.",

    images: [
      "/images/tratamientos/ortodoncia/hero-ortodoncia.jpg",
    ],
  },
};

export default function OrthodonticsPage() {
  return (
    <main>
      <TreatmentHero {...orthodonticsData.hero} />

      <TreatmentIntro {...orthodonticsData.intro} />

      <TreatmentBenefits {...orthodonticsData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Cada tratamiento de ortodoncia comienza con un estudio clínico completo, un análisis de la mordida y una planificación digital personalizada para diseñar el movimiento de los dientes con precisión y conseguir una sonrisa alineada, funcional y estable a largo plazo."
      />

      <TreatmentTechnology {...orthodonticsData.technology} />

      <TreatmentIndications {...orthodonticsData.indications} />

      <TreatmentFAQ {...orthodonticsData.faq} />

      <TreatmentCTA {...orthodonticsData.cta} />
    </main>
  );
}
