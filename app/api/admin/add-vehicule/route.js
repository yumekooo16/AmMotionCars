import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL ou Service Role Key non définie !");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const marque = formData.get("marque");
    const nom = formData.get("nom");
    const file = formData.get("image");

    console.log("Form Data:", { marque, nom, file });

    if (!marque || !nom || !file) {
      return Response.json({ success: false, error: "Données manquantes" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Sécuriser le nom du fichier
    const safeMarque = encodeURIComponent(marque.toLowerCase().replace(/\s/g, "_"));
    const safeFileName = file.name.replace(/\s/g, "_");
    const filename = `${safeMarque}/${Date.now()}-${safeFileName}`;

    // Upload image
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

    // Récupérer URL publique
    const { data: publicUrlData, error: urlError } = supabase.storage
      .from("tarifs-images")
      .getPublicUrl(filename);

    if (urlError || !publicUrlData?.publicUrl) {
      console.error("Erreur public URL:", urlError, publicUrlData);
      throw new Error("Impossible de récupérer l'URL publique");
    }

    // Insertion dans la table
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
