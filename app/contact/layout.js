import { defaultOgImage } from "../seo";

export const metadata = {
  title: "Contact — Conciergerie automobile Paris | AM Motion Cars",
  description:
    "Contactez AM Motion Cars pour vos besoins en conciergerie automobile à Paris. Devis gratuit sous 24h, WhatsApp disponible. Transferts VIP, mariages, corporate — service 24h/24 en Île-de-France.",
  keywords: [
    "contact conciergerie automobile Paris",
    "devis chauffeur privé Paris",
    "réserver voiture luxe Paris",
    "contact AM Motion Cars",
    "demande transfert VIP Paris",
    "WhatsApp chauffeur privé Paris",
    "devis location voiture prestige Paris",
    "contact transport événementiel Paris",
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
  alternates: { canonical: "https://www.ammotioncars.com/contact" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AM Motion Cars",
    title: "Contact | AM Motion Cars — Conciergerie automobile Paris",
    description:
      "Demandez un devis gratuit pour votre transfert VIP, mariage ou prestation corporate à Paris. Réponse sous 24h, WhatsApp disponible. Service 24h/24 en Île-de-France.",
    url: "https://www.ammotioncars.com/contact",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — AM Motion Cars Paris",
    description:
      "Devis gratuit sous 24h pour votre conciergerie automobile à Paris. Transferts VIP, mariages, corporate — WhatsApp disponible.",
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

export default function ContactLayout({ children }) {
  return children;
}