'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  { href: "/tarifs#mercedes", src: "/image/prixclassg63amg.webp", alt: "Mercedes G63 AMG" },
  { href: "/tarifs#mercedes", src: "/image/prixamggt.webp", alt: "Mercedes AMG GT" },
  { href: "/tarifs#porsche", src: "/image/prixporshe911.webp", alt: "Porsche 911" },
  { href: "/tarifs#porsche", src: "/image/prixporshecayennes.webp", alt: "Porsche Cayenne" },
  { href: "/tarifs#bmw", src: "/image/prixm2compet.webp", alt: "BMW M2 Competition" },
  { href: "/tarifs#audi", src: "/image/prixrs6perf.webp", alt: "Audi RS6" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="w-full flex flex-col items-center py-5" suppressHydrationWarning>
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mb-6" suppressHydrationWarning>
        <Link href={slides[current].href}>
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
              priority={current === 0}
            />
          </div>
        </Link>
        
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-300 z-10"
          aria-label="Précédent"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-300 z-10"
          aria-label="Suivant"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="flex gap-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white w-8" : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Aller à la slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}