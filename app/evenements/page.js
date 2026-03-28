'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const VehiculesEvenements = dynamic(() => import("@/components/evenements/evenement.js"), {
  loading: () => (
    <div className="flex justify-center items-center py-20">
      <div className="w-5 h-5 border border-white/20 border-t-white/60 rounded-full animate-spin" />
    </div>
  ),
  ssr: false,
});

export default function PacksEvenements() {
  const evenementsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Evenements et mariages premium",
    provider: {
      "@type": "Organization",
      name: "AM Motion Cars",
      url: "https://www.ammotioncars.com",
    },
    areaServed: "Paris et Ile-de-France",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations evenementielles",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport mariage avec chauffeur" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Navettes invites et corporate" } },
      ],
    },
  };

  return (
    <div className="bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(evenementsSchema) }}
      />

      {/* ── SEO caché ─────────────────────────────────────── */}
      <div className="sr-only">
        <h2>Événements et mariages — Conciergerie automobile Paris</h2>
        <p>
          AM Motion Cars accompagne vos mariages, soirées privées et événements
          professionnels avec une conciergerie automobile haut de gamme à Paris.
          Planification complète, coordination des horaires, transfert des invités,
          mise à disposition de véhicules premium avec chauffeur. Solutions sur mesure
          en Île-de-France, devis clair et accompagnement personnalisé. Transport
          mariage avec chauffeur Paris, navettes invités corporate, conciergerie
          automobile événementielle Paris 24h/24.
        </p>
      </div>

      {/* ── HERO — même logique que toutes les autres pages ── */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/interieurgt45.jpeg"
            alt="Événements et mariages — Conciergerie automobile Paris AM Motion Cars"
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
              Conciergerie automobile · Paris
            </p>
            <h1 className="text-[11vw] md:text-[8vw] lg:text-[6.5vw] font-light leading-none tracking-tight text-white">
              Événements<br />&amp; Mariages
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

      {/* ── 3 ENGAGEMENTS ─────────────────────────────────── */}
      <section className="border-t border-white/8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Prestations sur mesure",
              desc: "Chaque événement est unique. Nous construisons la prestation avec vous, en amont, selon votre planning.",
            },
            {
              num: "02",
              title: "Disponibilité 24h/24",
              desc: "Un interlocuteur dédié, joignable à tout moment, du premier contact jusqu'au dernier trajet.",
            },
            {
              num: "03",
              title: "Excellence garantie",
              desc: "Chauffeurs professionnels formés au luxe. Véhicules inspectés et préparés avant chaque mission.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="px-10 py-14 border-b md:border-b-0 md:border-r border-white/8 last:border-r-0 flex flex-col gap-5"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">{item.num}</span>
              <div>
                <h2 className="text-base font-light text-white mb-2">{item.title}</h2>
                <p className="text-xs font-light leading-relaxed text-white/40">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FLOTTE ÉVÉNEMENTIELLE ─────────────────────────── */}
      <section className="border-t border-white/8">
        <div className="px-8 md:px-14 pt-20 pb-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Sélectionnez votre véhicule
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Notre flotte pour vos événements
          </h2>
        </div>
        <div className="px-8 md:px-14 pb-20 pt-10">
          <VehiculesEvenements />
        </div>
      </section>

      {/* ── COMMENT ÇA FONCTIONNE ─────────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
              Notre approche
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-snug">
              Un service fluide,<br />
              <span className="text-white/30">du début à la fin.</span>
            </h2>
            <p className="text-xs font-light text-white/30 leading-relaxed mt-6 max-w-xs">
              Nous planifions chaque étape avec vous : accueil, coordination des horaires,
              transfert des invités et mise à disposition de véhicules avec chauffeur.
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-10 text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px]"
            >
              Organiser mon événement →
            </Link>
          </div>

          <div className="flex flex-col border-t border-white/8">
            {[
              {
                title: "Prise en charge complète",
                desc: "Accueil, coordination des horaires, transferts des invités — nous gérons la logistique pour vous.",
              },
              {
                title: "Mariages & cérémonies",
                desc: "Transfert des mariés, navettes invités, shooting photo. Un interlocuteur unique le jour J.",
              },
              {
                title: "Galas & soirées privées",
                desc: "Arrivées VIP, remises de prix, dîners de prestige — chaque entrée devient un moment marquant.",
              },
              {
                title: "Corporate & séminaires",
                desc: "Accueil dirigeants, flotte multi-véhicules, facturation entreprise. Discrétion absolue.",
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
                  <p className="text-sm font-light text-white mb-2">{item.title}</p>
                  <p className="text-xs font-light text-white/35 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
            Organiser votre événement
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] mb-4">
            Votre événement,{" "}
            <span className="text-white/30">notre excellence.</span>
          </h2>
          <p className="text-xs font-light text-white/30 leading-relaxed mb-10 max-w-sm">
            Notre équipe est disponible pour organiser votre événement à Paris et en
            Île-de-France. Devis gratuit, réponse rapide.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="/contact"
              className="btn-primary text-[11px] tracking-[0.2em] uppercase"
            >
              Demander un devis
            </Link>
            <Link
              href="/services"
              className="text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px]"
            >
              Voir nos services
            </Link>
          </div>
          <div className="mt-10 pt-8 border-t border-white/8">
            <p className="text-xs font-light text-white/25">
              Besoin d'une réponse rapide ?{" "}
              <a
                href="tel:+33775775389"
                className="text-white/45 hover:text-white transition-colors border-b border-white/15 hover:border-white/30 pb-[1px]"
              >
                07 75 77 53 89
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}