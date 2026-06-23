import { PlaceholderImage } from "@/components/ui";

export function Bifurcacion() {
  return (
    <section
      className="section-padding bg-avade-beige"
      aria-labelledby="bifurcacion-heading"
    >
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-3">
            Diga lo que diga tu escritura
          </p>
          <h2
            id="bifurcacion-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo"
          >
            Este problema te afecta
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Para el vecino de toda la vida */}
          <article className="bg-white border border-avade-taupe rounded-sm overflow-hidden">
            <PlaceholderImage
              description="Foto histórica de Eurovillas en los años 70-80: vecinos, viales de tierra, primeras construcciones — pendiente de archivo fotográfico"
              filename="historia-eurovillas-vintage.jpg"
              aspectRatio="landscape"
            />
            <div className="p-6 lg:p-8">
              <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-3">
                Si llevas años aquí
              </p>
              <h3 className="text-xl font-serif font-semibold text-avade-marron-profundo mb-4">
                Ya sabes que las promesas no llegan solas
              </h3>
              <p className="text-base text-avade-marron-oscuro leading-relaxed mb-4">
                Has visto asambleas anuladas por los tribunales. Has oído hablar
                de la recepción municipal durante décadas. Has pagado cuotas año
                tras año viendo que la situación no se resolvía.
              </p>
              <p className="text-base text-avade-marron-oscuro leading-relaxed">
                Esta vez hay algo diferente: el Defensor del Pueblo nos da la
                razón, hay sentencias del TSJ Madrid que anulan asambleas de la
                EUCE por falta de transparencia, y en 2022 y 2024 hubo avances
                parciales reales de recepción. El camino existe; lo que hace
                falta es más gente empujando en la misma dirección.
              </p>
            </div>
          </article>

          {/* Para el vecino nuevo */}
          <article className="bg-white border border-avade-taupe rounded-sm overflow-hidden">
            <PlaceholderImage
              description="Foto actual de Eurovillas: calle con chalet, pinos, tranquilidad de barrio — pendiente de fotografía reciente"
              filename="eurovillas-actual.jpg"
              aspectRatio="landscape"
            />
            <div className="p-6 lg:p-8">
              <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-3">
                Si acabas de llegar
              </p>
              <h3 className="text-xl font-serif font-semibold text-avade-marron-profundo mb-4">
                Esto te afecta aunque no lo supieras
              </h3>
              <p className="text-base text-avade-marron-oscuro leading-relaxed mb-4">
                Cuando compraste en Eurovillas, nadie te explicó que, además del
                IBI, hay una cuota anual obligatoria a la EUCE. No es optativa:
                es una carga que va con la parcela.
              </p>
              <p className="text-base text-avade-marron-oscuro leading-relaxed">
                Si la plataforma consigue la recepción municipal completa y la
                disolución de la EUCE, esa cuota desaparece. Los servicios
                pasarán a los ayuntamientos —que ya cobran el IBI precisamente
                para eso— y tú dejarás de pagar dos veces por lo mismo.
              </p>
              <div className="mt-6 bg-avade-beige rounded-sm p-4">
                <p className="text-sm font-sans font-semibold text-avade-marron-profundo">
                  ¿Cuánto se paga de cuota?
                </p>
                <p className="text-sm text-avade-marron-oscuro mt-1">
                  La cuota varía según tramos y año. Pregúntanos directamente y
                  te orientamos sobre tu situación concreta.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
