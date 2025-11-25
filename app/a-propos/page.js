"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Apropos() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/a35xrs3.png"
            alt="À propos AM Motion"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </div>  

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide">
            À propos
          </h1>
          <p className="text-base md:text-xl mt-4 md:mt-8 font-light max-w-3xl opacity-90">
            L&apos;excellence automobile au service de vos moments d&apos;exception
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wide">
            L&apos;essence d&apos;AM Motion Cars
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
            Fondée à Paris, AM Motion Cars est spécialisée dans la location de véhicules de prestige 
            et la conciergerie automobile haut de gamme. Nous offrons bien plus qu&apos;un simple trajet : 
            une expérience élégante, sur mesure et inoubliable, pensée pour une clientèle exigeante.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-neutral-950 text-white py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4 tracking-wide">Élégance</h3>
            <p className="text-gray-500 text-base font-light leading-relaxed">
              Chaque détail compte, du design à la présentation
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4 tracking-wide">Discrétion</h3>
            <p className="text-gray-500 text-base font-light leading-relaxed">
              Des services confidentiels et raffinés pour chaque client
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4 tracking-wide">Excellence</h3>
            <p className="text-gray-500 text-base font-light leading-relaxed">
              De la préparation à l&apos;accueil, rien n&apos;est laissé au hasard
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wide">
            Notre expertise
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
            De la préparation méticuleuse des véhicules à la sélection rigoureuse des chauffeurs, 
            chaque étape reflète notre exigence de perfection. Mariages, événements, transferts VIP 
            ou collaborations corporate : nous garantissons un service fluide et irréprochable.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-neutral-950 text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wide">
            Notre vision
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
            Chez AM Motion Cars, nous croyons que le luxe se trouve dans l&apos;expérience, 
            pas seulement dans la voiture. Chaque déplacement devient une histoire, 
            chaque client une priorité. Notre ambition : redéfinir la mobilité haut de gamme, 
            avec passion et discrétion.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            Découvrez l&apos;expérience AM Motion Cars
          </h2>
          <p className="text-lg text-gray-500 mb-12 font-light">
            Réservez dès maintenant votre trajet ou contactez notre équipe pour un service sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-black font-light tracking-wide hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-white text-white font-light tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}