import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { pediatricData } from "./data";

export const metadata: Metadata = {
  title:
    "Odontopediatría en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en odontopediatría en Sant Boi de Llobregat. Cuidamos la salud bucodental de bebés, niños y adolescentes con revisiones, prevención y tratamientos adaptados a cada etapa.",

  keywords: [
    "odontopediatría Sant Boi",
    "dentista infantil Sant Boi",
    "dentista para niños Sant Boi",
    "odontopediatra Sant Boi",
    "clínica dental infantil Sant Boi",
    "dentista bebés Sant Boi",
    "dentista adolescentes Sant Boi",
    "revisión dental infantil",
    "prevención dental infantil",
    "salud bucodental infantil",
    "odontopediatría Barcelona",
    "dentista Sant Boi",
    "clínica dental Sant Boi",
  ],

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/odontopediatria",
  },

  openGraph: {
    title:
      "Odontopediatría en Sant Boi de Llobregat | Estudio Dental Catalunya",

    description:
      "Cuidamos la salud bucodental de bebés, niños y adolescentes mediante revisiones, prevención y tratamientos adaptados a cada etapa.",

    url:
      "https://www.estudiodentalcatalunya.es/tratamientos/odontopediatria",

    type: "article",

    images: [
      {
        url:
          "/images/tratamientos/odontopediatria/hero-odontopediatria.jpg",
        width: 1200,
        height: 630,
        alt: "Odontopediatría en Sant Boi de Llobregat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Odontopediatría | Estudio Dental Catalunya",

    description:
      "Odontopediatría en Sant Boi de Llobregat con prevención, revisiones y tratamientos adaptados para niños y adolescentes.",

    images: [
      "/images/tratamientos/odontopediatria/hero-odontopediatria.jpg",
    ],
  },
};

export default function PediatricDentistryPage() {
  return (
    <main>
      <TreatmentHero {...pediatricData.hero} />

      <TreatmentIntro {...pediatricData.intro} />

      <TreatmentBenefits {...pediatricData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Comenzamos con una revisión adaptada a la edad del niño para valorar el desarrollo de su boca, detectar posibles problemas de forma precoz y establecer un plan preventivo totalmente personalizado."
      />

      <TreatmentIndications {...pediatricData.indications} />

      <TreatmentFAQ {...pediatricData.faq} />

      <TreatmentCTA {...pediatricData.cta} />
    </main>
  );
}
