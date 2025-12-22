/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation des images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lbeukcxiarqorufgtlmi.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Qualités configurées pour optimiser la taille et la performance
    qualities: [75, 85],
    // Formats optimisés
    formats: ['image/avif', 'image/webp'],
    // Dimensions par défaut pour éviter layout shift
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression et minification
  compress: true,

  // Optimisation du build
  productionBrowserSourceMaps: false,

  // Serveur externe packages
  serverExternalPackages: ['bcrypt'],

  // Headers pour cache optimal
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },

  // Redirects et rewrites
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
