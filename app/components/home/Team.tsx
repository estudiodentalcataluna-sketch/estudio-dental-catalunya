import Image from "next/image";

const team = [
  {
    id: 1,
    name: "María",
    specialty: "Higienista Dental · Propietaria",
    image: "/images/team/doctor1.png",
  },
  {
    id: 2,
    name: "Lorena",
    specialty: "Higienista Dental · Propietaria",
    image: "/images/team/doctor2.png",
  },
  {
    id: 3,
    name: "Dra. Melisa",
    specialty: "Odontóloga General",
    image: "/images/team/doctor3.png",
  },
  {
    id: 4,
    name: "Dr. Bruno",
    specialty: "Ortodoncista",
    image: "/images/team/doctor4.png",
  },
  {
    id: 5,
    name: "Dr. Roger",
    specialty: "Endodoncista · Diseño de Sonrisa y Estética Dental",
    image: "/images/team/doctor5.png",
  },
  {
    id: 6,
    name: "Dr. Albert",
    specialty: "Cirujano Oral",
    image: "/images/team/doctor6.png",
  },
  {
    id: 7,
    name: "Dra. Débora",
    specialty: "Odontóloga General",
    image: "/images/team/doctor7.png",
  },
];

export default function Team() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-cyan-600 font-semibold uppercase tracking-[0.3em]">
            Nuestro equipo
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Personas que cuidan de tu sonrisa
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Nuestro equipo está formado por profesionales especializados que
            trabajan conjuntamente para ofrecer un tratamiento cercano,
            personalizado y basado en la odontología más actual.
          </p>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {team.map((member) => (

            <article
              key={member.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative flex h-[360px] items-end justify-center overflow-hidden bg-gradient-to-b from-slate-100 to-white">

                <Image
                  src={member.image}
                  alt={member.name}
                  width={260}
                  height={340}
                  priority={member.id <= 2}
                  className="max-h-[330px] w-auto object-contain transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="min-h-[120px] p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-3 text-sm leading-6 font-medium text-cyan-600">
                  {member.specialty}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}