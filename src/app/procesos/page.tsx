import type { Metadata } from "next";
import Link from "next/link";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Procesos activos",
  description:
    "Estado actual de los procesos abiertos por la Plataforma Adelante Eurovillas: recepción municipal, disolución EUCE y seguimiento institucional.",
};

const procesosEjemplo = [
  {
    id: "recepcion-municipal",
    titulo: "Recepción municipal completa de la urbanización",
    descripcion:
      "Exigencia formal a ambos ayuntamientos de que completen el proceso de recepción de la totalidad de viales, saneamiento, zonas comunes y demás infraestructuras de Eurovillas.",
    estado_fase: "Escritos presentados — esperando respuesta",
    visibilidad: "publica",
    updated_at: "2026-06-01",
  },
  {
    id: "disolucion-euce",
    titulo: "Disolución y liquidación de la EUCE",
    descripcion:
      "Proceso para exigir la disolución formal de la Entidad Urbanística de Conservación y el cese del cobro de cuotas a los propietarios.",
    estado_fase: "En preparación — recabando documentación",
    visibilidad: "publica",
    updated_at: "2026-05-15",
  },
  {
    id: "defensor-pueblo",
    titulo: "Seguimiento del respaldo del Defensor del Pueblo",
    descripcion:
      "Seguimiento de las actuaciones derivadas del respaldo formal del Defensor del Pueblo de España a la posición de los vecinos de Eurovillas.",
    estado_fase: "Activo — en seguimiento",
    visibilidad: "publica",
    updated_at: "2026-06-10",
  },
  {
    id: "adaptacion-infraestructuras",
    titulo: "Adaptación de infraestructuras a normativa vigente",
    descripcion:
      "Proceso para exigir que las infraestructuras de la urbanización se actualicen a la normativa técnica actual antes de su recepción municipal.",
    estado_fase: "Pendiente de inicio formal",
    visibilidad: "publica",
    updated_at: "2026-04-20",
  },
  {
    id: "documentacion-legal",
    titulo: "Análisis jurídico y estrategia legal",
    descripcion:
      "Revisión de sentencias, estatutos de la EUCE, convenios de 1989 y legislación aplicable. Estrategia legal del proceso.",
    estado_fase: "En curso (contenido detallado reservado a socios)",
    visibilidad: "privada",
    updated_at: "2026-06-15",
  },
];

export default async function ProcesosPage() {
  let procesos = procesosEjemplo;

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("procesos")
      .select("*")
      .order("updated_at", { ascending: false });

    if (data && data.length > 0) procesos = data;
  } catch {
    // Supabase not connected yet; using example data
  }

  const procesosPublicos = procesos.filter((p) => p.visibilidad === "publica");
  const procesosPrivados = procesos.filter((p) => p.visibilidad === "privada");

  return (
    <PublicLayout>
      <div className="bg-avade-casi-blanco section-padding-sm border-b border-avade-beige">
        <div className="container-site">
          <p className="section-label mb-3">
            Estado a {new Date().toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-avade-marron-profundo mb-4">
            Procesos activos
          </h1>
          <p className="text-lg text-avade-marron-oscuro max-w-2xl leading-relaxed">
            Esta es la lista de los frentes abiertos por la plataforma. Los
            procesos públicos pueden consultarse aquí; los que contienen
            documentación legal sensible están reservados para socios.
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-site">
          {/* Procesos públicos */}
          <div className="space-y-4 mb-12">
            {procesosPublicos.map((proceso) => (
              <Link
                key={proceso.id}
                href={`/procesos/${proceso.id}`}
                className="block card hover:border-avade-verde-oscuro/40 no-underline"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-lg font-serif font-semibold text-avade-marron-profundo">
                        {proceso.titulo}
                      </h2>
                    </div>
                    <p className="text-base text-avade-marron-oscuro leading-relaxed mb-3">
                      {proceso.descripcion}
                    </p>
                    <p className="text-sm text-avade-marron-oscuro">
                      Actualizado:{" "}
                      {new Date(proceso.updated_at).toLocaleDateString("es-ES")}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Badge variant="amber">{proceso.estado_fase}</Badge>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Procesos privados */}
          {procesosPrivados.length > 0 && (
            <div>
              <h2 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-avade-taupe" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Procesos reservados para socios
              </h2>
              <div className="space-y-4">
                {procesosPrivados.map((proceso) => (
                  <div
                    key={proceso.id}
                    className="card bg-avade-beige border-avade-taupe opacity-80"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-base font-serif font-semibold text-avade-marron-profundo mb-1">
                          {proceso.titulo}
                        </h3>
                        <p className="text-sm text-avade-marron-oscuro">
                          {proceso.estado_fase}
                        </p>
                      </div>
                      <Badge variant="lock">Solo socios</Badge>
                    </div>
                    <div className="locked-notice mt-4">
                      <p className="text-sm text-avade-marron-oscuro">
                        Este proceso contiene documentación legal sensible
                        accesible solo para socios.
                      </p>
                      <div className="flex gap-3">
                        <Link href="/auth/login" className="btn-secondary btn-sm bg-white">
                          Iniciar sesión
                        </Link>
                        <Link href="/hazte-socio" className="btn-primary btn-sm">
                          Hazte socio
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
