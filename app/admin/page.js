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

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/login", { method: "GET" });
        if (res.ok) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
        credentials: "include",
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

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
      setIsAuthenticated(false);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-x-hidden" suppressHydrationWarning>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10" suppressHydrationWarning>
        <Image
          src="/image/interieur g43.webp"
          alt="Intérieur véhicule"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-8 sm:py-12" suppressHydrationWarning>
        {isAuthenticated ? (
          <div className="w-full max-w-4xl space-y-4 sm:space-y-6">
            {/* Header avec bouton déconnexion */}
            <div className="mt-10 flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="text-white">
                <h1 className="text-xl sm:text-2xl font-semibold">Dashboard Admin</h1>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">✅ Connecté</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 sm:px-6 sm:py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-colors whitespace-nowrap"
              >
                Déconnexion
              </button>
            </div>

            {/* Formulaire principal */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <UpdateTarifForm />
            </div>
          </div>
        ) : (
          // Formulaire de connexion
          <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 w-full max-w-md" suppressHydrationWarning>
            <div className="text-center text-white mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Admin Login</h1>
              <p className="text-xs sm:text-sm text-gray-300">Connectez-vous pour gérer le site</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="block text-white text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="admin@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-white text-sm font-medium">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white/30 hover:bg-white/50 text-white font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
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