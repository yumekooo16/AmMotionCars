'use client';

import React, { useRef, useEffect, useState } from "react";

export default function FlottePrestige() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  return (
    <section
      ref={sectionRef}
      suppressHydrationWarning
      className={`w-full flex flex-col items-center py-16 px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <img
        src="/image/audixglcammotion2.webp"
        alt="Flotte de prestige"
        className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mb-6 object-cover"
      />
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white -400 mb-4">Flotte de prestige</h2>
      <p className="text-xl md:text-2xl text-center text-white font-light">véhicule haut de gamme</p>
    </section>
  );
}
