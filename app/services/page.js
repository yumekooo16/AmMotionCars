'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Audiovisuel from "@/components/Nosservices/audiovisuel";
import Evenement from "@/components/Nosservices/evenements";
import VIP from "@/components/Nosservices/VIP";



export default function Services() {
  return (
    <>
      {/* Section Hero */}
      <section className=" w-full h-screen overflow-hidden" suppressHydrationWarning>
        {/* Background: use next/image for better responsive handling */}
        <div className="absolute inset-0 w-full h-full" suppressHydrationWarning>
          <Image
            src="/image/Voitures de luxe sous ciel couvert.webp"
            alt="Services AM Motion"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16" suppressHydrationWarning>
          <div className="text-center text-white max-w-3xl" suppressHydrationWarning>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide mb-4">
              Nos Services
            </h1>
            <p className="text-base md:text-xl lg:text-2xl mt-4 mb-6">
              Des prestations sur
              <br className="hidden md:block" />
              mesure pour tous vos besoins
            </p>
          </div>
        </div>
      </section>
      <Evenement />
      <VIP />
      <Audiovisuel />
      
      <section className="relative w-full bg-black text-white flex flex-col justify-center items-center py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6 md:mb-8">
            Vivez l&apos;expérience <span className="text-[#5f6364]">AM Motion</span>
            <br />
            élégance, prestige et confort à chaque trajet.
          </h2>

        </div>
        <Link href="/tarifs">
          <button className="inline-block bg-[#5f6364] text-gray-900 font-semibold rounded-xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base transition mt-6">
            Découvrir nos Offres →
          </button>
        </Link>
      </section>
      
    </>
    
  );
}