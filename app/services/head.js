export default function Head() {
  return (
    <>
      <title>Services de conciergerie automobile à Paris — AM Motion Cars</title>
      <meta
        name="description"
        content="Services premium : location de véhicules de prestige, transferts VIP, chauffeurs privés, événements et mariages à Paris. Conciergerie automobile 24/7 en Île-de-France."
      />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <link rel="canonical" href="https://www.ammotioncars.com/services" />

      {/* Open Graph */}
      <meta property="og:title" content="Services de conciergerie automobile à Paris — AM Motion Cars" />
      <meta property="og:description" content="Services premium : location de véhicules de prestige, transferts VIP, chauffeurs privés, événements et mariages à Paris." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/services" />
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
            "name": "Services de conciergerie automobile",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location de véhicules de prestige",
                  "description": "Location de voitures haut de gamme avec chauffeur privé à Paris et Île-de-France",
                  "areaServed": {
                    "@type": "City",
                    "name": "Paris"
                  },
                  "availableLanguage": "fr"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transferts VIP",
                  "description": "Transferts aéroports, gares, événements avec chauffeur professionnel",
                  "areaServed": {
                    "@type": "City",
                    "name": "Paris"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Chauffeur privé",
                  "description": "Chauffeur privé 24/7 pour déplacements et missions professionnelles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Services événements",
                  "description": "Location avec chauffeur pour mariages, séminaires, événements corporate"
                }
              }
            ]
          }
        })}
      </script>
    </>
  );
}
