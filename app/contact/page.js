"use client";

import React, { useState } from "react";
import Image from "next/image";
import { supabaseClient as supabase } from '@/lib/supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "", prenom: "", email: "", telephone: "",
    service: "", date: "", message: ""
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
          nom: formData.nom, prenom: formData.prenom, email: formData.email,
          telephone: formData.telephone, service: formData.service,
          date: formData.date || null, message: formData.message,
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
      setFormData({ nom: "", prenom: "", email: "", telephone: "", service: "", date: "", message: "" });
    } catch (error) {
      console.error('Erreur globale du formulaire:', error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AM Motion Cars",
    description: "Conciergerie automobile de luxe à Paris — transferts VIP, location voiture luxe, chauffeur privé.",
    telephone: "+33775775389",
    email: "contact@ammotioncars.com",
    url: "https://www.ammotioncars.com",
    priceRange: "€€€",
    openingHours: "Mo-Su 00:00-24:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "58 Avenue de la Grande Armée",
      addressLocality: "Paris",
      postalCode: "75017",
      addressCountry: "FR"
    },
    geo: { "@type": "GeoCoordinates", latitude: "48.8790", longitude: "2.2890" },
    areaServed: "Paris et Île-de-France",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de conciergerie automobile",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfert VIP aéroport Paris" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Location voiture luxe avec chauffeur" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport mariage Paris" } },
      ]
    }
  };

  const inputClass = "w-full px-0 py-3 bg-transparent border-0 border-b border-white/15 text-white text-sm font-light placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors duration-200";
  const labelClass = "block text-[9px] tracking-[0.28em] uppercase text-white/30 mb-2 font-light";

  return (
    <div className="bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── SEO caché ──────────────────────────────────────── */}
      <div className="sr-only">
        <h2>Contacter AM Motion Cars — Conciergerie automobile Paris</h2>
        <p>
          Contactez AM Motion Cars pour vos besoins en conciergerie automobile à Paris.
          Devis gratuit sous 24h. WhatsApp disponible pour réponse immédiate.
          Formulaire en ligne, email contact@ammotioncars.com, téléphone +33 7 75 77 53 89.
          Situés au 58 Avenue de la Grande Armée, Paris 75017. Interventions dans toute
          l'Île-de-France et au-delà. Transfert VIP, mariage, corporate, location voiture
          luxe Paris, chauffeur privé Paris 24h/24.
        </p>
      </div>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/RS6 faceavant.jpeg"
            alt="Contact AM Motion Cars — Conciergerie automobile Paris"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-14 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Paris · 24h/24 · 7j/7
            </p>
            <h1 className="text-[11vw] md:text-[8vw] lg:text-[6.5vw] font-light leading-none tracking-tight text-white">
              Contact
            </h1>
          </div>
          <a
            href="https://wa.me/33775775389"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start md:self-auto shrink-0 text-[11px] tracking-[0.2em] uppercase"
          >
            WhatsApp →
          </a>
        </div>
      </section>

      {/* ── INFOS + FORMULAIRE ─────────────────────────────── */}
      <section
        className="border-t border-white/8 px-8 md:px-14 py-24"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 max-w-6xl">

          {/* ── Colonne gauche — coordonnées ──────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
                Coordonnées
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                Restons en contact.
              </h2>
              <p className="text-xs font-light text-white/40 leading-relaxed max-w-xs">
                Disponibles 24h/24, 7j/7. Réponse garantie sous 24h. Pour une réponse
                immédiate, contactez-nous via WhatsApp.
              </p>
            </div>

            {/* Liste contacts */}
            <div className="flex flex-col border-t border-white/8">
              {[
                {
                  label: "Adresse",
                  value: "58 Av. de la Grande Armée, 75017 Paris",
                  href: null,
                  itemprop: "address",
                },
                {
                  label: "WhatsApp",
                  value: "+33 7 75 77 53 89",
                  href: "https://wa.me/33775775389",
                  itemprop: "telephone",
                },
                {
                  label: "Email",
                  value: "contact@ammotioncars.com",
                  href: "mailto:contact@ammotioncars.com",
                  itemprop: "email",
                },
                {
                  label: "Disponibilité",
                  value: "24h/24 · 7j/7",
                  href: null,
                  itemprop: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 py-5 border-b border-white/8">
                  <span className="text-[9px] tracking-[0.28em] uppercase text-white/25 pt-[2px] shrink-0 w-20">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      itemProp={item.itemprop}
                      className="text-xs font-light text-white/55 hover:text-white transition-colors leading-relaxed"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-xs font-light text-white/55 leading-relaxed"
                      itemProp={item.itemprop}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite — formulaire ───────────────── */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
                Formulaire
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-12">
                Envoyez-nous un message.
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-8"
                aria-label="Formulaire de contact AM Motion Cars"
              >
                {/* Nom / Prénom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="nom" className={labelClass}>Nom *</label>
                    <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required autoComplete="family-name" className={inputClass} placeholder="Dupont" />
                  </div>
                  <div>
                    <label htmlFor="prenom" className={labelClass}>Prénom *</label>
                    <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required autoComplete="given-name" className={inputClass} placeholder="Jean" />
                  </div>
                </div>

                {/* Email / Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className={inputClass} placeholder="jean@exemple.com" />
                  </div>
                  <div>
                    <label htmlFor="telephone" className={labelClass}>Téléphone *</label>
                    <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required autoComplete="tel" className={inputClass} placeholder="+33 6 12 34 56 78" />
                  </div>
                </div>

                {/* Service / Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="service" className={labelClass}>Service souhaité *</label>
                    <select
                      id="service" name="service" value={formData.service}
                      onChange={handleChange} required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/15 text-white text-sm font-light focus:outline-none focus:border-white/40 transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#060608]">Sélectionnez</option>
                      <option value="Mariage" className="bg-[#060608]">Mariage</option>
                      <option value="Événement" className="bg-[#060608]">Événements</option>
                      <option value="Transfert VIP" className="bg-[#060608]">Transfert VIP</option>
                      <option value="Corporate" className="bg-[#060608]">Corporate</option>
                      <option value="Location véhicule" className="bg-[#060608]">Location véhicule</option>
                      <option value="Chauffeur privé" className="bg-[#060608]">Chauffeur privé</option>
                      <option value="Autre" className="bg-[#060608]">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className={labelClass}>Date souhaitée</label>
                    <input
                      type="date" id="date" name="date" value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={inputClass}
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>Message *</label>
                  <textarea
                    id="message" name="message" value={formData.message}
                    onChange={handleChange} rows={5} required minLength={10}
                    className={`${inputClass} resize-none`}
                    placeholder="Décrivez votre projet..."
                  />
                  <p className="text-[9px] tracking-[0.15em] text-white/20 mt-2">Minimum 10 caractères</p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-[#060608] text-[10px] font-light tracking-[0.25em] uppercase transition-colors hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border border-[#060608]/30 border-t-[#060608]/80 rounded-full animate-spin" />
                      <span>Envoi en cours</span>
                    </>
                  ) : (
                    <span>Envoyer le message</span>
                  )}
                </button>

                {/* Feedback */}
                <div role="status" aria-live="polite" aria-atomic="true">
                  {submitStatus === 'success' && (
                    <div className="px-5 py-4 border border-white/15 bg-white/5 animate-fadeIn" role="alert">
                      <p className="text-xs font-light text-white/70 tracking-wide">
                        Message envoyé — nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="px-5 py-4 border border-white/15 bg-white/5 animate-fadeIn" role="alert">
                      <p className="text-xs font-light text-white/50 tracking-wide">
                        Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEXTE SEO visible ──────────────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 max-w-5xl">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
              Nous joindre
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-snug">
              Trois façons<br />
              <span className="text-white/30">de nous contacter.</span>
            </h2>
          </div>
          <div className="flex flex-col border-t border-white/8">
            {[
              {
                title: "Formulaire en ligne",
                desc: "Remplissez le formulaire avec vos détails — service, date, nombre de passagers. Réponse personnalisée sous 24h.",
              },
              {
                title: "WhatsApp",
                desc: "Pour une réponse immédiate : +33 7 75 77 53 89. Idéal pour les demandes urgentes ou de dernière minute.",
              },
              {
                title: "Email",
                desc: "contact@ammotioncars.com — pour les demandes détaillées, devis complexes ou contrats longue durée.",
              },
            ].map((item, i) => (
              <div key={i} className="group flex items-start gap-8 py-8 border-b border-white/8 hover:border-white/20 transition-colors duration-300">
                <span className="text-[10px] tracking-[0.2em] text-white/15 pt-[3px] shrink-0 tabular-nums group-hover:text-white/30 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-light text-white mb-2">{item.title}</p>
                  <p className="text-xs font-light text-white/35 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-20" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-14">Questions fréquentes.</h2>

          <div className="border-t border-white/8">
            {[
              {
                q: "Quel est le délai de réponse ?",
                a: "Nous répondons sous 24h maximum, 7j/7. Pour une réponse immédiate, contactez-nous via WhatsApp au +33 7 75 77 53 89.",
              },
              {
                q: "Dans quelles zones intervenez-vous ?",
                a: "Paris et toute l'Île-de-France en priorité. Pour des prestations en dehors de cette zone (province, Europe), contactez-nous pour étudier votre demande.",
              },
              {
                q: "Les devis sont-ils gratuits ?",
                a: "Oui, tous nos devis sont gratuits et sans engagement. Précisez le service, la date et vos exigences pour recevoir une offre personnalisée.",
              },
              {
                q: "Comment accélérer le traitement de ma demande ?",
                a: "Précisez dès le départ : type de service, date, nombre de passagers et niveau de prestation. Vous recevrez une proposition claire et adaptée.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group border-b border-white/8 hover:border-white/20 transition-colors duration-300"
                itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                  <h3 className="text-sm font-light text-white/70 group-hover:text-white transition-colors pr-8 leading-relaxed" itemProp="name">
                    {item.q}
                  </h3>
                  <span className="text-white/25 group-hover:text-white/60 transition-colors text-lg font-light shrink-0 group-open:rotate-45 duration-300 inline-block">
                    +
                  </span>
                </summary>
                <div
                  className="pb-6 text-xs font-light text-white/40 leading-relaxed"
                  itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}