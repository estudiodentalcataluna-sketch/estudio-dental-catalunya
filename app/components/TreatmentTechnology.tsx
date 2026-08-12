import {
  Scan,
  MonitorSmartphone,
  Cpu,
  Microscope,
} from "lucide-react";

interface TechnologyItem {
  title: string;
  description: string;
}

interface TreatmentTechnologyProps {
  title: string;
  subtitle: string;
  items: TechnologyItem[];
}

export default function TreatmentTechnology({
  title,
  subtitle,
  items,
}: TreatmentTechnologyProps) {

  const icons = [
    Scan,
    MonitorSmartphone,
    Cpu,
    Microscope,
  ];

  return (

    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Tecnología
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {subtitle}
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item, index) => {

            const Icon = icons[index] ?? Scan;

            return (

              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition duration-300 group-hover:bg-cyan-600">

                  <Icon
                    size={30}
                    className="text-cyan-600 transition duration-300 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

              </article>

            );

          })}

        </div>

      </div>

    </section>

  );

}