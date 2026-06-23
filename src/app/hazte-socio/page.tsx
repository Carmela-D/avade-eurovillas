import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { FormAdhesion } from "@/components/forms/FormAdhesion";

export const metadata: Metadata = {
  title: "Hazte socio",
  description:
    "Únete a la Plataforma Adelante Eurovillas. Sin cuotas, sin compromisos de asistencia. Tu adhesión refuerza la fuerza colectiva de los vecinos.",
};

export default function HazteSocioPage() {
  return (
    <PublicLayout>
      <div className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Copy */}
            <div>
              <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-4">
                Adherirse a la plataforma
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-avade-marron-profundo mb-6 text-balance">
                Hazte socio de Adelante Eurovillas
              </h1>

              <div className="space-y-4 text-base text-avade-marron-oscuro leading-relaxed">
                <p>
                  Adherirte a la plataforma es la forma más directa de que tu
                  nombre cuente cuando negociamos y cuando presentamos escritos
                  formales. Cada vecino que se suma es un argumento más.
                </p>
                <p>
                  El proceso es sencillo: rellenas el formulario, un miembro
                  del equipo lo revisa y se pone en contacto contigo para
                  completarlo. <strong>Nunca hay pagos ni firma en esta web.</strong>
                </p>
              </div>

              {/* Lo que obtienes */}
              <div className="mt-8 bg-avade-beige rounded-sm p-6">
                <h2 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-4">
                  Como socio tendrás acceso a:
                </h2>
                <ul className="space-y-3">
                  {[
                    "Portal privado con documentación legal completa",
                    "Comunicados internos y novedades de primera mano",
                    "Estado actualizado de todos los procesos activos",
                    "Posibilidad de participar activamente si quieres",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-avade-marron-oscuro">
                      <svg
                        className="w-4 h-4 text-avade-verde-oscuro flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lo que no se pide */}
              <div className="mt-6 border-l-4 border-avade-verde-oscuro pl-4">
                <p className="text-sm text-avade-marron-oscuro font-semibold mb-1">
                  Lo que no se pide
                </p>
                <p className="text-sm text-avade-marron-oscuro">
                  Sin cuotas de socio. Sin obligación de asistir a reuniones. Sin
                  compromisos de tiempo. Si en algún momento quieres implicarte
                  más, hay espacio; si no, con que estés sumado es suficiente.
                </p>
              </div>

              <div className="mt-8 bg-avade-casi-blanco border border-avade-beige rounded-sm p-4">
                <p className="text-xs text-avade-taupe font-sans">
                  ¿Todavía no estás seguro? Puedes{" "}
                  <a href="/#info" className="text-avade-verde-oscuro underline">
                    suscribirte para recibir información
                  </a>{" "}
                  sin comprometerte a nada, o{" "}
                  <a href="/quienes-somos#contacto" className="text-avade-verde-oscuro underline">
                    escribirnos directamente
                  </a>{" "}
                  con tus dudas.
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <div className="bg-white border border-avade-beige rounded-sm p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl font-serif font-semibold text-avade-marron-profundo mb-6">
                  Solicitud de adhesión
                </h2>
                <FormAdhesion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
