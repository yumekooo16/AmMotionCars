export default function Head() {
  return (
    <>
      {/* Titre de la page */}
      <title>
        À propos — AM Motion Cars | Conciergerie et location de véhicules de prestige à Paris
      </title>

      {/* Meta description */}
      <meta
        name="description"
        content="Fondée à Paris, AM Motion Cars propose la location de voitures de prestige, transferts VIP et conciergerie automobile haut de gamme en Île‑de‑France. Contactez-nous pour une prestation sur mesure."
      />

      {/* Indexation Google */}
      <meta name="robots" content="index,follow" />

      {/* Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (partage sur réseaux sociaux) */}
      <meta property="og:title" content="À propos — AM Motion Cars | Conciergerie automobile de luxe à Paris" />
      <meta property="og:description" content="Location de véhicules de prestige, transferts VIP et conciergerie automobile haut de gamme à Paris et en Île-de-France." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/a-propos" />
      <meta property="og:image" content="https://www.ammotioncars.com/image/a35xrs3.webp" />


      {/* Structured Data JSON-LD pour LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({   
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AM Motion Cars",
          "image": "https://www.ammotioncars.com/image/a35xrs3.webp",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "58 Avenue de la Grande Armée, 75017 Paris",
            "addressLocality": "Paris",
            "addressRegion": "Île-de-France",
            "postalCode": "75000",
            "addressCountry": "FR"
          },
          "telephone": "+33 7 75 77 53 89",
          "url": "https://www.ammotioncars.com",
          "sameAs": [
            "https://www.facebook.com/share/17jjscVLeo/?mibextid=wwXIfr",
            "https://www.instagram.com/ammotioncars"
          ]
        })}
      </script>
    </>
  );
}
