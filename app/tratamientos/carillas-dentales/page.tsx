import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { veneersData } from "./data";

export const metadata: Metadata = {
  title: "Carillas Dentales en Sant Boi de Llobregat",
  description:
    "Consigue una sonrisa más armónica mediante carillas dentales de porcelana o composite. Tratamientos personalizados en Sant Boi de Llobregat.",

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/carillas-dentales",
  },

  openGraph: {
    title: "Carillas Dentales en Sant Boi de Llobregat",
    description:
      "Mejoramos la forma, el color y la armonía de tu sonrisa mediante carillas dentales totalmente personalizadas.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/carillas-dentales",
    images: [
      {
        url: "/images/tratamientos/carillas-dentales/hero-carillas-dentales.jpg",
      },
    ],
  },
};

export default function VeneersPage() {
  return (
    <main>

      <TreatmentHero {...veneersData.hero} />

      <TreatmentIntro {...veneersData.intro} />

      <TreatmentBenefits {...veneersData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Estudiamos la forma de tu sonrisa, el color de tus dientes y tus objetivos estéticos para diseñar unas carillas totalmente personalizadas y con un resultado natural."
      />

      <TreatmentTechnology {...veneersData.technology} />

      <TreatmentIndications {...veneersData.indications} />

      <TreatmentFAQ {...veneersData.faq} />

      <TreatmentCTA {...veneersData.cta} />

    </main>
  );
}