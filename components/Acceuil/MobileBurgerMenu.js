'use client';
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BurgerButton({ open, setOpen }) {
  return (
    <button
      className="block lg:hidden z-30 w-10 h-10 flex flex-col justify-center items-center border border-white/15 bg-black/60"
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={open}
      aria-controls="mobile-drawer"
      onClick={() => setOpen(!open)}
      type="button"
    >
      <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
      <span className={`block w-5 h-[1px] bg-white my-[4px] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
      <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
    </button>
  );
}

function NavLink({ href, children, onClick, isMobile = false }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isMobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`w-full py-4 px-6 text-[11px] font-light tracking-[1em] uppercase border-b border-white/8 transition-colors
          ${isActive ? "text-white" : "text-white/45 hover:text-white"}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-[11px] font-light tracking-[1em] uppercase transition-colors duration-200
        ${isActive ? "text-white" : "text-white/50 hover:text-white"}
        after:absolute after:bottom-7 after:left-7 after:right-7 after:h-px
        after:bg-white after:scale-x-0 after:origin-center
        after:transition-transform after:duration-300
        ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`}
    >
      {children}
    </Link>
  );
}

function Drawer({ open, setOpen, children }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (open) {
      drawerRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleEsc = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, setOpen]);

  return (
    <div
      id="drawer-overlay"
      className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target.id === "drawer-overlay") setOpen(false); }}
      aria-hidden={!open}
      suppressHydrationWarning
    >
      {/* Panneau centré verticalement */}
      <aside
  id="mobile-drawer"
  role="dialog"
  aria-modal="true"
  ref={drawerRef}
  tabIndex={0}
  className={`absolute right-0 w-64 z-50 flex flex-col
    transition-all duration-300 ease-in-out
    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
  style={{
    top: "465%",
    transform: open ? "translateY(-50%)" : "translateY(-50%) scale(0.95)",
    background: "rgba(6,6,8,0.97)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
  }}
  suppressHydrationWarning
  onClick={(e) => e.stopPropagation()}
>
        {/* Liens */}
        <nav className="flex flex-col pt-2">
          {children}
        </nav>

        {/* CTA réserver */}
        <div className="p-5 border-t border-white/8">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="w-full flex items-center justify-center py-3 bg-white text-[#060608] text-[10px] tracking-[0.25em] uppercase font-light hover:bg-white/90 transition-colors"
          >
            Réserver
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default function MobileBurgerMenu() {
  const [open, setOpen] = useState(false);
  const handleNav = () => setOpen(false);

  return (
    <>
      <BurgerButton open={open} setOpen={setOpen} />

      <Drawer open={open} setOpen={setOpen}>
        <NavLink href="/"           onClick={handleNav} isMobile>Accueil</NavLink>
        <NavLink href="/services"   onClick={handleNav} isMobile>Services</NavLink>
        <NavLink href="/nos-packs"  onClick={handleNav} isMobile>Nos packs</NavLink>
        <NavLink href="/tarifs"     onClick={handleNav} isMobile>Notre Flotte</NavLink>
        <NavLink href="/evenements" onClick={handleNav} isMobile>Événements</NavLink>
        <NavLink href="/a-propos"   onClick={handleNav} isMobile>À propos</NavLink>
        <NavLink href="/contact"    onClick={handleNav} isMobile>Contact</NavLink>
      </Drawer>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-1">
        <NavLink href="/">Accueil</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/nos-packs">Nos packs</NavLink>
        <NavLink href="/tarifs">Notre Flotte</NavLink>
        <NavLink href="/evenements">Événements</NavLink>
        <NavLink href="/a-propos">À propos</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </>
  );
} 