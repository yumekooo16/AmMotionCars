'use client';

import React, { useRef, useEffect, useState, useMemo, useCallback, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ModalReservation = dynamic(() => import("./reservations"), { 
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
        quality={85}
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
        ${isMobile ? 'max-w-full' : 'max-w-[350px]'}
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

// ✅ Section Desktop simple
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

// ✅ Section Mobile simple
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

      {isExpanded && (
        <div className="mt-4">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
              {flyerUrl && (
                <FlyerImage 
                  flyerUrl={flyerUrl} 
                  marqueName={marque.nom} 
                  isVisible={true}
                  isMobile={true}
                />
              )}

              {vehicules.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

  const marques = useMemo(() => [
    { nom: "Mercedes", key: "mercedes" },
    { nom: "Audi", key: "audi" },
    { nom: "BMW", key: "bmw" },
    { nom: "Porsche", key: "porsche" },
    { nom: "Volkswagen", key: "volkswagen" }
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

  // ✅ Chargement initial simple
  useEffect(() => {
    if (isMobile === null) return;

    async function loadData() {
      try {
        setLoading(true);
        
        if (isMobile) {
          const response = await fetch('/api/tarifs/get-tarifs-only');
          if (response.ok) {
            const data = await response.json();
            if (data.success && data.tarifs) {
              setTarifImages(data.tarifs);
            }
          }
        } else {
          const response = await fetch('/api/tarifs/get-all');
          
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = await response.json();

          if (data.success) {
            if (data.tarifs) {
              setTarifImages(data.tarifs);
            }

            if (data.vehicules && Array.isArray(data.vehicules)) {
              const grouped = data.vehicules.reduce((acc, vehicule) => {
                const marque = vehicule.marque.toLowerCase();
                if (!acc[marque]) acc[marque] = [];
                acc[marque].push(vehicule);
                return acc;
              }, {});
              
              setVehiculesData(grouped);
            }
          }
        }
      } catch (error) {
        console.error("Erreur chargement données:", error);
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

  // ✅ Chargement progressif par marque (mobile)
  const loadVehiculesForMarque = useCallback(async (marqueKey) => {
    if (!isMobile || vehiculesData[marqueKey]?.length > 0 || loadingMarques.has(marqueKey)) {
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
      console.error(`Erreur chargement ${marqueKey}:`, error);
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

  const handleMarqueSelect = useCallback((e) => {
    const id = e.target.value;
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleRetourPacks = useCallback(() => {
    router.push('/nos-packs');
  }, [router]);

  const marquesAvailable = useMemo(() => 
    marques.filter(m => vehiculesData[m.key]?.length > 0),
    [marques, vehiculesData]
  );

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

  return (
    <div className="container mx-auto px-4 mb-12">
      {/* Bouton retour */}
      <div className="w-full px-4 mt-10 flex justify-center mb-6">
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

      {/* Menu Desktop ou Info Mobile */}
      {isMobile ? (
        <div className="w-full px-4 mb-8">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-white text-lg font-medium">
              ✨ Cliquez sur une marque pour découvrir nos véhicules disponibles
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full px-4 flex justify-center mb-8">
          <div className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
            <p className="text-lg font-semibold text-white mb-4 text-center">
              Rechercher un véhicule par marque
            </p>
            <div className="flex flex-col gap-3">
              <label className="text-sm text-gray-300">Aller à :</label>
              <select
                className="w-full border border-white/20 text-white rounded-xl p-3 focus:outline-none focus:border-white/40 transition bg-black/20"
                onChange={handleMarqueSelect}
              >
                <option value="">Sélectionnez une marque</option>
                {marquesAvailable.map(m => (
                  <option key={m.key} value={m.nom.toLowerCase()}>
                    {m.nom}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

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
              flyerUrl={tarifImages[`flyer_url_${marque.key}`]}
              onVehiculeClick={openReservation}
              isLoading={loadingMarques.has(marque.key)}
            />
          ))}
        </div>
      ) : (
        marques.map((marque, index) => {
          const vehicules = vehiculesData[marque.key] || [];
          const flyerUrl = tarifImages[`flyer_url_${marque.key}`];
          
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