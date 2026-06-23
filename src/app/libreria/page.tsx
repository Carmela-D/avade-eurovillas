import type { Metadata } from "next";
import Link from "next/link";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Librería de documentos",
  description:
    "Documentación pública del caso Eurovillas: convenios, sentencias del TSJM, publicaciones en el BOCM y resoluciones del Defensor del Pueblo.",
};

const documentosEjemplo: Array<{
  id: string;
  titulo: string;
  tipo: string;
  fecha: string;
  visibilidad: string;
  descripcion: string;
  url_archivo?: string;
}> = [
  {
    id: "1",
    titulo: "Resolución del Defensor del Pueblo — respaldo a los vecinos de Eurovillas",
    tipo: "Resolución institucional",
    fecha: "2025-10-01",
    visibilidad: "publica",
    descripcion: "Resolución formal del Defensor del Pueblo de España respaldando la posición de los vecinos respecto a la doble imposición en Eurovillas.",
  },
  {
    id: "2",
    titulo: "BOCM — Recepción parcial por el Ayuntamiento de Nuevo Baztán (2022)",
    tipo: "Publicación oficial",
    fecha: "2022-03-15",
    visibilidad: "publica",
    descripcion: "Publicación en el Boletín Oficial de la Comunidad de Madrid de la recepción parcial de viales y zonas comunes de Eurovillas por el Ayuntamiento de Nuevo Baztán.",
  },
  {
    id: "3",
    titulo: "Sentencia TSJM — Anulación asamblea EUCE 2021",
    tipo: "Sentencia judicial",
    fecha: "2022-11-20",
    visibilidad: "publica",
    descripcion: "Sentencia del Tribunal Superior de Justicia de Madrid anulando la asamblea general de la EUCE de 2021 por falta de transparencia en el escrutinio.",
  },
  {
    id: "4",
    titulo: "Convenio de constitución de la EUCE (1989)",
    tipo: "Documento fundacional",
    fecha: "1989-01-01",
    visibilidad: "publica",
    descripcion: "Convenio original firmado entre la Asociación de Propietarios, los ayuntamientos de Nuevo Baztán y Villar del Olmo y la Comunidad de Madrid, por el que se crea la EUCE.",
  },
  {
    id: "5",
    titulo: "Escrito de reclamación formal ante los ayuntamientos (2025)",
    tipo: "Escrito de la plataforma",
    fecha: "2025-11-01",
    visibilidad: "socios",
    descripcion: "Escrito presentado por la Plataforma Adelante Eurovillas ante los ayuntamientos de Nuevo Baztán y Villar del Olmo y la Comunidad de Madrid.",
  },
  {
    id: "6",
    titulo: "Análisis jurídico del marco legal aplicable",
    tipo: "Informe interno",
    fecha: "2025-09-01",
    visibilidad: "socios",
    descripcion: "Análisis jurídico de la Ley 10/2019 de Transparencia de la Comunidad de Madrid y su aplicación al caso Eurovillas.",
  },
];

const tiposIconos: Record<string, string> = {
  "Resolución institucional": "🏛️",
  "Publicación oficial": "📋",
  "Sentencia judicial": "⚖️",
  "Documento fundacional": "📜",
  "Escrito de la plataforma": "✍️",
  "Informe interno": "🔒",
};

export default async function LibreriaPage() {
  let documentos = documentosEjemplo;

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("documentos")
      .select("*")
      .eq("visibilidad", "publica")
      .order("fecha", { ascending: false });

    if (data && data.length > 0) documentos = data;
  } catch {
    // Supabase not connected; using example data
  }

  const docsPublicos = documentos.filter((d) => d.visibilidad === "publica");
  const docsPrivados = documentos.filter((d) => d.visibilidad === "socios");

  return (
    <PublicLayout>
      <div className="bg-avade-casi-blanco section-padding-sm border-b border-avade-beige">
        <div className="container-site">
          <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-3">
            Documentación pública
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-avade-marron-profundo mb-4">
            Librería de documentos
          </h1>
          <p className="text-lg text-avade-marron-oscuro max-w-2xl leading-relaxed">
            Convenios, sentencias, publicaciones oficiales y escritos de la
            plataforma. Lo que se puede mostrar en abierto, está aquí. El resto
            está disponible para socios.
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-site">
          {/* Documentos públicos */}
          <h2 className="text-xl font-serif font-semibold text-avade-marron-profundo mb-6">
            Documentación pública
          </h2>
          <div className="space-y-4 mb-12">
            {docsPublicos.map((doc) => (
              <div
                key={doc.id}
                className="card flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div
                  className="text-2xl flex-shrink-0"
                  aria-hidden="true"
                >
                  {tiposIconos[doc.tipo] ?? "📄"}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-base font-serif font-semibold text-avade-marron-profundo">
                      {doc.titulo}
                    </h3>
                    <Badge variant="gray">{doc.tipo}</Badge>
                  </div>
                  <p className="text-sm text-avade-marron-oscuro leading-relaxed mb-2">
                    {doc.descripcion}
                  </p>
                  <p className="text-xs text-avade-taupe">
                    {new Date(doc.fecha).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                {doc.url_archivo && (
                  <a
                    href={doc.url_archivo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm flex-shrink-0"
                  >
                    Ver documento
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Documentos privados */}
          {docsPrivados.length > 0 && (
            <div>
              <h2 className="text-xl font-serif font-semibold text-avade-marron-profundo mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-avade-taupe" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Documentación reservada para socios
              </h2>
              <div className="space-y-4 mb-8">
                {docsPrivados.map((doc) => (
                  <div
                    key={doc.id}
                    className="card bg-avade-beige opacity-80 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-serif font-semibold text-avade-marron-profundo">
                          {doc.titulo}
                        </h3>
                        <Badge variant="lock">Solo socios</Badge>
                      </div>
                      <p className="text-sm text-avade-marron-oscuro">{doc.tipo}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="/auth/login" className="btn-secondary btn-sm">
                  Iniciar sesión
                </Link>
                <Link href="/hazte-socio" className="btn-primary btn-sm">
                  Hazte socio para acceder
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
