"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Apropos() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/a35xrs3.webp"
            alt="Équipe AM Motion Cars — Chauffeurs professionnels conciergerie automobile Paris"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </div>  

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide">
            À propos de AM Motion Cars
          </h1>
          <p className="text-base md:text-xl mt-4 md:mt-8 font-light max-w-3xl opacity-90">
            L&apos;excellence automobile au service de vos moments d&apos;exception
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wide">
            L&apos;essence d&apos;AM Motion Cars
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
            Fondée à Paris, AM Motion Cars est une conciergerie automobile de luxe 
            spécialisée dans les services haut de gamme. Depuis nos débuts, nous avons 
            bâti notre réputation sur trois piliers : excellence, discrétion, élégance.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light mt-6">
            Notre expertise repose sur une flotte de véhicules de prestige régulièrement 
            renouvelée (Mercedes, Audi, BMW) et une équipe de chauffeurs professionnels 
            formés aux standards du luxe. Chaque prestation est pensée pour dépasser les 
            attentes de nos clients les plus exigeants.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light mt-6">
            Implantée au cœur de Paris et rayonnant sur toute l&apos;Île-de-France, nous 
            accompagnons particuliers et entreprises dans leurs déplacements d&apos;exception : 
            transferts VIP, mariages, séminaires, missions confidentielles. Notre ambition 
            demeure constante : redéfinir les standards de la conciergerie automobile.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION SEO : HISTOIRE & POSITIONNEMENT - VERSION ESTHÉTIQUE
          ============================================ */}
      <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white py-40 px-6 overflow-hidden">
        {/* Effet de grille subtile en arrière-plan */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* En-tête de section premium */}
          <div className="text-center mb-24 space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              Une Histoire Née de l&apos;Excellence
            </h2>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto" />
          </div>

          {/* Grid layout élégant pour le contenu */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Colonne gauche */}
            <div className="space-y-10">
              
              {/* Block 1 */}
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-zinc-700 to-transparent group-hover:from-zinc-500 transition-colors duration-500" />
                  <h3 className="text-xl font-light tracking-wide text-white/90">
                    Origines
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light pl-8">
                  Fondée à <strong className="text-gray-200 font-normal">Paris</strong>, AM Motion Cars est née d&apos;une vision claire : offrir une <strong className="text-gray-200 font-normal">conciergerie automobile de luxe</strong> où chaque détail compte. Depuis nos débuts, nous avons construit notre réputation sur trois piliers fondamentaux : l&apos;élégance du service, la discrétion absolue et l&apos;excellence opérationnelle.
                </p>
              </div>

              {/* Block 2 */}
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-zinc-700 to-transparent group-hover:from-zinc-500 transition-colors duration-500" />
                  <h3 className="text-xl font-light tracking-wide text-white/90">
                    Positionnement
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light pl-8">
                  Notre approche de la <strong className="text-gray-200 font-normal">location de voitures de prestige</strong> dépasse la simple mise à disposition de véhicules. Nous créons des expériences où le trajet devient un prolongement naturel du standing de nos clients. Chaque prestation est pensée comme un moment unique, orchestré avec la précision d&apos;une manufacture horlogère.
                </p>
              </div>

              {/* Block 3 */}
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-zinc-700 to-transparent group-hover:from-zinc-500 transition-colors duration-500" />
                  <h3 className="text-xl font-light tracking-wide text-white/90">
                    Territoire
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light pl-8">
                  Implantée au cœur de <strong className="text-gray-200 font-normal">Paris</strong> et rayonnant sur toute l&apos;<strong className="text-gray-200 font-normal">Île-de-France</strong>, notre conciergerie automobile accompagne une clientèle internationale et locale dans leurs déplacements d&apos;exception. Des transferts VIP aux événements corporate, chaque mission reflète notre engagement vers la perfection.
                </p>
              </div>

            </div>

            {/* Colonne droite */}
            <div className="space-y-10">
              
              {/* Block 4 */}
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-zinc-700 to-transparent group-hover:from-zinc-500 transition-colors duration-500" />
                  <h3 className="text-xl font-light tracking-wide text-white/90">
                    Savoir-faire
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light pl-8">
                  Notre flotte de <strong className="text-gray-200 font-normal">véhicules de prestige</strong> est sélectionnée selon des critères stricts : esthétique irréprochable, performance mécanique et confort absolu. Chaque voiture est préparée avec un soin méticuleux avant chaque prestation, garantissant une <strong className="text-gray-200 font-normal">expérience haut de gamme</strong> à la hauteur des attentes les plus élevées.
                </p>
              </div>

              {/* Block 5 */}
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-zinc-700 to-transparent group-hover:from-zinc-500 transition-colors duration-500" />
                  <h3 className="text-xl font-light tracking-wide text-white/90">
                    Philosophie
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light pl-8">
                  Chez AM Motion Cars, nous croyons que le luxe véritable réside dans l&apos;invisible : l&apos;anticipation, la fluidité, la justesse du geste. Notre équipe, formée aux codes du service premium, incarne cette philosophie au quotidien. Mariages, galas, tournages, déplacements privés : nous transformons chaque demande en une réalisation sans faille.
                </p>
              </div>

              {/* Block 6 */}
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-zinc-700 to-transparent group-hover:from-zinc-500 transition-colors duration-500" />
                  <h3 className="text-xl font-light tracking-wide text-white/90">
                    Vision
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light pl-8">
                  Notre ambition demeure inchangée : redéfinir les standards de la <strong className="text-gray-200 font-normal">conciergerie automobile</strong> en France. Dans un secteur où l&apos;excellence est une exigence, nous cultivons l&apos;art de l&apos;exception. Parce que chaque client mérite une attention singulière, nous plaçons l&apos;humain au centre de chaque prestation.
                </p>
              </div>

            </div>

          </div>

          {/* Citation premium en bas de section */}
          <div className="mt-32 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-gray-300 leading-relaxed">
                L&apos;excellence n&apos;est pas un acte, mais une habitude
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-16 h-px bg-zinc-700" />
                <div className="w-16 h-px bg-zinc-700" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* En-tête */}
          <div className="text-center mb-20">
            <span className="text-xl font-light tracking-wide text-white/90">Nos Valeurs</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mt-6 mb-8" />
          </div>

          {/* Grid des valeurs */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            
            <div className="group text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-500 flex items-center justify-center">
                  <div className="text-2xl font-light text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">01</div>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-5 tracking-wide">Élégance</h3>
              <div className="w-12 h-px bg-zinc-800 mx-auto mb-5" />
              <p className="text-gray-500 text-base font-light leading-relaxed">
                Chaque détail compte, du design à la présentation
              </p>
            </div>

            <div className="group text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-500 flex items-center justify-center">
                  <div className="text-2xl font-light text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">02</div>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-5 tracking-wide">Discrétion</h3>
              <div className="w-12 h-px bg-zinc-800 mx-auto mb-5" />
              <p className="text-gray-500 text-base font-light leading-relaxed">
                Des services confidentiels et raffinés pour chaque client
              </p>
            </div>

            <div className="group text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-500 flex items-center justify-center">
                  <div className="text-2xl font-light text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">03</div>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-5 tracking-wide">Excellence</h3>
              <div className="w-12 h-px bg-zinc-800 mx-auto mb-5" />
              <p className="text-gray-500 text-base font-light leading-relaxed">
                De la préparation à l&apos;accueil, rien n&apos;est laissé au hasard
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-neutral-950 text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mt-4 mb-12" />
          
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wide">
            Notre expertise
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
            De la préparation méticuleuse des véhicules à la sélection rigoureuse des chauffeurs, 
            chaque étape reflète notre exigence de perfection. Mariages, événements, transferts VIP 
            ou collaborations corporate : nous garantissons un service fluide et irréprochable.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mt-4 mb-12" />
          
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wide">
            Notre vision
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
            Chez AM Motion Cars, nous croyons que le luxe se trouve dans l&apos;expérience, 
            pas seulement dans la voiture. Chaque déplacement devient une histoire, 
            chaque client une priorité. Notre ambition : redéfinir la mobilité haut de gamme, 
            avec passion et discrétion.
          </p>
        </div>
      </section>

      {/* Call to Action Premium */}
      <section className="relative bg-neutral-950 text-white py-32 px-6 overflow-hidden">
        {/* Effet de grille subtile */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mt-6 mb-12" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 tracking-wide">
            Découvrez l&apos;expérience AM Motion Cars
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Réservez dès maintenant votre trajet ou contactez notre équipe pour un service sur mesure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-12 py-5 bg-white text-black font-light tracking-wide overflow-hidden transition-all duration-300 hover:bg-zinc-100"
            >
              <span className="relative z-10">Nous contacter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
            <Link
              href="/services"
              className="group relative px-12 py-5 border border-zinc-700 text-white font-light tracking-wide overflow-hidden transition-all duration-300 hover:border-zinc-500"
            >
              <span className="relative z-10">Nos services</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}