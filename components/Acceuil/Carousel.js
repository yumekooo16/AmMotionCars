'use client';

import React, { useState } from "react";
import Link from "next/link";

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
      <div className="relative w-80 h-100 rounded-2xl overflow-hidden shadow-lg rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mb-6 object-cover" suppressHydrationWarning>
        <Link href={slides[current].href}>
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover transition-all duration-700 cursor-pointer hover:scale-105"
          />
        </Link>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-yellow-400 hover:text-black transition z-10"
          aria-label="Précédent"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-yellow-400 hover:text-black transition z-10"
          aria-label="Suivant"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-1 h-1 rounded-full ${idx === current ? "bg-yellow-400" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}