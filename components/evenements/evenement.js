'use client';

import React, { useRef, useEffect, useState, useMemo, useCallback, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ModalReservation = dynamic(() => import("./reservations.js"), { 
  ssr: false,
  loading: () => null 
});

// ✅ Composant carte véhicule simple
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
        quality={75}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="p-3 bg-white/5 backdrop-blur">
        <h3 className="text-white font-medium text-center text-sm">{vehicule.nom}</h3>
      </div>
    </div>
  );
});

VehiculeCard.displayName = 'VehiculeCard';

// ✅ Composant flyer simple
const FlyerImage = memo(({ flyerUrl, marqueName, isVisible, isMobile }) => {
  if (!flyerUrl) return null;

  return (
    <div
      className={`
        w-full mx-auto mb-8 rounded-xl overflow-hidden shadow-md
        ${isMobile ? 'max-w-[420px] md:max-w-[640px] lg:max-w-[900px]' : 'max-w-[420px] md:max-w-[640px] lg:max-w-[900px]'}
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
        width={900}
        height={675}
        style={{ width: '100%', height: 'auto' }}
        loading="lazy"
        quality={75}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
      />
    </div>
  );
});

FlyerImage.displayName = 'FlyerImage';

// ✅ Section Desktop (tout affiché)
const DesktopSection = memo(({ marque, vehicules, flyerUrl, isVisible, onVehiculeClick }) => {
  if (vehicules.length === 0) return null;

  return (
    <div className="scroll-mt-20 mb-12">
      <span className="text-2xl font-semibold italic text-[#5f6364] block mt-12 mb-8">
        {marque.nom}
      </span>

      <FlyerImage 
        flyerUrl={flyerUrl} 
        marqueName={marque.nom} 
        isVisible={isVisible}
        isMobile={false}
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
            onClick={() => onVehiculeClick(vehicule.nom)}
          />
        ))}
      </div>
    </div>
  );
});

DesktopSection.displayName = 'DesktopSection';

// ✅ Section Mobile (expand/collapse)
const MobileSection = memo(({ 
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
      <button
        onClick={handleExpand}
        className="w-full text-left flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold italic text-[#5f6364] group-hover:text-white transition-colors">
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

      {isExpanded && (
        <div className="mt-6">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
              <FlyerImage 
                flyerUrl={flyerUrl} 
                marqueName={marque.nom} 
                isVisible={true}
                isMobile={true}
              />

              {vehicules.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {vehicules.map((vehicule) => (
                    <VehiculeCard
                      key={vehicule.id}
                      vehicule={vehicule}
                      onClick={() => onVehiculeClick(vehicule.nom)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400 py-8">Aucun véhicule disponible</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
});

MobileSection.displayName = 'MobileSection';

export default function Vehicule() {
  const router = useRouter();
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicule, setSelectedVehicule] = useState(null);
  const [vehiculesData, setVehiculesData] = useState({});
  const [tarifImages, setTarifImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(null);
  const [expandedMarques, setExpandedMarques] = useState(new Set());
  const [loadingMarques, setLoadingMarques] = useState(new Set());
  const [error, setError] = useState(null);

  // ✅ Configuration des marques
  const marques = useMemo(() => [
    { 
      nom: "Rolls Royce", 
      key: "rolls royce",
      flyerKey: "flyer_url_rolls_royce"
    },
    { 
      nom: "Mercedes", 
      key: "mercedes",
      flyerKey: "flyer_url_mercedes"
    },
  ], []);

  // ✅ Détection mobile simple
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Chargement initial - DESKTOP charge tout, MOBILE charge seulement les tarifs
  useEffect(() => {
    if (isMobile === null) return;

    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        if (isMobile) {
          // Mobile : charge uniquement les tarifs
          const response = await fetch('/api/nos-packs/get-tarifs-only', {
            signal: controller.signal,
            headers: { 'Content-Type': 'application/json' },
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = await response.json();

          if (data.success && data.tarifs) {
            console.log('📋 Colonnes tarifs reçues:', Object.keys(data.tarifs));
            setTarifImages(data.tarifs);
          }
        } else {
          // Desktop : charge tout
          const response = await fetch('/api/nos-packs/get-all', {
            signal: controller.signal,
            headers: { 'Content-Type': 'application/json' },
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = await response.json();

          if (data.success) {
            if (data.tarifs) {
              console.log('📋 Colonnes tarifs reçues:', Object.keys(data.tarifs));
              setTarifImages(data.tarifs);
            }

            if (data.vehicules && Array.isArray(data.vehicules)) {
              const grouped = data.vehicules.reduce((acc, vehicule) => {
                const marque = vehicule.marque.toLowerCase();
                if (!acc[marque]) acc[marque] = [];
                acc[marque].push(vehicule);
                return acc;
              }, {});
              
              console.log('🚗 Véhicules groupés par marque:', Object.keys(grouped));
              setVehiculesData(grouped);
            }
          }
        }

      } catch (err) {
        let errorMessage = 'Erreur lors du chargement des données';
        if (err.name === 'AbortError') {
          errorMessage = 'La requête a pris trop de temps';
        }
        console.error("❌ Erreur chargement:", err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [isMobile]);

  // ✅ Observer simple pour desktop
  useEffect(() => {
    if (isMobile) return;

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
  }, [vehiculesData, isMobile]);

  // ✅ Chargement progressif par marque (mobile uniquement)
  const loadVehiculesForMarque = useCallback(async (marqueKey) => {
    if (!isMobile || vehiculesData[marqueKey]?.length > 0 || loadingMarques.has(marqueKey)) {
      return;
    }

    setLoadingMarques(prev => new Set(prev).add(marqueKey));

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(`/api/nos-packs/get-by-marque?marque=${encodeURIComponent(marqueKey)}`, {
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Erreur API:', errorData);
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      if (data.success && data.vehicules) {
        console.log(`✅ ${data.vehicules.length} véhicules chargés pour "${marqueKey}"`);
        setVehiculesData(prev => ({
          ...prev,
          [marqueKey]: data.vehicules
        }));
      }

    } catch (err) {
      console.error(`❌ Erreur chargement ${marqueKey}:`, err);
    } finally {
      setLoadingMarques(prev => {
        const newSet = new Set(prev);
        newSet.delete(marqueKey);
        return newSet;
      });
    }
  }, [isMobile, vehiculesData, loadingMarques]);

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

  const handleRetourPacks = useCallback(() => {
    router.push('/nos-packs');
  }, [router]);

  if (loading || isMobile === null) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">
            {isMobile ? 'Chargement des tarifs...' : 'Chargement des véhicules...'}
          </p>
        </div>
      </div>
    );
  }

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
      {/* Bouton retour */}
      <div className="w-full px-4 mt-10 flex justify-center mb-8">
        <button
          onClick={handleRetourPacks}
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
            {isMobile 
              ? "✨ Cliquez sur une marque pour découvrir nos véhicules premium"
              : "✨ Découvrez nos véhicules premium par marque"
            }
          </p>
        </div>
      </div>

      {/* Affichage Desktop ou Mobile */}
      {isMobile ? (
        <div className="space-y-4 max-w-5xl mx-auto">
          {marques.map((marque) => (
            <MobileSection
              key={marque.key}
              marque={marque}
              isExpanded={expandedMarques.has(marque.key)}
              onToggle={toggleMarque}
              onLoadVehicules={loadVehiculesForMarque}
              vehicules={vehiculesData[marque.key] || []}
              flyerUrl={tarifImages[marque.flyerKey]}
              onVehiculeClick={openReservation}
              isLoading={loadingMarques.has(marque.key)}
            />
          ))}
        </div>
      ) : (
        marques.map((marque, index) => {
          const vehicules = vehiculesData[marque.key] || [];
          const flyerUrl = tarifImages[marque.flyerKey];
          
          if (vehicules.length === 0) return null;

          const isVisible = visibleSections.has(marque.nom.toLowerCase());

          return (
            <div
              key={marque.key}
              id={marque.nom.toLowerCase()}
              ref={el => (sectionRefs.current[index] = el)}
            >
              <DesktopSection
                marque={marque}
                vehicules={vehicules}
                flyerUrl={flyerUrl}
                isVisible={isVisible}
                onVehiculeClick={openReservation}
              />
            </div>
          );
        })
      )}

      {Object.keys(vehiculesData).length === 0 && !loading && !isMobile && (
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