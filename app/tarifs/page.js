'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { createClient } from "@supabase/supabase-js";

// ✅ Lazy loading du composant Mercedes
const Mercedes = dynamic(() => import("@/components/Tarifs/vehicules"), {
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
          SECTION HERO
          ============================================ */}
      <section className="relative w-full h-screen overflow-hidden" suppressHydrationWarning>
        <div className="absolute inset-0" suppressHydrationWarning>
          <Image
            src="/image/interieur_g43.webp"
            alt="Intérieur Mercedes Classe G - Conciergerie automobile de luxe à Paris"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-center text-white" suppressHydrationWarning>
          <div className="max-w-3xl space-y-6" suppressHydrationWarning>
            {/* H1 premium et SEO-friendly */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-wide">
              Tarifs Location Quotidienne 
            </h1>

            {/* Sous-titre avec localisation */}
            <p className="text-lg md:text-2xl lg:text-3xl font-light text-gray-200">
              Paris · Île-de-France
            </p>

            {/* Description élégante */}
            <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto pt-4"> 
              Chaque trajet reflète notre engagement vers l&apos;excellence.
            </p>

            {/* Instruction subtile */}
            <p className="text-sm md:text-base text-gray-400 font-light pt-2">
              Sélectionnez votre véhicule ci-dessous
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          COMPOSANT VÉHICULES
          ============================================ */}
      <Mercedes />

      {/* ============================================
          SECTION SEO PREMIUM
          ============================================ */}
      <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-300">
          
          {/* H2 Principal */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
              Notre Engagement Premium
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-zinc-700 to-transparent"></div>
          </div>

          {/* Premier paragraphe */}
          <p className="text-base md:text-lg leading-relaxed font-light text-gray-400">
            Notre conciergerie automobile propose une <strong className="text-gray-200 font-normal">location quotidienne de véhicules de luxe</strong> pensée pour une clientèle exigeante. Chaque prestation reflète notre vision du service haut de gamme : discrétion, ponctualité et attention aux détails.
          </p>

          {/* Sous-section Expérience */}
          <div className="space-y-4 pt-8">
            <h3 className="text-xl md:text-2xl font-light text-white tracking-wide">
              Une Expérience Sur Mesure
            </h3>
            <div className="w-10 h-px bg-gradient-to-r from-zinc-700 to-transparent"></div>
          </div>

          <p className="text-base md:text-lg leading-relaxed font-light text-gray-400">
            Que vous prépariez un événement professionnel, un moment d&apos;exception ou un déplacement privé, notre service de <strong className="text-gray-200 font-normal">conciergerie automobile de luxe</strong> s&apos;adapte à vos besoins. Nous veillons à ce que chaque trajet soit à la hauteur de vos attentes.
          </p>

          {/* Sous-section Géographique */}
          <div className="space-y-4 pt-8">
            <h3 className="text-xl md:text-2xl font-light text-white tracking-wide">
              Paris et Île-de-France
            </h3>
            <div className="w-10 h-px bg-gradient-to-r from-zinc-700 to-transparent"></div>
          </div>

          <p className="text-base md:text-lg leading-relaxed font-light text-gray-400 pb-2">
            Basée à <strong className="text-gray-200 font-normal">Paris</strong>, notre conciergerie intervient dans toute l&apos;<strong className="text-gray-200 font-normal">Île-de-France</strong>. Nos véhicules sont disponibles en location quotidienne, avec des formules pensées pour s&apos;intégrer naturellement à votre emploi du temps. Simplicité, élégance et fiabilité définissent notre approche.
          </p>

        </div>
      </section>
    </>
  );
}