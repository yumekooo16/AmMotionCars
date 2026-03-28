import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { defaultOgImage } from "../seo";

export const metadata = {
  title: "Services de conciergerie automobile Paris",
  description:
    "Decouvrez nos services de conciergerie automobile Paris: transferts VIP, chauffeur prive et location voiture premium Paris.",
  keywords: [
    "services conciergerie automobile Paris",
    "transfert VIP Paris",
    "chauffeur prive Paris",
    "location voiture premium Paris",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AM Motion Cars",
    title: "Services premium | AM Motion Cars",
    description: "Services de conciergerie automobile et location voiture luxe Paris.",
    url: "/services",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services premium | AM Motion Cars",
    description: "Transferts VIP, chauffeur prive et services de conciergerie automobile a Paris.",
    images: [defaultOgImage.url],
  },
};

const Audiovisuel = dynamic(() => import("@/components/Nosservices/audiovisuel"), {
  loading: () => <div className="h-screen bg-[#050505]" />,
  ssr: true,
});

const Evenement = dynamic(() => import("@/components/Nosservices/evenements"), {
  loading: () => <div className="h-screen bg-[#050505]" />,
  ssr: true,
});

const VIP = dynamic(() => import("@/components/Nosservices/VIP"), {
  loading: () => <div className="h-screen bg-[#050505]" />,
  ssr: true,
});

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Conciergerie automobile",
    name: "Services AM Motion Cars",
    areaServed: "Paris et Ile-de-France",
    provider: {
      "@type": "Organization",
      name: "AM Motion Cars",
      url: "https://www.ammotioncars.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services premium",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transferts VIP" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chauffeur prive" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mise a disposition evenementielle" } },
      ],
    },
  };

  return (
    <div className="bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* ── SEO caché ─────────────────────────────────────── */}
      <div className="sr-only">
        <h2>Services de conciergerie automobile à Paris</h2>
        <p>
          AM Motion Cars propose une gamme complète de services automobiles haut de gamme
          à Paris et en Île-de-France. Location de voitures de luxe avec chauffeur privé,
          transferts VIP vers CDG, Orly, Le Bourget, mises à disposition pour événements,
          mariages, séminaires corporate et tournages audiovisuels. Chauffeurs formés aux
          standards du luxe, véhicules Mercedes, Audi, BMW. Disponibles 24h/24, 7j/7.
          Conciergerie automobile Paris, transfert VIP Paris, chauffeur privé Paris.
        </p>
      </div>

      {/* ── HERO — même logique que la home ──────────────── */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/Voitures_de_luxe_sous_ciel_couvert.webp"
            alt="Services conciergerie automobile Paris — AM Motion Cars"
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
              Paris · Île-de-France · 24h/24
            </p>
            <h1 className="text-[11vw] md:text-[8vw] lg:text-[6.5vw] font-light leading-none tracking-tight text-white">
              Nos services
            </h1>
          </div>
          <Link
            href="/contact"
            className="btn-primary self-start md:self-auto shrink-0 text-[11px] tracking-[0.2em] uppercase"
          >
            Réserver
          </Link>
        </div>
      </section>

      {/* ── 4 services en grille — aperçu rapide ─────────── */}
      <section className="border-t border-white/8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              num: "01",
              title: "Transferts VIP",
              desc: "CDG, Orly, Le Bourget, gares TGV. Ponctualité garantie, 24h/24.",
            },
            {
              num: "02",
              title: "Mise à disposition",
              desc: "Chauffeur dédié à l'heure ou à la journée, pour tous vos déplacements.",
            },
            {
              num: "03",
              title: "Événements & mariages",
              desc: "Logistique complète, navettes invités, coordination sur mesure.",
            },
            {
              num: "04",
              title: "Tournages & audiovisuel",
              desc: "Véhicules et chauffeurs pour productions, plateaux et équipes créatives.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="px-8 py-12 border-b lg:border-b-0 lg:border-r border-white/8 last:border-r-0 flex flex-col gap-5"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-light">
                {s.num}
              </span>
              <div>
                <h2 className="text-base font-light text-white mb-2">{s.title}</h2>
                <p className="text-xs font-light leading-relaxed text-white/40">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPOSANTS SERVICES ───────────────────────────── */}
      <Evenement />
      <VIP />
      <Audiovisuel />

      {/* ── 3 POINTS FORTS — remplace le mur de texte SEO ── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-20">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Pourquoi AM Motion Cars
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-14">
            L'excellence à chaque prestation.
          </h2>

          <div className="flex flex-col gap-0 border-t border-white/8">
            {[
              {
                title: "Chauffeurs formés aux standards du luxe",
                desc: "Discrétion, ponctualité et parfaite connaissance de Paris et de l'Île-de-France.",
              },
              {
                title: "Flotte entretenue et préparée",
                desc: "Mercedes, Audi, BMW — chaque véhicule inspecté et configuré avant chaque mission.",
              },
              {
                title: "Disponibilité 24h/24, 7j/7",
                desc: "Un interlocuteur unique, joignable à tout moment, pour les missions ponctuelles comme récurrentes.",
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

      {/* ── CTA FINAL — Nos packs ─────────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
            Prochaine étape
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] mb-10">
            Découvrez nos packs,{" "}
            <span className="text-white/30">pensés pour chaque occasion.</span>
          </h2>
          <div className="flex items-center gap-5">
            <Link
              href="/nos-packs"
              className="btn-primary text-[11px] tracking-[0.2em] uppercase"
            >
              Voir nos packs
            </Link>
            <Link
              href="/contact"
              className="text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px]"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}