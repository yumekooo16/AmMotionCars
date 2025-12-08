import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

// Ajoutez ces logs
console.log("🔍 SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("🔍 SERVICE_KEY exists:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);
console.log("🔍 SERVICE_KEY length:", process.env.SUPABASE_SERVICE_ROLE_KEY?.length);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const marque = formData.get("marque");
    const nom = formData.get("nom");
    const file = formData.get("image");

    console.log("📝 Données reçues:", { marque, nom, fileName: file?.name });

    if (!marque || !nom || !file) {
      return Response.json({ 
        success: false, 
        error: "Données manquantes" 
      }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${marque}/${Date.now()}-${file.name}`;

    console.log("📤 Upload vers:", filename);

    // Upload image
    const { error: uploadError } = await supabase.storage
      .from("tarifs-images")
      .upload(filename, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("❌ Erreur upload:", uploadError);
      throw uploadError;
    }

    console.log("✅ Upload réussi");

    // Récupérer URL publique
    const { data: publicUrlData } = supabase.storage
      .from("tarifs-images")
      .getPublicUrl(filename);

    console.log("🔗 URL publique:", publicUrlData.publicUrl);

    // Insertion dans la table
    const { data: vehiculeData, error: dbError } = await supabase
      .from("vehicules")
      .insert({
        marque: marque.toLowerCase(),
        nom: nom,
        image_url: publicUrlData.publicUrl
      })
      .select();

    if (dbError) {
      console.error("❌ Erreur DB:", dbError);
      throw dbError;
    }

    console.log("✅ Véhicule inséré:", vehiculeData[0]);

    return Response.json({ 
      success: true, 
      vehicule: vehiculeData[0]
    });

  } catch (err) {
    console.error("💥 Erreur globale:", err);
    return Response.json({ 
      success: false, 
      error: err.message 
    }, { status: 500 });
  }
}