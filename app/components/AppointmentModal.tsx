"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppointment } from "./AppointmentProvider";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AppointmentModal() {
  const { open, closeModal } = useAppointment();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    if (loading) return;

    setErrorMessage("");
    closeModal();
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrorMessage("");

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanReason = reason.trim();

    if (cleanName.length < 2) {
      setErrorMessage("Introduce tu nombre y apellidos.");
      return;
    }

    const phoneDigits = cleanPhone.replace(/\D/g, "");

    if (phoneDigits.length < 9 || phoneDigits.length > 15) {
      setErrorMessage("Introduce un número de teléfono válido.");
      return;
    }

    if (cleanReason.length < 3) {
      setErrorMessage(
        "Indica brevemente el motivo de tu consulta."
      );
      return;
    }

    if (!privacyAccepted) {
      setErrorMessage(
        "Debes aceptar la política de privacidad para enviar la solicitud."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          phone: cleanPhone,
          reason: cleanReason,
          privacyAccepted: true,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error("No se ha podido enviar la solicitud.");
      }

      // Lead confirmado: la solicitud ha sido aceptada correctamente.
      window.gtag?.("event", "appointment_submit", {
        event_category: "lead",
        event_label: "Formulario de cita",
      });

      setSuccess(true);

      setName("");
      setPhone("");
      setReason("");
      setPrivacyAccepted(false);

      setTimeout(() => {
        setSuccess(false);
        closeModal();
      }, 2500);
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Ha ocurrido un error al enviar la solicitud. Inténtalo de nuevo o contacta con nosotros por teléfono o WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/60 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      onClick={handleClose}
    >
      <div
        className="my-8 w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2
              id="appointment-modal-title"
              className="text-2xl font-bold text-slate-900 sm:text-3xl"
            >
              Solicita tu primera visita gratuita
            </h2>

            <p className="mt-4 text-slate-600">
              Déjanos tus datos y nos pondremos en contacto contigo
              lo antes posible para confirmar tu cita.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={loading}
            className="shrink-0 text-3xl leading-none text-slate-400 transition hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Cerrar ventana"
          >
            ×
          </button>
        </div>

        {success ? (
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <p className="font-semibold text-green-700">
              ✓ Solicitud enviada correctamente
            </p>

            <p className="mt-2 text-sm leading-6 text-green-600">
              Nos pondremos en contacto contigo muy pronto para
              confirmar tu cita.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div>
              <label
                htmlFor="appointment-name"
                className="mb-2 block font-medium text-slate-700"
              >
                Nombre y apellidos
              </label>

              <input
                id="appointment-name"
                type="text"
                required
                autoComplete="name"
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Introduce tu nombre completo"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            <div>
              <label
                htmlFor="appointment-phone"
                className="mb-2 block font-medium text-slate-700"
              >
                Número de teléfono
              </label>

              <input
                id="appointment-phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                maxLength={20}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ej. 612 345 678"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            <div>
              <label
                htmlFor="appointment-reason"
                className="mb-2 block font-medium text-slate-700"
              >
                Motivo de la consulta
              </label>

              <textarea
                id="appointment-reason"
                rows={4}
                required
                maxLength={500}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Explícanos brevemente el motivo de tu consulta..."
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  checked={privacyAccepted}
                  onChange={(e) =>
                    setPrivacyAccepted(e.target.checked)
                  }
                  className="mt-1 h-4 w-4 shrink-0 accent-cyan-600"
                />

                <span className="text-sm leading-6 text-slate-600">
                  He leído y acepto la{" "}
                  <Link
                    href="/politica-privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-cyan-700 underline underline-offset-2 hover:text-cyan-800"
                  >
                    Política de Privacidad
                  </Link>{" "}
                  y autorizo el tratamiento de mis datos para
                  gestionar mi solicitud de cita.
                </span>
              </label>
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
              >
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Enviando solicitud..."
                : "Solicitar cita"}
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
              Tus datos se utilizarán únicamente para gestionar tu
              solicitud de cita y contactar contigo.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
