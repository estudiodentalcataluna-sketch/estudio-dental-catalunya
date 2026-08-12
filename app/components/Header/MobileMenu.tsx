"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Botón hamburguesa */}

      <button
        onClick={() => setOpen(true)}
        className="xl:hidden rounded-lg p-2 text-slate-800"
        aria-label="Abrir menú"
      >
        <Menu size={32} />
      </button>

      {/* Fondo */}

      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* Panel lateral */}

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[320px] bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-xl font-bold text-slate-900">
            Menú
          </h2>

          <button
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <X size={30} />
          </button>

        </div>

        <nav className="flex flex-col p-6">

          <Link href="/" onClick={closeMenu} className="py-3 text-lg font-medium">
            Inicio
          </Link>

          <Link href="/tratamientos/implantes" onClick={closeMenu} className="py-3 text-lg">
            Implantes Dentales
          </Link>

          <Link href="/tratamientos/ortodoncia" onClick={closeMenu} className="py-3 text-lg">
            Ortodoncia
          </Link>

          <Link href="/tratamientos/ortodoncia-invisible" onClick={closeMenu} className="py-3 text-lg">
            Ortodoncia Invisible
          </Link>

          <Link href="/tratamientos/estetica-dental" onClick={closeMenu} className="py-3 text-lg">
            Estética Dental
          </Link>

          <Link href="/tratamientos/carillas-dentales" onClick={closeMenu} className="py-3 text-lg">
            Carillas Dentales
          </Link>

          <Link href="/tratamientos/blanqueamiento-dental" onClick={closeMenu} className="py-3 text-lg">
            Blanqueamiento Dental
          </Link>

          <Link href="/tratamientos/endodoncia" onClick={closeMenu} className="py-3 text-lg">
            Endodoncia
          </Link>

          <Link href="/tratamientos/periodoncia" onClick={closeMenu} className="py-3 text-lg">
            Periodoncia
          </Link>

          <Link href="/tratamientos/protesis-dentales" onClick={closeMenu} className="py-3 text-lg">
            Prótesis Dentales
          </Link>

          <Link href="/tratamientos/odontologia-general" onClick={closeMenu} className="py-3 text-lg">
            Odontología General
          </Link>

          <Link href="/tratamientos/odontopediatria" onClick={closeMenu} className="py-3 text-lg">
            Odontopediatría
          </Link>

          <hr className="my-5" />

          <Link href="/equipo" onClick={closeMenu} className="py-3 text-lg">
            Equipo
          </Link>

          <Link href="/nosotros" onClick={closeMenu} className="py-3 text-lg">
            Nosotros
          </Link>

          <Link href="/contacto" onClick={closeMenu} className="py-3 text-lg">
            Contacto
          </Link>

          <Link
            href="/contacto"
            onClick={closeMenu}
            className="mt-8 rounded-full bg-cyan-600 px-6 py-4 text-center font-semibold text-white"
          >
            Primera visita gratuita
          </Link>

        </nav>
      </aside>
    </>
  );
}