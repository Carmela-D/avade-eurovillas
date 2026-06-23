import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Administración — Portal de socios",
  robots: { index: false },
};

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: socio } = await supabase
    .from("socios")
    .select("rol")
    .eq("user_id", user!.id)
    .single();

  if (socio?.rol !== "admin") {
    redirect("/portal");
  }

  const { data: solicitudesPendientes, count: totalPendientes } = await supabase
    .from("solicitudes_adhesion")
    .select("*", { count: "exact" })
    .eq("estado", "pendiente")
    .order("created_at", { ascending: false })
    .limit(5);

  const { count: totalSocios } = await supabase
    .from("socios")
    .select("*", { count: "exact", head: true })
    .eq("estado", "activo");

  return (
    <div className="section-padding">
      <div className="container-site">
        <div className="flex items-center gap-3 mb-10">
          <h1 className="text-3xl font-serif font-semibold text-avade-marron-profundo">
            Panel de administración
          </h1>
          <span className="badge badge-green">Admin</span>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Solicitudes pendientes", valor: totalPendientes ?? 0, color: totalPendientes && totalPendientes > 0 ? "text-amber-600" : "text-avade-marron-profundo" },
            { label: "Socios activos", valor: totalSocios ?? 0, color: "text-avade-verde-oscuro" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-avade-beige rounded-sm p-4">
              <p className={`text-3xl font-serif font-bold ${stat.color}`}>{stat.valor}</p>
              <p className="text-sm text-avade-marron-oscuro mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Solicitudes pendientes */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-serif font-semibold text-avade-marron-profundo">
              Solicitudes pendientes
              {totalPendientes && totalPendientes > 0 && (
                <span className="ml-2 badge badge-amber">{totalPendientes}</span>
              )}
            </h2>
            <Link href="/portal/admin/solicitudes" className="text-sm font-sans text-avade-verde-oscuro hover:underline">
              Ver todas →
            </Link>
          </div>

          {solicitudesPendientes && solicitudesPendientes.length > 0 ? (
            <div className="space-y-3">
              {solicitudesPendientes.map((sol) => (
                <div key={sol.id} className="bg-white border border-amber-200 rounded-sm p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-avade-marron-profundo">
                      {sol.nombre} — {sol.email}
                    </p>
                    <p className="text-xs text-avade-taupe mt-0.5">
                      {sol.tipo === "adhesion" ? "Solicitud de adhesión" : "Solicitud de información"} ·{" "}
                      {new Date(sol.created_at).toLocaleDateString("es-ES")}
                    </p>
                  </div>
                  <Link
                    href={`/portal/admin/solicitudes?id=${sol.id}`}
                    className="btn-primary btn-sm flex-shrink-0"
                  >
                    Revisar
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-avade-taupe bg-white border border-avade-beige rounded-sm p-6">
              No hay solicitudes pendientes.
            </p>
          )}
        </div>

        {/* Acciones rápidas */}
        <div>
          <h2 className="text-xl font-serif font-semibold text-avade-marron-profundo mb-4">
            Gestión de contenido
          </h2>
          <p className="text-sm text-avade-marron-oscuro mb-4 leading-relaxed">
            Los contenidos se gestionan directamente desde el{" "}
            <strong>Table Editor de Supabase</strong>: procesos, documentos,
            comunicados y socios. No es necesario tocar código.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tabla: "solicitudes_adhesion", label: "Solicitudes de adhesión", desc: "Aprobar o descartar solicitudes" },
              { tabla: "socios", label: "Socios", desc: "Ver y gestionar el estado de socios" },
              { tabla: "procesos", label: "Procesos", desc: "Crear y actualizar procesos activos" },
              { tabla: "documentos", label: "Documentos", desc: "Añadir documentos a la librería" },
              { tabla: "comunicados", label: "Comunicados", desc: "Publicar comunicados internos" },
            ].map((item) => (
              <div key={item.tabla} className="bg-avade-beige border border-avade-taupe rounded-sm p-4">
                <h3 className="text-sm font-semibold text-avade-marron-profundo mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-avade-marron-oscuro mb-3">{item.desc}</p>
                <p className="text-xs text-avade-taupe font-mono">
                  Supabase → Table Editor → {item.tabla}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
