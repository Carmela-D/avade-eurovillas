import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  sendAdhesionNotification,
  sendInfoNotification,
  sendConfirmacionInfo,
} from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, apellidos, email, telefono, direccion_parcela, mensaje, tipo } = body;

    if (!nombre || !email || !tipo) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    const supabase = await createClient();

    const { error: dbError } = await supabase
      .from("solicitudes_adhesion")
      .insert({
        nombre: `${nombre}${apellidos ? ` ${apellidos}` : ""}`,
        email: email.toLowerCase().trim(),
        telefono: telefono || null,
        direccion_parcela: direccion_parcela || null,
        mensaje: mensaje || null,
        tipo,
        estado: "pendiente",
      });

    if (dbError) {
      console.error("DB error:", dbError.message);
    }

    // Send notifications (non-blocking)
    if (tipo === "adhesion") {
      sendAdhesionNotification({
        nombre,
        apellidos: apellidos ?? "",
        email,
        telefono,
        direccion_parcela,
        mensaje,
      }).catch(console.error);
    } else {
      sendInfoNotification({ nombre, email }).catch(console.error);
      sendConfirmacionInfo(email, nombre).catch(console.error);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /adhesion error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
