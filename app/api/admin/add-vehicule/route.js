import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export async function POST(req) {
  // 0️⃣ Lire les variables d'environnement à l'exécution
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseJwtSecret = process.env.SUPABASE_JWT_SECRET;

  if (!supabaseUrl || !supabaseKey || !supabaseJwtSecret) {
    throw new Error("Supabase URL, Service Role Key ou JWT secret non défini !");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // 1️⃣ Vérification JWT admin
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json({ success: false, error: "Token manquant" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    let payload;
    try {
      payload = jwt.verify(token, supabaseJwtSecret);
    } catch (err) {
      return Response.json({ success: false, error: "Token invalide" }, { status: 401 });
    }

    if (payload?.role !== "admin") {
      return Response.json({ success: false, error: "Accès refusé" }, { status: 403 });
    }

    // 2️⃣ Récupération des données
    const formData = await req.formData();
    const marque = formData.get("marque");
    const nom = formData.get("nom");
    const file = formData.get("image");

    if (!marque || !nom || !file) {
      return Response.json({ success: false, error: "Données manquantes" }, { status: 400 });
    }

    // 3️⃣ Préparer le fichier
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const safeMarque = encodeURIComponent(marque.toLowerCase().replace(/\s/g, "_"));
    const safeFileName = file.name.replace(/\s/g, "_");
    const filename = `${safeMarque}/${Date.now()}-${safeFileName}`;

    // 4️⃣ Upload via SERVICE_ROLE (ignore RLS)
    const { error: uploadError } = await supabase.storage
      .from("tarifs-images")
      .upload(filename, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Erreur upload:", uploadError);
      throw uploadError;
    }

    // 5️⃣ Récupérer URL publique
    const { data: publicUrlData, error: urlError } = supabase.storage
      .from("tarifs-images")
      .getPublicUrl(filename);

    if (urlError || !publicUrlData?.publicUrl) {
      console.error("Erreur public URL:", urlError, publicUrlData);
      throw new Error("Impossible de récupérer l'URL publique");
    }

    // 6️⃣ Insertion dans la table
    const { data: vehiculeData, error: dbError } = await supabase
      .from("vehicules")
      .insert({
        marque: marque.toLowerCase(),
        nom,
        image_url: publicUrlData.publicUrl,
      })
      .select();

    if (dbError) {
      console.error("Erreur DB:", dbError);
      throw dbError;
    }

    return Response.json({ success: true, vehicule: vehiculeData[0] });

  } catch (err) {
    console.error("Erreur catch:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
