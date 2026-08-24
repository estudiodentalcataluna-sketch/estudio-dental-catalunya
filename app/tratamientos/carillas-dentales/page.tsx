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
  title:
    "Carillas dentales en Sant Boi de Llobregat | Carillas de porcelana y composite",

  description:
    "Especialistas en carillas dentales en Sant Boi de Llobregat. Mejoramos el color, la forma y la armonía de tu sonrisa mediante carillas de porcelana y composite totalmente personalizadas. Primera visita gratuita con radiografías y diagnóstico.",

  keywords: [
    "carillas dentales Sant Boi",
    "carillas porcelana Sant Boi",
    "carillas composite Sant Boi",
    "estética dental Sant Boi",
    "diseño de sonrisa Sant Boi",
    "dentista Sant Boi",
    "clínica dental Sant Boi",
  ],

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/carillas-dentales",
  },

  openGraph: {
    title:
      "Carillas dentales en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Consigue una sonrisa natural mediante carillas dentales de porcelana y composite totalmente personalizadas.",

    url:
      "https://www.estudiodentalcatalunya.es/tratamientos/carillas-dentales",

    type: "article",

    images: [
      {
        url: "/images/tratamientos/carillas-dentales/hero-carillas-dentales.jpg",
        width: 1200,
        height: 630,
        alt: "Carillas dentales en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Carillas dentales en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Mejora el color, la forma y la armonía de tu sonrisa mediante carillas dentales personalizadas.",

    images: [
      "/images/tratamientos/carillas-dentales/hero-carillas-dentales.jpg",
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
        subtitle="Estudiamos tu sonrisa, tus rasgos faciales y tus expectativas para diseñar unas carillas dentales totalmente personalizadas que consigan un resultado natural, armónico y duradero."
      />

      <TreatmentTechnology {...veneersData.technology} />

      <TreatmentIndications {...veneersData.indications} />

      <TreatmentFAQ {...veneersData.faq} />

      <TreatmentCTA {...veneersData.cta} />
    </main>
  );
}