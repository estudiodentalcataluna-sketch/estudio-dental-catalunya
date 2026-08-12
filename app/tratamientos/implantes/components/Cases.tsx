import Image from "next/image";
import { ChevronRight } from "lucide-react";

const cases = [
  {
    title: "Implante unitario",
    text: "La mejor solución para sustituir un diente perdido sin afectar a los dientes vecinos.",
    image: "/images/tratamientos/implantes/casos/unitario.jpg",
  },
  {
    title: "Varios dientes",
    text: "Reponemos varios dientes mediante implantes para recuperar la función y la estética.",
    image: "/images/tratamientos/implantes/casos/varios.jpg",
  },
  {
    title: "Rehabilitación completa",
    text: "Recuperamos completamente la sonrisa con tratamientos personalizados sobre implantes.",
    image: "/images/tratamientos/implantes/casos/completa.jpg",
  },
  {
    title: "Elevación de seno",
    text: "Cuando no existe suficiente hueso en el maxilar superior realizamos técnicas avanzadas de regeneración.",
    image: "/images/tratamientos/implantes/casos/seno.jpg",
  },
  {
    title: "Regeneración ósea",
    text: "Aplicamos técnicas regenerativas para que más pacientes puedan recibir implantes con éxito.",
    image: "/images/tratamientos/implantes/casos/regeneracion.jpg",
  },
];

export default function Cases() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Casos que tratamos
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Soluciones para todo tipo de pacientes
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Desde la sustitución de un único diente hasta rehabilitaciones
            completas y cirugías avanzadas. Estudiamos cada caso de forma
            individual para ofrecer la solución más adecuada.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cases.map((item) => (

            <div
              key={item.title}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-64">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.text}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-600">
                  Más información
                  <ChevronRight size={20} />
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}