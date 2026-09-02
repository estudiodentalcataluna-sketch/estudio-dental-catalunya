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

const canonicalUrl =
  "https://www.estudiodentalcatalunya.es/tratamientos/protesis-dentales";

const heroImage =
  "/images/tratamientos/protesis-dentales/hero-protesis-dentales.jpg";

export const metadata: Metadata = {
  title:
    "Prótesis Dentales en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en prótesis dentales en Sant Boi de Llobregat. Recupera la función y la estética de tu sonrisa mediante prótesis fijas y removibles totalmente personalizadas.",

  keywords: [
    "prótesis dentales Sant Boi",
    "prótesis dental fija Sant Boi",
    "prótesis dental removible Sant Boi",
    "dentadura postiza Sant Boi",
    "rehabilitación dental Sant Boi",
    "prótesis sobre implantes",
    "restauración dental",
    "dentista Sant Boi",
    "clínica dental Sant Boi",
    "prótesis dentales Barcelona",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Prótesis Dentales en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Recupera la funcionalidad y la estética de tu sonrisa mediante prótesis dentales personalizadas adaptadas a tus necesidades.",

    url: canonicalUrl,

    type: "article",

    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "Prótesis dentales en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Prótesis Dentales en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Prótesis fijas y removibles diseñadas para recuperar la función, la comodidad y la estética de tu sonrisa.",

    images: [heroImage],
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
