import React from "react";
import Link from "next/link";
import { defaultOgImage } from "@/app/seo";

export const metadata = {
  title: "Politique de confidentialité — AM Motion Cars",
  description:
    "Politique de confidentialité d'AM Motion Cars : données collectées, finalités, durée de conservation et droits RGPD.",
  keywords: [
    "politique confidentialité AM Motion Cars",
    "RGPD conciergerie automobile Paris",
    "données personnelles AM Motion Cars",
  ],
  alternates: { canonical: "/pages/politique-confidentialite" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AM Motion Cars",
    title: "Politique de confidentialité | AM Motion Cars",
    description: "Traitement des données personnelles et droits RGPD chez AM Motion Cars.",
    url: "/pages/politique-confidentialite",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de confidentialité | AM Motion Cars",
    description: "Traitement des données personnelles et droits RGPD chez AM Motion Cars.",
    images: [defaultOgImage.url],
  },
};

const sections = [
  {
    num: "01",
    title: "Responsable du traitement",
    content: [
      { label: "Société", value: "AM Motion Cars" },
      { label: "Siège social", value: "58-60 Avenue de la Grande Armée, 75017 Paris" },
      { label: "Email RGPD", value: "contact@ammotioncars.com", href: "mailto:contact@ammotioncars.com" },
      { label: "Téléphone", value: "+33 7 75 77 53 89" },
    ],
  },
  {
    num: "02",
    title: "Données collectées",
    text: `Nous collectons uniquement les données strictement nécessaires à la réservation et à la gestion de nos services :

— Nom et prénom
— Adresse email
— Numéro de téléphone
— Dates de réservation souhaitées
— Lieu de prise en charge et destination
— Informations liées à votre demande (véhicule, service, message)
— Date et heure de votre consentement`,
  },
  {
    num: "03",
    title: "Base légale & finalités",
    text: `Base légale : votre consentement explicite, recueilli via la case à cocher lors de la soumission du formulaire, et l'exécution du contrat de prestation de service.

Finalités du traitement :
— Traiter vos demandes de réservation
— Vous contacter pour organiser votre trajet
— Assurer le bon déroulement du service
— Répondre à vos questions

Vos données ne sont jamais revendues à des tiers.`,
  },
  {
    num: "04",
    title: "Durée de conservation",
    text: `Conformément aux recommandations de la CNIL, vos données personnelles sont conservées pendant 3 ans à compter de votre dernière interaction avec nos services (dernière réservation ou dernier contact).

Au-delà de cette période, vos données sont automatiquement supprimées ou anonymisées.`,
  },
  {
    num: "05",
    title: "Sécurité & stockage",
    content: [
      { label: "Plateforme", value: "Supabase (serveurs sécurisés, conformité RGPD)" },
      { label: "Transit", value: "Chiffrement HTTPS sur l'ensemble des échanges" },
      { label: "Accès", value: "Principe du moindre privilège — accès restreint aux données" },
      { label: "Sauvegardes", value: "Sauvegardes régulières et automatisées" },
    ],
  },
  {
    num: "06",
    title: "Vos droits RGPD",
    text: `Conformément au RGPD (UE 2016/679), vous disposez des droits suivants :

— Droit d'accès : obtenir une copie de vos données
— Droit de rectification : corriger des données inexactes
— Droit à l'effacement : supprimer vos données (« droit à l'oubli »)
— Droit à la portabilité : recevoir vos données dans un format structuré
— Droit d'opposition : vous opposer au traitement
— Droit de retrait du consentement : à tout moment, sans effet rétroactif

Pour exercer vos droits : contact@ammotioncars.com
Délai de réponse garanti : 30 jours maximum.`,
  },
  {
    num: "07",
    title: "Hébergement",
    content: [
      { label: "Site internet", value: "www.ammotioncars.com" },
      { label: "Hébergeur site", value: "Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, USA" },
      { label: "Hébergeur données", value: "Supabase — serveurs conformes RGPD" },
    ],
  },
  {
    num: "08",
    title: "Cookies",
    text: `Ce site utilise des cookies uniquement à des fins techniques (fonctionnement du site) et statistiques (analyse anonymisée de la fréquentation).

Aucun cookie publicitaire ou de tracking tiers n'est utilisé. Vous pouvez configurer votre navigateur pour les refuser, mais certaines fonctionnalités pourraient être limitées.`,
  },
  {
    num: "09",
    title: "Modifications",
    text: `Nous nous réservons le droit de modifier cette politique à tout moment. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.

Dernière mise à jour : décembre 2025.`,
  },
  {
    num: "10",
    title: "Réclamation — CNIL",
    content: [
      { label: "Organisme", value: "Commission Nationale de l'Informatique et des Libertés (CNIL)" },
      { label: "Adresse", value: "3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07" },
      { label: "Site web", value: "www.cnil.fr", href: "https://www.cnil.fr" },
    ],
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-[#050505] min-h-screen" suppressHydrationWarning>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="mt-20 pt-40 pb-20 px-8 md:px-14 border-b border-white/8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
          Protection des données
        </p>
        <h1 className="text-4xl md:text-6xl font-light text-white leading-none tracking-tight">
          Politique de<br />confidentialité
        </h1>
        <p className="text-xs font-light text-white/30 mt-6 max-w-lg leading-relaxed">
          La protection de vos données personnelles est une priorité pour AM Motion Cars.
          Cette politique explique comment nous collectons, utilisons et protégeons vos
          informations conformément au RGPD.
        </p>
      </section>

      {/* ── CONTENU ──────────────────────────────────────── */}
      <section className="px-8 md:px-14 py-20 max-w-4xl">
        <div className="flex flex-col gap-0">
          {sections.map((section, i) => (
            <article key={i} className="border-b border-white/8 py-14">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">

                {/* Titre */}
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white/25 block mb-2">
                    {section.num}
                  </span>
                  <h2 className="text-base font-light text-white leading-snug">
                    {section.title}
                  </h2>
                </div>

                {/* Contenu */}
                <div className="lg:col-span-2">
                  {section.content && (
                    <div className="flex flex-col">
                      {section.content.map((item, j) => (
                        <div key={j} className="flex items-start gap-6 py-3 border-b border-white/6 last:border-b-0">
                          <span className="text-[10px] tracking-[0.12em] uppercase text-white/25 shrink-0 w-36 pt-[1px]">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-xs font-light text-white/55 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[1px]"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-xs font-light text-white/55 leading-relaxed">
                              {item.value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {section.text && (
                    <div className="flex flex-col gap-4">
                      {section.text.split("\n\n").map((para, j) => (
                        <p key={j} className="text-xs font-light text-white/45 leading-relaxed whitespace-pre-line">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FOOTER NAV ───────────────────────────────────── */}
      <section className="px-8 md:px-14 py-16 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-[9px] tracking-[0.2em] uppercase text-white/20">
          Dernière mise à jour — décembre 2025
        </p>
        <div className="flex items-center gap-8">
          <Link
            href="/pages/mentions-legales"
            className="text-[10px] tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[1px]"
          >
            Mentions légales
          </Link>
          <Link
            href="/"
            className="text-[10px] tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[1px]"
          >
            CGU
          </Link>
          <Link
            href="/"
            className="text-[10px] tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[1px]"
          >
            Accueil
          </Link>
          
        </div>
      </section>

    </div>
  );
}