'use client';

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Evenements() {
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
      className={`w-full flex flex-col items-center py-12 md:py-16 px-4 md:px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="w-full flex justify-center mb-6">
        <Image
          src="/image/amggtcevent.webp"
          alt="Mercedes amg gtc pour decrire les Événement AM Motion"
          width={800}
          height={600}
          className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-3">Événements</h2>
      <p className="text-sm md:text-base lg:text-lg text-center text-white font-light max-w-2xl">Parfait pour vos événements privés et professionnels (mariages, anniversaires, etc.)</p>
    </section>
  );
}
