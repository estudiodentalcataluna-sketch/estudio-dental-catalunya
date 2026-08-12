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
  title: "Estética Dental en Sant Boi de Llobregat",
  description:
    "Mejora la armonía de tu sonrisa mediante tratamientos de estética dental personalizados en Sant Boi de Llobregat. Diseño de sonrisa, carillas y blanqueamiento.",
  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/estetica-dental",
  },
  openGraph: {
    title: "Estética Dental en Sant Boi de Llobregat",
    description:
      "Diseñamos sonrisas naturales mediante tratamientos de estética dental personalizados para cada paciente.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/estetica-dental",
    images: [
      {
        url: "/images/tratamientos/estetica-dental/hero-estetica-dental.jpg",
      },
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
        subtitle="Analizamos tu sonrisa, tus rasgos faciales y tus expectativas para diseñar un tratamiento totalmente personalizado que consiga un resultado natural y armónico."
      />

      <TreatmentTechnology {...aestheticData.technology} />

      <TreatmentIndications {...aestheticData.indications} />

      <TreatmentFAQ {...aestheticData.faq} />

      <TreatmentCTA {...aestheticData.cta} />

    </main>
  );
}