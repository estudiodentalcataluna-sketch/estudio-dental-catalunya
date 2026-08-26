"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import AppointmentButton from "../AppointmentButton";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =========================================================
          CABECERA MÓVIL
          ========================================================= */}

      <div className="flex w-full items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center"
        >
          <Image
            src="/images/logo-header.png"
            alt="Estudio Dental Catalunya"
            width={250}
            height={70}
            priority
            className="h-11 w-auto max-w-[200px] object-contain"
          />
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


      {/* =========================================================
          FONDO OSCURO
          ========================================================= */}

      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[60] bg-black/50"
          aria-hidden="true"
        />
      )}


      {/* =========================================================
          MENÚ LATERAL
          ========================================================= */}

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[min(88vw,360px)] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >

        {/* =====================================================
            CABECERA DEL MENÚ
            ===================================================== */}

        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-5">

          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center"
          >
            <Image
              src="/images/logo-header.png"
              alt="Estudio Dental Catalunya"
              width={200}
              height={60}
              className="h-10 w-auto max-w-[190px] object-contain"
            />
          </Link>


          <button
            type="button"
            onClick={closeMenu}
            className="ml-3 shrink-0 rounded-xl p-2 text-slate-700 transition hover:bg-slate-100"
            aria-label="Cerrar menú"
          >
            <X size={28} />
          </button>

        </div>


        {/* =====================================================
            CONTENIDO
            ===================================================== */}

        <nav className="flex-1 overflow-y-auto bg-white px-5 py-5">

          {/* Inicio */}

          <Link
            href="/"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-lg font-semibold text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Inicio
          </Link>


          <div className="my-3 border-t border-slate-100" />


          {/* Tratamientos */}

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


          {/* Nosotros */}

          <Link
            href="/nosotros"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Nosotros
          </Link>


          {/* =================================================
              CONTACTO
              Abre el modal de cita.
              NO lleva a /contacto.
              ================================================= */}

          <AppointmentButton
            className="mt-1 flex w-full items-center rounded-xl px-4 py-3 text-left text-lg font-medium text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Contacto
          </AppointmentButton>


          {/* =================================================
              PRIMERA VISITA GRATUITA
              Abre el mismo modal.
              ================================================= */}

          <AppointmentButton
            className="mt-6 block w-full rounded-full bg-cyan-600 px-6 py-4 text-center font-bold text-white shadow-lg transition hover:bg-cyan-700"
          >
            Primera visita gratuita
          </AppointmentButton>

        </nav>

      </aside>
    </>
  );
}