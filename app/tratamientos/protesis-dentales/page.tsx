import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { prosthesesData } from "./data";

export const metadata: Metadata = {
  title: "Prótesis Dentales en Sant Boi de Llobregat",
  description:
    "Recupera la función y la estética de tu sonrisa mediante prótesis dentales fijas y removibles totalmente personalizadas en Sant Boi de Llobregat.",

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/protesis-dentales",
  },

  openGraph: {
    title: "Prótesis Dentales en Sant Boi de Llobregat",
    description:
      "Especialistas en prótesis dentales para recuperar la masticación, la comodidad y la estética de tu sonrisa.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/protesis-dentales",
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
      "Tratamientos personalizados con prótesis fijas y removibles para recuperar tu sonrisa.",
    images: [
      "/images/tratamientos/protesis-dentales/hero-protesis-dentales.jpg",
    ],
  },
};

export default function ProsthesesPage() {
  return (
    <main>

      <TreatmentHero {...prosthesesData.hero} />

      <TreatmentIntro {...prosthesesData.intro} />

      <TreatmentBenefits {...prosthesesData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Analizamos tu caso de forma personalizada para diseñar una prótesis totalmente adaptada a tu boca, recuperando la función, la comodidad y la estética de tu sonrisa."
      />

      <TreatmentTechnology {...prosthesesData.technology} />

      <TreatmentIndications {...prosthesesData.indications} />

      <TreatmentFAQ {...prosthesesData.faq} />

      <TreatmentCTA {...prosthesesData.cta} />

    </main>
  );
}