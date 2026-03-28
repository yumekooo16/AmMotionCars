import { defaultOgImage } from "../seo";

export const metadata = {
  title: "Packs mariage, corporate et événements — Conciergerie automobile Paris",
  description:
    "Découvrez nos packs sur mesure : Pack Mariage, Pack Corporate et Pack Événements. Location voiture luxe Paris avec chauffeur privé, coordination logistique et service premium 24h/24.",
  keywords: [
    "pack mariage voiture luxe Paris",
    "pack corporate chauffeur privé Paris",
    "packs conciergerie automobile Paris",
    "location voiture prestige événement Paris",
    "pack événement voiture luxe Île-de-France",
    "navette mariage chauffeur Paris",
    "mise à disposition véhicule luxe Paris",
  ],
  alternates: { canonical: "/nos-packs" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AM Motion Cars",
    title: "Packs mariage, corporate & événements | AM Motion Cars Paris",
    description:
      "Packs de conciergerie automobile sur mesure à Paris. Mariage, corporate, galas — véhicules de prestige, chauffeurs professionnels, service 24h/24.",
    url: "/nos-packs",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packs premium | AM Motion Cars Paris",
    description:
      "Pack Mariage, Pack Corporate, Pack Événements — conciergerie automobile premium à Paris avec chauffeur privé.",
    images: [defaultOgImage.url],
  },
};

export default function NosPacksLayout({ children }) {
  return children;
}