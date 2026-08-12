import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { periodonticsData } from "./data";

export const metadata: Metadata = {
  title: "Periodoncia en Sant Boi de Llobregat",
  description:
    "Tratamiento de gingivitis y periodontitis en Sant Boi de Llobregat. Cuidamos la salud de tus encías para conservar tus dientes y prevenir complicaciones.",

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/periodoncia",
  },

  openGraph: {
    title: "Periodoncia en Sant Boi de Llobregat",
    description:
      "Especialistas en prevención y tratamiento de enfermedades de las encías mediante un enfoque personalizado y mínimamente invasivo.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/periodoncia",
    images: [
      {
        url: "/images/tratamientos/periodoncia/hero-periodoncia.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Periodoncia en Sant Boi de Llobregat",
    description:
      "Tratamientos personalizados para mantener unas encías sanas y conservar tus dientes.",
    images: [
      "/images/tratamientos/periodoncia/hero-periodoncia.jpg",
    ],
  },
};

export default function PeriodonticsPage() {
  return (
    <main>

      <TreatmentHero {...periodonticsData.hero} />

      <TreatmentIntro {...periodonticsData.intro} />

      <TreatmentBenefits {...periodonticsData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Realizamos un estudio completo del estado de las encías para diagnosticar la enfermedad periodontal y planificar un tratamiento personalizado que permita detener su evolución."
      />

      <TreatmentTechnology {...periodonticsData.technology} />

      <TreatmentIndications {...periodonticsData.indications} />

      <TreatmentFAQ {...periodonticsData.faq} />

      <TreatmentCTA {...periodonticsData.cta} />

    </main>
  );
}