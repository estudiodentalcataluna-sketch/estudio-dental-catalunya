import type { Metadata } from "next";

import TreatmentHero from "@/app/components/TreatmentHero";
import TreatmentIntro from "@/app/components/TreatmentIntro";
import TreatmentBenefits from "@/app/components/TreatmentBenefits";
import TreatmentProcess from "@/app/components/TreatmentProcess";
import TreatmentTechnology from "@/app/components/TreatmentTechnology";
import TreatmentIndications from "@/app/components/TreatmentIndications";
import TreatmentFAQ from "@/app/components/TreatmentFAQ";
import TreatmentCTA from "@/app/components/TreatmentCTA";

import { pediatricData } from "./data";

export const metadata: Metadata = {
  title:
    "Odontopediatría en Sant Boi de Llobregat | Estudio Dental Catalunya",

  description:
    "Especialistas en odontopediatría en Sant Boi de Llobregat. Cuidamos la salud bucodental de bebés, niños y adolescentes mediante tratamientos preventivos y personalizados.",

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/odontopediatria",
  },

  openGraph: {
    title: "Odontopediatría en Sant Boi de Llobregat",

    description:
      "Tratamientos de odontopediatría para prevenir, diagnosticar y cuidar la salud bucodental infantil desde los primeros años.",

    url:
      "https://www.estudiodentalcatalunya.es/tratamientos/odontopediatria",

    images: [
      {
        url: "/images/tratamientos/odontopediatria/hero-odontopediatria.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Odontopediatría en Sant Boi de Llobregat",

    description:
      "Prevención, revisiones y tratamientos adaptados para cuidar la sonrisa de los más pequeños.",

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