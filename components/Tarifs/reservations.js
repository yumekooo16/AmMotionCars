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
    consentRgpd: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [e.target.name]: value }));
  };

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const resetForm = () => {
    setFormData({
      nom: '', prenom: '', email: '', telephone: '',
      dateDebut: '', dateFin: '', lieuPrise: '', message: '', consentRgpd: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consentRgpd) {
      setErrorMsg("Vous devez accepter la politique de confidentialité pour continuer.");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const { error } = await supabase.from('reservations').insert([{
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
        consent_date: new Date().toISOString(),
      }]);
      if (error) throw error;

      const response = await fetch('/api/sendReservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, vehicule: vehicule || 'Non spécifié' }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({ message: 'Erreur inconnue du serveur' }));
        throw new Error(data.message || 'Erreur lors de l\'envoi de l\'email');
      }

      setShowSuccess(true);
      resetForm();
      setTimeout(() => { setShowSuccess(false); onClose(); }, 3000);
    } catch (error) {
      console.error('Erreur lors de la réservation :', error.message);
      setErrorMsg("Erreur lors de l'envoi de votre demande. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const minDateFin = formData.dateDebut
    ? new Date(new Date(formData.dateDebut).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    : today;

  const inputClass = "w-full px-0 py-3 bg-transparent border-0 border-b border-white/15 text-white text-sm font-light placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors duration-200";
  const labelClass = "block text-[9px] tracking-[0.28em] uppercase text-white/30 mb-2 font-light";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-[#060608] border border-white/8 w-full max-w-xl max-h-[90vh] overflow-y-auto relative"
        style={{ animation: 'slideIn 0.25s ease-out' }}
      >
        {/* ── Header ───────────────────────────────────── */}
        <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-white/8">
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">Réservation</p>
            <h2 className="text-xl font-light text-white">Demande de prestation</h2>
            {vehicule && (
              <p className="text-xs font-light text-white/40 mt-2">
                Véhicule sélectionné —{' '}
                <span className="text-white/70">{vehicule}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-colors mt-1"
            aria-label="Fermer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Feedback ─────────────────────────────────── */}
        {showSuccess && (
          <div className="mx-8 mt-4 px-5 py-4 border border-white/15 bg-white/5">
            <p className="text-xs font-light text-white/70 tracking-wide">
              Votre demande a bien été enregistrée et transmise à l'agence.
            </p>
          </div>
        )}
        {errorMsg && (
          <div className="mx-8 mt-4 px-5 py-4 border border-white/15 bg-white/5">
            <p className="text-xs font-light text-white/50 tracking-wide">{errorMsg}</p>
          </div>
        )}

        {/* ── Formulaire ───────────────────────────────── */}
        <form onSubmit={handleSubmit} className="px-8 py-5 space-y-7">

          {/* Nom / Prénom */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nom" className={labelClass}>Nom *</label>
              <input id="nom" type="text" name="nom" value={formData.nom}
                onChange={handleChange} required className={inputClass} placeholder="Dupont" />
            </div>
            <div>
              <label htmlFor="prenom" className={labelClass}>Prénom *</label>
              <input id="prenom" type="text" name="prenom" value={formData.prenom}
                onChange={handleChange} required className={inputClass} placeholder="Jean" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>Email *</label>
            <input id="email" type="email" name="email" value={formData.email}
              onChange={handleChange} required className={inputClass} placeholder="jean@exemple.com" />
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="telephone" className={labelClass}>Téléphone *</label>
            <input id="telephone" type="tel" name="telephone" value={formData.telephone}
              onChange={handleChange} required className={inputClass} placeholder="06 12 34 56 78" />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="dateDebut" className={labelClass}>Date de début *</label>
              <input id="dateDebut" type="date" name="dateDebut" value={formData.dateDebut}
                onChange={handleChange} min={today} required className={inputClass} />
            </div>
            <div>
              <label htmlFor="dateFin" className={labelClass}>Date de fin *</label>
              <input id="dateFin" type="date" name="dateFin" value={formData.dateFin}
                onChange={handleChange} min={minDateFin} required className={inputClass} />
            </div>
          </div>

          {/* Lieu de prise en charge */}
          <div>
            <label htmlFor="lieuPrise" className={labelClass}>Lieu de prise en charge</label>
            <input id="lieuPrise" type="text" name="lieuPrise" value={formData.lieuPrise}
              onChange={handleChange} className={inputClass} placeholder="Aéroport CDG, adresse Paris..." />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>Message / Demandes particulières</label>
            <textarea id="message" name="message" value={formData.message}
              onChange={handleChange} rows="1"
              className={`${inputClass} resize-none`}
              placeholder="GPS, siège bébé, assurance complémentaire..." />
          </div>

          {/* RGPD */}
          <div className="border-t border-white/8 pt-6">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative mt-[2px] shrink-0">
                <input
                  type="checkbox"
                  name="consentRgpd"
                  checked={formData.consentRgpd}
                  onChange={handleChange}
                  required
                  className="sr-only"
                />
                <div className={`w-4 h-4 border transition-colors duration-200 flex items-center justify-center
                  ${formData.consentRgpd ? 'border-white/60 bg-white/10' : 'border-white/15 bg-transparent'}`}>
                  {formData.consentRgpd && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-[11px] font-light text-white/35 leading-relaxed">
                J'accepte que mes données personnelles soient collectées et traitées par AM Motion Cars
                pour traiter ma demande de réservation, conformément à la{' '}
                <a
                  href="/pages/politique-confidentialite"
                  target="_blank"
                  className="text-white/55 hover:text-white transition-colors border-b border-white/20"
                >
                  Politique de confidentialité
                </a>
                . *
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 w-full py-4 bg-white text-[#060608] text-[10px] font-light tracking-[0.25em] uppercase transition-colors hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
          </button>

        </form>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1) opacity(0.3);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}