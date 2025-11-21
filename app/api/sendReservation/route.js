import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      nom, prenom, email, telephone,
      dateDebut, dateFin, lieuPrise, message, vehicule
    } = body;

    if (!nom || !email || !telephone || !dateDebut || !dateFin) {
      return new Response(JSON.stringify({ message: "Champs requis manquants" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Ammotion Cars" <${process.env.SMTP_USER}>`,
      to: "contact@ammotioncars.com",
      subject: `Nouvelle réservation : ${vehicule || 'Modèle non précisé'}`,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom :</strong> ${nom} ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Véhicule :</strong> ${vehicule || 'Non spécifié'}</p>
        <p><strong>Date de début :</strong> ${dateDebut}</p>
        <p><strong>Date de fin :</strong> ${dateFin}</p>
        <p><strong>Lieu de prise en charge :</strong> ${lieuPrise || 'Non précisé'}</p>
        <p><strong>Message :</strong> ${message || 'Aucun message'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email envoyé avec succès !" }), { status: 200 });
  } catch (error) {
    console.error("Erreur d’envoi :", error);
    return new Response(JSON.stringify({ message: "Erreur lors de l’envoi du mail." }), { status: 500 });
  }
}
