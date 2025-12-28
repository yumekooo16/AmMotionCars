'use client'

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// ✅ Lazy loading des composants lourds
const ServicePremium = dynamic(() => import("@/components/Acceuil/ServicePremium"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: true
});

const Evenement = dynamic(() => import("@/components/Acceuil/Evenement"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: true
});

const FlottePrestige = dynamic(() => import("@/components/Acceuil/FlottePrestige"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: true
});

const Carousel = dynamic(() => import("@/components/Acceuil/Carousel"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: true
});

export default function Page() {
  return (
    <>
      {/* Section Hero - OPTIMISÉE SEO */}
      <section className="relative w-full h-screen overflow-hidden" suppressHydrationWarning>
        {/* Background image using Next/Image */}
        <div className="absolute inset-0" suppressHydrationWarning>
          <Image
            src="/image/audiRS6.webp"
            alt="Conciergerie automobile de luxe Paris - AM Motion Cars"
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
              Conciergerie automobile à Paris
            </h1>
            <p className="text-base md:text-xl lg:text-2xl mt-4 mb-6 leading-relaxed">
                AM Motion Cars · Transferts privés · Chauffeurs · 24/7
            </p>
            <Link href="/services">
              <button className="inline-block bg-[#5f6364] text-gray-900 font-semibold rounded-xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base transition" aria-label="Découvrir nos services de conciergerie automobile à Paris">
                Découvrir nos services →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Partenaire de Confiance - OPTIMISÉE SEO */}
      <section className="relative w-full bg-black text-white flex flex-col justify-center items-center py-10 px-4 md:px-8" suppressHydrationWarning>
        <div className="max-w-4xl text-center" suppressHydrationWarning>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-12">
            Votre conciergerie <br /><span className="text-[#5f6364]">automobile premium</span>
            <br />
            à Paris et en Île-de-France
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto" suppressHydrationWarning>
            <div className="flex items-start gap-4" suppressHydrationWarning>
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-medium">Adaptabilité</h3>
              </div>
            </div>

            <div className="flex items-start gap-4" suppressHydrationWarning>
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl md:text-2xl font-medium">Disponibilité 24/7</h3>
              </div>
            </div>

            <div className="flex items-start gap-4" suppressHydrationWarning>
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

      {/* Section SEO - Conciergerie Automobile Paris - NOUVEAU BLOC */}
      <section className="relative w-full bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24 px-4 md:px-8" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto" suppressHydrationWarning>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8 text-center">
            Votre conciergerie automobile <br /><span className="text-[#5f6364]">à Paris</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed" suppressHydrationWarning>
            <p>
              AM Motion Cars est une <strong>conciergerie automobile de luxe</strong> basée à Paris, 
              spécialisée dans les transferts premium et la location de véhicules haut de gamme avec chauffeur. 
              Nous accompagnons une clientèle VIP, des entreprises et des particuliers exigeants pour leurs 
              déplacements en Île-de-France et au-delà.
            </p>
            
            <p>
              Notre service de <strong>conciergerie automobile à Paris</strong> se distingue par sa disponibilité 
              24/7, sa flotte de véhicules d'exception et l'expertise de nos chauffeurs professionnels. 
              Que ce soit pour un événement d'entreprise, un mariage, un transfert aéroport ou une mise à 
              disposition longue durée, nous personnalisons chaque prestation selon vos besoins.
            </p>
            
            <div className="pt-8 text-center">
              <Link href="/services">
                <button className="bg-[#5f6364] text-gray-900 font-semibold rounded-xl px-8 py-4 text-base md:text-lg transition hover:bg-gray-400">
                  Découvrir nos services premium
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections supplémentaires */}
      <ServicePremium />
      <Evenement />
      <FlottePrestige />
      <Carousel />

      {/* Section FAQ - OPTIMISÉE SEO */}
      <section className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto" suppressHydrationWarning>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-center mb-4">
            Questions fréquentes sur notre <span className="text-[#5f6364]">conciergerie automobile</span>
          </h2>
          <p className="text-center text-gray-400 text-base md:text-lg mb-16">
            Tout savoir sur nos services premium à Paris et en Île-de-France
          </p>

          <div className="space-y-6" suppressHydrationWarning>
            <FAQItem 
              question="Où se situe votre conciergerie automobile ?"
              answer="AM Motion Cars est une conciergerie automobile basée à Paris, intervenant dans toute l'Île-de-France. Nous assurons des transferts premium vers les aéroports parisiens (CDG, Orly, Le Bourget), les gares TGV et tous lieux prestigieux de la capitale et sa région. Notre disponibilité 24/7 vous garantit un service sur mesure à tout moment."
            />
            
            <FAQItem 
              question="Quels services de conciergerie automobile proposez-vous à Paris ?"
              answer="AM Motion Cars propose une gamme complète de services haut de gamme : transferts VIP avec chauffeur privé, location de véhicules de luxe, mise à disposition pour événements d'entreprise et mariages, navettes aéroport Paris CDG/Orly, et conciergerie automobile personnalisée 24/7. Chaque prestation est pensée pour offrir élégance, confort et discrétion."
            />

            <FAQItem 
              question="Faites-vous des mariages ?"
              answer="Oui, nos packs Mariage & Événements incluent transferts des mariés, navettes invités et shootings photo à Paris et en Île-de-France. Un service sur mesure, élégant et discret, orchestré par notre conciergerie automobile de luxe."
            />
            
            <FAQItem 
              question="Combien de temps à l'avance faut-il réserver ?"
              answer="Idéalement 7 à 10 jours avant l'événement pour garantir la disponibilité de nos véhicules premium. Les demandes urgentes sont possibles selon disponibilité. Notre conciergerie automobile à Paris reste réactive pour répondre à vos besoins, même de dernière minute."
            />
            
            <FAQItem 
              question="Quels types de véhicules proposez-vous ?"
              answer="Notre flotte comprend des berlines de luxe, des SUV premium et des véhicules haut de gamme pour répondre à tous vos besoins. Tous nos véhicules sont récents, entretenus régulièrement et équipés du confort moderne : Mercedes Classe S, Mercedes GT 43 AMG, Audi RS6 et autres modèles d'exception."
            />
            
            <FAQItem 
              question="Les chauffeurs sont-ils professionnels ?"
              answer="Absolument. Tous nos chauffeurs sont des professionnels expérimentés, formés aux standards de la conciergerie de luxe. Ils connaissent parfaitement Paris et l'Île-de-France et s'engagent à vous offrir un service irréprochable en toute discrétion."
            />

            <FAQItem 
              question="Intervenez-vous uniquement à Paris ?"
              answer="Basés à Paris, nous intervenons dans toute l'Île-de-France et au-delà selon vos besoins. Nos chauffeurs connaissent parfaitement la région parisienne et sont régulièrement sollicités pour des transferts longue distance (province, destinations européennes). Notre conciergerie automobile s'adapte à vos projets, où qu'ils se trouvent."
            />
          </div>

          <div className="text-center mt-16" suppressHydrationWarning>
            <p className="text-gray-400 mb-6">Vous avez une autre question ?</p>
            <Link href="/contact">
              <button className="bg-white text-gray-900 font-semibold rounded-xl px-8 py-4 text-lg transition mb-0 hover:bg-gray-200">
                Contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
}


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-0 border border-gray-800 rounded-lg overflow-hidden bg-black bg-opacity-50 backdrop-blur-sm transition-all hover:border-white" suppressHydrationWarning>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left transition-colors hover:bg-gray-700 hover:bg-opacity-30"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium pr-4 md:pr-8">{question}</span>
        <svg
          className={`w-6 h-6 text-white flex-shrink-0 transition-transform duration-300 ${
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
        suppressHydrationWarning
      >
        <div className="p-4 md:p-6 pt-0 text-gray-300 leading-relaxed text-sm md:text-base" suppressHydrationWarning>
          {answer}
        </div>
      </div>
    </div>
  );
}