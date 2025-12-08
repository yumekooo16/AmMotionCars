import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    // Détecter si c'est un véhicule (a "nom" et "marque") ou un flyer (a "category")
    const nom = formData.get("nom");
    const marque = formData.get("marque");
    const category = formData.get("category");
    const file = formData.get("image");

    // ========== CAS 1 : AJOUT VÉHICULE ==========
    if (nom && marque) {
      console.log("📝 Ajout véhicule:", marque, nom);

      if (!file) {
        return Response.json({ success: false, error: "Image manquante" }, { status: 400 });
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = `${marque}/${Date.now()}-${file.name}`;

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

      const { data: publicUrlData } = supabase.storage
        .from("tarifs-images")
        .getPublicUrl(filename);

      const { data: vehiculeData, error: dbError } = await supabase
        .from("vehicules")
        .insert({
          marque: marque.toLowerCase(),
          nom: nom,
          image_url: publicUrlData.publicUrl
        })
        .select();

      if (dbError) {
        console.error("Erreur BDD:", dbError);
        throw dbError;
      }

      console.log("✅ Véhicule créé:", vehiculeData);
      return Response.json({ success: true, vehicule: vehiculeData[0] });
    }

    // ========== CAS 2 : AJOUT FLYER ==========
    if (category) {
      console.log("🎨 Ajout flyer:", category);

      if (!file) {
        return Response.json({ success: false, error: "Image manquante" }, { status: 400 });
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = `${category}-${Date.now()}.${file.name.split(".").pop()}`;

      const { error: uploadError } = await supabase.storage
        .from("tarifs-images")
        .upload(filename, buffer, {
          contentType: file.type,
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("tarifs-images")
        .getPublicUrl(filename);

      const publicUrl = publicUrlData.publicUrl;

      const column = `flyer_url_${category}`;
      const { error: dbError } = await supabase
        .from("tarifs")
        .update({ [column]: publicUrl, updated_at: new Date() })
        .eq("id", 1);

      if (dbError) throw dbError;

      return Response.json({ success: true, url: publicUrl });
    }

    // Si ni véhicule ni flyer
    return Response.json({ 
      success: false, 
      error: "Données invalides" 
    }, { status: 400 });

  } catch (err) {
    console.error("Erreur serveur:", err);
    return Response.json({ 
      success: false, 
      error: err.message 
    }, { status: 500 });
  }
}