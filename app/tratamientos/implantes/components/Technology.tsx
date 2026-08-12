import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle,
  HeartHandshake,
  Award,
} from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "CBCT 3D",
    text: "Planificación tridimensional para colocar cada implante con máxima precisión.",
  },
  {
    icon: Award,
    title: "Implantes Neodent",
    text: "Trabajamos con una marca reconocida internacionalmente por su calidad y fiabilidad.",
  },
  {
    icon: HeartHandshake,
    title: "Sedación consciente",
    text: "Mayor comodidad para pacientes con ansiedad o tratamientos complejos.",
  },
  {
    icon: CheckCircle,
    title: "Cirugía avanzada",
    text: "Elevaciones de seno, regeneraciones óseas e implantología compleja.",
  },
];

export default function Technology() {
  return (
    <section className="bg-slate-900 py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="inline-block rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Tecnología
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Precisión, seguridad y experiencia
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Combinamos tecnología de última generación con la experiencia de un
            equipo especializado para ofrecer tratamientos predecibles,
            seguros y duraderos.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >

                <Icon
                  size={40}
                  className="text-cyan-300"
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {card.text}
                </p>

              </div>

            );

          })}

        </div>

        <div className="mt-16 overflow-hidden rounded-[40px] shadow-2xl">

          <Image
            src="/images/tratamientos/implantes/tecnologia.jpg"
            alt="Tecnología implantología"
            width={1600}
            height={900}
            className="w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}