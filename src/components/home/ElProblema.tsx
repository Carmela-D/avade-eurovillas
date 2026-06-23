export function ElProblema() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="problema-heading"
    >
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-4">
            El problema en 60 segundos
          </p>
          <h2
            id="problema-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-8"
          >
            Una doble imposición que dura décadas
          </h2>

          <div className="prose prose-lg text-avade-marron-oscuro leading-relaxed space-y-5 not-prose">
            <p className="text-lg leading-relaxed">
              En cualquier municipio de España, los servicios básicos de una
              urbanización —alumbrado, viales, saneamiento— los paga el
              ayuntamiento con lo que recauda del IBI. En Eurovillas, no.
            </p>
            <p className="text-lg leading-relaxed">
              Aquí, los propietarios pagan el IBI igual que todos, pero{" "}
              <strong className="text-avade-marron-profundo">
                además pagan una cuota anual a la Entidad Urbanística de
                Conservación (EUCE)
              </strong>{" "}
              —un organismo privado— por esos mismos servicios. Llevamos así
              desde 1989, cuando se formalizó este acuerdo para tapar un agujero
              que dejó la promotora al quebrar en 1975.
            </p>
            <p className="text-lg leading-relaxed">
              La raíz del problema es que Eurovillas nunca fue entregada en
              condiciones a los ayuntamientos. Sin esa recepción formal, los
              ayuntamientos no se hacen cargo. Y sin que los ayuntamientos se
              hagan cargo, la EUCE sigue cobrando.
            </p>
          </div>

          {/* Visual comparison */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-avade-beige border border-avade-taupe rounded-sm p-6">
              <p className="text-xs font-sans font-semibold text-avade-taupe uppercase tracking-widest mb-3">
                En el resto de España
              </p>
              <p className="text-base font-sans text-avade-marron-oscuro">
                IBI → ayuntamiento → servicios municipales
              </p>
              <p className="mt-3 text-sm text-avade-verde-oscuro font-semibold">
                ✓ Un solo pago
              </p>
            </div>
            <div className="bg-avade-marron-profundo border border-avade-marron-oscuro rounded-sm p-6">
              <p className="text-xs font-sans font-semibold text-avade-taupe uppercase tracking-widest mb-3">
                En Eurovillas
              </p>
              <p className="text-base font-sans text-avade-beige">
                IBI → ayuntamiento (que no presta los servicios)
              </p>
              <p className="text-base font-sans text-avade-beige mt-1">
                + cuota EUCE → servicios que ya cubriría el IBI
              </p>
              <p className="mt-3 text-sm text-red-400 font-semibold">
                ✗ Doble pago por lo mismo
              </p>
            </div>
          </div>

          <p className="mt-8 text-base text-avade-marron-oscuro leading-relaxed border-l-4 border-avade-verde-oscuro pl-4">
            El Defensor del Pueblo de España ha respaldado formalmente la
            posición de los vecinos: esta situación no debería continuar. Ya
            existe jurisprudencia a nuestro favor y avances parciales de
            recepción. Lo que falta es presión organizada y sostenida.
          </p>
        </div>
      </div>
    </section>
  );
}
