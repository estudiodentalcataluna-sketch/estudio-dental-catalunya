"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">

        <div className="rounded-2xl border border-white/30 bg-white/55 backdrop-blur-xl shadow-xl">

          <div className="flex items-center justify-between px-8 py-3">

            {/* Logo */}

            <a href="/" className="flex items-center">

              <Image
                src="/images/logo-header.png"
                alt="Estudio Dental Catalunya"
                width={240}
                height={70}
                priority
                className="h-auto w-[160px] md:w-[220px] transition-transform duration-300 hover:scale-105"
              />

            </a>

            {/* Menú escritorio */}

            <nav className="hidden md:flex items-center gap-10 text-[17px] font-medium text-slate-700">

              <a
                href="#clinica"
                className="transition hover:text-cyan-600"
              >
                La Clínica
              </a>

              <a
                href="#tratamientos"
                className="transition hover:text-cyan-600"
              >
                Tratamientos
              </a>

              <a
                href="#reviews"
                className="transition hover:text-cyan-600"
              >
                Opiniones
              </a>

              <a
                href="#contacto"
                className="transition hover:text-cyan-600"
              >
                Contacto
              </a>

            </nav>

            {/* Botón WhatsApp */}

            <div className="hidden md:block">

              <a
                href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
              >
                WhatsApp
              </a>

            </div>

            {/* Botón menú móvil */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-800"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>

        {/* Menú móvil */}

        {menuOpen && (

          <div className="mt-3 rounded-2xl border border-white/30 bg-white/90 backdrop-blur-xl shadow-xl md:hidden">

            <nav className="flex flex-col gap-6 p-8 text-lg font-medium">

              <a
                href="#clinica"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-600 transition"
              >
                La Clínica
              </a>

              <a
                href="#tratamientos"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-600 transition"
              >
                Tratamientos
              </a>

              <a
                href="#reviews"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-600 transition"
              >
                Opiniones
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-600 transition"
              >
                Contacto
              </a>

              <a
                href="https://wa.me/34640317047"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 py-4 text-center text-white font-semibold transition hover:bg-green-600"
              >
                Solicitar cita por WhatsApp
              </a>

            </nav>

          </div>

        )}

      </header>
    </>
  );
}