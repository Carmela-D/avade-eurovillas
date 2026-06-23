import Link from "next/link";
import { Logo } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { href: "/procesos", label: "Procesos activos" },
  { href: "/libreria", label: "Librería" },
  { href: "/historia", label: "Historia" },
  { href: "/blog", label: "Blog" },
  { href: "/quienes-somos", label: "Quiénes somos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-avade-casi-blanco/95 backdrop-blur-sm border-b border-avade-beige">
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo size="sm" />

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-sans font-medium text-avade-marron-oscuro hover:text-avade-verde-oscuro transition-colors no-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/portal"
              className="text-sm font-sans font-medium text-avade-verde-oscuro hover:text-avade-verde-hover transition-colors no-underline"
            >
              Zona de socios
            </Link>
            <Link href="/hazte-socio" className="btn-primary btn-sm">
              Hazte socio
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
