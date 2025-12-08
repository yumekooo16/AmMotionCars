'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-black min-h-screen" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden" suppressHydrationWarning>
        <div className="absolute inset-0" suppressHydrationWarning>
          <Image
            src="/image/ChatGPT Image 21 nov. 2025, 13_18_34.webp"
            alt="Politique de confidentialité AM Motion"
            fill
            className="object-cover object-center brightness-[0.35]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6" suppressHydrationWarning>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.06em] mb-4">
            POLITIQUE DE CONFIDENTIALITÉ
          </h1>
          <div className="w-24 h-[1px] bg-white/40 mt-6" suppressHydrationWarning></div>
        </div>
      </section>

      {/* Contenu */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32 text-white" suppressHydrationWarning>
        
        {/* Introduction */}
        <div className="mb-20 text-center" suppressHydrationWarning>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            La protection de vos données personnelles est une priorité pour Am Motion Cars.
            Cette politique explique comment nous collectons, utilisons et protégeons vos informations
            conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16" suppressHydrationWarning>
          
          {/* 1. Responsable du traitement */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              1. Responsable du traitement des données
            </h2>
            <div className="space-y-3 text-gray-400 font-light leading-relaxed" suppressHydrationWarning>
              <p>
                Le responsable du traitement des données est <span className="text-white">Am Motion Cars</span>,
                société spécialisée dans le transport privé avec chauffeur (VTC), dont le siège social est situé à
                <span className="text-white"> 58-60 Avenue de la Grande Armée, 75017 Paris</span>.
              </p>
              <p className="mt-4">
                <strong className="text-white">Contact pour les demandes RGPD :</strong>
              </p>
              <ul className="space-y-2 ml-6 mt-2">
                <li><span className="text-white mr-3">•</span>Email : <a href="mailto:contact@ammotioncars.fr" className="text-white hover:text-gray-300 border-b border-white/30">contact@ammotioncars.fr</a></li>
                <li><span className="text-white mr-3">•</span>Téléphone : +33 7 75 77 53 89</li>
              </ul>
            </div>
          </article>

          {/* 2. Données collectées */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              2. Données personnelles collectées
            </h2>
            <div className="space-y-4 text-gray-400 font-light leading-relaxed" suppressHydrationWarning>
              <p>
                Nous collectons uniquement les données nécessaires à la réservation et à la gestion de nos services :
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Nom et prénom</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Adresse email</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Numéro de téléphone</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Dates de réservation souhaitées</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Lieu de prise en charge et destination</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Informations liées à votre demande (véhicule, service, message)</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Date et heure de votre consentement</span></li>
              </ul>
            </div>
          </article>

          {/* 3. Base légale et finalité */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              3. Base légale et finalité du traitement
            </h2>
            <div className="space-y-4 text-gray-400 font-light leading-relaxed" suppressHydrationWarning>
              <p>
                <strong className="text-white">Base légale :</strong> Votre consentement explicite, recueilli via la case à cocher lors de la soumission du formulaire, et l'exécution du contrat de prestation de service.
              </p>
              <p>
                <strong className="text-white">Finalités :</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Traiter vos demandes de réservation</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Vous contacter pour organiser votre trajet</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Assurer le bon déroulement du service</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Répondre à vos questions</span></li>
              </ul>
              <p className="mt-4 font-semibold text-white">
                Vos données ne sont jamais revendues à des tiers.
              </p>
            </div>
          </article>

          {/* 4. Durée de conservation */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              4. Durée de conservation des données
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Conformément aux recommandations de la CNIL, vos données personnelles sont conservées pendant 
              <span className="text-white font-semibold"> 3 ans </span>
              à compter de votre dernière interaction avec nos services (dernière réservation ou dernier contact). 
              Au-delà de cette période, vos données sont automatiquement supprimées ou anonymisées.
            </p>
          </article>

          {/* 5. Sécurité */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              5. Sécurité et stockage des données
            </h2>
            <div className="space-y-3 text-gray-400 font-light leading-relaxed" suppressHydrationWarning>
              <p>
                Vos données sont stockées de manière sécurisée sur la plateforme <span className="text-white">Supabase</span>, 
                qui utilise des serveurs hautement sécurisés avec chiffrement des données.
              </p>
              <p>
                Am Motion Cars met en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger 
                vos informations contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
              <p>
                <strong className="text-white">Mesures de sécurité :</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Chiffrement des données en transit (HTTPS)</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Authentification sécurisée pour l'accès aux bases de données</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Sauvegardes régulières</span></li>
                <li className="flex items-start"><span className="text-white mr-3">•</span><span>Accès limité aux données selon le principe du moindre privilège</span></li>
              </ul>
            </div>
          </article>

          {/* 6. Vos droits RGPD */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              6. Vos droits RGPD
            </h2>
            <div className="space-y-4 text-gray-400 font-light leading-relaxed" suppressHydrationWarning>
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span><strong className="text-white">Droit d'accès</strong> : obtenir une copie de vos données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span><strong className="text-white">Droit de rectification</strong> : corriger des données inexactes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span><strong className="text-white">Droit à l'effacement</strong> : supprimer vos données (« droit à l'oubli »)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span><strong className="text-white">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span><strong className="text-white">Droit d'opposition</strong> : vous opposer au traitement de vos données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span><strong className="text-white">Droit de retrait du consentement</strong> : retirer votre consentement à tout moment</span>
                </li>
              </ul>
              <div className="mt-6 bg-neutral-950 border border-gray-800 p-6 rounded-lg" suppressHydrationWarning>
                <p className="text-white font-semibold mb-3">Comment exercer vos droits ?</p>
                <p>Pour toute demande concernant vos données personnelles, contactez-nous :</p>
                <ul className="space-y-2 ml-6 mt-3">
                  <li><span className="text-white mr-3">•</span>Par email : <a href="mailto:contact@ammotioncars.fr" className="text-white hover:text-gray-300 border-b border-white/30">contact@ammotioncars.fr</a></li>
                  <li><span className="text-white mr-3">•</span>Par téléphone : +33 7 75 77 53 89</li>
                  <li><span className="text-white mr-3">•</span>Par courrier : 58-60 Avenue de la Grande Armée, 75017 Paris</li>
                </ul>
                <p className="mt-4 text-sm">
                  Nous nous engageons à répondre à votre demande dans un délai maximum d'<span className="text-white">un mois</span>.
                </p>
              </div>
            </div>
          </article>

          {/* 7. Hébergement */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              7. Hébergement du site et des données
            </h2>
            <div className="space-y-3 text-gray-400 font-light leading-relaxed" suppressHydrationWarning>
              <p><strong className="text-white">Site internet :</strong> www.ammotioncars.fr</p>
              <p><strong className="text-white">Hébergeur du site :</strong> Vercel Inc.</p>
              <p>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p className="mt-4"><strong className="text-white">Hébergeur des données :</strong> Supabase (serveurs sécurisés avec conformité RGPD)</p>
            </div>
          </article>

          {/* 8. Cookies */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">8. Cookies</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Notre site utilise des cookies uniquement à des fins techniques (fonctionnement du site) et statistiques 
              (analyse anonymisée de la fréquentation). Aucun cookie publicitaire ou de tracking n'est utilisé. 
              Vous pouvez configurer votre navigateur pour les refuser, mais certaines fonctionnalités pourraient être limitées.
            </p>
          </article>

          {/* 9. Modifications */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              9. Modifications de la politique de confidentialité
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. 
              Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </article>

          {/* 10. Réclamation */}
          <article className="border-l border-gray-800 pl-8">
            <h2 className="text-2xl font-light tracking-wide mb-6 text-white/90">
              10. Réclamation auprès de la CNIL
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation 
              auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <div className="mt-4 bg-neutral-950 border border-gray-800 p-6 rounded-lg" suppressHydrationWarning>
              <p className="text-white font-semibold mb-2">CNIL</p>
              <p>3 Place de Fontenoy, TSA 80715</p>
              <p>75334 Paris Cedex 07</p>
              <p className="mt-2">Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 border-b border-white/30">www.cnil.fr</a></p>
            </div>
          </article>

        </div>

        {/* Footer navigation */}
        <div className="mt-32 pt-12 border-t border-gray-800 flex justify-between items-center" suppressHydrationWarning>
          <Link 
            href="/pages/mentions-legales" 
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
          Dernière mise à jour : Décembre 2025
        </p>
      </section>
    </div>
  );
}