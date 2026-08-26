"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TopBar() {
  const handlePhoneClick = () => {
    window.gtag?.("event", "phone_click", {
      event_category: "lead",
      event_label: "Teléfono principal",
    });
  };

  const handleWhatsAppClick = () => {
    window.gtag?.("event", "whatsapp_click", {
      event_category: "lead",
      event_label: "WhatsApp TopBar",
    });
  };

  const whatsappUrl =
    "https://wa.me/34640317047?text=" +
    encodeURIComponent(
      "Hola, quiero solicitar información y una primera visita gratuita en Estudio Dental Catalunya."
    );

  return (
    <div className="hidden bg-slate-900 text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-sm">
        <div className="flex items-center gap-8">
          <Link
            href="tel:+34930067281"
            onClick={handlePhoneClick}
            aria-label="Llamar a Estudio Dental Catalunya al 930 067 281"
            className="flex items-center gap-2 transition hover:text-cyan-300"
          >
            <Phone size={15} />
            <span>930 067 281</span>
          </Link>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            aria-label="Contactar con Estudio Dental Catalunya por WhatsApp"
            className="flex items-center gap-2 transition hover:text-green-400"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </Link>
        </div>

        <div className="flex items-center gap-8 text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <span>Sant Boi de Llobregat</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} />
            <span>L-J 10-14 · 15-20 | V 10-14</span>
          </div>
        </div>
      </div>
    </div>
  );
}