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
  title: "Implantes dentales en Sant Boi de Llobregat",

  description:
    "Recupera tu sonrisa con implantes dentales en Sant Boi de Llobregat. Tratamientos personalizados con planificación digital y tecnología avanzada en Estudio Dental Catalunya.",

  alternates: {
    canonical: "https://www.estudiodentalcatalunya.es/tratamientos/implantes",
  },

  openGraph: {
    title: "Implantes dentales en Sant Boi de Llobregat",
    description:
      "Recupera uno o varios dientes mediante implantes dentales con planificación digital y un tratamiento totalmente personalizado.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/implantes",
    images: [
      {
        url: "/images/tratamientos/implantes/hero-implantes.jpg",
      },
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