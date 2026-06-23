import { NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/auth/login", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"));

  const { data: socio } = await supabase.from("socios").select("rol").eq("user_id", user.id).single();
  if (socio?.rol !== "admin") return NextResponse.json({ error: "No autorizado" }, { status: 403 });

  const adminClient = await createAdminClient();

  const { data: sol } = await adminClient
    .from("solicitudes_adhesion")
    .select("nombre, email, tipo")
    .eq("id", id)
    .single();

  if (!sol) return NextResponse.json({ error: "No encontrada" }, { status: 404 });

  // Update solicitud status
  await adminClient
    .from("solicitudes_adhesion")
    .update({ estado: "aprobada" })
    .eq("id", id);

  // If adhesion type, create/activate socio
  if (sol.tipo === "adhesion") {
    // Create user in Auth if doesn't exist
    const { data: existingUser } = await adminClient.auth.admin.listUsers();
    const authUser = existingUser.users.find((u) => u.email === sol.email);

    let userId: string;
    if (authUser) {
      userId = authUser.id;
    } else {
      const { data: newUser } = await adminClient.auth.admin.createUser({
        email: sol.email,
        email_confirm: true,
      });
      userId = newUser.user!.id;
    }

    await adminClient
      .from("socios")
      .upsert({
        user_id: userId,
        nombre: sol.nombre,
        email: sol.email,
        rol: "socio",
        fecha_alta: new Date().toISOString().split("T")[0],
        estado: "activo",
      }, { onConflict: "user_id" });
  }

  return NextResponse.redirect(
    new URL("/portal/admin/solicitudes", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")
  );
}
