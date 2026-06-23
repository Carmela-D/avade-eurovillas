import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — emails will not be sent");
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
}

const FROM = "Adelante Eurovillas <informacion@avade.org>";
const TO = process.env.CONTACT_EMAIL ?? "informacion@avade.org";

export async function sendAdhesionNotification(data: {
  nombre: string;
  apellidos: string;
  email: string;
  telefono?: string;
  direccion_parcela?: string;
  mensaje?: string;
}) {
  const resend = getResend();
  if (!resend) return;
  return resend.emails.send({
    from: FROM,
    to: TO,
    subject: `Nueva solicitud de adhesión: ${data.nombre} ${data.apellidos}`,
    html: `
      <h2>Nueva solicitud de adhesión — Adelante Eurovillas</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;color:#4A3F30">Nombre</td><td style="padding:8px">${data.nombre} ${data.apellidos}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#4A3F30">Email</td><td style="padding:8px">${data.email}</td></tr>
        ${data.telefono ? `<tr><td style="padding:8px;font-weight:bold;color:#4A3F30">Teléfono</td><td style="padding:8px">${data.telefono}</td></tr>` : ""}
        ${data.direccion_parcela ? `<tr><td style="padding:8px;font-weight:bold;color:#4A3F30">Parcela</td><td style="padding:8px">${data.direccion_parcela}</td></tr>` : ""}
        ${data.mensaje ? `<tr><td style="padding:8px;font-weight:bold;color:#4A3F30">Mensaje</td><td style="padding:8px">${data.mensaje}</td></tr>` : ""}
      </table>
      <hr/>
      <p style="color:#697353;font-size:12px">Revisar y aprobar en el panel de Supabase → Table Editor → solicitudes_adhesion</p>
    `,
  });
}

export async function sendInfoNotification(data: {
  nombre: string;
  email: string;
}) {
  const resend = getResend();
  if (!resend) return;
  return resend.emails.send({
    from: FROM,
    to: TO,
    subject: `Nueva solicitud de información: ${data.nombre}`,
    html: `
      <h2>Nueva solicitud de información — Adelante Eurovillas</h2>
      <p><strong>Nombre:</strong> ${data.nombre}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p style="color:#697353;font-size:12px">Añadir a la lista de difusión si corresponde.</p>
    `,
  });
}

export async function sendContactoNotification(data: {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}) {
  const resend = getResend();
  if (!resend) return;
  return resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `[Contacto web] ${data.asunto}`,
    html: `
      <h2>Mensaje de contacto — Adelante Eurovillas</h2>
      <p><strong>De:</strong> ${data.nombre} (${data.email})</p>
      <p><strong>Asunto:</strong> ${data.asunto}</p>
      <hr/>
      <p>${data.mensaje.replace(/\n/g, "<br/>")}</p>
    `,
  });
}

export async function sendConfirmacionInfo(to: string, nombre: string) {
  const resend = getResend();
  if (!resend) return;
  return resend.emails.send({
    from: FROM,
    to,
    subject: "Te tenemos en cuenta — Adelante Eurovillas",
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#4A3F30">
        <h1 style="color:#697353">Hola, ${nombre}</h1>
        <p>Gracias por interesarte en lo que estamos haciendo en Adelante Eurovillas.</p>
        <p>Te iremos informando de las novedades más importantes. Somos cuidadosos con el correo: no vas a recibir spam, solo actualizaciones cuando haya algo que valga la pena contar.</p>
        <p>Si en algún momento quieres dar el paso y adherirte formalmente a la plataforma, puedes hacerlo en <a href="${process.env.NEXT_PUBLIC_SITE_URL}/hazte-socio" style="color:#697353">avade.org/hazte-socio</a>.</p>
        <p style="margin-top:32px">Un saludo,<br/><strong>El equipo de Adelante Eurovillas</strong></p>
        <hr style="border-color:#D9D0BF;margin-top:32px"/>
        <p style="font-size:12px;color:#A2A685">Recibiste este email porque dejaste tu dirección en avade.org. Si crees que es un error, responde a este correo y lo corregimos.</p>
      </div>
    `,
  });
}
