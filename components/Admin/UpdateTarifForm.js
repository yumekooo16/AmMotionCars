'use client';

import React, { useState, useEffect } from "react";

const MARQUES = [
  { id: "mercedes", label: "Mercedes" },
  { id: "audi", label: "Audi" },
  { id: "bmw", label: "BMW" },
  { id: "porsche", label: "Porsche" },
  { id: "volkswagen", label: "Volkswagen" },
];

export default function ManageVehiculesForm() {
  const [marque, setMarque] = useState("mercedes");
  const [nom, setNom] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  // Pour la suppression
  const [vehicules, setVehicules] = useState([]);
  const [loadingVehicules, setLoadingVehicules] = useState(false);

  // Charger les véhicules
  useEffect(() => {
    loadVehicules();
  }, []);

  async function loadVehicules() {
    setLoadingVehicules(true);
    try {
      const res = await fetch('/api/tarifs/get-all');
      const data = await res.json();
      if (data.success && data.vehicules) {
        setVehicules(data.vehicules);
      }
    } catch (err) {
      // Erreur silencieuse en production
    } finally {
      setLoadingVehicules(false);
    }
  }

  // Gestion de la sélection d'image
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("❌ Veuillez sélectionner une image valide");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setMessage("❌ Image trop lourde (max 5MB)");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setMessage("");
  };

  // Ajouter un véhicule
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image) {
      setMessage("❌ Veuillez sélectionner une image");
      return;
    }
    if (!nom.trim()) {
      setMessage("❌ Veuillez entrer le nom du véhicule");
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("marque", marque);
    formData.append("nom", nom);

    try {
      const res = await fetch("/api/admin/add-vehicule", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Véhicule ajouté avec succès !");
        setImage(null);
        setPreview("");
        setNom("");
        loadVehicules(); // Recharger la liste
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage(`❌ ${data.error || "Erreur serveur"}`);
      }
    } catch (err) {
      setMessage("❌ Erreur réseau. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  // Supprimer un véhicule
  const handleDelete = async (vehiculeId, vehiculeName) => {
    if (!confirm(`Supprimer "${vehiculeName}" ?`)) return;

    setLoading(true);
    try {
      const res = await fetch("/api/admin/delete-vehicule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: vehiculeId }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ ${vehiculeName} supprimé !`);
        loadVehicules();
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage(`❌ ${data.error || "Erreur"}`);
      }
    } catch (err) {
      setMessage("❌ Erreur réseau");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl w-full text-white mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Gérer les Véhicules</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Formulaire d'ajout */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Ajouter un véhicule</h3>
          
          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium">Marque</label>
            <select
              value={marque}
              onChange={e => setMarque(e.target.value)}
              className="w-full p-3 rounded-lg sm:rounded-xl bg-white/20 text-white border border-white/30 focus:border-yellow-400 outline-none transition"
            >
              {MARQUES.map(m => (
                <option key={m.id} value={m.id} className="bg-gray-800">
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium">Nom du véhicule</label>
            <input
              type="text"
              value={nom}
              onChange={e => setNom(e.target.value)}
              placeholder="Ex: Mercedes AMG GTC"
              className="w-full p-3 rounded-lg sm:rounded-xl bg-white/20 text-white placeholder-white/50 border border-white/30 focus:border-yellow-400 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium">Photo du véhicule</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-400 file:text-black file:text-sm file:font-semibold hover:file:bg-yellow-500 file:cursor-pointer"
            />
            <p className="text-xs text-white/60 mt-1">Max 5MB</p>
          </div>

          {preview && (
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border-2 border-yellow-400">
              <img src={preview} alt="Preview" className="w-full h-40 sm:h-48 object-cover" />
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading || !image || !nom.trim()}
            className={`py-3 px-6 rounded-lg sm:rounded-xl w-full text-sm sm:text-base font-semibold transition ${
              loading || !image || !nom.trim()
                ? "bg-gray-500 cursor-not-allowed opacity-50" 
                : "bg-yellow-400 hover:bg-yellow-500 text-black"
            }`}
          >
            {loading ? "Ajout..." : "Ajouter"}
          </button>
        </div>

        {/* Liste des véhicules */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Véhicules existants</h3>
          
          {loadingVehicules ? (
            <p className="text-center text-white/60 text-sm">Chargement...</p>
          ) : (
            <div className="space-y-2 max-h-[400px] sm:max-h-[600px] overflow-y-auto pr-2">
              {vehicules.length === 0 ? (
                <p className="text-center text-white/60 text-sm">Aucun véhicule</p>
              ) : (
                vehicules.map(v => (
                  <div
                    key={v.id}
                    className="bg-white/5 rounded-lg p-3 flex items-center gap-3 hover:bg-white/10 transition"
                  >
                    <img
                      src={v.image_url}
                      alt={v.nom}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base truncate">{v.nom}</p>
                      <p className="text-xs text-white/60 capitalize">{v.marque}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(v.id, v.nom)}
                      disabled={loading}
                      className="px-3 py-1.5 bg-red-500 hover:bg-red-600 rounded-lg text-xs sm:text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0"
                    >
                      Supprimer
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className={`mt-4 sm:mt-6 p-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium text-center ${
          message.startsWith("✅") 
            ? "bg-green-500/20 text-green-300 border border-green-500/50" 
            : "bg-red-500/20 text-red-300 border border-red-500/50"
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}