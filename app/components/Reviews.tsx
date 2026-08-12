import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "María G.",
    text: "El trato ha sido excelente desde el primer momento. Todo el equipo transmite mucha confianza y profesionalidad. Sin duda volveré.",
  },
  {
    name: "Carlos R.",
    text: "Una clínica moderna, muy limpia y con un trato excepcional. Me explicaron todo el tratamiento paso a paso y el resultado ha sido fantástico.",
  },
  {
    name: "Laura P.",
    text: "Después de muchos años con miedo al dentista encontré un equipo que realmente se preocupa por el paciente. Muy recomendable.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-slate-50 py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
            Opiniones
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            La confianza de nuestros pacientes
          </h2>

          <div className="mt-6 flex justify-center">

            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                size={34}
                fill="#facc15"
                color="#facc15"
              />
            ))}

          </div>

          <p className="mt-5 text-xl text-slate-600">
            Atención cercana, resultados de calidad y cientos de pacientes satisfechos.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (

            <article
              key={review.name}
              className="group rounded-3xl bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <Quote
                size={42}
                className="text-cyan-500"
              />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                "{review.text}"
              </p>

              <div className="mt-8 flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-xl text-slate-800">
                    {review.name}
                  </h3>

                  <p className="text-slate-500">
                    Paciente
                  </p>

                </div>

                <div className="flex">

                  {[1,2,3,4,5].map((star)=>(
                    <Star
                      key={star}
                      size={18}
                      fill="#facc15"
                      color="#facc15"
                    />
                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-20 text-center">

          <a
            href="https://www.google.com/search?q=Estudio+Dental+Catalunya+Sant+Boi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-700"
          >
            Ver todas las reseñas en Google
          </a>

        </div>

      </div>
    </section>
  );
}