export default function Head() {
  return (
    <>
      <title>Tarifs — AM Motion Cars | Services de conciergerie automobile de luxe</title>
      <meta
        name="description"
        content="Découvrez les tarifs de AM Motion Cars pour la location de véhicules de prestige, chauffeurs privés et transferts VIP à Paris et Île-de-France."
      />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:title" content="Tarifs — AM Motion Cars | Services de conciergerie automobile de luxe" />
      <meta property="og:description" content="Découvrez les tarifs de AM Motion Cars pour la location de véhicules de prestige, chauffeurs privés et transferts VIP à Paris et Île-de-France." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/tarifs" />
      <meta property="og:image" content="https://www.ammotioncars.com/image/Voitures_de_luxe_sous_ciel_couvert.webp" />
      <meta property="og:locale" content="fr_FR" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Tarifs AM Motion Cars",
          "provider": {
            "@type": "LocalBusiness",
            "name": "AM Motion Cars",
            "url": "https://www.ammotioncars.com/"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Paris et Île-de-France"
          },
          "description": "Tarifs pour la location de véhicules de prestige, chauffeurs privés et transferts VIP."
        })}
      </script>
    </>
  );
}
