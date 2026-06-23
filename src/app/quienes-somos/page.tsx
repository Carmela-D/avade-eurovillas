import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { FormContacto } from "@/components/forms/FormContacto";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "La Plataforma Adelante Eurovillas: propietarios de Eurovillas organizados para exigir la recepción municipal y el fin de la doble imposición.",
};

const fines = [
  "Democratizar la gestión de la EUCE y promover su disolución y liquidación una vez completada la recepción municipal.",
  "Impulsar la recepción completa de la urbanización por parte de los ayuntamientos de Nuevo Baztán y Villar del Olmo.",
  "Exigir la adaptación de las infraestructuras a la normativa técnica vigente antes de su recepción.",
  "Dar voz a todos los propietarios, con total transparencia y sin jerarquías.",
  "Ampararnos en la Ley 10/2019 de Transparencia y Participación de la Comunidad de Madrid y en los artículos 9.2 y 23.1 de la Constitución española.",
  "Transformarnos en una Asociación Vecinal sin ánimo de lucro inscrita oficialmente.",
];

export default function QuienesSomosPage() {
  return (
    <PublicLayout>
      {/* Hero de sección */}
      <div className="bg-avade-beige section-padding-sm border-b border-avade-taupe">
        <div className="container-site">
          <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-3">
            La plataforma
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-avade-marron-profundo mb-4">
            Quiénes somos
          </h1>
          <p className="text-lg text-avade-marron-oscuro max-w-2xl leading-relaxed">
            Somos propietarios de Eurovillas. Algunos llevamos décadas aquí.
            Otros llegamos hace poco. Todos pagamos el mismo IBI y la misma
            cuota de la EUCE, y todos exigimos lo mismo: que eso se acabe.
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Descripción */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-avade-marron-profundo mb-4">
                  Una plataforma de vecinos, no de políticos
                </h2>
                <div className="space-y-4 text-base text-avade-marron-oscuro leading-relaxed">
                  <p>
                    La Plataforma Adelante Eurovillas —AVADE— nació con una
                    premisa clara: aquí no hay intereses partidistas ni
                    jerarquías rígidas. Somos propietarios, todos iguales, que
                    compartimos un problema concreto y buscamos una solución
                    concreta.
                  </p>
                  <p>
                    No pedimos nada que no sea justo: que los ayuntamientos
                    asuman los servicios municipales que ya estamos pagando a
                    través del IBI, y que la EUCE deje de cobrar cuotas por esos
                    mismos servicios.
                  </p>
                  <p>
                    La plataforma se constituyó formalmente y trabaja con
                    asesoramiento legal. Su vocación es convertirse en una
                    Asociación Vecinal sin ánimo de lucro inscrita oficialmente,
                    con todos los derechos y herramientas de representación que
                    eso supone.
                  </p>
                </div>
              </div>

              {/* Principios de funcionamiento */}
              <div className="bg-avade-casi-blanco border border-avade-beige rounded-sm p-6">
                <h3 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-4">
                  Cómo funcionamos
                </h3>
                <ul className="space-y-3">
                  {[
                    { titulo: "Todos somos iguales", texto: "Propietarios. Sin jerarquías que tomen decisiones a puerta cerrada." },
                    { titulo: "Libertad para proponer", texto: "Cualquier socio puede proponer iniciativas, acciones o cambios de rumbo." },
                    { titulo: "Transparencia total hacia dentro", texto: "Los socios tienen acceso a toda la documentación y al estado real de los procesos." },
                    { titulo: "Sin cuotas de socio", texto: "Adherirse es gratuito. El trabajo lo sostienen quienes pueden y quieren dedicarle tiempo." },
                  ].map((p) => (
                    <li key={p.titulo} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-avade-verde-oscuro flex-shrink-0 mt-2.5" aria-hidden="true" />
                      <div>
                        <span className="text-sm font-semibold text-avade-marron-profundo">{p.titulo}: </span>
                        <span className="text-sm text-avade-marron-oscuro">{p.texto}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fines */}
              <div>
                <h3 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-4">
                  Nuestros fines
                </h3>
                <ol className="space-y-3">
                  {fines.map((fin, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span
                        className="text-sm font-serif font-bold text-avade-verde-oscuro/60 flex-shrink-0 w-5 mt-0.5"
                        aria-hidden="true"
                      >
                        {idx + 1}.
                      </span>
                      <p className="text-sm text-avade-marron-oscuro leading-relaxed">{fin}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-avade-beige rounded-sm p-4">
                <p className="text-xs text-avade-taupe leading-relaxed">
                  <strong className="text-avade-marron-oscuro">Nota sobre datos personales:</strong>{" "}
                  En esta web no publicamos datos personales de ningún miembro de
                  la plataforma. Tampoco publicamos firmas, DNIs ni datos de
                  constitución. Toda la información sobre personas la
                  tratamos como sensible por defecto, conforme al RGPD.
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div id="contacto">
              <h2 className="text-2xl font-serif font-semibold text-avade-marron-profundo mb-6">
                Escríbenos
              </h2>
              <p className="text-base text-avade-marron-oscuro mb-8 leading-relaxed">
                Dudas sobre la adhesión, preguntas sobre el proceso legal,
                situaciones particulares o simplemente querer hablar con alguien
                del equipo. Respondemos en cuanto podemos.
              </p>

              <div className="mb-8 flex items-center gap-4 p-4 bg-avade-casi-blanco border border-avade-beige rounded-sm">
                <svg className="w-6 h-6 text-avade-verde-oscuro flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="text-xs font-sans font-semibold text-avade-taupe uppercase tracking-widest mb-0.5">
                    Email directo
                  </p>
                  <a
                    href="mailto:informacion@avade.org"
                    className="text-base font-sans text-avade-verde-oscuro hover:underline"
                  >
                    informacion@avade.org
                  </a>
                </div>
              </div>

              <FormContacto />
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
