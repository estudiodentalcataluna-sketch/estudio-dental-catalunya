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
  title:
    "Endodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en endodoncia en Sant Boi de Llobregat. Tratamos infecciones y problemas del nervio dental para aliviar el dolor y conservar el diente natural siempre que sea posible. Primera visita gratuita con radiografías y diagnóstico.",

  keywords: [
    "endodoncia Sant Boi",
    "endodoncista Sant Boi",
    "tratamiento de conductos Sant Boi",
    "dolor dental Sant Boi",
    "infección dental",
    "nervio dental",
    "conservar diente natural",
    "dentista Sant Boi",
    "clínica dental Sant Boi",
    "endodoncia Barcelona",
  ],

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/endodoncia",
  },

  openGraph: {
    title:
      "Endodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Tratamientos de endodoncia para eliminar la infección del nervio dental, aliviar el dolor y conservar el diente natural siempre que sea posible.",

    url:
      "https://www.estudiodentalcatalunya.es/tratamientos/endodoncia",

    type: "article",

    images: [
      {
        url: "/images/tratamientos/endodoncia/hero-endodoncia.jpg",
        width: 1200,
        height: 630,
        alt: "Endodoncia en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Endodoncia en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Tratamientos de endodoncia para eliminar la infección del nervio dental y conservar el diente natural.",

    images: [
      "/images/tratamientos/endodoncia/hero-endodoncia.jpg",
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

      <TreatmentTechnology {...endodonticsData.technology} />

      <TreatmentIndications {...endodonticsData.indications} />

      <TreatmentFAQ {...endodonticsData.faq} />

      <TreatmentCTA {...endodonticsData.cta} />
    </main>
  );
}
