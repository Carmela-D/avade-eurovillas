"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Logo } from "@/components/ui";

type Estado = "idle" | "loading" | "sent" | "error";

function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? "/portal";
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setEstado("loading");
    setErrorMsg("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirectTo)}`,
        shouldCreateUser: false,
      },
    });

    if (error) {
      if (error.message.includes("Email not confirmed") || error.message.includes("not found")) {
        setErrorMsg(
          "Este email no corresponde a ningún socio activo. Si has solicitado la adhesión y todavía no has sido aprobado, espera a recibir confirmación por email."
        );
      } else {
        setErrorMsg("Error al enviar el enlace. Inténtalo de nuevo o escríbenos a informacion@avade.org.");
      }
      setEstado("error");
    } else {
      setEstado("sent");
    }
  }

  if (estado === "sent") {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-avade-verde-oscuro/10 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-avade-verde-oscuro" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <h2 className="text-2xl font-serif font-semibold text-avade-marron-profundo">
          Revisa tu email
        </h2>
        <p className="text-base text-avade-marron-oscuro leading-relaxed max-w-sm mx-auto">
          Te hemos enviado un enlace de acceso a{" "}
          <strong className="text-avade-marron-profundo">{email}</strong>.
          Haz clic en él para entrar al portal. El enlace caduca en 1 hora.
        </p>
        <p className="text-sm text-avade-marron-oscuro">
          Si no lo ves, revisa la carpeta de spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="login-email" className="form-label">
          Tu email de socio
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          autoFocus
          className="form-input text-lg py-4"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (estado === "error") setEstado("idle");
          }}
          required
          aria-invalid={estado === "error"}
        />
      </div>

      {estado === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-4" role="alert">
          <p className="text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={estado === "loading" || !email.trim()}
        className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {estado === "loading" ? "Enviando enlace…" : "Enviarme el enlace de acceso"}
      </button>

      <p className="text-sm text-avade-marron-oscuro text-center leading-relaxed">
        Acceso por enlace mágico: no hay contraseñas. Recibirás un email con un
        enlace que te permite entrar directamente. El enlace caduca en 1 hora.
      </p>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-avade-beige flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Logo size="md" />
          </Link>
          <h1 className="text-2xl font-serif font-semibold text-avade-marron-profundo mt-6 mb-2">
            Zona de socios
          </h1>
          <p className="text-base text-avade-marron-oscuro">
            Introduce tu email y te enviamos un enlace para entrar.
            Sin contraseñas.
          </p>
        </div>

        <div className="bg-white border border-avade-taupe rounded-sm p-8 shadow-sm">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-avade-marron-oscuro">
            ¿No eres socio todavía?{" "}
            <Link href="/hazte-socio" className="text-avade-verde-oscuro font-semibold">
              Solicita la adhesión →
            </Link>
          </p>
          <Link href="/" className="text-sm text-avade-marron-oscuro hover:text-avade-marron-profundo transition-colors no-underline block">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
