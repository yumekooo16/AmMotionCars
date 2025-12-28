export default function Head() {
  return (
    <>
      <title>Conciergerie automobile de luxe à Paris — AM Motion Cars</title>
      <meta name="description" content="AM Motion Cars, conciergerie automobile premium à Paris. Location de véhicules de prestige, transferts VIP et chauffeurs privés 24/7. Services sur mesure à Paris et en Île-de-France." />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <link rel="canonical" href="https://www.ammotioncars.com/" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Conciergerie automobile de luxe à Paris — AM Motion Cars" />
      <meta property="og:description" content="AM Motion Cars, conciergerie automobile premium à Paris. Location de véhicules de prestige, transferts VIP et chauffeurs privés 24/7." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/" />
      <meta property="og:image" content="https://www.ammotioncars.com/icon.png" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="AM Motion Cars" />

      {/* JSON-LD LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AM Motion Cars",
          "image": "https://www.ammotioncars.com/icon.png",
          "description": "Conciergerie automobile de luxe à Paris. Location de véhicules de prestige, transferts VIP et chauffeurs privés 24/7.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "58 Avenue de la Grande Armée",
            "addressLocality": "Paris",
            "postalCode": "75017",
            "addressCountry": "FR"
          },
          "telephone": "+33 7 75 77 53 89",
          "email": "contact@ammotioncars.com",
          "url": "https://www.ammotioncars.com",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "priceRange": "€€€",
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
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.8790",
            "longitude": "2.2890"
          }
        })}
      </script>
    </>
  );
}
