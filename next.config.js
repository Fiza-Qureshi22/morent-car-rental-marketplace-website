/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true, // React errors ko catch karega
    swcMinify: true, // JavaScript ko minify karega
    images: {
      domains: ['cdn.sanity.io'], // Sanity CDN ko allow karna
      minimumCacheTTL: 60, // Image caching ko optimize karega
    },
    webpack(config) {
      // Add .mjs extension to module resolution
      config.resolve.extensions.push('.mjs');
      return config;
    },
    experimental: {
      optimizeCss: true, // CSS ko optimize karega
      scrollRestoration: true, // Page reload ke baad scroll position restore karega
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
      ];
    },
  };
  