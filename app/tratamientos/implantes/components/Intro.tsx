import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Intro() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* Imagen */}

        <div className="relative overflow-hidden rounded-[35px] shadow-2xl">

          <Image
            src="/images/tratamientos/implantes/consulta.jpg"
            alt="Consulta de implantología"
            width={900}
            height={1000}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />

        </div>

        {/* Texto */}

        <div>

          <span className="text-cyan-600 font-bold tracking-[0.3em] uppercase">
            Implantología avanzada
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">

            Recuperamos mucho más
            <br />
            que un diente.

          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">

            Perder una pieza dental no solo afecta a la estética. También puede
            dificultar la masticación, alterar la pronunciación y provocar la
            pérdida progresiva de hueso.

          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600">

            En Estudio Dental Catalunya planificamos cada tratamiento mediante
            tecnología CBCT y trabajamos con implantes Neodent para conseguir
            resultados funcionales, naturales y duraderos.

          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <CheckCircle className="text-cyan-600" />
              <span>Especialistas en implantología.</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-cyan-600" />
              <span>Planificación digital 3D mediante CBCT.</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-cyan-600" />
              <span>Sedación consciente para mayor comodidad.</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-cyan-600" />
              <span>Financiación hasta 24 meses sin intereses.</span>
            </div>

          </div>

          <a
            href="#contacto"
            className="mt-12 inline-flex rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
          >
            Reservar primera visita gratuita
          </a>

        </div>

      </div>

    </section>
  );
}