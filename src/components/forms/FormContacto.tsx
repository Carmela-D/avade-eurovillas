"use client";

import { useState } from "react";

type Estado = "idle" | "loading" | "success" | "error";

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export function FormContacto() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    asunto: "",
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
    if (!form.email.trim()) e.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email no válido";
    if (!form.asunto.trim()) e.asunto = "El asunto es obligatorio";
    if (!form.mensaje.trim()) e.mensaje = "El mensaje es obligatorio";
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
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
        <p className="text-3xl mb-3" aria-hidden="true">✓</p>
        <h3 className="text-xl font-serif font-semibold text-avade-marron-profundo mb-2">
          Mensaje recibido
        </h3>
        <p className="text-base text-avade-marron-oscuro">
          Te respondemos en cuanto podamos, normalmente en pocos días.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de contacto"
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ct-nombre" className="form-label">
            Nombre <span className="text-red-500" aria-label="obligatorio">*</span>
          </label>
          <input
            id="ct-nombre"
            type="text"
            autoComplete="name"
            className="form-input"
            value={form.nombre}
            onChange={(e) => set("nombre", e.target.value)}
            aria-invalid={!!errores.nombre}
          />
          {errores.nombre && (
            <p className="form-error" role="alert">{errores.nombre}</p>
          )}
        </div>
        <div>
          <label htmlFor="ct-email" className="form-label">
            Email <span className="text-red-500" aria-label="obligatorio">*</span>
          </label>
          <input
            id="ct-email"
            type="email"
            autoComplete="email"
            className="form-input"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errores.email}
          />
          {errores.email && (
            <p className="form-error" role="alert">{errores.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="ct-asunto" className="form-label">
          Asunto <span className="text-red-500" aria-label="obligatorio">*</span>
        </label>
        <input
          id="ct-asunto"
          type="text"
          className="form-input"
          value={form.asunto}
          onChange={(e) => set("asunto", e.target.value)}
          aria-invalid={!!errores.asunto}
        />
        {errores.asunto && (
          <p className="form-error" role="alert">{errores.asunto}</p>
        )}
      </div>

      <div>
        <label htmlFor="ct-mensaje" className="form-label">
          Mensaje <span className="text-red-500" aria-label="obligatorio">*</span>
        </label>
        <textarea
          id="ct-mensaje"
          rows={6}
          className="form-input resize-none"
          value={form.mensaje}
          onChange={(e) => set("mensaje", e.target.value)}
          aria-invalid={!!errores.mensaje}
        />
        {errores.mensaje && (
          <p className="form-error" role="alert">{errores.mensaje}</p>
        )}
      </div>

      {estado === "error" && (
        <p className="form-error text-base" role="alert">
          Error al enviar. Por favor, escríbenos directamente a{" "}
          <a href="mailto:informacion@avade.org" className="underline">
            informacion@avade.org
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "loading"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {estado === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>

      <p className="text-xs text-avade-taupe">
        Los datos de este formulario se usan exclusivamente para responder a tu
        consulta y se tratan conforme al RGPD.
      </p>
    </form>
  );
}
