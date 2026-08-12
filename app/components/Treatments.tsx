import Link from "next/link";
import {
  ArrowRight,
  Scan,
  Smile,
  Sparkles,
  ShieldPlus,
  HeartPulse,
  Baby,
  Brush,
  SmilePlus,
  Stethoscope,
  ShieldCheck,
  Wand2,
} from "lucide-react";

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

    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Tratamientos
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Todas las especialidades para cuidar de tu sonrisa
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Ponemos a tu disposición un equipo multidisciplinar y tecnología de
            vanguardia para ofrecer tratamientos personalizados adaptados a cada
            paciente.
          </p>

        </div>
                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {treatments.map((treatment) => {

            const Icon = treatment.icon;

            return (

              <Link
                key={treatment.title}
                href={treatment.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-2xl"
              >

                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

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

              </Link>

            );

          })}

        </div>

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-cyan-600 via-cyan-700 to-slate-900 px-10 py-12 text-white shadow-2xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="max-w-3xl">

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">

                Primera visita gratuita

              </span>

              <h3 className="mt-4 text-4xl font-bold">

                Te ayudamos a encontrar el tratamiento más adecuado para ti.

              </h3>

              <p className="mt-5 text-lg leading-8 text-cyan-50">

                Realizamos un diagnóstico completo y te explicamos todas las
                opciones de tratamiento con un plan totalmente personalizado.

              </p>

            </div>

            <div className="flex flex-wrap gap-4">
                            <Link
                href="/contacto"
                className="rounded-full bg-white px-8 py-4 font-semibold text-cyan-700 transition duration-300 hover:scale-105 hover:bg-slate-100"
              >
                Primera visita gratuita
              </Link>

              <Link
                href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20información."
                target="_blank"
                className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900"
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