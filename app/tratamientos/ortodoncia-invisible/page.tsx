import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { invisibleData } from "./data";

export const metadata: Metadata = {
  title:
    "Ortodoncia Invisible en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en ortodoncia invisible en Sant Boi de Llobregat. Corrige la posición de tus dientes mediante alineadores transparentes personalizados con planificación digital. Primera visita gratuita con radiografías.",

  keywords: [
    "ortodoncia invisible Sant Boi",
    "alineadores transparentes",
    "alineadores dentales",
    "ortodoncia invisible Barcelona",
    "alineación dental",
    "ortodoncia adultos",
    "ortodoncia estética",
    "clínica dental Sant Boi",
  ],

  alternates: {
    canonical:
      "https://estudiodentalcatalunya.es/tratamientos/ortodoncia-invisible",
  },

  openGraph: {
    title:
      "Ortodoncia Invisible en Sant Boi de Llobregat",

    description:
      "Corrige la posición de tus dientes mediante alineadores transparentes personalizados con un tratamiento cómodo, discreto y totalmente planificado.",

    url:
      "https://estudiodentalcatalunya.es/tratamientos/ortodoncia-invisible",

    type: "article",

    images: [
      {
        url:
          "/images/tratamientos/ortodoncia-invisible/hero-ortodoncia-invisible.jpg",
        width: 1200,
        height: 630,
        alt: "Ortodoncia Invisible en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Ortodoncia Invisible | Estudio Dental Catalunya",

    description:
      "Especialistas en ortodoncia invisible mediante alineadores transparentes.",

    images: [
      "/images/tratamientos/ortodoncia-invisible/hero-ortodoncia-invisible.jpg",
    ],
  },
};

export default function InvisiblePage() {
  return (
    <main>

      <TreatmentHero {...invisibleData.hero} />

      <TreatmentIntro {...invisibleData.intro} />

      <TreatmentBenefits {...invisibleData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Cada tratamiento comienza con un estudio personalizado y una planificación digital para diseñar el movimiento de los dientes y fabricar alineadores transparentes completamente adaptados a tu sonrisa."
      />

      <TreatmentTechnology {...invisibleData.technology} />

      <TreatmentIndications {...invisibleData.indications} />

      <TreatmentFAQ {...invisibleData.faq} />

      <TreatmentCTA {...invisibleData.cta} />

    </main>
  );
}