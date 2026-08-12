import {
  ClipboardCheck,
  ScanLine,
  FileText,
  SmilePlus,
} from "lucide-react";

interface TreatmentProcessProps {
  title: string;
  subtitle: string;
}

export default function TreatmentProcess({
  title,
  subtitle,
}: TreatmentProcessProps) {

  return (

    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Nuestro proceso
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {subtitle}
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
              <ClipboardCheck className="text-cyan-600" size={30} />
            </div>

            <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Paso 1
            </span>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Primera visita
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Escuchamos tus necesidades, realizamos una exploración completa y
              resolvemos todas tus dudas antes de comenzar cualquier tratamiento.
            </p>

          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
              <ScanLine className="text-cyan-600" size={30} />
            </div>

            <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Paso 2
            </span>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Diagnóstico digital
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Estudiamos tu caso mediante pruebas diagnósticas y planificación
              digital para conseguir la máxima precisión.
            </p>

          </article>
                    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
              <FileText className="text-cyan-600" size={30} />
            </div>

            <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Paso 3
            </span>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Plan de tratamiento
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Te explicamos todas las opciones disponibles, el presupuesto y los
              tiempos estimados para que puedas decidir con total confianza.
            </p>

          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
              <SmilePlus className="text-cyan-600" size={30} />
            </div>

            <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Paso 4
            </span>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Seguimiento
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Te acompañamos durante todo el tratamiento y realizamos un
              seguimiento para asegurar una evolución correcta y resultados
              duraderos.
            </p>

          </article>

        </div>

      </div>

    </section>

  );

}
