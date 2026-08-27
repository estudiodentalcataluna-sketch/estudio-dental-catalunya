import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { endodonticsData } from "./data";

export const metadata: Metadata = {
  title: "Endodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Tratamientos de endodoncia en Sant Boi de Llobregat para eliminar la infección del nervio dental, aliviar el dolor y conservar el diente natural.",

  alternates: {
    canonical:
      "https://estudiodentalcatalunya.es/tratamientos/endodoncia",
  },

  openGraph: {
    title: "Endodoncia en Sant Boi de Llobregat",

    description:
      "Tratamientos de endodoncia para eliminar la infección del nervio dental y conservar el diente natural siempre que sea posible.",

    url: "https://estudiodentalcatalunya.es/tratamientos/endodoncia",

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
        subtitle="Comenzamos con un estudio clínico y radiográfico para localizar el origen de la infección y planificar un tratamiento conservador que permita mantener el diente natural siempre que sea posible."
      />

      <TreatmentIndications {...endodonticsData.indications} />

      <TreatmentFAQ {...endodonticsData.faq} />

      <TreatmentCTA {...endodonticsData.cta} />
    </main>
  );
}