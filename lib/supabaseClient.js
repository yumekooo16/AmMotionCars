import { createClient } from '@supabase/supabase-js';

// Next.js exige que les variables d'environnement exposées côté client commencent par "NEXT_PUBLIC_"
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // Lancer une erreur explicite pendant l'évaluation du module
  // afin d'échouer tôt en développement/build si les variables manquent
  throw new Error("Les variables d'environnement NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY doivent être définies");
}

// Client Supabase utilisé côté client
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabaseClient;
