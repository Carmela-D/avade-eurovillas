import Link from "next/link";
import { PlaceholderImage } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative bg-avade-marron-profundo overflow-hidden" aria-labelledby="hero-heading">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-texture-warm opacity-30" aria-hidden="true" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 md:py-24 items-center">
          {/* Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-avade-verde-oscuro/30 border border-avade-verde-claro/40 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-avade-verde-claro animate-pulse" aria-hidden="true" />
              <span className="text-sm font-sans font-semibold text-avade-verde-claro uppercase tracking-widest">
                Respaldados por el Defensor del Pueblo
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-avade-casi-blanco leading-tight text-balance"
            >
              58 años esperando
              <br />
              <em className="not-italic text-avade-verde-claro">que alguien lo arreglara.</em>
              <br />
              Ahora lo hacemos nosotros.
            </h1>

            <p className="text-lg md:text-xl text-avade-taupe leading-relaxed max-w-xl">
              Los vecinos de Eurovillas llevamos décadas pagando doble: el IBI
              al ayuntamiento <em>y</em> una cuota privada a la EUCE por los
              mismos servicios. Ya hay jurisprudencia, ya hay respaldo
              institucional. Falta que seamos más.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/hazte-socio" className="btn-primary text-base px-8 py-4">
                Quiero adherirme
              </Link>
              <Link href="/#info" className="btn-outline-light text-base px-8 py-4">
                Quiero más información
              </Link>
            </div>

            {/* Impact numbers */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-avade-marron-oscuro/50">
              <div>
                <p className="text-3xl font-serif font-bold text-avade-casi-blanco">~4.000</p>
                <p className="text-sm font-sans text-avade-taupe mt-1 leading-snug">parcelas afectadas</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-avade-casi-blanco">~12.000</p>
                <p className="text-sm font-sans text-avade-taupe mt-1 leading-snug">vecinos en Eurovillas</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-avade-verde-claro">58 años</p>
                <p className="text-sm font-sans text-avade-taupe mt-1 leading-snug">sin resolver</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <PlaceholderImage
              description="Foto aérea de la urbanización Eurovillas — pinares, parcelas y viales — pendiente de fotografía real"
              filename="hero-eurovillas-aerea.jpg"
              aspectRatio="landscape"
              className="shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-avade-verde-oscuro text-white px-4 py-3 rounded-sm shadow-lg max-w-xs">
              <p className="text-sm font-sans font-medium leading-snug">
                Eurovillas, entre los pinares de Nuevo Baztán y Villar del Olmo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
