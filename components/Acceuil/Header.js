'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import MobileBurgerMenu from "@/components/Acceuil/MobileBurgerMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="w-screen h-16 flex items-center justify-between px-8 md:px-14 fixed top-0 z-30 border-b transition-colors duration-300 "
      style={{
        background: scrolled ? "rgba(5,5,5,0.97)" : "rgba(5,5,5,0.5)",
        backdropFilter: "blur(20px)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
      }}
      suppressHydrationWarning
    >
      <Link
        href="/"
        className="opacity-85 hover:opacity-50 transition-opacity"
        aria-label="AM Motion Cars — Accueil"
      >
        <NextImage
          src="/image/NMotion.png"
          alt="AM Motion Cars"
          width={100}
          height={100}
        />
      </Link>

      <MobileBurgerMenu />
    </header>
  );
}