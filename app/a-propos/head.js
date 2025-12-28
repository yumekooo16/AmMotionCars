export default function Head() {
  return (
    <>
      {/* Titre de la page */}
      <title>
        À propos — AM Motion Cars, conciergerie automobile de luxe Paris
      </title>

      {/* Meta description */}
      <meta
        name="description"
        content="AM Motion Cars, conciergerie automobile de luxe fondée à Paris. Découvrez notre histoire, nos valeurs d'excellence et notre engagement envers le service premium."
      />

      {/* Indexation Google */}
      <meta name="robots" content="index,follow" />

      {/* Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <link rel="canonical" href="https://www.ammotioncars.com/a-propos" />

      {/* Open Graph (partage sur réseaux sociaux) */}
      <meta property="og:title" content="À propos — AM Motion Cars | Conciergerie automobile de luxe à Paris" />
      <meta property="og:description" content="Location de véhicules de prestige, transferts VIP et conciergerie automobile haut de gamme à Paris et en Île-de-France." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ammotioncars.com/a-propos" />
      <meta property="og:image" content="https://www.ammotioncars.com/image/a35xrs3.webp" />
      <meta property="og:site_name" content="AM Motion Cars" />
      <meta property="og:locale" content="fr_FR" />

      {/* Structured Data JSON-LD pour AboutPage */}
      <script type="application/ld+json">
        {JSON.stringify({   
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "AM Motion Cars",
            "description": "Conciergerie automobile de luxe à Paris",
            "foundingLocation": {
              "@type": "City",
              "name": "Paris"
            },
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
            "sameAs": [
              "https://www.facebook.com/share/17jjscVLeo/?mibextid=wwXIfr",
              "https://www.instagram.com/ammotioncars"
            ]
          }
        })}
      </script>
    </>
  );
}
