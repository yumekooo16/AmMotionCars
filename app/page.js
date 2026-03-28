import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import HomeFaqAccordion from "@/components/Acceuil/HomeFaqAccordion";
import { defaultOgImage } from "./seo";

export const metadata = {
  title: "Conciergerie automobile de luxe a Paris",
  description:
    "Location voiture luxe Paris, conciergerie automobile Paris et location voiture premium Paris avec chauffeur prive 24/7.",
  keywords: [
    "location voiture luxe Paris",
    "conciergerie automobile Paris",
    "location voiture premium Paris",
    "chauffeur prive Paris",
    "transfert VIP Paris",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AM Motion Cars | Conciergerie automobile de luxe a Paris",
    description:
      "Location voiture luxe Paris, transferts VIP et conciergerie automobile premium.",
    url: "/",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Motion Cars | Conciergerie automobile de luxe a Paris",
    description:
      "Location voiture luxe Paris et conciergerie automobile premium avec chauffeur prive.",
    images: [defaultOgImage.url],
  },
};

const ServicePremium = dynamic(() => import("@/components/Acceuil/ServicePremium"), {
  loading: () => <div className="h-screen bg-[#050505]" />,
  ssr: true,
});

const Evenement = dynamic(() => import("@/components/Acceuil/Evenement"), {
  loading: () => <div className="h-screen bg-[#050505]" />,
  ssr: true,
});

const FlottePrestige = dynamic(() => import("@/components/Acceuil/FlottePrestige"), {
  loading: () => <div className="h-screen bg-[#050505]" />,
  ssr: true,
});

const BestSellers = dynamic(() => import("@/components/Acceuil/Bestsellers"), {
  loading: () => <div className="h-96 bg-[#050505]" />,
  ssr: true,
});

export default function Page() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AM Motion Cars - Conciergerie automobile de luxe a Paris",
    description:
      "Location voiture luxe Paris, conciergerie automobile Paris et location voiture premium Paris.",
    about: [
      { "@type": "Service", name: "Conciergerie automobile Paris", areaServed: "Paris et Ile-de-France" },
      { "@type": "Service", name: "Location voiture luxe Paris", areaServed: "Paris" },
      { "@type": "Service", name: "Location voiture premium Paris", areaServed: "Paris" },
    ],
  };

  return (
    <div className="bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* ── SEO caché ─────────────────────────────────────────── */}
      <div className="sr-only">
        <h2>Pourquoi choisir AM Motion Cars</h2>
        <p>
          AM Motion Cars est la conciergerie automobile de luxe de référence à Paris.
          Spécialisée dans la location de véhicules de prestige et les transferts VIP,
          nous offrons des services automobiles sur mesure pour une clientèle exigeante.
          Notre flotte comprend des berlines haut de gamme, SUV de luxe et véhicules
          d'exception (Mercedes, Audi, BMW). Que vous cherchiez un chauffeur privé pour
          une réunion professionnelle, un transfert vers les aéroports parisiens (CDG, Orly),
          ou une location pour un événement, nous garantissons confort et élégance.
          Disponibles 24h/24, 7j/7. Location voiture luxe Paris, conciergerie automobile Paris,
          location voiture premium Paris avec chauffeur privé.
        </p>
      </div>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/ManM33.jpeg"
            alt="Conciergerie automobile de luxe Paris — AM Motion Cars"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dégradé bas uniquement — laisse la photo respirer */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
        </div>

        {/* Nom de marque — ancré en bas à gauche */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-14 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Paris · Île-de-France · 24h/24
            </p>
            <h1
              className="text-[11vw] md:text-[8vw] lg:text-[6.5vw] font-light leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
            >
              AM Motion Cars
            </h1>
          </div>
          <Link
            href="/tarifs"
            className="btn-primary self-start md:self-auto shrink-0 text-[11px] tracking-[0.2em] uppercase"
          >
            Catalogue
          </Link>
        </div>
      </section>

      {/* ── SERVICES — 3 colonnes ─────────────────────────────── */}
      <section className="border-t border-white/8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Location prestige",
              desc: "Mercedes, Audi, Porsche, BMW. Flotte entretenue aux standards les plus exigeants, préparée avant chaque prestation.",
              href: "/services",
            },
            {
              num: "02",
              title: "Transferts VIP",
              desc: "CDG, Orly, Le Bourget, gares TGV. Chauffeur privé, ponctualité garantie, disponibilité 24h/24.",
              href: "/services",
            },
            {
              num: "03",
              title: "Conciergerie",
              desc: "Mariages, galas, séminaires. Organisation complète et coordination logistique pour chaque occasion.",
              href: "/services",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="px-10 py-14 border-b md:border-b-0 md:border-r border-white/8 last:border-r-0 flex flex-col gap-6"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 font-light">
                {s.num}
              </span>
              <div>
                <h2 className="text-xl font-light text-white mb-3">{s.title}</h2>
                <p className="text-sm font-light leading-relaxed text-white/45">{s.desc}</p>
              </div>
              <Link
                href={s.href}
                className="mt-auto text-[10px] tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-[2px] w-fit"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE PREMIUM ────────────────────────────────────── */}
      <ServicePremium />

      {/* ── ÉVÉNEMENTS ─────────────────────────────────────────── */}
      <Evenement />

      {/* ── FLOTTE ─────────────────────────────────────────────── */}
      <FlottePrestige />

      {/* ── BEST SELLERS ───────────────────────────────────────── */}
      <BestSellers />

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3 text-center">
            Questions fréquentes
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-16">
            Ce que vous souhaitez savoir
          </h2>
          <HomeFaqAccordion />
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────────── */}
      <section className="border-t border-white/8 px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
            Prendre contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] mb-10">
            Une prestation sur mesure,{" "}
            <span className="text-white/35">quand vous le décidez.</span>
          </h2>
          <Link href="/contact" className="btn-primary text-[11px] tracking-[0.2em] uppercase">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}