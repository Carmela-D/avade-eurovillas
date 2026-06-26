"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/procesos", label: "Procesos activos" },
  { href: "/libreria", label: "Librería" },
  { href: "/historia", label: "Historia" },
  { href: "/blog", label: "Blog" },
  { href: "/quienes-somos", label: "Quiénes somos" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // iOS Safari ignores overflow:hidden on body alone —
      // locking both html and body prevents the page from scrolling behind the overlay
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center justify-center w-11 h-11 text-avade-marron-profundo hover:text-avade-verde-oscuro hover:bg-avade-beige rounded-sm transition-colors"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        <svg
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-avade-casi-blanco md:hidden flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-avade-beige">
            <Logo size="sm" />
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-avade-marron-profundo hover:text-avade-verde-oscuro transition-colors"
              aria-label="Cerrar menú"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-lg font-sans font-medium text-avade-marron-profundo hover:bg-avade-beige hover:text-avade-verde-oscuro rounded-sm transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-avade-beige space-y-3">
              <Link
                href="/portal"
                onClick={() => setOpen(false)}
                className="block py-3 px-4 text-base font-sans font-medium text-avade-verde-oscuro hover:bg-avade-verde-oscuro/10 rounded-sm transition-colors no-underline"
              >
                Zona de socios
              </Link>
              <Link
                href="/hazte-socio"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-center"
              >
                Hazte socio
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
