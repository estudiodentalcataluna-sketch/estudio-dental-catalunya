import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | Estudio Dental Catalunya",
  description:
    "Aviso legal de Estudio Dental Catalunya, clínica dental privada en Sant Boi de Llobregat.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Información legal
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Aviso Legal
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Información legal y condiciones de uso del sitio web de
            Estudio Dental Catalunya.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-slate max-w-none">

          <p>
            <strong>Última actualización:</strong> agosto de 2026
          </p>

          <h2>1. Datos identificativos</h2>

          <p>
            En cumplimiento de la normativa aplicable a los servicios de la
            sociedad de la información, se informa de los datos identificativos
            de las titulares del presente sitio web:
          </p>

          <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p>
              <strong>Titulares:</strong>
              <br />
              Lorena Gonzalez Moya
              <br />
              NIF: 53333953N
            </p>

            <p className="mt-5">
              <strong>Titular:</strong>
              <br />
              Maria Isabel Rivero Flores
              <br />
              NIF: 48166901W
            </p>

            <p className="mt-5">
              <strong>Domicilio fiscal:</strong>
              <br />
              Carrer Mallorca 40, Local 2
              <br />
              08830 Sant Boi de Llobregat
              <br />
              Barcelona
            </p>

            <p className="mt-5">
              <strong>Correo electrónico:</strong>
              <br />
              <a
                href="mailto:estudiodentalcataluna@gmail.com"
                className="text-cyan-700 hover:text-cyan-900"
              >
                estudiodentalcataluna@gmail.com
              </a>
            </p>

            <p className="mt-5">
              <strong>Teléfono:</strong>
              <br />
              <a
                href="tel:+34930067281"
                className="text-cyan-700 hover:text-cyan-900"
              >
                930 067 281
              </a>
            </p>

            <p className="mt-5">
              <strong>Sitio web:</strong>
              <br />
              <span className="break-all">
                https://estudiodentalcatalunya.es
              </span>
            </p>
          </div>

          <h2>2. Objeto del sitio web</h2>

          <p>
            El presente sitio web tiene como finalidad proporcionar información
            sobre Estudio Dental Catalunya, sus servicios odontológicos,
            tratamientos, instalaciones y formas de contacto, así como
            facilitar que las personas interesadas puedan solicitar información
            o una cita.
          </p>

          <p>
            La información publicada en este sitio web tiene carácter
            informativo y no sustituye una valoración, diagnóstico o
            asesoramiento profesional realizado de forma presencial por un
            profesional sanitario.
          </p>

          <h2>3. Condiciones de acceso y utilización</h2>

          <p>
            El acceso al sitio web es, con carácter general, gratuito.
            La persona usuaria se compromete a utilizar el sitio web de forma
            lícita, responsable y respetuosa con la legislación vigente y con
            los derechos e intereses de terceros.
          </p>

          <p>
            Queda prohibido utilizar el sitio web con fines ilícitos,
            fraudulentos o que puedan perjudicar, sobrecargar, inutilizar o
            impedir su normal funcionamiento.
          </p>

          <h2>4. Propiedad intelectual e industrial</h2>

          <p>
            Los contenidos del sitio web, incluyendo, entre otros, textos,
            fotografías, elementos gráficos, logotipos, diseños, estructura y
            código, están protegidos por la normativa aplicable en materia de
            propiedad intelectual e industrial.
          </p>

          <p>
            Salvo autorización expresa de sus titulares o cuando la legislación
            aplicable lo permita, no está permitida la reproducción,
            distribución, transformación, comunicación pública o explotación
            de dichos contenidos.
          </p>

          <h2>5. Responsabilidad</h2>

          <p>
            Las titulares procurarán que la información publicada en el sitio
            web sea adecuada y esté actualizada. No obstante, no se garantiza
            que los contenidos estén permanentemente libres de errores,
            omisiones o desactualizaciones.
          </p>

          <p>
            La información relacionada con tratamientos odontológicos se ofrece
            con carácter general y divulgativo. La idoneidad de un tratamiento
            concreto depende de las circunstancias y valoración individual de
            cada paciente.
          </p>

          <h2>6. Enlaces a terceros</h2>

          <p>
            El sitio web puede incluir enlaces a servicios o sitios web de
            terceros, como servicios de comunicación o redes sociales. Estos
            servicios cuentan con sus propias condiciones de uso y políticas de
            privacidad.
          </p>

          <p>
            Las titulares no asumen responsabilidad por los contenidos,
            funcionamiento o políticas de privacidad de sitios web de terceros
            ajenos a su control.
          </p>

          <h2>7. Protección de datos personales</h2>

          <p>
            El tratamiento de los datos personales que puedan facilitarse a
            través del sitio web se realiza de acuerdo con la normativa
            aplicable en materia de protección de datos personales.
          </p>

          <p>
            La información detallada sobre responsables, finalidades, bases
            jurídicas, conservación de los datos, derechos de las personas
            interesadas y demás aspectos relativos al tratamiento de datos puede
            consultarse en nuestra{" "}
            <Link
              href="/politica-privacidad"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Política de Privacidad
            </Link>
            .
          </p>

          <h2>8. Cookies</h2>

          <p>
            Este sitio web puede utilizar cookies y tecnologías similares para
            garantizar su funcionamiento y, cuando corresponda, analizar el uso
            del sitio web o mejorar determinados servicios.
          </p>

          <p>
            La información específica sobre las cookies utilizadas y las
            opciones disponibles para las personas usuarias se encuentra en la{" "}
            <Link
              href="/politica-cookies"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Política de Cookies
            </Link>
            .
          </p>

          <h2>9. Legislación aplicable y jurisdicción</h2>

          <p>
            La relación entre las titulares del sitio web y las personas
            usuarias se regirá por la legislación española aplicable.
          </p>

          <p>
            Para cualquier cuestión que pudiera surgir en relación con el
            acceso o utilización del sitio web, se estará a los órganos
            jurisdiccionales que resulten competentes conforme a la normativa
            aplicable.
          </p>

          <h2>10. Contacto</h2>

          <p>
            Para cualquier consulta relacionada con este sitio web puede
            contactar con las titulares a través del correo electrónico:
          </p>

          <p>
            <a
              href="mailto:estudiodentalcataluna@gmail.com"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              estudiodentalcataluna@gmail.com
            </a>
          </p>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <Link
            href="/"
            className="font-semibold text-cyan-700 hover:text-cyan-900"
          >
            ← Volver a Estudio Dental Catalunya
          </Link>
        </div>
      </article>
    </main>
  );
}