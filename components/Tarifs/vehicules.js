'use client';

import React, { useRef, useEffect, useState } from "react";
import ModalReservation from "./reservations";

export default function Vehicule() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicule, setSelectedVehicule] = useState(null);

  const sections = [
    {
      nom: "Mercedes",
      vehicules: [
        { src: "/image/prixamggt.jpg", alt: "Mercedes AMG GTC" },
        { src: "/image/prixglc63samg.jpg", alt: "Mercedes GLC 63S AMG" },
        { src: "/image/prixglc43amg.jpg", alt: "Mercedes GLC 43 AMG" },
        { src: "/image/prixclassg63amg.jpg", alt: "Mercedes G63 AMG" },
        { src: "/image/prixa35amg.jpg", alt: "Mercedes A35 AMG" }
      ]
    },
    {
      nom: "Audi",
      vehicules: [
        { src: "/image/prixrs6perf.jpg", alt: "Audi RS6" },
        { src: "/image/prixrs3griskemora.jpg", alt: "Audi RS3 Gris Kemora" },
        { src: "/image/prixrs3black.jpg", alt: "Audi RS3 Noir" }
      ]
    },
    {
      nom: "BMW",
      vehicules: [
        { src: "/image/prixm2compet.jpg", alt: "BMW M2 Competition" },
        { src: "/image/prixserie2grancoupe.jpg", alt: "BMW Série 2 Gran Coupé" }
      ]
    },
    {
      nom: "Porsche",
      vehicules: [
        { src: "/image/prixporshe911.jpg", alt: "Porsche 911" },
        { src: "/image/prixporshecayennes.jpg", alt: "Porsche Cayenne S" }
      ]
    },
    {
      nom: "Volkswagen",
      vehicules: [
        { src: "/image/prixgolf8gti.jpg", alt: "Volkswagen Golf 8 GTI" }
      ]
    }
  ];

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openReservation(vehicule) {
    setSelectedVehicule(vehicule); // On passe le nom du véhicule
    setIsModalOpen(true);
  }

  function renderSection(section, index) {
    return (
      <div key={index} id={section.nom.toLowerCase()} className="scroll-mt-20">
        <span className="text-2xl font-semibold italic text-[#5f6364] block mt-12 mb-8">
          {section.nom}
        </span>
        <div
          ref={index === 0 ? sectionRef : null}
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 " +
            (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")
          }
        >
          {section.vehicules.map((v, i) => (
            <div
              key={i}
              className={
                "rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 cursor-pointer " +
                (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16")
              }
              onClick={() => openReservation(v.alt)}
            >
              <img src={v.src} alt={v.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mb-12">
      {sections.map(renderSection)}

      {isModalOpen && (
        <ModalReservation
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          vehicule={selectedVehicule} // Passe bien le véhicule sélectionné
        />
      )}
    </div>
  );
}
