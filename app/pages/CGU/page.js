import React from "react";
import Link from "next/link";
import { defaultOgImage } from "@/app/seo";

export const metadata = {
  title: "Conditions générales d'utilisation — AM Motion Cars",
  description:
    "Conditions générales d'utilisation du site AM Motion Cars : accès, responsabilités, propriété intellectuelle et droit applicable.",
  keywords: [
    "CGU AM Motion Cars",
    "conditions générales utilisation site",
    "droits et responsabilités utilisateurs",
  ],
  alternates: { canonical: "/pages/CGU" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AM Motion Cars",
    title: "CGU | AM Motion Cars",
    description: "Conditions générales d'utilisation du site AM Motion Cars.",
    url: "/pages/CGU",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CGU | AM Motion Cars",
    description: "Conditions générales d'utilisation du site AM Motion Cars.",
    images: [defaultOgImage.url],
  },
};

const sections = [
  {
    num: "01",
    title: "Objet",
    text: `Les présentes CGU ont pour objet de définir les modalités et conditions d'utilisation du site www.ammotioncars.com ainsi que les droits et obligations des parties dans ce cadre.

Le site permet aux utilisateurs de découvrir les services de location de véhicules de luxe avec chauffeur proposés par AM MOTION CARS. En accédant au site, vous acceptez sans réserve les présentes conditions.`,
  },
  {
    num: "02",
    title: "Accès au site",
    text: `Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les frais nécessaires pour l'accès aux services (matériel informatique, connexion Internet, etc.) sont à la charge de l'utilisateur.

AM MOTION CARS met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au site, mais n'est tenue à aucune obligation d'y parvenir. L'éditeur ne peut être tenu responsable en cas d'indisponibilité technique pour quelque raison que ce soit.`,
  },
  {
    num: "03",
    title: "Propriété intellectuelle",
    text: `L'ensemble du contenu présent sur le site (structure, textes, logos, images, vidéos, photographies) est la propriété exclusive d'AM MOTION CARS ou de ses partenaires et est protégé par les lois françaises et internationales relatives au droit d'auteur.

Toutes les photographies présentes sur ce site appartiennent exclusivement à AM MOTION CARS. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l'accord exprès par écrit d'AM MOTION CARS.

Cette reproduction constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.`,
  },
  {
    num: "04",
    title: "Données personnelles",
    text: `AM MOTION CARS s'engage à respecter la réglementation en vigueur applicable au traitement de données à caractère personnel et, en particulier, le règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (RGPD).

Les données collectées via le site sont traitées dans le respect de la confidentialité. Pour plus d'informations sur la collecte et le traitement de vos données personnelles, consultez notre politique de confidentialité.`,
    link: { label: "Consulter notre politique de confidentialité", href: "/pages/politique-confidentialite" },
  },
  {
    num: "05",
    title: "Responsabilité",
    text: `AM MOTION CARS ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site, résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.

Les informations contenues sur le site sont aussi précises que possible. Toutefois, AM MOTION CARS ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers.`,
  },
  {
    num: "06",
    title: "Liens hypertextes",
    text: `Le site peut contenir des liens hypertextes vers des sites tiers. AM MOTION CARS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur accessibilité.

La création de liens hypertextes pointant vers le site www.ammotioncars.com est soumise à l'accord préalable et exprès d'AM MOTION CARS.`,
  },
  {
    num: "07",
    title: "Cookies",
    text: `Le site peut utiliser des cookies afin d'améliorer l'expérience utilisateur et à des fins statistiques. Aucun cookie publicitaire ou de tracking tiers n'est utilisé.

L'utilisateur peut désactiver l'utilisation de cookies en configurant les paramètres de son navigateur. La désactivation peut entraîner un fonctionnement dégradé de certaines fonctionnalités.`,
  },
  {
    num: "08",
    title: "Modification des CGU",
    text: `AM MOTION CARS se réserve le droit de modifier à tout moment les présentes CGU. L'utilisateur s'engage à les consulter régulièrement.

Les CGU applicables sont celles en vigueur à la date de connexion et d'utilisation du site par l'utilisateur.`,
  },
  {
    num: "09",
    title: "Droit applicable & juridiction",
    text: `Les présentes CGU sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.`,
  },
  {
    num: "10",
    title: "Contact",
    content: [
      { label: "Courrier", value: "AM MOTION CARS — 58-60 Avenue de la Grande Armée, 75017 Paris" },
      { label: "Email", value: "contact@ammotioncars.com", href: "mailto:contact@ammotioncars.com" },
      { label: "Téléphone", value: "+33 7 75 77 53 89" },
    ],
  },
];

export default function CGU() {
  return (
    <div className="bg-[#050505] min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="mt-20 pt-40 pb-20 px-8 md:px-14 border-b border-white/8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
          Conditions d'utilisation
        </p>
        <h1 className="text-4xl md:text-6xl font-light text-white leading-none tracking-tight">
          CGU
        </h1>
        <p className="text-xs font-light text-white/30 mt-6 max-w-lg leading-relaxed">
          Les présentes conditions générales d'utilisation régissent l'accès et
          l'utilisation du site www.ammotioncars.com. En accédant au site, vous
          les acceptez sans réserve.
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
                  {section.text && (
                    <div className="flex flex-col gap-4">
                      {section.text.split("\n\n").map((para, j) => (
                        <p key={j} className="text-xs font-light text-white/45 leading-relaxed">
                          {para}
                        </p>
                      ))}
                      {section.link && (
                        <Link
                          href={section.link.href}
                          className="text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[1px] w-fit mt-2"
                        >
                          {section.link.label} →
                        </Link>
                      )}
                    </div>
                  )}
                  {section.content && (
                    <div className="flex flex-col">
                      {section.content.map((item, j) => (
                        <div key={j} className="flex items-start gap-6 py-3 border-b border-white/6 last:border-b-0">
                          <span className="text-[10px] tracking-[0.12em] uppercase text-white/25 shrink-0 w-24 pt-[1px]">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              href={item.href}
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FOOTER NAV ───────────────────────────────────── */}
      <section className="px-8 md:px-14 py-16 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-[9px] tracking-[0.2em] uppercase text-white/20">
          CGU en vigueur au 6 décembre 2025
        </p>
        <div className="flex items-center gap-8">
          <Link
            href="/pages/mentions-legales"
            className="text-[10px] tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[1px]"
          >
            Mentions légales
          </Link>
          <Link
            href="/pages/politique-confidentialite"
            className="text-[10px] tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[1px]"
          >
            Confidentialité
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