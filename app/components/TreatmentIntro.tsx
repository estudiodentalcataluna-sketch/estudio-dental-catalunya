import Image from "next/image";

interface TreatmentIntroProps {
  badge: string;
  title: string;
  description1: string;
  description2: string;
  image: string;
}

export default function TreatmentIntro({
  badge,
  title,
  description1,
  description2,
  image,
}: TreatmentIntroProps) {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">
                {/* Imagen */}

        <div className="relative">

          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl"></div>

          <div className="absolute -bottom-8 -right-8 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src={image}
              alt={title}
              width={900}
              height={900}
              className="h-[560px] w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

        </div>

        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">

            {badge}

          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">

            {title}

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            {description1}

          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            {description2}

          </p>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <h3 className="text-lg font-bold text-slate-900">
                Atención personalizada
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Estudiamos cada caso de forma individual para ofrecer el
                tratamiento más adecuado según tus necesidades.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <h3 className="text-lg font-bold text-slate-900">
                Tecnología digital
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Utilizamos herramientas de diagnóstico y planificación digital
                para conseguir tratamientos más precisos y predecibles.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}