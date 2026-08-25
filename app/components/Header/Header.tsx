"use client";

import TopBar from "./TopBar";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />

      <div className="relative">
        <Navbar />

        {/* Cabecera móvil */}
        <div className="absolute inset-x-0 top-0 z-[55] flex h-[72px] items-center bg-white px-4 sm:h-20 sm:px-6 xl:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}