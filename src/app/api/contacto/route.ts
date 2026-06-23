import { NextResponse } from "next/server";
import { sendContactoNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body;

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    await sendContactoNotification({ nombre, email, asunto, mensaje });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /contacto error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
