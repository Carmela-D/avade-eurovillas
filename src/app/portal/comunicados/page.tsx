import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Comunicados — Portal de socios",
  robots: { index: false },
};

export default async function PortalComunicadosPage() {
  const supabase = await createClient();
  const { data: comunicados } = await supabase
    .from("comunicados")
    .select("*")
    .order("fecha", { ascending: false });

  return (
    <div className="section-padding">
      <div className="container-site max-w-3xl">
        <h1 className="text-3xl font-serif font-semibold text-avade-marron-profundo mb-2">
          Comunicados internos
        </h1>
        <p className="text-base text-avade-marron-oscuro mb-10">
          Novedades y comunicaciones internas de la plataforma, disponibles
          exclusivamente para socios.
        </p>

        {comunicados && comunicados.length > 0 ? (
          <div className="space-y-8">
            {comunicados.map((com) => (
              <article
                key={com.id}
                id={com.id}
                className="bg-white border border-avade-beige rounded-sm p-6 lg:p-8"
              >
                <time className="text-sm font-sans font-semibold text-avade-marron-profundo uppercase tracking-widest mb-2 block">
                  {formatDate(com.fecha)}
                </time>
                <h2 className="text-xl font-serif font-semibold text-avade-marron-profundo mb-4">
                  {com.titulo}
                </h2>
                <div className="prose prose-avade prose-sm">
                  <p className="whitespace-pre-line text-sm text-avade-marron-oscuro leading-relaxed">
                    {com.cuerpo}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-avade-marron-oscuro font-serif">
              No hay comunicados todavía.
            </p>
            <p className="text-sm text-avade-marron-oscuro mt-2">
              Los comunicados se publican desde el panel de Supabase (tabla <code>comunicados</code>).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
