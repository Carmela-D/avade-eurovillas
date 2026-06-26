"use client";

import { useState } from "react";

interface Props {
  instanceId: string;
  darkBg?: boolean;
}

type Estado = "idle" | "loading" | "success" | "error";

export function FormContactoLanding({ instanceId, darkBg = false }: Props) {
  const [estado, setEstado] = useState<Estado>("idle");
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [errores, setErrores] = useState<Partial<Record<"nombre" | "email", string>>>({});

  function validar() {
    const e: Partial<Record<"nombre" | "email", string>> = {};
    if (!form.nombre.trim()) e.nombre = "Por favor, escribe tu nombre";
    if (!form.email.trim()) e.email = "Necesitamos tu email para contactarte";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Ese email no parece correcto";
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
      <div className={`rounded-sm p-8 text-center ${darkBg ? "bg-avade-marron-oscuro/60 border border-avade-verde-oscuro/40" : "bg-avade-verde-oscuro/10 border border-avade-verde-oscuro/30"}`}>
        <p className="text-4xl mb-3" aria-hidden="true">✓</p>
        <h3 className={`text-2xl font-serif font-semibold mb-2 ${darkBg ? "text-avade-casi-blanco" : "text-avade-marron-profundo"}`}>
          Perfecto, lo tenemos.
        </h3>
        <p className={`text-base leading-relaxed ${darkBg ? "text-avade-taupe" : "text-avade-marron-oscuro"}`}>
          Nos ponemos en contacto contigo en cuanto podamos. Gracias por dar el paso.
        </p>
      </div>
    );
  }

  const inputClass = "form-input text-lg py-4";
  const labelClass = `block text-base font-semibold mb-2 font-sans ${darkBg ? "text-avade-casi-blanco" : "text-avade-marron-profundo"}`;

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
      <div className="space-y-5">
        <div>
          <label htmlFor={`${instanceId}-nombre`} className={labelClass}>
            Tu nombre <span className="text-red-400">*</span>
          </label>
          <input
            id={`${instanceId}-nombre`}
            type="text"
            autoComplete="given-name"
            className={inputClass}
            placeholder="¿Cómo te llamas?"
            value={form.nombre}
            onChange={(e) => {
              setForm({ ...form, nombre: e.target.value });
              setErrores({ ...errores, nombre: undefined });
            }}
            aria-invalid={!!errores.nombre}
          />
          {errores.nombre && (
            <p className="form-error" role="alert">{errores.nombre}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${instanceId}-email`} className={labelClass}>
            Tu email <span className="text-red-400">*</span>
          </label>
          <input
            id={`${instanceId}-email`}
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="tu@email.com"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setErrores({ ...errores, email: undefined });
            }}
            aria-invalid={!!errores.email}
          />
          {errores.email && (
            <p className="form-error" role="alert">{errores.email}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${instanceId}-tel`} className={labelClass}>
            Teléfono{" "}
            <span className={`font-normal text-sm ${darkBg ? "text-avade-taupe" : "text-avade-marron-oscuro"}`}>
              (opcional — si prefieres que te llamemos)
            </span>
          </label>
          <input
            id={`${instanceId}-tel`}
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="600 000 000"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          />
        </div>

        {estado === "error" && (
          <p className="form-error text-base" role="alert">
            Algo ha fallado. Escríbenos directamente a{" "}
            <a href="mailto:informacion@avade.org" className="underline">
              informacion@avade.org
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={estado === "loading"}
          className="btn-primary w-full text-xl py-5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {estado === "loading" ? "Enviando…" : "Quiero que me contacten →"}
        </button>

        <p className={`text-sm text-center leading-relaxed ${darkBg ? "text-avade-taupe" : "text-avade-marron-oscuro"}`}>
          Solo usamos tus datos para contactarte sobre la plataforma. Sin spam. Sin cuotas.
        </p>
      </div>
    </form>
  );
}
