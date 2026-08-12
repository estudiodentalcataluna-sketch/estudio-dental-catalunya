import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Camera,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-white py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Contacto
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Estamos aquí para ayudarte
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Ponte en contacto con nosotros para resolver cualquier duda o solicitar
            tu primera visita. Estaremos encantados de atenderte.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Información */}

          <div className="space-y-8">

            <div className="flex items-start gap-5 rounded-3xl bg-slate-50 p-6 shadow-sm">

              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <MapPin size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-800">
                  Dirección
                </h3>

                <p className="mt-2 text-slate-600 leading-7">
                  Calle Mallorca 40, Local 2 (esquina)
                  <br />
                  08830 Sant Boi de Llobregat
                </p>

              </div>

            </div>

            <div className="flex items-start gap-5 rounded-3xl bg-slate-50 p-6 shadow-sm">

              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <Phone size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-800">
                  Teléfonos
                </h3>

                <p className="mt-2 text-slate-600">
                  Móvil: 640 31 70 47
                </p>

                <p className="text-slate-600">
                  Fijo: 93 006 72 81
                </p>

              </div>

            </div>

            <div className="flex items-start gap-5 rounded-3xl bg-slate-50 p-6 shadow-sm">

              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <Mail size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-800">
                  Email
                </h3>

                <a
                  href="mailto:estudiodentalcataluna@gmail.com"
                  className="mt-2 block text-cyan-600 hover:underline"
                >
                  estudiodentalcataluna@gmail.com
                </a>

              </div>

            </div>

            <div className="flex items-start gap-5 rounded-3xl bg-slate-50 p-6 shadow-sm">

              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <Clock size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-800">
                  Horario
                </h3>

                <p className="mt-2 text-slate-600">
                  <strong>Lunes a Jueves</strong>
                  <br />
                  10:00 - 14:00
                  <br />
                  15:00 - 20:00
                </p>

                <p className="mt-3 text-slate-600">
                  <strong>Viernes</strong>
                  <br />
                  10:00 - 14:00
                </p>

              </div>

            </div>

            <div className="flex flex-wrap gap-4 pt-6">

              <a
                href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/edental.catalunya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                <Camera size={22} />
                Instagram
              </a>

            </div>

          </div>

          {/* Mapa */}

          <div className="overflow-hidden rounded-[32px] shadow-2xl">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5068050182163!2d2.0394565766315225!3d41.34133677130577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49d75a5a994c7%3A0x7c53fe51fe6c2910!2sEstudio%20dental%20Catalunya!5e0!3m2!1ses!2ses!4v1784110347847!5m2!1ses!2ses"
              width="100%"
              height="700"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

        </div>

      </div>
    </section>
  );
}