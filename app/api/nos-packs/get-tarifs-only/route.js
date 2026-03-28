import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const revalidate = 120;

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

export async function GET() {
  try {
    const supabase = getSupabase();

    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout de la requête Supabase')), 8000)
    );

    const query = supabase
      .from("nos_pack")
      .select("*")
      .maybeSingle();

    const result = await Promise.race([query, timeout]);
    const { data, error } = result;

    if (error) {
      console.error("⚠️ Erreur tarifs:", error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: error.message,
          tarifs: {}
        }), 
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    const validatedTarifs = data && typeof data === 'object' ? data : {};

    console.log('✅ Tarifs chargés:', Object.keys(validatedTarifs));

    return new Response(
      JSON.stringify({ 
        success: true, 
        tarifs: validatedTarifs 
      }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=240',
        }
      }
    );

  } catch (err) {
    console.error("❌ Erreur serveur:", err);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Erreur serveur',
        tarifs: {}
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}