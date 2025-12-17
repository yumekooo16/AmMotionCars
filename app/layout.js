import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Acceuil/Header";
import Footer from "@/components/Acceuil/Footer";
import { TarifProvider } from "../context/TarifContext";

// ✅ Optimisation des fonts avec display: 'swap' et preload
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // ✅ Améliore FCP et LCP
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['Courier New', 'monospace'],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: "AM Motion Cars",
  description: "Conciergerie automobile de luxe - événements, et plus",
  
  // ✅ Métadonnées SEO supplémentaires
  keywords: "conciergerie automobile, voiture de luxe, événements, Mercedes, Audi, BMW, Porsche",
  authors: [{ name: "AM Motion Cars" }],
  
  // ✅ Open Graph pour partage social
  openGraph: {
    title: "AM Motion Cars",
    description: "Conciergerie automobile de luxe",
    type: "website",
    locale: "fr_FR",
  },
  
  // ✅ Optimisation mobile
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // ✅ Theme color
  themeColor: "#171717",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* ✅ Preconnect vers Supabase pour réduire la latence */}
        <link 
          rel="preconnect" 
          href="https://lbeukcxiarqorufgtlmi.supabase.co" 
          crossOrigin="anonymous"
        />
        <link 
          rel="dns-prefetch" 
          href="https://lbeukcxiarqorufgtlmi.supabase.co" 
        />
        
        {/* ✅ Preconnect vers les CDN de fonts Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        
        <TarifProvider>
          <main>
            {children}
          </main>
        </TarifProvider>
        
        <Footer />
      </body>
    </html>
  );
}