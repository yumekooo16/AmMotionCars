'use client';

import React, { useState, useCallback, memo, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ModalReservation = dynamic(() => import("./reservations"), { 
  ssr: false,
  loading: () => null 
});

// ✅ Composant carte véhicule
const VehiculeCard = memo(({ vehicule, onClick }) => {
  if (!vehicule.image_url) return null;

  return (
    <div
      className="rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={vehicule.image_url}
        alt={vehicule.nom}
        width={500}
        height={300}
        style={{ width: '100%', height: 'auto' }}
        loading="lazy"
        quality={75}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="p-4 bg-white/5 backdrop-blur">
        <h3 className="text-white font-semibold text-center">{vehicule.nom}</h3>
      </div>
    </div>
  );
});

VehiculeCard.displayName = 'VehiculeCard';

// ✅ Section de marque avec expand/collapse
const MarqueSection = memo(({ 
  marque, 
  isExpanded, 
  onToggle, 
  onLoadVehicules, 
  vehicules, 
  flyerUrl, 
  onVehiculeClick, 
  isLoading 
}) => {
  const handleExpand = useCallback(async () => {
    if (!isExpanded && vehicules.length === 0) {
      await onLoadVehicules(marque.key);
    }
    onToggle(marque.key);
  }, [isExpanded, vehicules.length, onLoadVehicules, onToggle, marque.key]);

  return (
    <div className="scroll-mt-20 mb-6">
      {/* Header cliquable */}
      <button
        onClick={handleExpand}
        className="w-full text-left flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold italic text-white group-hover:text-gray-200 transition-colors">
            {marque.nom}
          </span>
          {vehicules.length > 0 && (
            <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
              {vehicules.length} véhicule{vehicules.length > 1 ? 's' : ''}
            </span>
          )}
        </div>
        
        <svg
          className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Contenu */}
      {isExpanded && (
        <div className="mt-4 animate-slideDown">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
              {/* Flyer tarif */}
              {flyerUrl && (
                <div className="w-full max-w-[400px] mx-auto mb-8 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={flyerUrl}
                    alt={`Tarifs ${marque.nom}`}
                    width={500}
                    height={375}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    quality={80}
                  />
                </div>
              )}

              {/* Grille véhicules */}
              {vehicules.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {vehicules.map((vehicule) => (
                    <VehiculeCard
                      key={vehicule.id}
                      vehicule={vehicule}
                      onClick={() => onVehiculeClick(vehicule.nom)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400 py-8">Aucun véhicule disponible pour cette marque</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
});

MarqueSection.displayName = 'MarqueSection';

// ✅ Composant principal
export default function Vehicule() {
  const router = useRouter();
  const [expandedMarques, setExpandedMarques] = useState(new Set());
  const [vehiculesData, setVehiculesData] = useState({});
  const [tarifImages, setTarifImages] = useState({});
  const [loadingMarques, setLoadingMarques] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicule, setSelectedVehicule] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  const marques = [
    { nom: "Mercedes", key: "mercedes" },
    { nom: "Audi", key: "audi" },
    { nom: "BMW", key: "bmw" },
    { nom: "Porsche", key: "porsche" },
    { nom: "Volkswagen", key: "volkswagen" }
  ];

  // ✅ Chargement initial LÉGER
  useEffect(() => {
    async function loadTarifs() {
      try {
        const response = await fetch('/api/tarifs/get-tarifs-only');
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.tarifs) {
            setTarifImages(data.tarifs);
          }
        }
      } catch (error) {
        console.error("❌ Erreur chargement tarifs:", error);
      } finally {
        setInitialLoading(false);
      }
    }
    loadTarifs();
  }, []);

  // ✅ Chargement progressif par marque
  const loadVehiculesForMarque = useCallback(async (marqueKey) => {
    // Éviter double chargement
    if (vehiculesData[marqueKey]?.length > 0 || loadingMarques.has(marqueKey)) {
      return;
    }

    setLoadingMarques(prev => new Set(prev).add(marqueKey));

    try {
      const response = await fetch(`/api/vehicules/get-by-marque?marque=${marqueKey}`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success && data.vehicules) {
        setVehiculesData(prev => ({
          ...prev,
          [marqueKey]: data.vehicules
        }));
      }
    } catch (error) {
      console.error(`❌ Erreur chargement ${marqueKey}:`, error);
    } finally {
      setLoadingMarques(prev => {
        const newSet = new Set(prev);
        newSet.delete(marqueKey);
        return newSet;
      });
    }
  }, [vehiculesData, loadingMarques]);

  const toggleMarque = useCallback((marqueKey) => {
    setExpandedMarques(prev => {
      const newSet = new Set(prev);
      if (newSet.has(marqueKey)) {
        newSet.delete(marqueKey);
      } else {
        newSet.add(marqueKey);
      }
      return newSet;
    });
  }, []);

  const openReservation = useCallback((vehiculeName) => {
    setSelectedVehicule(vehiculeName);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  if (initialLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Chargement des tarifs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mb-12">
      {/* Bouton retour */}
      <div className="w-full px-4 mt-10 flex justify-center mb-8">
        <button
          onClick={() => router.push('/nos-packs')}
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-8 py-4 shadow-xl transition-all duration-300 group"
        >
          <svg 
            className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-lg font-semibold text-white">Retour aux packs</span>
        </button>
      </div>

      {/* Info */}
      <div className="w-full px-4 mb-8">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-white text-lg font-medium">
            ✨ Cliquez sur une marque pour découvrir nos véhicules disponibles
          </p>
        </div>
      </div>

      {/* Liste marques */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {marques.map((marque) => (
          <MarqueSection
            key={marque.key}
            marque={marque}
            isExpanded={expandedMarques.has(marque.key)}
            onToggle={toggleMarque}
            onLoadVehicules={loadVehiculesForMarque}
            vehicules={vehiculesData[marque.key] || []}
            flyerUrl={tarifImages[`flyer_url_${marque.key}`]}
            onVehiculeClick={openReservation}
            isLoading={loadingMarques.has(marque.key)}
          />
        ))}
      </div>

      {/* Modal réservation */}
      {isModalOpen && (
        <ModalReservation
          isOpen={isModalOpen}
          onClose={closeModal}
          vehicule={selectedVehicule}
        />
      )}
    </div>
  );
}