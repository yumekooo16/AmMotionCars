'use client';
import React, { createContext, useContext, useState, useEffect } from "react";

const TarifContext = createContext();

export function useTarifs() {
  return useContext(TarifContext);
}

export function TarifProvider({ children }) {
  const [tarifImages, setTarifImages] = useState({});

  const loadTarifs = async () => {
    try {
      const response = await fetch("/api/tarifs/get-all");
      const data = await response.json();
      if (data.success) {
        setTarifImages(data.tarifs);
      }
    } catch (err) {
      console.error("Erreur chargement tarifs:", err);
    }
  };

  useEffect(() => {
    loadTarifs();
  }, []);

  return (
    <TarifContext.Provider value={{ tarifImages, loadTarifs }}>
      {children}
    </TarifContext.Provider>
  );
}
