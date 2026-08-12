import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { endodonticsData } from "./data";

export const metadata: Metadata = {
  title: "Endodoncia en Sant Boi de Llobregat",
  description:
    "Tratamientos de endodoncia en Sant Boi de Llobregat para eliminar la infección del nervio dental, aliviar el dolor y conservar el diente natural.",

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/endodoncia",
  },

  openGraph: {
    title: "Endodoncia en Sant Boi de Llobregat",
    description:
      "Salvamos dientes dañados mediante tratamientos de endodoncia precisos, cómodos y conservadores.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/endodoncia",
    images: [
      {
        url: "/images/tratamientos/endodoncia/hero-endodoncia.jpg",
      },
    ],
  },
};

export default function EndodonticsPage() {
  return (
    <main>

      <TreatmentHero {...endodonticsData.hero} />

      <TreatmentIntro {...endodonticsData.intro} />

      <TreatmentBenefits {...endodonticsData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Realizamos un diagnóstico preciso para localizar el origen de la infección y planificar una endodoncia conservadora que permita mantener el diente natural siempre que sea posible."
      />

      <TreatmentTechnology {...endodonticsData.technology} />

      <TreatmentIndications {...endodonticsData.indications} />

      <TreatmentFAQ {...endodonticsData.faq} />

      <TreatmentCTA {...endodonticsData.cta} />

    </main>
  );
}