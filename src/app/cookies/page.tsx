import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";

export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <PublicLayout>
      <div className="section-padding bg-avade-casi-blanco">
        <div className="container-site max-w-3xl">
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 mb-8">
            <p className="text-sm text-amber-800 font-semibold">
              [BORRADOR — pendiente de revisión legal]
            </p>
          </div>

          <h1 className="text-4xl font-serif font-semibold text-avade-marron-profundo mb-8">
            Política de cookies
          </h1>

          <div className="prose prose-avade prose-base space-y-6">
            <section>
              <h2>¿Qué cookies usa este sitio?</h2>
              <p>
                Este sitio web usa exclusivamente cookies técnicas necesarias para
                su funcionamiento. No usamos cookies de publicidad ni de
                seguimiento de terceros.
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-avade-beige">
                    <th className="text-left p-3 border border-avade-taupe">Cookie</th>
                    <th className="text-left p-3 border border-avade-taupe">Tipo</th>
                    <th className="text-left p-3 border border-avade-taupe">Finalidad</th>
                    <th className="text-left p-3 border border-avade-taupe">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-avade-taupe font-mono text-xs">sb-*</td>
                    <td className="p-3 border border-avade-taupe">Técnica / Sesión</td>
                    <td className="p-3 border border-avade-taupe">Autenticación de socios (Supabase)</td>
                    <td className="p-3 border border-avade-taupe">Sesión</td>
                  </tr>
                  <tr className="bg-avade-casi-blanco">
                    <td className="p-3 border border-avade-taupe font-mono text-xs">sb-*-auth-token</td>
                    <td className="p-3 border border-avade-taupe">Técnica / Persistente</td>
                    <td className="p-3 border border-avade-taupe">Mantener sesión iniciada</td>
                    <td className="p-3 border border-avade-taupe">7 días</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2>Sin cookies de terceros para rastreo</h2>
              <p>
                Este sitio no instala Google Analytics, Meta Pixel ni ningún otro
                sistema de seguimiento de usuarios. No registramos tu
                comportamiento de navegación para publicidad.
              </p>
            </section>

            <section>
              <h2>Cómo gestionar o eliminar cookies</h2>
              <p>
                Puedes configurar tu navegador para rechazar o eliminar cookies.
                Ten en cuenta que si eliminas las cookies de sesión, tendrás que
                volver a iniciar sesión en el portal de socios.
              </p>
              <p>
                Instrucciones por navegador:{" "}
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>,{" "}
                <a href="https://support.mozilla.org/es/kb/borrar-cookies-sitios-web-firefox" target="_blank" rel="noopener noreferrer">Firefox</a>,{" "}
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
