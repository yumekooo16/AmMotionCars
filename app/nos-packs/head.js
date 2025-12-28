export default function Head() {
  return (
    <>
      <title>Nos Packs — AM Motion Cars | Solutions premium pour événements et transferts</title>
      <meta
        name="description"
        content="Découvrez les packs exclusifs de AM Motion Cars pour vos événements, transferts VIP et locations de véhicules de prestige à Paris."
      />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:title" content="Nos Packs — AM Motion Cars | Solutions premium pour événements et transferts" />
      <meta property="og:description" content="Découvrez les packs exclusifs de AM Motion Cars pour vos événements, transferts VIP et locations de véhicules de prestige à Paris." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/packs" />
      <meta property="og:image" content="https://www.ammotioncars.com/image/Voitures_de_luxe_sous_ciel_couvert.webp" />
      <meta property="og:locale" content="fr_FR" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Packs AM Motion Cars",
          "provider": {
            "@type": "LocalBusiness",
            "name": "AM Motion Cars",
            "url": "https://www.ammotioncars.com/"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Paris et Île-de-France"
          },
          "description": "Packs exclusifs pour événements, transferts VIP et locations de véhicules de prestige à Paris."
        })}
      </script>
    </>
  );
}
