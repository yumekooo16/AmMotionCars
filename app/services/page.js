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
            alt="Transfert aéroport Paris CDG — Chauffeur privé conciergerie automobile"
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
              Services de conciergerie automobile à Paris
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
          SECTION FINALE UNIFIÉE - SEO + CTA
          ============================================ */}
      <section className="relative w-full bg-black py-32 px-6 overflow-hidden" suppressHydrationWarning>
        {/* Fond avec effets de lumière subtils */}
        <div className="absolute inset-0" suppressHydrationWarning>
          {/* Gradient radial pour effet de lumière central */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(ellipse at center, rgba(39, 39, 42, 0.5) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%)'
            }}
          />
          
          {/* Effet de grille très subtil */}
          <div className="absolute inset-0 opacity-[0.03]" suppressHydrationWarning>
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}
            />
          </div>
          
          {/* Lignes de lumière subtiles horizontales */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto z-10" suppressHydrationWarning>
          
          {/* En-tête de section premium */}
          <div className="text-center mb-20 space-y-8" suppressHydrationWarning>
            <div className="flex items-center justify-center gap-4 mb-6" suppressHydrationWarning>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-zinc-700/50" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white">
              L&apos;excellence automobile
              <br />
              <span className="text-[#5f6364]">à votre service</span>
            </h2>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-zinc-800/30 to-transparent mx-auto" />
          </div>

          {/* Texte SEO dans un conteneur avec bordure subtile */}
          <div className="max-w-4xl mx-auto mb-20" suppressHydrationWarning>
            <div className="relative p-8 md:p-12 border border-zinc-900/50 bg-zinc-950/20 backdrop-blur-sm rounded-lg" suppressHydrationWarning>
              {/* Effet de lumière sur les bords */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-zinc-900/0 via-zinc-900/0 to-zinc-800/10 pointer-events-none" />
              
              <div className="relative space-y-6 text-gray-300 text-base md:text-lg leading-relaxed" suppressHydrationWarning>
                <p>
                  AM Motion Cars propose une gamme complète de services automobiles haut de 
                  gamme à Paris et en Île-de-France. Notre conciergerie automobile s&apos;adresse 
                  aux clients exigeants recherchant prestiges, discrétion et expertise.
                </p>
                
                <p>
                  Parmi nos services : location de voitures de luxe avec chauffeur privé, 
                  transferts VIP vers les aéroports parisiens (CDG, Orly, Le Bourget), mises 
                  à disposition pour événements, mariages et séminaires corporate. Chaque 
                  prestation est personnalisée et orchestrée avec attention.
                </p>
                
                <p>
                  Nos chauffeurs professionnels sont formés aux standards du luxe et connaissent 
                  parfaitement les routes de Paris et sa région. Nos véhicules — Mercedes, Audi, 
                  BMW — sont régulièrement entretenus et inspectés pour garantir sécurité et 
                  confort. Disponibles 24h/24, 7j/7, nous assurons la réussite de chaque 
                  mission.
                </p>
              </div>
            </div>
          </div>

          {/* Séparateur élégant */}
          <div className="flex items-center justify-center gap-6 mb-12" suppressHydrationWarning>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-800/40 to-transparent" />
            <span className="text-xs tracking-[0.3em] uppercase text-zinc-400 font-light">Paris · Île-de-France · Service 24/7</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-800/40 to-transparent" />
          </div>

          {/* CTA élégant et harmonisé */}
          <div className="text-center" suppressHydrationWarning>
            <Link href="/nos-packs">
              <button 
                className="group relative inline-flex items-center gap-3 bg-white text-black px-12 py-6 text-base md:text-lg font-light tracking-wide transition-all duration-500 overflow-hidden hover:bg-zinc-100 hover:shadow-lg hover:shadow-white/10"
                aria-label="Découvrir nos packs de conciergerie automobile"
              >
                {/* Effet de brillance au hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
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