import Image from "next/image";
import AppointmentButton from "./AppointmentButton";

interface TreatmentHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function TreatmentHero({
  title,
  subtitle,
  image,
}: TreatmentHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* =========================================================
          VERSIÓN ORDENADOR
          ========================================================= */}

      <div className="relative hidden min-h-[720px] overflow-hidden md:block">

        <Image
          src={image}
          alt={title}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />

        <div className="relative z-10 flex min-h-[720px] items-center">

          <div className="mx-auto w-full max-w-7xl px-8">

            <div className="max-w-4xl">

              <span className="inline-flex items-center rounded-full border border-cyan-300/40 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200 backdrop-blur-xl">
                Tratamientos dentales
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl xl:text-8xl">
                {title}
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-100 md:text-2xl">
                {subtitle}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-xl">
                  ✓ Primera visita gratuita
                </div>

                <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-xl">
                  ✓ Radiografías incluidas
                </div>

                <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-xl">
                  ✓ Planificación digital
                </div>

                <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-xl">
                  ✓ Financiación hasta 24 meses sin intereses
                </div>

              </div>

              {/* Botones */}

              <div className="mt-14 flex flex-wrap gap-5">

                <AppointmentButton
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-cyan-700"
                >
                  Primera visita gratuita
                </AppointmentButton>

                <a
                  href="tel:+34930067281"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-900"
                >
                  930 067 281
                </a>

                <a
                  href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20información."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-900"
                >
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          VERSIÓN MÓVIL
          ========================================================= */}

      <div className="block bg-slate-50 md:hidden">

        <div className="relative h-[270px] w-full overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5">

            <span className="inline-flex rounded-full border border-cyan-300/40 bg-slate-950/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-md">
              Tratamientos dentales
            </span>

          </div>

        </div>


        <div className="relative z-10 -mt-5 mx-4 rounded-3xl bg-white p-6 shadow-xl">

          <h1 className="text-4xl font-black leading-[1.05] text-slate-950">
            {title}
          </h1>

          <div className="mt-5 h-1 w-16 rounded-full bg-cyan-500" />

          <p className="mt-5 text-base leading-7 text-slate-600">
            {subtitle}
          </p>


          <div className="mt-7 grid grid-cols-2 gap-3">

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-lg font-bold text-cyan-600">
                ✓
              </div>

              <p className="mt-1 text-sm font-semibold leading-5 text-slate-700">
                Primera visita gratuita
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-lg font-bold text-cyan-600">
                ✓
              </div>

              <p className="mt-1 text-sm font-semibold leading-5 text-slate-700">
                Radiografías incluidas
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-lg font-bold text-cyan-600">
                ✓
              </div>

              <p className="mt-1 text-sm font-semibold leading-5 text-slate-700">
                Planificación digital
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-lg font-bold text-cyan-600">
                ✓
              </div>

              <p className="mt-1 text-sm font-semibold leading-5 text-slate-700">
                Financiación hasta 24 meses sin intereses
              </p>
            </div>

          </div>


          {/* Botones */}

          <div className="mt-7 space-y-3">

            <AppointmentButton
              className="flex w-full items-center justify-center rounded-full bg-cyan-600 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-cyan-700"
            >
              Primera visita gratuita
            </AppointmentButton>

            <a
              href="tel:+34930067281"
              className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-600"
            >
              930 067 281
            </a>

            <a
              href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-full border border-green-500 px-6 py-4 text-base font-semibold text-green-600 transition hover:bg-green-500 hover:text-white"
            >
              WhatsApp
            </a>

          </div>

        </div>

        <div className="h-8" />

      </div>

    </section>
  );
}