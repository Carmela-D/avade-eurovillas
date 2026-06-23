import Link from "next/link";
import { PublicLayout } from "@/components/layout/PublicLayout";

export default function NotFound() {
  return (
    <PublicLayout>
      <div className="section-padding min-h-[50vh] flex items-center">
        <div className="container-site text-center max-w-lg mx-auto">
          <p className="text-6xl font-serif font-light text-avade-taupe mb-4" aria-hidden="true">
            404
          </p>
          <h1 className="text-3xl font-serif font-semibold text-avade-marron-profundo mb-4">
            Página no encontrada
          </h1>
          <p className="text-base text-avade-marron-oscuro mb-8">
            Esta página no existe o ha cambiado de dirección.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              Volver al inicio
            </Link>
            <Link href="/quienes-somos#contacto" className="btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
