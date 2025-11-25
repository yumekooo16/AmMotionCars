 'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ServicePremium from "@/components/Acceuil/ServicePremium";
import Evenement from "@/components/Acceuil/Evenement";
import FlottePrestige from "@/components/Acceuil/FlottePrestige";
import Carousel from "@/components/Acceuil/Carousel"

export default function Page() {
  return (
    <>
      {/* Section Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image using Next/Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/ChatGPT Image 21 nov. 2025, 13_18_34.png"
            alt="RS6 AM Motion"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-wide mb-4">
              Élégance, Prestige et Confort
            </h1>
            <p className="text-base md:text-2xl mt-4 mb-6">À chaque trajet</p>
            <Link href="/services">
              <button className="inline-block bg-[#5f6364] text-gray-900 font-semibold rounded-xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base transition" aria-label="Découvrir nos services">
                Découvrir nos services →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Partenaire de Confiance */}
      <section className="relative w-full bg-black text-white flex flex-col justify-center items-center py-10 px-4 md:px-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-12">
            Votre partenaire <span className="text-[#5f6364]">automobile</span>
            <br />
            de confiance.
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-medium">Adaptabilité</h3>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-medium">Disponibilité 24/7</h3>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-medium">Efficacité</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections supplémentaires */}
      <ServicePremium />
      <Evenement />
      <FlottePrestige />
      <Carousel />

      <section className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-center mb-4">
            Questions <span className="text-white">Fréquentes</span>
          </h2>
          <p className="text-center text-gray-400 text-base md:text-lg mb-16">
            Tout ce que vous devez savoir sur nos services
          </p>

          <div className="space-y-6">
            <FAQItem 
              question="Quels types de services propose AM Motion Cars ?"
              answer="

AM Motion Cars offre des transferts haut de gamme pour mariages, événements privés, clients VIP et entreprises.
Chaque prestation est pensée sur mesure pour garantir élégance, confort et discrétion."
            />
            <FAQItem 
              question="Comment réserver ?"
                answer="Réservation simple via notre formulaire en ligne, email ou Instagram.
Un conseiller vous recontacte rapidement pour valider les détails."
            />

            <FAQItem 
              question="Faites-vous des mariages ?"
              answer="Oui, nos packs Mariage & Événements incluent transferts des mariés, navettes invités et shootings photo.
Un service sur mesure, élégant et discret."
            />
            
            <FAQItem 
              question="Combien de temps à l’avance faut-il réserver ?"
              answer="Idéalement 7 à 10 jours avant l’événement.
Les demandes urgentes sont possibles selon disponibilité."
            />
            
            <FAQItem 
              question="Quels types de véhicules proposez-vous ?"
              answer="Notre flotte comprend des berlines de luxe, des SUV premium et des véhicules haut de gamme pour répondre à tous vos besoins. Tous nos véhicules sont récents, entretenus régulièrement et équipés du confort moderne."
            />
            
            <FAQItem 
              question="Les chauffeurs sont-ils professionnels ?"
              answer="Absolument. Tous nos chauffeurs sont des professionnels expérimentés, licenciés et formés. Ils connaissent parfaitement la région et s'engagent à vous offrir un service irréprochable."
            />
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Vous avez une autre question ?</p>
            <button className="bg-white -400  -500 text-gray-900 font-semibold rounded-xl px-8 py-4 text-lg transition mb-0">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>
      
    </>
  );
}


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
  <div className="mb-0 border border-gray-800 rounded-lg overflow-hidden bg-black bg-opacity-50 backdrop-blur-sm transition-all hover:border-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left transition-colors hover:bg-gray-700 hover:bg-opacity-30"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium pr-4 md:pr-8">{question}</span>
        <svg
          className={`w-6 h-6 text-white -400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 md:p-6 pt-0 text-gray-300 leading-relaxed text-sm md:text-base">
          {answer}
        </div>
      </div>
    </div>

  );
}
