"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface MenuItem {
  title: string;
  key: string;
  links?: { name: string; href: string }[];
  href?: string; // optional href for single links
  locked?: boolean;
}

const menuItems: MenuItem[] = [
  {
    title: "Primero",
    key: "backend",
    links: [
      { name: "Fundamentos Físicos Informática", href: "/client/projects" },
      { name: "Estadística", href: "/client/overview" },
      { name: "Organización y Gestión Empresas", href: "/client/projects" },
      { name: "Cálculo", href: "/client/projects" },
      { name: "Fundamentos Computadores", href: "/client/projects" },
      { name: "Estructura Datos y Algoritmos", href: "/client/projects" },
      { name: "Álgebra", href: "/client/projects" },
      { name: "Lógica y Matemáticas Discretas", href: "/client/projects" },
      { name: "Ética, Legislación, Profesión", href: "/client/projects" },
    ],
  },
  {
    title: "Segundo",
    key: "frontend",
    links: [],
    locked: true,
  },
  {
    title: "Tercero",
    key: "tertiary",
    links: [],
    locked: true,
  },
  {
    title: "About Me",
    key: "about",
    href: "/about", // single link
  },
];

export default function NavBarMiddle() {
  const navRef = useRef<HTMLUListElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ul className="flex items-center space-x-6 relative" ref={navRef}>
      {menuItems.map((item) => (
        <li key={item.key} className="relative">
          {item.locked ? (
            <span className="opacity-50 cursor-not-allowed">
              {item.title}
            </span>
          ) : item.links ? (
            <>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === item.key ? null : item.key)
                }
                className="hover:text-white transition-colors duration-200"
              >
                {item.title}
              </button>
              {openDropdown === item.key && (
                <ul className="dropdown">
                  <span className="dropdown-arrow"></span>
                  {item.links.map((link) => (
                    <li key={link.href} className="whitespace-nowrap">
                      <Link href={link.href} className="link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              href={item.href!}
              className="hover:text-white transition-colors duration-200"
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
