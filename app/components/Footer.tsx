import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Camera,
  MessageCircle,
  Calendar,
} from "lucide-react";

import AppointmentButton from "./AppointmentButton";

const treatments = [
  { name: "Implantes Dentales", href: "/tratamientos/implantes" },
  { name: "Ortodoncia", href: "/tratamientos/ortodoncia" },
  { name: "Ortodoncia Invisible", href: "/tratamientos/ortodoncia-invisible" },
  { name: "Estética Dental", href: "/tratamientos/estetica-dental" },
  { name: "Carillas Dentales", href: "/tratamientos/carillas-dentales" },
  { name: "Blanqueamiento Dental", href: "/tratamientos/blanqueamiento-dental" },
  { name: "Endodoncia", href: "/tratamientos/endodoncia" },
  { name: "Periodoncia", href: "/tratamientos/periodoncia" },
  { name: "Prótesis Dentales", href: "/tratamientos/protesis-dentales" },
  { name: "Odontología General", href: "/tratamientos/odontologia-general" },
  { name: "Odontopediatría", href: "/tratamientos/odontopediatria" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-8 py-24">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Columna 1 — Logo y cita */}

          <div>
            <Image
              src="/images/logo-header.png"
              alt="Estudio Dental Catalunya"
              width={240}
              height={70}
              className="mb-8"
            />

            <p className="leading-8 text-slate-400">
              Clínica dental privada en Sant Boi de Llobregat especializada en
              implantología, ortodoncia, estética dental y odontología integral
              para toda la familia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="https://wa.me/34640317047"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold transition hover:bg-green-600"
              >
                <MessageCircle size={18} />
                WhatsApp
              </Link>

              <AppointmentButton
                className="flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 font-semibold transition hover:bg-cyan-700"
              >
                <Calendar size={18} />
                Primera visita
              </AppointmentButton>

            </div>
          </div>

          {/* Columna 2 — Tratamientos */}

          <div>
            <h3 className="mb-7 text-xl font-bold">
              Tratamientos
            </h3>

            <div className="space-y-3">
              {treatments.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-400 transition duration-300 hover:translate-x-1 hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm leading-7 text-slate-400">
                Tratamientos personalizados con diagnóstico digital,
                planificación individualizada y tecnología de última generación.
              </p>
            </div>
          </div>
                    {/* Columna 3 — Contacto */}

          <div>
            <h3 className="mb-7 text-xl font-bold">
              Contacto
            </h3>

            <div className="space-y-6">

              {/* Dirección */}

              <div className="flex gap-4">
                <MapPin
                  className="mt-1 shrink-0 text-cyan-400"
                  size={20}
                />

                <div className="leading-7 text-slate-400">
                  Calle Mallorca 40 Local 2
                  <br />
                  08830 Sant Boi de Llobregat
                </div>
              </div>

              {/* Teléfonos */}

              <div className="flex gap-4">
                <Phone
                  className="mt-1 shrink-0 text-cyan-400"
                  size={20}
                />

                <div className="space-y-1 text-slate-400">
                  <Link
                    href="tel:+34930067281"
                    className="block transition hover:text-cyan-400"
                  >
                    930 067 281
                  </Link>

                  <Link
                    href="tel:+34640317047"
                    className="block transition hover:text-cyan-400"
                  >
                    640 31 70 47
                  </Link>
                </div>
              </div>

              {/* Email */}

              <div className="flex gap-4">
                <Mail
                  className="mt-1 shrink-0 text-cyan-400"
                  size={20}
                />

                <Link
                  href="mailto:estudiodentalcataluna@gmail.com"
                  className="break-all text-slate-400 transition hover:text-cyan-400"
                >
                  estudiodentalcataluna@gmail.com
                </Link>
              </div>

              {/* Horario */}

              <div className="flex gap-4">
                <Clock3
                  className="mt-1 shrink-0 text-cyan-400"
                  size={20}
                />

                <div className="leading-7 text-slate-400">

                  <strong className="text-white">
                    Lunes a Jueves
                  </strong>

                  <br />

                  10:00 - 14:00 · 15:00 - 20:00

                  <br />
                  <br />

                  <strong className="text-white">
                    Viernes
                  </strong>

                  <br />

                  10:00 - 14:00

                </div>
              </div>

            </div>
          </div>
                    {/* Columna 4 — Redes y cita */}

          <div>
            <h3 className="mb-7 text-xl font-bold">
              Síguenos
            </h3>

            <p className="leading-7 text-slate-400">
              Comparte nuestro día a día y descubre consejos de salud bucodental,
              novedades y algunos de nuestros tratamientos.
            </p>

            <div className="mt-8 space-y-4">

              <Link
                href="https://instagram.com/edental.catalunya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 px-6 py-3 font-semibold transition duration-300 hover:scale-105"
              >
                <Camera size={20} />
                Instagram
              </Link>

              <Link
                href="https://wa.me/34640317047"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 rounded-full bg-green-500 px-6 py-3 font-semibold transition duration-300 hover:bg-green-600"
              >
                <MessageCircle size={20} />
                Escribir por WhatsApp
              </Link>

            </div>

            {/* Bloque de cita */}

            <div className="mt-10 rounded-2xl border border-cyan-900/40 bg-cyan-950/30 p-6">

              <h4 className="text-lg font-semibold text-white">
                ¿Necesitas una cita?
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Solicita tu primera visita y te ayudaremos a encontrar el
                tratamiento más adecuado para ti.
              </p>

              <AppointmentButton
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
              >
                <Calendar size={18} />
                Primera visita gratuita
              </AppointmentButton>

            </div>

          </div>

        </div>

        {/* Línea inferior */}

        <div className="mt-20 border-t border-slate-800 pt-10">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 lg:justify-start">

              <Link
                href="/aviso-legal"
                className="transition hover:text-cyan-400"
              >
                Aviso Legal
              </Link>

              <Link
                href="/politica-privacidad"
                className="transition hover:text-cyan-400"
              >
                Política de Privacidad
              </Link>

              <Link
                href="/politica-cookies"
                className="transition hover:text-cyan-400"
              >
                Política de Cookies
              </Link>

            </div>

            <div className="text-center lg:text-right">

              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Estudio Dental Catalunya
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Clínica Dental Privada · Sant Boi de Llobregat
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}