const datos = [
  {
    cifra: "~4.000",
    label: "Parcelas afectadas",
    nota: "en ambos municipios",
  },
  {
    cifra: "~12.000",
    label: "Vecinos en Eurovillas",
    nota: "Nuevo Baztán y Villar del Olmo",
  },
  {
    cifra: "58 años",
    label: "Sin resolver",
    nota: "desde el Plan Parcial de 1968",
  },
  {
    cifra: "2",
    label: "Ayuntamientos implicados",
    nota: "Nuevo Baztán y Villar del Olmo",
  },
  {
    cifra: "+6",
    label: "Asambleas EUCE anuladas",
    nota: "por el TSJM entre 2016 y 2024",
    marcado: true,
  },
  {
    cifra: "2022 + 2024",
    label: "Recepciones parciales ya conseguidas",
    nota: "BOCM y alumbrado Villar del Olmo",
    marcado: true,
  },
];

export function Transparencia() {
  return (
    <section
      className="section-padding bg-avade-beige section-divider"
      aria-labelledby="transparencia-heading"
    >
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="section-label mb-3">
            Con los datos sobre la mesa
          </p>
          <h2
            id="transparencia-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo"
          >
            Números, no eslóganes
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {datos.map((dato, idx) => (
            <div
              key={idx}
              className={`rounded-sm p-6 text-center ${
                dato.marcado
                  ? "bg-avade-verde-oscuro text-white"
                  : "bg-white border border-avade-taupe"
              }`}
            >
              <p
                className={`text-3xl md:text-4xl font-serif font-bold ${
                  dato.marcado ? "text-white" : "text-avade-marron-profundo"
                }`}
              >
                {dato.cifra}
              </p>
              <p
                className={`text-sm font-sans font-semibold mt-2 ${
                  dato.marcado ? "text-white" : "text-avade-marron-oscuro"
                }`}
              >
                {dato.label}
              </p>
              <p
                className={`text-sm mt-1 ${
                  dato.marcado ? "text-avade-casi-blanco" : "text-avade-marron-oscuro"
                }`}
              >
                {dato.nota}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm font-sans text-avade-marron-oscuro">
          Las cifras de adhesiones se actualizarán aquí cuando la plataforma las
          facilite. Los demás datos son de fuentes públicas contrastadas.
        </p>
      </div>
    </section>
  );
}
