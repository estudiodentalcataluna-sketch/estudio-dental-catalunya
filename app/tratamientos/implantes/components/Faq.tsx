"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Duele colocarse un implante dental?",
    answer:
      "La intervención se realiza con anestesia local y, cuando es necesario, con sedación consciente. La mayoría de nuestros pacientes describen el postoperatorio como mucho más cómodo de lo que esperaban.",
  },
  {
    question: "¿Cuánto dura un implante dental?",
    answer:
      "Con una buena higiene oral y revisiones periódicas, un implante puede durar muchos años. Nuestro objetivo es ofrecer tratamientos duraderos y de máxima calidad.",
  },
  {
    question: "¿Qué ocurre si no tengo suficiente hueso?",
    answer:
      "En muchos casos podemos realizar regeneraciones óseas o elevaciones de seno para permitir la colocación del implante con total seguridad.",
  },
  {
    question: "¿Qué marca de implantes utilizáis?",
    answer:
      "Trabajamos con implantes Neodent, una marca reconocida internacionalmente por su calidad y excelentes resultados clínicos.",
  },
  {
    question: "¿La primera visita es gratuita?",
    answer:
      "Sí. Incluye la exploración clínica, radiografías y un diagnóstico personalizado para valorar tu caso.",
  },
  {
    question: "¿Se puede financiar el tratamiento?",
    answer:
      "Sí. Disponemos de financiación de hasta 24 meses sin intereses para facilitar el acceso al tratamiento.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-5xl px-8">

        <div className="text-center">

          <span className="text-cyan-600 font-semibold uppercase tracking-[0.25em]">
            Preguntas frecuentes
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Resolvemos tus dudas
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Estas son las preguntas que más recibimos antes de un tratamiento de implantes.
          </p>

        </div>

        <div className="mt-16 space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >

                <span className="font-semibold text-xl text-slate-900">
                  {faq.question}
                </span>

                <span className="text-3xl text-cyan-600">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (

                <div className="px-8 pb-8 text-slate-600 leading-8">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}