import Image from "next/image";
import {
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">

      {/* Imagen de fondo */}

      <Image
        src="/images/tratamientos/implantes-hero.jpg"
        alt="Implantes dentales"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Oscurecer */}

      <div className="absolute inset-0 bg-slate-950/65" />

      {/* Degradado */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />

      {/* Contenido */}

      <div className="relative z-10 flex min-h-[90vh] items-center">

        <div className="mx-auto w-full max-w-7xl px-8">

          <div className="max-w-4xl">

            <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/15 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur">
              Implantología avanzada · Sant Boi de Llobregat
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Recupera tu sonrisa
              <br />
              con implantes dentales
              <br />
              de máxima calidad
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">

              Sustituimos uno o varios dientes mediante implantes dentales
              personalizados utilizando planificación digital, CBCT y materiales
              de alta calidad para conseguir un resultado natural, seguro y
              duradero.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contacto"
                className="rounded-full bg-cyan-600 px-10 py-5 text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-cyan-700"
              >
                Solicitar primera visita
              </a>

              <a
                href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20información%20sobre%20implantes."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
              >
                Hablar por WhatsApp
              </a>

            </div>

            {/* Datos rápidos */}

            <div className="mt-16 grid gap-5 md:grid-cols-2">

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">

                <CalendarCheck
                  className="text-cyan-300"
                  size={34}
                />

                <h3 className="mt-4 text-xl font-bold text-white">
                  Primera visita gratuita
                </h3>

                <p className="mt-3 leading-7 text-slate-200">
                  Incluye diagnóstico, radiografías y planificación personalizada.
                </p>

              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">

                <ShieldCheck
                  className="text-cyan-300"
                  size={34}
                />

                <h3 className="mt-4 text-xl font-bold text-white">
                  Tecnología CBCT
                </h3>

                <p className="mt-3 leading-7 text-slate-200">
                  Estudio tridimensional para planificar cada implante con la
                  máxima precisión.
                </p>

              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">

                <HeartHandshake
                  className="text-cyan-300"
                  size={34}
                />

                <h3 className="mt-4 text-xl font-bold text-white">
                  Trato cercano
                </h3>

                <p className="mt-3 leading-7 text-slate-200">
                  Te explicamos todas las alternativas para que elijas la opción
                  que mejor se adapte a tus necesidades.
                </p>

              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">

                <CheckCircle2
                  className="text-cyan-300"
                  size={34}
                />

                <h3 className="mt-4 text-xl font-bold text-white">
                  Cirugía avanzada
                </h3>

                <p className="mt-3 leading-7 text-slate-200">
                  Implantes unitarios, rehabilitaciones completas, elevaciones de
                  seno y regeneraciones óseas.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}