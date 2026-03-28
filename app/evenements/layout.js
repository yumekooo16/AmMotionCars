import { defaultOgImage } from "../seo";

export const metadata = {
  title: "Événements & mariages — Location voiture luxe avec chauffeur Paris",
  description:
    "AM Motion Cars organise vos mariages, galas et événements corporate à Paris. Location voiture luxe avec chauffeur privé, navettes invités, coordination logistique complète. Devis gratuit 24h/24.",
  keywords: [
    "mariage voiture luxe Paris",
    "transport événementiel premium Paris",
    "chauffeur privé événement Paris",
    "location voiture mariage Paris",
    "navette invités mariage Île-de-France",
    "conciergerie automobile événement Paris",
    "transport gala soirée privée Paris",
    "chauffeur mariage Mercedes Paris",
    "mise à disposition véhicule luxe événement",
    "transport corporate séminaire Paris",
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
  alternates: { canonical: "https://www.ammotioncars.com/evenements" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AM Motion Cars",
    title: "Événements & mariages | AM Motion Cars Paris",
    description:
      "Organisation de vos mariages, galas et événements corporate à Paris. Véhicules de prestige avec chauffeur privé, navettes invités, coordination logistique. Service 24h/24 en Île-de-France.",
    url: "https://www.ammotioncars.com/evenements",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Événements & mariages — AM Motion Cars Paris",
    description:
      "Mariages, galas, corporate — location voiture luxe avec chauffeur privé à Paris. Navettes invités, coordination complète, service 24h/24.",
    images: [defaultOgImage.url],
  },
  category: "Conciergerie automobile événementielle",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function EvenementsLayout({ children }) {
  return children;
}