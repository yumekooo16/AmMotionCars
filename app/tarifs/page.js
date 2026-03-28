'use client';

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const Mercedes = dynamic(() => import("@/components/Tarifs/vehicules"), {
  loading: () => <div className="h-96 bg-[#050505]" />,
  ssr: false,
});

export default function Tarifs() {
  const vehiclesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Flotte de véhicules premium AM Motion Cars Paris",
    description: "Véhicules de prestige disponibles à la location avec chauffeur privé à Paris et en Île-de-France.",
    url: "https://www.ammotioncars.com/tarifs",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Car",
          name: "Mercedes Classe S",
          description: "Berline de luxe avec chauffeur privé à Paris",
          offers: {
            "@type": "Offer",
            seller: { "@type": "Organization", name: "AM Motion Cars" },
            areaServed: "Paris et Île-de-France",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Car",
          name: "Audi RS6 Performance",
          description: "Break de prestige avec chauffeur à Paris",
          offers: {
            "@type": "Offer",
            seller: { "@type": "Organization", name: "AM Motion Cars" },
            areaServed: "Paris et Île-de-France",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Car",
          name: "Mercedes G63 AMG",
          description: "SUV haut de gamme avec chauffeur à Paris",
          offers: {
            "@type": "Offer",
            seller: { "@type": "Organization", name: "AM Motion Cars" },
            areaServed: "Paris et Île-de-France",
          },
        },
      },
    ],
  };

  return (
    <div className="bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehiclesSchema) }}
      />

      {/* ── SEO caché ─────────────────────────────────────── */}
      <div className="sr-only">
        <h2>Tarifs de conciergerie automobile à Paris</h2>
        <p>
          AM Motion Cars propose des tarifs transparents pour la location de véhicules
          de luxe avec chauffeur privé à Paris et en Île-de-France. Pas de frais cachés —
          chaque devis est personnalisé selon votre projet, le véhicule souhaité et la durée.
          Mercedes Classe S, Audi RS6, BMW M-Series, Porsche 911, Mercedes G63 AMG.
          Transferts aéroport CDG, Orly, Le Bourget. Forfaits préférentiels pour clients
          réguliers et contrats longue durée. Tarifs conciergerie automobile Paris,
          prix location voiture luxe Paris, chauffeur privé Paris tarifs,
          transfert VIP Paris prix, conciergerie automobile Île-de-France 24h/24.
        </p>
      </div>

      {/* ── HERO — plein écran, même logique que home ──────── */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/postem3.jpeg"
            alt="Notre flotte — Conciergerie automobile Paris AM Motion Cars"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-14 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Paris · Île-de-France · 24h/24
            </p>
            <h1 className="text-[11vw] md:text-[8vw] lg:text-[6.5vw] font-light leading-none tracking-tight text-white">
              Notre flotte
            </h1>
          </div>
          <Link
            href="/contact"
            className="btn-primary self-start md:self-auto shrink-0 text-[11px] tracking-[0.2em] uppercase"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      

      {/* ── COMPOSANT VÉHICULES ───────────────────────────── */}
      <section className="border-t border-white/8">
        <div className="px-8 md:px-14 pt-16 pb-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Sélectionnez votre véhicule
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Tarifs par véhicule
          </h2>
        </div>
        <Mercedes />
      </section>

      {/* ── INFOS TARIFAIRES — numérotées ─────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl">

    {/* Colonne gauche — titre fixe */}
    <div className="lg:sticky lg:top-32 lg:self-start">
      <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
        Comment ça fonctionne
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-white leading-snug">
        Une tarification simple,<br />
        <span className="text-white/30">sans surprise.</span>
      </h2>
      <p className="text-xs font-light text-white/30 leading-relaxed mt-6 max-w-xs">
        Chaque devis est personnalisé selon votre projet. Aucun frais caché, 
        assurance et carburant inclus dans chaque prestation.
      </p>
      <Link
        href="/contact"
        className="inline-flex mt-10 text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px]"
      >
        Demander un devis gratuit
      </Link>
    </div>

    {/* Colonne droite — liste */}
    <div className="flex flex-col border-t border-white/8">
      {[
        {
          title: "Location avec chauffeur privé",
          desc: "Tarifs flexibles selon la durée et le véhicule. Forfaits préférentiels pour clients réguliers et contrats longue durée.",
        },
        {
          title: "Transferts aéroports Paris",
          desc: "CDG, Orly, Le Bourget — tarifs fixes par destination. Suivi de vol inclus, pas de supplément en cas de retard.",
        },
        {
          title: "Mise à disposition",
          desc: "À l'heure ou à la journée. Idéal pour séminaires, événements corporate et déplacements professionnels intensifs.",
        },
        {
          title: "Devis personnalisé gratuit",
          desc: "Pour les prestations spécifiques (mariages, tournages, longue distance), notre équipe construit une offre sur mesure.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group flex items-start gap-8 py-8 border-b border-white/8 hover:border-white/20 transition-colors duration-300"
        >
          <span className="text-[10px] tracking-[0.2em] text-white/15 pt-[3px] shrink-0 tabular-nums group-hover:text-white/30 transition-colors duration-300">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="text-sm font-light text-white mb-2 group-hover:text-white transition-colors duration-300">
              {item.title}
            </p>
            <p className="text-xs font-light text-white/35 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

    </div>
  );
}