# 🚀 Guide d'Optimisation des Performances - AM Motion Cars

## Optimisations Déjà Appliquées ✅

### 1. Configuration Next.js (`next.config.mjs`)
- ✅ **Image optimization** : AVIF, WebP, qualités [75, 85]
- ✅ **Compression** : SWC minify activé
- ✅ **Source maps** : Désactivées en production
- ✅ **Headers de cache** : Images immutables (1 an), pages (1h)
- ✅ **External packages** : Optimisation du tree-shaking (bcrypt)

### 2. Composants (`app/page.js`, `app/services/page.js`)
- ✅ **Dynamic imports** : Lazy loading avec fallbacks pour:
  - ServicePremium
  - Evenement
  - FlottePrestige
  - Carousel
  - Services (Audiovisuel, Evenements, VIP)

### 3. CSS Globaux (`app/globals.css`)
- ✅ **Suppression des redondances** : @media prefers-color-scheme consolidée
- ✅ **Nettoyage** : Suppression des imports inutiles
- ✅ **Minification** : Tailwind CSS avec PurgeCSS

### 4. Fonts (`app/layout.js`)
- ✅ **Font optimization** : display: 'swap', preload: true
- ✅ **Preconnect** : Vers Google Fonts et Supabase
- ✅ **DNS prefetch** : Pour réduire la latence

## Recommandations Supplémentaires 🎯

### Étape 1 : Code-Splitting Avancé
```javascript
// Aller plus loin avec le dynamic import
import dynamic from 'next/dynamic';

// Charger UNIQUEMENT quand visible (intersection observer)
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingPlaceholder />,
  ssr: false  // Ne pas le rendre côté serveur si lourd
});
```

### Étape 2 : Optimisation des API Routes
```javascript
// Dans app/api/[route]/route.js
export const revalidate = 3600; // Revalidation en background après 1h
export const maxDuration = 60; // Max 60s pour les fonctions serverless
```

### Étape 3 : Réduction du JavaScript Non-Utilisé
**Audit recommandé :**
- Vérifier les dépendances inutiles (`npm ls`)
- Utiliser `@next/bundle-analyzer` : 
  ```bash
  ANALYZE=true npm run build
  ```
- Identifier les modules lourds (lodash, moment.js, etc.)

### Étape 4 : Optimisation des Requêtes API
- Ajouter du **caching côté client** avec React Query ou SWR
- Implémenter du **request batching**
- Ajouter des **timeouts** (déjà en place dans evenement.js)

### Étape 5 : Web Vitals
**Metrics à monitorer :**
- **LCP** (Largest Contentful Paint) : < 2.5s
- **FID** (First Input Delay) : < 100ms  
- **CLS** (Cumulative Layout Shift) : < 0.1

Ajouter dans `app/layout.js`:
```javascript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Dépendances à Vérifier

### Potentiellement Lourd
- `@material-tailwind/react` : Vérifier si vraiment utilisé
- `bcrypt` : OK (crypto essential)
- `nodemailer` : OK (backend only)
- `@supabase/*` : Essentiels, bien optimisés

### Bundle Size Actuel (Estimation)
- Avant optimisation : ~223 KiB (JavaScript inutilisé)
- Après optimisation : ~100-120 KiB (estimation)
- **Gain attendu : 45-50%**

## Tests de Performance

### 1. Build Analysis
```bash
ANALYZE=true npm run build
```

### 2. Lighthouse
- Utiliser Chrome DevTools > Lighthouse
- Cible : Score de 90+ en Performance

### 3. Web Vitals Réels
```bash
npm install web-vitals
```

## Checklist Finale ✓

- [ ] Nettoyer le cache du navigateur
- [ ] Relancer `npm run dev`
- [ ] Tester les pages critiques
- [ ] Vérifier Lighthouse pour chaque page
- [ ] Monitorer les Core Web Vitals en production
- [ ] Identifier les bottlenecks avec bundle analyzer
- [ ] Supprimer les dépendances inutilisées
- [ ] Implémenter le caching côté client pour les API

## KPIs à Suivre

| Métrique | Cible | Actuel |
|----------|-------|--------|
| Lighthouse Performance | 90+ | 57 |
| LCP | <2.5s | À vérifier |
| FID | <100ms | À vérifier |
| CLS | <0.1 | À vérifier |
| JS Bundle Size | <100 KiB | ~223 KiB |

---

**Dernière mise à jour** : 22 Décembre 2025
**Prochaine audit recommandée** : Après 3 mois d'optimisations
