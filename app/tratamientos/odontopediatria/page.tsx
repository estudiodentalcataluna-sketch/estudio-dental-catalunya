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
  title: "Odontopediatría en Sant Boi de Llobregat",
  description:
    "Especialistas en odontopediatría en Sant Boi de Llobregat. Cuidamos la salud bucodental de bebés, niños y adolescentes mediante un enfoque preventivo y personalizado.",

  alternates: {
    canonical:
      "https://www.estudiodentalcatalunya.es/tratamientos/odontopediatria",
  },

  openGraph: {
    title: "Odontopediatría en Sant Boi de Llobregat",
    description:
      "Prevención, revisiones y tratamientos dentales infantiles para cuidar la sonrisa de los más pequeños.",
    url: "https://www.estudiodentalcatalunya.es/tratamientos/odontopediatria",
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
      "Tratamientos de odontopediatría adaptados a cada etapa del crecimiento infantil.",
    images: [
      "/images/tratamientos/odontopediatria/hero-odontopediatria.jpg",
    ],
  },
};

export default function PediatricPage() {
  return (
    <main>

      <TreatmentHero {...pediatricData.hero} />

      <TreatmentIntro {...pediatricData.intro} />

      <TreatmentBenefits {...pediatricData.benefits} />

      <TreatmentProcess
        title="Nuestro proceso de tratamiento"
        subtitle="Cada niño recibe una atención personalizada basada en la prevención, el seguimiento del desarrollo dental y la creación de una experiencia positiva para que acuda al dentista con confianza."
      />

      <TreatmentTechnology {...pediatricData.technology} />

      <TreatmentIndications {...pediatricData.indications} />

      <TreatmentFAQ {...pediatricData.faq} />

      <TreatmentCTA {...pediatricData.cta} />

    </main>
  );
}