'use client';

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const Mercedes = dynamic(() => import("@/components/nos-packs/pack.js"), {
  loading: () => <div className="h-96 bg-[#050505]" />,
  ssr: false,
});

export default function Tarifs() {
  const packsSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Packs AM Motion Cars",
    description: "Packs de conciergerie automobile premium à Paris pour mariages, événements corporate et occasions spéciales.",
    url: "https://www.ammotioncars.com/nos-packs",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Pack Mariage",
        description: "Transfert mariés, navettes invités, véhicules de prestige pour votre mariage à Paris.",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "AM Motion Cars" },
      },
      {
        "@type": "Offer",
        name: "Pack Corporate",
        description: "Mise à disposition flotte, transferts participants, chauffeurs dédiés pour entreprises à Paris.",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "AM Motion Cars" },
      },
      {
        "@type": "Offer",
        name: "Pack Événements",
        description: "Location voiture de luxe, coordination logistique et service premium pour événements à Paris.",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "AM Motion Cars" },
      },
    ],
  };

  return (
    <div className="bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packsSchema) }}
      />

      {/* ── SEO caché ─────────────────────────────────────── */}
      <div className="sr-only">
        <h2>Nos packs de conciergerie automobile à Paris</h2>
        <p>
          AM Motion Cars propose des packs sur mesure pour tous vos événements à Paris
          et en Île-de-France. Pack Mariage : transfert des mariés, navettes invités,
          séance photo avec véhicules de prestige. Pack Corporate : mise à disposition
          de flotte, transferts participants, chauffeurs dédiés pour séminaires et
          réceptions. Pack Événements : location voiture de luxe, coordination logistique
          complète, service premium 24h/24. Chaque pack inclut véhicules récents
          entretenus, chauffeurs professionnels formés aux standards du luxe,
          assurance tous risques et assistance 7j/7. Mercedes, Audi, Porsche, BMW.
          Pack mariage voiture luxe Paris, pack corporate chauffeur privé Paris,
          packs conciergerie automobile Paris.
        </p>
      </div>

      {/* ── HERO — split texte / image ─────────────────────
          Volontairement différent des autres pages (pas de
          plein écran) pour éviter la répétition visuelle.
          On pose le titre fort sur fond noir à gauche,
          la photo occupe la droite.
      ──────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Colonne gauche — texte */}
        <div className="flex flex-col justify-end px-8 md:px-14 pb-14 md:pb-20 pt-32 bg-[#050505] order-2 lg:order-1">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
            Conciergerie automobile · Paris
          </p>
          <h1 className="text-[13vw] lg:text-[7vw] font-light leading-none tracking-tight text-white mb-8">
            Nos<br />packs
          </h1>
          <p className="text-sm font-light text-white/45 max-w-sm leading-relaxed mb-10">
            Mariage, corporate, événements — des formules pensées pour chaque occasion,
            orchestrées avec la même exigence.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="btn-primary text-[11px] tracking-[0.2em] uppercase"
            >
              Demander un devis
            </Link>
            <a
              href="#packs"
              className="text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px]"
            >
              Voir les formules
            </a>
          </div>
        </div>

        {/* Colonne droite — image */}
        <div className="relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2">
          <Image
            src="/image/interieurRS6.jpeg"
            alt="Intérieur Mercedes G43 — Pack conciergerie automobile Paris AM Motion Cars"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden" />
        </div>
      </section>

      {/* ── 3 PACKS — présentation sobre ─────────────────── */}
      <section id="packs" className="border-t border-white/8 px-8 md:px-14 py-20">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
              Nos formules
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Choisissez votre pack
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
          {[
            {
              name: "Pack Mariage",
              tag: "Cérémonie & réception",
              items: [
                "Transfert des mariés",
                "Navettes invités",
                "Séance photo véhicule",
                "Chauffeur en tenue",
                "Coordination logistique",
              ],
            },
            {
              name: "Pack Corporate",
              tag: "Entreprises & dirigeants",
              items: [
                "Mise à disposition journée",
                "Transferts participants",
                "Chauffeur dédié",
                "Flotte multi-véhicules",
                "Facturation entreprise",
              ],
              featured: true,
            },
            {
              name: "Pack Événements",
              tag: "Galas & occasions privées",
              items: [
                "Location véhicule luxe",
                "Coordination complète",
                "Service 24h/24",
                "Itinéraire sur mesure",
                "Assistance dédiée",
              ],
            },
          ].map((pack, i) => (
            <div
              key={i}
              className={`flex flex-col px-8 py-10 ${
                pack.featured
                  ? "bg-[#111116]"
                  : "bg-[#0c0c0e]"
              }`}
            >
              {pack.featured && (
                <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 border border-white/15 px-3 py-1 w-fit mb-6">
                  Le plus demandé
                </span>
              )}
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2">
                {pack.tag}
              </p>
              <h3 className="text-xl font-light text-white mb-8">
                {pack.name}
              </h3>

              <ul className="flex flex-col gap-4 flex-1">
                {pack.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-px h-3 bg-white/20 mt-1 shrink-0 self-start" />
                    <span className="text-xs font-light text-white/50 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-10 text-[10px] tracking-[0.25em] uppercase text-white/35 hover:text-white transition-colors border-b border-white/10 hover:border-white/35 pb-[2px] w-fit"
              >
                Demander un devis →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPOSANT VÉHICULES ───────────────────────────── */}
      <section className="border-t border-white/8">
        <div className="px-8 md:px-14 pt-16 pb-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Inclus dans chaque pack
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Des véhicules d'exception
          </h2>
        </div>
        <Mercedes />
      </section>

      {/* ── CE QUI EST TOUJOURS INCLUS ────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-20">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Nos engagements
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-14">
            Inclus dans chaque formule.
          </h2>

          <div className="flex flex-col border-t border-white/8">
            {[
              {
                title: "Véhicules récents et entretenus",
                desc: "Chaque voiture est inspectée et préparée avant chaque mission. Aucun compromis.",
              },
              {
                title: "Chauffeurs professionnels",
                desc: "Formés aux standards du luxe. Discrets, ponctuels, parfaite connaissance de Paris.",
              },
              {
                title: "Assurance tous risques & assistance",
                desc: "Couverture complète sur chaque prestation. Joignable 24h/24, 7j/7.",
              },
              {
                title: "Personnalisation selon vos envies",
                desc: "Chaque pack est adaptable. Nous construisons la prestation avec vous, en amont.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-8 py-8 border-b border-white/8"
              >
                <span className="text-[10px] tracking-[0.2em] text-white/20 pt-1 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-light text-white mb-1">{item.title}</p>
                  <p className="text-xs font-light text-white/40 leading-relaxed">{item.desc}</p>
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
            Obtenir un devis
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] mb-10">
            Un pack sur mesure,{" "}
            <span className="text-white/30">pensé pour vous.</span>
          </h2>
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="btn-primary text-[11px] tracking-[0.2em] uppercase"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/services"
              className="text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px]"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}