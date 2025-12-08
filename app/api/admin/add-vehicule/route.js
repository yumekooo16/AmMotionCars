import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const marque = formData.get("marque");
    const nom = formData.get("nom");
    const file = formData.get("image");

    if (!marque || !nom || !file) {
      return Response.json({ 
        success: false, 
        error: "Données manquantes" 
      }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${marque}/${Date.now()}-${file.name}`;

    // Upload image
    const { error: uploadError } = await supabase.storage
      .from("tarifs-images")
      .upload(filename, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) throw uploadError;

    // Récupérer URL publique
    const { data: publicUrlData } = supabase.storage
      .from("tarifs-images")
      .getPublicUrl(filename);

    // Insertion dans la table
    const { data: vehiculeData, error: dbError } = await supabase
      .from("vehicules")
      .insert({
        marque: marque.toLowerCase(),
        nom: nom,
        image_url: publicUrlData.publicUrl
      })
      .select();

    if (dbError) throw dbError;

    return Response.json({ 
      success: true, 
      vehicule: vehiculeData[0]
    });

  } catch (err) {
    console.error("Erreur:", err);
    return Response.json({ 
      success: false, 
      error: err.message 
    }, { status: 500 });
  }
}