import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const revalidate = 60;

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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const marque = searchParams.get('marque');

    // ✅ Validation
    if (!marque) {
      return new Response(
        JSON.stringify({ success: false, error: 'Paramètre marque manquant' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ✅ Sécurité : whitelist des marques autorisées
    const marquesAutorisees = ['mercedes', 'audi', 'bmw', 'porsche', 'volkswagen'];
    const marqueNormalisee = marque.toLowerCase();
    
    if (!marquesAutorisees.includes(marqueNormalisee)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Marque non autorisée' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const supabase = getSupabase();

    // ✅ Requête filtrée par marque
    const { data, error } = await supabase
      .from('vehicules')
      .select('id, nom, marque, image_url')
      .ilike('marque', marqueNormalisee)
      .order('nom', { ascending: true });

    if (error) {
      console.error(`⚠️ Erreur véhicules ${marque}:`, error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, vehicules: data || [] }), 
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
      JSON.stringify({ success: false, error: 'Erreur serveur' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}