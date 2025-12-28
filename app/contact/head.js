export default function Head() {
  return (
    <>
      {/* Titre de la page */}
      <title>Contact — AM Motion Cars | Conciergerie automobile de luxe à Paris</title>

      {/* Meta description */}
      <meta
        name="description"
        content="Contactez AM Motion Cars pour vos locations de véhicules de prestige et services de conciergerie automobile haut de gamme à Paris et en Île-de-France."
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

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AM Motion Cars",
          "image": "https://www.ammotioncars.com/image/Voitures_de_luxe_sous_ciel_couvert.webp",
          "description": "Conciergerie automobile de luxe à Paris pour événements, transferts VIP et location de véhicules de prestige.",
          "url": "https://www.ammotioncars.com/contact",
          "telephone": "+33 7 75 77 53 89",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "58 Avenue de la Grande Armée",
            "addressLocality": "Paris",
            "addressRegion": "Île-de-France",
            "postalCode": "75017",
            "addressCountry": "FR"
          },
          "openingHours": ["Mo-Su 00:00-23:59"],
          "sameAs": [
            "https://www.facebook.com/share/17jjscVLeo/?mibextid=wwXIfr",
            "https://www.instagram.com/ammotioncars"
          ]
        })}
      </script>
    </>
  );
}
