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
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      {/* Imagen */}

      <Image
        src="/images/clinic.jpg"
        alt="Clínica dental Estudio Dental Catalunya en Sant Boi de Llobregat"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/25" />

      {/* Degradado */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-transparent" />

      {/* Fade inferior */}

      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white via-white/70 to-transparent" />

      {/* Contenido */}

      <div className="relative z-10 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-7xl px-8">

          <div className="max-w-4xl pt-40 pb-28">

            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-white/10 px-6 py-3 backdrop-blur-xl">

              <MapPin className="h-4 w-4 text-cyan-300" />

              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">

                Clínica Dental en Sant Boi de Llobregat

              </span>

            </div>

            {/* H1 SEO */}

            <h1 className="mt-10 text-5xl font-black leading-[1.05] text-white md:text-7xl xl:text-8xl">

              Implantes Dentales,

              <span className="block text-cyan-300">

                Ortodoncia y Estética Dental

              </span>

            </h1>

            {/* Subtítulo */}

            <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-100 md:text-2xl">

              En <strong>Estudio Dental Catalunya</strong> ayudamos a recuperar
              la salud y la estética de tu sonrisa mediante tratamientos
              personalizados de implantología, ortodoncia invisible,
              odontología general y estética dental con tecnología digital de
              última generación.

            </p>
                        {/* Beneficios rápidos */}

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-xl">

                ✓ Primera visita gratuita + radiografías

              </div>

              <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-xl">

                ✓ Financiación hasta 24 meses

              </div>

              <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-xl">

                ✓ Clínica dental privada

              </div>

              <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-xl">

                ✓ Tecnología digital avanzada

              </div>

            </div>

            {/* Botones */}

            <div className="mt-14 flex flex-wrap gap-5">

              <a
                href="#contacto"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-cyan-700"
              >
                Reservar primera visita gratuita

                <ArrowRight size={22} />

              </a>

              <a
                href="tel:+34930067281"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-900"
              >
                <Phone size={22} />

                930 067 281

              </a>

            </div>

            {/* Estadísticas */}

            <div className="mt-16 flex flex-wrap gap-12">

              <div>

                <div className="text-5xl font-black text-cyan-300">

                  +10

                </div>

                <p className="mt-2 text-slate-200">

                  Años de experiencia

                </p>

              </div>

              <div>

                <div className="text-5xl font-black text-cyan-300">

                  7

                </div>

                <p className="mt-2 text-slate-200">

                  Profesionales especializados

                </p>

              </div>

              <div>

                <div className="text-5xl font-black text-cyan-300">

                  24M

                </div>

                <p className="mt-2 text-slate-200">

                  Financiación disponible

                </p>

              </div>

              <div>

                <div className="flex items-center gap-2 text-yellow-400">

                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />

                </div>

                <p className="mt-2 text-slate-200">

                  Atención personalizada

                </p>

              </div>

            </div>
                        {/* Tarjetas */}

            <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">

                  <CalendarCheck className="text-cyan-300" size={34} />

                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">

                  Primera visita gratuita

                </h2>

                <p className="mt-4 leading-8 text-slate-200">

                  Incluye radiografías digitales, diagnóstico personalizado y
                  plan de tratamiento sin compromiso.

                </p>

              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">

                  <CreditCard className="text-cyan-300" size={34} />

                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">

                  Financiación a medida

                </h2>

                <p className="mt-4 leading-8 text-slate-200">

                  Financiación flexible de hasta 24 meses para que puedas
                  comenzar tu tratamiento sin preocupaciones.

                </p>

              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">

                  <ShieldCheck className="text-cyan-300" size={34} />

                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">

                  Clínica dental privada

                </h2>

                <p className="mt-4 leading-8 text-slate-200">

                  Atención cercana, tiempos de espera reducidos y un mismo
                  equipo acompañándote durante todo el tratamiento.

                </p>

              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">

                  <CheckCircle2 className="text-cyan-300" size={34} />

                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">

                  Todas las especialidades

                </h2>

                <p className="mt-4 leading-8 text-slate-200">

                  Implantes dentales, ortodoncia, Invisalign®, estética dental,
                  cirugía oral, endodoncia, periodoncia y odontología general en
                  un mismo centro.

                </p>

              </div>

            </div>
                      </div>

        </div>

      </div>

      {/* Degradado inferior */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}