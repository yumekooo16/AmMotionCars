'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MentionsLegales() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/servicesauditglc.jpg"
            alt="Mentions légales AM Motion"
            fill
            className="object-cover object-center brightness-[0.35]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.06em] mb-4">
            MENTIONS LÉGALES
          </h1>
          <div className="w-24 h-[1px] bg-white/40 mt-6"></div>
        </div>
      </section>

      {/* Contenu */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32 text-white">
        
        {/* Introduction */}
        <div className="mb-20 text-center">
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance 
            dans l'économie numérique, nous vous informons des mentions légales relatives au site.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          
          {/* Éditeur du site */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              Éditeur du site
            </h2>
            <div className="space-y-3 text-gray-400 font-light leading-relaxed">
              <p><span className="text-white">Raison sociale :</span> AM MOTION CARS</p>
              <p><span className="text-white">Forme juridique :</span> SAS (Société par actions simplifiée)</p>
              <p><span className="text-white">Siège social :</span> 58-60 Avenue de la Grande Armée, 75017 Paris</p>
              <p><span className="text-white">SIREN :</span> 988 109 518</p>
              <p><span className="text-white">SIRET (siège) :</span> 988 109 518 00015</p>
              <p><span className="text-white">Capital social :</span> 2 500,00 €</p>
              <p><span className="text-white">Email :</span> Non communiqué publiquement</p>
              <p><span className="text-white">Téléphone :</span> Non communiqué publiquement</p>
              <p>
                <span className="text-white">Activité principale :</span> Location de courte durée de voitures et véhicules légers (NAF 77.11A)
              </p>
            </div>
          </article>

          {/* Directeur de publication */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              Directeur de publication
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Alexis Carlos Alexandre Fardilha (Président). — (données dirigeant déclarées au RCS).
            </p>
          </article>

          {/* Hébergement */}
         <article className="border-l border-gray-800 pl-8">
  <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
    Hébergement
  </h2>
  <div className="space-y-3 text-gray-400 font-light leading-relaxed">
    <p><span className="text-white">Site internet :</span> www.ammotioncars.fr</p>
    <p><span className="text-white">Hébergeur :</span> Vercel Inc.</p>
    <p><span className="text-white">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
    <p>
      <span className="text-white">Site web :</span>{" "}
      <a
        href="https://vercel.com"
        target="_blank"
        className="text-white hover:text-gray-300 transition-colors"
      >
        https://vercel.com
      </a>
    </p>
  </div>
</article>
          


          {/* Propriété intellectuelle */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              Propriété intellectuelle
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit 
              d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
            </p>
          </article>

          {/* Protection des données */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              Protection des données personnelles
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Pour exercer ces droits, veuillez nous contacter à l'adresse email communiquée par la société (si disponible). Actuellement : <span className="text-white">non communiqué</span>.
            </p>
            <Link 
              href="/politique-confidentialite" 
              className="inline-block mt-4 text-white hover:text-gray-300 transition-colors border-b border-white/30 hover:border-gray-300"
            >
              Consulter notre politique de confidentialité
            </Link>
          </article>

          {/* Cookies */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              Cookies
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Le site peut être amené à vous demander l'acceptation des cookies pour des besoins 
              de statistiques et d'affichage. Vous pouvez désactiver les cookies dans 
              les paramètres de votre navigateur.
            </p>
          </article>

          {/* Crédits */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              Crédits
            </h2>
            <div className="space-y-3 text-gray-400 font-light leading-relaxed">
              <p><span className="text-white">Conception et développement :</span> Wyatt - Développeur web freelance</p>
            </div>
          </article>

        </div>

        {/* Footer navigation */}
        <div className="mt-32 pt-12 border-t border-gray-800 text-center">
          <Link 
            href="/" 
            className="inline-block text-white hover:text-gray-400 transition-colors font-light tracking-wide"
          >
            ← Retour à l'accueil
          </Link>
        </div>

      </section>

      {/* Dernière mise à jour */}
      <section className="text-center pb-20 px-6">
        <p className="text-gray-500 text-sm font-light">
          Données légales extraites du RCS / annonces légales — immatriculation : 01 juillet 2025 (annonce légale publiée 27 juin 2025). Sources publiques consultées.
        </p>
      </section>
    </div>
  );
}
