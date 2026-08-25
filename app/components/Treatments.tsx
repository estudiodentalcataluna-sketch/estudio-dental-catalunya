import Link from "next/link";
import {
  ArrowRight,
  Scan,
  Smile,
  SmilePlus,
  Sparkles,
  ShieldPlus,
  HeartPulse,
  Baby,
  Brush,
  ShieldCheck,
  Stethoscope,
  Wand2,
} from "lucide-react";

import AppointmentButton from "./AppointmentButton";

const treatments = [
  {
    title: "Implantes Dentales",
    description:
      "Recupera piezas perdidas mediante implantes de última generación con planificación digital.",
    icon: Scan,
    href: "/tratamientos/implantes",
  },
  {
    title: "Ortodoncia",
    description:
      "Alineamos tu sonrisa con brackets metálicos, estéticos o técnicas personalizadas.",
    icon: Smile,
    href: "/tratamientos/ortodoncia",
  },
  {
    title: "Ortodoncia Invisible",
    description:
      "Tratamientos con alineadores transparentes cómodos, discretos y eficaces.",
    icon: SmilePlus,
    href: "/tratamientos/ortodoncia-invisible",
  },
  {
    title: "Estética Dental",
    description:
      "Diseñamos sonrisas naturales mediante tratamientos estéticos personalizados.",
    icon: Sparkles,
    href: "/tratamientos/estetica-dental",
  },
  {
    title: "Carillas Dentales",
    description:
      "Mejoramos forma, color y armonía de tu sonrisa con carillas de alta estética.",
    icon: Wand2,
    href: "/tratamientos/carillas-dentales",
  },
  {
    title: "Blanqueamiento Dental",
    description:
      "Recupera el blanco natural de tus dientes con tratamientos seguros y eficaces.",
    icon: Brush,
    href: "/tratamientos/blanqueamiento-dental",
  },
  {
    title: "Endodoncia",
    description:
      "Salvamos dientes dañados eliminando la infección y evitando su extracción.",
    icon: ShieldPlus,
    href: "/tratamientos/endodoncia",
  },
  {
    title: "Periodoncia",
    description:
      "Prevención y tratamiento de enfermedades de las encías para mantener una boca sana.",
    icon: HeartPulse,
    href: "/tratamientos/periodoncia",
  },
  {
    title: "Prótesis Dentales",
    description:
      "Rehabilitamos la función y la estética con prótesis fijas y removibles.",
    icon: ShieldCheck,
    href: "/tratamientos/protesis-dentales",
  },
  {
    title: "Odontología General",
    description:
      "Revisiones, empastes, limpiezas y tratamientos conservadores para toda la familia.",
    icon: Stethoscope,
    href: "/tratamientos/odontologia-general",
  },
  {
    title: "Odontopediatría",
    description:
      "Atención especializada para niños en un entorno cercano y de confianza.",
    icon: Baby,
    href: "/tratamientos/odontopediatria",
  },
];

export default function Treatments() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* CABECERA */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-cyan-600 sm:tracking-[0.3em]">
            Tratamientos
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:mt-5 sm:text-5xl">
            Todas las especialidades para cuidar de tu sonrisa
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            Ponemos a tu disposición un equipo multidisciplinar y tecnología de
            vanguardia para ofrecer tratamientos personalizados adaptados a cada
            paciente.
          </p>
        </div>

        {/* TRATAMIENTOS */}

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2 xl:mt-20 xl:grid-cols-3 xl:gap-8">

          {treatments.map((treatment) => {
            const Icon = treatment.icon;

            return (
              <Link
                key={treatment.title}
                href={treatment.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  active:scale-[0.98]

                  sm:rounded-3xl
                  sm:p-7
                  sm:shadow-lg
                  sm:hover:-translate-y-3
                  sm:hover:border-cyan-500
                  sm:hover:shadow-2xl

                  xl:p-8
                "
              >

                {/* DECORACIÓN */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-24
                    w-24
                    rounded-full
                    bg-cyan-100
                    opacity-0
                    blur-3xl
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">

                  {/* =========================
                      VERSIÓN MÓVIL
                      ========================= */}

                  <div className="sm:hidden">

                    {/* Cabecera */}

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100">
                        <Icon
                          size={23}
                          className="text-cyan-600"
                        />
                      </div>

                      <div className="min-w-0 flex-1">

                        <h3 className="text-lg font-bold leading-tight text-slate-900">
                          {treatment.title}
                        </h3>

                        <div className="mt-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cyan-600">
                          Ver tratamiento
                          <ArrowRight size={14} />
                        </div>

                      </div>

                    </div>

                    {/* Separador */}

                    <div className="my-4 h-px bg-slate-100" />

                    {/* Descripción */}

                    <p className="text-sm leading-6 text-slate-600">
                      {treatment.description}
                    </p>

                    {/* Pequeña llamada final */}

                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-xs font-medium text-slate-400">
                        Estudio Dental Catalunya
                      </span>

                      <ArrowRight
                        size={18}
                        className="text-cyan-600 transition-transform duration-300 group-active:translate-x-1"
                      />

                    </div>

                  </div>


                  {/* =========================
                      VERSIÓN TABLET / PC
                      ========================= */}

                  <div className="hidden sm:block">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition duration-300 group-hover:bg-cyan-600">
                      <Icon
                        size={30}
                        className="text-cyan-600 transition duration-300 group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                      {treatment.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {treatment.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between">

                      <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                        Tratamiento especializado
                      </span>

                      <ArrowRight
                        size={20}
                        className="text-cyan-600 transition duration-300 group-hover:translate-x-2"
                      />

                    </div>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>


        {/* CTA */}

        <div className="mt-12 rounded-[28px] bg-gradient-to-r from-cyan-600 via-cyan-700 to-slate-900 px-5 py-8 text-white shadow-2xl sm:mt-20 sm:rounded-[32px] sm:px-10 sm:py-12">

          <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">

            <div className="max-w-3xl">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100 sm:text-sm sm:tracking-[0.3em]">
                Primera visita gratuita
              </span>

              <h3 className="mt-3 text-2xl font-bold leading-tight sm:mt-4 sm:text-4xl">
                Te ayudamos a encontrar el tratamiento más adecuado para ti.
              </h3>

              <p className="mt-4 text-base leading-7 text-cyan-50 sm:mt-5 sm:text-lg sm:leading-8">
                Realizamos un diagnóstico completo y te explicamos todas las
                opciones de tratamiento con un plan totalmente personalizado.
              </p>

            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">

              <AppointmentButton
                className="
                  w-full
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  text-center
                  font-semibold
                  text-cyan-700
                  transition
                  duration-300
                  hover:scale-105
                  hover:bg-slate-100
                  sm:w-auto
                "
              >
                Primera visita gratuita
              </AppointmentButton>

              <Link
                href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  rounded-full
                  border
                  border-white/30
                  px-8
                  py-4
                  text-center
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-slate-900
                  sm:w-auto
                "
              >
                Hablar por WhatsApp
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}