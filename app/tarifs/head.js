export default function Head() {
  return (
    <>
      <title>Tarifs conciergerie automobile Paris — Location voiture de luxe</title>
      <meta
        name="description"
        content="Tarifs transparents pour location voiture de prestige, transferts VIP et chauffeur privé à Paris. Devis gratuit en ligne. Services sur mesure Île-de-France."
      />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <link rel="canonical" href="https://www.ammotioncars.com/tarifs" />

      {/* Open Graph */}
      <meta property="og:title" content="Tarifs conciergerie automobile Paris — Location voiture de luxe" />
      <meta property="og:description" content="Tarifs transparents pour location voiture de prestige, transferts VIP et chauffeur privé. Services sur mesure Île-de-France." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/tarifs" />
      <meta property="og:image" content="https://www.ammotioncars.com/image/Voitures_de_luxe_sous_ciel_couvert.webp" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="AM Motion Cars" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AM Motion Cars",
          "makesOffer": [
            {
              "@type": "Offer",
              "name": "Location avec chauffeur (4h minimum)",
              "priceCurrency": "EUR",
              "priceRange": "€€€",
              "description": "Location voiture prestige avec chauffeur privé professionnel",
              "availability": "https://schema.org/InStock",
              "areaServed": {
                "@type": "City",
                "name": "Paris"
              }
            },
            {
              "@type": "Offer",
              "name": "Transfert aéroport",
              "priceCurrency": "EUR",
              "priceRange": "€€",
              "description": "Transfert CDG/Orly/Le Bourget avec chauffeur",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Chauffeur privé horaire",
              "priceCurrency": "EUR",
              "priceRange": "€€€",
              "description": "Service de chauffeur privé à l'heure pour déplacements professionnels",
              "availability": "https://schema.org/InStock"
            }
          ]
        })}
      </script>
    </>
  );
}
