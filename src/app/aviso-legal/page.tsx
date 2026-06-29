import type { Metadata } from "next";
import { Logo } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal — Adelante Eurovillas",
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white border-b-2 border-avade-beige py-6">
        <div className="container-site flex justify-center">
          <Logo size="lg" />
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <div className="container-site py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="text-avade-verde-oscuro text-lg font-semibold no-underline hover:text-avade-marron-oscuro"
            >
              ← Volver
            </Link>
            <h1 className="text-2xl md:text-3xl font-serif font-semibold text-avade-marron-profundo">
              Aviso legal
            </h1>
          </div>
        </div>

        <div className="flex-1 w-full">
          <iframe
            src="/legal/aviso-legal.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
            className="w-full"
            style={{ height: "calc(100vh - 180px)", minHeight: "600px", border: "none" }}
            title="Aviso legal de Adelante Eurovillas"
          />
        </div>
      </main>
    </div>
  );
}
