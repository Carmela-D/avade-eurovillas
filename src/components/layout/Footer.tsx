import Link from "next/link";
import { Logo } from "@/components/ui";

const footerLinks = {
  plataforma: [
    { href: "/quienes-somos", label: "Quiénes somos" },
    { href: "/historia", label: "Historia de Eurovillas" },
    { href: "/procesos", label: "Procesos activos" },
    { href: "/libreria", label: "Librería de documentos" },
    { href: "/blog", label: "Blog" },
  ],
  accion: [
    { href: "/hazte-socio", label: "Hazte socio" },
    { href: "/lp", label: "¿Eres vecino? Infórmate aquí" },
    { href: "/#info", label: "Quiero más información" },
    { href: "/quienes-somos#contacto", label: "Contacto" },
  ],
  legal: [
    { href: "/aviso-legal", label: "Aviso legal" },
    { href: "/privacidad", label: "Política de privacidad" },
    { href: "/cookies", label: "Política de cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-avade-marron-profundo text-avade-beige">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="sm" />
            <p className="mt-4 text-base text-avade-taupe leading-relaxed max-w-xs">
              Plataforma vecinal que exige la recepción municipal completa de
              Eurovillas y la disolución de la EUCE.
            </p>
            <p className="mt-4 text-base text-avade-taupe">
              <a
                href="mailto:informacion@avade.org"
                className="text-avade-verde-claro hover:text-avade-casi-blanco transition-colors no-underline"
              >
                informacion@avade.org
              </a>
            </p>
          </div>

          {/* La plataforma */}
          <div>
            <h3 className="text-sm font-sans font-semibold text-avade-casi-blanco uppercase tracking-widest mb-5">
              La plataforma
            </h3>
            <ul className="space-y-3">
              {footerLinks.plataforma.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-avade-taupe hover:text-avade-casi-blanco transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Actúa */}
          <div>
            <h3 className="text-sm font-sans font-semibold text-avade-casi-blanco uppercase tracking-widest mb-5">
              Actúa
            </h3>
            <ul className="space-y-3">
              {footerLinks.accion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-avade-taupe hover:text-avade-casi-blanco transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-sans font-semibold text-avade-casi-blanco uppercase tracking-widest mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-avade-taupe hover:text-avade-casi-blanco transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/portal"
                className="text-base text-avade-verde-claro hover:text-avade-casi-blanco transition-colors no-underline"
              >
                → Zona de socios
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-avade-marron-oscuro/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-avade-taupe">
            © {new Date().getFullYear()} Plataforma Adelante Eurovillas (AVADE). Ningún derecho
            reservado sobre los hechos que aquí se describen; son de todos los vecinos.
          </p>
          <p className="text-sm text-avade-taupe">
            Eurovillas, Nuevo Baztán y Villar del Olmo, Madrid
          </p>
        </div>
      </div>
    </footer>
  );
}
