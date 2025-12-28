'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEvenementsData } from "./client-provider";

// ✅ Lazy loading du composant véhicules
const VehiculesEvenements = dynamic(() => import("@/components/evenements/evenement.js"), {
  loading: () => (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f6364]"></div>
    </div>
  ),
  ssr: false
});

export default function PacksEvenements() {
  const { flyerUrl, loading } = useEvenementsData();

  return (
    <>
      {/* ============================================
          SECTION HERO - Full Screen avec Background
          ============================================ */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/interieur_g43.webp"
            alt="Intérieur véhicule de luxe Mercedes pour conciergerie automobile Paris"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-center text-white">
          <div className="max-w-3xl space-y-6">
            {/* H1 - SEO optimisé */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-wide">
              Événements & Mariages
            </h1>

            {/* Sous-titre avec séparateur premium */}
            <p className="text-lg md:text-2xl lg:text-3xl font-light text-gray-200">
              Conciergerie automobile · Paris
            </p>

            {/* CTA principal */}
            <p className="text-base md:text-xl text-gray-300 font-light pt-4">
              Sélectionnez votre véhicule premium
            </p>
          </div>
        </div>

        {/* Scroll indicator (optionnel) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-white opacity-50" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ============================================
          SECTION SEO DISCRÈTE
          ============================================ */}
     <section className="relative w-full bg-black py-12 px-6">
  <div className="max-w-4xl mx-auto">
    <p
      className="sr-only"
      aria-hidden="true"
      suppressHydrationWarning
    >
      Notre conciergerie automobile propose des véhicules premium pour vos événements à Paris et en Île-de-France. 
      Mariages, événements d'entreprise, réceptions de prestige : découvrez notre flotte de luxe 
      Rolls Royce et Mercedes avec chauffeurs professionnels.
    </p>
  </div>
</section>

      {/* ============================================
          SECTION AVANTAGES (Optionnel)
          ============================================ */}
      <section className="relative w-full bg-gradient-to-b from-black to-gray-950 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light text-white text-center mb-12">
            Votre événement, notre <span className="text-[#5f6364]">excellence</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Avantage 1 */}
            <div className="text-center space-y-3">
              <div className="inline-block p-4 bg-white/5 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#5f6364]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium">Prestations sur mesure</h3>
              <p className="text-gray-400 text-sm">Chaque événement est unique, nos services aussi</p>
            </div>

            {/* Avantage 2 */}
            <div className="text-center space-y-3">
              <div className="inline-block p-4 bg-white/5 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#5f6364]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium">Disponibilité 24/7</h3>
              <p className="text-gray-400 text-sm">À votre service à tout moment</p>
            </div>

            {/* Avantage 3 */}
            <div className="text-center space-y-3">
              <div className="inline-block p-4 bg-white/5 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#5f6364]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium">Excellence garantie</h3>
              <p className="text-gray-400 text-sm">Chauffeurs professionnels, véhicules impeccables</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION VÉHICULES DISPONIBLES
          ============================================ */}
      <section className="relative w-full bg-gray-950 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Titre section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
              Notre flotte <span className="text-[#5f6364]">premium</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Sélectionnez le véhicule parfait pour votre événement
            </p>
          </div>

          {/* Composant dynamique véhicules */}
          <VehiculesEvenements />
        </div>
      </section>

      {/* ============================================
          SECTION CTA FINAL
          ============================================ */}
      <section className="relative w-full bg-gradient-to-b from-gray-950 to-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Titre CTA */}
          <h2 className="text-3xl md:text-5xl font-light text-white">
            Prêt à réserver votre <span className="text-[#5f6364]">expérience premium</span> ?
          </h2>

          {/* Texte accompagnement */}
          <p className="text-gray-400 text-base md:text-xl font-light max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour organiser votre événement à Paris et en Île-de-France
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/contact">
              <button className="bg-[#5f6364] hover:bg-gray-400 text-white font-semibold rounded-xl px-8 py-4 text-base md:text-lg transition-all duration-300 transform hover:scale-105">
                Demander un devis
              </button>
            </Link>

            <Link href="/services">
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl px-8 py-4 text-base md:text-lg border border-white/20 transition-all duration-300">
                Découvrir nos services
              </button>
            </Link>
          </div>

          {/* Info contact rapide */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm md:text-base">
              Besoin d&apos;aide ? Contactez-nous au{" "}
              <a href="tel:+33775775389" className="text-[#5f6364] hover:text-gray-400 transition-colors">
                07 75 77 53 89
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}