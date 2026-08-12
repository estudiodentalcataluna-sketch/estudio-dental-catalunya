"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34640317047?text=Hola,%20me%20gustaría%20pedir%20una%20cita."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={32} />
    </a>
  );
}