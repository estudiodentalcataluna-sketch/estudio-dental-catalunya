import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  ClipboardCheck,
  ScanLine,
  FileText,
  SmilePlus,
} from "lucide-react";

export default function NosotrosPage() {

  return (

    <main className="bg-white">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <Image
          src="/images/clinic-team.jpg"
          alt="Equipo Estudio Dental Catalunya"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/55"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/55 to-transparent"></div>

        <div className="relative z-10 flex min-h-[85vh] items-center">

          <div className="mx-auto max-w-7xl px-8 w-full">

            <div className="max-w-3xl pt-24">

              <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/15 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur">

                Nuestra Clínica

              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">

                Mucho más que
                <br />
                una clínica dental.

              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-200">

                En Estudio Dental Catalunya creemos que la mejor odontología
                nace de la cercanía, la honestidad y un equipo comprometido con
                ofrecer una atención totalmente personalizada desde la primera
                visita.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  href="/contacto"
                  className="rounded-full bg-cyan-600 px-9 py-5 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-cyan-700"
                >
                  Primera visita gratuita
                </Link>

                <Link
                  href="https://wa.me/34640317047"
                  target="_blank"
                  className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-9 py-5 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:bg-white hover:text-slate-900"
                >

                  <MessageCircle size={22} />

                  WhatsApp

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Nuestra historia */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl gap-20 px-8 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Nuestra historia
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
              Una forma diferente de entender la odontología.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Estudio Dental Catalunya nació con el propósito de ofrecer una
              odontología moderna donde cada paciente se sienta escuchado,
              comprendido y acompañado durante todo su tratamiento.

            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Apostamos por un trato cercano, una planificación rigurosa y la
              incorporación constante de nuevas tecnologías para ofrecer la
              máxima calidad asistencial.

            </p>

          </div>

          <div className="space-y-6">
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

              <CheckCircle2 className="text-cyan-600" size={34} />

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Atención personalizada
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Cada paciente recibe un diagnóstico individualizado y un plan de
                tratamiento adaptado a sus necesidades, prioridades y objetivos.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

              <CheckCircle2 className="text-cyan-600" size={34} />

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Tecnología y formación continua
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Combinamos experiencia clínica con herramientas de diagnóstico
                digital para ofrecer tratamientos más precisos, cómodos y
                predecibles.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

              <CheckCircle2 className="text-cyan-600" size={34} />

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Compromiso con el paciente
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Nuestro objetivo es que te sientas informado, acompañado y con
                la tranquilidad de saber que estás en manos de un equipo que se
                implica en cada tratamiento.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Filosofía */}
            <section className="bg-slate-50 py-28">

        <div className="mx-auto max-w-7xl px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Nuestra filosofía
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              La confianza es el mejor tratamiento.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Nuestra forma de trabajar se basa en cuatro valores que están
              presentes en cada diagnóstico, cada tratamiento y cada paciente
              que entra por la puerta de la clínica.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <article className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <HeartHandshake className="text-cyan-600" size={36} />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Cercanía
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Escuchamos a cada paciente y dedicamos el tiempo necesario para
                resolver dudas y generar confianza.
              </p>

            </article>

            <article className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <GraduationCap className="text-cyan-600" size={36} />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Formación
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Apostamos por la formación continua y la innovación para ofrecer
                tratamientos actualizados y seguros.
              </p>

            </article>

            <article className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <ShieldCheck className="text-cyan-600" size={36} />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Honestidad
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Explicamos cada tratamiento con claridad y solo recomendamos lo
                que realmente necesita cada paciente.
              </p>

            </article>

            <article className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <Sparkles className="text-cyan-600" size={36} />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Excelencia
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Buscamos resultados funcionales, estéticos y duraderos cuidando
                hasta el más mínimo detalle.
              </p>

            </article>

          </div>

        </div>

      </section>

      {/* Cómo trabajamos */}
            <section className="py-28">

        <div className="mx-auto max-w-7xl px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Cómo trabajamos
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Un proceso claro, cercano y personalizado
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Queremos que te sientas acompañado desde el primer día. Por eso,
              seguimos un proceso transparente para que siempre sepas qué vamos
              a hacer y por qué lo hacemos.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

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
                Escuchamos tus necesidades, revisamos tu caso y resolvemos todas
                tus dudas con total tranquilidad.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

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
                Utilizamos tecnología de diagnóstico para estudiar tu caso con
                precisión y planificar el tratamiento adecuado.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
                <FileText className="text-cyan-600" size={30} />
              </div>

              <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                Paso 3
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Plan personalizado
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Te explicamos todas las opciones disponibles y elaboramos un
                plan adaptado a tus necesidades y objetivos.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

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
                Continuamos a tu lado después del tratamiento para asegurar una
                evolución correcta y resultados duraderos.
              </p>

            </article>

          </div>

        </div>

      </section>

      {/* CTA Final */}
            <section className="pb-28">

        <div className="mx-auto max-w-7xl px-8">

          <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-cyan-600 via-cyan-700 to-slate-900 p-12 shadow-2xl">

            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

              <div className="max-w-3xl">

                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">
                  ¿Hablamos?
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-tight text-white">
                  Queremos ayudarte a conseguir una sonrisa sana, funcional y natural.
                </h2>

                <p className="mt-6 text-lg leading-8 text-cyan-50">
                  Estaremos encantados de conocerte, estudiar tu caso y resolver
                  todas tus dudas sin compromiso. Nuestro objetivo es que tomes
                  la mejor decisión con total tranquilidad.
                </p>

              </div>

              <div className="flex flex-wrap gap-5">

                <Link
                  href="/contacto"
                  className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-cyan-700 transition duration-300 hover:scale-105 hover:bg-slate-100"
                >
                  Primera visita gratuita
                </Link>

                <Link
                  href="https://wa.me/34640317047"
                  target="_blank"
                  className="flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}
