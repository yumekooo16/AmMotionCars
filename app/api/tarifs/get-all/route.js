import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

// ✅ Cache de 60 secondes (Next.js revalide automatiquement)
export const revalidate = 60;

// ✅ Instance Supabase réutilisable
let supabaseInstance = null;

function getSupabase() {
  if (!supabaseInstance) {
    supabaseInstance = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
  }
  return supabaseInstance;
}

export async function GET() {
  try {
    const supabase = getSupabase();

    // ✅ Requêtes parallèles au lieu de séquentielles (2x plus rapide)
    const [tarifResult, vehiculesResult] = await Promise.all([
      supabase
        .from("tarifs")
        .select("*")
        .single(),
      
      supabase
        .from("vehicules")
        .select("*")
        .order('marque', { ascending: true })
        .order('nom', { ascending: true })
    ]);

    const { data: tarifData, error: tarifError } = tarifResult;
    const { data: vehiculesData, error: vehiculesError } = vehiculesResult;

    // ✅ Log les erreurs mais continue (ne bloque pas tout)
    if (tarifError) {
      console.error("⚠️ Erreur tarifs:", tarifError);
    }

    if (vehiculesError) {
      console.error("⚠️ Erreur véhicules:", vehiculesError);
    }

    // ✅ Retourne toujours des données (même partielles)
    return new Response(
      JSON.stringify({ 
        success: true, 
        tarifs: tarifData || {},
        vehicules: vehiculesData || []
      }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          // ✅ Headers de cache pour le navigateur
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        }
      }
    );

  } catch (err) {
    console.error("❌ Erreur serveur critique:", err);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Erreur lors du chargement des données',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}