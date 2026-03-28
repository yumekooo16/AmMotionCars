import React from "react";
import Link from "next/link";
import { defaultOgImage } from "@/app/seo";

export const metadata = {
  title: "Mentions légales — AM Motion Cars",
  description:
    "Mentions légales d'AM Motion Cars : éditeur, hébergement, propriété intellectuelle, protection des données et informations réglementaires.",
  keywords: [
    "mentions légales AM Motion Cars",
    "éditeur site conciergerie automobile",
    "informations légales AM Motion Cars",
  ],
  alternates: { canonical: "/pages/mentions-legales" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AM Motion Cars",
    title: "Mentions légales | AM Motion Cars",
    description: "Informations légales et réglementaires du site AM Motion Cars.",
    url: "/pages/mentions-legales",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions légales | AM Motion Cars",
    description: "Informations légales et réglementaires du site AM Motion Cars.",
    images: [defaultOgImage.url],
  },
};

const sections = [
  {
    title: "Éditeur du site",
    content: [
      { label: "Raison sociale", value: "AM MOTION CARS" },
      { label: "Forme juridique", value: "SAS (Société par actions simplifiée)" },
      { label: "Siège social", value: "58-60 Avenue de la Grande Armée, 75017 Paris" },
      { label: "SIREN", value: "988 109 518" },
      { label: "SIRET (siège)", value: "988 109 518 00015" },
      { label: "Capital social", value: "2 500,00 €" },
      { label: "Activité principale", value: "Location de longue et courte durée de voitures et véhicules légers (NAF 77.11A)" },
      { label: "Immatriculation RCS", value: "Paris — 01 juillet 2025" },
      { label: "Email", value: "contact@ammotioncars.com" },
      { label: "Téléphone", value: "+33 7 75 77 53 89" },
    ],
  },
  {
    title: "Directeur de publication",
    content: [
      { label: "Directeur", value: "Alexis Carlos Alexandre Fardilha (Président)" },
      { label: "Qualité", value: "Représentant légal de la société AM MOTION CARS" },
    ],
  },
  {
    title: "Hébergement",
    content: [
      { label: "Site internet", value: "www.ammotioncars.com" },
      { label: "Hébergeur", value: "Vercel Inc." },
      { label: "Adresse", value: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis" },
      { label: "Site web", value: "https://vercel.com", href: "https://vercel.com" },
    ],
  },
  {
    title: "Propriété intellectuelle",
    text: `L'ensemble du contenu de ce site — textes, graphismes, logotypes, icônes, images, clips audio ou vidéo — est la propriété exclusive d'AM Motion Cars ou de ses partenaires et est protégé par les lois françaises et internationales relatives au droit d'auteur et à la propriété intellectuelle.

Toutes les photographies présentes sur ce site ont été réalisées pour le compte d'AM Motion Cars et lui appartiennent exclusivement. Elles ne peuvent en aucun cas être reproduites, utilisées, modifiées, distribuées ou transmises, intégralement ou partiellement, sur quelque support que ce soit, sans l'autorisation écrite préalable d'AM Motion Cars.

Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site et de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, sans l'autorisation expresse d'AM Motion Cars est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.`,
  },
  {
    title: "Responsabilité",
    text: `AM Motion Cars s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, AM Motion Cars ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, AM Motion Cars décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.

AM Motion Cars ne peut être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.`,
  },
  {
    title: "Protection des données personnelles",
    text: `Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, vous disposez des droits suivants concernant vos données personnelles :

— Droit d'accès : obtenir une copie des données vous concernant.
— Droit de rectification : corriger les données inexactes ou incomplètes.
— Droit à l'effacement : demander la suppression de vos données.
— Droit à la limitation : restreindre le traitement de vos données.
— Droit d'opposition : vous opposer au traitement de vos données.
— Droit à la portabilité : recevoir vos données dans un format structuré.

Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@ammotioncars.com. Nous nous engageons à vous répondre dans un délai de 30 jours. Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
  },
  {
    title: "Cookies",
    text: `Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de traçage ou publicitaire n'est déposé sans votre consentement explicite.

Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. La désactivation de certains cookies peut toutefois affecter le fonctionnement du site.

Pour toute question relative aux cookies, contactez-nous à contact@ammotioncars.com.`,
  },
  {
    title: "Liens hypertextes",
    text: `Le site peut contenir des liens vers des sites tiers. AM Motion Cars n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. L'existence d'un lien ne constitue pas une approbation du site lié.

Toute création d'un lien hypertexte pointant vers le site www.ammotioncars.com est soumise à l'autorisation préalable d'AM Motion Cars.`,
  },
  {
    title: "Droit applicable",
    text: `Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.`,
  },
  {
    title: "Crédits",
    content: [
      { label: "Conception & développement", value: "Wyatt — Développeur web freelance" },
      { label: "Photographies", value: "© AM Motion Cars — Tous droits réservés" },
      { label: "Framework", value: "Next.js — Vercel" },
    ],
  },
];

export default function MentionsLegales() {
  return (
    <div className="bg-[#050505] min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="mt-20 pt-40 pb-20 px-8 md:px-14 border-b border-white/8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
          Informations légales
        </p>
        <h1 className="text-4xl md:text-6xl font-light text-white leading-none tracking-tight">
          Mentions légales
        </h1>
        <p className="text-xs font-light text-white/30 mt-6 max-w-lg leading-relaxed">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l'économie numérique.
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
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-base font-light text-white">{section.title}</h2>
                </div>

                {/* Contenu */}
                <div className="lg:col-span-2">
                  {section.content && (
                    <div className="flex flex-col">
                      {section.content.map((item, j) => (
                        <div key={j} className="flex items-start gap-6 py-3 border-b border-white/6 last:border-b-0">
                          <span className="text-[10px] tracking-[0.12em] uppercase text-white/25 shrink-0 w-40 pt-[1px]">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
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
          Données extraites du RCS Paris — immatriculation 01 juillet 2025
        </p>
        <div className="flex items-center gap-8">
          <Link
            href="/pages/politique-confidentialite"
            className="text-[10px] tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[1px]"
          >
            Politique de confidentialité
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