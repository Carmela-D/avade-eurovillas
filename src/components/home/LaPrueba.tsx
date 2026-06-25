import Link from "next/link";

const hitos = [
  {
    año: "1967–1968",
    titulo: "El origen",
    texto:
      "Convenio entre la promotora Terrenos de España y los ayuntamientos. Plan Parcial «Ciudad de las Américas» aprobado en 1968. Se venden parcelas antes de que los proyectos de urbanización estén completamente aprobados.",
  },
  {
    año: "1975",
    titulo: "La promotora quiebra",
    texto:
      "La empresa abandonona las obras a medio terminar. Los vecinos se quedan solos: sin infraestructuras completas y sin que ninguna administración asuma la responsabilidad.",
  },
  {
    año: "1987–1989",
    titulo: "Nace la EUCE",
    texto:
      "Los propietarios, los ayuntamientos y la Comunidad de Madrid firman un convenio. Se crea la Entidad Urbanística de Conservación con estatutos que la limitan a conservación, no a obra nueva. Desde entonces, los vecinos pagan cuotas para mantener lo que el ayuntamiento debería cubrir con el IBI.",
  },
  {
    año: "2016–2024",
    titulo: "Años de conflicto interno",
    texto:
      "Varias asambleas generales de la EUCE (2016, 2017, 2018, 2019, 2021, 2024) son impugnadas y anuladas por el Tribunal Superior de Justicia de Madrid por falta de transparencia en la votación y el escrutinio.",
  },
  {
    año: "2022",
    titulo: "Primera recepción parcial",
    texto:
      "El ayuntamiento de Nuevo Baztán recepciona una parte de la urbanización, publicado en el BOCM. Un avance concreto, aunque parcial.",
  },
  {
    año: "2024",
    titulo: "Más avances parciales",
    texto:
      "El ayuntamiento de Villar del Olmo recepciona el alumbrado público en su ámbito. La tendencia es favorable, pero el proceso está incompleto.",
  },
  {
    año: "2025–2026",
    titulo: "El Defensor del Pueblo nos da la razón",
    texto:
      "El Defensor del Pueblo de España respalda formalmente a los vecinos. La Plataforma Adelante Eurovillas se constituye y presenta escritos formales ante ambos ayuntamientos y la Comunidad de Madrid exigiendo la recepción completa, la disolución de la EUCE y el cese del cobro de cuotas.",
    destacado: true,
  },
];

export function LaPrueba() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="prueba-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <p className="section-label mb-4">
              Cronología
            </p>
            <h2
              id="prueba-heading"
              className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-6"
            >
              La historia con fechas y hechos
            </h2>
            <p className="text-base text-avade-marron-oscuro leading-relaxed">
              No son reclamaciones sin fundamento. Hay décadas de documentación,
              sentencias judiciales y resoluciones institucionales. Todo
              verificable.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/historia" className="btn-secondary">
                Ver cronología completa
              </Link>
              <Link
                href="/libreria"
                className="text-base font-sans font-medium text-avade-verde-oscuro hover:underline"
              >
                Consultar documentos →
              </Link>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-2">
            <ol className="relative space-y-0" aria-label="Cronología de Eurovillas">
              {hitos.map((hito, idx) => (
                <li key={idx} className="relative flex gap-6 pb-8 last:pb-0">
                  {/* Line */}
                  {idx < hitos.length - 1 && (
                    <div
                      className="absolute left-4 top-8 bottom-0 w-0.5 bg-avade-beige"
                      aria-hidden="true"
                    />
                  )}
                  {/* Dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
                      hito.destacado
                        ? "bg-avade-verde-oscuro"
                        : "bg-avade-beige border-2 border-avade-taupe"
                    }`}
                    aria-hidden="true"
                  >
                    {hito.destacado && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  {/* Content */}
                  <div
                    className={`flex-1 pb-1 ${
                      hito.destacado
                        ? "bg-avade-verde-oscuro/5 border border-avade-verde-oscuro/20 rounded-sm p-4 -mt-1"
                        : ""
                    }`}
                  >
                    <time className="text-sm font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest">
                      {hito.año}
                    </time>
                    <h3 className="text-base font-serif font-semibold text-avade-marron-profundo mt-1 mb-2">
                      {hito.titulo}
                    </h3>
                    <p className="text-base text-avade-marron-oscuro leading-relaxed">
                      {hito.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
