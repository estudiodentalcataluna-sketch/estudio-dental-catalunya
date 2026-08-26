"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "cookie_consent";

type Consent = "accepted" | "rejected";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (consent: Consent) => {
    localStorage.setItem(COOKIE_NAME, consent);
    setVisible(false);

    if (consent === "accepted") {
      window.dispatchEvent(new Event("cookie-consent-accepted"));
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[99999] p-3 sm:p-5">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-lg font-bold text-slate-900">
              Utilizamos cookies
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Utilizamos cookies propias y de terceros para mejorar tu
              experiencia de navegación y analizar el uso de nuestra web.
              Puedes aceptar o rechazar las cookies no necesarias.
            </p>

            <a
              href="/politica-cookies"
              className="mt-2 inline-block text-sm font-semibold text-cyan-700 underline underline-offset-2 hover:text-cyan-800"
            >
              Más información sobre cookies
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <button
              type="button"
              onClick={() => handleConsent("rejected")}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Rechazar
            </button>

            <button
              type="button"
              onClick={() => handleConsent("accepted")}
              className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-cyan-700"
            >
              Aceptar cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}