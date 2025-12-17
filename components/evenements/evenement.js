'use client';

import React, { useRef, useEffect, useState, useMemo, useCallback, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ModalReservation = dynamic(() => import("./reservations.js"), { 
  ssr: false,
  loading: () => null 
});

// ✅ Composant mémorisé pour les cartes de véhicules
const VehiculeCard = memo(({ vehicule, onClick }) => {
  if (!vehicule.image_url || typeof vehicule.image_url !== 'string') {
    return null;
  }

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
        quality={85}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    </div>
  );
});

VehiculeCard.displayName = 'VehiculeCard';

// ✅ Composant mémorisé pour les flyers
const FlyerImage = memo(({ flyerUrl, marqueName, isVisible }) => {
  if (!flyerUrl) return null;

  return (
    <div
      className={`
        w-full max-w-[350px] mx-auto mb-8 rounded-xl overflow-hidden shadow-md
        aspect-[4/3] 
        transform transition-transform duration-300 hover:scale-105
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        transition: 'opacity 0.7s, transform 0.7s',
      }}
    >
      <Image
        src={flyerUrl}
        alt={`Tarif ${marqueName}`}
        width={500}
        height={375}
        style={{ width: '100%', height: 'auto' }}
        loading="lazy"
        quality={85}
      />
    </div>
  );
});

FlyerImage.displayName = 'FlyerImage';

export default function Vehicule() {
  const router = useRouter();
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicule, setSelectedVehicule] = useState(null);
  const [vehiculesData, setVehiculesData] = useState({});
  const [tarifImages, setTarifImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const marques = useMemo(() => [
    { nom: "Rolls Royce", key: "rolls royce" },
    { nom: "Mercedes", key: "mercedes" },
  ], []);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        // ✅ Ajout d'un timeout pour éviter les requêtes qui traînent
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 secondes max

        const response = await fetch('/api/nos-packs/get-all', {
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        clearTimeout(timeoutId);

        // ✅ Meilleure gestion des erreurs HTTP
        if (!response.ok) {
          const errorText = await response.text().catch(() => 'Erreur inconnue');
          throw new Error(`Erreur HTTP ${response.status}: ${errorText}`);
        }

        // ✅ Validation du JSON avant parsing
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error(`Type de contenu invalide: ${contentType}`);
        }

        const data = await response.json();

        // ✅ Validation de la structure de la réponse
        if (!data) {
          throw new Error('Réponse vide du serveur');
        }

        if (data.success) {
          // ✅ Traitement des tarifs avec validation
          if (data.tarifs && typeof data.tarifs === 'object') {
            setTarifImages(data.tarifs);
          }

          // ✅ Traitement des véhicules avec validation
          if (data.vehicules && Array.isArray(data.vehicules)) {
            const grouped = data.vehicules.reduce((acc, vehicule) => {
              // Validation de chaque véhicule
              if (!vehicule.marque || !vehicule.nom) {
                console.warn('Véhicule invalide ignoré:', vehicule);
                return acc;
              }

              const marque = vehicule.marque.toLowerCase();
              if (!acc[marque]) acc[marque] = [];
              acc[marque].push(vehicule);
              return acc;
            }, {});
            
            setVehiculesData(grouped);
          }
        } else {
          // ✅ Gestion du cas où success = false
          throw new Error(data.error || 'Échec du chargement des données');
        }

      } catch (err) {
        // ✅ Meilleure gestion des différents types d'erreurs
        let errorMessage = 'Erreur lors du chargement des données';

        if (err.name === 'AbortError') {
          errorMessage = 'La requête a pris trop de temps (timeout)';
        } else if (err.message.includes('fetch')) {
          errorMessage = 'Impossible de contacter le serveur';
        } else if (err.message.includes('JSON')) {
          errorMessage = 'Données reçues invalides';
        } else if (err.message) {
          errorMessage = err.message;
        }

        console.error('❌ Erreur chargement données:', {
          message: errorMessage,
          error: err,
          stack: err.stack,
          name: err.name,
          type: typeof err
        });

        setError(errorMessage);
        
        // ✅ Données par défaut en cas d'erreur
        setVehiculesData({});
        setTarifImages({});

      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // ✅ Observer optimisé avec Set au lieu de Array
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        setVisibleSections(prev => {
          const newSet = new Set(prev);
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id) {
              newSet.add(entry.target.id);
            }
          });
          return newSet;
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [vehiculesData]);

  const openReservation = useCallback((vehiculeName) => {
    setSelectedVehicule(vehiculeName);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleRetourTarifs = useCallback(() => {
    router.push('/nos-packs');
  }, [router]);

  // ✅ Rendu de section optimisé
  const renderSection = useCallback((marque, index) => {
    const vehicules = vehiculesData[marque.key] || [];
    const flyerUrl = tarifImages[`flyer_url_${marque.key}`];
    
    if (vehicules.length === 0) return null;

    const isVisible = visibleSections.has(marque.nom.toLowerCase());

    return (
      <div
        key={marque.key}
        id={marque.nom.toLowerCase()}
        ref={el => (sectionRefs.current[index] = el)}
        className="scroll-mt-20 mb-12"
      >
        <span className="text-2xl font-semibold italic text-[#5f6364] block mt-12 mb-8">
          {marque.nom}
        </span>

        <FlyerImage 
          flyerUrl={flyerUrl} 
          marqueName={marque.nom} 
          isVisible={isVisible} 
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'opacity 0.7s, transform 0.7s',
          }}
        >
          {vehicules.map((vehicule) => (
            <VehiculeCard
              key={vehicule.id}
              vehicule={vehicule}
              onClick={() => openReservation(vehicule.nom)}
            />
          ))}
        </div>
      </div>
    );
  }, [vehiculesData, tarifImages, visibleSections, openReservation]);

  // ✅ État de chargement
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Chargement des véhicules...</p>
        </div>
      </div>
    );
  }

  // ✅ Affichage d'erreur avec option de réessayer
  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="text-center max-w-md bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h3 className="text-white text-xl font-semibold mb-2">Erreur de chargement</h3>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mb-12">
      {/* Bouton de retour vers les tarifs */}
      <div className="w-full px-4 mt-10 flex justify-center">
        <button
          onClick={handleRetourTarifs}
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

      {marques.map(renderSection)}

      {Object.keys(vehiculesData).length === 0 && !loading && !error && (
        <div className="text-center py-12">
          <p className="text-white text-lg">Aucun véhicule disponible pour le moment.</p>
        </div>
      )}

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