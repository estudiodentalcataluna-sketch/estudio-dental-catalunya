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
    <section className="relative h-[700px] overflow-hidden">

      {/* Imagen */}

      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Degradado */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/45 to-transparent" />

      {/* Contenido */}

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-7xl px-8">

          <div className="max-w-3xl">

            <span className="inline-block rounded-full bg-cyan-500/20 border border-cyan-400/40 px-5 py-2 text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold backdrop-blur">
              Tratamientos dentales
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">
              {title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-200">
              {subtitle}
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contacto"
                className="rounded-full bg-cyan-600 px-9 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-700"
              >
                Solicitar cita
              </a>

              <a
                href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 bg-white/10 px-9 py-4 text-white font-semibold backdrop-blur transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}