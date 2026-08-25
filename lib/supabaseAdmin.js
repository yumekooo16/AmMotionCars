import { createClient } from '@supabase/supabase-js';

let supabaseAdminInstance = null;

/**
 * Client Supabase côté serveur avec la clé service_role.
 * Bypass RLS — à utiliser uniquement dans les routes API / Server Actions.
 */
export function getSupabaseAdmin() {
  if (!supabaseAdminInstance) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error(
        "Les variables NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY doivent être définies"
      );
    }

    supabaseAdminInstance = createClient(url, key);
  }

  return supabaseAdminInstance;
}
