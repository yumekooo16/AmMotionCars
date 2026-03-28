import React from "react";
import Link from "next/link";
import Image from "next/image";
import { defaultOgImage } from "../seo";

export const metadata = {
  title: "À propos — Conciergerie automobile de luxe Paris | AM Motion Cars",
  description:
    "Découvrez l'histoire, les valeurs et l'expertise d'AM Motion Cars, conciergerie automobile premium à Paris. Chauffeurs professionnels, flotte de prestige, service 24h/24 en Île-de-France.",
  keywords: [
    "à propos conciergerie automobile Paris",
    "AM Motion Cars histoire",
    "équipe chauffeur privé Paris",
    "conciergerie automobile luxe Paris",
    "chauffeurs professionnels Paris luxe",
    "valeurs AM Motion Cars",
    "location voiture prestige Paris histoire",
    "conciergerie automobile Île-de-France",
  ],
  authors: [{ name: "AM Motion Cars" }],
  creator: "AM Motion Cars",
  publisher: "AM Motion Cars",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://www.ammotioncars.com/a-propos" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AM Motion Cars",
    title: "À propos | AM Motion Cars — Conciergerie automobile Paris",
    description:
      "Histoire, valeurs et expertise d'AM Motion Cars. Conciergerie automobile premium à Paris — chauffeurs formés au luxe, flotte de prestige, disponibilité 24h/24.",
    url: "https://www.ammotioncars.com/a-propos",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | AM Motion Cars Paris",
    description:
      "Histoire, valeurs et expertise d'AM Motion Cars, conciergerie automobile premium à Paris.",
    images: [defaultOgImage.url],
  },
  category: "Conciergerie automobile",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function Apropos() {
  const aproposSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AM Motion Cars",
    url: "https://www.ammotioncars.com",
    description:
      "Conciergerie automobile de luxe à Paris. Transferts VIP, location voiture prestige, chauffeur privé en Île-de-France.",
    areaServed: "Paris et Île-de-France",
    foundingLocation: { "@type": "Place", name: "Paris, France" },
    knowsAbout: [
      "Conciergerie automobile",
      "Location voiture luxe",
      "Chauffeur privé",
      "Transferts VIP",
    ],
  };

  return (
    <div className="bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aproposSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/rs3xA35.jpeg"
            alt="AM Motion Cars — Conciergerie automobile de luxe Paris"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-14 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Notre histoire
            </p>
            <h1 className="text-[11vw] md:text-[8vw] lg:text-[6.5vw] font-light leading-none tracking-tight text-white">
              À propos
            </h1>
          </div>
          <Link
            href="/contact"
            className="btn-primary self-start md:self-auto shrink-0 text-[11px] tracking-[0.2em] uppercase"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      {/* ── INTRO — split texte sobre ─────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 max-w-5xl">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
              Qui sommes-nous
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-snug">
              L'essence<br />
              <span className="text-white/30">d'AM Motion Cars.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-sm font-light text-white/50 leading-relaxed">
            <p>
              Fondée à Paris, AM Motion Cars est une conciergerie automobile de luxe
              spécialisée dans les services haut de gamme. Depuis nos débuts, nous avons
              bâti notre réputation sur trois piliers : excellence, discrétion, élégance.
            </p>
            <p>
              Notre expertise repose sur une flotte de véhicules de prestige régulièrement
              renouvelée — Mercedes, Audi, BMW — et une équipe de chauffeurs professionnels
              formés aux standards du luxe. Chaque prestation est pensée pour dépasser les
              attentes de nos clients les plus exigeants.
            </p>
            <p>
              Implantée au cœur de Paris et rayonnant sur toute l'Île-de-France, nous
              accompagnons particuliers et entreprises dans leurs déplacements d'exception :
              transferts VIP, mariages, séminaires, missions confidentielles.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 VALEURS — liste numérotée ───────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-20">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Nos valeurs
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-14">
            Ce qui nous définit.
          </h2>

          <div className="flex flex-col border-t border-white/8">
            {[
              {
                title: "Élégance",
                desc: "Chaque détail compte, du design des véhicules à la présentation de nos chauffeurs. L'esthétique est au cœur de chaque prestation.",
              },
              {
                title: "Discrétion",
                desc: "Des services confidentiels et raffinés pour chaque client. Vos déplacements restent vos affaires — nous n'en disons pas plus.",
              },
              {
                title: "Excellence",
                desc: "De la préparation du véhicule à l'accueil de nos passagers, rien n'est laissé au hasard. Chaque mission est traitée avec la même rigueur.",
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

      {/* ── VISION — texte SEO visible ────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 max-w-5xl">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
              Notre vision
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-snug">
              La conciergerie automobile<br />
              <span className="text-white/30">réinventée.</span>
            </h2>
            <Link
              href="/services"
              className="inline-flex mt-10 text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px]"
            >
              Découvrir nos services →
            </Link>
          </div>

          <div className="flex flex-col gap-6 text-sm font-light text-white/50 leading-relaxed">
            <p>
              AM Motion Cars a été créée à Paris avec une ambition simple : proposer une
              conciergerie automobile premium, à la fois élégante, fiable et humaine. Nous
              accompagnons une clientèle exigeante dans ses déplacements privés et
              professionnels, en garantissant ponctualité, discrétion et qualité de service
              à chaque mission.
            </p>
            <p>
              Notre différence repose sur l'association de trois expertises : sélection de
              véhicules de prestige, chauffeurs expérimentés et coordination logistique
              rigoureuse. Cette méthode nous permet d'offrir une expérience fluide, aussi
              bien pour un transfert VIP ponctuel que pour l'organisation complète d'un
              événement ou d'un déplacement corporate.
            </p>
            <p>
              Implantés au cœur de l'Île-de-France, nous adaptons nos prestations à vos
              contraintes de planning et à vos exigences de confort. Notre engagement reste
              constant : faire de chaque trajet un moment maîtrisé, serein et cohérent avec
              les standards du luxe.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
            Travailler ensemble
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] mb-10">
            Découvrez l'expérience{" "}
            <span className="text-white/30">AM Motion Cars.</span>
          </h2>
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="btn-primary text-[11px] tracking-[0.2em] uppercase"
            >
              Nous contacter
            </Link>
            <Link
              href="/services"
              className="text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px]"
            >
              Nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}