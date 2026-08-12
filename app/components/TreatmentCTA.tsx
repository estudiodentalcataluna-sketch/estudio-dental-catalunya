import { ArrowRight, MessageCircle } from "lucide-react";

interface TreatmentCTAProps {
  title: string;
  description: string;
}

export default function TreatmentCTA({
  title,
  description,
}: TreatmentCTAProps) {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Fondo */}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 via-cyan-600 to-sky-600" />

      {/* Círculos decorativos */}

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center text-white">

        <span className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur">
          Primera visita
        </span>

        <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-cyan-100">
          {description}
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-white px-9 py-4 text-lg font-semibold text-cyan-700 shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Solicitar cita

            <ArrowRight
              size={22}
              className="ml-3"
            />

          </a>

          <a
            href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-9 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-cyan-700"
          >

            <MessageCircle
              size={22}
              className="mr-3"
            />

            Hablar por WhatsApp

          </a>

        </div>

      </div>

    </section>
  );
}