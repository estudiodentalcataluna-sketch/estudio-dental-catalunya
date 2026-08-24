import Image from "next/image";

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
    <section className="relative min-h-[720px] overflow-hidden">

      {/* Imagen */}

      <Image
        src={image}
        alt={title}
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/20" />

      {/* Degradado */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-transparent" />

      {/* Blur inferior */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />

      {/* Contenido */}

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
                        {/* Beneficios rápidos */}

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

                ✓ Financiación hasta 24 meses

              </div>

            </div>

            {/* Botones */}

            <div className="mt-14 flex flex-wrap gap-5">

              <a
                href="#contacto"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-cyan-700"
              >
                Primera visita gratuita

              </a>

              <a
                href="tel:+34930067281"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-900"
              >
                930 067 281

              </a>

              <a
                href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-900"
              >
                WhatsApp

              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Degradado inferior */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}