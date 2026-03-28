'use client';
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function Evenement() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => {
      const node = ref.current;
      if (!(node instanceof HTMLElement)) return;
      if (node.getBoundingClientRect().top < window.innerHeight - 80) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  return (
    <section
      ref={ref}
      suppressHydrationWarning
      className={`relative w-full overflow-hidden border-t border-white/8 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ height: "100svh" }}
    >
      <img
        src="/image/ManClassG.jpeg"
        alt="Événements de luxe — Mariages et galas Paris"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-14 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-3">
            Événements
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-3 leading-tight">
            Mariages, galas &amp; occasions spéciales
          </h2>
          <p className="text-sm font-light text-white/45 max-w-md leading-relaxed">
            Chaque événement mérite une logistique sans faille.
            Transferts, navettes, mise à disposition — orchestrés pour vous.
          </p>
        </div>
        <Link
          href="/evenements"
          className="btn-secondary self-start md:self-auto shrink-0 text-[11px] tracking-[0.2em] uppercase"
        >
          Nos packs événements
        </Link>
      </div>
    </section>
  );
}