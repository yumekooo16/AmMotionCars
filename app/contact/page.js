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

      const emailResponse = await fetch('/api/sendContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!emailResponse.ok) {
        let errorMessage = 'Erreur inconnue du serveur';
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

  // Schema.org JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AM Motion Cars",
    "description": "Conciergerie automobile de luxe à Paris",
    "telephone": "+33775775389",
    "email": "contact@ammotioncars.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "58 Avenue de la Grande Armée",
      "addressLocality": "Paris",
      "postalCode": "75017",
      "addressCountry": "FR"
    }
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="bg-black">
        {/* Hero avec effet parallaxe */}
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/image/Voitures_de_luxe_sous_ciel_couvert.webp"
              alt="Contact AM Motion Cars — Bureau conciergerie automobile Paris 75017"
              fill
              className="object-cover object-center brightness-[0.35]"
              priority
              sizes="100vw"
              quality={90}
            />
          </div>

          {/* Overlay gradient élégant */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

          {/* Effet de grille subtile */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
            <div className="max-w-4xl space-y-8">
              {/* Badge premium */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
                <span className="text-xs tracking-[0.3em] uppercase text-zinc-400 font-light">Contact</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
                Parlons de Votre Projet
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                Notre équipe est à votre écoute pour créer une expérience sur mesure
              </p>

              <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto mt-8" />
            </div>
          </div>

        </section>

        {/* Section principale avec design premium */}
        <section 
          className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white py-32 px-6 overflow-hidden"
          itemScope 
          itemType="https://schema.org/LocalBusiness"
        >
          {/* Background subtil */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                backgroundSize: '80px 80px'
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 lg:gap-20">
            
            {/* Colonne gauche - Informations (2/5) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* En-tête */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-8 h-px bg-zinc-700" />
                  <span className="text-xs tracking-[0.25em] uppercase text-zinc-500 font-light">Coordonnées</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Restons en Contact
                </h2>
                <p className="text-base text-gray-400 font-light leading-relaxed">
                  Disponibles 24/7 pour répondre à toutes vos demandes avec la réactivité et la discrétion qui nous caractérisent.
                </p>
              </div>

              {/* Informations de contact élégantes */}
              <div className="space-y-8">
                
                {/* Adresse */}
                <div 
                  className="group p-6 bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-500 backdrop-blur-sm"
                  itemProp="address" 
                  itemScope 
                  itemType="https://schema.org/PostalAddress"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-zinc-700 transition-colors duration-500">
                      <svg className="w-5 h-5 text-zinc-500 group-hover:text-zinc-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm tracking-[0.15em] uppercase text-zinc-500 font-light mb-2">Adresse</h3>
                      <address className="text-base text-gray-300 font-light not-italic leading-relaxed">
                        <span itemProp="streetAddress">58 Avenue de la Grande Armée</span><br />
                        <span itemProp="postalCode">75017</span> <span itemProp="addressLocality">Paris</span>, <span itemProp="addressCountry">France</span>
                      </address>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group p-6 bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-500 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-zinc-700 group-hover:bg-green-950/20 transition-all duration-500">
                      <svg className="w-5 h-5 text-zinc-500 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm tracking-[0.15em] uppercase text-zinc-500 font-light mb-2">WhatsApp</h3>
                      <a 
                        href="https://wa.me/33775775389" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        itemProp="telephone"
                        className="text-base text-gray-300 hover:text-white font-light transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        <span>+33 7 75 77 53 89</span>
                        <svg className="w-8 h-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group p-6 bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-500 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-zinc-700 transition-colors duration-500">
                      <svg className="w-5 h-5 text-zinc-500 group-hover:text-zinc-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm tracking-[0.15em] uppercase text-zinc-500 font-light mb-2">Email</h3>
                      <a 
                        href="mailto:contact@ammotioncars.com"
                        itemProp="email"
                        className="text-base text-gray-300 hover:text-white font-light transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        <span>contact@ammotioncars.com</span>
                        <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="group p-6 bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-500 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-zinc-700 transition-colors duration-500">
                      <svg className="w-5 h-5 text-zinc-500 group-hover:text-zinc-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm tracking-[0.15em] uppercase text-zinc-500 font-light mb-2">Disponibilité</h3>
                      <p className="text-base text-gray-300 font-light">
                        24h/24, 7j/7<br />
                        <span className="text-sm text-zinc-500">Réponse sous 24h maximum</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Métadonnées cachées pour SEO */}
              <div className="sr-only" itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="48.8790" />
                <meta itemProp="longitude" content="2.2890" />
              </div>
              <meta itemProp="name" content="AM Motion Cars" />
              <meta itemProp="description" content="Conciergerie automobile de luxe à Paris" />
            </div>

            {/* Colonne droite - Formulaire (3/5) */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                
                {/* En-tête formulaire */}
                <div className="mb-12 space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-8 h-px bg-zinc-700" />
                    <span className="text-xs tracking-[0.25em] uppercase text-zinc-500 font-light">Formulaire</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Envoyez-nous un Message
                  </h2>
                </div>

                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  aria-label="Formulaire de contact AM Motion Cars"
                >
                  {/* Nom & Prénom */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="nom" className="block text-sm font-light text-zinc-400 mb-3 tracking-wide">
                        Nom <span className="text-zinc-600">*</span>
                      </label>
                      <input
                        type="text" 
                        id="nom" 
                        name="nom" 
                        value={formData.nom} 
                        onChange={handleChange} 
                        required
                        autoComplete="family-name"
                        className="w-full bg-black/40 border border-zinc-800 px-5 py-4 text-white font-light focus:outline-none focus:border-zinc-600 focus:bg-black/60 transition-all duration-300 placeholder:text-zinc-700"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="prenom" className="block text-sm font-light text-zinc-400 mb-3 tracking-wide">
                        Prénom <span className="text-zinc-600">*</span>
                      </label>
                      <input
                        type="text" 
                        id="prenom" 
                        name="prenom" 
                        value={formData.prenom} 
                        onChange={handleChange} 
                        required
                        autoComplete="given-name"
                        className="w-full bg-black/40 border border-zinc-800 px-5 py-4 text-white font-light focus:outline-none focus:border-zinc-600 focus:bg-black/60 transition-all duration-300 placeholder:text-zinc-700"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>

                  {/* Email & Téléphone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-light text-zinc-400 mb-3 tracking-wide">
                        Email <span className="text-zinc-600">*</span>
                      </label>
                      <input
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                        autoComplete="email"
                        className="w-full bg-black/40 border border-zinc-800 px-5 py-4 text-white font-light focus:outline-none focus:border-zinc-600 focus:bg-black/60 transition-all duration-300 placeholder:text-zinc-700"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="telephone" className="block text-sm font-light text-zinc-400 mb-3 tracking-wide">
                        Téléphone <span className="text-zinc-600">*</span>
                      </label>
                      <input
                        type="tel" 
                        id="telephone" 
                        name="telephone" 
                        value={formData.telephone} 
                        onChange={handleChange} 
                        required
                        autoComplete="tel"
                        className="w-full bg-black/40 border border-zinc-800 px-5 py-4 text-white font-light focus:outline-none focus:border-zinc-600 focus:bg-black/60 transition-all duration-300 placeholder:text-zinc-700"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </div>

                  {/* Service & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="service" className="block text-sm font-light text-zinc-400 mb-3 tracking-wide">
                        Service souhaité <span className="text-zinc-600">*</span>
                      </label>
                      <select
                        id="service" 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange} 
                        required
                        className="w-full bg-black/40 border border-zinc-800 px-5 py-4 text-white font-light focus:outline-none focus:border-zinc-600 focus:bg-black/60 transition-all duration-300 appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 1rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em',
                          paddingRight: '2.5rem'
                        }}
                      >
                        <option value="">Sélectionnez</option>
                        <option value="Mariage">Mariage</option>
                        <option value="Événement">Événement</option>
                        <option value="Transfert VIP">Transfert VIP</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Location véhicule">Location véhicule</option>
                        <option value="Chauffeur privé">Chauffeur privé</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div className="group">
                      <label htmlFor="date" className="block text-sm font-light text-zinc-400 mb-3 tracking-wide">
                        Date souhaitée
                      </label>
                      <input
                        type="date" 
                        id="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-black/40 border border-zinc-800 px-5 py-4 text-white font-light focus:outline-none focus:border-zinc-600 focus:bg-black/60 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-light text-zinc-400 mb-3 tracking-wide">
                      Message <span className="text-zinc-600">*</span>
                    </label>
                    <textarea
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={6} 
                      required
                      minLength={10}
                      className="w-full bg-black/40 border border-zinc-800 px-5 py-4 text-white font-light focus:outline-none focus:border-zinc-600 focus:bg-black/60 transition-all duration-300 resize-none placeholder:text-zinc-700"
                      placeholder="Décrivez-nous votre projet..."
                    />
                    <p className="text-xs text-zinc-600 mt-2 font-light">Minimum 10 caractères</p>
                  </div>

                  {/* Bouton submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-white text-black py-5 font-light tracking-[0.1em] uppercase text-sm overflow-hidden transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-100"
                  >
                    <span className="relative z-10 inline-flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Envoi en cours</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>

                  {/* Messages de statut avec aria-live */}
                  <div 
                    role="status" 
                    aria-live="polite" 
                    aria-atomic="true"
                    className="min-h-[80px]"
                  >
                    {submitStatus === 'success' && (
                      <div 
                        className="p-6 bg-emerald-950/30 border border-emerald-900/50 backdrop-blur-sm animate-fadeIn"
                        role="alert"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-900/50 border border-emerald-800 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-emerald-400 font-light mb-1">Message envoyé avec succès</h3>
                            <p className="text-sm text-emerald-300/70 font-light">Nous vous répondrons dans les plus brefs délais.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div 
                        className="p-6 bg-red-950/30 border border-red-900/50 backdrop-blur-sm animate-fadeIn"
                        role="alert"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-900/50 border border-red-800 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-red-400 font-light mb-1">Erreur lors de l&apos;envoi</h3>
                            <p className="text-sm text-red-300/70 font-light">Veuillez réessayer ou nous contacter directement.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Section SEO Texte */}
        <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              Contactez AM Motion Cars pour discuter de vos besoins en conciergerie 
              automobile. Notre équipe est disponible 24/7 pour répondre à vos demandes, 
              offrir des devis gratuits et planifier votre prestation.
            </p>
            
            <p>
              Que ce soit pour une réservation urgente, une demande spécifique ou une 
              question sur nos services, nous sommes à votre écoute. Réponse garantie 
              sous 24h.
            </p>
            
            <p>
              Trois façons de nous joindre : formulaire en ligne (réponse sous 24h), 
              WhatsApp pour une demande immédiate (+33 7 75 77 53 89), ou email 
              (contact@ammotioncars.com). Situés au cœur de Paris, nous intervenons 
              dans toute l&apos;Île-de-France et au-delà selon vos besoins.
            </p>
          </div>
        </section>

        {/* Section FAQ moderne */}
        <section className="bg-black text-white py-32 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            
            {/* En-tête FAQ */}
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
                <span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-light">FAQ</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                Questions Fréquentes
              </h2>
            </div>
            
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              
              {/* FAQ Item 1 */}
              <details 
                className="group p-6 bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-300"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-light pr-4" itemProp="name">
                    Quel est le délai de réponse ?
                  </h3>
                  <svg className="w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div 
                  className="mt-4 pt-4 border-t border-zinc-900 text-gray-400 font-light leading-relaxed"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">
                    Nous nous engageons à répondre sous 24 heures maximum, 7 jours sur 7. Pour une réponse immédiate, contactez-nous via WhatsApp.
                  </p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details 
                className="group p-6 bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-300"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-light pr-4" itemProp="name">
                    Dans quelles zones intervenez-vous ?
                  </h3>
                  <svg className="w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div 
                  className="mt-4 pt-4 border-t border-zinc-900 text-gray-400 font-light leading-relaxed"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">
                    Principalement Paris et toute l&apos;Île-de-France. Pour des prestations en dehors de cette zone, contactez-nous pour étudier votre demande.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details 
                className="group p-6 bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-300"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-light pr-4" itemProp="name">
                    Les devis sont-ils gratuits ?
                  </h3>
                  <svg className="w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div 
                  className="mt-4 pt-4 border-t border-zinc-900 text-gray-400 font-light leading-relaxed"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">
                    Oui, tous nos devis sont gratuits et sans engagement. Remplissez le formulaire avec un maximum de détails pour recevoir une offre personnalisée.
                  </p>
                </div>
              </details>

            </div>
          </div>
        </section>

      </div>

      {/* Animation moved to global CSS (app/globals.css) */}
    </>
  );
}