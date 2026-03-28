import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const revalidate = 60;

// ✅ Instance Supabase réutilisable
let supabaseInstance = null;

function getSupabase() {
  if (!supabaseInstance) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // ✅ Validation des variables d'environnement
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

    // ✅ Requêtes parallèles avec timeout
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout de la requête Supabase')), 8000)
    );

    const queries = Promise.all([
      supabase
        .from("nos_pack")
        .select("*")
        .maybeSingle(),
      
      supabase
        .from("vehicules_evenements")
        .select("*")
        .order('marque', { ascending: true })
        .order('nom', { ascending: true })
    ]);

    // ✅ Course entre les requêtes et le timeout
    const [tarifResult, vehiculesResult] = await Promise.race([queries, timeout]);

    const { data: tarifData, error: tarifError } = tarifResult;
    const { data: vehiculesData, error: vehiculesError } = vehiculesResult;

    // ✅ Log détaillé des erreurs
    if (tarifError) {
      console.error("⚠️ Erreur tarifs:", {
        message: tarifError.message,
        details: tarifError.details,
        hint: tarifError.hint,
        code: tarifError.code
      });
    }

    if (vehiculesError) {
      console.error("⚠️ Erreur véhicules:", {
        message: vehiculesError.message,
        details: vehiculesError.details,
        hint: vehiculesError.hint,
        code: vehiculesError.code
      });
    }

    // ✅ Validation des données retournées
    const validatedTarifs = tarifData && typeof tarifData === 'object' ? tarifData : {};
    const validatedVehicules = Array.isArray(vehiculesData) ? vehiculesData : [];

    // ✅ Log pour le debugging
    console.log('✅ API Response:', {
      tarifsCount: Object.keys(validatedTarifs).length,
      vehiculesCount: validatedVehicules.length,
      hasErrors: !!(tarifError || vehiculesError)
    });

    // ✅ Retourne toujours des données (même partielles)
    return new Response(
      JSON.stringify({ 
        success: true, 
        tarifs: validatedTarifs,
        vehicules: validatedVehicules,
        // ✅ Informations de debug en développement
        ...(process.env.NODE_ENV === 'development' && {
          debug: {
            tarifError: tarifError ? tarifError.message : null,
            vehiculesError: vehiculesError ? vehiculesError.message : null
          }
        })
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
    // ✅ Log d'erreur détaillé
    console.error("❌ Erreur serveur critique:", {
      message: err.message,
      stack: err.stack,
      name: err.name,
      type: typeof err
    });
    
    // ✅ Réponse d'erreur structurée
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Erreur lors du chargement des données',
        details: process.env.NODE_ENV === 'development' ? {
          message: err.message,
          type: err.name,
          stack: err.stack
        } : undefined,
        // ✅ Données vides pour permettre au frontend de gérer gracieusement
        tarifs: {},
        vehicules: []
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