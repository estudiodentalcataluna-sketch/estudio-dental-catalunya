"use client";

import Image from "next/image";
import {
  CalendarCheck,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Star,
  ArrowRight,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Imagen principal */}
      <Image
        src="/images/clinic.jpg"
        alt="Clínica dental Estudio Dental Catalunya en Sant Boi de Llobregat"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="
          object-cover
          object-[62%_center]
          sm:object-[60%_center]
          lg:object-center
        "
      />

      {/* Oscurecimiento general */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Degradado para facilitar la lectura */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-slate-950/80
          via-slate-950/45
          to-transparent
        "
      />

      {/* Degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              flex
              min-h-[calc(100svh-72px)]
              items-center
              py-20
              sm:min-h-[calc(100svh-80px)]
              sm:py-24
              lg:min-h-[calc(100vh-96px)]
              lg:py-28
            "
          >
            <div className="w-full max-w-4xl">
              {/* Ubicación */}
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/40 bg-white/10 px-4 py-2.5 backdrop-blur-xl sm:gap-3 sm:px-6 sm:py-3">
                <MapPin className="h-4 w-4 shrink-0 text-cyan-300" />

                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100 sm:text-sm sm:tracking-[0.18em]">
                  Clínica Dental en Sant Boi de Llobregat
                </span>
              </div>

              {/* Título principal */}
              <h1
                className="
                  mt-6
                  text-4xl
                  font-black
                  leading-[1.02]
                  text-white
                  sm:mt-8
                  sm:text-5xl
                  md:text-6xl
                  lg:mt-10
                  lg:text-7xl
                  xl:text-8xl
                "
              >
                Clínica Dental en Sant Boi
                <span className="block text-cyan-300">
                  Implantes, Ortodoncia y Estética Dental
                </span>
              </h1>

              {/* Descripción */}
              <p
                className="
                  mt-6
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-100
                  sm:mt-8
                  sm:text-lg
                  sm:leading-8
                  lg:mt-10
                  lg:text-2xl
                  lg:leading-9
                "
              >
                En <strong>Estudio Dental Catalunya</strong> cuidamos tu salud
                y tu sonrisa con tratamientos personalizados de implantología,
                ortodoncia invisible, odontología general y estética dental,
                apoyados en tecnología digital avanzada.
              </p>

              {/* Beneficios principales */}
              <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3 lg:gap-4">
                <div className="rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur-xl sm:px-5 sm:py-3">
                  ✓ Primera visita gratuita + radiografías
                </div>

                <div className="rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur-xl sm:px-5 sm:py-3">
                  ✓ Financiación hasta 24 meses sin intereses
                </div>

                <div className="rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur-xl sm:px-5 sm:py-3">
                  ✓ Clínica dental privada
                </div>

                <div className="rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur-xl sm:px-5 sm:py-3">
                  ✓ Tecnología digital avanzada
                </div>
              </div>

              {/* Botones */}
              <div
                className="
                  mt-8
                  flex
                  w-full
                  flex-col
                  gap-3
                  sm:mt-10
                  sm:flex-row
                  sm:flex-wrap
                  sm:gap-4
                  lg:mt-14
                "
              >
                <a
                  href="#contacto"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-cyan-600
                    px-6
                    py-4
                    text-base
                    font-bold
                    text-white
                    shadow-2xl
                    transition
                    duration-300
                    hover:scale-105
                    hover:bg-cyan-700
                    sm:w-auto
                    sm:px-8
                    sm:py-4
                    lg:px-10
                    lg:py-5
                    lg:text-lg
                  "
                >
                  Reservar primera visita gratuita
                  <ArrowRight size={20} />
                </a>

                <a
                  href="https://wa.me/34640317047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    py-4
                    text-base
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition
                    hover:bg-white
                    hover:text-slate-900
                    sm:w-auto
                    sm:px-8
                    lg:px-10
                    lg:py-5
                    lg:text-lg
                  "
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

                <a
                  href="tel:+34930067281"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    py-4
                    text-base
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition
                    hover:bg-white
                    hover:text-slate-900
                    sm:w-auto
                    sm:px-8
                    lg:px-10
                    lg:py-5
                    lg:text-lg
                  "
                >
                  <Phone size={20} />
                  930 067 281
                </a>
              </div>

              {/* Estadísticas */}
              <div
                className="
                  mt-10
                  grid
                  grid-cols-2
                  gap-x-6
                  gap-y-7
                  sm:mt-12
                  sm:flex
                  sm:flex-wrap
                  sm:gap-x-10
                  sm:gap-y-6
                  lg:mt-16
                  lg:gap-12
                "
              >
                <div>
                  <div className="text-4xl font-black text-cyan-300 sm:text-5xl">
                    +10
                  </div>

                  <p className="mt-1 text-sm text-slate-200 sm:mt-2 sm:text-base">
                    Años de experiencia
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-black text-cyan-300 sm:text-5xl">
                    7
                  </div>

                  <p className="mt-1 text-sm text-slate-200 sm:mt-2 sm:text-base">
                    Profesionales especializados
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-black text-cyan-300 sm:text-5xl">
                    24M
                  </div>

                  <p className="mt-1 text-sm text-slate-200 sm:mt-2 sm:text-base">
                    Financiación hasta 24 meses sin intereses
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={19} fill="currentColor" />
                    <Star size={19} fill="currentColor" />
                    <Star size={19} fill="currentColor" />
                    <Star size={19} fill="currentColor" />
                    <Star size={19} fill="currentColor" />
                  </div>

                  <p className="mt-1 text-sm text-slate-200 sm:mt-2 sm:text-base">
                    Atención personalizada
                  </p>
                </div>
              </div>

              {/* Tarjetas */}
              <div
                className="
                  mt-12
                  grid
                  grid-cols-1
                  gap-4
                  sm:mt-16
                  sm:grid-cols-2
                  sm:gap-5
                  xl:mt-20
                  xl:grid-cols-4
                  xl:gap-6
                "
              >
                {/* Tarjeta 1 */}
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:p-6 lg:p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">
                    <CalendarCheck className="text-cyan-300" size={30} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                    Primera visita gratuita
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                    Incluye radiografías digitales, diagnóstico personalizado
                    y plan de tratamiento sin compromiso.
                  </p>
                </div>

                {/* Tarjeta 2 */}
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:p-6 lg:p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">
                    <CreditCard className="text-cyan-300" size={30} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                    Financiación hasta 24 meses sin intereses
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                    Financiación flexible de hasta 24 meses sin intereses para que puedas
                    comenzar tu tratamiento con tranquilidad.
                  </p>
                </div>

                {/* Tarjeta 3 */}
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:p-6 lg:p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">
                    <ShieldCheck className="text-cyan-300" size={30} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                    Clínica dental privada
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                    Atención cercana, tiempos de espera reducidos y un mismo
                    equipo acompañándote durante todo el tratamiento.
                  </p>
                </div>

                {/* Tarjeta 4 */}
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:p-6 lg:p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">
                    <CheckCircle2 className="text-cyan-300" size={30} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                    Todas las especialidades
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                    Implantes dentales, ortodoncia, Invisalign®, estética
                    dental, cirugía oral, endodoncia, periodoncia y
                    odontología general en un mismo centro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Degradado inferior final */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent sm:h-32" />
    </section>
  );
}