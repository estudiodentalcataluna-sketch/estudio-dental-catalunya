import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Award,
  ShieldCheck,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    icon: Users,
    title: "7 profesionales especializados",
    text: "Somos un equipo formado por siete profesionales del mundo de la odontología que trabajan de forma coordinada para ofrecer un tratamiento integral y totalmente personalizado.",
  },
  {
    icon: Award,
    title: "Años de experiencia",
    text: "Nuestra experiencia clínica, la formación continua y la incorporación de nuevas tecnologías nos permiten ofrecer tratamientos seguros, precisos y de máxima calidad.",
  },
  {
    icon: ShieldCheck,
    title: "Clínica privada",
    text: "No somos una franquicia. La clínica está dirigida por sus propias fundadoras, que forman parte del equipo y participan activamente en el día a día para garantizar una atención cercana, implicada y completamente personalizada.",
  },
  {
    icon: CreditCard,
    title: "Financiación a medida",
    text: "Disponemos de financiación de hasta 24 meses sin intereses para que puedas comenzar tu tratamiento con total tranquilidad.",
  },
];

export default function WhyChooseUs() {

  return (

    <section className="relative overflow-hidden bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div>

            <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
              ¿Por qué elegirnos?
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
              Mucho más que una clínica dental
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              En Estudio Dental Catalunya creemos que una buena odontología va
              mucho más allá del tratamiento. Apostamos por la cercanía, la
              confianza y una atención totalmente personalizada desde la primera
              visita.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Combinamos experiencia, planificación digital y un equipo
              multidisciplinar para ofrecer soluciones adaptadas a cada paciente
              con un único objetivo: cuidar de tu salud bucodental a largo
              plazo.
            </p>
                        <div className="mt-10">

              <Link
                href="/nosotros"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-cyan-700"
              >
                Conoce nuestra clínica

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

          <div className="relative">

            {/* Decoración */}

            <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl"></div>

            <div className="absolute -bottom-8 -right-8 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl"></div>

            {/* Imagen */}

            <div className="relative overflow-hidden rounded-[34px] shadow-2xl">

              <Image
                src="/images/clinic-team.jpg"
                alt="Equipo de Estudio Dental Catalunya"
                width={900}
                height={1000}
                className="h-[650px] w-full object-cover"
              />

              {/* Degradado */}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent" />

              {/* Tarjeta flotante */}

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-xl">

                <span className="inline-flex rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
                  Atención cercana
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
                  Un equipo comprometido con ofrecer una odontología honesta,
                  cercana y basada en la excelencia clínica.
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Nos implicamos en cada tratamiento como si fuera para nosotros
                  mismos, acompañándote durante todo el proceso para que te
                  sientas siempre informado, tranquilo y en buenas manos.
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
                    {items.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
              >

                {/* Luz decorativa */}

                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition duration-300 group-hover:bg-cyan-600">

                    <Icon
                      size={30}
                      className="text-cyan-600 transition duration-300 group-hover:text-white"
                    />

                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">

                    {item.text}

                  </p>

                </div>

              </article>

            );

          })}

        </div>

        <div className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-cyan-600 via-cyan-700 to-slate-900 p-12 shadow-2xl">
                    <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div className="max-w-3xl">

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">
                Tu sonrisa comienza aquí
              </span>

              <h3 className="mt-5 text-4xl font-bold leading-tight text-white">
                Queremos que vuelvas a sonreír con la tranquilidad de estar en buenas manos.
              </h3>

              <p className="mt-6 text-lg leading-8 text-cyan-50">
                Te asesoraremos de forma honesta, resolveremos todas tus dudas y
                diseñaremos un plan de tratamiento completamente adaptado a tus
                necesidades y objetivos.
              </p>

            </div>

            <div className="flex flex-wrap gap-5">

              <Link
                href="/contacto"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-cyan-700 transition duration-300 hover:scale-105 hover:bg-slate-100"
              >
                Primera visita gratuita
              </Link>

              <Link
                href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20información."
                target="_blank"
                className="rounded-full border border-white/30 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900"
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
