'use client';
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BurgerButton({ open, setOpen }) {
  return (
    <button
      className="block lg:hidden z-30 w-10 h-10 flex flex-col justify-center items-center"
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={open}
      aria-controls="mobile-drawer"
      onClick={() => setOpen(!open)}
      type="button"
    >
      <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
      <span className={`block w-7 h-1 bg-white rounded my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
      <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
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
        className={`w-full text-center py-4 text-lg font-medium transition-colors duration-200 
          ${isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
      >
        {children}
      </Link>
    );
  }

  // Version desktop
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-base font-light tracking-wide transition-colors duration-300
        ${isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"}
        after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
        after:bg-yellow-400 after:scale-x-0 after:origin-center 
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
    
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, setOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "drawer-overlay") setOpen(false);
  };

  return (
    <div
      id="drawer-overlay"
      className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      onClick={handleOverlayClick}
      tabIndex={-1}
      aria-hidden={!open}
      suppressHydrationWarning
    >
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        ref={drawerRef}
        tabIndex={0}
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-black shadow-xl z-30 flex flex-col pt-16 
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        suppressHydrationWarning
      >
        {children}
      </aside>
    </div>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const handleNav = () => setOpen(false);

  return (
    <>
      {/* Menu burger pour mobile/tablette */}
      <BurgerButton open={open} setOpen={setOpen} />
      
      {/* Drawer mobile/tablette */}
      <Drawer open={open} setOpen={setOpen}>
        <nav className="flex flex-col gap-2">
          <NavLink href="/" onClick={handleNav} isMobile>Accueil</NavLink>
          <NavLink href="/services" onClick={handleNav} isMobile>Services</NavLink> 
          <NavLink href="/nos-packs" onClick={handleNav} isMobile>Tarifs</NavLink>
          <NavLink href="/a-propos" onClick={handleNav} isMobile>À propos</NavLink>
          <NavLink href="/contact" onClick={handleNav} isMobile>Contact</NavLink>
        </nav>
      </Drawer>

      {/* Menu horizontal pour desktop */}
      <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
        <NavLink href="/">Accueil</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/nos-packs">Tarifs</NavLink>
        <NavLink href="/a-propos">À propos</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </>
  );
}