import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Acceuil/Header";
import Footer from "@/components/Acceuil/Footer";
import { TarifProvider } from "../context/TarifContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "AM Motion Cars",
  description: "Conciergerie automobile de luxe - événements, et plus",
  metadataBase: new URL('https://www.ammotioncars.com'),
  openGraph: {
    title: "AM Motion Cars",
    description: "Conciergerie automobile de luxe - événements, et plus",
    url: 'https://www.ammotioncars.com',
    siteName: 'AM Motion Cars',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'AM Motion Cars Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "AM Motion Cars",
    description: "Conciergerie automobile de luxe - événements, et plus",
    images: ['/icon.png'],
  },
};

export default function RootLayout({ children }) {
  // Schema.org JSON-LD pour Google
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AM Motion Cars",
    "url": "https://www.ammotioncars.com",
    "logo": "https://www.ammotioncars.com/icon.png",
    "description": "Conciergerie automobile de luxe - événements, et plus",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French"]
    }
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Schema.org pour Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgData)
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
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