"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Cabecera móvil */}
      <div className="flex w-full items-center justify-between">
        {/* Logo + nombre */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo-header.png"
            alt="Estudio Dental Catalunya"
            width={180}
            height={50}
            priority
            className="h-10 w-auto object-contain"
          />

          <span className="text-sm font-bold leading-tight text-slate-800 sm:text-base">
            Estudio Dental
            <span className="block text-cyan-600">
              Catalunya
            </span>
          </span>
        </Link>

        {/* Botón hamburguesa */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-xl p-2 text-slate-800 transition hover:bg-slate-100"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <Menu size={30} strokeWidth={2} />
        </button>
      </div>

      {/* Fondo oscuro */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[60] bg-black/50"
          aria-hidden="true"
        />
      )}

      {/* Menú lateral */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[min(88vw,360px)] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Cabecera del menú */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo-header.png"
              alt="Estudio Dental Catalunya"
              width={150}
              height={45}
              className="h-9 w-auto object-contain"
            />

            <span className="text-sm font-bold leading-tight text-slate-800">
              Estudio Dental
              <span className="block text-cyan-600">
                Catalunya
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100"
            aria-label="Cerrar menú"
          >
            <X size={28} />
          </button>
        </div>

        {/* Contenido */}
        <nav className="flex-1 overflow-y-auto bg-white px-5 py-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-lg font-semibold text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Inicio
          </Link>

          <div className="my-3 border-t border-slate-100" />

          <p className="px-4 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
            Tratamientos
          </p>

          <Link
            href="/tratamientos/implantes"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Implantes Dentales
          </Link>

          <Link
            href="/tratamientos/ortodoncia"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Ortodoncia
          </Link>

          <Link
            href="/tratamientos/ortodoncia-invisible"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Ortodoncia Invisible
          </Link>

          <Link
            href="/tratamientos/estetica-dental"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Estética Dental
          </Link>

          <Link
            href="/tratamientos/carillas-dentales"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Carillas Dentales
          </Link>

          <Link
            href="/tratamientos/blanqueamiento-dental"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Blanqueamiento Dental
          </Link>

          <Link
            href="/tratamientos/endodoncia"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Endodoncia
          </Link>

          <Link
            href="/tratamientos/periodoncia"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Periodoncia
          </Link>

          <Link
            href="/tratamientos/protesis-dentales"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Prótesis Dentales
          </Link>

          <Link
            href="/tratamientos/odontologia-general"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Odontología General
          </Link>

          <Link
            href="/tratamientos/odontopediatria"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-base text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Odontopediatría
          </Link>

          <div className="my-4 border-t border-slate-100" />

          <Link
            href="/nosotros"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Contacto
          </Link>

          {/* Botón de cita */}
          <Link
            href="/contacto"
            onClick={closeMenu}
            className="mt-6 block rounded-full bg-cyan-600 px-6 py-4 text-center font-bold text-white shadow-lg transition hover:bg-cyan-700"
          >
            Primera visita gratuita
          </Link>
        </nav>
      </aside>
    </>
  );
}