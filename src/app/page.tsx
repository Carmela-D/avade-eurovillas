import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Adelante Eurovillas — Deja de pagar doble por tu casa",
  description:
    "Los vecinos de Eurovillas llevamos décadas pagando el IBI y además una cuota privada por los mismos servicios. El Defensor del Pueblo nos da la razón. Infórmate.",
};

const CONTACTO_URL = "https://avade.org/contacto/";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HEADER ── */}
      <header className="bg-white border-b-2 border-avade-beige py-6 md:py-8">
        <div className="container-site flex justify-center">
          <Logo size="lg" />
        </div>
      </header>

      <main>

        {/* ── VIDEO HERO ── */}
        <section className="bg-avade-marron-profundo py-14 md:py-20">
          <div className="container-site max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-avade-verde-oscuro/30 border border-avade-verde-claro/50 rounded-sm mb-8">
                <span
                  className="w-3 h-3 rounded-full bg-avade-verde-claro animate-pulse flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-base font-sans font-semibold text-avade-verde-claro uppercase tracking-widest">
                  Respaldados por el Defensor del Pueblo de España
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white leading-tight mb-6">
                Llevas décadas
                <br />
                <span className="text-avade-verde-claro">pagando doble.</span>
              </h1>
              <p className="text-2xl text-avade-taupe leading-relaxed max-w-2xl mx-auto">
                Mira lo que dice el Defensor del Pueblo:
              </p>
            </div>

            <div className="rounded-sm overflow-hidden shadow-2xl bg-black">
              <video
                controls
                preload="metadata"
                poster="/images/eurovillas-foto-c.jpeg"
                className="w-full"
                aria-label="Vídeo: el Defensor del Pueblo respalda a los vecinos de Eurovillas"
              >
                <source src="/videos/defensor-del-pueblo.mp4" type="video/mp4" />
                <p>
                  Tu navegador no puede reproducir el vídeo.{" "}
                  <a
                    href="/videos/defensor-del-pueblo.mp4"
                    className="text-avade-verde-claro underline"
                  >
                    Descárgalo aquí.
                  </a>
                </p>
              </video>
            </div>

            <div className="mt-12 text-center">
              <a href={CONTACTO_URL} className="btn-primary text-2xl px-12 py-6">
                Quiero que me contacten →
              </a>
              <p className="mt-5 text-xl text-avade-taupe">
                Déjanos tus datos y un vecino de Eurovillas te llama.
              </p>
            </div>
          </div>
        </section>

        {/* ── CIFRAS ── */}
        <section className="bg-avade-casi-blanco py-14 border-b-2 border-avade-beige">
          <div className="container-site max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
              <div className="border-b-2 border-avade-beige pb-10 sm:border-b-0 sm:pb-0">
                <p className="text-5xl md:text-5xl font-serif font-bold text-avade-marron-profundo">
                  ~4.000
                </p>
                <p className="text-xl text-avade-marron-oscuro mt-3 leading-snug">
                  parcelas afectadas
                </p>
              </div>
              <div className="border-b-2 border-avade-beige pb-10 sm:border-b-0 sm:pb-0">
                <p className="text-5xl md:text-5xl font-serif font-bold text-avade-marron-profundo">
                  ~12.000
                </p>
                <p className="text-xl text-avade-marron-oscuro mt-3 leading-snug">
                  vecinos en Eurovillas
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-5xl font-serif font-bold text-avade-verde-oscuro">
                  58 años
                </p>
                <p className="text-xl text-avade-marron-oscuro mt-3 leading-snug">
                  pagando lo mismo dos veces
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EL PROBLEMA ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-site max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-avade-marron-profundo mb-10 text-balance">
              ¿Por qué pagamos dos veces?
            </h2>
            <p className="text-xl md:text-2xl text-avade-marron-oscuro leading-relaxed mb-8">
              En toda España, el <strong>IBI</strong> (el impuesto anual de tu casa) ya
              lo cubre todo: el alumbrado, los viales y el saneamiento. El
              ayuntamiento lo presta porque para eso cobra el impuesto.
            </p>
            <p className="text-xl md:text-2xl text-avade-marron-oscuro leading-relaxed mb-10">
              En Eurovillas el ayuntamiento <em>no presta esos servicios</em>. Los
              presta una entidad privada —la <strong>EUCE</strong>— que nos cobra
              una cuota aparte. Resultado: pagamos el IBI <strong>y</strong> la
              cuota EUCE. Por los mismos servicios.{" "}
              <strong>Dos veces.</strong>
            </p>
            <div className="bg-avade-marron-profundo rounded-sm p-8 md:p-10">
              <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed">
                Esto lleva pasando desde 1989. Los tribunales ya han fallado
                contra la EUCE en múltiples ocasiones. Y en 2025, el{" "}
                <strong className="text-avade-verde-claro">
                  Defensor del Pueblo de España
                </strong>{" "}
                nos da la razón formalmente.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOTO ENTRADA ── */}
        <div className="relative h-80 md:h-[28rem] overflow-hidden">
          <Image
            src="/images/eurovillas-foto-c.jpeg"
            alt="Cartel de entrada a Eurovillas Ciudad Residencial"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-avade-marron-profundo/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-4xl md:text-5xl font-serif font-semibold text-white text-center px-6 drop-shadow-lg">
              Tu barrio.
              <br />
              Tus derechos.
            </p>
          </div>
        </div>

        {/* ── NOTA DE PRENSA ── */}
        <section className="py-16 md:py-20 bg-avade-beige">
          <div className="container-site max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-avade-verde-oscuro rounded-sm mb-8">
              <span className="text-sm font-sans font-bold text-white uppercase tracking-widest">
                Nota de prensa — 29 de junio de 2026
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo mb-6 text-balance">
              El Defensor del Pueblo ampara a 12.000 vecinos de Nuevo Baztán y
              Villar del Olmo: exigen recibir la urbanización de Eurovillas y
              disolver la Entidad de Conservación tras 58 años de abandono
            </h2>

            <ul className="space-y-3 mb-10 border-l-4 border-avade-verde-oscuro pl-6">
              <li className="text-lg md:text-xl text-avade-marron-oscuro leading-relaxed font-semibold">
                Presentado un escrito formal ante ambos Ayuntamientos y la
                Comunidad de Madrid para exigir el fin inmediato del cobro de
                cuotas.
              </li>
              <li className="text-lg md:text-xl text-avade-marron-oscuro leading-relaxed font-semibold">
                Casi 4.000 parcelas sufren una doble imposición histórica,
                costeando de su bolsillo servicios básicos que los consistorios
                eluden asumir desde 1968.
              </li>
            </ul>

            <div className="space-y-5 text-xl text-avade-marron-oscuro leading-relaxed">
              <p>
                La plataforma vecinal Adelante Eurovillas ha hecho pública y ha
                comunicado hoy a la prensa una iniciativa formal orientada a la
                normalización de los servicios básicos y a la recepción definitiva
                de la urbanización por parte de los ayuntamientos de Nuevo Baztán
                y Villar del Olmo.
              </p>
              <p>
                Esta propuesta constructiva, que cuenta con el firme respaldo
                institucional del Defensor del Pueblo, busca resolver una situación
                provisional que se prolonga desde 1968.
              </p>
              <p>
                Con la difusión de este comunicado, los representantes vecinales
                trasladan a la opinión pública y a las administraciones la necesidad
                de coordinar de oficio la recepción de las infraestructuras,
                garantizando una gestión municipal transparente y equitativa para
                sus 12.000 vecinos.
              </p>
            </div>

            <div className="mt-10 bg-white border border-avade-taupe rounded-sm p-7 space-y-4">
              <p className="text-base font-sans font-semibold text-avade-marron-profundo uppercase tracking-widest mb-2">
                Lo que pedimos formalmente
              </p>
              <div className="space-y-3">
                {[
                  "La recepción de oficio coordinada de todas las infraestructuras, viales y espacios públicos de la urbanización por parte de los ayuntamientos de Nuevo Baztán y Villar del Olmo.",
                  "La disolución legal y liquidación inmediata de la Entidad de Conservación.",
                  "La suspensión definitiva del pago de cuotas por parte de los propietarios, pasando a ser los servicios asumidos por las arcas municipales.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-avade-verde-oscuro font-serif text-2xl font-bold flex-shrink-0 leading-tight">
                      {i + 1}.
                    </span>
                    <p className="text-lg md:text-xl text-avade-marron-oscuro leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-lg text-avade-marron-oscuro leading-relaxed">
              La representación de los vecinos advierte de que, si los
              ayuntamientos y la Comunidad de Madrid continúan ignorando el
              dictamen del Defensor del Pueblo, el colectivo vecinal emprenderá{" "}
              <strong>
                acciones judiciales por la vía contencioso-administrativa
              </strong>
              , exigiendo además responsabilidades patrimoniales por los
              perjuicios causados durante décadas.
            </p>
          </div>
        </section>

        {/* ── CTA MEDIO ── */}
        <section className="py-16 md:py-20 bg-avade-verde-oscuro">
          <div className="container-site max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-8">
              ¿Vives en Eurovillas?
              <br />
              Súmate ahora.
            </h2>
            <p className="text-2xl text-avade-beige mb-12 leading-relaxed">
              Déjanos tu nombre y cómo contactarte. Un vecino de Eurovillas
              te llama para contarte todo, a tu ritmo.
            </p>
            <a href={CONTACTO_URL} className="btn-outline-light text-2xl px-12 py-6">
              Quiero que me contacten →
            </a>
          </div>
        </section>

        {/* ── FOTO AÉREA ── */}
        <div className="relative h-80 md:h-[28rem] overflow-hidden">
          <Image
            src="/images/eurovillas-foto-d.jpeg"
            alt="Vista aérea de Eurovillas desde el aire"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-avade-marron-profundo/20" />
        </div>

        {/* ── POR QUÉ VALE LA PENA ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-site max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-avade-marron-profundo mb-12">
              Por qué vale la pena
            </h2>
            <div className="space-y-8">
              {[
                {
                  titulo: "Un vecino te llama",
                  texto:
                    "No recibirás un correo automático. Te llamará una persona de Eurovillas para hablar contigo y explicarte todo tranquilamente.",
                },
                {
                  titulo: "No tienes que ir a ninguna reunión",
                  texto:
                    "Puedes implicarte tanto o tan poco como quieras. La parte operativa la llevamos nosotros.",
                },
                {
                  titulo: "Cuantos más somos, más fuerza",
                  texto:
                    "Las administraciones responden diferente a 50 personas que a 500. Cada vecino que se suma cuenta.",
                },
                {
                  titulo: "Información directa, sin ruido",
                  texto:
                    "Sabrás lo que pasa antes que nadie. Sin depender del WhatsApp del vecino.",
                },
              ].map((r) => (
                <div
                  key={r.titulo}
                  className="flex gap-6 items-start border-b-2 border-avade-beige pb-8 last:border-b-0 last:pb-0"
                >
                  <span
                    className="text-4xl font-serif text-avade-verde-oscuro flex-shrink-0 leading-none mt-1"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-avade-marron-profundo mb-3">
                      {r.titulo}
                    </h3>
                    <p className="text-xl md:text-2xl text-avade-marron-oscuro leading-relaxed">
                      {r.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-20 md:py-28 bg-avade-marron-profundo">
          <div className="container-site max-w-2xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-8 text-balance">
              Es el momento.
            </h2>
            <p className="text-2xl md:text-3xl text-avade-taupe mb-14 leading-relaxed">
              El Defensor del Pueblo ya se pronunció. Los tribunales ya fallaron
              a favor de los vecinos. Solo falta que estés tú.
            </p>
            <a href={CONTACTO_URL} className="btn-primary text-2xl px-12 py-6">
              Quiero que me contacten →
            </a>
            <p className="mt-8 text-xl text-avade-taupe">
              Déjanos tus datos y un vecino de Eurovillas te llama.
            </p>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-avade-marron-profundo border-t-2 border-avade-marron-oscuro py-10">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Logo variant="light" size="sm" />
            <nav className="flex gap-8" aria-label="Pie de página">
              <Link
                href="/privacidad"
                className="text-xl text-avade-taupe hover:text-avade-beige no-underline transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/aviso-legal"
                className="text-xl text-avade-taupe hover:text-avade-beige no-underline transition-colors"
              >
                Aviso legal
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-avade-marron-oscuro/50">
            <p className="text-lg text-avade-taupe text-center">
              © {new Date().getFullYear()} Plataforma Adelante Eurovillas (AVADE) · avade.org
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
