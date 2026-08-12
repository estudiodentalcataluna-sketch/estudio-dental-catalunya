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
  title: "Ortodoncia en Sant Boi de Llobregat",
  description:
    "Especialistas en ortodoncia en Sant Boi de Llobregat. Brackets metálicos, estéticos y tratamientos personalizados para conseguir una sonrisa alineada.",
  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/ortodoncia",
  },
  openGraph: {
    title: "Ortodoncia en Sant Boi de Llobregat",
    description:
      "Corrige la posición de tus dientes mediante tratamientos de ortodoncia personalizados.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/ortodoncia",
    images: [
      {
        url: "/images/tratamientos/ortodoncia/hero-ortodoncia.jpg",
      },
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
        subtitle="Cada tratamiento de ortodoncia comienza con un estudio personalizado y una planificación digital para diseñar el movimiento de los dientes y conseguir una sonrisa alineada y funcional."
      />

      <TreatmentTechnology {...orthodonticsData.technology} />

      <TreatmentIndications {...orthodonticsData.indications} />

      <TreatmentFAQ {...orthodonticsData.faq} />

      <TreatmentCTA {...orthodonticsData.cta} />

    </main>
  );
}