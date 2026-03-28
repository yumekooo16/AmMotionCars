import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return Response.json({ 
        success: false, 
        error: "ID manquant" 
      }, { status: 400 });
    }

    // 1. Récupérer le véhicule
    const { data: vehicule, error: fetchError } = await supabase
      .from("vehicules")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError) throw fetchError;

    // 2. Supprimer l'image du bucket
    if (vehicule?.image_url) {
      const urlParts = vehicule.image_url.split('/tarifs-images/');
      if (urlParts[1]) {
        await supabase.storage
          .from("tarifs-images")
          .remove([urlParts[1]]);
      }
    }

    // 3. Supprimer de la base de données
    const { error: deleteError } = await supabase
      .from("vehicules")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    return Response.json({ 
      success: true 
    });

  } catch (err) {
    console.error("Erreur:", err);
    return Response.json({ 
      success: false, 
      error: err.message 
    }, { status: 500 });
  }
}