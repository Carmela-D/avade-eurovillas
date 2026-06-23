import Link from "next/link";
import { FormInfo } from "@/components/forms/FormInfo";

const procesosMuestra = [
  {
    titulo: "Recepción municipal completa de viales y saneamiento",
    estado: "En curso",
    color: "amber",
  },
  {
    titulo: "Disolución y liquidación de la EUCE",
    estado: "En curso",
    color: "amber",
  },
  {
    titulo: "Adaptación de infraestructuras a normativa vigente",
    estado: "Pendiente",
    color: "gray",
  },
  {
    titulo: "Respaldo del Defensor del Pueblo — seguimiento",
    estado: "Activo",
    color: "green",
  },
];

const colorBadge: Record<string, string> = {
  amber: "badge-amber",
  gray: "badge-gray",
  green: "badge-green",
};

export function CTAFinal() {
  return (
    <section className="section-padding bg-white" aria-labelledby="cta-heading">
      <div className="container-site">
        <div className="text-center mb-16">
          <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-3">
            Deja tu huella
          </p>
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-4 text-balance"
          >
            ¿Cuánto te implicas? Tú decides.
          </h2>
          <p className="text-lg text-avade-marron-oscuro max-w-2xl mx-auto leading-relaxed">
            No hace falta hacerlo todo de golpe. Hay una forma para cada
            momento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Conversión blanda */}
          <div
            id="info"
            className="bg-avade-beige border border-avade-taupe rounded-sm p-8"
          >
            <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-4">
              Opción 1 — Sin compromisos
            </p>
            <h3 className="text-2xl font-serif font-semibold text-avade-marron-profundo mb-3">
              Quiero ir enterándome
            </h3>
            <p className="text-base text-avade-marron-oscuro mb-6 leading-relaxed">
              Deja tu email y te mantenemos informado de las novedades más
              importantes. Solo escribimos cuando hay algo que vale la pena
              contar. Sin spam, sin saturación.
            </p>
            <FormInfo />
          </div>

          {/* Conversión fuerte */}
          <div className="bg-avade-marron-profundo rounded-sm p-8">
            <p className="text-xs font-sans font-semibold text-avade-verde-claro uppercase tracking-widest mb-4">
              Opción 2 — El paso real
            </p>
            <h3 className="text-2xl font-serif font-semibold text-avade-casi-blanco mb-3">
              Quiero adherirme a la plataforma
            </h3>
            <p className="text-base text-avade-taupe mb-6 leading-relaxed">
              Rellena el formulario y el equipo se pone en contacto contigo para
              completar el proceso de adhesión. La adhesión no es automática: un
              miembro del equipo la revisa y te confirma personalmente.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Sin cuotas de ningún tipo",
                "Sin compromisos de asistencia",
                "Con acceso al portal privado de socios",
                "Con información de primera mano sobre los procesos",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-avade-beige"
                >
                  <svg
                    className="w-4 h-4 text-avade-verde-claro flex-shrink-0 mt-0.5"
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
            <Link href="/hazte-socio" className="btn-primary w-full text-center text-base py-4">
              Quiero adherirme →
            </Link>
          </div>
        </div>

        {/* Procesos activos muestra */}
        <div className="border-t border-avade-beige pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-1">
                Estado actual
              </p>
              <h3 className="text-xl font-serif font-semibold text-avade-marron-profundo">
                Procesos en marcha
              </h3>
            </div>
            <Link
              href="/procesos"
              className="text-sm font-sans font-medium text-avade-verde-oscuro hover:underline flex-shrink-0"
            >
              Ver todos los procesos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {procesosMuestra.map((proceso, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 bg-avade-casi-blanco border border-avade-beige rounded-sm px-4 py-3"
              >
                <p className="text-sm font-sans text-avade-marron-oscuro">
                  {proceso.titulo}
                </p>
                <span
                  className={`${colorBadge[proceso.color]} badge flex-shrink-0`}
                >
                  {proceso.estado}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
