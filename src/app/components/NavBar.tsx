"use client";
import { useRef } from "react";
import Link from "next/link";
import NavBarSocials from "./NavBarSocials";
import NavBarMiddle from "./NavBarMiddle";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="bg-cyan-700 p-3 shadow-md text-black" ref={navRef}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/">
          <div className="font-bold text-xl">[Logo]</div>
        </Link>
        {/* Center: Links */}
        <NavBarMiddle />

        {/* Right: Social Icons */}
        <NavBarSocials />
      </div>
    </nav>
  );
}
