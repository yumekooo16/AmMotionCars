export default function Head() {
  return (
    <>
      {/* Titre de la page */}
      <title>Contact — AM Motion Cars | Réservations conciergerie automobile Paris</title>

      {/* Meta description */}
      <meta
        name="description"
        content="Contactez AM Motion Cars pour réservations, devis et services. Disponibles 24/7. Chauffeur privé, transferts VIP, location voiture luxe à Paris."
      />

      {/* Mots-clés SEO */}
      <meta
        name="keywords"
        content="AM Motion Cars, conciergerie automobile, location voiture de luxe, chauffeur privé, Paris, Île-de-France"
      />

      {/* Robots */}
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:title" content="Contact — AM Motion Cars | Conciergerie automobile de luxe à Paris" />
      <meta property="og:description" content="Contactez AM Motion Cars pour vos locations de véhicules de prestige et services de conciergerie automobile haut de gamme à Paris et en Île-de-France." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/contact" />
      <meta property="og:image" content="https://www.ammotioncars.com/image/Voitures_de_luxe_sous_ciel_couvert.webp" />
      <meta property="og:locale" content="fr_FR" />

      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <link rel="canonical" href="https://www.ammotioncars.com/contact" />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "AM Motion Cars",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+33 7 75 77 53 89",
                "email": "contact@ammotioncars.com",
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Paris"
                  },
                  {
                    "@type": "State",
                    "name": "Île-de-France"
                  }
                ],
                "availableLanguage": "French"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "58 Avenue de la Grande Armée",
              "addressLocality": "Paris",
              "postalCode": "75017",
              "addressCountry": "FR"
            },
            "openingHours": "Mo-Su 00:00-23:59"
          }
        })}
      </script>
    </>
  );
}
