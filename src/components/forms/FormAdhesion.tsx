"use client";

import { useState } from "react";

type Estado = "idle" | "loading" | "success" | "error";

interface FormData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion_parcela: string;
  mensaje: string;
}

export function FormAdhesion() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [form, setForm] = useState<FormData>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion_parcela: "",
    mensaje: "",
  });
  const [errores, setErrores] = useState<Partial<FormData>>({});

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrores((e) => ({ ...e, [field]: undefined }));
  }

  function validar() {
    const e: Partial<FormData> = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio";
    if (!form.apellidos.trim()) e.apellidos = "Los apellidos son obligatorios";
    if (!form.email.trim()) e.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email no válido";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validar();
    if (Object.keys(err).length > 0) {
      setErrores(err);
      return;
    }
    setEstado("loading");
    try {
      const res = await fetch("/api/adhesion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tipo: "adhesion" }),
      });
      if (!res.ok) throw new Error();
      setEstado("success");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "success") {
    return (
      <div className="rounded-sm bg-avade-verde-oscuro/10 border border-avade-verde-oscuro/30 p-8 text-center">
        <p className="text-4xl mb-4" aria-hidden="true">✓</p>
        <h3 className="text-2xl font-serif font-semibold text-avade-marron-profundo mb-3">
          Solicitud recibida
        </h3>
        <p className="text-base text-avade-marron-oscuro leading-relaxed max-w-md mx-auto">
          Hemos recibido tu solicitud de adhesión. Un miembro del equipo la
          revisará y se pondrá en contacto contigo por email para completar el
          proceso. Puede tardar unos días.
        </p>
        <p className="mt-4 text-sm text-avade-marron-oscuro">
          Si tienes prisa o alguna duda, escríbenos directamente a{" "}
          <a
            href="mailto:informacion@avade.org"
            className="text-avade-verde-oscuro underline"
          >
            informacion@avade.org
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de adhesión a la plataforma"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ad-nombre" className="form-label">
            Nombre <span className="text-red-500" aria-label="obligatorio">*</span>
          </label>
          <input
            id="ad-nombre"
            type="text"
            autoComplete="given-name"
            className="form-input"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(e) => set("nombre", e.target.value)}
            aria-describedby={errores.nombre ? "ad-nombre-error" : undefined}
            aria-invalid={!!errores.nombre}
          />
          {errores.nombre && (
            <p id="ad-nombre-error" className="form-error" role="alert">
              {errores.nombre}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="ad-apellidos" className="form-label">
            Apellidos <span className="text-red-500" aria-label="obligatorio">*</span>
          </label>
          <input
            id="ad-apellidos"
            type="text"
            autoComplete="family-name"
            className="form-input"
            placeholder="Tus apellidos"
            value={form.apellidos}
            onChange={(e) => set("apellidos", e.target.value)}
            aria-describedby={errores.apellidos ? "ad-apellidos-error" : undefined}
            aria-invalid={!!errores.apellidos}
          />
          {errores.apellidos && (
            <p id="ad-apellidos-error" className="form-error" role="alert">
              {errores.apellidos}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="ad-email" className="form-label">
          Email <span className="text-red-500" aria-label="obligatorio">*</span>
        </label>
        <input
          id="ad-email"
          type="email"
          autoComplete="email"
          className="form-input"
          placeholder="tu@email.com"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          aria-describedby={errores.email ? "ad-email-error" : undefined}
          aria-invalid={!!errores.email}
        />
        {errores.email && (
          <p id="ad-email-error" className="form-error" role="alert">
            {errores.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ad-telefono" className="form-label">
          Teléfono{" "}
          <span className="text-avade-marron-oscuro font-normal">(opcional)</span>
        </label>
        <input
          id="ad-telefono"
          type="tel"
          autoComplete="tel"
          className="form-input"
          placeholder="Para que podamos contactarte más fácilmente"
          value={form.telefono}
          onChange={(e) => set("telefono", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="ad-parcela" className="form-label">
          Dirección de tu parcela en Eurovillas{" "}
          <span className="text-avade-marron-oscuro font-normal">(opcional)</span>
        </label>
        <input
          id="ad-parcela"
          type="text"
          className="form-input"
          placeholder="Calle, número o referencia catastral"
          value={form.direccion_parcela}
          onChange={(e) => set("direccion_parcela", e.target.value)}
        />
        <p className="text-sm text-avade-marron-oscuro mt-1">
          Solo para ubicar tu situación. Nunca se publicará.
        </p>
      </div>

      <div>
        <label htmlFor="ad-mensaje" className="form-label">
          ¿Quieres contarnos algo?{" "}
          <span className="text-avade-marron-oscuro font-normal">(opcional)</span>
        </label>
        <textarea
          id="ad-mensaje"
          rows={4}
          className="form-input resize-none"
          placeholder="Preguntas, situación particular, cómo conociste la plataforma…"
          value={form.mensaje}
          onChange={(e) => set("mensaje", e.target.value)}
        />
      </div>

      {estado === "error" && (
        <p className="form-error text-base" role="alert">
          Algo falló al enviar. Por favor, inténtalo de nuevo o escríbenos a{" "}
          <a href="mailto:informacion@avade.org" className="underline">
            informacion@avade.org
          </a>
          .
        </p>
      )}

      <div className="space-y-4">
        <button
          type="submit"
          disabled={estado === "loading"}
          className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {estado === "loading" ? "Enviando solicitud…" : "Enviar solicitud de adhesión"}
        </button>

        <p className="text-sm text-avade-marron-oscuro leading-relaxed text-center">
          Esta solicitud no te adhiere automáticamente. Un miembro del equipo la
          revisará y te contactará para completar el proceso. Nunca habrá ningún
          pago ni firma en esta web. Tus datos se usan solo para gestionar tu
          solicitud y se tratan conforme al RGPD.
        </p>
      </div>
    </form>
  );
}
