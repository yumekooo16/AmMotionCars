import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
  try {
    // 1. Récupérer les tarifs (flyers)
    const { data: tarifData, error: tarifError } = await supabase
      .from("tarifs")
      .select("*")
      .single();

    if (tarifError) {
      console.error("Erreur tarifs:", tarifError);
    }

    // 2. Récupérer les véhicules
    const { data: vehiculesData, error: vehiculesError } = await supabase
      .from("vehicules")
      .select("*")
      .order('marque', { ascending: true })
      .order('nom', { ascending: true });

    if (vehiculesError) {
      console.error("Erreur véhicules:", vehiculesError);
    }

    return Response.json({ 
      success: true, 
      tarifs: tarifData || {},
      vehicules: vehiculesData || []
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });

  } catch (err) {
    console.error("Erreur serveur:", err);
    return Response.json({ 
      success: false, 
      error: err.message 
    }, { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}