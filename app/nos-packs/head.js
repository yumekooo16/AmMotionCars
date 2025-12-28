export default function Head() {
  return (
    <>
      <title>Offres et packs mariage — Conciergerie automobile luxe Paris</title>
      <meta
        name="description"
        content="Packs mariage et événements : location voiture de prestige, transferts invités, chauffeur. Services pour mariages, séminaires, galas à Paris. Offres flexibles."
      />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <link rel="canonical" href="https://www.ammotioncars.com/nos-packs" />

      {/* Open Graph */}
      <meta property="og:title" content="Offres et packs mariage — Conciergerie automobile luxe Paris" />
      <meta property="og:description" content="Packs mariage et événements : location voiture de prestige, transferts invités, chauffeur pour mariages, séminaires, galas." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/nos-packs" />
      <meta property="og:image" content="https://www.ammotioncars.com/image/Voitures_de_luxe_sous_ciel_couvert.webp" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="AM Motion Cars" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AM Motion Cars",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Packs événements",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Pack Mariage",
                  "description": "Package complet pour mariages : transfert mariés, navettes invités, photos avec véhicules de prestige",
                  "category": "Services événements"
                },
                "priceCurrency": "EUR",
                "priceRange": "€€€",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Pack Corporate",
                  "description": "Services dédiés aux séminaires et événements professionnels",
                  "category": "Services corporate"
                },
                "priceCurrency": "EUR",
                "priceRange": "€€€",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Pack VIP Aéroport",
                  "description": "Transferts premium vers aéroports parisiens avec service haut de gamme",
                  "category": "Transferts VIP"
                },
                "priceCurrency": "EUR",
                "priceRange": "€€",
                "availability": "https://schema.org/InStock"
              }
            ]
          }
        })}
      </script>
    </>
  );
}
