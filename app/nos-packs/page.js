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
            alt="Pack mariage — Location voiture prestige Paris conciergerie automobile"
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
              Packs et offres — Services automobile pour vos événements
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
          TEXTE SEO - Optimisé
          ============================================ */}
      <section className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-16 px-6" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-base md:text-lg leading-relaxed" suppressHydrationWarning>
          <p>
            AM Motion Cars propose des packs sur mesure pour tous vos événements. Mariages, 
            séminaires, galas, réceptions : nous orchestrons vos déplacements automobiles 
            avec élégance et discrétion.
          </p>
          
          <p>
            Pack Mariage : transfert mariés, navettes invités, photos avec véhicules prestige. 
            Pack Corporate : mise à disposition flotte, transferts participants, chauffeurs dédiés. 
            Pack Événements : location voiture de luxe, coordination logistique, service premium.
          </p>
          
          <p>
            Chaque pack inclut : véhicules récents et entretenus, chauffeurs professionnels 
            formés, assurance tous risques, assistance 24/7. Personnalisables selon vos envies 
            et budget, ces offres garantissent une expérience inoubliable. Obtenez un devis 
            gratuit et découvrez comment nous pouvons sublimer votre événement.
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