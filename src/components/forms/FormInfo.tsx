"use client";

import { useState } from "react";

type Estado = "idle" | "loading" | "success" | "error";

export function FormInfo() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [form, setForm] = useState({ nombre: "", email: "" });
  const [errores, setErrores] = useState<Partial<typeof form>>({});

  function validar() {
    const e: Partial<typeof form> = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio";
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
        body: JSON.stringify({ ...form, tipo: "info" }),
      });
      if (!res.ok) throw new Error();
      setEstado("success");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "success") {
    return (
      <div className="rounded-sm bg-avade-verde-oscuro/10 border border-avade-verde-oscuro/30 p-6 text-center">
        <p className="text-2xl mb-2" aria-hidden="true">✓</p>
        <h4 className="text-lg font-serif font-semibold text-avade-marron-profundo mb-2">
          Recibido, gracias
        </h4>
        <p className="text-sm text-avade-marron-oscuro">
          Te iremos informando cuando haya novedades. No abusaremos de tu
          bandeja de entrada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulario de información">
      <div className="space-y-4">
        <div>
          <label htmlFor="info-nombre" className="form-label">
            Nombre <span className="text-red-500" aria-label="obligatorio">*</span>
          </label>
          <input
            id="info-nombre"
            type="text"
            autoComplete="given-name"
            className="form-input"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(e) => {
              setForm({ ...form, nombre: e.target.value });
              setErrores({ ...errores, nombre: undefined });
            }}
            aria-describedby={errores.nombre ? "info-nombre-error" : undefined}
            aria-invalid={!!errores.nombre}
          />
          {errores.nombre && (
            <p id="info-nombre-error" className="form-error" role="alert">
              {errores.nombre}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="info-email" className="form-label">
            Email <span className="text-red-500" aria-label="obligatorio">*</span>
          </label>
          <input
            id="info-email"
            type="email"
            autoComplete="email"
            className="form-input"
            placeholder="tu@email.com"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setErrores({ ...errores, email: undefined });
            }}
            aria-describedby={errores.email ? "info-email-error" : undefined}
            aria-invalid={!!errores.email}
          />
          {errores.email && (
            <p id="info-email-error" className="form-error" role="alert">
              {errores.email}
            </p>
          )}
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

        <button
          type="submit"
          disabled={estado === "loading"}
          className="btn-secondary w-full bg-white disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {estado === "loading" ? "Enviando…" : "Quiero más información"}
        </button>

        <p className="text-sm text-avade-marron-oscuro text-center leading-relaxed">
          Solo usamos tu email para enviarte actualizaciones de la plataforma.
          Puedes darte de baja en cualquier momento.
        </p>
      </div>
    </form>
  );
}
