export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-cyan-700 to-cyan-500 py-24">

      <div className="mx-auto max-w-6xl px-8">

        <div className="rounded-[40px] bg-white p-12 shadow-2xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Primera visita gratuita
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">
                Recupera tu sonrisa con un equipo especializado
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                En Estudio Dental Catalunya analizamos tu caso de forma personalizada
                para ofrecerte la mejor solución. La primera visita incluye
                exploración, radiografías y diagnóstico sin compromiso.
              </p>

            </div>

            <div>

              <div className="space-y-5 text-lg">

                <div className="flex gap-4">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>4 odontólogos con más de 10 años de experiencia.</span>
                </div>

                <div className="flex gap-4">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Especialistas en implantología avanzada.</span>
                </div>

                <div className="flex gap-4">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>CBCT y planificación digital 3D.</span>
                </div>

                <div className="flex gap-4">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Sedación consciente para mayor comodidad.</span>
                </div>

                <div className="flex gap-4">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Financiación hasta 24 meses sin intereses.</span>
                </div>

              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#contacto"
                  className="rounded-full bg-cyan-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-cyan-700"
                >
                  Reservar primera visita
                </a>

                <a
                  href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20información%20sobre%20implantes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-green-500 px-8 py-4 text-center font-semibold text-green-600 transition hover:bg-green-500 hover:text-white"
                >
                  Hablar por WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}