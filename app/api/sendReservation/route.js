import { Resend } from "resend";

export async function POST(req) {
  try {
    const data = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "contact@ammotioncars.com",
      to: "contact@ammotioncars.com",
      subject: `Nouvelle réservation : ${data.vehicule || "Véhicule non spécifié"}`,
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
              <h1 style="margin:0;font-size:20px;font-weight:300;color:#f0ede8;letter-spacing:0.02em;">Nouvelle réservation</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 6px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.25);">Véhicule sélectionné</p>
              <p style="margin:0;font-size:18px;font-weight:300;color:#f0ede8;">${data.vehicule || "Non spécifié"}</p>
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

          <tr>
            <td style="padding:28px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 20px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.25);">Prestation</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                    <span style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);display:inline-block;width:120px;">Début</span>
                    <span style="font-size:13px;font-weight:300;color:rgba(255,255,255,0.7);">${data.dateDebut}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                    <span style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);display:inline-block;width:120px;">Fin</span>
                    <span style="font-size:13px;font-weight:300;color:rgba(255,255,255,0.7);">${data.dateFin}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;">
                    <span style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);display:inline-block;width:120px;">Lieu</span>
                    <span style="font-size:13px;font-weight:300;color:rgba(255,255,255,0.7);">${data.lieuPrise || "Non précisé"}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

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
      console.error("Erreur Resend :", error);
      return new Response(JSON.stringify({ message: "Erreur lors de l'envoi de l'email" }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Email envoyé avec succès !" }), { status: 200 });

  } catch (err) {
    console.error("Erreur API sendReservation :", err);
    return new Response(JSON.stringify({ message: "Erreur serveur" }), { status: 500 });
  }
}