import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Logo } from "@/components/ui";
import { Footer } from "@/components/layout/Footer";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login?redirect=/portal");
  }

  const { data: socio } = await supabase
    .from("socios")
    .select("nombre, rol, estado")
    .eq("user_id", user.id)
    .single();

  if (!socio || socio.estado !== "activo") {
    return (
      <div className="min-h-screen bg-avade-casi-blanco flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-4">
          <Logo />
          <h1 className="text-2xl font-serif font-semibold text-avade-marron-profundo mt-6">
            Cuenta pendiente de aprobación
          </h1>
          <p className="text-base text-avade-marron-oscuro leading-relaxed">
            Tu solicitud de adhesión ha sido recibida. Un miembro del equipo la
            revisará próximamente y te lo confirmará por email.
          </p>
          <Link href="/" className="btn-secondary inline-block mt-4">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const esAdmin = socio.rol === "admin";

  return (
    <>
      <header className="bg-avade-marron-profundo border-b border-avade-marron-oscuro">
        <div className="container-site">
          <div className="flex items-center justify-between h-16">
            <Logo variant="light" size="sm" />
            <nav className="hidden md:flex items-center gap-6" aria-label="Navegación del portal">
              <Link href="/portal" className="text-sm font-sans text-avade-taupe hover:text-avade-casi-blanco transition-colors no-underline">
                Mi panel
              </Link>
              <Link href="/portal/documentos" className="text-sm font-sans text-avade-taupe hover:text-avade-casi-blanco transition-colors no-underline">
                Documentos
              </Link>
              <Link href="/portal/comunicados" className="text-sm font-sans text-avade-taupe hover:text-avade-casi-blanco transition-colors no-underline">
                Comunicados
              </Link>
              {esAdmin && (
                <Link href="/portal/admin" className="text-sm font-sans text-avade-verde-claro hover:text-avade-casi-blanco transition-colors no-underline">
                  Admin
                </Link>
              )}
            </nav>
            <div className="flex items-center gap-3">
              <span className="text-xs text-avade-taupe hidden sm:block">
                {socio.nombre}
              </span>
              <form action="/auth/logout" method="POST">
                <button
                  type="submit"
                  className="text-xs font-sans text-avade-taupe hover:text-avade-casi-blanco transition-colors border border-avade-marron-oscuro px-3 py-1.5 rounded-sm"
                >
                  Salir
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <main id="main-content" className="min-h-screen bg-avade-casi-blanco">
        {children}
      </main>
      <Footer />
    </>
  );
}
