import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { prostheticsData } from "./data";

export const metadata: Metadata = {
  title:
    "Prótesis Dentales en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en prótesis dentales en Sant Boi de Llobregat. Recupera la función y la estética de tu sonrisa mediante prótesis fijas y removibles totalmente personalizadas.",

  alternates: {
    canonical:
      "https://estudiodentalcatalunya.es/tratamientos/protesis-dentales",
  },

  openGraph: {
    title: "Prótesis Dentales en Sant Boi de Llobregat",

    description:
      "Recupera la funcionalidad y la estética de tu sonrisa mediante prótesis dentales personalizadas adaptadas a tus necesidades.",

    url:
      "https://estudiodentalcatalunya.es/tratamientos/protesis-dentales",

    images: [
      {
        url: "/images/tratamientos/protesis-dentales/hero-protesis-dentales.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Prótesis Dentales en Sant Boi de Llobregat",

    description:
      "Prótesis fijas y removibles diseñadas para recuperar la función, la comodidad y la estética de tu sonrisa.",

    images: [
      "/images/tratamientos/protesis-dentales/hero-protesis-dentales.jpg",
    ],
  },
};

export default function ProstheticsPage() {
  return (
    <main>
      <TreatmentHero {...prostheticsData.hero} />

      <TreatmentIntro {...prostheticsData.intro} />

      <TreatmentBenefits {...prostheticsData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Realizamos un estudio personalizado para valorar tu situación clínica y diseñar la prótesis dental que mejor se adapte a tus necesidades, garantizando funcionalidad, comodidad y un resultado natural."
      />

      <TreatmentTechnology {...prostheticsData.technology} />

      <TreatmentIndications {...prostheticsData.indications} />

      <TreatmentFAQ {...prostheticsData.faq} />

      <TreatmentCTA {...prostheticsData.cta} />
    </main>
  );
}