import {
  ShieldCheck,
  Scan,
  Smile,
  Wallet,
  Users,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Más de 10 años de experiencia",
    text: "Nuestro equipo de cuatro odontólogos cuenta con una amplia experiencia en implantología y tratamientos personalizados.",
  },
  {
    icon: Scan,
    title: "Planificación digital 3D",
    text: "Realizamos un estudio mediante CBCT para planificar cada implante con la máxima precisión y seguridad.",
  },
  {
    icon: Smile,
    title: "Resultados naturales",
    text: "Trabajamos para recuperar la función y la estética de tu sonrisa con resultados duraderos y totalmente personalizados.",
  },
  {
    icon: Users,
    title: "Clínica privada",
    text: "No somos una franquicia. Los propios odontólogos son quienes realizan tu diagnóstico y tratamiento.",
  },
  {
    icon: Wallet,
    title: "Financiación hasta 24 meses sin intereses",
    text: "Disponemos de financiación sin intereses para que puedas realizar tu tratamiento con tranquilidad.",
  },
  {
    icon: HeartHandshake,
    title: "Atención cercana",
    text: "Escuchamos tus necesidades, resolvemos tus dudas y te explicamos todas las opciones para que puedas decidir con confianza.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            ¿Por qué elegirnos?
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Tu sonrisa en manos de especialistas
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Cada tratamiento se planifica de forma totalmente personalizada para
            conseguir un resultado funcional, estético y duradero utilizando
            tecnología de última generación.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition-colors duration-300 group-hover:bg-cyan-600">

                  <Icon
                    size={32}
                    className="text-cyan-600 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {benefit.text}
                </p>

              </div>

            );

          })}

        </div>
      </div>
    </section>
  );
}