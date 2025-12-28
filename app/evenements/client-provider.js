'use client';

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export function useEvenementsData() {
  const [flyerUrl, setFlyerUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFlyer() {
      try {
        const { data, error } = await supabase
          .from("nos_pack")
          .select("flyer_url")
          .single();
        
        if (error) throw error;
        if (data?.flyer_url) setFlyerUrl(data.flyer_url);
      } catch (err) {
        console.error("Erreur chargement flyer:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFlyer();
  }, []);

  return { flyerUrl, loading };
}
