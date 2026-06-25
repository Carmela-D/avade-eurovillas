import type { Metadata } from "next";
import Link from "next/link";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PlaceholderImage } from "@/components/ui";

export const metadata: Metadata = {
  title: "Historia de Eurovillas",
  description:
    "La historia de Eurovillas desde 1967: la promotora que quebró, los vecinos que se organizaron, y 58 años de reclamaciones que hoy tienen respaldo institucional.",
};

const hitos = [
  {
    año: "1967",
    titulo: "El convenio fundacional",
    texto: "La empresa Terrenos de España firma un convenio con los ayuntamientos de Nuevo Baztán y Villar del Olmo para desarrollar la urbanización. Se inicia la comercialización de parcelas.",
    tipo: "origen",
  },
  {
    año: "1968",
    titulo: "Aprobación del Plan Parcial",
    texto: "El Plan Parcial «Ciudad de las Américas» recibe aprobación administrativa. Sin embargo, los proyectos de urbanización no están completamente aprobados cuando ya se están vendiendo parcelas y construyendo viviendas.",
    tipo: "origen",
  },
  {
    año: "1975",
    titulo: "La promotora quiebra y abandona las obras",
    texto: "Terrenos de España quiebra y deja las obras de urbanización incompletas. Las infraestructuras —viales, saneamiento, alumbrado— quedan a medio terminar. Ninguna administración asume la responsabilidad. Los propietarios se quedan solos.",
    tipo: "crisis",
  },
  {
    año: "Finales de los 70",
    titulo: "Los vecinos se organizan por su cuenta",
    texto: "Los propietarios constituyen una Asociación de Propietarios voluntaria que llega a tener cerca de 2.000 asociados. Con sus propios recursos, costean el mantenimiento de viales y servicios que corresponden al ayuntamiento.",
    tipo: "organizacion",
  },
  {
    año: "1987–1989",
    titulo: "Nace la EUCE",
    texto: "Mediante convenio entre la Asociación de Propietarios, los ayuntamientos de Nuevo Baztán y Villar del Olmo y la Comunidad de Madrid, se crea la Entidad Urbanística de Conservación (EUCE). Sus estatutos la limitan a tareas de conservación: no puede ejecutar obra nueva. La doble imposición queda institucionalizada.",
    tipo: "hito",
  },
  {
    año: "2016–2024",
    titulo: "Las asambleas que no valieron",
    texto: "Las asambleas generales de la EUCE de 2016, 2017, 2018, 2019, 2021 y 2024 son impugnadas y finalmente anuladas por el Tribunal Superior de Justicia de Madrid. El motivo recurrente: falta de transparencia en la votación y el escrutinio. La EUCE funciona durante años con acuerdos que los tribunales no validan.",
    tipo: "conflicto",
  },
  {
    año: "2022",
    titulo: "Primera recepción parcial (Nuevo Baztán)",
    texto: "El ayuntamiento de Nuevo Baztán recepciona formalmente parte de la urbanización. La noticia se publica en el BOCM. Es un avance concreto, aunque parcial: quedan partes sin recepcionar y el proceso global sigue sin completarse.",
    tipo: "avance",
  },
  {
    año: "2024",
    titulo: "Villar del Olmo recepciona el alumbrado",
    texto: "El ayuntamiento de Villar del Olmo recepciona el alumbrado público en su parte de la urbanización. Otro avance parcial en la dirección correcta, pero lejos todavía de la recepción completa.",
    tipo: "avance",
  },
  {
    año: "2025–2026",
    titulo: "El Defensor del Pueblo y la Plataforma Adelante Eurovillas",
    texto: "El Defensor del Pueblo de España respalda formalmente la posición de los vecinos. Se constituye la Plataforma Adelante Eurovillas, que presenta escritos formales ante ambos ayuntamientos y ante la Comunidad de Madrid exigiendo la recepción completa, la disolución y liquidación de la EUCE y el cese inmediato del cobro de cuotas. Amparados en la Ley 10/2019 de Transparencia de la Comunidad de Madrid y en los artículos 9.2 y 23.1 de la Constitución española.",
    tipo: "hoy",
    destacado: true,
  },
];

const coloresTipo: Record<string, string> = {
  origen: "bg-avade-taupe/30",
  crisis: "bg-red-100 border-red-200",
  organizacion: "bg-avade-verde-claro/20",
  hito: "bg-avade-beige",
  conflicto: "bg-amber-50 border-amber-200",
  avance: "bg-avade-verde-oscuro/10 border-avade-verde-oscuro/20",
  hoy: "bg-avade-verde-oscuro text-white",
};

const coloresPunto: Record<string, string> = {
  origen: "bg-avade-taupe border-avade-taupe",
  crisis: "bg-red-400",
  organizacion: "bg-avade-verde-claro",
  hito: "bg-avade-taupe border-avade-taupe",
  conflicto: "bg-amber-400",
  avance: "bg-avade-verde-oscuro",
  hoy: "bg-avade-verde-oscuro ring-4 ring-avade-verde-oscuro/20",
};

export default function HistoriaPage() {
  return (
    <PublicLayout>
      {/* Hero de sección */}
      <div className="bg-avade-marron-profundo section-padding-sm">
        <div className="container-site">
          <p className="text-sm font-sans font-semibold text-avade-verde-claro uppercase tracking-widest mb-4">
            La historia de Eurovillas
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-avade-casi-blanco mb-4 max-w-2xl">
            58 años de historia que hay que conocer
          </h1>
          <p className="text-lg text-avade-taupe max-w-2xl leading-relaxed">
            Para entender lo que exigimos hay que entender de dónde venimos.
            Esta es la cronología de una urbanización que nunca terminó de ser
            entregada a sus vecinos.
          </p>
        </div>
      </div>

      <div className="section-padding bg-avade-casi-blanco">
        <div className="container-site">
          {/* Imagen de la urbanización */}
          <PlaceholderImage
            description="Vista panorámica de Eurovillas: urbanización entre pinares, viviendas unifamiliares y parcelas — foto histórica o actual pendiente"
            filename="historia-eurovillas-panoramica.jpg"
            aspectRatio="wide"
            className="mb-16"
          />

          {/* Cronología */}
          <div className="max-w-3xl mx-auto">
            <ol aria-label="Cronología de Eurovillas" className="space-y-0">
              {hitos.map((hito, idx) => (
                <li key={idx} className="relative flex gap-6 pb-10 last:pb-0">
                  {idx < hitos.length - 1 && (
                    <div
                      className="absolute left-4 top-10 bottom-0 w-0.5 bg-avade-beige"
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-2 ${coloresPunto[hito.tipo]}`}
                    aria-hidden="true"
                  />
                  <div className={`flex-1 rounded-sm p-5 border ${coloresTipo[hito.tipo]} ${hito.destacado ? "border-avade-verde-oscuro" : "border-transparent"}`}>
                    <time
                      className={`text-sm font-sans font-semibold uppercase tracking-widest ${hito.tipo === "hoy" ? "text-white" : "text-avade-marron-profundo"}`}
                    >
                      {hito.año}
                    </time>
                    <h2
                      className={`text-lg font-serif font-semibold mt-1 mb-3 ${hito.tipo === "hoy" ? "text-white" : "text-avade-marron-profundo"}`}
                    >
                      {hito.titulo}
                    </h2>
                    <p
                      className={`text-base leading-relaxed ${hito.tipo === "hoy" ? "text-white" : "text-avade-marron-oscuro"}`}
                    >
                      {hito.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA final */}
          <div className="mt-16 bg-avade-beige rounded-sm p-8 lg:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-semibold text-avade-marron-profundo mb-4">
              Esta historia aún no ha terminado
            </h2>
            <p className="text-base text-avade-marron-oscuro leading-relaxed mb-8">
              Por primera vez en décadas, hay respaldo institucional, hay
              jurisprudencia clara y hay una plataforma organizada que empuja.
              Lo que necesitamos es que más vecinos estén dentro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hazte-socio" className="btn-primary">
                Quiero adherirme
              </Link>
              <Link href="/procesos" className="btn-secondary bg-white">
                Ver procesos activos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
