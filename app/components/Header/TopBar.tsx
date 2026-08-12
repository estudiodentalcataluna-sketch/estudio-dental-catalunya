"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-sm">

        <div className="flex items-center gap-8">

          <Link
            href="tel:+34930067281"
            className="flex items-center gap-2 transition hover:text-cyan-300"
          >
            <Phone size={15} />
            <span>930 067 281</span>
          </Link>

          <Link
            href="https://wa.me/34640317047"
            target="_blank"
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