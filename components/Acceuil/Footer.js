import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-t border-gray-800 mb-12 pt-8 text-center text-gray-500 text-sm"/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Logo et Plan du site */}
          <div>
            <h3 className="text-3xl font-bold mb-5">Am Motion Cars</h3>
            
            <h4 className="text-lg font-semibold mb-4">Plan du site</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-yellow-400 transition">Accueil</Link></li>
              <li><Link href="/pages/services" className="hover:text-yellow-400 transition">Services</Link></li>
              <li><Link href="/pages/Apropos" className="hover:text-yellow-400 transition">À Propos</Link></li>
              <li><Link href="/pages/Contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-yellow-400 transition">Transfert Aéroport</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Mise à disposition</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Événement</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Voiturier</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Trajets longue distance</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Service entreprise</Link></li>
            </ul>
          </div>

          {/* Pages légales et Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pages légales</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/pages/mentions-legales" className="hover:text-yellow-400 transition">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/pages/politique-confidentialite" className="hover:text-yellow-400 transition">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-8">Nos réseaux</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://www.instagram.com/ammotioncars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>Réalisé par <span className="text-white font-semibold">Wyatt</span> - Développeur web freelance</p>
          <p className="mt-2">© 2025 Am Motion Cars. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}