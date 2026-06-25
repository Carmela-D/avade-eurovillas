import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Documentos — Portal de socios",
  robots: { index: false },
};

export default async function PortalDocumentosPage() {
  const supabase = await createClient();
  const { data: documentos } = await supabase
    .from("documentos")
    .select("*")
    .order("fecha", { ascending: false });

  return (
    <div className="section-padding">
      <div className="container-site">
        <h1 className="text-3xl font-serif font-semibold text-avade-marron-profundo mb-2">
          Documentos
        </h1>
        <p className="text-base text-avade-marron-oscuro mb-8">
          Documentación legal y de la plataforma disponible para socios.
        </p>

        {documentos && documentos.length > 0 ? (
          <div className="space-y-4">
            {documentos.map((doc) => (
              <div key={doc.id} className="card flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-base font-serif font-semibold text-avade-marron-profundo">
                      {doc.titulo}
                    </h2>
                    <Badge variant={doc.visibilidad === "socios" ? "lock" : "gray"}>
                      {doc.tipo}
                    </Badge>
                  </div>
                  <time className="text-sm text-avade-marron-oscuro">
                    {new Date(doc.fecha).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                {doc.url_archivo && (
                  <a
                    href={doc.url_archivo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm flex-shrink-0"
                  >
                    Ver
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-avade-marron-oscuro font-serif">
              No hay documentos disponibles todavía.
            </p>
            <p className="text-sm text-avade-marron-oscuro mt-2">
              Los documentos se añaden desde el panel de Supabase.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
