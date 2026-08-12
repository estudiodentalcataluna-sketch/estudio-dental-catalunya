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
  title: "Blanqueamiento Dental en Sant Boi de Llobregat",
  description:
    "Recupera el blanco natural de tu sonrisa con un tratamiento de blanqueamiento dental profesional en Sant Boi de Llobregat. Resultados seguros, eficaces y personalizados.",

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/blanqueamiento-dental",
  },

  openGraph: {
    title: "Blanqueamiento Dental en Sant Boi de Llobregat",
    description:
      "Tratamientos de blanqueamiento dental para conseguir una sonrisa más blanca, luminosa y natural.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/blanqueamiento-dental",
    images: [
      {
        url: "/images/tratamientos/blanqueamiento-dental/hero-blanqueamiento-dental.jpg",
      },
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
        subtitle="Analizamos el color de tus dientes, comprobamos que tu boca esté completamente sana y planificamos un tratamiento personalizado para conseguir un resultado natural y duradero."
      />

      <TreatmentTechnology {...whiteningData.technology} />

      <TreatmentIndications {...whiteningData.indications} />

      <TreatmentFAQ {...whiteningData.faq} />

      <TreatmentCTA {...whiteningData.cta} />

    </main>
  );
}