'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Mercedes from "@/components/Tarifs/vehicules";

export default function Tarifs() {
  return (
    <>
      {/* Section Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/interieur g43.png"
            alt="Intérieur véhicule"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide mb-4">
              Nos Pack & Tarifs indicatifs
            </h1>
            <p className="text-base md:text-2xl mt-4 mb-6">
              Chaque trajet <br className="hidden md:block" /> mérite son expérience de <br />
              <span className="text-[#5f6364] font-semibold">luxe</span>.
            </p>
          </div>
        </div>
      </section>

      <Mercedes />
    </>
  );
}
