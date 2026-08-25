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
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">

        {/* Imagen */}

        <div className="relative">

          {/* Decoración */}

          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-cyan-200/40 blur-3xl lg:-left-8 lg:-top-8 lg:h-40 lg:w-40" />

          <div className="absolute -bottom-6 -right-6 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl lg:-bottom-8 lg:-right-8 lg:h-52 lg:w-52" />

          <div className="relative overflow-hidden rounded-[24px] shadow-xl lg:rounded-[32px] lg:shadow-2xl">

            <Image
              src={image}
              alt={title}
              width={900}
              height={900}
              className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[560px] transition duration-500 lg:hover:scale-105"
            />

          </div>

        </div>

        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 sm:px-5 sm:text-sm sm:tracking-[0.25em]">
            {badge}
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            {description1}
          </p>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            {description2}
          </p>

          {/* Tarjetas */}

          <div className="mt-7 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                Atención personalizada
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
                Estudiamos cada caso de forma individual para ofrecer el
                tratamiento más adecuado según tus necesidades.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                Tecnología digital
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
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