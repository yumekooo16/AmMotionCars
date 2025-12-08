'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Mercedes from "@/components/Tarifs/vehicules";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Tarifs() {
  const [flyerUrl, setFlyerUrl] = useState("");

  useEffect(() => {
    async function fetchFlyer() {
      const { data } = await supabase.from("tarifs").select("flyer_url").single();
      if (data?.flyer_url) setFlyerUrl(data.flyer_url);
    }
    fetchFlyer();
  }, []);

  return (
    <>
      {/* Section Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/interieur g43.webp"
            alt="Intérieur véhicule"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide mb-4">
              Nos Pack & Tarifs indicatifs
            </h1>
            <p className="text-base md:text-2xl mt-4 mb-6">
              Chaque trajet <br className="hidden md:block" /> mérite son expérience de <br />
              <span className="text-[#5f6364] font-semibold">luxe</span>.
            </p>
            <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-gray-300 font-light">
              Pour toute réservation, veuillez cliquer sur le véhicule souhaité
            </p>

            
          </div>
        </div>
      </section>

      <Mercedes />
    </>
  );
}
