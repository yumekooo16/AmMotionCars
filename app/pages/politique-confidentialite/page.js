'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/servicesauditglc.jpg"
            alt="Politique de confidentialité AM Motion"
            fill
            className="object-cover object-center brightness-[0.35]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.06em] mb-4">
            POLITIQUE DE CONFIDENTIALITÉ
          </h1>
          <div className="w-24 h-[1px] bg-white/40 mt-6"></div>
        </div>
      </section>

      {/* Contenu */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32 text-white">
        
        {/* Introduction */}
        <div className="mb-20 text-center">
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            La protection de vos données personnelles est une priorité pour Am Motion Cars.
            Cette politique explique comment nous collectons, utilisons et protégeons vos informations
            lorsque vous utilisez notre site internet.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          
          {/* 1. Responsable du traitement */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              1. Responsable du traitement des données
            </h2>
            <div className="space-y-3 text-gray-400 font-light leading-relaxed">
              <p>
                Le responsable du traitement des données est <span className="text-white">Am Motion Cars</span>,
                société spécialisée dans le transport privé avec chauffeur (VTC), dont le siège social est situé à
                <span className="text-white"> 58-60 Avenue de la Grande Armée, 75017 Paris</span>.
              </p>
              <p>
                Vous pouvez nous contacter par email à{" "}
                <a 
                  href="mailto:contact@ammotioncars.fr" 
                  className="text-white hover:text-gray-300 transition-colors border-b border-white/30 hover:border-gray-300"
                >
                  contact@ammotioncars.fr
                </a>{" "}
                ou par téléphone au <span className="text-white">+33 7 75 77 53 89</span>.
              </p>
            </div>
          </article>

          {/* 2. Données collectées */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              2. Données collectées
            </h2>
            <div className="space-y-4 text-gray-400 font-light leading-relaxed">
              <p>
                Nous collectons uniquement les données nécessaires à la réservation et à la gestion de nos services :
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Nom et prénom</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Adresse email</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Numéro de téléphone</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Adresse de prise en charge et de destination</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Informations liées à la prestation demandée</span></li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-light text-white mb-3">Données analytiques</h3>
                <p>
                  Nous utilisons des outils d’analyse anonymisés (tels que Google Analytics ou Vercel Analytics)
                  pour comprendre la navigation sur le site et améliorer l’expérience utilisateur.
                  Aucune donnée personnelle identifiable n’est collectée à cette fin.
                </p>
              </div>
            </div>
          </article>

          {/* 3. Finalité */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">3. Finalité du traitement</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Les données collectées servent uniquement à répondre à vos demandes, gérer vos réservations,
              vous contacter pour organiser votre trajet, et assurer le bon déroulement du service.
              Vos données ne sont jamais revendues à des tiers.
            </p>
          </article>

          {/* 4. Hébergement */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              4. Hébergement du site
            </h2>
            <div className="space-y-3 text-gray-400 font-light leading-relaxed">
              <p>Site internet : <span className="text-white">www.ammotioncars.fr</span></p>
              <p>Hébergeur : <span className="text-white">Vercel Inc.</span></p>
              <p>Adresse : <span className="text-white">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</span></p>
              <p>
                L’hébergement est assuré par Vercel, garantissant une haute disponibilité et une sécurité renforcée des données.
              </p>
            </div>
          </article>

          {/* 5. Sécurité */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">5. Sécurité des données</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Vos données sont stockées sur des serveurs sécurisés. Am Motion Cars met en place toutes
              les mesures nécessaires pour protéger vos informations contre tout accès non autorisé,
              modification ou destruction.
            </p>
          </article>

          {/* 6. Cookies */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">6. Cookies</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Notre site utilise des cookies uniquement à des fins techniques et statistiques.
              Vous pouvez configurer votre navigateur pour les refuser. Cela n’empêche pas la navigation,
              mais certaines fonctionnalités pourraient être limitées.
            </p>
          </article>

          {/* 7. Contact */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">7. Nous contacter</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Pour toute question ou demande concernant vos données personnelles :
            </p>
            <ul className="space-y-2 ml-6 text-gray-400 font-light">
              <li><span className="text-white mr-3">•</span> Par email : <a href="mailto:contact@ammotioncars.fr" className="text-white hover:text-gray-300 border-b border-white/30 hover:border-gray-300">contact@ammotioncars.fr</a></li>
              <li><span className="text-white mr-3">•</span> Par téléphone : +33 7 75 77 53 89</li>
              <li><span className="text-white mr-3">•</span> Par courrier : 8 Rue du Capitaine Jean Croisa, 13009 Marseille, France</li>
            </ul>
          </article>

        </div>

        {/* Footer navigation */}
        <div className="mt-32 pt-12 border-t border-gray-800 flex justify-between items-center">
          <Link 
            href="/mentions-legales" 
            className="text-white hover:text-gray-400 transition-colors font-light tracking-wide"
          >
            ← Mentions légales
          </Link>
          <Link 
            href="/" 
            className="text-white hover:text-gray-400 transition-colors font-light tracking-wide"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>

      {/* Dernière mise à jour */}
      <section className="text-center pb-20 px-6">
        <p className="text-gray-500 text-sm font-light">
          Dernière mise à jour : Novembre 2025
        </p>
      </section>
    </div>
  );
}
