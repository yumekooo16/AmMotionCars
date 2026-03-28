'use client';
import Link from "next/link";

const vehicles = [
  {
    src: "/image/ManA45S.jpeg",
    alt: "Mercedes A45 S",
    name: "Mercedes A45 S",
    desc: "La compacte radicale dans sa version la plus extrême. Performance pure, design affûté, sensations sans filtre.",
    href: "/tarifs#mercedes",
  },
  {
    src: "/image/ManRS3.jpeg",
    alt: "Audi RS3",
    name: "Audi RS3",
    desc: "La compacte sportive dans sa forme la plus aboutie. Discrétion apparente, tempérament explosif.",
    href: "/tarifs#audi",
  },
  {
    src: "/image/Man8R.jpeg",
    alt: "Volkswagen Golf 8R",
    name: "Volkswagen Golf 8R",
    desc: "La compacte iconique dans sa version la plus radicale. Sobriété assumée, performance redoutable.",
    href: "/tarifs#Volkswagen",
  },
];

export default function BestSellers() {
  return (
    <section className="border-t border-white/8">
      {/* En-tête */}
      <div className="px-8 md:px-14 pt-20 pb-12 flex items-end justify-between">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Sélection
          </p>
          <h2 className="text-3xl md:text-4xl mb-3 font-light text-white">
            Nos véhicules phares
          </h2>
        </div>
        <Link
          href="/tarifs"
          className="hidden md:inline-flex text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/10 hover:border-white/40 pb-[2px]"
        >
          Voir tous les tarifs
        </Link>
      </div>

      {/* Grille 3 colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/8">
        {vehicles.map((v, i) => (
          <Link
            key={i}
            href={v.href}
            className="group relative border-b md:border-b-0 md:border-r border-white/8 last:border-r-0 flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-[#0c0c0d]" style={{ aspectRatio: "4/3" }}>
              <img
                src={v.src}
                alt={v.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Overlay leger au hover */}
              <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/20 transition-colors duration-500" />
            </div>

            {/* Infos */}
            <div className="px-8 py-8 flex flex-col gap-3 flex-1">
              <h3 className="text-base font-light text-white tracking-wide">
                {v.name}
              </h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">
                {v.desc}
              </p>
              <span className="mt-auto pt-4 text-[10px] tracking-[0.25em] uppercase text-white/30 group-hover:text-white/70 transition-colors border-b border-white/10 group-hover:border-white/30 pb-[2px] w-fit">
                Voir les tarifs
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA mobile */}
      <div className="md:hidden px-8 py-8 border-t border-white/8 items-center justify-center ">
        <div className="flex items-center justify-center">
          <Link
            href="/tarifs"
            className="text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/10 hover:border-white/30 pb-[2px]"
          >
            Voir tous les tarifs
          </Link>
        </div>
      </div>
    </section>
  );
}