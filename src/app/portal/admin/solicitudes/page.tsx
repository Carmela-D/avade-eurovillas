import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui";
import type { SolicitudEstado } from "@/types";

export const metadata: Metadata = {
  title: "Gestión de solicitudes — Admin",
  robots: { index: false },
};

const estadoBadge: Record<SolicitudEstado, "amber" | "green" | "red"> = {
  pendiente: "amber",
  aprobada: "green",
  descartada: "red",
};

export default async function SolicitudesAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ estado?: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: socio } = await supabase
    .from("socios")
    .select("rol")
    .eq("user_id", user!.id)
    .single();

  if (socio?.rol !== "admin") redirect("/portal");

  const { estado = "pendiente" } = await searchParams;

  const { data: solicitudes } = await supabase
    .from("solicitudes_adhesion")
    .select("*")
    .eq("estado", estado)
    .order("created_at", { ascending: false });

  return (
    <div className="section-padding">
      <div className="container-site">
        <div className="flex items-center gap-3 mb-2">
          <Link href="/portal/admin" className="text-sm text-avade-marron-oscuro hover:text-avade-verde-oscuro no-underline">
            Admin
          </Link>
          <span className="text-avade-marron-oscuro" aria-hidden="true">/</span>
          <h1 className="text-xl font-serif font-semibold text-avade-marron-profundo">
            Solicitudes
          </h1>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 mb-8 mt-6">
          {(["pendiente", "aprobada", "descartada"] as SolicitudEstado[]).map((e) => (
            <Link
              key={e}
              href={`/portal/admin/solicitudes?estado=${e}`}
              className={`btn-sm rounded-sm font-sans text-sm capitalize ${
                estado === e ? "btn-primary" : "btn-secondary"
              }`}
            >
              {e}
            </Link>
          ))}
        </div>

        {solicitudes && solicitudes.length > 0 ? (
          <div className="space-y-4">
            {solicitudes.map((sol) => (
              <div
                key={sol.id}
                className="bg-white border border-avade-beige rounded-sm p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-base font-serif font-semibold text-avade-marron-profundo">
                        {sol.nombre} {sol.apellidos ?? ""}
                      </h2>
                      <Badge variant={estadoBadge[sol.estado as SolicitudEstado]}>
                        {sol.estado}
                      </Badge>
                      <Badge variant="gray">{sol.tipo}</Badge>
                    </div>
                    <p className="text-sm text-avade-marron-oscuro">{sol.email}</p>
                    {sol.telefono && (
                      <p className="text-sm text-avade-marron-oscuro">{sol.telefono}</p>
                    )}
                    {sol.direccion_parcela && (
                      <p className="text-sm text-avade-marron-oscuro">Parcela: {sol.direccion_parcela}</p>
                    )}
                  </div>
                  <time className="text-sm text-avade-marron-oscuro flex-shrink-0">
                    {new Date(sol.created_at).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>

                {sol.mensaje && (
                  <div className="bg-avade-casi-blanco border border-avade-beige rounded-sm p-3 mb-4">
                    <p className="text-sm text-avade-marron-oscuro leading-relaxed">
                      {sol.mensaje}
                    </p>
                  </div>
                )}

                {sol.estado === "pendiente" && (
                  <div className="flex gap-3">
                    <form action={`/api/admin/solicitudes/${sol.id}/aprobar`} method="POST">
                      <button
                        type="submit"
                        className="btn-primary btn-sm"
                      >
                        ✓ Aprobar
                      </button>
                    </form>
                    <form action={`/api/admin/solicitudes/${sol.id}/descartar`} method="POST">
                      <button
                        type="submit"
                        className="btn-sm border-2 border-red-300 text-red-600 hover:bg-red-50 rounded-sm font-sans font-semibold"
                      >
                        ✗ Descartar
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-base text-avade-marron-oscuro py-8">
            No hay solicitudes con estado &quot;{estado}&quot;.
          </p>
        )}
      </div>
    </div>
  );
}
