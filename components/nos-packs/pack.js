'use client';

import React, { useEffect, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Car } from "lucide-react"; // Optionnel : pour les icônes

// ✅ Nouveau composant pour les cartes de catégorie (bulles)
const CategoryCard = memo(({ title, description, icon: Icon, href, flyerUrl }) => {
  return (
    <Link href={href}>
      <div className="group relative card-premium p-8 hover:border-white/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
        {/* Icône */}
        {Icon && (
          <div className="mb-6 inline-flex p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
        )}

        {/* Titre */}
        <h3 className="text-2xl font-medium text-white mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-300 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Flyer si disponible */}
        {flyerUrl && (
          <div className="w-full lg:w-3/10 lg:max-w-[600px] mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={flyerUrl}
              alt={`Tarif ${title}`}
              width={850}
              height={580}
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
              quality={75}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 600px"
            />
          </div>
        )}

        {/* Call to action */}
        <div className="flex items-center text-white/90 font-medium group-hover:translate-x-1 transition-transform duration-300">
          <span>Voir la selection</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
});

CategoryCard.displayName = 'CategoryCard';

export default function Vehicule() {
  const [tarifImages, setTarifImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await fetch('/api/tarifs/get-all');
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.success && data.tarifs) {
          setTarifImages(data.tarifs);
        }
      } catch (error) {
        console.error("Erreur chargement données:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-4 tracking-wide">
          Choisissez votre type de location
        </h2>
        <p className="text-zinc-400 text-center mb-12 text-lg">
          Sélectionnez la catégorie qui correspond à vos besoins
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Véhicules Évènementiels - Redirige vers /evenement */}
          <CategoryCard
            title="Véhicules Évènementiels"
            description="Location de véhicules de prestige pour vos évènements spéciaux : mariages, soirées, cérémonies. Des véhicules d'exception pour des moments inoubliables."
            icon={Calendar}
            href="/evenements"
            flyerUrl={tarifImages.flyer_url_evenementiel}
          />

          {/* Carte Locations Quotidiennes - Redirige vers /tarifs */}
          <CategoryCard
            title="Locations Quotidiennes"
            description="Location à la journée, à la semaine ou au mois. Une flotte variée de véhicules premium pour vos déplacements professionnels ou personnels."
            icon={Car}
            href="/tarifs"
            flyerUrl={tarifImages.flyer_url_quotidien}
          />
        </div>
      </div>
    </div>
  );
}