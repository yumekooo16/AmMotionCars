'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UpdateTarifForm from "@/components/Admin/UpdateTarifForm";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Vérifier si l'admin est déjà connecté au chargement
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/login", { method: "GET" });
        if (res.ok) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        // Non authentifié
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Supprime les espaces avant et après
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
        credentials: "include", // Envoie les cookies
      });

      const data = await res.json();

      if (res.ok) {
        setIsAuthenticated(true);
        setEmail("");
        setPassword("");
      } else {
        setError(data.error || "Erreur de connexion");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Erreur réseau. Réessayez plus tard.");
    }
  };

  // Gestionnaire de déconnexion
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
      setIsAuthenticated(false);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" suppressHydrationWarning>
      <div className="absolute inset-0" suppressHydrationWarning>
        <Image
          src="/image/interieur g43.png"
          alt="Intérieur véhicule"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16" suppressHydrationWarning>
        {isAuthenticated ? (
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            {/* Bouton de déconnexion */}
            <div className="flex justify-end">
              <button
                onClick={handleLogout}
                className="mt-15   px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition"
              >
                Se déconnecter
              </button>
            </div>

            {/* Formulaire de mise à jour du tarif */}
            <div className="flex justify-center">
              <UpdateTarifForm />
            </div>

            {/* Section info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white text-center">
              <p className="text-sm text-gray-300">
                ✅ Vous êtes connecté en tant qu'administrateur
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center text-white" suppressHydrationWarning>
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">Admin Login</h1>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white/30 hover:bg-white/50 text-white font-semibold py-3 rounded-xl transition"
              >
                Se connecter
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
