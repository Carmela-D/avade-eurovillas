import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi panel — Portal de socios",
  robots: { index: false },
};

export default async function PortalDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: socio } = await supabase
    .from("socios")
    .select("nombre, rol, fecha_alta")
    .eq("user_id", user!.id)
    .single();

  const { data: comunicadosRecientes } = await supabase
    .from("comunicados")
    .select("id, titulo, fecha")
    .order("fecha", { ascending: false })
    .limit(5);

  const { data: procesosActivos } = await supabase
    .from("procesos")
    .select("id, titulo, estado_fase, updated_at")
    .order("updated_at", { ascending: false })
    .limit(4);

  return (
    <div className="section-padding">
      <div className="container-site">
        <div className="mb-10">
          <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-2">
            Portal de socios
          </p>
          <h1 className="text-3xl font-serif font-semibold text-avade-marron-profundo">
            Bienvenido, {socio?.nombre ?? "socio"}
          </h1>
          {socio?.fecha_alta && (
            <p className="text-sm text-avade-taupe mt-1">
              Socio desde el{" "}
              {new Date(socio.fecha_alta).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Accesos directos */}
          {[
            { href: "/portal/documentos", titulo: "Documentos", desc: "Documentación legal y de la plataforma", icono: "📄" },
            { href: "/portal/comunicados", titulo: "Comunicados", desc: "Últimas novedades internas", icono: "📢" },
            { href: "/procesos", titulo: "Procesos activos", desc: "Estado de los frentes abiertos", icono: "⚙️" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card flex items-start gap-4 no-underline hover:border-avade-verde-oscuro/40"
            >
              <span className="text-2xl" aria-hidden="true">{item.icono}</span>
              <div>
                <h2 className="text-base font-serif font-semibold text-avade-marron-profundo mb-1">
                  {item.titulo}
                </h2>
                <p className="text-sm text-avade-marron-oscuro">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Comunicados recientes */}
          <div>
            <h2 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-4">
              Comunicados recientes
            </h2>
            {comunicadosRecientes && comunicadosRecientes.length > 0 ? (
              <div className="space-y-3">
                {comunicadosRecientes.map((com) => (
                  <Link
                    key={com.id}
                    href={`/portal/comunicados#${com.id}`}
                    className="flex items-center justify-between gap-4 p-4 bg-white border border-avade-beige rounded-sm hover:border-avade-verde-oscuro/40 transition-colors no-underline"
                  >
                    <p className="text-sm font-sans text-avade-marron-oscuro">{com.titulo}</p>
                    <time className="text-xs text-avade-taupe flex-shrink-0">
                      {new Date(com.fecha).toLocaleDateString("es-ES")}
                    </time>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-avade-taupe">No hay comunicados todavía.</p>
            )}
          </div>

          {/* Procesos */}
          <div>
            <h2 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-4">
              Procesos activos
            </h2>
            {procesosActivos && procesosActivos.length > 0 ? (
              <div className="space-y-3">
                {procesosActivos.map((proc) => (
                  <Link
                    key={proc.id}
                    href={`/procesos/${proc.id}`}
                    className="flex items-center justify-between gap-4 p-4 bg-white border border-avade-beige rounded-sm hover:border-avade-verde-oscuro/40 transition-colors no-underline"
                  >
                    <div>
                      <p className="text-sm font-sans font-medium text-avade-marron-oscuro">{proc.titulo}</p>
                      <p className="text-xs text-avade-taupe mt-0.5">{proc.estado_fase}</p>
                    </div>
                    <time className="text-xs text-avade-taupe flex-shrink-0">
                      {new Date(proc.updated_at).toLocaleDateString("es-ES")}
                    </time>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-avade-taupe">No hay procesos registrados todavía.</p>
            )}
          </div>
        </div>

        {socio?.rol === "admin" && (
          <div className="mt-10 bg-avade-verde-oscuro/10 border border-avade-verde-oscuro/30 rounded-sm p-6">
            <h2 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-2">
              Panel de administración
            </h2>
            <p className="text-sm text-avade-marron-oscuro mb-4">
              Gestiona solicitudes de adhesión, socios y contenido del portal.
            </p>
            <Link href="/portal/admin" className="btn-primary btn-sm">
              Ir al panel de admin
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
