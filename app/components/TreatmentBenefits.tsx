import { CheckCircle2 } from "lucide-react";

interface TreatmentBenefitsProps {
  title: string;
  description: string;
  benefits: string[];
}

export default function TreatmentBenefits({
  title,
  description,
  benefits,
}: TreatmentBenefitsProps) {
  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Texto */}

          <div>

            <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Beneficios
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-800 leading-tight">
              {title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description}
            </p>

          </div>

          {/* Tarjetas */}

          <div className="grid gap-6">

            {benefits.map((benefit) => (

              <div
                key={benefit}
                className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">

                  <CheckCircle2 size={30} />

                </div>

                <p className="text-lg font-medium text-slate-700">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}