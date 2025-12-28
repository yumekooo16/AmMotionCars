// ✅ Server Component (pas de 'use client')

export const metadata = {
  // Title optimisé (55-60 caractères)
  title: "Tarifs Conciergerie Automobile Paris | AM Motion Cars",
  
  // Description premium (150-160 caractères)
  description: "Découvrez nos tarifs de conciergerie automobile de luxe à Paris. Location de véhicules premium avec chauffeur : Mercedes, Rolls Royce, BMW. Service 24/7 en Île-de-France.",
  
  // Keywords (pour certains moteurs de recherche)
  keywords: [
    "tarifs conciergerie automobile Paris",
    "prix location voiture luxe Paris",
    "chauffeur privé Paris tarifs",
    "Mercedes avec chauffeur Paris prix",
    "Rolls Royce location Paris tarifs",
    "transfert VIP Paris prix",
    "conciergerie automobile Île-de-France",
    "pack chauffeur privé Paris"
  ],

  // Auteur et propriétaire
  authors: [{ name: "AM Motion Cars" }],
  creator: "AM Motion Cars",
  publisher: "AM Motion Cars",

  // Robots et indexation
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

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ammotioncars.com/tarifs",
    siteName: "AM Motion Cars",
    title: "Tarifs & Packs - Conciergerie Automobile Paris",
    description: "Location de véhicules de luxe avec chauffeur à Paris et en Île-de-France. Mercedes, Rolls Royce, BMW. Service premium 24/7.",
    images: [
      {
        url: "/image/interieur_g43.webp",
        width: 1200,
        height: 630,
        alt: "Conciergerie automobile de luxe Paris - Intérieur Mercedes Classe G",
        type: "image/webp",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@ammotioncars", // Adapter à votre compte Twitter
    creator: "@ammotioncars",
    title: "Tarifs Conciergerie Automobile Paris | AM Motion Cars",
    description: "Location de véhicules de luxe avec chauffeur à Paris. Mercedes, Rolls Royce, BMW. Service premium 24/7.",
    images: ["/image/interieur_g43.webp"],
  },

  // URL canonique
  alternates: {
    canonical: "https://www.ammotioncars.com/tarifs",
  },

  // Autres métadonnées
  category: "Conciergerie automobile",
  
  // Verification Google Search Console (optionnel)
  // verification: {
  //   google: "votre-code-verification-google",
  //   yandex: "votre-code-verification-yandex",
  //   bing: "votre-code-verification-bing",
  // },
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