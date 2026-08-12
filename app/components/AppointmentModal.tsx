"use client";

import { useState } from "react";
import { useAppointment } from "./AppointmentProvider";

export default function AppointmentModal() {
  const { open, closeModal } = useAppointment();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          reason,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar");
      }

      setSuccess(true);

      setName("");
      setPhone("");
      setReason("");

      setTimeout(() => {
        setSuccess(false);
        closeModal();
      }, 2500);

    } catch (error) {
      console.error(error);

      alert("Ha ocurrido un error al enviar la solicitud.");

    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-6"
      onClick={closeModal}
    >
      <div
        className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-slate-900">
            Solicita tu primera visita gratuita
          </h2>

          <button
            type="button"
            onClick={closeModal}
            className="text-3xl leading-none text-slate-500 hover:text-slate-900"
          >
            ×
          </button>

        </div>

        <p className="mt-4 text-slate-600">
          Déjanos tus datos y nos pondremos en contacto contigo lo antes posible para confirmar tu cita.
        </p>

        {success && (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-center">
            <p className="font-semibold text-green-700">
              ✅ Solicitud enviada correctamente
            </p>

            <p className="mt-2 text-sm text-green-600">
              Nos pondremos en contacto contigo muy pronto.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Nombre y apellidos
            </label>

            <input
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Introduce tu nombre completo"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Número de teléfono
            </label>

            <input
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ej. 612345678"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Motivo de la consulta
            </label>

            <textarea
              rows={5}
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Explícanos brevemente el motivo de tu consulta..."
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Enviando solicitud..." : "Solicitar cita"}
          </button>

        </form>

      </div>
    </div>
  );
}