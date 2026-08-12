import {
  CircleCheckBig,
} from "lucide-react";

interface TreatmentIndicationsProps {
  title: string;
  subtitle: string;
  items: string[];
}

export default function TreatmentIndications({
  title,
  subtitle,
  items,
}: TreatmentIndicationsProps) {

  return (

    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Indicaciones
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {subtitle}
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {items.map((item) => (

            <article
              key={item}
              className="group flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
            >

              <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 transition duration-300 group-hover:bg-cyan-600">

                <CircleCheckBig
                  size={28}
                  className="text-cyan-600 transition duration-300 group-hover:text-white"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  Valoraremos tu caso de forma personalizada para determinar si
                  este tratamiento es el más adecuado y ofrecerte la solución
                  que mejor se adapte a tus necesidades.
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}