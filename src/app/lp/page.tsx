import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui";
import { FormContactoLanding } from "@/components/forms/FormContactoLanding";

export const metadata: Metadata = {
  title: "Eurovillas — Llevas décadas pagando doble. Aquí está la solución.",
  description:
    "Los vecinos de Eurovillas pagamos el IBI y además una cuota privada por los mismos servicios. El Defensor del Pueblo nos da la razón. Únete a la plataforma y recupera lo que es tuyo.",
  robots: { index: false },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-avade-casi-blanco">

      {/* ── HEADER MÍNIMO ── */}
      <header className="bg-white border-b border-avade-beige py-5">
        <div className="container-site flex justify-center">
          <Logo size="lg" />
        </div>
      </header>

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="bg-avade-marron-profundo py-20 md:py-28">
          <div className="container-site max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-avade-verde-oscuro/30 border border-avade-verde-claro/40 rounded-sm mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-avade-verde-claro animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-sans font-semibold text-avade-verde-claro uppercase tracking-widest">
                Respaldados por el Defensor del Pueblo de España
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-avade-casi-blanco leading-tight text-balance mb-8">
              Llevas décadas{" "}
              <em className="not-italic text-avade-verde-claro">pagando doble.</em>
              <br />
              Ya hay solución.
            </h1>

            <p className="text-xl md:text-2xl text-avade-taupe leading-relaxed mb-12 max-w-2xl mx-auto">
              Los vecinos de Eurovillas pagamos el IBI <em>y además</em> una cuota privada
              por los mismos servicios. Esto tiene nombre: <strong className="text-avade-casi-blanco">doble imposición.</strong>{" "}
              Y tiene solución.
            </p>

            <a
              href="#contacto"
              className="btn-primary text-xl px-10 py-5"
            >
              Quiero saber más →
            </a>

            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-avade-marron-oscuro/60 pt-10">
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-avade-casi-blanco">~4.000</p>
                <p className="text-base font-sans text-avade-taupe mt-2 leading-snug">parcelas afectadas</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-avade-casi-blanco">~12.000</p>
                <p className="text-base font-sans text-avade-taupe mt-2 leading-snug">vecinos en Eurovillas</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-avade-verde-claro">58 años</p>
                <p className="text-base font-sans text-avade-taupe mt-2 leading-snug">pagando lo mismo dos veces</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EL PROBLEMA ── */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-3xl mx-auto">
            <p className="section-label mb-5">El problema</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-10 text-balance">
              En toda España el IBI lo paga todo.
              <br />En Eurovillas, no.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Resto de España */}
              <div className="bg-avade-casi-blanco border border-avade-beige rounded-sm p-7">
                <p className="text-sm font-sans font-semibold text-avade-marron-oscuro uppercase tracking-widest mb-5">
                  En el resto de España
                </p>
                <div className="space-y-3 text-lg text-avade-marron-oscuro">
                  <p>Pagas el <strong className="text-avade-marron-profundo">IBI</strong></p>
                  <p className="text-avade-verde-oscuro text-2xl font-serif">↓</p>
                  <p>El ayuntamiento paga el alumbrado, los viales y el saneamiento</p>
                </div>
                <p className="mt-6 text-xl text-avade-marron-profundo font-semibold">
                  ✓ Un solo pago
                </p>
              </div>

              {/* Eurovillas */}
              <div className="bg-avade-marron-profundo rounded-sm p-7">
                <p className="text-sm font-sans font-semibold text-avade-beige uppercase tracking-widest mb-5">
                  En Eurovillas
                </p>
                <div className="space-y-3 text-lg">
                  <p className="text-avade-beige">
                    Pagas el <strong className="text-white">IBI</strong>{" "}
                    → el ayuntamiento <em>no</em> presta los servicios
                  </p>
                  <p className="text-avade-taupe text-2xl font-serif">+</p>
                  <p className="text-avade-beige">
                    Pagas la <strong className="text-white">cuota EUCE</strong>{" "}
                    → eso sí te dan lo que ya pagaste con el IBI
                  </p>
                </div>
                <p className="mt-6 text-xl text-red-400 font-semibold">
                  ✗ Pagas dos veces por lo mismo
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-avade-verde-oscuro pl-6 py-1">
              <p className="text-xl text-avade-marron-oscuro leading-relaxed">
                Esto lleva pasando desde <strong>1989</strong>. No es una queja sin fundamento:
                es un problema legal documentado, con sentencias en contra de la EUCE y con el
                respaldo formal del Defensor del Pueblo de España.
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── LA PRUEBA ── */}
        <section className="section-padding bg-avade-beige">
          <div className="container-site max-w-3xl mx-auto">
            <p className="section-label mb-5">La prueba</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-10 text-balance">
              No son quejas. Son hechos con fechas.
            </h2>

            <div className="space-y-4">
              {[
                {
                  año: "1989",
                  texto: "Se crea la EUCE. Los vecinos empiezan a pagar cuotas por servicios que ya cubre el IBI.",
                  tipo: "neutro",
                },
                {
                  año: "2016–2024",
                  texto: "Los tribunales anulan una y otra vez las asambleas de la EUCE por falta de transparencia.",
                  tipo: "bueno",
                },
                {
                  año: "2022",
                  texto: "Nuevo Baztán empieza a recepcionar partes de la urbanización. El proceso avanza.",
                  tipo: "bueno",
                },
                {
                  año: "2024",
                  texto: "Villar del Olmo recepciona el alumbrado público en su ámbito.",
                  tipo: "bueno",
                },
                {
                  año: "2025",
                  texto: "El Defensor del Pueblo de España respalda formalmente a los vecinos: la situación es irregular y tiene que cambiar.",
                  tipo: "destacado",
                },
              ].map((hito) => (
                <div
                  key={hito.año}
                  className={`flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-6 rounded-sm ${
                    hito.tipo === "destacado"
                      ? "bg-avade-verde-oscuro"
                      : "bg-white border border-avade-taupe"
                  }`}
                >
                  <span
                    className={`text-sm font-sans font-bold uppercase tracking-widest flex-shrink-0 ${
                      hito.tipo === "destacado" ? "text-avade-verde-claro" : "text-avade-marron-profundo"
                    }`}
                  >
                    {hito.año}
                  </span>
                  <p
                    className={`text-lg leading-relaxed ${
                      hito.tipo === "destacado" ? "text-white" : "text-avade-marron-oscuro"
                    }`}
                  >
                    {hito.texto}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="#contacto" className="btn-primary text-lg px-10 py-5">
                Quiero que me contacten →
              </a>
            </div>
          </div>
        </section>

        {/* ── FORMULARIO #1 ── */}
        <section id="contacto" className="section-padding bg-white">
          <div className="container-site max-w-lg mx-auto text-center">
            <p className="section-label mb-5">Primer paso</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-4 text-balance">
              Déjanos tus datos.
              <br />Nosotros te contactamos.
            </h2>
            <p className="text-xl text-avade-marron-oscuro mb-10 leading-relaxed">
              Sin compromisos. Solo una llamada o un email para explicarte qué significa
              unirse y cómo puede ayudarte.
            </p>
            <FormContactoLanding instanceId="lp-1" />
          </div>
        </section>

        {/* ── POR QUÉ SUMARSE ── */}
        <section className="section-padding bg-avade-marron-profundo">
          <div className="container-site max-w-3xl mx-auto">
            <p className="text-sm font-sans font-semibold text-avade-verde-claro uppercase tracking-widest mb-5">
              Por qué vale la pena
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-avade-casi-blanco mb-10 text-balance">
              No te pedimos dinero.
              <br />Solo que estés.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icono: "🪙",
                  titulo: "Es completamente gratis",
                  texto:
                    "Sin cuotas, sin derramas, sin compromisos económicos de ningún tipo. Cero.",
                },
                {
                  icono: "🏠",
                  titulo: "Sin obligación de ir a nada",
                  texto:
                    "No tienes que ir a reuniones ni hacer gestiones. La parte operativa la llevamos nosotros.",
                },
                {
                  icono: "📣",
                  titulo: "Más somos, más fuerza",
                  texto:
                    "Las administraciones responden diferente a 50 personas que a 500. Cada vecino que se suma cuenta.",
                },
                {
                  icono: "📬",
                  titulo: "Información directa, sin ruido",
                  texto:
                    "Sabrás lo que pasa antes que nadie. Sin depender del WhatsApp del vecino.",
                },
              ].map((r) => (
                <div
                  key={r.titulo}
                  className="border border-avade-marron-oscuro rounded-sm p-7"
                >
                  <p className="text-4xl mb-4" aria-hidden="true">{r.icono}</p>
                  <h3 className="text-xl font-serif font-semibold text-avade-casi-blanco mb-3">
                    {r.titulo}
                  </h3>
                  <p className="text-lg text-avade-taupe leading-relaxed">{r.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-avade-casi-blanco">
          <div className="container-site max-w-2xl mx-auto">
            <p className="section-label mb-5">Dudas habituales</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-10">
              Antes de que lo preguntes...
            </h2>

            <div className="space-y-8">
              {[
                {
                  q: "¿Tengo que pagar algo para unirme?",
                  a: "No. Unirte a la plataforma es completamente gratuito. No hay cuotas, no hay derramas, no hay nada.",
                },
                {
                  q: "¿Tengo que ir a reuniones o hacer alguna gestión?",
                  a: "No es obligatorio. Puedes implicarte tanto o tan poco como quieras. Lo mínimo es darnos tu nombre para que cuente en la representación.",
                },
                {
                  q: "¿Y si esto no llega a ningún lado?",
                  a: "Ya llegó: hay sentencias, hay respaldo del Defensor del Pueblo y hay recepciones parciales de la urbanización. No empezamos de cero.",
                },
                {
                  q: "¿Qué hacéis con mis datos personales?",
                  a: "Solo te contactamos para informarte sobre la plataforma. Tus datos no se comparten con nadie. Puedes pedir que los eliminemos en cualquier momento.",
                },
                {
                  q: "¿Sirve de algo si solo hay unos pocos?",
                  a: "Cada persona suma. Y cuantos más seamos, más difícil es que nos ignoren. No hacen falta miles, pero sí cuantos más mejor.",
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-avade-beige pb-8 last:border-b-0 last:pb-0">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-avade-marron-profundo mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-lg text-avade-marron-oscuro leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="section-padding bg-avade-marron-profundo">
          <div className="container-site max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-avade-casi-blanco mb-4 text-balance">
              ¿Vives en Eurovillas?
              <br />Entonces esto te afecta.
            </h2>
            <p className="text-xl text-avade-taupe mb-12 leading-relaxed">
              Déjanos tus datos y te explicamos todo sin prisas. Sin compromisos.
              Solo una conversación de vecino a vecino.
            </p>
            <div className="bg-avade-marron-oscuro/50 border border-avade-marron-oscuro rounded-sm p-8">
              <FormContactoLanding instanceId="lp-2" darkBg />
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER MÍNIMO ── */}
      <footer className="bg-avade-marron-profundo border-t border-avade-marron-oscuro py-8">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-avade-taupe">
          <p>© 2025 Adelante Eurovillas · avade.org</p>
          <nav className="flex gap-6" aria-label="Pie de página">
            <Link href="/privacidad" className="text-avade-taupe hover:text-avade-beige no-underline transition-colors">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="text-avade-taupe hover:text-avade-beige no-underline transition-colors">
              Aviso legal
            </Link>
            <Link href="/" className="text-avade-taupe hover:text-avade-beige no-underline transition-colors">
              Web principal →
            </Link>
          </nav>
        </div>
      </footer>

    </div>
  );
}
