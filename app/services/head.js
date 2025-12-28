export default function Head() {
  return (
    <>
      <title>Services — AM Motion Cars | Conciergerie automobile de luxe à Paris</title>
      <meta
        name="description"
        content="AM Motion Cars propose des services de conciergerie automobile de luxe : transferts VIP, chauffeurs privés, location de véhicules de prestige à Paris."
      />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:title" content="Services — AM Motion Cars | Conciergerie automobile de luxe à Paris" />
      <meta property="og:description" content="AM Motion Cars propose des services de conciergerie automobile de luxe : transferts VIP, chauffeurs privés, location de véhicules de prestige à Paris." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/services" />
      <meta property="og:image" content="https://www.ammotioncars.com/image/Voitures_de_luxe_sous_ciel_couvert.webp" />
      <meta property="og:locale" content="fr_FR" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Services AM Motion Cars",
          "provider": {
            "@type": "LocalBusiness",
            "name": "AM Motion Cars",
            "url": "https://www.ammotioncars.com/"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Paris et Île-de-France"
          },
          "description": "Transferts VIP, chauffeurs privés, location de véhicules de prestige à Paris."
        })}
      </script>
    </>
  );
}
