import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <PublicLayout>
      <div className="section-padding bg-avade-casi-blanco">
        <div className="container-site max-w-3xl">
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 mb-8">
            <p className="text-sm text-amber-800 font-semibold">
              [BORRADOR — pendiente de revisión legal]
            </p>
            <p className="text-sm text-amber-700 mt-1">
              Este texto es un borrador orientativo conforme al RGPD y la
              LOPDGDD. Debe ser revisado por un profesional antes de publicarse.
              Al tratar datos de personas en conflicto con administraciones
              públicas, la revisión legal es especialmente importante.
            </p>
          </div>

          <h1 className="text-4xl font-serif font-semibold text-avade-marron-profundo mb-8">
            Política de privacidad
          </h1>

          <div className="prose prose-avade prose-base space-y-6">
            <section>
              <h2>1. Responsable del tratamiento</h2>
              <p>
                <strong>Plataforma Adelante Eurovillas (AVADE)</strong>
                <br />
                Email de contacto: informacion@avade.org
                <br />
                Domicilio: Eurovillas, Nuevo Baztán y Villar del Olmo, Madrid
              </p>
            </section>

            <section>
              <h2>2. Datos que recogemos y por qué</h2>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-avade-beige">
                    <th className="text-left p-3 border border-avade-taupe">Dato</th>
                    <th className="text-left p-3 border border-avade-taupe">Finalidad</th>
                    <th className="text-left p-3 border border-avade-taupe">Base legal</th>
                    <th className="text-left p-3 border border-avade-taupe">Plazo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-avade-taupe">Nombre y email (suscripción a novedades)</td>
                    <td className="p-3 border border-avade-taupe">Enviar actualizaciones de la plataforma</td>
                    <td className="p-3 border border-avade-taupe">Consentimiento (art. 6.1.a RGPD)</td>
                    <td className="p-3 border border-avade-taupe">Hasta baja voluntaria</td>
                  </tr>
                  <tr className="bg-avade-casi-blanco">
                    <td className="p-3 border border-avade-taupe">Datos de solicitud de adhesión</td>
                    <td className="p-3 border border-avade-taupe">Gestionar la adhesión a la plataforma</td>
                    <td className="p-3 border border-avade-taupe">Ejecución de relación (art. 6.1.b)</td>
                    <td className="p-3 border border-avade-taupe">Mientras dure la relación + 3 años</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-avade-taupe">Datos del formulario de contacto</td>
                    <td className="p-3 border border-avade-taupe">Responder a consultas</td>
                    <td className="p-3 border border-avade-taupe">Consentimiento (art. 6.1.a RGPD)</td>
                    <td className="p-3 border border-avade-taupe">6 meses desde respuesta</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2>3. Lo que nunca haremos con tus datos</h2>
              <ul>
                <li>No los vendemos ni los cedemos a terceros con fines comerciales.</li>
                <li>No publicamos datos personales de ningún miembro en la web.</li>
                <li>No usamos los datos de adhesión para nada distinto de gestionar tu alta.</li>
                <li>No tratamos datos especiales (salud, ideología política, etc.).</li>
              </ul>
            </section>

            <section>
              <h2>4. Proveedores externos</h2>
              <p>
                Usamos Supabase (base de datos, alojada en servidores europeos) y
                Resend (envío de emails). Ambos cumplen el RGPD y actúan como
                encargados del tratamiento.
              </p>
            </section>

            <section>
              <h2>5. Tus derechos (ARCO-POL)</h2>
              <p>
                Tienes derecho a acceder, rectificar, cancelar, oponerte,
                portabilidad, limitación y olvido respecto a tus datos. Escríbenos
                a{" "}
                <a href="mailto:informacion@avade.org">informacion@avade.org</a> y
                respondemos en el plazo legal (máximo 30 días).
              </p>
              <p>
                También puedes reclamar ante la Agencia Española de Protección de
                Datos (aepd.es) si consideras que tus derechos no se respetan.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
