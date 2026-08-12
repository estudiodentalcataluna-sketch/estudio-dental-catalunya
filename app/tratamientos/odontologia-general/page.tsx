import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { generalDentistryData } from "./data";

export const metadata: Metadata = {
  title: "Odontología General en Sant Boi de Llobregat",
  description:
    "Revisiones dentales, limpiezas profesionales, empastes y tratamientos conservadores para mantener una boca sana en Sant Boi de Llobregat.",

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/odontologia-general",
  },

  openGraph: {
    title: "Odontología General en Sant Boi de Llobregat",
    description:
      "Prevención, diagnóstico y tratamientos conservadores para cuidar la salud bucodental de toda la familia.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/odontologia-general",
    images: [
      {
        url: "/images/tratamientos/odontologia-general/hero-odontologia-general.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Odontología General en Sant Boi de Llobregat",
    description:
      "Especialistas en revisiones, empastes, limpiezas y odontología preventiva.",
    images: [
      "/images/tratamientos/odontologia-general/hero-odontologia-general.jpg",
    ],
  },
};

export default function GeneralDentistryPage() {
  return (
    <main>

      <TreatmentHero {...generalDentistryData.hero} />

      <TreatmentIntro {...generalDentistryData.intro} />

      <TreatmentBenefits {...generalDentistryData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Cada tratamiento comienza con una revisión completa y un diagnóstico personalizado para detectar cualquier problema de forma precoz y planificar el tratamiento más adecuado con un enfoque preventivo y conservador."
      />

      <TreatmentTechnology {...generalDentistryData.technology} />

      <TreatmentIndications {...generalDentistryData.indications} />

      <TreatmentFAQ {...generalDentistryData.faq} />

      <TreatmentCTA {...generalDentistryData.cta} />

    </main>
  );
}