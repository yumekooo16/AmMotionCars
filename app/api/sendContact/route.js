import { Resend } from "resend";

export async function POST(req) {
  try {
    const data = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "contact@ammotioncars.com",
      to: "contact@ammotioncars.com",
      subject: `Nouveau message : ${data.service || "Sans service"}`,
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0a0a0b;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0b;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#0d0d0f;border:1px solid rgba(255,255,255,0.08);max-width:560px;width:100%;">

          <tr>
            <td style="padding:36px 40px 28px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 6px;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(255,255,255,0.3);">AM Motion Cars</p>
              <h1 style="margin:0;font-size:20px;font-weight:300;color:#f0ede8;letter-spacing:0.02em;">Nouveau message</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 6px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.25);">Service demandé</p>
              <p style="margin:0;font-size:18px;font-weight:300;color:#f0ede8;">${data.service || "Non précisé"}</p>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 20px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.25);">Client</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                    <span style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);display:inline-block;width:120px;">Nom</span>
                    <span style="font-size:13px;font-weight:300;color:rgba(255,255,255,0.7);">${data.nom} ${data.prenom}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                    <span style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);display:inline-block;width:120px;">Email</span>
                    <span style="font-size:13px;font-weight:300;color:rgba(255,255,255,0.7);">${data.email}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;">
                    <span style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);display:inline-block;width:120px;">Téléphone</span>
                    <span style="font-size:13px;font-weight:300;color:rgba(255,255,255,0.7);">${data.telephone}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${data.date ? `
          <tr>
            <td style="padding:28px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 20px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.25);">Date souhaitée</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;">
                    <span style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);display:inline-block;width:120px;">Date</span>
                    <span style="font-size:13px;font-weight:300;color:rgba(255,255,255,0.7);">${data.date}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ''}

          ${data.message ? `
          <tr>
            <td style="padding:28px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 12px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.25);">Message</p>
              <p style="margin:0;font-size:13px;font-weight:300;color:rgba(255,255,255,0.55);line-height:1.7;">${data.message}</p>
            </td>
          </tr>` : ''}

          <tr>
            <td style="padding:24px 40px;">
              <p style="margin:0;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.2);">
                AM Motion Cars · Paris · ammotioncars.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ message: "Erreur Envoi Email" }, { status: 500 });
    }

    return Response.json({ message: "Email envoyé !" }, { status: 200 });
  } catch (err) {
    console.error("Erreur API:", err);
    return Response.json({ message: "Erreur serveur" }, { status: 500 });
  }
}