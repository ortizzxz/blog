"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface MenuItem {
  title: string;
  key: string;
  links?: { name: string; href: string }[];
  href?: string;
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
  { title: "Segundo", key: "frontend", links: [], locked: true },
  { title: "Tercero", key: "tertiary", links: [], locked: true },
  { title: "About Me", key: "about", href: "/about" },
];

export default function NavBarMiddle({
  mobile,
  onLinkClick,
}: {
  mobile?: boolean;
  onLinkClick?: () => void;
}) {
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
    <ul
      ref={navRef}
      className={`${
        mobile ? "flex flex-col space-y-2" : "flex items-center space-x-6"
      } relative`}
    >
      {menuItems.map((item) => (
        <li key={item.key} className="relative">
          {item.locked ? (
            <span className="opacity-50 cursor-not-allowed">{item.title}</span>
          ) : item.links && item.links.length > 0 ? (
            <>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === item.key ? null : item.key)
                }
                className={`${
                  mobile ? "w-full text-left py-2 px-2" : "hover:text-white"
                } transition-colors duration-200 flex justify-between items-center`}
              >
                {item.title}
                {mobile && (
                  <span className="ml-2">
                    {openDropdown === item.key ? "▲" : "▼"}
                  </span>
                )}
              </button>

              {openDropdown === item.key && (
                <ul
                  className={`${
                    mobile
                      ? "pl-4 border-l border-cyan-400 mt-1 space-y-1"
                      : "dropdown"
                  }`}
                >
                  {item.links.map((link) => (
                    <li key={link.href} className="whitespace-nowrap">
                      <Link
                        href={link.href}
                        className={`${
                          mobile
                            ? "block py-1 px-2 hover:bg-cyan-500 rounded"
                            : "link"
                        }`}
                        onClick={() => {
                          if (onLinkClick) onLinkClick(); // close mobile menu
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              href={item.href || "#"}
              className={`${mobile ? "block py-2 px-2" : "hover:text-white"}`}
              onClick={() => {
                if (onLinkClick) onLinkClick(); // close mobile menu
              }}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
