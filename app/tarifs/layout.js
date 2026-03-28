import { defaultOgImage } from "../seo";

export const metadata = {
  title: "Notre flotte & tarifs — Location voiture luxe Paris avec chauffeur",
  description:
    "Découvrez notre flotte de véhicules de prestige et nos tarifs à Paris. Mercedes, Audi RS6, Porsche, BMW avec chauffeur privé. Devis gratuit, service 24h/24 en Île-de-France.",
  keywords: [
    "tarifs conciergerie automobile Paris",
    "prix location voiture luxe Paris",
    "chauffeur privé Paris tarifs",
    "Mercedes avec chauffeur Paris prix",
    "Audi RS6 location Paris",
    "transfert VIP Paris prix",
    "conciergerie automobile Île-de-France",
    "location voiture prestige Paris tarifs",
    "chauffeur privé aéroport CDG prix",
    "mise à disposition véhicule luxe Paris",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ammotioncars.com/tarifs",
    siteName: "AM Motion Cars",
    title: "Notre flotte & tarifs | AM Motion Cars Paris",
    description:
      "Flotte de véhicules de prestige avec chauffeur privé à Paris. Mercedes, Audi RS6, Porsche, BMW. Tarifs transparents, devis gratuit, service 24h/24.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ammotioncars",
    creator: "@ammotioncars",
    title: "Notre flotte & tarifs — AM Motion Cars Paris",
    description:
      "Location voiture luxe avec chauffeur à Paris. Mercedes, Audi RS6, Porsche, BMW. Tarifs transparents, service 24h/24.",
    images: [defaultOgImage.url],
  },
  alternates: {
    canonical: "https://www.ammotioncars.com/tarifs",
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

export default function TarifsLayout({ children }) {
  return children;
}