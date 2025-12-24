"use client";

import React, { useState } from "react";
import Image from "next/image";
import { supabaseClient as supabase } from '@/lib/supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    service: "",
    date: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 1️⃣ Enregistrement dans Supabase
      const { error: supabaseError } = await supabase
        .from('contacts')
        .insert([{
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          service: formData.service,
          date: formData.date || null,
          message: formData.message,
          created_at: new Date().toISOString()
        }]);

      if (supabaseError) throw new Error("Erreur lors de l'enregistrement Supabase");

      // 2️⃣ Envoi de l'email via l'API sendContact
      const emailResponse = await fetch('/api/sendContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!emailResponse.ok) {
        let errorMessage = 'Erreur inconnue du serveur';

        // Lire la réponse une seule fois grâce à clone()
        try {
          const errorData = await emailResponse.clone().json();
          if (errorData?.message) errorMessage = errorData.message;
        } catch {
          const text = await emailResponse.clone().text();
          if (text) errorMessage = text;
        }

        throw new Error(errorMessage);
      }

      setSubmitStatus('success');
      setFormData({
        nom: "", prenom: "", email: "", telephone: "", service: "", date: "", message: ""
      });

    } catch (error) {
      console.error('Erreur globale du formulaire:', error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/image/Voitures_de_luxe_sous_ciel_couvert.webp"
            alt="Contact AM Motion"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide">
            Contact
          </h1>
          <p className="text-base md:text-xl mt-4 md:mt-8 font-light max-w-3xl opacity-90">
            Parlons de votre projet
          </p>
        </div>
      </section>

      {/* Formulaire et Informations */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          
          {/* Formulaire */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-wide">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-light text-gray-400 mb-2">Nom</label>
                  <input
                    type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required
                    className="w-full bg-neutral-950 border border-gray-800 px-4 py-3 text-white font-light focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-sm font-light text-gray-400 mb-2">Prénom</label>
                  <input
                    type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required
                    className="w-full bg-neutral-950 border border-gray-800 px-4 py-3 text-white font-light focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-400 mb-2">Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full bg-neutral-950 border border-gray-800 px-4 py-3 text-white font-light focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-light text-gray-400 mb-2">Téléphone</label>
                <input
                  type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required
                  className="w-full bg-neutral-950 border border-gray-800 px-4 py-3 text-white font-light focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-light text-gray-400 mb-2">Service souhaité</label>
                <select
                  id="service" name="service" value={formData.service} onChange={handleChange} required
                  className="w-full bg-neutral-950 border border-gray-800 px-4 py-3 text-white font-light focus:outline-none focus:border-white transition-colors"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="Mariage">Mariage</option>
                  <option value="Événement">Événement</option>
                  <option value="Transfert VIP">Transfert VIP</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-light text-gray-400 mb-2">Date souhaitée</label>
                <input
                  type="date" id="date" name="date" value={formData.date} onChange={handleChange}
                  className="w-50 bg-neutral-950 border border-gray-800 px-4 py-3 text-white font-light focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-2">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required
                  className="w-full bg-neutral-950 border border-gray-800 px-4 py-3 text-white font-light focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 font-light tracking-wide hover:bg-gray-100 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-900 border border-green-700 text-white px-4 py-3 font-light">
                  Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900 border border-red-700 text-white px-4 py-3 font-light">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                </div>
              )}
            </form>
          </div>

          {/* Informations de contact */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-wide">Nos coordonnées</h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-light text-gray-400 mb-2">Adresse</h3>
                <p className="text-lg">58 Avenue de la Grande Armée, 75017 Paris</p>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-gray-400 mb-2">WhatsApp</h3>
                <p className="text-lg">
                  <a 
                    href="https://wa.me/33775775389" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-300 transition-colors"
                  >
                    Contacter via WhatsApp
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-gray-400 mb-2">Email</h3>
                <p className="text-lg">
                  <a 
                    href="mailto:contact@ammotioncars.com"
                    className="underline hover:text-gray-300 transition-colors"
                  >
                    contact@ammotioncars.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
