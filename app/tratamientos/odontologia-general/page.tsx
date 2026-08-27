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
  title:
    "Odontología General en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en odontología general en Sant Boi de Llobregat. Prevención, revisiones, empastes y tratamientos personalizados para cuidar tu salud bucodental.",

  alternates: {
    canonical:
      "https://estudiodentalcatalunya.es/tratamientos/odontologia-general",
  },

  openGraph: {
    title: "Odontología General en Sant Boi de Llobregat",

    description:
      "Cuidamos la salud de tu boca mediante revisiones, prevención y tratamientos conservadores totalmente personalizados.",

    url:
      "https://estudiodentalcatalunya.es/tratamientos/odontologia-general",

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
      "Prevención, revisiones y tratamientos conservadores para mantener una sonrisa sana durante toda la vida.",

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
        subtitle="Comenzamos con una revisión completa y un diagnóstico personalizado para detectar cualquier problema de forma precoz y diseñar el tratamiento más adecuado para mantener tu salud bucodental."
      />

      <TreatmentIndications {...generalDentistryData.indications} />

      <TreatmentFAQ {...generalDentistryData.faq} />

      <TreatmentCTA {...generalDentistryData.cta} />
    </main>
  );
}