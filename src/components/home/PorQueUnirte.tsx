import Link from "next/link";

const razones = [
  {
    numero: "01",
    titulo: "No se te pide nada difícil",
    texto:
      "Adherirte no implica ir a reuniones, llevar papeles ni hacer gestiones complicadas. Significa que tu nombre cuenta cuando hablamos de representación. La parte operativa la llevamos quienes ya lo estamos haciendo.",
  },
  {
    numero: "02",
    titulo: "Más adhesiones, más peso en las negociaciones",
    texto:
      "Las administraciones responden de forma diferente a una plataforma de 50 personas que a una de 500. Cada vecino que se suma es un argumento más en nuestras reclamaciones formales.",
  },
  {
    numero: "03",
    titulo: "Información de primera mano",
    texto:
      "Los socios tienen acceso al portal privado con documentación legal, comunicados internos y el estado actualizado de los procesos. Nada de enterarse de las novedades por WhatsApp de terceros.",
  },
  {
    numero: "04",
    titulo: "Sin cuotas, sin compromisos económicos",
    texto:
      "Adherirte a la plataforma es gratuito. No hay cuotas de socio, no hay derramas, no hay compromisos económicos de ningún tipo. Lo que pedimos es presencia, no dinero.",
  },
  {
    numero: "05",
    titulo: "Transparencia total",
    texto:
      "Todas las decisiones relevantes se comunican a los socios. No hay órganos opacos ni jerarquías que toman decisiones sin dar explicaciones. Aquí todos somos iguales: propietarios.",
  },
  {
    numero: "06",
    titulo: "Un movimiento que ya avanza",
    texto:
      "No empezamos de cero. Hay sentencias, hay escritos presentados, hay respaldo del Defensor del Pueblo. Te unes a algo que ya está en marcha, no a una promesa.",
  },
];

export function PorQueUnirte() {
  return (
    <section
      className="section-padding bg-avade-marron-profundo"
      aria-labelledby="unirte-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-sans font-semibold text-avade-verde-claro uppercase tracking-widest mb-4">
            Por qué sumarse
          </p>
          <h2
            id="unirte-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-avade-casi-blanco mb-4"
          >
            Sin romanticismos: estos son los motivos reales
          </h2>
          <p className="text-lg text-avade-taupe leading-relaxed">
            No prometemos magia ni soluciones inmediatas. El proceso legal es
            largo y requiere constancia. Pero hay razones concretas y honestas
            para que cada vecino esté dentro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {razones.map((razon) => (
            <div
              key={razon.numero}
              className="border border-avade-marron-oscuro rounded-sm p-6 hover:border-avade-verde-claro/50 transition-colors"
            >
              <p
                className="text-4xl font-serif font-light text-avade-verde-claro/25 mb-4 leading-none"
                aria-hidden="true"
              >
                {razon.numero}
              </p>
              <h3 className="text-lg font-serif font-semibold text-avade-casi-blanco mb-3">
                {razon.titulo}
              </h3>
              <p className="text-base text-avade-taupe leading-relaxed">
                {razon.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/hazte-socio" className="btn-primary text-base px-8 py-4">
            Quiero adherirme
          </Link>
          <Link href="/quienes-somos" className="btn-outline-light text-base px-8 py-4">
            Quiénes somos
          </Link>
        </div>
      </div>
    </section>
  );
}
