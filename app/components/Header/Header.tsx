"use client";

import TopBar from "./TopBar";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="relative z-50 w-full">
      <TopBar />

      <div className="relative">
        <Navbar />

        {/* Menú móvil */}
        <div className="absolute right-4 top-1/2 z-[60] -translate-y-1/2 sm:right-6 xl:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}