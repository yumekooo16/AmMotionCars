'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { createClient } from "@supabase/supabase-js";

// ✅ Lazy loading du composant Mercedes
const Mercedes = dynamic(() => import("@/components/nos-packs/pack.js"), {
  loading: () => (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f6364]"></div>
    </div>
  ),
  ssr: false
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Tarifs() {
  const [flyerUrl, setFlyerUrl] = useState("");

  useEffect(() => {
    async function fetchFlyer() {
      try {
        const { data, error } = await supabase
          .from("tarifs")
          .select("flyer_url")
          .single();
        
        if (error) throw error;
        if (data?.flyer_url) setFlyerUrl(data.flyer_url);
      } catch (err) {
        console.error("Erreur:", err);
      }
    }
    fetchFlyer();
  }, []);

  return (
    <>
      {/* ============================================
          SECTION HERO - Ultra-épurée
          ============================================ */}
      <section className="relative w-full h-screen overflow-hidden" suppressHydrationWarning>
        {/* Background Image */}
        <div className="absolute inset-0" suppressHydrationWarning>
          <Image
            src="/image/interieur_g43.webp"
            alt="Packs conciergerie automobile Paris"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-center text-white" suppressHydrationWarning>
          <div className="max-w-3xl space-y-6" suppressHydrationWarning>
            {/* H1 minimaliste */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
              Packs & Tarifs
            </h1>

            {/* Sous-titre avec séparateur premium */}
            <p className="text-lg md:text-2xl lg:text-3xl font-light text-gray-200">
              Conciergerie automobile · Paris
            </p>

            {/* Instruction élégante */}
            <p className="text-sm md:text-base text-gray-400 font-light pt-4">
              Sélectionnez votre formule
            </p>

            {/* Scroll indicator */}
            <div className="pt-12 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TEXTE SEO - Ultra-discret
          ============================================ */}
      <section className="relative w-full bg-black py-10 px-6" suppressHydrationWarning>
        <div className="max-w-2xl mx-auto text-center" suppressHydrationWarning>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light tracking-wide">
            Packs sur mesure à Paris et en Île-de-France · 
            Transferts VIP · Événements · Mariages · Prestations audiovisuelles
          </p>
        </div>
      </section>

      {/* ============================================
          COMPOSANT VÉHICULES
          ============================================ */}
      <Mercedes />
    </>
  );
}