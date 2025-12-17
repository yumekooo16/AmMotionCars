// ✅ Server Component (pas de 'use client')
export const metadata = {
  title: "Tarifs & Packages - AM Motion Cars",
  description: "Découvrez nos tarifs et packages pour vos déplacements de luxe. Services premium pour mariages, événements et transferts VIP.",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function TarifsLayout({ children }) {
  return children;
}