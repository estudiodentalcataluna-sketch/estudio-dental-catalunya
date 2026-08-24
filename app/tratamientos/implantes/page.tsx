import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { implantsData } from "./data";

export const metadata: Metadata = {
  title:
    "Implantes Dentales en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en implantes dentales en Sant Boi de Llobregat. Recupera uno o varios dientes con implantes de máxima calidad, planificación digital y un tratamiento totalmente personalizado. Primera visita gratuita con radiografías.",

  keywords: [
    "implantes dentales Sant Boi",
    "implantólogo Sant Boi",
    "clínica implantes Sant Boi",
    "implantes Neodent",
    "cirugía guiada",
    "regeneración ósea",
    "elevación de seno",
    "implantes dentales Barcelona",
  ],

  alternates: {
    canonical:
      "https://estudiodentalcatalunya.es/tratamientos/implantes",
  },

  openGraph: {
    title: "Implantes Dentales en Sant Boi de Llobregat",

    description:
      "Recupera tu sonrisa mediante implantes dentales con planificación digital, cirugía guiada y un tratamiento completamente personalizado.",

    url:
      "https://estudiodentalcatalunya.es/tratamientos/implantes",

    type: "article",

    images: [
      {
        url: "/images/tratamientos/implantes/hero-implantes.jpg",
        width: 1200,
        height: 630,
        alt: "Implantes dentales en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Implantes Dentales | Estudio Dental Catalunya",

    description:
      "Especialistas en implantología oral en Sant Boi de Llobregat.",

    images: [
      "/images/tratamientos/implantes/hero-implantes.jpg",
    ],
  },
};

export default function ImplantsPage() {
  return (
    <main>
      <TreatmentHero {...implantsData.hero} />

      <TreatmentIntro {...implantsData.intro} />

      <TreatmentBenefits {...implantsData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Cada tratamiento de implantes comienza con un estudio personalizado y una planificación digital para conseguir la máxima precisión y un resultado totalmente adaptado a cada paciente."
      />

      <TreatmentTechnology {...implantsData.technology} />

      <TreatmentIndications {...implantsData.indications} />

      <TreatmentFAQ {...implantsData.faq} />

      <TreatmentCTA {...implantsData.cta} />
    </main>
  );
}