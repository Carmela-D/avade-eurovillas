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
  await adminClient
    .from("solicitudes_adhesion")
    .update({ estado: "descartada" })
    .eq("id", id);

  return NextResponse.redirect(
    new URL("/portal/admin/solicitudes", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")
  );
}
