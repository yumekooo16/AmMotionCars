-- =============================================================================
-- Migration : activation du Row Level Security (RLS) sur toutes les tables
-- Projet : Voitures AmMotion (lbeukcxiarqorufgtlmi)
--
-- À appliquer dans Supabase Dashboard → SQL Editor → New query → Run
-- =============================================================================

-- ── Activer RLS sur toutes les tables du schéma public ──────────────────────

ALTER TABLE IF EXISTS public.vehicules ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.tarifs ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.nos_pack ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.vehicules_evenements ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.admins ENABLE ROW LEVEL SECURITY;

-- ── Supprimer d'éventuelles anciennes politiques permissives ────────────────

DROP POLICY IF EXISTS "Allow public read access" ON public.vehicules;
DROP POLICY IF EXISTS "Allow public read access" ON public.tarifs;
DROP POLICY IF EXISTS "Allow public read access" ON public.nos_pack;
DROP POLICY IF EXISTS "Allow public read access" ON public.vehicules_evenements;
DROP POLICY IF EXISTS "Allow public read access" ON public.reservations;
DROP POLICY IF EXISTS "Allow public read access" ON public.contacts;
DROP POLICY IF EXISTS "Allow public read access" ON public.admins;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.vehicules;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.tarifs;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.reservations;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.contacts;

-- ── Politiques : lecture publique des catalogues (données non sensibles) ────
-- Les routes API Next.js utilisent la clé service_role (bypass RLS).
-- Ces politiques permettent une lecture directe limitée si nécessaire.

CREATE POLICY "catalogue_lecture_publique"
  ON public.vehicules
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "catalogue_lecture_publique"
  ON public.tarifs
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "catalogue_lecture_publique"
  ON public.nos_pack
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "catalogue_lecture_publique"
  ON public.vehicules_evenements
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- ── Politiques : données sensibles — aucun accès public ─────────────────────
-- reservations, contacts, admins : pas de politique pour anon/authenticated.
-- Seule la clé service_role (routes API serveur) peut y accéder.

-- ── Storage : sécuriser le bucket tarifs-images ─────────────────────────────
-- Lecture publique des images (affichage site), écriture réservée au service.

DROP POLICY IF EXISTS "Images publiques en lecture" ON storage.objects;
DROP POLICY IF EXISTS "Upload réservé au service" ON storage.objects;

CREATE POLICY "Images publiques en lecture"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'tarifs-images');

-- Pas de politique INSERT/UPDATE/DELETE pour anon sur storage.objects :
-- seul service_role (admin API) peut modifier les fichiers.
