import Link from "next/link";

const services = [
  {
    title: "Implantes Dentales",
    description:
      "Recupera la función y la estética de tu sonrisa con implantes Neodent y planificación digital 3D.",
    href: "/tratamientos/implantes",
  },
  {
    title: "Ortodoncia",
    description:
      "Brackets y ortodoncia invisible para alinear tu sonrisa con tratamientos personalizados.",
    href: "/tratamientos/ortodoncia",
  },
  {
    title: "Estética Dental",
    description:
      "Carillas, blanqueamientos y tratamientos para conseguir una sonrisa natural.",
    href: "/tratamientos/estetica-dental",
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos conservadores para salvar dientes dañados y eliminar el dolor.",
    href: "/tratamientos/endodoncia",
  },
  {
    title: "Periodoncia",
    description:
      "Prevención y tratamiento de enfermedades de las encías para mantener una boca sana.",
    href: "/tratamientos/periodoncia",
  },
  {
    title: "Odontología General",
    description:
      "Revisiones, empastes, limpiezas y cuidado integral para toda la familia.",
    href: "/tratamientos",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Nuestros tratamientos
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Todas las especialidades en una misma clínica
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Contamos con un equipo multidisciplinar para ofrecer soluciones
            personalizadas a cada paciente, desde tratamientos preventivos hasta
            implantología y ortodoncia avanzada.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <span className="mt-8 inline-block font-semibold text-cyan-600">
                Saber más →
              </span>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
