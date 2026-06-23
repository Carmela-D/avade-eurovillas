import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <PublicLayout>
      <div className="section-padding bg-avade-casi-blanco">
        <div className="container-site max-w-3xl">
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 mb-8">
            <p className="text-sm text-amber-800 font-semibold">
              [BORRADOR — pendiente de revisión legal]
            </p>
            <p className="text-sm text-amber-700 mt-1">
              Este texto es un borrador orientativo conforme a la LSSICE y la
              normativa española vigente. Debe ser revisado por un profesional
              antes de publicarse definitivamente.
            </p>
          </div>

          <h1 className="text-4xl font-serif font-semibold text-avade-marron-profundo mb-8">
            Aviso legal
          </h1>

          <div className="prose prose-avade prose-base space-y-6">
            <section>
              <h2>1. Titular del sitio web</h2>
              <p>
                El presente sitio web (avade.org) es titularidad de la
                <strong> Plataforma Adelante Eurovillas (AVADE)</strong>, asociación
                vecinal sin ánimo de lucro en proceso de constitución formal, con
                domicilio en Eurovillas, municipios de Nuevo Baztán y Villar del
                Olmo, Comunidad de Madrid.
              </p>
              <p>
                Email de contacto:{" "}
                <a href="mailto:informacion@avade.org">informacion@avade.org</a>
              </p>
            </section>

            <section>
              <h2>2. Objeto</h2>
              <p>
                Este sitio web tiene por objeto informar a los vecinos y
                propietarios de Eurovillas sobre la situación de la urbanización,
                los procesos en curso y la plataforma vecinal, así como facilitar
                la adhesión a la misma.
              </p>
            </section>

            <section>
              <h2>3. Propiedad intelectual</h2>
              <p>
                Los textos, imágenes y contenidos de este sitio web son propiedad
                de la Plataforma Adelante Eurovillas o se utilizan con
                autorización de sus autores. Los documentos oficiales (sentencias,
                publicaciones del BOCM, resoluciones del Defensor del Pueblo) son
                de dominio público o se reproducen en el ejercicio del derecho de
                información.
              </p>
              <p>
                Se permite la reproducción parcial de los contenidos propios de
                este sitio para uso informativo, citando la fuente.
              </p>
            </section>

            <section>
              <h2>4. Limitación de responsabilidad</h2>
              <p>
                La Plataforma Adelante Eurovillas no se hace responsable de los
                daños o perjuicios derivados del uso del sitio web ni de la
                información contenida en el mismo. Los contenidos se ofrecen con
                carácter informativo y no constituyen asesoramiento jurídico.
              </p>
              <p>
                Los documentos legales reproducidos en la Librería se ofrecen tal
                cual, para consulta pública. En caso de duda sobre su aplicación
                a situaciones particulares, se recomienda consultar con un
                profesional.
              </p>
            </section>

            <section>
              <h2>5. Legislación aplicable</h2>
              <p>
                El presente aviso legal se rige por la legislación española
                vigente, en particular por la Ley 34/2002 de Servicios de la
                Sociedad de la Información (LSSICE) y el Reglamento General de
                Protección de Datos (RGPD).
              </p>
            </section>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
