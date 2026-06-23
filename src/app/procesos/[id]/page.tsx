import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";

const procesosEjemplo = [
  {
    id: "recepcion-municipal",
    titulo: "Recepción municipal completa de la urbanización",
    descripcion:
      "Exigencia formal a los ayuntamientos de Nuevo Baztán y Villar del Olmo de que completen el proceso de recepción de la totalidad de viales, saneamiento, zonas comunes y demás infraestructuras de Eurovillas, con publicación en el BOCM.",
    estado_fase: "Escritos presentados — esperando respuesta",
    visibilidad: "publica",
    updated_at: "2026-06-01",
    cuerpo: `
**¿En qué consiste este proceso?**

Cuando una urbanización privada se entrega a un ayuntamiento, este asume la titularidad y el mantenimiento de todos sus servicios: viales, alumbrado, saneamiento. A partir de ese momento, esos servicios los paga el IBI, como en cualquier otro barrio.

En Eurovillas ese proceso —la recepción municipal— nunca se completó. La promotora original quebró en 1975 dejando las infraestructuras a medio hacer. Desde entonces, la EUCE cobra cuotas privadas para mantener lo que debería pagar el ayuntamiento con el IBI.

**¿Qué ha pasado ya?**

En 2022 el ayuntamiento de Nuevo Baztán recepciona una parte de la urbanización (publicado en el BOCM). En 2024 el ayuntamiento de Villar del Olmo recepciona el alumbrado público en su ámbito. Son avances reales, pero parciales.

**¿Qué estamos haciendo?**

Hemos presentado escritos formales ante ambos ayuntamientos y ante la Comunidad de Madrid exigiendo la recepción completa. Reclamamos que se establezca un calendario concreto y que se formalice el proceso hasta su conclusión.

**Próximos pasos**

- Esperar respuesta formal de los ayuntamientos
- Si no hay respuesta en plazo, escalar a otras instancias administrativas
- Coordinación con el seguimiento del respaldo del Defensor del Pueblo
    `,
  },
  {
    id: "disolucion-euce",
    titulo: "Disolución y liquidación de la EUCE",
    descripcion: "Proceso para exigir la disolución formal de la Entidad Urbanística de Conservación y el cese del cobro de cuotas.",
    estado_fase: "En preparación",
    visibilidad: "publica",
    updated_at: "2026-05-15",
    cuerpo: `
**¿Qué es la EUCE y por qué exigimos su disolución?**

La Entidad Urbanística de Conservación (EUCE) fue creada en 1989 mediante convenio entre los vecinos, los ayuntamientos y la Comunidad de Madrid. Sus estatutos la limitan a tareas de conservación: no puede ejecutar obra nueva.

El problema es que la EUCE ha cobrado cuotas obligatorias durante décadas para mantener infraestructuras que, una vez completada la recepción municipal, deberán ser responsabilidad de los ayuntamientos. Una vez que la recepción esté completa, la razón de ser de la EUCE desaparece.

**¿Por qué es urgente?**

Las asambleas de la EUCE de 2016, 2017, 2018, 2019, 2021 y 2024 fueron anuladas por el TSJM. La EUCE lleva años funcionando con acuerdos que los tribunales no han validado.

**Estado actual**

Estamos preparando la documentación necesaria para exigir formalmente la disolución y liquidación de la EUCE una vez que la recepción municipal esté completada o suficientemente avanzada.
    `,
  },
  {
    id: "defensor-pueblo",
    titulo: "Seguimiento del respaldo del Defensor del Pueblo",
    descripcion: "Seguimiento de las actuaciones derivadas del respaldo del Defensor del Pueblo al caso de Eurovillas.",
    estado_fase: "Activo — en seguimiento",
    visibilidad: "publica",
    updated_at: "2026-06-10",
    cuerpo: `
**El respaldo del Defensor del Pueblo**

El Defensor del Pueblo de España ha respaldado formalmente la posición de los vecinos de Eurovillas. Esto tiene un valor institucional importante: es una autoridad independiente que ha examinado la situación y ha concluido que los vecinos tenemos razón en nuestras reclamaciones.

**¿Qué significa en la práctica?**

El respaldo del Defensor del Pueblo no es una sentencia vinculante, pero es un argumento de peso en nuestras comunicaciones con los ayuntamientos y la Comunidad de Madrid. Las administraciones están obligadas a responder y justificar sus actuaciones.

**Seguimiento activo**

Estamos monitorizando las actuaciones derivadas de esta resolución y coordinando con ella nuestras reclamaciones formales ante las administraciones implicadas.
    `,
  },
  {
    id: "adaptacion-infraestructuras",
    titulo: "Adaptación de infraestructuras a normativa vigente",
    descripcion: "Proceso para exigir la actualización técnica de las infraestructuras antes de su recepción municipal.",
    estado_fase: "Pendiente de inicio formal",
    visibilidad: "publica",
    updated_at: "2026-04-20",
    cuerpo: `
**¿Por qué es necesario este proceso?**

Las infraestructuras de Eurovillas se construyeron hace décadas con la normativa técnica de entonces. Para que los ayuntamientos puedan recibirlas, deben cumplir la normativa vigente. Este proceso busca asegurar que la recepción se haga correctamente y no solo en papel.

**Estado actual**

Este proceso está pendiente de inicio formal hasta que avance más el proceso de recepción municipal. La lógica es ir en paralelo: exigir la recepción y, al mismo tiempo, exigir que esa recepción se haga en condiciones.
    `,
  },
];

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const proceso = procesosEjemplo.find((p) => p.id === id);
  if (!proceso) return { title: "Proceso no encontrado" };
  return {
    title: proceso.titulo,
    description: proceso.descripcion,
  };
}

export default async function ProcesoPage({ params }: Props) {
  const { id } = await params;

  let proceso = procesosEjemplo.find((p) => p.id === id);

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("procesos")
      .select("*")
      .eq("id", id)
      .single();
    if (data) proceso = { ...data, cuerpo: (data as { cuerpo?: string }).cuerpo ?? "" };
  } catch {
    // Supabase not connected; using example data
  }

  if (!proceso) notFound();

  if (proceso.visibilidad === "privada") {
    return (
      <PublicLayout>
        <div className="section-padding container-site max-w-2xl mx-auto">
          <div className="locked-notice">
            <svg className="w-12 h-12 text-avade-taupe" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h1 className="text-2xl font-serif font-semibold text-avade-marron-profundo">{proceso.titulo}</h1>
            <p className="text-base text-avade-marron-oscuro max-w-md">{proceso.descripcion}</p>
            <p className="text-sm text-avade-taupe">Este proceso contiene documentación legal sensible accesible solo para socios.</p>
            <div className="flex gap-3">
              <Link href="/auth/login" className="btn-secondary">Iniciar sesión</Link>
              <Link href="/hazte-socio" className="btn-primary">Hazte socio</Link>
            </div>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="section-padding bg-avade-casi-blanco">
        <div className="container-site max-w-3xl">
          <nav className="text-sm font-sans text-avade-taupe mb-8" aria-label="Ruta de navegación">
            <Link href="/procesos" className="hover:text-avade-verde-oscuro transition-colors no-underline">
              Procesos activos
            </Link>
            {" / "}
            <span className="text-avade-marron-oscuro">{proceso.titulo}</span>
          </nav>

          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-avade-marron-profundo">
              {proceso.titulo}
            </h1>
            <Badge variant="amber" className="flex-shrink-0 mt-2">
              {proceso.estado_fase}
            </Badge>
          </div>

          <p className="text-xs text-avade-taupe font-sans mb-8">
            Actualizado el{" "}
            {new Date(proceso.updated_at).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="bg-white border border-avade-beige rounded-sm p-6 lg:p-8 prose-avade prose">
            <p className="lead text-lg text-avade-marron-oscuro leading-relaxed not-prose mb-6">
              {proceso.descripcion}
            </p>
            {proceso.cuerpo && (
              <div
                dangerouslySetInnerHTML={{
                  __html: proceso.cuerpo
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\n\n/g, "</p><p>")
                    .replace(/^/, "<p>")
                    .replace(/$/, "</p>"),
                }}
              />
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/hazte-socio" className="btn-primary">
              Adherirse para acceso completo
            </Link>
            <Link href="/procesos" className="btn-secondary">
              Ver todos los procesos
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
