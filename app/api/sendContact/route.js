import { Resend } from "resend";

export async function POST(req) {
  try {
    const data = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "contact@ammotioncars.com", // <-- ton email d'envoi
      to: "contact@ammotioncars.com", // <-- ton email pour recevoir les contacts
      subject: `Nouveau message : ${data.service || "Sans service"}`,
     html: `
      <div style="
        font-family: Arial, sans-serif;
        color: #ffffff;
        line-height: 1.5;
        max-width: 600px;
        margin: auto;
        padding: 20px;
        background: linear-gradient(135deg, #1a1a1a, #333333);
        border-radius: 12px;
        border: 1px solid #5f6364;
      ">
        <h2 style="text-align:center; color: #5f6364; margin-bottom:20px;">📩 Nouvelle demande de contact AM Motion Cars</h2>

        <div style="padding: 15px; background: #222222; border-radius: 8px; margin-bottom: 15px;">
          <p><strong>Nom :</strong> ${data.nom} ${data.prenom}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Téléphone :</strong> ${data.telephone}</p>
          <p><strong>Service :</strong> ${data.service || "Non précisé"}</p>
          <p><strong>Date souhaitée :</strong> ${data.date || "Non précisée"}</p>
        </div>

        <div style="padding: 15px; background: #333333; border-radius: 8px; margin-bottom: 15px;">
          <p><strong>Message :</strong></p>
          <p style="padding: 10px; background: #1a1a1a; border-radius: 5px;">${data.message}</p>
        </div>

        <p style="text-align:center; font-size:12px; color:#888888; margin-top:20px;">
          Envoyé depuis le site AM Motion Cars
        </p>
      </div>
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
