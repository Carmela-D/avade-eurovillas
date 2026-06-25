import Link from "next/link";

const acciones = [
  {
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    titulo: "Escritos formales ante las administraciones",
    texto:
      "Hemos presentado solicitudes formales ante el ayuntamiento de Nuevo Baztán, el ayuntamiento de Villar del Olmo y la Comunidad de Madrid, exigiendo la recepción completa de la urbanización y la disolución de la EUCE.",
  },
  {
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
      </svg>
    ),
    titulo: "Asesoría legal especializada",
    texto:
      "La plataforma trabaja con asesoramiento jurídico. Conocemos la Ley 10/2019 de Transparencia y Participación de la Comunidad de Madrid y nos amparamos en los artículos 9.2 y 23.1 de la Constitución española.",
  },
  {
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    titulo: "Organización y transparencia interna",
    texto:
      "Todos los miembros somos propietarios en igualdad de condiciones. No hay jerarquías rígidas; hay libertad para proponer y transparencia total hacia dentro. Actuamos colectivamente, con información compartida.",
  },
  {
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    titulo: "Vocación de Asociación Vecinal formal",
    texto:
      "La plataforma nació con vocación de convertirse en una Asociación Vecinal sin ánimo de lucro inscrita oficialmente, con todos los derechos y herramientas que eso supone para la representación colectiva.",
  },
];

export function QueHacemos() {
  return (
    <section
      className="section-padding bg-avade-casi-blanco"
      aria-labelledby="hacemos-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-4">
            Nuestro trabajo
          </p>
          <h2
            id="hacemos-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-4"
          >
            Qué estamos haciendo, concretamente
          </h2>
          <p className="text-lg text-avade-marron-oscuro leading-relaxed">
            No pedimos que nadie haga nada complejo. La parte difícil ya la
            estamos asumiendo quienes trabajamos en esto día a día. Aquí
            explicamos en qué consiste ese trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {acciones.map((accion, idx) => (
            <div
              key={idx}
              className="bg-white border border-avade-beige rounded-sm p-6 lg:p-8 flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-avade-verde-oscuro/10 rounded-sm flex items-center justify-center text-avade-verde-oscuro">
                {accion.icono}
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-2">
                  {accion.titulo}
                </h3>
                <p className="text-base text-avade-marron-oscuro leading-relaxed">
                  {accion.texto}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/procesos" className="btn-secondary">
            Ver los procesos activos
          </Link>
        </div>
      </div>
    </section>
  );
}
