import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Estudio Dental Catalunya",
  description:
    "Información sobre el uso de cookies y tecnologías similares en Estudio Dental Catalunya.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Información sobre cookies
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Política de Cookies
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Información sobre las cookies y tecnologías similares que pueden
            utilizarse en este sitio web.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-slate max-w-none">

          <p>
            <strong>Última actualización:</strong> agosto de 2026
          </p>

          <h2>1. ¿Qué son las cookies?</h2>

          <p>
            Las cookies son pequeños archivos que se almacenan en el dispositivo
            de la persona usuaria cuando visita determinados sitios web.
          </p>

          <p>
            Permiten, entre otras funciones, recordar determinadas preferencias,
            facilitar el funcionamiento técnico de una página web y obtener
            información sobre el uso del sitio cuando se utilizan herramientas
            de análisis.
          </p>

          <h2>2. ¿Qué tipo de cookies puede utilizar esta web?</h2>

          <p>
            Este sitio web puede utilizar diferentes categorías de cookies o
            tecnologías similares en función de las funcionalidades activas
            en cada momento.
          </p>

          <h3>Cookies técnicas o necesarias</h3>

          <p>
            Son aquellas necesarias para permitir el funcionamiento básico del
            sitio web, facilitar la navegación o proporcionar determinadas
            funcionalidades solicitadas por la persona usuaria.
          </p>

          <p>
            Estas cookies pueden utilizarse sin necesidad de consentimiento
            cuando resulten estrictamente necesarias para prestar un servicio
            solicitado o permitir la comunicación a través de una red de
            comunicaciones electrónicas.
          </p>

          <h3>Cookies de análisis</h3>

          <p>
            En caso de estar habilitadas, permiten obtener información
            estadística sobre la utilización del sitio web, como las páginas
            visitadas o determinadas interacciones realizadas por las personas
            usuarias.
          </p>

          <p>
            Estas cookies se utilizarán únicamente cuando exista la base
            jurídica necesaria y, cuando corresponda, después de obtener el
            consentimiento de la persona usuaria.
          </p>

          <h3>Cookies de terceros</h3>

          <p>
            Determinados servicios externos integrados en la web pueden
            utilizar sus propias cookies o tecnologías similares.
          </p>

          <p>
            El uso concreto de estas tecnologías dependerá de los servicios
            que estén activos en cada momento.
          </p>

          <h2>3. Cookies utilizadas actualmente</h2>

          <p>
            La configuración concreta de cookies de este sitio web puede
            cambiar cuando se incorporen, eliminen o modifiquen servicios
            tecnológicos.
          </p>

          <p>
            Por este motivo, la información sobre cookies deberá mantenerse
            actualizada en función de las herramientas efectivamente instaladas
            y utilizadas en cada momento.
          </p>

          <div className="my-8 overflow-hidden rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                      Tipo
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                      Finalidad
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                      Duración
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-200 px-5 py-4">
                      Técnicas
                    </td>
                    <td className="border-b border-slate-200 px-5 py-4">
                      Funcionamiento y seguridad del sitio web
                    </td>
                    <td className="border-b border-slate-200 px-5 py-4">
                      Según la función concreta
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4">
                      Análisis
                    </td>
                    <td className="px-5 py-4">
                      Estadísticas y medición del uso de la web
                    </td>
                    <td className="px-5 py-4">
                      Según la herramienta utilizada
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            La tabla anterior describe las categorías generales de cookies.
            No debe interpretarse como una relación permanente de todas las
            cookies que puedan existir en el sitio, ya que estas pueden variar
            en función de las herramientas y servicios que se encuentren
            activos.
          </p>

          <h2>4. Cookies de Google Analytics y medición</h2>

          <p>
            Si se utiliza Google Analytics u otra herramienta equivalente para
            medir el tráfico y comportamiento de las personas usuarias, dicha
            herramienta podrá instalar cookies o utilizar tecnologías
            similares de análisis.
          </p>

          <p>
            Estas herramientas se configurarán de acuerdo con la normativa
            aplicable y, cuando sea necesario, requerirán el consentimiento
            previo de la persona usuaria.
          </p>

          <h2>5. Gestión y configuración de cookies</h2>

          <p>
            La persona usuaria puede gestionar determinadas cookies mediante
            la configuración de su navegador.
          </p>

          <p>
            Los navegadores habituales permiten bloquear, eliminar o limitar
            las cookies almacenadas en el dispositivo.
          </p>

          <p>
            La desactivación de determinadas cookies técnicas puede afectar al
            funcionamiento correcto de algunas partes del sitio web.
          </p>

          <h2>6. Consentimiento</h2>

          <p>
            Cuando una cookie no sea estrictamente necesaria para prestar una
            funcionalidad solicitada por la persona usuaria, su utilización
            estará condicionada, cuando corresponda, a la obtención del
            consentimiento previo.
          </p>

          <p>
            La persona usuaria podrá retirar su consentimiento o modificar sus
            preferencias cuando el sitio web disponga de mecanismos específicos
            para ello.
          </p>

          <h2>7. Cookies y formulario de solicitud de cita</h2>

          <p>
            El formulario de solicitud de cita permite enviar determinados
            datos a la clínica para poder atender la solicitud.
          </p>

          <p>
            El envío del formulario no implica por sí mismo la instalación de
            cookies publicitarias ni la creación de un perfil publicitario de
            la persona usuaria.
          </p>

          <h2>8. Actualizaciones</h2>

          <p>
            Esta Política de Cookies puede modificarse cuando cambien las
            cookies, tecnologías o servicios utilizados en el sitio web, o
            cuando resulte necesario para adaptarla a cambios normativos.
          </p>

          <p>
            Se recomienda consultar periódicamente esta página para conocer
            la información vigente.
          </p>

          <h2>9. Más información</h2>

          <p>
            Para obtener información sobre el tratamiento de los datos
            personales puede consultar nuestra{" "}
            <Link
              href="/politica-privacidad"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Política de Privacidad
            </Link>
            .
          </p>

          <p>
            También puede consultar nuestro{" "}
            <Link
              href="/aviso-legal"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Aviso Legal
            </Link>
            .
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
              href="/politica-privacidad"
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}