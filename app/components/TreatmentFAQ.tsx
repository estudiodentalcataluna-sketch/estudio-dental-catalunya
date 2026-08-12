"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface TreatmentFAQProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

export default function TreatmentFAQ({
  title,
  subtitle,
  faqs,
}: TreatmentFAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-32">

      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Preguntas frecuentes
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            {title}
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            {subtitle}
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-md border border-slate-200"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-7 text-left"
              >

                <span className="text-xl font-semibold text-slate-800">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-500 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >

                <div className="overflow-hidden">

                  <p className="px-7 pb-7 text-lg leading-8 text-slate-600">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}