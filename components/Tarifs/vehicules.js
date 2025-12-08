'use client';

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ModalReservation = dynamic(() => import("./reservations"), { ssr: false });

export default function Vehicule() {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicule, setSelectedVehicule] = useState(null);
  const [vehiculesData, setVehiculesData] = useState({});
  const [tarifImages, setTarifImages] = useState({});
  const [loading, setLoading] = useState(true);

  const marques = [
    { nom: "Mercedes", key: "mercedes" },
    { nom: "Audi", key: "audi" },
    { nom: "BMW", key: "bmw" },
    { nom: "Porsche", key: "porsche" },
    { nom: "Volkswagen", key: "volkswagen" }
  ];

  // UNE SEULE requête vers /api/tarifs/get-all
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        console.log("🔍 Chargement des données...");

        const response = await fetch('/api/tarifs/get-all');
        console.log("📡 Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Données reçues:", data);

        if (data.success) {
          // Flyers
          if (data.tarifs) {
            setTarifImages(data.tarifs);
            console.log("🎨 Flyers chargés");
          }

          // Véhicules - Grouper par marque
          if (data.vehicules && Array.isArray(data.vehicules)) {
            const grouped = {};
            data.vehicules.forEach(vehicule => {
              const marque = vehicule.marque.toLowerCase();
              if (!grouped[marque]) {
                grouped[marque] = [];
              }
              grouped[marque].push(vehicule);
            });
            setVehiculesData(grouped);
            console.log("🚗 Véhicules groupés:", grouped);
          }
        }

      } catch (error) {
        console.error("❌ Erreur chargement données:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Observer pour animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [vehiculesData]);

  function openReservation(vehiculeName) {
    setSelectedVehicule(vehiculeName);
    setIsModalOpen(true);
  }

  function renderSection(marque, index) {
    const vehicules = vehiculesData[marque.key] || [];
    const flyerUrl = tarifImages[`flyer_url_${marque.key}`];
    
    if (vehicules.length === 0) {
      return null;
    }

    return (
      <div
        key={index}
        id={marque.nom.toLowerCase()}
        ref={el => (sectionRefs.current[index] = el)}
        className="scroll-mt-20 mb-12"
      >
        <span className="text-2xl font-semibold italic text-[#5f6364] block mt-12 mb-8">
          {marque.nom}
        </span>

        {flyerUrl && (
          <div
            className={`
              w-full max-w-[350px] mx-auto mb-8 rounded-xl overflow-hidden shadow-md
              aspect-[4/3] 
              transform transition duration-300 hover:scale-105
              ${visibleSections.includes(marque.nom.toLowerCase())
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"}
            `}
          >
            <Image
              src={flyerUrl}
              alt={`Tarif ${marque.nom}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        )}

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 ${
            visibleSections.includes(marque.nom.toLowerCase())
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {vehicules.map((vehicule) => {
            if (!vehicule.image_url || typeof vehicule.image_url !== 'string') {
              console.error('❌ URL invalide pour:', vehicule);
              return null;
            }

            return (
              <div
                key={vehicule.id}
                className="rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => openReservation(vehicule.nom)}
              >
                <Image
                  src={vehicule.image_url}
                  alt={vehicule.nom}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

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

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="w-full px-4 mt-10 flex justify-center">
        <div className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
          <p className="text-lg font-semibold text-white mb-4 text-center">
            Rechercher un véhicule par marque
          </p>
          <div className="flex flex-col gap-3">
            <label className="text-sm text-gray-300">Aller à :</label>
            <select
              className="w-full border border-white/20 text-white rounded-xl p-3 focus:outline-none focus:border-white/40 transition bg-black/20"
              onChange={e => {
                const id = e.target.value;
                if (!id) return;
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <option value="">Sélectionnez une marque</option>
              {marques.map(m => (
                vehiculesData[m.key] && vehiculesData[m.key].length > 0 && (
                  <option key={m.nom} value={m.nom.toLowerCase()}>
                    {m.nom}
                  </option>
                )
              ))}
            </select>
          </div>
        </div>
      </div>

      {marques.map(renderSection)}

      {Object.keys(vehiculesData).length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-white text-lg">Aucun véhicule disponible pour le moment.</p>
        </div>
      )}

      {isModalOpen && (
        <ModalReservation
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          vehicule={selectedVehicule}
        />
      )}
    </div>
  );
}