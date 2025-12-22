import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const revalidate = 60;

let supabaseInstance = null;

function getSupabase() {
  if (!supabaseInstance) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error('Variables d\'environnement Supabase manquantes');
    }

    supabaseInstance = createClient(url, key);
  }
  return supabaseInstance;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const marque = searchParams.get('marque');

    if (!marque) {
      return new Response(
        JSON.stringify({ success: false, error: 'Paramètre marque manquant' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ✅ Whitelist basée sur vos données réelles
    const marquesAutorisees = ['mercedes', 'rolls royce'];
    const marqueNormalisee = marque.toLowerCase().trim();
    
    if (!marquesAutorisees.includes(marqueNormalisee)) {
      console.warn(`⚠️ Marque non autorisée: "${marque}"`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Marque non autorisée',
          marqueRecue: marque,
          marquesAutorisees 
        }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const supabase = getSupabase();

    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout de la requête Supabase')), 8000)
    );

    // ✅ Recherche EXACTE avec la valeur normalisée
    const query = supabase
      .from('vehicules_evenements')
      .select('id, nom, marque, image_url')
      .eq('marque', marqueNormalisee) // ✅ eq au lieu de ilike pour correspondance exacte
      .order('nom', { ascending: true });

    const result = await Promise.race([query, timeout]);
    const { data, error } = result;

    if (error) {
      console.error(`⚠️ Erreur véhicules ${marque}:`, error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: error.message,
          vehicules: []
        }), 
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    const validatedVehicules = Array.isArray(data) ? data : [];

    console.log(`✅ Véhicules "${marque}" chargés:`, {
      count: validatedVehicules.length,
      vehicules: validatedVehicules.map(v => v.nom)
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        vehicules: validatedVehicules 
      }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        }
      }
    );

  } catch (err) {
    console.error("❌ Erreur serveur:", err);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Erreur serveur',
        vehicules: []
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}