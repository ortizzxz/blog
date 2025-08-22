"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import NavBarSocials from "./NavBarSocials";
import NavBarMiddle from "./NavBarMiddle";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-cyan-700 shadow-md text-black" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/">
          <div className="font-bold text-xl text-white">[Logo]</div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavBarMiddle />
          <NavBarSocials />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-white focus:outline-none"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-cyan-600 px-4 pt-2 pb-4 space-y-2">
          {/* Pass a callback to close the menu when a link is clicked */}
          <NavBarMiddle mobile onLinkClick={() => setMobileOpen(false)} />
          <NavBarSocials />
        </div>
      )}
    </nav>
  );
}
