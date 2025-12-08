import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Acceuil/Header";
import Footer from "@/components/Acceuil/Footer";
import { TarifProvider } from "../context/TarifContext"; // 🔑 importer le provider

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
};

if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Extra attributes from the server')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {/* 🔑 Envelopper tout avec le TarifProvider */}
        <TarifProvider>
          {children}
        </TarifProvider>
        <Footer />
      </body>
    </html>
  );
}
