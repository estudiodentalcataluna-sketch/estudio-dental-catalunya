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
  title: "Ortodoncia Invisible en Sant Boi de Llobregat",
  description:
    "Corrige la posición de tus dientes mediante ortodoncia invisible con alineadores transparentes personalizados en Sant Boi de Llobregat.",
  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/ortodoncia-invisible",
  },
  openGraph: {
    title: "Ortodoncia Invisible en Sant Boi de Llobregat",
    description:
      "Alineadores transparentes cómodos, discretos y eficaces para conseguir una sonrisa perfectamente alineada.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/ortodoncia-invisible",
    images: [
      {
        url: "/images/tratamientos/ortodoncia-invisible/hero-ortodoncia-invisible.jpg",
      },
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
        subtitle="Comenzamos con un estudio digital personalizado para planificar cada movimiento de los dientes y fabricar alineadores completamente adaptados a tu sonrisa."
      />

      <TreatmentTechnology {...invisibleData.technology} />

      <TreatmentIndications {...invisibleData.indications} />

      <TreatmentFAQ {...invisibleData.faq} />

      <TreatmentCTA {...invisibleData.cta} />

    </main>
  );
}