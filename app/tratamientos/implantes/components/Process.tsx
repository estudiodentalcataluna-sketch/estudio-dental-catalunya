import {
  Calendar,
  CheckCircle,
  Circle,
} from "lucide-react";

const steps = [
  {
    title: "Primera visita gratuita",
    text: "Exploración completa, radiografías y diagnóstico personalizado sin compromiso.",
  },
  {
    title: "Estudio CBCT",
    text: "Realizamos un estudio en 3D para planificar el tratamiento con precisión.",
  },
  {
    title: "Colocación del implante",
    text: "La cirugía se realiza con técnicas mínimamente invasivas para una recuperación más cómoda.",
  },
  {
    title: "Cicatrización",
    text: "El implante se integra con el hueso mientras realizamos revisiones periódicas.",
  },
  {
    title: "Corona definitiva",
    text: "Colocamos una corona diseñada para que el resultado sea natural, funcional y duradero.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-8">

        <div className="text-center">

          <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Nuestro proceso
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Tu tratamiento paso a paso
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Desde la primera visita hasta la colocación de la corona definitiva,
            te acompañamos en cada etapa del tratamiento.
          </p>

        </div>

        <div className="mt-20 space-y-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white">
                {index === 0 ? (
                  <Calendar size={26} />
                ) : index === steps.length - 1 ? (
                  <CheckCircle size={26} />
                ) : (
                  <Circle size={22} />
                )}
              </div>

              <div>
                <p className="text-cyan-600 font-semibold">
                  Paso {index + 1}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.text}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}