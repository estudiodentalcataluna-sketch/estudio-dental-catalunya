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

        <div className="absolute right-8 top-1/2 -translate-y-1/2 xl:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}