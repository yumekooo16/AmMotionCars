import { Inter, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Acceuil/Header";
import Footer from "@/components/Acceuil/Footer";
import { TarifProvider } from "../context/TarifContext";
import { defaultOgImage, siteUrl } from "./seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: {
    default: "AM Motion Cars | Conciergerie automobile de luxe a Paris",
    template: "%s | AM Motion Cars",
  },
  description: "Conciergerie automobile de luxe a Paris : transferts VIP, chauffeurs prives et services sur mesure 24/7.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AM Motion Cars | Conciergerie automobile de luxe a Paris",
    description: "Transferts VIP, location de vehicules de prestige et chauffeurs prives a Paris et en Ile-de-France.",
    url: siteUrl,
    siteName: "AM Motion Cars",
    images: [defaultOgImage],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Motion Cars | Conciergerie automobile de luxe a Paris",
    description: "Transferts VIP, location de vehicules de prestige et chauffeurs prives 24/7.",
    images: [defaultOgImage.url],
  },
};

export default function RootLayout({ children }) {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AM Motion Cars",
    url: siteUrl,
    logo: `${siteUrl}${defaultOgImage.url}`,
    description: "Conciergerie automobile de luxe - événements, et plus",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["French"],
    },
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${cormorant.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <TarifProvider>
          {children}
        </TarifProvider>
        <Footer />
      </body>
    </html>
  );
}