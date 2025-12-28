'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// ✅ Lazy loading des services
const Audiovisuel = dynamic(() => import("@/components/Nosservices/audiovisuel"), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse rounded-xl" />,
  ssr: true
});

const Evenement = dynamic(() => import("@/components/Nosservices/evenements"), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse rounded-xl" />,
  ssr: true
});

const VIP = dynamic(() => import("@/components/Nosservices/VIP"), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse rounded-xl" />,
  ssr: true
});

export default function Services() {
  return (
    <>
      {/* ============================================
          SECTION HERO - Ultra-épurée
          ============================================ */}
      <section className="relative w-full h-screen overflow-hidden" suppressHydrationWarning>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full" suppressHydrationWarning>
          <Image
            src="/image/Voitures_de_luxe_sous_ciel_couvert.webp"
            alt="Services de conciergerie automobile - Véhicules de prestige à Paris"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16" suppressHydrationWarning>
          <div className="text-center text-white max-w-3xl space-y-6" suppressHydrationWarning>
            {/* H1 minimaliste */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
              Services de Conciergerie
            </h1>

            {/* Sous-titre avec séparateur premium */}
            <p className="text-lg md:text-2xl lg:text-3xl font-light text-gray-200">
              Paris · Île-de-France
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
          SECTIONS SERVICES
          ============================================ */}
      <Evenement />
      <VIP />
      <Audiovisuel />
      
      {/* ============================================
          CTA FINAL - Minimaliste et élégant
          ============================================ */}
      <section className="relative w-full bg-gradient-to-b from-gray-950 to-black py-24 px-6" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto text-center space-y-10" suppressHydrationWarning>
          
          {/* Titre principal */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-wide leading-relaxed">
            L&apos;excellence automobile
            <br />
            à votre service
          </h2>

          {/* Texte subtil avec SEO */}
          <p className="text-gray-500 text-sm md:text-base font-light max-w-xl mx-auto">
            Paris · Île-de-France · Service 24/7
          </p>

          {/* Bouton CTA élégant */}
          <div className="pt-6">
            <Link href="/nos-packs">
              <button 
                className="group relative inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-[#5f6364]/50 rounded-2xl px-10 py-5 text-base md:text-lg text-white font-light transition-all duration-500 overflow-hidden"
                aria-label="Découvrir nos packs de conciergerie automobile"
              >
                {/* Effet de brillance au hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="relative">Découvrir nos packs</span>
                
                <svg 
                  className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>

        </div>
      </section>
      
    </>
  );
}