import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Estudio Dental Catalunya",
  description:
    "Política de privacidad y protección de datos de Estudio Dental Catalunya.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Protección de datos
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Política de Privacidad
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Información sobre el tratamiento y protección de los datos
            personales facilitados a través de este sitio web.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-slate max-w-none">

          <p>
            <strong>Última actualización:</strong> agosto de 2026
          </p>

          <h2>1. Responsables del tratamiento</h2>

          <p>
            Los responsables del tratamiento de los datos personales
            recogidos a través de este sitio web son:
          </p>

          <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p>
              <strong>Lorena Gonzalez Moya</strong>
              <br />
              NIF: 53333953N
            </p>

            <p className="mt-5">
              <strong>Maria Isabel Rivero Flores</strong>
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
          </div>

          <h2>2. Qué datos podemos tratar</h2>

          <p>
            A través de este sitio web pueden facilitarse datos personales
            cuando una persona utiliza el formulario de solicitud de cita
            o contacta voluntariamente con la clínica.
          </p>

          <p>
            En particular, el formulario de solicitud de cita puede recoger:
          </p>

          <ul>
            <li>Nombre y apellidos.</li>
            <li>Número de teléfono.</li>
            <li>Motivo de la consulta.</li>
          </ul>

          <p>
            Se recomienda no introducir en el formulario información médica
            especialmente sensible o documentación clínica. Para cuestiones
            relacionadas con la salud, la información necesaria se recabará
            por los canales adecuados y, cuando corresponda, durante la
            atención profesional.
          </p>

          <h2>3. Finalidad del tratamiento</h2>

          <p>
            Los datos facilitados mediante el formulario de contacto o
            solicitud de cita se tratarán con la finalidad de:
          </p>

          <ul>
            <li>
              Atender la solicitud realizada por la persona interesada.
            </li>
            <li>
              Contactar con la persona para responder a su solicitud.
            </li>
            <li>
              Gestionar, cuando proceda, la solicitud de una primera visita
              o cita.
            </li>
            <li>
              Mantener las comunicaciones necesarias relacionadas con la
              solicitud realizada.
            </li>
          </ul>

          <h2>4. Base jurídica</h2>

          <p>
            La base jurídica del tratamiento de los datos facilitados a
            través del formulario será, según corresponda, el consentimiento
            de la persona interesada y la aplicación de medidas
            precontractuales solicitadas por dicha persona.
          </p>

          <p>
            Cuando una persona solicita voluntariamente información o una
            cita, sus datos son tratados para poder atender dicha solicitud.
          </p>

          <h2>5. Carácter obligatorio de los datos</h2>

          <p>
            Los campos que aparecen como obligatorios en el formulario son
            necesarios para poder atender adecuadamente la solicitud.
          </p>

          <p>
            Si la persona interesada no facilita los datos necesarios, puede
            que no sea posible responder a su solicitud o gestionar la cita
            solicitada.
          </p>

          <h2>6. Conservación de los datos</h2>

          <p>
            Los datos personales se conservarán durante el tiempo necesario
            para atender la solicitud realizada y, posteriormente, durante
            los plazos que puedan resultar necesarios para cumplir las
            obligaciones legales aplicables o para la defensa de posibles
            responsabilidades.
          </p>

          <p>
            Cuando los datos dejen de ser necesarios para las finalidades
            indicadas, serán eliminados o, cuando corresponda, conservados
            debidamente bloqueados durante los plazos legalmente exigibles.
          </p>

          <h2>7. Destinatarios y proveedores de servicios</h2>

          <p>
            Los datos pueden ser tratados por proveedores de servicios
            tecnológicos que intervienen en el funcionamiento de la web y
            en la gestión de las comunicaciones realizadas a través de ella,
            siempre de acuerdo con las condiciones y garantías exigibles por
            la normativa aplicable.
          </p>

          <p>
            El formulario de solicitud de cita utiliza un servicio de correo
            electrónico para transmitir la solicitud a la dirección de
            contacto de la clínica.
          </p>

          <p>
            Actualmente, las solicitudes enviadas mediante el formulario no
            se almacenan en una base de datos propia de esta web.
          </p>

          <h2>8. Transferencias internacionales</h2>

          <p>
            Algunos proveedores tecnológicos utilizados para prestar servicios
            relacionados con la web o las comunicaciones pueden encontrarse
            fuera del Espacio Económico Europeo o utilizar infraestructuras
            ubicadas internacionalmente.
          </p>

          <p>
            Cuando resulte aplicable, dichos tratamientos estarán sujetos a
            las garantías y mecanismos de transferencia internacional
            previstos por la normativa de protección de datos.
          </p>

          <h2>9. Derechos de las personas interesadas</h2>

          <p>
            La persona interesada puede ejercer, cuando resulten aplicables,
            los derechos reconocidos por la normativa de protección de datos,
            entre ellos:
          </p>

          <ul>
            <li>Derecho de acceso a sus datos personales.</li>
            <li>Derecho de rectificación de los datos inexactos.</li>
            <li>Derecho de supresión de los datos.</li>
            <li>
              Derecho a solicitar la limitación del tratamiento.
            </li>
            <li>
              Derecho a oponerse al tratamiento en determinadas
              circunstancias.
            </li>
            <li>
              Derecho a la portabilidad de los datos cuando sea aplicable.
            </li>
            <li>
              Derecho a retirar el consentimiento cuando el tratamiento se
              base en él.
            </li>
          </ul>

          <h2>10. Cómo ejercer los derechos</h2>

          <p>
            Para ejercer sus derechos, la persona interesada puede enviar una
            solicitud al correo electrónico:
          </p>

          <p>
            <a
              href="mailto:estudiodentalcataluna@gmail.com"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              estudiodentalcataluna@gmail.com
            </a>
          </p>

          <p>
            La solicitud deberá permitir identificar razonablemente a la
            persona solicitante y especificar el derecho que desea ejercer.
          </p>

          <h2>11. Derecho a presentar una reclamación</h2>

          <p>
            Si la persona considera que el tratamiento de sus datos personales
            no se ajusta a la normativa aplicable, puede presentar una
            reclamación ante la autoridad de control competente en materia de
            protección de datos.
          </p>

          <p>
            En España, la autoridad de control es la Agencia Española de
            Protección de Datos (AEPD).
          </p>

          <h2>12. Seguridad</h2>

          <p>
            Se han adoptado medidas técnicas y organizativas razonables para
            proteger los datos personales frente a accesos no autorizados,
            pérdida, alteración o divulgación indebida.
          </p>

          <p>
            No obstante, ningún sistema de comunicación o almacenamiento
            electrónico puede garantizar una seguridad absoluta.
          </p>

          <h2>13. Datos de menores</h2>

          <p>
            El sitio web puede proporcionar información sobre tratamientos de
            odontopediatría. No obstante, el formulario de solicitud de cita
            está destinado a ser utilizado por personas que tengan capacidad
            para facilitar sus propios datos o, cuando corresponda, por sus
            representantes legales.
          </p>

          <h2>14. Datos de salud</h2>

          <p>
            El sitio web no está diseñado para recopilar historias clínicas
            ni información sanitaria detallada a través del formulario de
            solicitud de cita.
          </p>

          <p>
            Si una persona facilita voluntariamente información relacionada
            con su salud, esta podrá constituir una categoría especial de
            datos personales y será tratada únicamente cuando exista una base
            jurídica válida y resulte necesario para la finalidad
            correspondiente.
          </p>

          <h2>15. Cookies</h2>

          <p>
            El sitio web puede utilizar cookies técnicas y, cuando hayan sido
            configuradas y consentidas por la persona usuaria, cookies o
            tecnologías destinadas a analizar el uso del sitio web.
          </p>

          <p>
            Para obtener información detallada sobre las cookies utilizadas,
            puede consultar nuestra{" "}
            <Link
              href="/politica-cookies"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Política de Cookies
            </Link>
            .
          </p>

          <h2>16. Actualizaciones de esta política</h2>

          <p>
            Esta Política de Privacidad podrá actualizarse cuando sea
            necesario para adaptarla a cambios normativos, técnicos o en los
            servicios ofrecidos a través del sitio web.
          </p>

          <p>
            Se recomienda consultar periódicamente esta página para conocer
            la versión vigente de la política.
          </p>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-wrap gap-5">
            <Link
              href="/"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              ← Volver a Estudio Dental Catalunya
            </Link>

            <Link
              href="/aviso-legal"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Aviso Legal
            </Link>

            <Link
              href="/politica-cookies"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}