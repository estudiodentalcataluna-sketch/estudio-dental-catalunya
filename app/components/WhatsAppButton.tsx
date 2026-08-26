"use client";

import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_NUMBER = "34930067281";

const WHATSAPP_MESSAGE =
  "Hola, quiero solicitar información y una primera visita gratuita en Estudio Dental Catalunya.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  const handleClick = () => {
    window.gtag?.("event", "whatsapp_click", {
      event_category: "lead",
      event_label: "WhatsApp",
    });
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar con Estudio Dental Catalunya por WhatsApp"
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={32} strokeWidth={2.5} />
    </a>
  );
}