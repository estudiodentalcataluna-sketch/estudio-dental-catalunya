"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Calendar, MessageCircle } from "lucide-react";

import AppointmentButton from "../AppointmentButton";

const treatments = [
  {
    title: "Implantes Dentales",
    href: "/tratamientos/implantes",
  },
  {
    title: "Ortodoncia",
    href: "/tratamientos/ortodoncia",
  },
  {
    title: "Ortodoncia Invisible",
    href: "/tratamientos/ortodoncia-invisible",
  },
  {
    title: "Estética Dental",
    href: "/tratamientos/estetica-dental",
  },
  {
    title: "Carillas Dentales",
    href: "/tratamientos/carillas-dentales",
  },
  {
    title: "Blanqueamiento Dental",
    href: "/tratamientos/blanqueamiento-dental",
  },
  {
    title: "Endodoncia",
    href: "/tratamientos/endodoncia",
  },
  {
    title: "Periodoncia",
    href: "/tratamientos/periodoncia",
  },
  {
    title: "Prótesis Dentales",
    href: "/tratamientos/protesis-dentales",
  },
  {
    title: "Odontología General",
    href: "/tratamientos/odontologia-general",
  },
  {
    title: "Odontopediatría",
    href: "/tratamientos/odontopediatria",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-header.png"
            alt="Estudio Dental Catalunya"
            width={250}
            height={70}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* Menú */}

        <div className="hidden xl:flex items-center gap-10">

          <Link
            href="/"
            className="font-medium text-slate-700 transition hover:text-cyan-600"
          >
            Inicio
          </Link>

          <div
            className="relative pb-5"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >

            <button className="flex items-center gap-2 font-medium text-slate-700 transition hover:text-cyan-600">
              Tratamientos

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute left-0 top-full z-[999] w-[360px] pt-2">

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

                  <div className="border-b border-slate-100 bg-slate-50 px-6 py-5">

                    <h3 className="text-lg font-bold text-slate-900">
                      Tratamientos
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Todas nuestras especialidades odontológicas
                    </p>

                  </div>

                  <div className="py-3">

                    {treatments.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-6 py-3 text-slate-700 transition-all duration-200 hover:bg-cyan-50 hover:text-cyan-700"
                      >
                        {item.title}
                      </Link>
                    ))}

                  </div>

                </div>

              </div>
            )}

          </div>

          <Link
            href="/equipo"
            className="font-medium text-slate-700 transition hover:text-cyan-600"
          >
            Equipo
          </Link>

          <Link
            href="/nosotros"
            className="font-medium text-slate-700 transition hover:text-cyan-600"
          >
            Nosotros
          </Link>

          <AppointmentButton
            className="font-medium text-slate-700 transition hover:text-cyan-600"
          >
            Contacto
          </AppointmentButton>

        </div>

        {/* Botones derecha */}

        <div className="hidden lg:flex items-center gap-4">

          <Link
            href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20una%20cita."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-green-500 px-5 py-3 font-semibold text-green-600 transition-all duration-300 hover:bg-green-500 hover:text-white"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </Link>

          <AppointmentButton
            className="flex items-center gap-2 rounded-full bg-cyan-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-cyan-700"
          >
            <Calendar size={18} />
            <span>Primera visita gratuita</span>
          </AppointmentButton>

        </div>

      </div>
    </nav>
  );
}
