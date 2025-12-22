import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const revalidate = 120; // ✅ Cache plus long car ça change rarement

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

    // ✅ Seulement les URLs des flyers (très léger)
    const { data, error } = await supabase
      .from("tarifs")
      .select('flyer_url_mercedes, flyer_url_audi, flyer_url_bmw, flyer_url_porsche, flyer_url_volkswagen')
      .single();

    if (error) {
      console.error("⚠️ Erreur tarifs:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, tarifs: data || {} }), 
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
      JSON.stringify({ success: false, error: 'Erreur serveur' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}