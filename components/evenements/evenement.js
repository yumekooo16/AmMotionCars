'use client';

import React, { useRef, useEffect, useState, useMemo, useCallback, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ModalReservation = dynamic(() => import("./reservations.js"), {
  ssr: false,
  loading: () => null,
});

// ── VehiculeCard ────────────────────────────────────────
const VehiculeCard = memo(({ vehicule, onClick }) => {
  if (!vehicule.image_url || typeof vehicule.image_url !== "string") return null;

  return (
    <div
      className="group cursor-pointer overflow-hidden bg-[#0c0c0e] border border-white/8 hover:border-white/20 transition-colors duration-300"
      onClick={onClick}
    >
      <div className="overflow-hidden">
        <Image
          src={vehicule.image_url}
          alt={vehicule.nom}
          width={500}
          height={300}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
          quality={75}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-4 py-4 border-t border-white/8 flex items-center justify-between">
        <h3 className="text-xs font-light text-white tracking-wide">{vehicule.nom}</h3>
        <svg
          className="w-3 h-3 text-white/25 group-hover:text-white/60 transition-colors -translate-x-1 group-hover:translate-x-0 duration-300"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
});
VehiculeCard.displayName = "VehiculeCard";

// ── FlyerImage ──────────────────────────────────────────
const FlyerImage = memo(({ flyerUrl, marqueName, isVisible }) => {
  if (!flyerUrl) return null;

  return (
    <div
      className="w-full mx-auto mb-10 overflow-hidden border border-white/8"
      style={{
        maxWidth: "900px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(1.5rem)",
        transition: "opacity 0.7s, transform 0.7s",
      }}
    >
      <Image
        src={flyerUrl}
        alt={`Tarif ${marqueName}`}
        width={900}
        height={675}
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
        quality={75}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
      />
    </div>
  );
});
FlyerImage.displayName = "FlyerImage";

// ── DesktopSection ──────────────────────────────────────
const DesktopSection = memo(({ marque, vehicules, flyerUrl, isVisible, onVehiculeClick }) => {
  if (vehicules.length === 0) return null;

  return (
    <div className="scroll-mt-20 mb-16">
      <div className="flex items-baseline gap-4 mt-14 mb-10 pb-4 border-b border-white/8">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/25">Marque</span>
        <span className="text-2xl font-light text-white tracking-wide">{marque.nom}</span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/20 ml-auto tabular-nums">
          {vehicules.length} véhicule{vehicules.length > 1 ? "s" : ""}
        </span>
      </div>

      <FlyerImage flyerUrl={flyerUrl} marqueName={marque.nom} isVisible={isVisible} />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/8"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(1.5rem)",
          transition: "opacity 0.7s, transform 0.7s",
        }}
      >
        {vehicules.map((vehicule) => (
          <VehiculeCard key={vehicule.id} vehicule={vehicule} onClick={() => onVehiculeClick(vehicule.nom)} />
        ))}
      </div>
    </div>
  );
});
DesktopSection.displayName = "DesktopSection";

// ── MobileSection ───────────────────────────────────────
const MobileSection = memo(({ marque, isExpanded, onToggle, onLoadVehicules, vehicules, flyerUrl, onVehiculeClick, isLoading }) => {
  const handleExpand = useCallback(async () => {
    if (!isExpanded && vehicules.length === 0) await onLoadVehicules(marque.key);
    onToggle(marque.key);
  }, [isExpanded, vehicules.length, onLoadVehicules, onToggle, marque.key]);

  return (
    <div className="scroll-mt-20 border-b border-white/8 last:border-b-0">
      <button
        onClick={handleExpand}
        className="w-full text-left flex items-center justify-between py-5 group"
      >
        <div className="flex items-center gap-4">
          <span className="text-base font-light text-white/70 group-hover:text-white transition-colors tracking-wide">
            {marque.nom}
          </span>
          {vehicules.length > 0 && (
            <span className="text-[9px] tracking-[0.2em] uppercase text-white/25">
              {vehicules.length} véhicule{vehicules.length > 1 ? "s" : ""}
            </span>
          )}
        </div>
        <svg
          className={`w-4 h-4 text-white/30 group-hover:text-white/60 transition-all duration-300 ${isExpanded ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="pb-8">
          {isLoading ? (
            <div className="flex justify-center py-10">
              <div className="w-5 h-5 border border-white/20 border-t-white/60 rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {flyerUrl && <FlyerImage flyerUrl={flyerUrl} marqueName={marque.nom} isVisible={true} />}
              {vehicules.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8">
                  {vehicules.map((vehicule) => (
                    <VehiculeCard key={vehicule.id} vehicule={vehicule} onClick={() => onVehiculeClick(vehicule.nom)} />
                  ))}
                </div>
              ) : (
                <p className="text-xs font-light text-white/30 py-6 tracking-wide">Aucun véhicule disponible</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
});
MobileSection.displayName = "MobileSection";

// ── Composant principal ─────────────────────────────────
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

  const marques = useMemo(() => [
    { nom: "Rolls Royce", key: "rolls royce", flyerKey: "flyer_url_rolls_royce" },
    { nom: "Mercedes",    key: "mercedes",    flyerKey: "flyer_url_mercedes"    },
  ], []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile === null) return;
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        if (isMobile) {
          const response = await fetch("/api/nos-packs/get-tarifs-only", { signal: controller.signal, headers: { "Content-Type": "application/json" } });
          clearTimeout(timeoutId);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const data = await response.json();
          if (data.success && data.tarifs) setTarifImages(data.tarifs);
        } else {
          const response = await fetch("/api/nos-packs/get-all", { signal: controller.signal, headers: { "Content-Type": "application/json" } });
          clearTimeout(timeoutId);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const data = await response.json();
          if (data.success) {
            if (data.tarifs) setTarifImages(data.tarifs);
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
      } catch (err) {
        setError(err.name === "AbortError" ? "La requête a pris trop de temps" : "Erreur lors du chargement des données");
        console.error("Erreur chargement:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const observer = new IntersectionObserver(
      entries => {
        setVisibleSections(prev => {
          const s = new Set(prev);
          entries.forEach(e => { if (e.isIntersecting && e.target.id) s.add(e.target.id); });
          return s;
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    sectionRefs.current.forEach(ref => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, [vehiculesData, isMobile]);

  const loadVehiculesForMarque = useCallback(async (marqueKey) => {
    if (!isMobile || vehiculesData[marqueKey]?.length > 0 || loadingMarques.has(marqueKey)) return;
    setLoadingMarques(prev => new Set(prev).add(marqueKey));
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      const response = await fetch(`/api/nos-packs/get-by-marque?marque=${encodeURIComponent(marqueKey)}`, { signal: controller.signal, headers: { "Content-Type": "application/json" } });
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (data.success && data.vehicules) setVehiculesData(prev => ({ ...prev, [marqueKey]: data.vehicules }));
    } catch (err) {
      console.error(`Erreur chargement ${marqueKey}:`, err);
    } finally {
      setLoadingMarques(prev => { const s = new Set(prev); s.delete(marqueKey); return s; });
    }
  }, [isMobile, vehiculesData, loadingMarques]);

  const toggleMarque    = useCallback((k) => setExpandedMarques(prev => { const s = new Set(prev); s.has(k) ? s.delete(k) : s.add(k); return s; }), []);
  const openReservation = useCallback((name) => { setSelectedVehicule(name); setIsModalOpen(true); }, []);
  const closeModal      = useCallback(() => setIsModalOpen(false), []);
  const handleRetourPacks = useCallback(() => router.push("/nos-packs"), [router]);

  // ── Loader ────────────────────────────────────────────
  if (loading || isMobile === null) {
    return (
      <div className="flex justify-center items-center min-h-[40vh] py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-5 h-5 border border-white/20 border-t-white/60 rounded-full animate-spin" />
          <p className="text-xs font-light text-white/30 tracking-[0.2em] uppercase">
            {isMobile ? "Chargement des tarifs" : "Chargement des véhicules"}
          </p>
        </div>
      </div>
    );
  }

  // ── Erreur ────────────────────────────────────────────
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[40vh] py-20">
        <div className="flex flex-col items-center gap-5 max-w-sm text-center">
          <p className="text-xs font-light text-white/30 tracking-wide">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/35 pb-[2px]"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-8">
      {/* ── Bouton retour ─────────────────────────────── */}
      <div className="pt-6 pb-2">
        <button
          onClick={handleRetourPacks}
          className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/35 hover:text-white transition-colors group"
        >
          <svg className="w-3 h-3 transition-transform group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux packs
        </button>
      </div>

      {/* ── Hint mobile ───────────────────────────────── */}
      {isMobile && (
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 py-5">
          Sélectionnez une marque pour découvrir les véhicules
        </p>
      )}

      {/* ── Sections véhicules ────────────────────────── */}
      {isMobile ? (
        <div className="border-t border-white/8">
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
          const flyerUrl  = tarifImages[marque.flyerKey];
          if (vehicules.length === 0) return null;
          const isVisible = visibleSections.has(marque.nom.toLowerCase());
          return (
            <div key={marque.key} id={marque.nom.toLowerCase()} ref={el => (sectionRefs.current[index] = el)}>
              <DesktopSection marque={marque} vehicules={vehicules} flyerUrl={flyerUrl} isVisible={isVisible} onVehiculeClick={openReservation} />
            </div>
          );
        })
      )}

      {Object.keys(vehiculesData).length === 0 && !loading && !isMobile && (
        <p className="text-center text-xs font-light text-white/30 tracking-wide py-12">
          Aucun véhicule disponible pour le moment.
        </p>
      )}

      {isModalOpen && (
        <ModalReservation isOpen={isModalOpen} onClose={closeModal} vehicule={selectedVehicule} />
      )}
    </div>
  );
}