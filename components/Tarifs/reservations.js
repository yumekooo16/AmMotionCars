'use client';

import React, { useState, useMemo } from 'react';
import { supabaseClient as supabase } from '@/lib/supabaseClient';

export default function ModalReservation({ isOpen, onClose, vehicule = null }) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateDebut: '',
    dateFin: '',
    lieuPrise: '',
    message: '',
    consentRgpd: false // ✅ Nouveau champ pour le consentement RGPD
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const resetForm = () => {
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      dateDebut: '',
      dateFin: '',
      lieuPrise: '',
      message: '',
      consentRgpd: false
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ Vérification du consentement RGPD
    if (!formData.consentRgpd) {
      setErrorMsg("Vous devez accepter la politique de confidentialité pour continuer.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // ✅ Étape 1 : insertion dans Supabase avec les champs RGPD
      const { error } = await supabase.from('reservations').insert([
        {
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          date_debut: formData.dateDebut,
          date_fin: formData.dateFin,
          lieu_prise: formData.lieuPrise,
          message: formData.message,
          vehicule: vehicule || 'Non spécifié',
          consent_given: true,
          consent_date: new Date().toISOString()
        }
      ]);

      if (error) throw error;

      // ✅ Étape 2 : envoi de l'email via l'API
      const response = await fetch('/api/sendReservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          vehicule: vehicule || 'Non spécifié'
        })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({ message: 'Erreur inconnue du serveur' }));
        throw new Error(data.message || 'Erreur lors de l&apos;envoi de l&apos;email');
      }

      // ✅ Étape 3 : affichage du message de succès
      setShowSuccess(true);
      resetForm();
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Erreur lors de la réservation :', error.message);
      setErrorMsg("Erreur lors de l'envoi de votre demande. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const minDateFin = formData.dateDebut
    ? new Date(new Date(formData.dateDebut).getTime() + 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0]
    : today;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-black rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        style={{ animation: 'slideIn 0.3s ease-out' }}
      >
        {/* Bouton fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-400 text-3xl font-light transition-colors"
        >
          &times;
        </button>

        {/* En-tête */}
        <div className="p-8 border-b border-white/20">
          <h2 className="text-3xl font-bold text-white mb-2">Demande de Réservation</h2>
          {vehicule && (
            <div className="mt-4 bg-gray-900 p-4 rounded-lg border-l-4 border-[#5f6364]">
              <p className="text-sm text-gray-400 mb-1">Véhicule sélectionné</p>
              <p className="font-semibold text-white">{vehicule}</p>
            </div>
          )}
        </div>

        {/* Message de succès */}
        {showSuccess && (
          <div className="mx-8 mt-4 bg-green-600 text-white p-4 rounded-lg text-center font-semibold">
            ✅ Votre demande a bien été enregistrée et transmise à l&apos;agence !
          </div>
        )}

        {/* Message d'erreur */}
        {errorMsg && (
          <div className="mx-8 mt-4 bg-red-600 text-white p-4 rounded-lg text-center font-semibold">
            ⚠️ {errorMsg}
          </div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 overflow-x-hidden overscroll-behavior-x-none">
            <div>
              <label htmlFor="nom" className="block text-gray-400 font-semibold mb-2">Nom *</label>
              <input
                id="nom"
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-[#5f6364] focus:outline-none"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-gray-400 font-semibold mb-2">Prénom *</label>
              <input
                id="prenom"
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-[#5f6364] focus:outline-none"
                placeholder="Votre prénom"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-400 font-semibold mb-2">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-[#5f6364] focus:outline-none"
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="telephone" className="block text-gray-400 font-semibold mb-2">Téléphone *</label>
            <input
              id="telephone"
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-[#5f6364] focus:outline-none"
              placeholder="06 12 34 56 78"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="dateDebut" className="block text-gray-400 font-semibold mb-2">Date de début *</label>
              <input
                id="dateDebut"
                type="date"
                name="dateDebut"
                value={formData.dateDebut}
                onChange={handleChange}
                min={today}
                required
                className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-[#5f6364] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="dateFin" className="block text-gray-400 font-semibold mb-2">Date de fin *</label>
              <input
                id="dateFin"
                type="date"
                name="dateFin"
                value={formData.dateFin}
                onChange={handleChange}
                min={minDateFin}
                required
                className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-[#5f6364] focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="lieuPrise" className="block text-gray-400 font-semibold mb-2">Lieu de prise en charge</label>
            <input
              id="lieuPrise"
              type="text"
              name="lieuPrise"
              value={formData.lieuPrise}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-[#5f6364] focus:outline-none"
              placeholder="Aéroport, adresse..."
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-400 font-semibold mb-2">Message / Demandes particulières</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-[#5f6364] focus:outline-none resize-none"
              placeholder="GPS, siège bébé, assurance complémentaire..."
            />
          </div>

          {/* ✅ NOUVEAU : Case à cocher RGPD */}
          <div className="mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="consentRgpd"
                checked={formData.consentRgpd}
                onChange={handleChange}
                required
                className="mt-1 mr-3 w-5 h-5 accent-[#5f6364] cursor-pointer"
              />
              <span className="text-sm text-gray-300 leading-relaxed">
                J&apos;accepte que mes données personnelles soient collectées et traitées par Am Motion Cars 
                pour traiter ma demande de réservation, conformément à la{' '}
                <a 
                  href="/pages/politique-confidentialite" 
                  target="_blank"
                  className="text-[#5f6364] underline hover:text-[#7a7d7e] transition-colors"
                >
                  Politique de confidentialité
                </a>
                . *
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#5f6364] to-[#3a3d3e] text-white font-bold py-4 rounded-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Envoi en cours...' : '📩 Envoyer la demande'}
          </button>
        </form>

        <style jsx>{`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}